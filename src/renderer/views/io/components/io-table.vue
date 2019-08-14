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
        min-width="270px"
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
export default {
  name: 'IOTable',
  filters: {
    statusFilter(value) {
      const statusMap = {
        0: 'danger',
        1: 'success',
        undefined: 'danger'
      }
      return statusMap[value]
    },
    valueFilter(value) {
      const valueMap = {
        0: 'OFF',
        1: 'ON',
        undefined: 'OFF'
      }
      return valueMap[value]
    }
  },
  props: {
    data: {
      type: Array,
      default: []
    },
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
      type: String,
      default: ''
    },
    comment: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tableData: this.data
    }
  }
}
</script>

<style scoped>

</style>
