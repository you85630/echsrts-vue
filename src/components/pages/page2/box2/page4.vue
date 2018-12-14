<template>
  <div class="page">
    <Tabs value="name1">
        <TabPane label="语文学科" name="name1">
          <echarts-box width="100%" height="400px" :value="yuwen"></echarts-box>
        </TabPane>
        <TabPane label="数学学科" name="name2">
          <echarts-box width="100%" height="400px" :value="shuxue"></echarts-box>
        </TabPane>
        <TabPane label="科学学科" name="name3">
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
        type: 'morebar',
        option: {
          data: [['product', '领先', '需关注'], ['金水区', 0.3021, 0.1758], ['中原区', 0.2826, 0.2264], ['二七区', 0.2549, 0.259], ['经开区', 0.254, 0.2601], ['郑东新区', 0.2313, 0.2761], ['高新区', 0.2179, 0.2393], ['管城区', 0.1702, 0.3326], ['惠济区', 0.164, 0.3642]]
        }
      },
      shuxue: {
        type: 'morebar',
        option: {
          data: [['product', '领先', '需关注'], ['中原区', 0.2884, 0.2275], ['金水区', 0.287, 0.2125], ['郑东新区', 0.2451, 0.2469], ['二七区', 0.2244, 0.268], ['管城区', 0.2229, 0.2787], ['经开区', 0.2177, 0.3093], ['高新区', 0.2065, 0.2361], ['惠济区', 0.1567, 0.3414]]
        }
      },
      kexue: {
        type: 'morebar',
        option: {
          data: [['product', '领先', '需关注'], ['中原区', 0.2871, 0.1997], ['经开区', 0.2594, 0.2392], ['郑东新区', 0.2578, 0.2491], ['二七区', 0.2433, 0.2855], ['高新区', 0.2109, 0.2487], ['管城区', 0.1645, 0.331], ['惠济区', 0.1093, 0.4096]]
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
