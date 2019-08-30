<template>
  <div class="app-container">
    <el-tabs :tab-position="tabPosition" @tab-click="handleClick" style="">
      <el-tab-pane v-for="item in sections" :key="item.id" :label="item.label">
          <div class="table-container">
        <el-row :gutter="20">
          <el-col :span="6" :offset="4"><span>Receive Data (PLC >> CIM)</span></el-col>
          <el-col :span="6" :offset="6"><span>Send Data (PLC << CIM)</span></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
              <i-o-table
                      :datasource-id="item.datasourceId"
                      :dev-type="item.devType"
                      :start-address="item.startPoint"
                      :direction="plcDir"
                      :addr-len="item.length"
                      :comment="item.comment"
                       :data="tableData"/>
          </el-col>
          <el-col :span="12">
              <i-o-table
                      :datasource-id="item.datasourceId"
                      :dev-type="item.devType"
                      :start-address="item.startPoint"
                      :direction="dir"
                      :addr-len="item.length"
                      :comment="item.comment"
                      :data="tableData1" />
          </el-col>
        </el-row>
          </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import IOTable from './io-table'
import { getMitPLCConfigs, GetEQCurrentMetadataByDSId } from '@/api/datasource'
import socket from '@/utils/socket.js'

export default {
  name: 'IOSection',
  components: { IOTable },
  props: {
    datasourceId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      sourceId: this.datasourceId,
      sections: [],
      query: {
        page: 1,
        limit: 5000,
        sort: '',
        currentDS: ''
      },
      activeName: 'Bit',
      plcDir: '0',
      dir: 'FROM_CIM',
      tabPosition: 'top',
      tableData: [],
      tableData1: []
    }
  },
  created() {
    this.getSectionConfigs()
    this.generateTemplate()
  },
  mounted() {
    socket.setCallback(this.callback)
    socket.initWebSocket('localhost', 9002)
  },
  destroyed() {
    socket.close()
  },
  methods: {
    callback: function(ip, e) {
      // topic handler
      var table = this.tableData
      var tableSendData = this.tableData1
      var msg = JSON.parse(e.data)
      if (msg === undefined || msg['pub']['topic'] === undefined) {
        return
      }
      var topic = msg['pub']['topic']
      if (topic === 'IO') {
        // var lineNo = msg['pub']['LineNo']
        var sourceId = msg['pub']['content']['ID']
        var devType = msg['pub']['content']['DevType']
        var devNo = msg['pub']['content']['DevNo']
        var devVal = msg['pub']['content']['Value']

        for (let i = 0; i < table.length; i++) {
          if (table[i].datasourceId === sourceId &&
            table[i].sourceItemId.slice(0, 1) === devType &&
            parseInt(table[i].sourceItemId.slice(1), 16) === parseInt(devNo, 16)) {
            table[i].varValue = devVal
          //  console.log(sourceId, devType, devNo, devVal)
          }
        }
        for (let i = 0; i < tableSendData.length; i++) {
          if (tableSendData[i].datasourceId === sourceId &&
            tableSendData[i].sourceItemId.slice(0, 1) === devType &&
            parseInt(tableSendData[i].sourceItemId.slice(1), 16) === parseInt(devNo, 16)) {
            tableSendData[i].varValue = devVal
            // console.log(sourceId, devType, devNo, devVal)
          }
        }
      }
    },
    getSectionConfigs() {
      this.query.currentDS = this.sourceId
      getMitPLCConfigs(this.query)
        .then(response => {
          const items = response.configs
          const len = items.length

          if (len > 1) {
            let i
            for (i = 0; i < len; i++) {
              if (items[i].devType === 'B') {
                items[i]['label'] = 'Bit'
              } else if (items[i].devType === 'W') {
                items[i]['label'] = 'Word'
              }
            }
            this.sections.push(items[0])
            this.sections.push(items[1])
          }
        })
        // eslint-disable-next-line func-names
        .catch(function(error) {
          console.log(error)
        })
    },
    handleClick(tab) {
      this.query.currentDS = this.datasourceId
      GetEQCurrentMetadataByDSId(this.query).then(response => {
        const all = response.data
        const len = all.length
        let i = 0
        this.tableData.splice(0, this.tableData.length)
        this.tableData1.splice(0, this.tableData1.length)

        for (; i < len; i++) {
          if (tab.label === 'Bit') {
            if (all[i].datatype === 'BOOLEAN_TYPE' && all[i].direction === undefined) {
              this.tableData.push(all[i])
            }
            if (all[i].datatype === 'BOOLEAN_TYPE' && all[i].direction === 'FROM_CIM') {
              this.tableData1.push(all[i])
            }
          } else if (tab.label === 'Word') {
            if (all[i].sourceItemId.includes('W') && all[i].direction === undefined) {
              this.tableData.push(all[i])
            }
            if (all[i].sourceItemId.includes('W') && all[i].direction === 'FROM_CIM') {
              this.tableData1.push(all[i])
            }
          }
        }
      })
    },
    generateTemplate() {
      this.query.currentDS = this.datasourceId
      GetEQCurrentMetadataByDSId(this.query).then(response => {
        const all = response.data
        const len = all.length
        let i = 0
        for (; i < len; i++) {
          if (all[i].datatype === 'BOOLEAN_TYPE' && all[i].direction === undefined) {
            this.tableData.push(all[i])
          }
          if (all[i].datatype === 'BOOLEAN_TYPE' && all[i].direction === 'FROM_CIM') {
            this.tableData1.push(all[i])
          }
        }
      })
    }
  }

}
</script>

<style scoped>

</style>
