<template>
  <div
    :class="className"
    :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts' // echarts theme
import { getDatasources } from '@/api/datasource'
import { debounce } from '@/utils'
require('echarts/theme/infographic')

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null,
      sidebarElm: null,
      timeData: [],
      PLCList: [],
      query: {
        page: 1,
        limit: 200,
        sort: '',
        currentDS: ''
      }
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  created() {
    this.getPLCInfos()
  },
  mounted() {
    this.initChart()
    if (this.autoResize) {
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHandler)
    }

    // 监听侧边栏的变化
    // eslint-disable-next-line prefer-destructuring
    this.sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    // eslint-disable-next-line no-unused-expressions
    this.sidebarElm && this.sidebarElm.addEventListener('transitionend', this.sidebarResizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.__resizeHandler)
    }

    // eslint-disable-next-line no-unused-expressions
    this.sidebarElm && this.sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler)

    this.chart.dispose()
    this.chart = null
  },
  methods: {
    getPLCInfos() {
      getDatasources(this.query)
        .then(response => {
          let data
          let i = 0
          const { length } = response.sources
          for (; i < length; i += 1) {
            data = response.sources[i]
            this.PLCList.push(data.name)
            console.log(this.PLCList[0])
          }
        })

      // eslint-disable-next-line func-names
        .catch(function(error) {
          console.log(error)
        })
    },
    sidebarResizeHandler(e) {
      if (e.propertyName === 'width') {
        this.__resizeHandler()
      }
    },
    setOptions({ expectedData } = {}) {
      const myDate = new Date()
      const hour = myDate.getHours()
      let h = hour
      for (let i = 0; i < 24 - hour; i += 1) {
        this.timeData.push(h)
        h += 1
      }
      for (let i = 0; i < hour; i += 1) {
        this.timeData.push(i)
      }
      this.chart.setOption({
        title: {
          text: 'Tact time',
          textStyle: { fontSize: 25 },
          x: 'center'
        },
        xAxis: {
          data: this.timeData,
          boundaryGap: true,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: '2%',
          right: 10,
          bottom: 20,
          top: 50,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          padding: [5, 10]
        },
        yAxis: {
          // data: ['0', '10', '20', '30', '40', '50', '60'],
          axisTick: {
            show: false
          }
        },
        legend: {
          x: 'right',
          data: ['BLU AOI PLC1', 'BLU AOI PLC2', 'Auto Assy PLC', 'FI AOI PLC1']
          // data: this.PLCList
        },
        series: [
          // {
          //   name: 'Tact Time', itemStyle: {
          //     normal: {
          //       color: '#FF005A',
          //       lineStyle: {
          //         color: '#FF005A',
          //         width: 2
          //       }
          //     }
          //   },
          //   smooth: true,
          //   type: 'bar',
          //   data: expectedData,
          //   animationDuration: 2800,
          //   animationEasing: 'cubicInOut'
          // },
          {
            name: 'BLU AOI PLC1',
            type: 'bar',
            // itemStyle: itemStyle,
            data: [30.7, 20.3, 22.1, 21, 33.8, 44.7, 60.6, 45.2, 44, 46.1, 38.1, 35.3, 60.6, 45.2, 44, 46.1]
          },
          {
            name: 'BLU AOI PLC2',
            type: 'bar',
            // itemStyle: itemStyle,
            data: [30.3, 33.7, 44, 55.2, 66, 77.7, 88.7, 99.3, 44, 46.1, 38.1, 35.3, 66, 77.7, 88.7, 99.3]
          },
          {
            name: 'Auto Assy PLC',
            type: 'bar',
            // itemStyle: itemStyle,
            data: [44.9, 22.4, 55.3, 33.1, 44.7, 34.5, 35.5, 44.1, 44, 46.1, 38.1, 35.3, 55.3, 33.1, 44.7, 34.5]
          },
          {
            name: 'FI AOI PLC1',
            type: 'bar',
            // itemStyle: itemStyle,
            data: [35.9, 44, 46.1, 38.1, 35.3, 46.9, 67, 77.4, 44, 46.1, 38.1, 35.3, 46.1, 38.1, 35.3, 46.9]
          }]
      })
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'infographic')
      this.setOptions(this.chartData)
    }

  }
}
</script>
