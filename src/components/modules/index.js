import echarts from './echarts-box.vue'

const moduleBox = {
  install: function (Vue) {
    Vue.component('echartsBox', echarts)
  }
}
export default moduleBox
