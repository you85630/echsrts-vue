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
          title: {
            text: this.value.title ? this.value.title : ''
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: this.value.option.title,
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            type: 'value'
            // min: '40'
          },
          series: [
            {
              type: 'bar',
              barWidth: '30%',
              data: this.value.option.data,
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              }
            }
          ]
        },
        morebar: {
          animation: false,
          legend: {},
          tooltip: {},
          dataset: {
            dimensions: ['product', '2015', '2016', '2017'],
            source: [
              {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
              {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
              {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
              {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
            ]
          },
          series: [
            {type: 'bar'},
            {type: 'bar'}
          ],
          xAxis: {type: 'category'},
          yAxis: {}
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
          title: {
            text: this.value.title ? this.value.title : '',
            top: '75%',
            left: 'center'
          },
          tooltip: {},
          radar: {
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 2,
                padding: [3, 5]
              }
            },
            indicator: this.value.option.title
          },
          series: [
            {
              name: '数据：',
              type: 'radar',
              data: this.value.option.data,
              symbol: 'rect'
            }
          ]
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
        case 'morebar':
          option = this.data.morebar
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
