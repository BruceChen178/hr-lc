<template>
    <div style="">
        <div>
            <h2 style="margin-top: 50px;margin-left: 10px"> MES Host Connection State </h2>
            <el-row style="margin-left: 10px">
                <el-button-group>
                  <el-button v-if="MESIsConnected === 1" type="success">Connected</el-button>
                  <el-button v-else type="danger">Disconnected</el-button>
                  <el-button v-if="MESMode === 'remote'" type="success">Remote</el-button>
                  <el-button v-else-if="MESMode === 'local'" type="info">Local</el-button>
                  <el-button v-else="MESMode === 'offline'" type="danger">Offline</el-button>
                  </el-button-group>
            </el-row>
        </div>

        <div>
            <h2 style="margin-top: 50px;margin-left: 10px"> PLC Connection State </h2>
<!--            <el-button-group>-->
<!--                <el-button type="primary">BLU AOI PLC1</el-button>-->
<!--                <el-button type="success">Connected</el-button>-->
<!--                <el-button type="warning">101ms</el-button>-->
                <template v-for="item in PLCList">
                    <div :key="item.name" style="margin-bottom: 10px; margin-left: 10px">
                        <el-button-group>
                            <el-button type="primary" style="width: 130px">{{ item.name }}</el-button>
                            <el-button v-if="item.connected === true" type="success">Connected</el-button>
                            <el-button v-else type="danger">Disconnected</el-button>
                            <el-button type="warning">{{ item.delay }}</el-button>
                        </el-button-group>
                    </div>
                </template>

        </div>

        <div>
            <h2 style="margin-top: 50px; margin-left: 10px"> EQP Connection State </h2>
<!--            <el-button-group>-->
<!--                <el-button type="primary">BLU AOI PLC1</el-button>-->
<!--                <el-button type="success">Connected</el-button>-->
<!--            </el-button-group>-->
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
  import { SwitchMESConnectMode, getInspectionLists } from '@/api/settings'
  import { getDatasources } from '@/api/datasource'
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
      this.getPLCInfos()
      this.getEQPList()
    },
    methods: {
      getMESConnectedMode() {
        SwitchMESConnectMode().then(response => {
          this.MESIsConnected = response.code
          console.log(this.MESIsConnected)
        })
      },
      getPLCInfos() {
        getDatasources(this.query)
          .then(response => {
            let data
            let i = 0
            const { length } = response.sources
            for (; i < length; i += 1) {
              data = response.sources[i]
              // getDataSourceConnState(data.id).then(response => {
              //   const PLCConnState = response.state
              //   this.PLCList.push({ name: data.name, connected: PLCConnState, delay: '200ms' })
              // })
              this.PLCList.push({ name: data.name, delay: '200ms' })
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
