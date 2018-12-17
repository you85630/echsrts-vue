<template>
  <div class="page">
    <echarts-box width="100%" height="400px" :value="barlist1"></echarts-box>
    <echarts-box width="100%" height="400px" :value="barlist2"></echarts-box>
  </div>
</template>

<script>
export default {
  data () {
    return {
      barlist1: {
        type: 'bar',
        title: '学校数',
        option: {
          title: ['二七区', '高新区', '管城区', '惠济区', '金水区', '经开区', '市直', '郑东新区', '中原区'],
          data: [9, 4, 4, 4, 5, 3, 49, 12, 12]
        }
      },

      barlist2: {
        type: 'bar',
        title: '学生数',
        option: {
          title: ['二七区', '高新区', '管城区', '惠济区', '金水区', '经开区', '市直', '郑东新区', '中原区'],
          data: [2810, 1878, 1154, 2133, 2306, 1369, 20422, 4002, 3020]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page{
  font-size: 14px;
}
</style>
