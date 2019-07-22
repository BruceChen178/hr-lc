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
        width="150px"
        align="center"
        label="IP">
        <template slot-scope="scope">
          <span>{{ scope.row.ip }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="130px"
        label="EQP Name">
        <template slot-scope="scope">
          <span>{{ scope.row.eqp_name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        min-width="100px"
        label="EQP ID">
        <template slot-scope="{row}">
          <template v-if="row.edit">
            <el-input
              v-model="row.eqp_id"
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
          <span v-else>{{ row.eqp_id }}</span>
        </template>
      </el-table-column>

      <el-table-column
        class-name="status-col"
        label="Port Num"
        width="110">
        <template slot-scope="scope">
          <span>{{ scope.row.port_num }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="100px"
        align="center"
        label="Use">
        <template slot-scope="scope">
          <span>{{ scope.row.use }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="180px"
        align="center"
        label="UpdateTime">
        <template slot-scope="scope">
          <span>{{ scope.row.update_time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
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
            size="mini"
            @click="confirmEdit(row)">
            Ok
          </el-button>
          <el-button
            v-else
            type="primary"
            size="mini"
            @click="row.edit=!row.edit">
            Edit
          </el-button>
          <el-button
            type="primary"
            size="mini"
            @click="handleCreate">
            Add
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList" />

    <el-dialog
      :title="textMap[dialogStatus]"
      :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="100px"
        style="width: 400px; margin-left:50px;">
        <el-form-item
          label="IP"
          prop="ip">
          <el-input v-model="temp.ip" />
        </el-form-item>
        <el-form-item
          label="EQP Name"
          prop="eqp_name">
          <el-input v-model="temp.eqp_name" />
        </el-form-item>
        <el-form-item
          label="EQP ID"
          prop="eqp_id">
          <el-input v-model="temp.eqp_id" />
        </el-form-item>

        <el-form-item
          label="Port Num"
          prop="port_num">
          <el-input v-model.number="temp.port_num" />
        </el-form-item>
        <el-form-item
          label="Use"
          prop="use">
          <el-input v-model.number="temp.use" />
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          Cancel
        </el-button>
        <el-button
          type="primary"
          @click="dialogStatus==='create'?createData():updateData()">
          OK
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getInspectionLists, createInspection } from '@/api/settings'
import Pagination from '@/components/Pagination'

export default {
  name: 'InlineEditTable',
  components: { Pagination },
  data() {
    return {
      tableKey: 0,
      // list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        sort: '+index'
      },
      temp: {
        index: undefined,
        ip: '',
        eqp_name: '',
        eqp_id: '',
        port_num: '',
        use: '',
        update_time: new Date()
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      dialogPvVisible: false,
      rules: {
        ip: [{ required: true, message: 'IP is required' }, { min: 7, max: 15, message: '长度在 7 到 15 个字符', trigger: 'blur' }],
        eqp_name: [{ required: true, message: 'EQP Name is required' }, { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }],
        eqp_id: [{ required: true, message: 'EQP ID is required' }, { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }],
        port_num: [{ required: true, message: 'Port Number is required', trigger: 'blur' },
          { type: 'number', message: 'Use must be a number', trigger: 'blur' }],
        use: [{ required: true, message: 'Use is required' },
          { type: 'number', message: 'Use must be a number', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      const { data } = await getInspectionLists(this.listQuery)
      const { items } = data
      this.list = items.map(v => {
        this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
        v.originalID = v.eqp_id //  will be used when user click the cancel botton
        return v
      })
      getInspectionLists(this.listQuery).then(response => {
        this.total = response.data.total
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
      this.listLoading = false
    },
    cancelEdit(row) {
      row.eqp_id = row.originalID
      row.edit = false
      this.$message({
        message: 'The EQP ID has been restored to the original value',
        type: 'warning'
      })
    },
    confirmEdit(row) {
      row.edit = false
      row.originalID = row.eqp_id
      this.$message({
        message: 'The EQP ID has been edited',
        type: 'success'
      })
    },
    resetTemp() {
      this.temp = {
        index: undefined,
        ip: '',
        eqp_name: '',
        eqp_id: '',
        port_num: '',
        use: '',
        update_time: new Date()
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs.dataForm.clearValidate()
      })
    },
    createData() {
      this.$refs.dataForm.validate((valid) => {
        if (valid) {
          createInspection(this.temp).then(() => {
            this.list.unshift(this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: '成功',
              message: '创建成功',
              type: 'success',
              duration: 2000
            })
          })
        }
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
