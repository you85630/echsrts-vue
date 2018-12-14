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
        title: '参与学校数情况',
        option: {
          title: ['二七区', '高新区', '管城区', '惠济区', '金水区', '经开区', '市直', '郑东新区', '郑州航空港区', '中牟县', '中原区', '总计'],
          data: [9, 4, 4, 4, 5, 3, 49, 12, 2, 16, 12, 120]
        }
      },
      barlist2: {
        type: 'bar',
        title: '参与学生数情况',
        option: {
          title: ['二七区', '高新区', '管城区', '惠济区', '金水区', '经开区', '市直', '郑东新区', '郑州航空港区', '中牟县', '中原区', '总计'],
          data: [4144, 2376, 1345, 2398, 415, 1396, 17310, 3360, 250, 129, 2497, 35620]
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
