<template>
  <div class="app-container">
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%">
      <el-table-column
        align="center"
        label="Index"
        width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.index }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="250px"
        align="center"
        label="IP">
        <template slot-scope="scope">
          <span>{{ scope.row.ipAddress }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="150px"
        label="EQP Name">
        <template slot-scope="scope">
          <span>{{ scope.row.eqpName }}</span>
        </template>
      </el-table-column>

      <el-table-column
        min-width="100px"
        max-width="500px"
        label="EQP ID">
        <template slot-scope="{row}">
          <template v-if="row.edit">
            <el-input
              v-model="row.eqpId"
              class="edit-input"
              size="small" />
            <el-button
              class="cancel-btn"
              size="small"
              icon="el-icon-refresh"
              type="warning"
              @click="cancelEdit(row)">
              cancel
            </el-button>
          </template>
          <span v-else>{{ row.eqpId }}</span>
        </template>
      </el-table-column>

      <el-table-column
        class-name="status-col"
        label="Port Num"
        width="150px">
        <template slot-scope="scope">
          <span>{{ scope.row.portNum }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="150px"
        align="center"
        label="Used">
        <template slot-scope="scope">
          <span>{{ scope.row.used }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="300px"
        align="center"
        label="UpdateTime">
        <template slot-scope="scope">
          <span>{{ scope.row.updateTime | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        label="Actions"
        width="150px">
        <template slot-scope="{row}">
          <el-button
            v-if="row.edit"
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
            @click="confirmEdit(row)">
            Ok
          </el-button>
          <el-button
            v-else
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="row.edit=!row.edit">
            Edit
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getInspectionLists, UpdateInspMachineEQPID } from '@/api/settings'

export default {
  data() {
    return {
      tableKey: 0,
      list: [],
      listLoading: true

    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList: function() {
      this.listLoading = true
      getInspectionLists().then(response => {
        const data = response
        const items = data.machines
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
        this.list = items.map(v => {
          this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
          v.originalID = v.eqpId //  will be used when user click the cancel botton
          return v
        })
        this.listLoading = false
      }
      )
        .catch(function(error) {
          console.log(error)
        })
    },
    cancelEdit(row) {
      row.eqpId = row.originalID
      row.edit = false
      this.$message({
        message: 'The EQP ID has been restored to the original value',
        type: 'warning'
      })
    },
    confirmEdit(row) {
      const InspectionMachine = { eqpName: row.eqpName, eqpId: row.eqpId }
      UpdateInspMachineEQPID(InspectionMachine).then(() => {
        for (const v of this.list) {
          if (v.eqpId === row.originalID) {
            const index = this.list.indexOf(v)
            this.list.splice(index, 1, row.eqpId)
            break
          }
        }
        row.edit = false
        row.originalID = row.eqpId
        this.$message({
          message: 'The EQP ID has been edited',
          type: 'success'
        })
      })
    }
  }
}
</script>

<style scoped>
  .edit-input {
    padding-right: 100px;
  }
  .cancel-btn {
    position: absolute;
    right: 15px;
    top: 10px;
  }
</style>
