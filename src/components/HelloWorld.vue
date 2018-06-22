<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="removeToken">removeToken</el-button>
    <el-button type="primary" @click="getOrders">订单列表</el-button>
  </div>
</template>

<script>
import { marketList } from '@/api/login'
import { orderList } from '@/api/erpApi'
import { removeToken } from '@/utils/auth'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.getMarkets()
  },
  methods: {
    getMarkets() {
       marketList().then(res => {
         console.log(res)
       }).catch(err => {
         console.log(err)
       })
    },
    removeToken() {
       removeToken()
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
