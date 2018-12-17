<template>
  <div class="page">
    <Tabs value="name1">
        <TabPane label="语文学科" name="name1">
          <echarts-box width="100%" height="400px" :value="barlist1"></echarts-box>
        </TabPane>
        <TabPane label="数学学科" name="name2">
          <echarts-box width="100%" height="400px" :value="barlist2"></echarts-box>
        </TabPane>
        <TabPane label="英语学科" name="name3">
          <echarts-box width="100%" height="400px" :value="barlist3"></echarts-box>
        </TabPane>
        <TabPane label="人文" name="name4">
          <echarts-box width="100%" height="400px" :value="barlist4"></echarts-box>
        </TabPane>
        <TabPane label="科学" name="name5">
          <echarts-box width="100%" height="400px" :value="barlist5"></echarts-box>
        </TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      barlist1: {
        type: 'bar',
        title: '语文总分',
        option: {
          title: ['高新区', '市直', '管城区', '惠济区', '二七区', '经开区', '郑东新区', '金水区', '中原区'],
          data: [50.71, 50.51, 49.97, 49.78, 49.62, 49.56, 49.43, 49.23, 49.21]
        }
      },
      barlist2: {
        type: 'bar',
        title: '数学总分',
        option: {
          title: ['高新区', '市直', '管城区', '惠济区', '二七区', '金水区', '中原区', '经开区', '郑东新区'],
          data: [50.46, 50.46, 50.07, 49.74, 49.49, 49.18, 49.17, 49.16, 49.11]
        }
      },
      barlist3: {
        type: 'bar',
        title: '英语总分',
        option: {
          title: ['市直', '管城区', '惠济区', '经开区', '二七区', '高新区', '中原区', '金水区', '郑东新区'],
          data: [50.37, 50.08, 49.8, 49.75, 49.58, 49.55, 49.06, 48.98, 48.75]
        }
      },
      barlist4: {
        type: 'bar',
        title: '人文总分',
        option: {
          title: ['高新区', '市直', '管城区', '二七区', '郑东新区', '惠济区', '经开区', '中原区', '金水区'],
          data: [50.8, 50.4, 50.17, 49.92, 49.83, 49.63, 49.61, 49.42, 49.06]
        }
      },
      barlist5: {
        type: 'bar',
        title: '科学总分',
        option: {
          title: ['市直', '高新区', '管城区', '二七区', '惠济区', '经开区', '郑东新区', '中原区', '金水区'],
          data: [50.53, 50.45, 50.03, 49.78, 49.74, 49.53, 49.41, 49.28, 48.84]
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
