<template>
  <div class="editor">
    <el-form
      ref="userEditorForm"
      :model="form"
      :rules="rules"
      label-width="100px"
      label-position="right">
      <el-form-item
        label="头像:"
        prop="avatar">
        <el-upload
          class="avatar-uploader"
          :action="action"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img
            v-if="form.avatar"
            :src="form.avatar"
            class="avatar">
          <i
            v-else
            class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
      <el-form-item label="用户名:">
        <el-input
          v-model="form.username"
          :disabled="true" />
      </el-form-item>
      <el-form-item
        label="昵称:"
        prop="nickname">
        <el-input v-model="form.nickname" />
      </el-form-item>
      <el-form-item label="修改密码">
        <el-switch v-model="form.changePass" />
      </el-form-item>
      <el-form-item
        v-if="form.changePass"
        label="初始密码:"
        prop="oldPassword">
        <el-input
          v-model="form.oldPassword"
          show-password />
      </el-form-item>
      <el-form-item
        v-if="form.changePass"
        label="新密码:"
        prop="newPassword">
        <el-input
          v-model="form.newPassword"
          show-password />
      </el-form-item>
      <el-form-item
        v-if="form.changePass"
        label="重复密码:"
        prop="passwordRepeat">
        <el-input
          v-model="form.passwordRepeat"
          show-password />
      </el-form-item>
      <el-form-item>
        <div style="float: right;">
          <el-button
            type="primary"
            @click="submitForm('userEditorForm')">
            submit
          </el-button>
          <el-button @click="resetForm('userEditorForm')">
            reset
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { isEmptyNull } from '@/utils/index'

export default {
  data() {
    // var validatePass = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请输入密码'))
    //   } else {
    //     if (this.form.passwordRepeat !== '') {
    //       this.$refs.form.validateField('passwordRepeat')
    //     }
    //     callback()
    //   }
    // }
    // var validatePass2 = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请再次输入密码'))
    //   } else if (value !== this.form.newPassword) {
    //     callback(new Error('两次输入密码不一致!'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      form: {
        avatar: '',
        username: '',
        nickname: '',
        changePass: false,
        oldPassword: '',
        newPassword: '',
        passwordRepeat: ''
      },
      rules: {
        avatar: [
          { required: true, message: '请选择头像', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        oldPassword: [
          { required: true, message: '请输入原始密码', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' }
        ],
        passwordRepeat: [
          { required: true, message: '请重复输入新密码', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    action() {
      return `${this.$serverURL}/sys/ueditor/exec?action=uploadimage`
    },
    ...mapGetters([
      'username',
      'nickname',
      'avatar'
    ])
  },
  watch: {
    form: {
      handler(newValue, oldValue) {
        if (newValue.changePass === false) {
          this.form.oldPassword = ''
          this.form.newPassword = ''
          this.form.passwordRepeat = ''
        }
      },
      deep: true
    }
  },
  mounted() {
    this.form.nickname = this.nickname
    this.form.username = this.username
    this.form.avatar = isEmptyNull(this.avatar) ? '' : this.avatar
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.form.avatar = this.$serverURL + res.url
      console.log(this.form.avatar)
    },
    beforeAvatarUpload(file) {

    },
    submitForm(formName) {
      const that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (that.form.newPassword === that.form.passwordRepeat) {
            if (that.form.passwordRepeat === that.form.oldPassword && that.changePass === true) {
              this.$message.error('新旧密码一样')
              return false
            }
            this.$confirm('您确定要修改用户信息吗, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              // 修改用户信息
              this.api({
                url: '/user/updateUser',
                method: 'post',
                data: that.form
              }).then(() => {
                const msg = '修改成功'
                this.$message({
                  message: msg,
                  type: 'success',
                  duration: 1 * 1000,
                  onClose: () => {

                  }
                })
                that.SET_NICKNAME(that.form.nickname)
                that.SET_AVATAR(that.form.avatar)
              }).catch(() => {

              })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消修改'
              })
            })
          } else {
            this.$message.error('2次密码不一致')
            return false
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      console.log(formName)
      this.$refs[formName].resetFields()
      console.log(formName)
    },
    ...mapMutations([
      'SET_NICKNAME',
      'SET_AVATAR'
    ])
  }
}
</script>

<style>
  .editor {
    width: 282px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
