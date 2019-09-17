<template>
  <div
    :class="className"
    :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts' // echarts theme
import { getDatasources } from '@/api/datasource'
import socket from '@/utils/socket.js'
import resize from './mixins/resize'

require('echarts/theme/infographic')
const animationDuration = 6000
export default {
  mixins: [resize],
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
      seriesList: [],
      tactTimeList: [],
      // PLCList: ['BLU PLC 01', 'BLU PLC 02', 'ASSY PLC 01', 'FI AOI PLC 01'],
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
    // chartData: {
    //   deep: true,
    //   handler(val) {
    //     this.setOptions(val)
    //   }
    // }
    PLCList: function() {
      this.initChart()
    },
    seriesList: function() {
      this.initChart()
    }

  },
  created() {
    this.getPLCInfos()
    this.setTimeData()
  },
  mounted() {
    socket.setCallback(this.callback)
    socket.initWebSocket('192.168.31.86', 9002)
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  destroyed() {
    socket.close()
  },
  methods: {
    callback: function(ip, e) {
      // topic handler
      // var tacttime = this.tacttime
      var msg = JSON.parse(e.data)
      if (msg === undefined || msg['pub']['topic'] === undefined) {
        return
      }
      var topic = msg['pub']['topic']
      if (topic === 'TactTime') {
        // var unitName = msg['pub']['content']['UnitName']
        // var tt = msg['pub']['content']['TactTime']
        // if (unitName === 'PTAOI_UNIT1') {
        //   tacttime.pt_aoi_unit1_tt = tt
        // }
        // if (unitName === 'PTAOI_UNIT2') {
        //   tacttime.pt_aoi_unit2_tt = tt
        // }
        // if (unitName === 'PTAOI_UNIT3') {
        //   tacttime.pt_aoi_unit3_tt = tt
        // }
        // if (unitName === 'PTAOI_UNIT4') {
        //   tacttime.pt_aoi_unit4_tt = tt
        // }
        // if (unitName === 'BLUAOI_UNIT1') {
        //   tacttime.blu_aoi_unit1_tt = tt
        // }
        // if (unitName === 'BLUAOI_UNIT2') {
        //   tacttime.blu_aoi_unit2_tt = tt
        // }
        // if (unitName === 'BLUAOI_UNIT3') {
        //   tacttime.blu_aoi_unit3_tt = tt
        // }
        // if (unitName === 'BLUAOI_UNIT4') {
        //   tacttime.blu_aoi_unit4_tt = tt
        // }
        // if (unitName === 'AutoAssy_UNIT1') {
        //   tacttime.auto_assy_unit1_tt = tt
        // }
        // if (unitName === 'AutoAssy_UNIT2') {
        //   tacttime.auto_assy_unit2_tt = tt
        // }
        // if (unitName === 'FIAOI_UNIT1') {
        //   tacttime.fi_aoi_unit1_tt = tt
        // }
        // if (unitName === 'FIAOI_UNIT2') {
        //   tacttime.fi_aoi_unit2_tt = tt
        // }
        // if (unitName === 'FIAOI_UNIT3') {
        //   tacttime.fi_aoi_unit3_tt = tt
        // }
        // if (unitName === 'FIAOI_UNIT4') {
        //   tacttime.fi_aoi_unit4_tt = tt
        // }
        // if (unitName === 'FIAOI_UNIT5') {
        //   tacttime.fi_aoi_unit5_tt = tt
        // }
        // if (unitName === 'FIAOI_UNIT6') {
        //   tacttime.fi_aoi_unit6_tt = tt
        // }
        // if (unitName === 'AutoAffix_UNIT1') {
        //   tacttime.auto_affix_unit1_tt = tt
        // }
        // if (unitName === 'AutoAffix_UNIT2') {
        //   tacttime.auto_affix_unit2_tt = tt
        // }
        // if (unitName === 'AppAOI_UNIT1') {
        //   tacttime.app_aoi_unit1_tt = tt
        // }
        // if (unitName === 'AppAOI_UNIT2') {
        //   tacttime.app_aoi_unit2_tt = tt
        // }
        // if (unitName === 'AutoTape_UNIT1') {
        //   tacttime.auto_tape_unit1_tt = tt
        // }
        // if (unitName === 'FilmAttach_UNIT1') {
        //   tacttime.film_attach_unit1_tt = tt
        // }
        // if (unitName === 'AutoPacking_UNIT1') {
        //   tacttime.auto_packing_unit1_tt = tt
        // }
      }
    },
    setTimeData() {
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
    },
    getPLCInfos() {
      getDatasources(this.query)
        .then(response => {
          let data
          let i = 0
          const { length } = response.sources
          for (; i < length; i += 1) {
            data = response.sources[i]
            this.PLCList.push(data.name)
          }
          let j = 0
          const len = this.PLCList.length
          this.tactTimeList = [[30.7, 20.3, 22.1, 21, 33.8, 44.7, 60.6, 45.2, 44, 46.1, 38.1, 35.3, 60.6, 45.2, 44, 46.1], [30.3, 33.7, 44, 55.2, 66, 77.7, 88.7, 99.3, 44, 46.1, 38.1, 35.3, 66, 77.7, 88.7, 99.3], [44.9, 22.4, 55.3, 33.1, 44.7, 34.5, 35.5, 44.1, 44, 46.1, 38.1, 35.3, 55.3, 33.1, 44.7, 34.5], [35.9, 44, 46.1, 38.1, 35.3, 46.9, 67, 77.4, 44, 46.1, 38.1, 35.3, 46.1, 38.1, 35.3, 46.9]]
          for (; j < len; j++) {
            this.seriesList.push({ name: this.PLCList[j], type: 'bar', data: this.tactTimeList[j], animationDuration })
          }
        })

      // eslint-disable-next-line func-names
        .catch(function(error) {
          console.log(error)
        })
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'infographic')
      this.chart.setOption({
        title: {
          text: 'Tact time',
          textStyle: { fontSize: 25 },
          x: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          padding: [5, 10]
        },
        grid: {
          left: '2%',
          right: 10,
          bottom: 20,
          top: 50,
          containLabel: true
        },
        xAxis: [{
          data: this.timeData,
          boundaryGap: true,
          axisTick: {
            show: false
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
          data: this.PLCList
        },
        series: this.seriesList
        //         [{
        //   name: this.PLCList[0],
        //   type: 'bar',
        //   // itemStyle: itemStyle,
        //   data: [30.7, 20.3, 22.1, 21, 33.8, 44.7, 60.6, 45.2, 44, 46.1, 38.1, 35.3, 60.6, 45.2, 44, 46.1],
        //   animationDuration
        // },
        // {
        //   name: this.PLCList[1],
        //   type: 'bar',
        //   // itemStyle: itemStyle,
        //   data: [30.3, 33.7, 44, 55.2, 66, 77.7, 88.7, 99.3, 44, 46.1, 38.1, 35.3, 66, 77.7, 88.7, 99.3],
        //   animationDuration
        // },
        // {
        //   name: this.PLCList[2],
        //   type: 'bar',
        //   // itemStyle: itemStyle,
        //   data: [44.9, 22.4, 55.3, 33.1, 44.7, 34.5, 35.5, 44.1, 44, 46.1, 38.1, 35.3, 55.3, 33.1, 44.7, 34.5],
        //   animationDuration
        // },
        // {
        //   name: this.PLCList[3],
        //   type: 'bar',
        //   // itemStyle: itemStyle,
        //   data: [35.9, 44, 46.1, 38.1, 35.3, 46.9, 67, 77.4, 44, 46.1, 38.1, 35.3, 46.1, 38.1, 35.3, 46.9],
        //   animationDuration
        // }
        // ]
      })
    }

  }
}
</script>
