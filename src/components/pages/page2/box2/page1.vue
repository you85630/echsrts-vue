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
        title: '有效分析学校数',
        option: {
          title: ['金水区', '二七区', '郑东新区', '中原区', '管城区', '惠济区', '经开区'],
          data: [52, 50, 42, 34, 36, 31, 9]
        }
      },
      barlist2: {
        type: 'bar',
        title: '有效分析学生数',
        option: {
          title: ['金水区', '二七区', '郑东新区', '中原区', '管城区', '惠济区', '经开区'],
          data: [14167, 8739, 6330, 8786, 8102, 3108, 1484]
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
