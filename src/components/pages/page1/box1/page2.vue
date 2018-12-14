<template>
  <div class="page">
    <echarts-box width="100%" height="400px" :value="morebar"></echarts-box>
  </div>
</template>

<script>
export default {
  data () {
    return {
      morebar: {
        type: 'morebar',
        option: {
          data: [['product', '优质生源占比', '靠后生源占比'], ['高新区', 0.3183, 0.144], ['市直', 0.3076, 0.1972], ['中原区', 0.2471, 0.2004], ['郑东新区', 0.2352, 0.2293], ['管城区', 0.1982, 0.3018], ['二七区', 0.1903, 0.2611], ['金水区', 0.1678, 0.1907], ['经开区', 0.1476, 0.2683], ['惠济区', 0.0537, 0.8499]]
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
