<template>
<!--    <div>-->
<!--        <el-row>-->
<!--            <el-radio v-model="query.optionBy" label="1" border>By Date Time</el-radio>-->
<!--            <el-date-picker-->
<!--                    v-model="query.time"-->
<!--                    :default-time="['12:00:00']"-->
<!--                    value-format="yyyy-MM-dd HH:mm:ss"-->
<!--                    type="datetimerange"-->
<!--                    start-placeholder="Start Date"-->
<!--                    end-placeholder="End Date"-->
<!--                    style="width: auto"-->
<!--                    @change="getList"-->
<!--            />-->
<!--            <el-radio v-model="query.optionBy" label="2" border>By Panel</el-radio>-->
<!--            <el-input-->
<!--                    v-model="query.panelId"-->
<!--                    placeholder="panel id"-->
<!--                    prefix-icon="el-icon-search"-->
<!--                    style="width: auto"-->
<!--                    @keyup.enter.native="getList"-->
<!--            />-->
<!--        </el-row>-->

<!--        <el-table-->
<!--                :data="tbInspections"-->
<!--                stripe-->
<!--                fit-->
<!--                border-->
<!--        >-->
<!--            <el-table-column type="index" />-->
<!--            <el-table-column align="center" label="Unit Name" prop="unitName" />-->
<!--            <el-table-column align="center" label="Tact Time" prop="tactTime" />-->
<!--            <el-table-column align="center" label="Report Time" prop="reportTime" />-->

<!--        </el-table>-->
<!--        <pagination v-show="total>0" :total="total" :page.sync="query.page" :limit.sync="query.limit" @pagination="getList" />-->
<!--    </div>-->
</template>
<script>
  // import Pagination from '@/components/Pagination'
  // import { getInspectionHistory, getInspectionHistoryByPanelId } from '@/api/history'
  // export default {
  //   name: 'InspectionHistory',
  //   components: {
  //     Pagination
  //   },
  //   // data
  //   data: function() {
  //     return {
  //       tbInspections: [],
  //       total: 0,
  //       loading: false,
  //
  //       query: {
  //         page: 1,
  //         limit: 20,
  //         sort: '',
  //         optionBy: '1',
  //         palletId: '',
  //         panelId: '',
  //         time: [new Date(), new Date()]
  //       }
  //     }
  //   },
  //   // created
  //   created() {
  //     this.getList()
  //   },
  //   // methods
  //   methods: {
  //     getList() {
  //       if (this.query.optionBy === '1') {
  //         getInspectionHistory(this.query)
  //           .then(response => {
  //             this.total = typeof (response.paging.totalCount) === 'undefined' ? 0 : response.paging.totalCount
  //             this.tbInspections = response.historys
  //           })
  //           .catch(function(error) {
  //             console.log(error)
  //           })
  //         // get product history by panel id
  //       } else if (this.query.optionBy === '2') {
  //         getInspectionHistoryByPanelId(this.query)
  //           .then(response => {
  //             this.total = typeof (response.paging.totalCount) === 'undefined' ? 0 : response.paging.totalCount
  //             this.tbInspections = response.historys
  //           })
  //           .catch(function(error) {
  //             console.log(error)
  //           })
  //       }
  //     }
  //   }
  // }
</script>

<style scoped>

</style>

