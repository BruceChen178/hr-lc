<template>
  <div class="components-container">
    <split-pane split="vertical" @resize="resize">
      <template slot="paneL">
        <div class="left-container">
          <el-row>
            <span>Date Time Select: </span>
            <el-date-picker
                    v-model="statistic.listQuery.time"
                    :default-time="['12:00:00']"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    type="datetimerange"
                    start-placeholder="Start Date"
                    end-placeholder="End Date"
                    style="width: auto"
                    @change="getStatisticList"
            />
          </el-row>
          <el-table v-loading="statistic.listLoading" :data="statistic.list" border fit highlight-current-row style="width: 100%">
            <el-table-column align="center" label="Date" width="200">
              <template slot-scope="scope">
                <span>{{ scope.row.OccuredDate }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="PLC Name" width="200">
              <template slot-scope="scope">
                <span>{{ scope.row.sourceName }}</span>
              </template>
            </el-table-column>

            <el-table-column width="200px" align="center" label="Alarm Code">
              <template slot-scope="scope">
                <span>{{ scope.row.AlarmCode }}</span>
              </template>
            </el-table-column>

            <el-table-column width="200px" align="center" label="Description">
              <template slot-scope="scope">
                <span>{{ scope.row.Description }}</span>
              </template>
            </el-table-column>
            <el-table-column width="130px" align="center" label="Count">
              <template slot-scope="scope">
                <span>{{ scope.row.OccuredCount }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </template>
      <template slot="paneR">
          <div class="top-container">
            <span>Date Time Select: </span>
            <el-date-picker
                    v-model="history.listQuery.time"
                    :default-time="['12:00:00']"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    type="datetimerange"
                    start-placeholder="Start Date"
                    end-placeholder="End Date"
                    style="width: auto"
                    @change="getHistoryList"
            />
            <el-table v-loading="history.listLoading" :data="history.list" border fit highlight-current-row style="width: 100%">
              <el-table-column align="center" label="PLC Name" width="160">
                <template slot-scope="scope">
                  <span>{{ scope.row.sourceName }}</span>
                </template>
              </el-table-column>
              <el-table-column width="140px" align="center" label="Unit Name">
                <template slot-scope="scope">
                  <span>{{ scope.row.unitName }}</span>
                </template>
              </el-table-column>
              <el-table-column width="120px" align="center" label="Alarm Code">
                <template slot-scope="scope">
                  <span>{{ scope.row.alarmCode }}</span>
                </template>
              </el-table-column>
              <el-table-column width="200px" align="center" label="Description">
                <template slot-scope="scope">
                  <span>{{ scope.row.description }}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" label="Occurred Time" width="155">
                <template slot-scope="scope">
                  <span>{{ scope.row.occuredTime }}</span>
                </template>
              </el-table-column>
              <el-table-column width="155px" align="center" label="Release Time">
                <template slot-scope="scope">
                  <span>{{ scope.row.releaseTime }}</span>
                </template>
              </el-table-column>
            </el-table>
            <pagination v-show="history.total>0" :total="history.total" :page.sync="history.listQuery.page" :limit.sync="history.listQuery.limit" @pagination="getHistoryList" />
          </div>
      </template>
    </split-pane>
  </div>
</template>

<script>
  import splitPane from 'vue-splitpane'
  import Pagination from '@/components/Pagination'
  import { getAlarmsStatistic, getHistoryAlarms } from '@/api/history'
  export default {
    name: 'Alarms',
    components: { splitPane, Pagination },
    data() {
      return {
        statistic: {
          list: null,
          total: 0,
          listLoading: false,
          listQuery: {
            page: 1,
            limit: 10,
            sort: '',
            time: [new Date(), new Date()]
          }
        },
        history: {
          list: null,
          total: 0,
          listLoading: false,
          listQuery: {
            page: 1,
            limit: 10,
            sort: '',
            time: [new Date(), new Date()]
          }
        }
      }
    },
    methods: {
      resize() {
        console.log('resize')
      },
      getStatisticList() {
        getAlarmsStatistic(this.statistic.listQuery)
          .then(response => {
            this.statistic.total = typeof (response.paging.totalCount) === 'undefined' ? 0 : response.paging.totalCount
            this.statistic.list = response.statistics
          })
          .catch(function(error) {
            console.log(error)
          })
      },
      getHistoryList() {
        getHistoryAlarms(this.history.listQuery)
          .then(response => {
            this.history.total = typeof (response.paging.totalCount) === 'undefined' ? 0 : response.paging.totalCount
            this.history.list = response.historys
          })
          .catch(function(error) {
            console.log(error)
          })
      }
    }
  }
</script>

<style  scoped>
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
