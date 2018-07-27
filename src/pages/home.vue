<template>
  <div>
    <gantt :tasks="tasks"></gantt>
  </div>
</template>

<script>
import Gantt from '@/components/Gantt.vue'
export default {
  name: 'home',
  components: {Gantt},
  data () {
    return {
      tasks: {
        data: [
          {id: 1, text: '任务1', start_date: '15-04-2017', duration: 3, progress: 0.6},
          {id: 2, text: '任务2', start_date: '16-04-2017', duration: 3, progress: 0.5}
        ],
        links: [
          {id: 1, source: 1, target: 2, type: '0'}
        ]
      },
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
