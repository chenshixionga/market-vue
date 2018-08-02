<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="removeToken">退出</el-button>
    <el-button type="primary" @click="getOrders">订单列表</el-button>
    <el-button type="primary" @click="handleDownload">导出Excel</el-button>
    <el-button type="primary" @click="splitpaneDemo">区域大小改变</el-button>

    <div>日期时间格式：<span>{{date1}}</span><span style="margin-left: 30px">{{dateFormate}}</span></div>

    <upload-excel :on-success='handleSuccess' :before-upload="beforeUpload"></upload-excel>

    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column v-for='item
      of
      tableHeader' :prop="item" :label="item" :key='item'>
      </el-table-column>
    </el-table>
    <el-upload
      ref="uploadList"
      class="img-uploader"
      action="/adminApi/uploader/Asset/apiuploader"
      :multiple = true
      :headers="headers"
      list-type="picture-card"
      :file-list="imgs"
      :on-success="handleImgsSuccess"
      :before-upload="beforeUploadImg"
      :on-preview="handleImgsPreview"
      :on-remove="handleImgsRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogImgPreviewVisible" width="50%" append-to-body>
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
import { marketList } from '@/api/login'
import { orderList } from '@/api/erpApi'
import { removeToken } from '@/utils/auth'
import { formatDate, parseTime } from '@/utils'
import UploadExcel from '@/components/UploadExcel/index.vue'
import { setToken } from '@/utils/auth'
export default {
  name: 'HelloWorld',
  components: {
    UploadExcel
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      date: '',
      date1: '',
      dateFormate: '',
      imgs: [],
      headers: {
        'XX-Company-Sign': 'WcZKGXMQ6eYK+kVQrKzGrQ==',
        'XX-Device-Type': 'pc',
        'XX-Token': '0be1655e53a2b3e9efd9c6c9aa8aa1d14664f6144c86c3212e1438d098ae654b'
      },
      dialogImageUrl: '',
      dialogImgPreviewVisible: false,
      goodsFormLoading: false,
      goodsForm: { imgs: [] },
      list: [],
      filename: 'test',
      autoWidth: true,
      tableData: [],
      tableHeader: [],
      querySearch: { pageNo: 1, pageSize: 10, _filter_like_cityCode:'',
                  _filter_like_provinceCode:'',
                  _filter_like_addr: '',
                  _filter_like_name: ''}
    }
  },
  created() {
    this.initMethod()
  },
  methods: {
    initMethod() {
      this.date = new Date()

      this.date1 = formatDate(this.date, 'yyyy-MM-dd')

      this.dateFormate = formatDate(this.date, 'yyyy年MM月dd日 hh:mm:ss')
    },
    splitpaneDemo() {
       this.$router.push({ name: 'splitpane'})
    },
    removeToken() {
       removeToken()
       this.$router.push('/login')
    },
    getOrders(){
      orderList({ page_no: 1, page_size: 10 }).then(response => {
        console.log(response.data.data.list)
        this.list = response.data.data.list
      })
    },
    // excel导出
    handleDownload() {
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['订单号', '总价格', '供应商', '地址', '状态']
        const filterVal = ['order_name', 'amount_total', 'partner_name', 'receiving_street', 'state']
        const list = this.list
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth
        })
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    // excel导入
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1

      if (isLt1M) {
        return true
      }

      this.$message({
        message: 'Please do not upload files larger than 1m in size.',
        type: 'warning'
      })
      return false
    },
    handleSuccess({ results, header }) {
      this.tableData = results
      this.tableHeader = header
    },

    // 图片上传
    beforeUploadImg(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt4M = file.size / 1024 / 1024 < 4

      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG/PNG 格式!')
      }
      if (!isLt4M) {
        this.$message.error('上传图片大小不能超过 4MB!')
      }
      this.goodsForm.imgs.push('')
      return isJPG && isLt4M
    },
    handleImgsPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogImgPreviewVisible = true
    },
    handleImgsRemove(file, fileList) {
      this.imgs = fileList
      this.goodsForm.imgs = spliceItem(file.name, this.goodsForm.imgs)
    },
    handleImgsSuccess(res, file, fileList) {
      const index = fileList.indexOf(file)
      if (res.code === 1) {
        this.goodsForm.imgs[index] = res.data.filepath
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
