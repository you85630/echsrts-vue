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
        title: '评价学校数情况',
        option: {
          title: ['二七区', '非市区', '高新区', '管城区', '航空港区', '惠济区', '金水区', '经开区', '郑东新区', '中原区'],
          data: [55, 1, 18, 19, 8, 39, 63, 13, 25, 38]
        }
      },
      barlist2: {
        type: 'bar',
        title: '评价学生数情况',
        option: {
          title: ['二七区', '非市区', '高新区', '管城区', '航空港区', '惠济区', '金水区', '经开区', '郑东新区', '中原区'],
          data: [4828, 2339, 1492, 3181, 46, 1825, 9824, 594, 2502, 4989]
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
