<template>
  <div class="page">
    <Tabs>
        <TabPane label="语文学科" name="name1">
          <echarts-box width="100%" height="400px" :value="yuwen"></echarts-box>
          <Row>
            <Col span="12">
              <echarts-box width="100%" height="400px" :value="yuwenleida1[0]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="yuwenleida1[1]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="yuwenleida1[2]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="yuwenleida1[3]"></echarts-box>
            </Col>
            <Col span="12">
              <echarts-box width="100%" height="400px" :value="yuwenleida2[0]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="yuwenleida2[1]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="yuwenleida2[2]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="yuwenleida2[3]"></echarts-box>
            </Col>
          </Row>
        </TabPane>
        <TabPane label="数学学科" name="name2">
          <echarts-box width="100%" height="400px" :value="shuxue"></echarts-box>
          <Row>
            <Col span="12">
              <echarts-box width="100%" height="400px" :value="shuxueleida1[0]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="shuxueleida1[1]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="shuxueleida1[2]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="shuxueleida1[3]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="shuxueleida1[4]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="shuxueleida1[5]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="shuxueleida1[6]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="shuxueleida1[7]"></echarts-box>
            </Col>
            <Col span="12">
              <echarts-box width="100%" height="400px" :value="shuxueleida2[0]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="shuxueleida2[1]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="shuxueleida2[2]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="shuxueleida2[3]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="shuxueleida2[4]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="shuxueleida2[5]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="shuxueleida2[6]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="shuxueleida2[7]"></echarts-box>
            </Col>
          </Row>
        </TabPane>
        <TabPane label="科学学科" name="name3">
          <echarts-box width="100%" height="400px" :value="kexue"></echarts-box>
          <Row>
            <Col span="12">
              <echarts-box width="100%" height="400px" :value="kexueleida1[0]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="kexueleida1[1]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="kexueleida1[2]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="kexueleida1[3]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="kexueleida1[4]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="kexueleida1[5]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="kexueleida1[6]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="kexueleida1[7]"></echarts-box>
            </Col>
            <Col span="12">
              <echarts-box width="100%" height="400px" :value="kexueleida2[0]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="kexueleida2[1]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="kexueleida2[2]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="kexueleida2[3]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="kexueleida2[4]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="kexueleida2[5]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="kexueleida2[6]"></echarts-box>
              <echarts-box width="100%" height="400px" :value="kexueleida2[7]"></echarts-box>
            </Col>
          </Row>
        </TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 柱状图
      yuwen: {
        type: 'bar',
        option: {
          title: ['金水区', '中原区', '经开区', '二七区', '高新区', '郑东新区', '管城区', '惠济区'],
          data: [52.44, 51.3, 50.58, 50.47, 50.24, 49.74, 48.16, 47.65]
        }
      },
      shuxue: {
        type: 'bar',
        option: {
          title: ['中原区', '郑东新区', '高新区', '二七区', '管城区', '经开区', '惠济区'],
          data: [51.25, 50.35, 50.11, 49.75, 49.61, 48.94, 47.66]
        }

      },
      kexue: {
        type: 'bar',
        option: {
          title: ['中原区', '经开区', '郑东新区', '高新区', '二七区', '管城区', '惠济区'],
          data: [51.15, 51.01, 50.56, 50.45, 50.38, 48.61, 46.71]
        }
      },
      // 语文雷达图
      yuwenleida1: [
        {
          type: 'radar',
          title: '中原区',
          option: {
            title: [{name: '积累与运用', max: 70}, {name: '习作', max: 70}, {name: '阅读', max: 70}],
            data: [{value: [51.24, 50.89, 51.29]}]
          }
        },

        {
          type: 'radar',
          title: '金水区',
          option: {
            title: [{name: '积累与运用', max: 70}, {name: '习作', max: 70}, {name: '阅读', max: 70}],
            data: [{value: [50.07, 49.35, 49.77]}]
          }
        },

        {
          type: 'radar',
          title: '经开区',
          option: {
            title: [{name: '积累与运用', max: 70}, {name: '习作', max: 70}, {name: '阅读', max: 70}],
            data: [{value: [50.64, 50.28, 50.61]}]
          }
        },

        {
          type: 'radar',
          title: '金水区',
          option: {
            title: [{name: '积累与运用', max: 70}, {name: '习作', max: 70}, {name: '阅读', max: 70}],
            data: [{value: [52.56, 51.27, 52.45]}]
          }
        }
      ],
      yuwenleida2: [
        {
          type: 'radar',
          title: '惠济区',
          option: {
            title: [{name: '积累与运用', max: 70}, {name: '习作', max: 70}, {name: '阅读', max: 70}],
            data: [{value: [47.7, 48.12, 47.78]}]
          }
        },

        {
          type: 'radar',
          title: '管城区',
          option: {
            title: [{name: '积累与运用', max: 70}, {name: '习作', max: 70}, {name: '阅读', max: 70}],
            data: [{value: [48.05, 48.96, 48.19]}]
          }
        },

        {
          type: 'radar',
          title: '高新区',
          option: {
            title: [{name: '积累与运用', max: 70}, {name: '习作', max: 70}, {name: '阅读', max: 70}],
            data: [{value: [50.68, 48.69, 50.61]}]
          }
        },

        {
          type: 'radar',
          title: '二七区',
          option: {
            title: [{name: '积累与运用', max: 70}, {name: '习作', max: 70}, {name: '阅读', max: 70}],
            data: [{value: [50.26, 50.84, 50.37]}]
          }
        }
      ],
      // 数学雷达图
      shuxueleida1: [
        {
          type: 'radar',
          title: '中原区',
          option: {
            title: [{name: '数与代数', max: 70}, {name: '统计与概率', max: 70}, {name: '图形与几何', max: 70}],
            data: [{value: [51.39, 51.05, 50.87]}]
          }
        },

        {
          type: 'radar',
          title: '郑东新区',
          option: {
            title: [{name: '数与代数', max: 70}, {name: '统计与概率', max: 70}, {name: '图形与几何', max: 70}],
            data: [{value: [50.19, 50.59, 50.46]}]
          }
        },

        {
          type: 'radar',
          title: '经开区',
          option: {
            title: [{name: '数与代数', max: 70}, {name: '统计与概率', max: 70}, {name: '图形与几何', max: 70}],
            data: [{value: [48.98, 48.93, 48.91]}]
          }
        },

        {
          type: 'radar',
          title: '金水区',
          option: {
            title: [{name: '数与代数', max: 70}, {name: '统计与概率', max: 70}, {name: '图形与几何', max: 70}],
            data: [{value: [51.27, 51.59, 51.45]}]
          }
        },

        {
          type: 'radar',
          title: '惠济区',
          option: {
            title: [{name: '数与代数', max: 70}, {name: '统计与概率', max: 70}, {name: '图形与几何', max: 70}],
            data: [{value: [47.63, 47.82, 47.97]}]
          }
        },

        {
          type: 'radar',
          title: '管城区',
          option: {
            title: [{name: '数与代数', max: 70}, {name: '统计与概率', max: 70}, {name: '图形与几何', max: 70}],
            data: [{value: [49.72, 49.52, 49.47]}]
          }
        },

        {
          type: 'radar',
          title: '高新区',
          option: {
            title: [{name: '数与代数', max: 70}, {name: '统计与概率', max: 70}, {name: '图形与几何', max: 70}],
            data: [{value: [50.29, 49.99, 49.73]}]
          }
        },

        {
          type: 'radar',
          title: '二七区',
          option: {
            title: [{name: '数与代数', max: 70}, {name: '统计与概率', max: 70}, {name: '图形与几何', max: 70}],
            data: [{value: [49.81, 49.56, 49.85]}]
          }
        }
      ],
      shuxueleida2: [
        {
          type: 'radar',
          title: '中原区',
          option: {
            title: [{name: '了解', max: 70}, {name: '应用', max: 70}, {name: '理解', max: 70}],
            data: [{value: [51.15, 51.25, 51.26]}]
          }
        },

        {
          type: 'radar',
          title: '郑东新区',
          option: {
            title: [{name: '了解', max: 70}, {name: '应用', max: 70}, {name: '理解', max: 70}],
            data: [{value: [50.36, 50.33, 50.36]}]
          }
        },

        {
          type: 'radar',
          title: '经开区',
          option: {
            title: [{name: '了解', max: 70}, {name: '应用', max: 70}, {name: '理解', max: 70}],
            data: [{value: [48.91, 48.95, 48.94]}]
          }
        },

        {
          type: 'radar',
          title: '金水区',
          option: {
            title: [{name: '了解', max: 70}, {name: '应用', max: 70}, {name: '理解', max: 70}],
            data: [{value: [51.38, 51.51, 51.41]}]
          }
        },

        {
          type: 'radar',
          title: '惠济区',
          option: {
            title: [{name: '了解', max: 70}, {name: '应用', max: 70}, {name: '理解', max: 70}],
            data: [{value: [47.63, 47.61, 47.69]}]
          }
        },

        {
          type: 'radar',
          title: '管城区',
          option: {
            title: [{name: '了解', max: 70}, {name: '应用', max: 70}, {name: '理解', max: 70}],
            data: [{value: [49.6, 49.54, 49.64]}]
          }
        },

        {
          type: 'radar',
          title: '高新区',
          option: {
            title: [{name: '了解', max: 70}, {name: '应用', max: 70}, {name: '理解', max: 70}],
            data: [{value: [50.19, 50.06, 50.05]}]
          }
        },

        {
          type: 'radar',
          title: '二七区',
          option: {
            title: [{name: '了解', max: 70}, {name: '应用', max: 70}, {name: '理解', max: 70}],
            data: [{value: [49.73, 49.71, 49.77]}]
          }
        }
      ],
      // 科学雷达图
      kexueleida1: [
        {
          type: 'radar',
          title: '中原区',
          option: {
            title: [{name: '生命科学', max: 70}, {name: '物质科学', max: 70}, {name: '地球和宇宙', max: 70}],
            data: [{value: [51.28, 51.02, 51.14]}]
          }
        },

        {
          type: 'radar',
          title: '郑东新区',
          option: {
            title: [{name: '生命科学', max: 70}, {name: '物质科学', max: 70}, {name: '地球和宇宙', max: 70}],
            data: [{value: [50.4, 50.64, 50.59]}]
          }
        },

        {
          type: 'radar',
          title: '经开区',
          option: {
            title: [{name: '生命科学', max: 70}, {name: '物质科学', max: 70}, {name: '地球和宇宙', max: 70}],
            data: [{value: [50.94, 51.12, 50.74]}]
          }
        },

        {
          type: 'radar',
          title: '金水区',
          option: {
            title: [{name: '生命科学', max: 70}, {name: '物质科学', max: 70}, {name: '地球和宇宙', max: 70}],
            data: [{value: [52.32, 52.5, 52.47]}]
          }
        },

        {
          type: 'radar',
          title: '惠济区',
          option: {
            title: [{name: '生命科学', max: 70}, {name: '物质科学', max: 70}, {name: '地球和宇宙', max: 70}],
            data: [{value: [46.84, 46.67, 46.82]}]
          }
        },

        {
          type: 'radar',
          title: '管城区',
          option: {
            title: [{name: '生命科学', max: 70}, {name: '物质科学', max: 70}, {name: '地球和宇宙', max: 70}],
            data: [{value: [48.66, 48.56, 48.7]}]
          }
        },

        {
          type: 'radar',
          title: '高新区',
          option: {
            title: [{name: '生命科学', max: 70}, {name: '物质科学', max: 70}, {name: '地球和宇宙', max: 70}],
            data: [{value: [50.61, 50.37, 50.41]}]
          }
        },

        {
          type: 'radar',
          title: '二七区',
          option: {
            title: [{name: '生命科学', max: 70}, {name: '物质科学', max: 70}, {name: '地球和宇宙', max: 70}],
            data: [{value: [50.48, 50.44, 50.2]}]
          }
        }
      ],
      kexueleida2: [
        {
          type: 'radar',
          title: '中原区',
          option: {
            title: [{name: '了解', max: 70}, {name: '科学探究', max: 70}, {name: '理解', max: 70}],
            data: [{value: [51.27, 51.05, 51.09]}]
          }
        },

        {
          type: 'radar',
          title: '郑东新区',
          option: {
            title: [{name: '了解', max: 70}, {name: '科学探究', max: 70}, {name: '理解', max: 70}],
            data: [{value: [50.45, 50.53, 50.66]}]
          }
        },

        {
          type: 'radar',
          title: '经开区',
          option: {
            title: [{name: '了解', max: 70}, {name: '科学探究', max: 70}, {name: '理解', max: 70}],
            data: [{value: [50.89, 50.99, 51.05]}]
          }
        },

        {
          type: 'radar',
          title: '金水区',
          option: {
            title: [{name: '了解', max: 70}, {name: '科学探究', max: 70}, {name: '理解', max: 70}],
            data: [{value: [52.3, 52.46, 52.55]}]
          }
        },

        {
          type: 'radar',
          title: '惠济区',
          option: {
            title: [{name: '了解', max: 70}, {name: '科学探究', max: 70}, {name: '理解', max: 70}],
            data: [{value: [46.86, 46.83, 46.62]}]
          }
        },

        {
          type: 'radar',
          title: '管城区',
          option: {
            title: [{name: '了解', max: 70}, {name: '科学探究', max: 70}, {name: '理解', max: 70}],
            data: [{value: [48.64, 48.65, 48.6]}]
          }
        },

        {
          type: 'radar',
          title: '高新区',
          option: {
            title: [{name: '了解', max: 70}, {name: '科学探究', max: 70}, {name: '理解', max: 70}],
            data: [{value: [50.55, 50.39, 50.41]}]
          }
        },

        {
          type: 'radar',
          title: '二七区',
          option: {
            title: [{name: '了解', max: 70}, {name: '科学探究', max: 70}, {name: '理解', max: 70}],
            data: [{value: [50.52, 50.33, 50.31]}]
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
</style>

<style lang="scss" scoped>
.page{
  font-size: 14px;
}
</style>
