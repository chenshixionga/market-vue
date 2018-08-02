<template>
  <div>
    <span style="background-color: #cce9ff">{{ msg }}</span>
    <div>数组结果：{{ resArr }}</div>
    <div>结果：{{ res }}</div>
  </div>
</template>

<script>
  export default {
    name: 'reqExp',
    data () {
      return {
        resArr: [],
        res: '',
        msg: '    1234-1223-33545    '
      }
    },
    created() {
      this.test()
    },
    methods:{
      test() {
        let reqExp = /(^\s+)|(\s+$)/g
       /* this.resArr = reqExp.exec(this.msg) // 正则方法
        this.res = reqExp.test(this.msg)*/
        this.resArr = this.msg.match(reqExp)
        this.msg = this.msg.replace(reqExp, function (res,$1,$2,offset,source) {
          console.log(arguments);
          return ''
        })
      }
    }
  }
</script>

<style scoped lang="less">

</style>
