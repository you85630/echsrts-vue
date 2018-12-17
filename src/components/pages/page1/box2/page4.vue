<template>
  <div class="page">
    <echarts-box width="100%" height="400px" :value="barlist"></echarts-box>
  </div>
</template>

<script>
export default {
  data () {
    return {
      barlist: {
        type: 'morebar3',
        option: {
          data: [
            ['product', '其他', '弱势', '优势'],
            ['二七区', 6, 1, 2],
            ['高新区', 2, 0, 2],
            ['管城区', 4, 0, 0],
            ['惠济区', 3, 0, 1],
            ['金水区', 3, 0, 2],
            ['经开区', 2, 0, 1],
            ['市直', 20, 18, 11],
            ['郑州航', 0, 1, 1]
          ]
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
