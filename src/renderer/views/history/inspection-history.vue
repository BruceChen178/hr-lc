<template>
  <div>
    <el-row>
        <el-radio v-model="query.optionBy" label="1" border>By Date Time</el-radio>
        <el-date-picker
          v-model="query.time"
          :default-time="['12:00:00']"
          value-format="yyyy-MM-dd HH:mm:ss"
          type="datetimerange"
          start-placeholder="Start Date"
          end-placeholder="End Date"
          style="width: auto"
          @change="getList"
        />
        <el-radio v-model="query.optionBy" label="2" border>By Panel</el-radio>
        <el-input
          v-model="query.panelId"
          placeholder="panel id"
          prefix-icon="el-icon-search"
          style="width: auto"
          @keyup.enter.native="getList"
        />
    </el-row>

    <el-table
      :data="tbInspections"
      stripe
      fit
      border
    >
      <el-table-column type="index" />
      <el-table-column align="center" label="Panel ID" prop="panelId" />
      <el-table-column align="center" label="Blu Id" prop="bluId" />
      <el-table-column align="center" label="Head Id" prop="headId" />
      <el-table-column align="center" label="Pallet ID" prop="palletId" />
      <el-table-column align="center" label="Position" prop="panelPosition" />
      <el-table-column align="center" label="EQP Name" prop="eqpName" />
      <el-table-column align="center" label="Zone" prop="zone" />
      <el-table-column align="center" label="MDL Data" prop="mdlData" />
      <el-table-column align="center" label="Step ID" prop="stepId" />
      <el-table-column align="center" label="Operator Id" prop="operatorId" />
      <el-table-column align="center" label="Operator Comment" prop="operatorComment" />
      <el-table-column align="center" label="Test StartTime" prop="testStartTime" />
      <el-table-column align="center" label="Test EndTime" prop="testEndTime" />
      <el-table-column align="center" label="Test Result" prop="testResult" />
      <el-table-column align="center" label="VDD" prop="vdd" />
      <el-table-column align="center" label="VBL" prop="vbl" />
      <el-table-column align="center" label="IDD" prop="idd" />
      <el-table-column align="center" label="IBL" prop="ibl" />
      <el-table-column align="center" label="FG Code" prop="fgCode" />
      <el-table-column align="center" label="Defect Grade" prop="defectGrade" />
      <el-table-column align="center" label="Defect Judgment" prop="defectJudgment" />
      <el-table-column align="center" label="Defect Size" prop="defectSize" />
      <el-table-column align="center" label="Defect Code" prop="defectCode" />
      <el-table-column align="center" label="Defect Address" prop="defectAddress" />
      <el-table-column align="center" label="Defect Level" prop="defectLevel" />
      <el-table-column align="center" label="Defect NGArea" prop="defectNGArea" />
      <el-table-column align="center" label="Cell Defect Grade" prop="cellDefectGrade" />
      <el-table-column align="center" label="Cell Defect Judgment" prop="cellDefectJudgment" />
      <el-table-column align="center" label="Cell Defect Size" prop="cellDefectSize" />
      <el-table-column align="center" label="Cell Defect Code" prop="cellDefectCode" />
      <el-table-column align="center" label="Cell Defect Address" prop="cellDefectAddress" />
      <el-table-column align="center" label="Cell Defect Level" prop="cellDefectLevel" />
      <el-table-column align="center" label="Cell Defect NGArea" prop="cellDefectNGArea" />
      <el-table-column align="center" label="AOI Defect Grade" prop="aoiDefectGrade" />
      <el-table-column align="center" label="AOI Defect Judgment" prop="aoiDefectJudgment" />
      <el-table-column align="center" label="AOI Defect Size" prop="aoiDefectSize" />
      <el-table-column align="center" label="AOI Defect Code" prop="aoiDefectCode" />
      <el-table-column align="center" label="AOI Defect Address" prop="aoiDefectAddress" />
      <el-table-column align="center" label="AOI Defect Level" prop="aoiDefectLevel" />
      <el-table-column align="center" label="AOI Defect NGArea" prop="aoiDefectNGArea" />
      <el-table-column align="center" label="Revision Code" prop="revisionCode" />
      <el-table-column align="center" label="Product SpecName" prop="productSpecName" />
      <el-table-column align="center" label="Process OperationName" prop="processOperationName" />
      <el-table-column align="center" label="Product Type" prop="productType" />
      <el-table-column align="center" label="Work Order" prop="workOrder" />
      <el-table-column align="center" label="Group Id" prop="groupId" />
      <el-table-column align="center" label="Test Time" prop="testTime" />
      <el-table-column align="center" label="Defect Position" prop="defectPosition" />
      <el-table-column align="center" label="EDID" prop="edid" />
      <el-table-column align="center" label="Update Time" prop="updateTime" />
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="query.page" :limit.sync="query.limit" @pagination="getList" />
  </div>
</template>
<script>
import Pagination from '@/components/Pagination'
import { getInspectionHistory, getInspectionHistoryByPanelId } from '@/api/history'
export default {
  name: 'InspectionHistory',
  components: {
    Pagination
  },
  // data
  data: function() {
    return {
      tbInspections: [],
      total: 0,
      loading: false,

      query: {
        page: 1,
        limit: 20,
        sort: '',
        optionBy: '1',
        palletId: '',
        panelId: '',
        time: [new Date(), new Date()]
      }
    }
  },
  // created
  created() {
    this.getList()
  },
  // methods
  methods: {
    getList() {
      if (this.query.optionBy === '1') {
        getInspectionHistory(this.query)
          .then(response => {
            this.total = typeof (response.paging.totalCount) === 'undefined' ? 0 : response.paging.totalCount
            this.tbInspections = response.historys
          })
          .catch(function(error) {
            console.log(error)
          })
        // get product history by panel id
      } else if (this.query.optionBy === '2') {
        getInspectionHistoryByPanelId(this.query)
          .then(response => {
            this.total = typeof (response.paging.totalCount) === 'undefined' ? 0 : response.paging.totalCount
            this.tbInspections = response.historys
          })
          .catch(function(error) {
            console.log(error)
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
