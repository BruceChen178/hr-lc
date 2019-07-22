<template>
  <div class="components-container">
    <split-pane
      split="vertical"
      @resize="resize">
      <template slot="paneL">
        <div class="left-container">
          <el-table
            ref="sourcesTable"
            v-loading="loading"
            element-loading-text="Loading..."
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
            highlight-current-row
            :data="tbSourceData"
            stripe
            fit
            border
            @row-click="handleCurrentChange">
            <el-table-column type="index" />
            <el-table-column
              align="center"
              label="ID"
              prop="id" />
            <el-table-column
              align="center"
              label="Name"
              prop="name" />
            <el-table-column
              align="center"
              label="Description"
              prop="description" />
            <el-table-column
              align="center"
              label="DS Type"
              prop="ds_type" />
            <el-table-column
              align="center"
              label="DS Protocol"
              prop="ds_protocol" />
            <el-table-column
              align="center"
              label="passive"
              prop="passive" />
          </el-table>
        </div>
      </template>
      <template slot="paneR">
        <split-pane split="horizontal">
          <template slot="paneL">
            <div class="top-container">
              <el-table
                :data="tbCommData"
                stripe
                fit
                border>
                <el-table-column type="index" />
                <el-table-column
                  align="center"
                  label="IP"
                  prop="ip_address" />
                <el-table-column
                  align="center"
                  label="Port"
                  prop="port" />
                <el-table-column
                  align="center"
                  label="Station"
                  prop="station" />
                <el-table-column
                  align="center"
                  label="Cyclic"
                  prop="isCyclic" />
              </el-table>
            </div>
          </template>
          <template slot="paneR">
            <div class="bottom-container">
              <el-table
                v-loading="loading"
                element-loading-text="Loading..."
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.8)"
                highlight-current-row
                :data="tbConfigData"
                stripe
                fit
                border>
                <el-table-column type="index" />
                <el-table-column
                  align="center"
                  label="ID"
                  prop="id" />
                <el-table-column
                  align="center"
                  label="Dev Type"
                  prop="devType" />
                <el-table-column
                  align="center"
                  label="Start"
                  prop="startPoint" />
                <el-table-column
                  align="center"
                  label="Length"
                  prop="length" />
                <el-table-column
                  align="center"
                  label="Comment"
                  prop="comment" />
                <el-table-column
                  align="center"
                  label="Direction"
                  prop="direction" />
              </el-table>
            </div>
          </template>
        </split-pane>
      </template>
    </split-pane>
  </div>
</template>

<script>
import splitPane from 'vue-splitpane'
import { getDatasources, getMitPLCCommInfo, getMitPLCConfigs } from '@/api/datasource'
// import Pagination from '@/components/Pagination'
export default {
  name: 'Items',
  components: {
    splitPane
  },
  data() {
    return {
      tbSourceData: [],
      tbCommData: [],
      tbConfigData: [],
      loading: true,
      query: {
        page: 1,
        limit: 50,
        sort: '',
        currentDS: ''
      }
    }
  },
  created() {
    this.getSourceItems()
  },
  methods: {
    getSourceItems() {
      this.loading = true
      getDatasources(this.query)
        .then(response => {
          this.tbSourceData = response.sources
          this.tbMetadata = response.data
          if (this.tbSourceData.length > 0) {
            this.$refs.sourcesTable.setCurrentRow(this.tbSourceData[0])
          }
        })
        // eslint-disable-next-line func-names
        .catch(function(error) {
          console.log(error)
        })
      this.loading = false
    },
    handleCurrentChange(row, column, event) {
      this.tbCommData = []
      this.tbConfigData = []
      if (row.id.length > 0) {
        this.query.currentDS = row.id
        getMitPLCCommInfo(this.query)
          .then(response => {
            this.tbCommData = response.comms
          })
          // eslint-disable-next-line func-names
          .catch(function(error) {
            console.log(error)
          })

        getMitPLCConfigs(this.query)
          .then(response => {
            this.tbConfigData = response.configs
          })
          // eslint-disable-next-line func-names
          .catch(function(error) {
            console.log(error)
          })
      }
    },
    resize() {
      console.log('resize')
    }
  }
}
</script>

<style scoped>
  .components-container {
    position: relative;
    height: 100vh;
  }

  .left-container {
    /*background-color: #F38181;*/
    height: 100%;
  }

  .right-container {
    /*background-color: #FCE38A;*/
    height: 200px;
  }

  .top-container {
    /*background-color: #FCE38A;*/
    width: 100%;
    height: 100%;
  }

  .bottom-container {
    width: 100%;
    /*background-color: #95E1D3;*/
    height: 100%;
  }
</style>
