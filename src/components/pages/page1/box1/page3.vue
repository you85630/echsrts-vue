<template>
  <div class="page">
    <Tabs>
        <TabPane label="总分" name="name1">
          <echarts-box width="100%" height="400px" :value="all"></echarts-box>
        </TabPane>
        <TabPane label="语文学科" name="name2">
          <echarts-box width="100%" height="400px" :value="yuwen"></echarts-box>
        </TabPane>
        <TabPane label="数学学科" name="name3">
          <echarts-box width="100%" height="400px" :value="shuxue"></echarts-box>
        </TabPane>
        <TabPane label="英语学科" name="name4">
          <echarts-box width="100%" height="400px" :value="yinyu"></echarts-box>
        </TabPane>
        <TabPane label="政治学科" name="name5">
          <echarts-box width="100%" height="400px" :value="zhengzhi"></echarts-box>
        </TabPane>
        <TabPane label="历史学科" name="name6">
          <echarts-box width="100%" height="400px" :value="lishi"></echarts-box>
        </TabPane>
        <TabPane label="地理学科" name="name7">
          <echarts-box width="100%" height="400px" :value="dili"></echarts-box>
        </TabPane>
        <TabPane label="物理学科" name="name8">
          <echarts-box width="100%" height="400px" :value="wuli"></echarts-box>
        </TabPane>
        <TabPane label="化学学科" name="name9">
          <echarts-box width="100%" height="400px" :value="huaxue"></echarts-box>
        </TabPane>
        <TabPane label="生物学科" name="name10">
          <echarts-box width="100%" height="400px" :value="shengwu"></echarts-box>
        </TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {

      all: {
        type: 'bar',
        title: '总分',
        option: {
          title: ['经开区', '管城区', '二七区', '惠济区', '中原区', '高新区', '金水区', '郑东新区', '市直'],
          data: [50.72, 50.03, 49.67, 49.64, 49.52, 49.44, 49.27, 49.03, 46.72]
        }
      },

      yuwen: {
        type: 'bar',
        title: '语文总分',
        option: {
          title: ['经开区', '管城区', '二七区', '惠济区', '中原区', '高新区', '金水区', '郑东新区', '市直'],
          data: [51.04, 50.13, 49.7, 49.63, 49.52, 49.86, 49.14, 49.25, 47.05]
        }
      },

      shuxue: {
        type: 'bar',
        title: '数学总分',
        option: {
          title: ['经开区', '管城区', '惠济区', '二七区', '高新区', '中原区', '金水区', '郑东新区', '市直'],
          data: [50.33, 50, 49.66, 49.59, 49.56, 49.45, 49.31, 48.86, 47.13]
        }
      },

      yinyu: {
        type: 'bar',
        title: '英语总分',
        option: {
          title: ['经开区', '管城区', '惠济区', '二七区', '中原区', '金水区', '郑东新区', '高新区', '市直'],
          data: [51.14, 50.13, 49.87, 49.67, 49.5, 49.19, 48.98, 48.81, 46.45]
        }
      },

      zhengzhi: {
        type: 'bar',
        title: '政治总分',
        option: {
          title: ['经开区', '管城区', '二七区', '高新区', '惠济区', '郑东新区', '金水区', '中原区', '市直'],
          data: [50.7, 50.24, 50.07, 49.7, 49.61, 49.29, 49.27, 49.19, 47.23]
        }
      },

      lishi: {
        type: 'bar',
        title: '历史总分',
        option: {
          title: ['经开区', '管城区', '二七区', '惠济区', '郑东新区', '高新区', '金水区', '中原区', '市直'],
          data: [50.33, 50.24, 49.66, 49.45, 49.39, 49.31, 49.12, 49.06, 48.05]
        }
      },

      dili: {
        type: 'bar',
        title: '地理总分',
        option: {
          title: ['经开区', '二七区', '管城区', '惠济区', '高新区', '中原区', '金水区', '郑东新区', '市直'],
          data: [50.55, 49.86, 49.72, 49.65, 49.64, 49.54, 49.42, 49.35, 47.25]
        }
      },

      wuli: {
        type: 'bar',
        title: '物理总分',
        option: {
          title: ['惠济区', '二七区', '郑东新区', '管城区', '中原区', '经开区', '金水区', '高新区', '市直'],
          data: [50.3, 50.29, 50.14, 49.79, 49.78, 49.55, 49.16, 48.73, 46.76]
        }
      },

      huaxue: {
        type: 'bar',
        title: '化学总分',
        option: {
          title: ['管城区', '金水区', '高新区', '惠济区', '经开区', '二七区', '郑东新区', '中原区', '市直'],
          data: [50.75, 50.26, 50.13, 49.98, 49.97, 49.54, 49.5, 48.95, 47.64]
        }
      },

      shengwu: {
        type: 'bar',
        title: '生物总分',
        option: {
          title: ['经开区', '惠济区', '管城区', '二七区', '高新区', '中原区', '郑东新区', '金水区', '市直'],
          data: [50.53, 49.76, 49.73, 49.72, 49.62, 49.51, 49.44, 49.1, 47.45]
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
