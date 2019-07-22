<template>
  <div class="app-container">
    <el-form
      ref="dataForm"
      :rules="rules"
      :model="temp"
      label-position="right"
      label-width="290px"
      inline
      style="margin-left:30px;">
      <el-form-item
        label="SERVICE"
        prop="service">
        <el-input v-model="temp.service" />
      </el-form-item>
      <el-form-item
        label="NETWORK"
        prop="network">
        <el-input v-model="temp.network" />
      </el-form-item>
      <el-form-item
        label="DAEMON"
        prop="daemon">
        <el-input v-model="temp.daemon" />
      </el-form-item>
      <el-form-item
        label="SUBJECT"
        prop="subject">
        <el-input v-model="temp.subject" />
      </el-form-item>
      <el-form-item
        label="LISTEN_SERVICE"
        prop="listen_service">
        <el-input v-model="temp.listen_service" />
      </el-form-item>
      <el-form-item
        label="LISTEN_NETWORK"
        prop="listen_network">
        <el-input v-model="temp.listen_network" />
      </el-form-item>
      <el-form-item
        label="LISTEN_DAEMON"
        prop="listen_daemon">
        <el-input v-model="temp.listen_daemon" />
      </el-form-item>
      <el-form-item
        label="LISTEN_SUBJECT"
        prop="listen_subject">
        <el-input v-model="temp.listen_subject" />
      </el-form-item>
      <el-form-item
        label="POL_TEST_HOSTNAME"
        prop="pol_test_hostname">
        <el-input v-model="temp.pol_test_hostname" />
      </el-form-item>
      <el-form-item
        label="PI_HOSTNAME"
        prop="pi_hostname">
        <el-input v-model="temp.pi_hostname" />
      </el-form-item>
      <el-form-item
        label="PT_AOI_HOSTNAME"
        prop="pt_aoi_hostname">
        <el-input v-model="temp.pt_aoi_hostname" />
      </el-form-item>
      <el-form-item
        label="PT_MANU_HOSTNAME"
        prop="pt_manu_hostname">
        <el-input v-model="temp.pt_manu_hostname" />
      </el-form-item>
      <el-form-item
        label="CF_HOSTNAME"
        prop="cf_hostname">
        <el-input v-model="temp.cf_hostname" />
      </el-form-item>
      <el-form-item
        label="BLU_AOI_HOSTNAME"
        prop="blu_aoi_hostname">
        <el-input v-model="temp.blu_aoi_hostname" />
      </el-form-item>
      <el-form-item
        label="AUTO_ASSY_HOSTNAME"
        prop="auto_assy_hostname">
        <el-input v-model="temp.auto_assy_hostname" />
      </el-form-item>
      <el-form-item
        label="AUTO_ASSY_PLC_HOSTNAME"
        prop="auto_assy_plc_hostname">
        <el-input v-model="temp.auto_assy_plc_hostname" />
      </el-form-item>
      <el-form-item
        label="AUTO_TAPE_HOSTNAME"
        prop="auto_tape_hostname">
        <el-input v-model="temp.auto_tape_hostname" />
      </el-form-item>
      <el-form-item
        label="FI_AOI_HOSTNAME"
        prop="fi_aoi_hostname">
        <el-input v-model="temp.fi_aoi_hostname" />
      </el-form-item>
      <el-form-item
        label="FI_TEST_HOSTNAME"
        prop="fi_test_hostname">
        <el-input v-model="temp.fi_test_hostname" />
      </el-form-item>
      <el-form-item
        label="FILM_ATTACH_HOSTNAME"
        prop="film_attach_hostname">
        <el-input v-model="temp.film_attach_hostname" />
      </el-form-item>
      <el-form-item
        label="AUTO_AFFIX_HOSTNAME"
        prop="auto_affix_hostname">
        <el-input v-model="temp.auto_affix_hostname" />
      </el-form-item>
      <el-form-item
        label="APP_AOI_HOSTNAME"
        prop="app_aoi_hostname">
        <el-input v-model="temp.app_aoi_hostname" />
      </el-form-item>
      <el-form-item
        label="ST_HOSTNAME"
        prop="st_hostname">
        <el-input v-model="temp.st_hostname" />
      </el-form-item>
      <el-form-item
        label="VI_HOSTNAME"
        prop="vi_hostname">
        <el-input v-model="temp.vi_hostname" />
      </el-form-item>
      <el-form-item
        label="RT_HOSTNAME"
        prop="rt_hostname">
        <el-input v-model="temp.rt_hostname" />
      </el-form-item>
      <el-form-item
        label="AUTO_PACKING_HOSTNAME"
        prop="auto_packing_hostname">
        <el-input v-model="temp.auto_packing_hostname" />
      </el-form-item>
      <el-form-item
        label="LINE_HOSTNAME"
        prop="line_hostname">
        <el-input v-model="temp.line_hostname" />
      </el-form-item>
      <el-form-item
        label="TIMEOUT"
        prop="timeout">
        <el-input v-model="temp.timeout" />
      </el-form-item>
    </el-form>
    <div
      slot="footer"
      class="dialog-footer"
      style="float: right">
      <el-button
        type="primary"
        @click="dialogStatus==='create'?createData():updateData()">
        SAVE
      </el-button>
    </div>
  </div>
</template>

<script>
import { getHostinfos, updateHostinfos } from '@/api/settings'
// import waves from '@/directive/waves' // waves directive

export default {
  name: 'ComplexTable',
  // directives: { waves },
  data() {
    return {
      list: null,
      listQuery: {
        page: 1,
        limit: 1
      },
      temp: {
        service: '',
        network: '',
        daemon: '',
        subject: '',
        listen_service: '',
        listen_network: '',
        listen_daemon: '',
        listen_subject: '',
        pol_test_hostname: '',
        pi_hostname: '',
        pt_aoi_hostname: '',
        pt_manu_hostname: '',
        cf_hostname: '',
        blu_aoi_hostname: '',
        auto_assy_hostname: '',
        auto_assy_plc_hostname: '',
        auto_tape_hostname: '',
        fi_aoi_hostname: '',
        fi_test_hostname: '',
        film_attach_hostname: '',
        auto_affix_hostname: '',
        app_aoi_hostname: '',
        st_hostname: '',
        vi_hostname: '',
        rt_hostname: '',
        auto_packing_hostname: '',
        line_hostname: '',
        timeout: ''
      },
      rules: {
        service: [{ required: true, message: 'service is required', trigger: 'blur' }],
        network: [{ required: true, message: 'service is required', trigger: 'blur' }],
        daemon: [{ required: true, message: 'service is required', trigger: 'blur' }],
        subject: [{ required: true, message: 'service is required', trigger: 'blur' }],
        listen_service: [{ required: true, message: 'service is required', trigger: 'blur' }],
        listen_network: [{ required: true, message: 'service is required', trigger: 'blur' }],
        listen_daemon: [{ required: true, message: 'service is required', trigger: 'blur' }],
        listen_subject: [{ required: true, message: 'service is required', trigger: 'blur' }],
        pol_test_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        pi_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        pt_aoi_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        pt_manu_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        cf_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        blu_aoi_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        auto_assy_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        auto_assy_plc_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        auto_tape_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        fi_aoi_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        fi_test_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        film_attach_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        auto_affix_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        app_aoi_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        st_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        vi_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        rt_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        auto_packing_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        line_hostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        timeout: [{ required: true, message: 'service is required', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      getHostinfos(this.listQuery).then(response => {
        this.list = response.data.items
        if (this.list !== null) {
          this.handleUpdate()
        }
        // Just to simulate the time of the request
        setTimeout(() => {
          if (this.list !== null) {
            this.handleUpdate()
          }
        }, 1.5 * 1000)
      })
    },
    handleUpdate() {
      // eslint-disable-next-line prefer-destructuring
      this.temp = this.list[0] // copy obj
      this.$nextTick(() => {
        this.$refs.dataForm.clearValidate()
      })
    },
    updateData() {
      this.$refs.dataForm.validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          // tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateHostinfos(tempData).then(() => {
            // eslint-disable-next-line no-restricted-syntax
            for (const v of this.list) {
              const index = this.list.indexOf(v)
              this.list.splice(index, 1, this.temp)
              break
            }
            this.$notify({
              title: '成功',
              message: '更新成功',
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
