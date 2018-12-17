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
        type: 'scatter',
        option: {
          title: ['高新区', '市直', '管城区', '惠济区', '二七区', '经开区', '郑东新区', '金水区', '中原区'],
          data: [[50.71, 0.4738455], [50.51, 0.4176509], [49.97, 0.4896685], [49.78, 0.4412116], [49.62, 0.4552252], [49.56, 0.4605183], [49.43, 0.4646891], [49.23, 0.4661124], [49.21, 0.409237]]
        }
      },

      barlist2: {
        type: 'scatter',
        option: {
          title: ['高新区', '市直', '管城区', '惠济区', '二七区', '经开区', '郑东新区', '金水区', '中原区'],
          data: [[50.46, 0.4856151], [50.46, 0.4282435], [50.07, 0.488963], [49.74, 0.442264], [49.49, 0.4540754], [49.16, 0.456731], [49.11, 0.4059108], [49.18, 0.4547946], [49.17, 0.4519938]]
        }
      },

      barlist3: {
        type: 'scatter',
        option: {
          title: ['高新区', '市直', '管城区', '惠济区', '二七区', '经开区', '郑东新区', '金水区', '中原区'],
          data: [[49.55, 0.4438716], [50.37, 0.4800605], [50.08, 0.4312345], [49.8, 0.454358], [49.58, 0.4504685], [49.75, 0.4679844], [48.75, 0.394241], [48.98, 0.4490377], [49.06, 0.4241374]]
        }
      },

      barlist4: {
        type: 'scatter',
        option: {
          title: ['高新区', '市直', '管城区', '惠济区', '二七区', '经开区', '郑东新区', '金水区', '中原区'],
          data: [[50.8, 0.464337], [50.4, 0.4392419], [50.17, 0.4797565], [49.63, 0.4523286], [49.92, 0.4722373], [49.61, 0.461049], [49.83, 0.4589659], [49.06, 0.4174699], [49.42, 0.4540952]]
        }
      },

      barlist5: {
        type: 'scatter',
        option: {
          title: ['高新区', '市直', '管城区', '惠济区', '二七区', '经开区', '郑东新区', '金水区', '中原区'],
          data: [[50.45, 0.4184799], [50.53, 0.4823793], [50.03, 0.489932], [49.74, 0.4530838], [49.78, 0.4515662], [49.53, 0.4612655], [49.41, 0.4578259], [48.84, 0.4122353], [49.28, 0.4443212]]
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
