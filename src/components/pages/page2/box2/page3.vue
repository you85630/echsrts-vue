<template>
  <div class="page">
    <Tabs>
        <TabPane label="语文学科优质均衡情况" name="name1">
          <echarts-box width="100%" height="400px" :value="yuwen"></echarts-box>
        </TabPane>
        <TabPane label="数学学科优质均衡情况" name="name2">
          <echarts-box width="100%" height="400px" :value="shuxue"></echarts-box>
        </TabPane>
        <TabPane label="科学学科优质均衡情况" name="name3">
          <echarts-box width="100%" height="400px" :value="kexue"></echarts-box>
        </TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      yuwen: {
        type: 'scatter',
        option: {
          title: ['中原区', '郑东新区', '经开区', '金水区', '惠济区', '管城区', '高新区', '二七区'],
          data: [[51.3, 0.31], [49.74, 0.3], [50.58, 0.31], [52.44, 0.33], [47.65, 0.29], [48.16, 0.3], [50.24, 0.32], [50.47, 0.3]]
        }
      },
      shuxue: {
        type: 'scatter',
        option: {
          title: ['中原区', '郑东新区', '经开区', '金水区', '惠济区', '管城区', '高新区', '二七区'],
          data: [[51.25, 0.3], [50.35, 0.31], [48.94, 0.29], [51.43, 0.31], [47.66, 0.3], [49.61, 0.3], [50.11, 0.32], [49.75, 0.3]]
        }
      },
      kexue: {
        type: 'scatter',
        option: {
          title: ['中原区', '郑东新区', '经开区', '金水区', '惠济区', '管城区', '高新区', '二七区'],
          data: [[51.15, 0.31], [50.56, 0.28], [51.01, 0.28], [52.49, 0.31], [46.71, 0.31], [48.61, 0.31], [50.45, 0.32], [50.38, 0.3]]
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
