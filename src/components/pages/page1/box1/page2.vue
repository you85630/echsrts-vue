<template>
  <div class="page">
    1-1-2
    <echarts-box width="100%" height="400px" :value="barlist"></echarts-box>
  </div>
</template>

<script>
export default {
  data () {
    return {
      barlist: {
        type: 'bar',
        option: {
          title: ['金水区', '中原区', '经开区', '二七区', '高新区', '郑东新区', '管城区', '惠济区'],
          data: [52.44, 51.3, 50.58, 50.47, 50.24, 49.74, 48.16, 47.65]
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
