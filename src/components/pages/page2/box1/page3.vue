<template>
  <div class="page">
    <Row>
      <Col span="12">
        <echarts-box width="100%" height="400px" :value="quyu[0]"></echarts-box>
        <echarts-box width="100%" height="400px" :value="quyu[1]"></echarts-box>
        <echarts-box width="100%" height="400px" :value="quyu[2]"></echarts-box>
        <echarts-box width="100%" height="400px" :value="quyu[3]"></echarts-box>
      </Col>
      <Col span="12">
        <echarts-box width="100%" height="400px" :value="quyu[4]"></echarts-box>
        <echarts-box width="100%" height="400px" :value="quyu[5]"></echarts-box>
        <echarts-box width="100%" height="400px" :value="quyu[6]"></echarts-box>
        <echarts-box width="100%" height="400px" :value="quyu[7]"></echarts-box>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      quyu: [
        {
          type: 'radar',
          title: '经开区',
          option: {
            title: [{name: '语文', max: 0.3}, {name: '数学', max: 0.3}, {name: '科学', max: 0.3}],
            data: [{value: [0.093, 0.24, 0.156]}]
          }
        },

        {
          type: 'radar',
          title: '惠济区',
          option: {
            title: [{name: '语文', max: 0.3}, {name: '数学', max: 0.3}, {name: '科学', max: 0.3}],
            data: [{value: [0.121, 0.26, 0.191]}]
          }
        },

        {
          type: 'radar',
          title: '管城区',
          option: {
            title: [{name: '语文', max: 0.3}, {name: '数学', max: 0.3}, {name: '科学', max: 0.3}],
            data: [{value: [0.089, 0.208, 0.15]}]
          }
        },

        {
          type: 'radar',
          title: '郑东新区',
          option: {
            title: [{name: '语文', max: 0.3}, {name: '数学', max: 0.3}, {name: '科学', max: 0.3}],
            data: [{value: [0.136, 0.285, 0.215]}]
          }
        },

        {
          type: 'radar',
          title: '二七区',
          option: {
            title: [{name: '语文', max: 0.3}, {name: '数学', max: 0.3}, {name: '科学', max: 0.3}],
            data: [{value: [0.113, 0.247, 0.201]}]
          }
        },

        {
          type: 'radar',
          title: '高新区',
          option: {
            title: [{name: '语文', max: 0.3}, {name: '数学', max: 0.3}, {name: '科学', max: 0.3}],
            data: [{value: [0.167, 0.29, 0.188]}]
          }
        },

        {
          type: 'radar',
          title: '中原区',
          option: {
            title: [{name: '语文', max: 0.3}, {name: '数学', max: 0.3}, {name: '科学', max: 0.3}],
            data: [{value: [0.11, 0.256, 0.206]}]
          }
        },

        {
          type: 'radar',
          title: '金水区',
          option: {
            title: [{name: '语文', max: 0.3}, {name: '数学', max: 0.3}, {name: '科学', max: 0.3}],
            data: [{value: [0.124, 0.255, 0.188]}]
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page{
  font-size: 14px;
}
</style>
