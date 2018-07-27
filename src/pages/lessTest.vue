<template>
  <div class="login">
    <span>home</span>
    <div class="header">
      <div class="test-nest"></div>
    </div>
    <div class="extends-test-operation"></div>
    <div class="border_use2" id="unit">tiantian</div>
    <a class="btn-bundle">链接</a>
  </div>
</template>

<script>

  export default {
    name: 'LessTest',
    data () {
      return {
        login:{
          user:'',
          password:''
        }
      }
    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  @width:300px;
  @color:#4F926F;
  @height:100px;
  @test-property: 100px;
  .header {
    @width:100px;
    width: @width;
    height: @height;
    background-color: @color;
    overflow:hidden;
    .test-letf(@test-property);
    .test-nest{
      width: @width/2;
      height: @height/2;
      background-color: red;
      margin-top: @height/4;
      .test-letf(@width/4);
      &:hover{ // & 父节点
        background-color: #61fff8;
      }
    }
  }
  .test-letf(@test-property: 100px){
    margin-left: @test-property;
  }
  .test-operation{
    .header;
    width: @width + 100;
    height: @height + @test-property;
    background-color: @color;
    margin-top: 10px;
  }
  .extends-test-operation{
    .test-operation;
    .box-shadow(2px, 5px);
  }
  /* @arguments 所有参数*/
  .box-shadow (@x: 0, @y: 0, @blur: 1px, @color: #000) {
    box-shadow: @arguments;
    -moz-box-shadow: @arguments;
    -webkit-box-shadow: @arguments;
  }

  // 匹配
  .border(top;@border_width:5px;@border_color:red){
    border-top:@border_width solid @border_color;
  }
  .border(bottom;@border_width:5px;@border_color:red){
    border-bottom:@border_width solid @border_color;
  }
  .border(left;@border_width:5px;@border_color:red){
    border-left:@border_width solid @border_color;
  }
  .border(right;@border_width:5px;@border_color:red){
    border-right:@border_width solid @border_color;
  }
  //如果想写通用的样式 可以在下面的代码中写 格式是固定的
  .border(@_;@border_width:5px;@border_color:red){
    border-color:yellow;
  }
  .border_use1 {
    //选择和if差不多 如果是left就调用上面对应的
    .border(left);
  }
  .border_use2 {
    //选择和if差不多 如果是right就调用上面对应的
    .border(right,30px);
    width: 100px;
    height: 100px;
    background-color: rgba(151, 126, 155, 0.22);
  }
  // 串联选择器中间没有空格作用于  同一元素
  #unit.border_use2{
    text-decoration: underline;
    width: ceil(10/3) * 100px;
  }

  // 命名空间
  #bundle {
    .button () {
      display: block;
      border: 1px solid black;
      background-color: grey;
      border-radius:5px;
      &:hover { background-color: white }
    }
    .tab {
      color: blue;
    }
    .citation {
      color: black;
    }
  }
  .btn-bundle {
    #bundle > .button;
    width: 60px;
    height: 30px;
    line-height: 30px;
  }

</style>
