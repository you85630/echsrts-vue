<template>
  <div class="page">
    <Tabs>
        <TabPane label="中原区" name="name1">
          <echarts-box width="100%" height="400px" :value="zhongyuan"></echarts-box>
        </TabPane>
        <TabPane label="郑东新区" name="name2">
          <echarts-box width="100%" height="400px" :value="zhengdong"></echarts-box>
        </TabPane>
        <TabPane label="市直" name="name3">
          <echarts-box width="100%" height="400px" :value="shizhi"></echarts-box>
        </TabPane>
        <TabPane label="经开区" name="name4">
          <echarts-box width="100%" height="400px" :value="jingkai"></echarts-box>
        </TabPane>
        <TabPane label="金水区" name="name5">
          <echarts-box width="100%" height="400px" :value="jinshui"></echarts-box>
        </TabPane>
        <TabPane label="惠济区" name="name6">
          <echarts-box width="100%" height="400px" :value="huiji"></echarts-box>
        </TabPane>
        <TabPane label="管城区" name="name7">
          <echarts-box width="100%" height="400px" :value="guancheng"></echarts-box>
        </TabPane>
        <TabPane label="高新区" name="name8">
          <echarts-box width="100%" height="400px" :value="gaoxin"></echarts-box>
        </TabPane>
        <TabPane label="二七区" name="name9">
          <echarts-box width="100%" height="400px" :value="erqi"></echarts-box>
        </TabPane>
      </Tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {

      zhongyuan: {
        type: 'radar',
        title: '中原区',
        option: {
          title: [{name: '主科总分'}, {name: '文科总分'}, {name: '理科总分'}],
          data: [{value: [49.49, 49.26, 49.41]}]
        }
      },

      zhengdong: {
        type: 'radar',
        title: '郑东新区',
        option: {
          title: [{name: '主科总分'}, {name: '文科总分'}, {name: '理科总分'}],
          data: [{value: [49.03, 49.34, 49.69]}]
        }
      },

      shizhi: {
        type: 'radar',
        title: '市直',
        option: {
          title: [{name: '主科总分'}, {name: '文科总分'}, {name: '理科总分'}],
          data: [{value: [46.88, 47.51, 47.28]}]
        }
      },

      jingkai: {
        type: 'radar',
        title: '经开区',
        option: {
          title: [{name: '主科总分'}, {name: '文科总分'}, {name: '理科总分'}],
          data: [{value: [50.84, 50.53, 50.02]}]
        }
      },

      jinshui: {
        type: 'radar',
        title: '金水区',
        option: {
          title: [{name: '主科总分'}, {name: '文科总分'}, {name: '理科总分'}],
          data: [{value: [49.21, 49.27, 49.51]}]
        }
      },

      huiji: {
        type: 'radar',
        title: '惠济区',
        option: {
          title: [{name: '主科总分'}, {name: '文科总分'}, {name: '理科总分'}],
          data: [{value: [49.72, 49.57, 50.01]}]
        }
      },

      guancheng: {
        type: 'radar',
        title: '管城区',
        option: {
          title: [{name: '主科总分'}, {name: '文科总分'}, {name: '理科总分'}],
          data: [{value: [50.09, 50, 49.88]}]
        }
      },

      gaoxin: {
        type: 'radar',
        title: '高新区',
        option: {
          title: [{name: '主科总分'}, {name: '文科总分'}, {name: '理科总分'}],
          data: [{value: [49.41, 49.55, 49.7]}]
        }
      },

      erqi: {
        type: 'radar',
        title: '二七区',
        option: {
          title: [{name: '主科总分'}, {name: '文科总分'}, {name: '理科总分'}],
          data: [{value: [49.65, 49.86, 49.85]}]
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
