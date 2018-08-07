<template>
  <div>
    <div :class="className" :style="{ position:position,top: stickyTop + 'px', width:width}">
      <slot>
        <div>SimpleSticky</div>
      </slot>
    </div>
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
        height: undefined,
        active: false
      }
    },
    props: {
      stickyTop: {
        type: Number,
        default: 1
      },
      zIndex: {
        type: Number,
        default: 1
      },
     className: {
       type: String
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
        if(actualTop < this.stickyTop) {
          this.sticky()
          console.log('sticky')
          return
        }
        this.reset()
        console.log('no-sticky')
      },
      sticky() {
        if(this.active) {
          return
        }
        this.position = 'fixed'
        this.width = this.width + 'px'
        this.active = true
      },
      reset() {
        if(!this.active) {
          return
        }
        this.position = ''
        this.width = 'auto'
        this.active = false
      }
    }
  }
</script>

<!-- 组件一般不使用scoped,以便调用的时能改变样式 -->
<style>

</style>
