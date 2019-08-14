<template>
    <div style="">
        <div>
            <h2 style="margin-top: 50px;margin-left: 10px"> MES Host Connection State </h2>
            <el-row style="margin-left: 50px">
                <el-button-group>
                  <el-button v-if="MESIsConnected === 'MES_CONNECTED'" type="success">Connected</el-button>
                  <el-button v-else type="danger">Disconnected</el-button>
                  <el-button v-if="MESMode === 'REMOTE'" type="success">Remote</el-button>
                  <el-button v-else-if="MESMode === 'LOCAL'" type="info">Local</el-button>
                  <el-button v-else="MESMode === 'OFFLINE'" type="danger">Offline</el-button>
                  </el-button-group>
            </el-row>
        </div>

        <div>
            <h2 style="margin-top: 50px;margin-left: 10px"> PLC Connection State </h2>
                <template v-for="item in PLCList">
                    <div :key="item.name" style="margin-bottom: 10px; margin-left: 50px">
                        <el-button-group>
                            <el-button type="primary" style="width: 130px">{{ item.name }}</el-button>
                            <el-button v-if="item.connected === 'CONNECTED'" type="success">Connected</el-button>
                            <el-button v-else type="danger">Disconnected</el-button>
                            <el-button type="warning">{{ item.delay }}</el-button>
                        </el-button-group>
                    </div>
                </template>
        </div>

        <div>
            <h2 style="margin-top: 50px; margin-left: 10px"> EQP Connection State </h2>
            <template v-for="item in EQPList">
                <div :key="item.name" style="margin-bottom: 10px; margin-left: 50px; float: left">
                    <el-button-group>
                        <el-button type="primary" style="width: 100px">{{ item.name }}</el-button>
                        <el-button v-if="item.connected === true" type="success">Connected</el-button>
                        <el-button v-else type="danger">Disconnected</el-button>
                    </el-button-group>
                </div>
            </template>
        </div>

    </div>
</template>


<script>
  import { getInspectionLists } from '@/api/settings'
  import { getDatasources, getDataSourceConnState, IsMESConnected, GetMESMode } from '@/api/datasource'
  import socket from '@/utils/socket.js'
  export default {
    name: 'index',
    data() {
      return {
        query: {
          page: 1,
          limit: 20,
          sort: '',
          currentDS: ''
        },
        MESIsConnected: null,
        MESMode: null,
        PLCList: [],
        EQPList: []
      }
    },
    created() {
      this.getMESConnectedMode()
      this.getMESMode()
      this.getPLCInfos()
      this.getEQPList()
    },
    mounted() {
      socket.setCallback(this.callback)
      socket.initWebSocket('192.168.31.86', 9002)
    },
    destroyed() {
      socket.close()
    },
    methods: {
      callback: function(ip, e) {
        // topic handler
        var plcList = this.PLCList
        var eqpList = this.EQPList
        var msg = JSON.parse(e.data)
        if (msg === undefined || msg['pub']['topic'] === undefined) {
          return
        }
        var topic = msg['pub']['topic']
        if (topic === 'PLCPerformance') {
          var sourceId = msg['pub']['content']['ID']
          var delay = msg['pub']['content']['CycleTime']
          for (let i = 0; i < plcList.length; i++) {
            if (plcList[i].id === sourceId) {
              plcList[i].delay = Math.floor(delay * 1000) + 'ms'
            }
          }
        }
        if (topic === 'InspectionState') {
          var eqpName = msg['pub']['content']['EQPName']
          var eqpCon = msg['pub']['content']['Connected']
          for (let i = 0; i < eqpList.length; i++) {
            if (eqpList[i].name === eqpName) {
              eqpList[i].connected = eqpCon
            }
          }
        }
      },
      getMESConnectedMode() {
        IsMESConnected().then(response => {
          this.MESIsConnected = response.state
        })
      },
      getMESMode() {
        GetMESMode().then(response => {
          this.MESMode = response.mode
        })
      },
      getPLCInfos() {
        const PLCConList = []
        getDatasources(this.query)
          .then(response => {
            let data
            let i = 0
            const { length } = response.sources
            for (; i < length; i += 1) {
              data = response.sources[i]
              PLCConList.push({ id: data.id, name: data.name, delay: '0ms' })
            }
            let j = 0
            const len = PLCConList.length
            for (; j < len; j += 1) {
              this.query.currentDS = PLCConList[j].id
              getDataSourceConnState(this.query).then(response => {
                const PLCConnState = response
                let a = 0
                for (; a < len; a++) {
                  if (PLCConList[a].id === PLCConnState.id) {
                    PLCConList[a]['connected'] = PLCConnState.state
                    this.PLCList.push(PLCConList[a])
                  }
                }
              })
            }
          })
          // eslint-disable-next-line func-names
          .catch(function(error) {
            console.log(error)
          })
      },
      getEQPList() {
        getInspectionLists()
          .then(response => {
            const items = response.machines
            let i = 0
            const len = items.length
            for (; i < len; i++) {
              this.EQPList.push({ name: items[i].eqpName, connected: items[i].connected })
            }
          })
      }
    }
  }
</script>

<style scoped>

</style>
