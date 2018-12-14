<template>
  <div class="page">
    <echarts-box width="100%" height="400px" :value="barlist"></echarts-box>
    <Row class="mt">
      <Col span="12">
        <echarts-box width="100%" height="400px" :value="pielist[0]"></echarts-box>
        <echarts-box width="100%" height="400px" :value="pielist[1]"></echarts-box>
        <echarts-box width="100%" height="400px" :value="pielist[2]"></echarts-box>
        <echarts-box width="100%" height="400px" :value="pielist[3]"></echarts-box>
      </Col>
      <Col span="12">
        <echarts-box width="100%" height="400px" :value="pielist[4]"></echarts-box>
        <echarts-box width="100%" height="400px" :value="pielist[5]"></echarts-box>
        <echarts-box width="100%" height="400px" :value="pielist[6]"></echarts-box>
        <echarts-box width="100%" height="400px" :value="pielist[7]"></echarts-box>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      barlist: {
        type: 'bar',
        title: '学校类型情况',
        option: {
          title: ['短板型', '偏科型', '其他型', '弱势型', '优质型'],
          data: [16, 31, 156, 40, 18]
        }
      },
      pielist: [
        {
          type: 'pie',
          title: '二七区',
          option: {
            title: ['短板型', '偏科型', '其他型', '弱势型', '优质型'],
            data: [{name: '短板型', value: 3}, {name: '偏科型', value: 7}, {name: '其他型', value: 29}, {name: '弱势型', value: 10}, {name: '优质型', value: 1}]
          }
        },

        {
          type: 'pie',
          title: '高新区',
          option: {
            title: ['短板型', '偏科型', '其他型', '弱势型', '优质型'],
            data: [{name: '短板型', value: 1}, {name: '偏科型', value: 0}, {name: '其他型', value: 7}, {name: '弱势型', value: 0}, {name: '优质型', value: 0}]
          }
        },

        {
          type: 'pie',
          title: '管城区',
          option: {
            title: ['短板型', '偏科型', '其他型', '弱势型', '优质型'],
            data: [{name: '短板型', value: 2}, {name: '偏科型', value: 2}, {name: '其他型', value: 24}, {name: '弱势型', value: 8}, {name: '优质型', value: 0}]
          }
        },

        {
          type: 'pie',
          title: '惠济区',
          option: {
            title: ['短板型', '偏科型', '其他型', '弱势型', '优质型'],
            data: [{name: '短板型', value: 0}, {name: '偏科型', value: 3}, {name: '其他型', value: 20}, {name: '弱势型', value: 8}, {name: '优质型', value: 0}]
          }
        },

        {
          type: 'pie',
          title: '金水区',
          option: {
            title: ['短板型', '偏科型', '其他型', '弱势型', '优质型'],
            data: [{name: '短板型', value: 6}, {name: '偏科型', value: 8}, {name: '其他型', value: 30}, {name: '弱势型', value: 1}, {name: '优质型', value: 7}]
          }
        },

        {
          type: 'pie',
          title: '经开区',
          option: {
            title: ['短板型', '偏科型', '其他型', '弱势型', '优质型'],
            data: [{name: '短板型', value: 0}, {name: '偏科型', value: 2}, {name: '其他型', value: 5}, {name: '弱势型', value: 1}, {name: '优质型', value: 1}]
          }
        },

        {
          type: 'pie',
          title: '郑东新区',
          option: {
            title: ['短板型', '偏科型', '其他型', '弱势型', '优质型'],
            data: [{name: '短板型', value: 3}, {name: '偏科型', value: 6}, {name: '其他型', value: 18}, {name: '弱势型', value: 8}, {name: '优质型', value: 6}]
          }
        },

        {
          type: 'pie',
          title: '中原区',
          option: {
            title: ['短板型', '偏科型', '其他型', '弱势型', '优质型'],
            data: [{name: '短板型', value: 1}, {name: '偏科型', value: 3}, {name: '其他型', value: 23}, {name: '弱势型', value: 4}, {name: '优质型', value: 3}]
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
.mt{
  margin-top: 20px;
}
</style>
