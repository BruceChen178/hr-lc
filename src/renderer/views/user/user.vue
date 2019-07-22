<!--eslint-disable-->
<template>
  <div class="app-container" id="userVue">
    <el-card shadow="never" :body-style="{padding: 0}">
      <div slot="header">
        <!-- <el-form>
          <el-form-item> -->
            <el-button type="primary" icon="plus" v-if="hasPerm('user:add')" @click="showCreate">添加
            </el-button>
          <!-- </el-form-item>
        </el-form> -->
      </div>
      <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit
          highlight-current-row>
        <el-table-column align="center" label="序号" width="80">
          <template slot-scope="scope">
            <span v-text="getIndex(scope.$index)"> </span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="昵称" prop="nickname" style="width: 60px;"></el-table-column>
        <el-table-column align="center" label="用户名" prop="username" style="width: 60px;"></el-table-column>
        <el-table-column align="center" label="角色" width="100">
          <template slot-scope="scope">
            <el-tag type="success" v-text="scope.row.roleName" v-if="scope.row.roleId===1"></el-tag>
            <el-tag type="primary" v-text="scope.row.roleName" v-else></el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" label="创建时间" prop="createTime" width="170"></el-table-column>
        <el-table-column align="center" label="最近修改时间" prop="updateTime" width="170"></el-table-column>
        <el-table-column align="center" label="管理" width="220" v-if="hasPerm('user:update')">
          <template slot-scope="scope">
            <el-button type="primary" icon="edit" @click="showUpdate(scope.$index)">修改</el-button>
            <el-button type="danger" icon="delete" v-if="scope.row.userId!=userId"
                      @click="removeUser(scope.$index)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="listQuery.pageNum"
        :page-size="listQuery.pageRow"
        :total="totalCount"
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        style="margin: 10px;">
      </el-pagination>
    </el-card>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form class="small-space" :model="tempUser" label-position="left" label-width="80px"
               style='width: 300px; margin-left:50px;'>
        <el-form-item label="用户名" required v-if="dialogStatus=='create'">
          <el-input type="text" v-model="tempUser.username">
          </el-input>
        </el-form-item>
        <el-form-item label="密码" v-if="dialogStatus=='create'" required>
          <el-input type="password" v-model="tempUser.passwd">
          </el-input>
        </el-form-item>
        <el-form-item label="新密码" v-else>
          <el-input type="password" v-model="tempUser.passwd" :disabled="false" placeholder="不填则表示不修改">
          </el-input>
        </el-form-item>
        <el-form-item label="角色" required>
          <el-select v-model="tempUser.roleId" placeholder="请选择">
            <el-option
              v-for="item in roles"
              :key="item.roleId"
              :label="item.roleName"
              :value="item.roleId">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="昵称" required>
          <el-input type="text" v-model="tempUser.nickname" :disabled="false">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button v-if="dialogStatus=='create'" type="success" @click="createUser">创 建</el-button>
        <el-button type="primary" v-else @click="updateUser">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      totalCount: 0, // 分页组件--数据总条数
      list: [], // 表格的数据
      listLoading: false, // 数据加载等待动画
      listQuery: {
        pageNum: 1, // 页码
        pageRow: 50// 每页条数
      },
      roles: [], // 角色列表
      dialogStatus: 'create',
      dialogFormVisible: false,
      textMap: {
        update: '编辑',
        create: '新建用户'
      },
      tempUser: {
        username: '',
        passwd: '',
        nickname: '',
        roleId: '',
        userId: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'userId'
    ])
  },
  created() {
    this.getList()
    if (this.hasPerm('user:add') || this.hasPerm('user:update')) {
      this.getAllRoles()
    }
  },
  methods: {
    getAllRoles() {
      this.api({
        url: '/v1/rbac/user/getAllRoles',
        method: 'get'
      }).then(data => {
        this.roles = data.roles
        console.log(this.roles)
      })
    },
    getList() {
      // 查询列表
      this.listLoading = true
      this.api({
        // url: '/v1/rbac/user/list/{0}/{1}/{2}'.strFormat(this.listQuery.pageNum, this.listQuery.pageRow, 0),
        url: '/v1/rbac/user/list'.concat('/', this.listQuery.pageNum, '/', this.listQuery.pageRow, '/', ''),
        method: 'get'
      }).then(data => {
        this.listLoading = false
        this.list = []
        for (let i = 0; i < data.userPermissions.length; i += 1) {
          let j = 0
          for (; j < this.list.length; j += 1) {
            if (this.list[j].nickname === data.userPermissions[i].nickname) {
              break
            }
          }
          if (j === this.list.length) {
            this.list.push(data.userPermissions[i])
          }
        }

        this.totalCount = data.paging.totalCount
        console.log(this.list)
      })
    },
    handleSizeChange(val) {
      // 改变每页数量
      this.listQuery.pageRow = val
      this.handleFilter()
    },
    handleCurrentChange(val) {
      // 改变页码
      this.listQuery.pageNum = val
      this.getList()
    },
    handleFilter() {
      // 查询事件
      this.listQuery.pageNum = 1
      this.getList()
    },
    getIndex($index) {
      // 表格序号
      return (this.listQuery.pageNum - 1) * this.listQuery.pageRow + $index + 1
    },
    showCreate() {
      // 显示新增对话框
      this.tempUser.username = ''
      this.tempUser.passwd = ''
      this.tempUser.nickname = ''
      this.tempUser.roleId = ''
      this.tempUser.userId = ''
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
    },
    showUpdate($index) {
      const user = this.list[$index]
      this.tempUser.username = user.username
      this.tempUser.nickname = user.nickname
      this.tempUser.roleId = user.roleId
      this.tempUser.userId = user.userId
      this.tempUser.deleteStatus = '1'
      this.tempUser.passwd = ''
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
    },
    createUser() {
      // debugger
      // 添加新用户
      this.api({
        url: '/v1/rbac/user/addUser',
        method: 'post',
        data: this.tempUser
      }).then((data) => {
        if (data.code === 1) {
          this.getList()
        } else {
          this.$message.error(data.msg)
        }
        this.dialogFormVisible = false
      })
    },
    updateUser() {
      // 修改用户信息
      const _vue = this
      console.log(this.tempUser)
      this.api({
        url: '/v1/rbac/user/updateUser',
        method: 'post',
        data: this.tempUser
      }).then((data) => {
        // debugger
        if (data.code === 1) {
          let msg = '修改成功'
          this.dialogFormVisible = false
          if (this.userId === this.tempUser.userId) {
            msg = '修改成功,部分信息重新登录后生效'
          }
          this.$message({
            message: msg,
            type: 'success',
            duration: 1 * 1000,
            onClose: () => {
              _vue.getList()
            }
          })
        } else {
          this.$message({
            message: data.msg,
            type: 'error'
          })
        }
      })
    },
    removeUser($index) {
      const _vue = this
      this.$confirm('确定删除此用户?', '提示', {
        confirmButtonText: '确定',
        showCancelButton: false,
        type: 'warning'
      }).then(() => {
        const user = _vue.list[$index]
        user.deleteStatus = '2'
        _vue.api({
          url: '/v1/rbac/user/updateUser',
          method: 'post',
          data: user
        }).then((data) => {
          if (data.code === 1) {
            _vue.getList()
          } else {
            _vue.$message.error(data.msg)
          }
        }).catch(() => {
          _vue.$message.error('删除失败')
        })
      })
    }
  }
}
</script>

<style>
#userVue .el-dialog__header {
  padding: 15px;
  background-color: rgba(48,126,204,0.5);
}
</style>
