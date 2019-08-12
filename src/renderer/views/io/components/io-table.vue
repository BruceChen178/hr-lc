<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      fit
      highlight-current-row>

      <el-table-column
        min-width="100px"
        align="center"
        label="Address">
        <template slot-scope="{row}">
          <!--          <span>{{ row.address0.description }}</span>-->
          <span>{{ row.sourceItemId }}</span>
        </template>
      </el-table-column>

      <el-table-column
        min-width="350px"
        align="center"
        label="Comment">
        <template slot-scope="{row}">
          <span>{{ row.description }}</span>
        </template>
      </el-table-column>

      <el-table-column
        min-width="100px"
        align="center"
        label="Value">
        <template slot-scope="{row}">
            <el-tag v-if="devType === 'B'" :type="row.varValue | statusFilter">
                {{ row.varValue | valueFilter }}
            </el-tag>
            <span v-else>{{ row.varValue }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import socket from '@/utils/socket.js'
import { GetEQCurrentMetadataByDSId } from '../../../api/datasource'
export default {
  name: 'IOTable',
  filters: {
    statusFilter(value) {
      const statusMap = {
        0: 'danger',
        1: 'success'
      }
      return statusMap[value]
    },
    valueFilter(value) {
      const valueMap = {
        0: 'OFF',
        1: 'ON'
      }
      return valueMap[value]
    }
  },
  props: {
    datasourceId: {
      type: String,
      default: ''
    },
    devType: {
      type: String,
      default: 'B'
    },
    startAddress: {
      type: String,
      default: ''
    },
    addrLen: {
      type: Number,
      default: 0
    },
    direction: {
      type: Number,
      default: 0
    },
    comment: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      query: {
        page: 1,
        limit: 500,
        type: this.currentDS,
        sort: ''
      },
      loading: false,
      tableData: [],
      devType: this.devType,
      direction: this.direction
    }
  },
  mounted() {
    socket.setCallback(this.callback)
    socket.initWebSocket('localhost', 9002)
  },
  destroyed() {
    socket.close()
  },
  created() {
    this.generateTemplate()
  },
  methods: {
    callback: function(ip, e) {
      // topic handler
      var table = this.tableData
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
            console.log(sourceId, devType, devNo, devVal)
          }
        }
      }
    },
    generateTemplate() {
      this.query.currentDS = this.datasourceId
      GetEQCurrentMetadataByDSId(this.query).then(response => {
        const all = response.data
        const len = all.length
        let i = 0
        // const selectIOData = []
        for (; i < len; i++) {
          if (this.devType === 'B') {
            if (this.direction === 0) {
              if (all[i].datatype === 'BOOLEAN_TYPE' && all[i].direction === undefined) {
                this.tableData.push(all[i])
              }
            } else if (this.direction === 'FROM_CIM') {
              if (all[i].datatype === 'BOOLEAN_TYPE' && all[i].direction === 'FROM_CIM') {
                this.tableData.push(all[i])
              }
            }
          } else if (this.devType === 'W') {
            if (this.direction === 0) {
              if (all[i].sourceItemId.includes('W') && all[i].direction === undefined) {
                this.tableData.push(all[i])
              }
            } else if (this.direction === 'FROM_CIM') {
              if (all[i].sourceItemId.includes('W') && all[i].direction === 'FROM_CIM') {
                this.tableData.push(all[i])
              }
            }
          }
        }
        // test value
        // for (i = 0; i < selectIOData.length; i++) {
        //   if (selectIOData[i].datatype === 'BOOLEAN_TYPE' && selectIOData[i].direction === undefined) {
        //     selectIOData[i]['value'] = 1
        //   } else selectIOData[i]['value'] = 0
        // }
        // this.tableData = selectIOData
      })
    }
  }
}
</script>

<style scoped>

</style>
