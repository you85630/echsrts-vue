<template>
  <div class="page">
    <Tabs>
        <TabPane label="语文学科" name="name1">
          <echarts-box width="100%" height="400px" :value="yuwen"></echarts-box>
        </TabPane>
        <TabPane label="数学学科" name="name2">
          <echarts-box width="100%" height="400px" :value="shuxue"></echarts-box>
        </TabPane>
        <TabPane label="英语学科" name="name3">
          <echarts-box width="100%" height="400px" :value="yinyu"></echarts-box>
        </TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      yuwen: {
        type: 'bar',
        option: {
          title: ['经开区', '惠济区', '管城区', '郑东新区', '二七区', '高新区', '中原区', '金水区'],
          data: [0.093, 0.121, 0.089, 0.136, 0.113, 0.167, 0.11, 0.124]
        }
      },
      shuxue: {
        type: 'bar',
        option: {
          title: ['经开区', '惠济区', '管城区', '郑东新区', '二七区', '高新区', '中原区', '金水区'],
          data: [0.24, 0.26, 0.208, 0.285, 0.247, 0.29, 0.256, 0.255]
        }
      },
      yinyu: {
        type: 'bar',
        option: {
          title: ['经开区', '惠济区', '管城区', '郑东新区', '二七区', '高新区', '中原区', '金水区'],
          data: [0.156, 0.191, 0.15, 0.215, 0.201, 0.188, 0.206, 0.188]
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
