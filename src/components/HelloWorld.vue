<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="removeToken">退出</el-button>
    <el-button type="primary" @click="getOrders">订单列表</el-button>
    <el-button type="primary" @click="getMarkets">市场列表</el-button>
    <div><span>{{date1}}</span></div>
    <div><span>{{dateFormate}}</span></div>
  </div>
</template>

<script>
import { marketList } from '@/api/login'
import { orderList } from '@/api/erpApi'
import { removeToken } from '@/utils/auth'
import { formatDate } from '@/utils/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      date: '',
      date1: '',
      dateFormate: '',
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
    getMarkets() {
       marketList(this.querySearch).then(res => {
         console.log(res)
       }).catch(err => {
         console.log(err)
       })
    },
    removeToken() {
       removeToken()
       this.$router.push('/login')
    },
    getOrders(){
      orderList({ page_no: 1, page_size: 10 }).then(response => {
        console.log(response.data.list)
      })
    }
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
