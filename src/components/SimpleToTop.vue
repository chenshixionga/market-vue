<template>
  <transition name="fade">
    <div class="to-top-container" v-show="visible" @click="backToTop()">

    </div>
  </transition>
</template>

<script>
  export default {
    name: 'simpleToTop',
    data () {
      return {
        visible: false
      }
    },
    props:{
      visibleTop:{
        type: Number,
        default: 500
      },
      backPosition:{
        type: Number,
        default: 50
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods:{
      handleScroll() {
        this.visible = window.pageYOffset > this.visibleTop
      },
      backToTop() {
        window.scrollTo(0,this.backPosition)
      }
    }
  }
</script>

<!-- 组件一般不使用scoped,以便调用的时能改变样式 -->
<style>
  .to-top-container{
    position: fixed;
    right: 50px;
    bottom: 50px;
    background-color: #3a8ee6;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
    animation: bounce .5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0
  }
  @keyframes bounce {
    0% {
      transform: scale(0);
      transform: rotate(90deg);
    }
    25% {
      transform: scale(0.25);
      transform: rotate(90deg);
    }
    50% {
      transform: scale(0.5);
      /*transform: rotate(90deg);*/
    }
    75% {
      transform: scale(0.75);
      /*transform: rotate(90deg);*/
    }
    100% {
      transform: scale(1);
      /*transform: rotate(360deg);*/
    }
  }
</style>
