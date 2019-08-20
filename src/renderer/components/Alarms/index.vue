<template>
    <div>
        <el-button v-if="alarmNumber === 0"  icon="el-icon-bell" size="mini " round="">{{ alarmNumber }}</el-button>
        <el-button v-else type="danger" icon="el-icon-bell" size="mini " round="" @click="dialogTableVisible = true">{{ alarmNumber }}</el-button>

    <el-dialog v-el-drag-dialog :visible.sync="dialogTableVisible" title="Alarm Message List" @dragDialog="handleDrag">
<!--    <el-select ref="select" v-model="value" placeholder="请选择">-->
<!--        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />-->
<!--    </el-select>-->
    <el-table :data="gridData">
<!--        <el-table-column property="SourceName" label="SourceName" />-->
        <el-table-column property="AlarmCode" label="AlarmCode" />
        <el-table-column property="UnitName" label="UnitName" />
        <el-table-column property="Description" label="Description" />
        <el-table-column property="OccuredTime" label="OccuredTime" />
    </el-table>
    </el-dialog>
    </div>
</template>

<script>
  import elDragDialog from '@/directive/el-drag-dialog'
  import socket from '@/utils/socket.js'
  export default {
    name: 'index',
    directives: { elDragDialog },
    data() {
      return {
        alarmNumber: 0,
        dialogTableVisible: false,
        // options: [
        //   { value: '选项1', label: '黄金糕' },
        //   { value: '选项2', label: '双皮奶' },
        //   { value: '选项3', label: '蚵仔煎' },
        //   { value: '选项4', label: '龙须面' }
        // ],
        value: '',
        gridData: []
      }
    },
    mounted() {
      socket.setCallback(this.callback)
      socket.initWebSocket('192.168.31.86', 9002)
    },
    // watch: {
    //   gridData: function(val) {
    //     if (val.length !== 0) {
    //       this.dialogTableVisible = true
    //     }
    //     if (val.length === 0) {
    //       this.dialogTableVisible = false
    //       this.alarmNumber = 0
    //     }
    //   }
    // },
    // destroyed() {
    //   socket.close()
    // },
    methods: {
      // v-el-drag-dialog onDrag callback function
      handleDrag() {
        this.$refs.select.blur()
      },
      callback: function(ip, e) {
        // topic handler
        var msg = JSON.parse(e.data)
        // msg = {
        //   pub: {
        //     lineNo: '11',
        //     topic: 'AlarmInfo',
        //     content: {
        //       alarms: [
        //         { 'SourceId': 'xxx', 'SourceName': 'name1', 'AlarmCode': 'code1', 'UnitName': 'unit1', 'Description': 'description', 'OccuredTime': 'time1' },
        //         { 'SourceId': 'xxx2', 'SourceName': 'name2', 'AlarmCode': 'code2', 'UnitName': 'unit2', 'Description': 'description', 'OccuredTime': 'time2' }
        //       ]
        //     }
        //   }
        // }
        if (msg === undefined || msg['pub']['topic'] === undefined) {
          return
        }
        var topic = msg['pub']['topic']
        if (topic === 'AlarmInfo') {
          var alarms = []
          alarms = msg['pub']['content']['alarms']
          this.gridData = alarms
          this.alarmNumber = alarms.length
          if (this.alarmNumber !== 0) {
            this.dialogTableVisible = true
          } else {
            this.dialogTableVisible = false
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
