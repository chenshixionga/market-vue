<template>
    <div :style="{ position:position,top: stickyTop + 'px', width:width }">
      <slot>
        <div>SimpleSticky</div>
      </slot>
    </div>
</template>

<script>
  export default {
    name: 'SimpleSticky',
    data () {
      return {
        test: '',
        position: '',
        width: undefined,
        height: undefined
      }
    },
    props: {
      stickyTop: {
        type: Number,
        default: 0
      },
      zIndex: {
        type: Number,
        default: 1
      }
    },
    mounted() {
      this.height = this.$el.getBoundingClientRect().height
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
      window.removeEventListener('scroll',this.handleScroll)
    },
    methods: {
      handleScroll() {
        this.width = this.$el.getBoundingClientRect().width
        let actualTop = this.$el.getBoundingClientRect().top
        console.log(actualTop)
        if(actualTop < this.stickyTop) {
          this.position = 'fixed'
          this.width = this.width + 'px'
          return
        }
        this.position = ''
        this.width = ''
        console.log('scroll')
      }
    }
  }
</script>

<!-- 组件一般不使用scoped,以便调用的时能改变样式 -->
<style>

</style>
