<template>
  <div :id="echartsId" :style="echartStyle()"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: ['value', 'width', 'height'],
  data () {
    return {
      data: {
        line: {
          animation: false,
          xAxis: {
            type: 'category',
            data: this.value.option.title
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: this.value.option.data,
            type: 'line'
          }]
        },
        bar: {
          animation: false,
          legend: {},
          tooltip: {},
          dataset: {
            source: [
              ['product', '2015'],
              ['Matcha Latte', 43.3],
              ['Milk Tea', 83.1],
              ['Cheese Cocoa', 86.4],
              ['Walnut Brownie', 72.4]
            ]
          },
          xAxis: {type: 'category'},
          yAxis: {},
          series: [
            {type: 'bar'}
          ]
        },
        pie: {
          animation: false,
          tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: this.value.option.title
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.value.option.data
            }
          ]
        },
        radar: {
          animation: false,
          legend: {
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
          },
          radar: {
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: this.value.option.title
          },
          series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            data: this.value.option.data
          }]
        },
        scatter: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          xAxis: {},
          yAxis: {},
          series: [{
            symbolSize: 20,
            type: 'scatter',
            data: this.value.option.data
          }]
        }
      }
    }
  },
  created () {
    this.echartsId = Math.random().toString(36).substr(2)
  },
  mounted () {
    this.$nextTick(function () {
      this.echartType(this.value.type)
    })
  },
  methods: {
    echartStyle () {
      let width = this.width
      let height = this.height
      let style = {
        width: width,
        height: height
      }
      return style
    },
    echartType (types) {
      let option
      switch (types) {
        case 'line':
          option = this.data.line
          break
        case 'bar':
          option = this.data.bar
          break
        case 'pie':
          option = this.data.pie
          break
        case 'radar':
          option = this.data.radar
          break
        case 'scatter':
          option = this.data.scatter
          break
        default:
          break
      }
      let myChart = echarts.init(document.getElementById(this.echartsId))
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    }
  }
}
</script>
