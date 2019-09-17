<template>
  <div
    :class="className"
    :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts' // echarts theme
import { debounce } from '@/utils'
// import socket from '@/utils/socket.js'
require('echarts/theme/macarons')

const animationDuration = 6000

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
    }
  },
  data() {
    return {
      chart: null,
      timeData: []
    }
  },
  mounted() {
    this.initChart()
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
  },
  created() {
    this.getTimeData()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHandler)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        title: {
          text: 'Capacity',
          textStyle: { fontSize: 25 },
          x: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 50,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: this.timeData,
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        legend: {
          x: 'right',
          data: ['PI', 'Panel Test', 'BLU AOI', 'FI AOI']
          // data: this.PLCList
        },
        series: [{
          name: 'PI',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [79, 52, 200, 334, 390, 330, 220, 100, 200, 300, 200, 334, 390, 330, 220],
          animationDuration
        }, {
          name: 'Panel Test',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [80, 52, 200, 334, 390, 330, 220, 100, 200, 300, 200, 334, 390, 330, 445],
          animationDuration
        }, {
          name: 'BLU AOI',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [30, 52, 200, 334, 390, 330, 220, 100, 200, 300, 200, 334, 390, 330, 220],
          animationDuration
        }, {
          name: 'FI AOI',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [30, 52, 200, 334, 390, 330, 220, 100, 200, 300, 52, 200, 334, 390, 330, 220],
          animationDuration
        }]
      })
    },
    getTimeData() {
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
    }
  }
}
</script>
