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
        prop="listenService">
        <el-input v-model="temp.listenService" />
      </el-form-item>
      <el-form-item
        label="LISTEN_NETWORK"
        prop="listenNetwork">
        <el-input v-model="temp.listenNetwork" />
      </el-form-item>
      <el-form-item
        label="LISTEN_DAEMON"
        prop="listenDaemon">
        <el-input v-model="temp.listenDaemon" />
      </el-form-item>
      <el-form-item
        label="LISTEN_SUBJECT"
        prop="listenSubject">
        <el-input v-model="temp.listenSubject" />
      </el-form-item>
      <el-form-item
        label="POL_TEST_HOSTNAME"
        prop="polTestHostname">
        <el-input v-model="temp.polTestHostname" />
      </el-form-item>
      <el-form-item
        label="PI_HOSTNAME"
        prop="piHostname">
        <el-input v-model="temp.piHostname" />
      </el-form-item>
      <el-form-item
        label="PT_AOI_HOSTNAME"
        prop="ptAOIHostname">
        <el-input v-model="temp.ptAOIHostname" />
      </el-form-item>
      <el-form-item
        label="PT_MANU_HOSTNAME"
        prop="ptManuHostName">
        <el-input v-model="temp.ptManuHostName" />
      </el-form-item>
      <el-form-item
        label="CF_HOSTNAME"
        prop="cfHostName">
        <el-input v-model="temp.cfHostName" />
      </el-form-item>
      <el-form-item
        label="BLU_AOI_HOSTNAME"
        prop="bluHostName">
        <el-input v-model="temp.bluHostName" />
      </el-form-item>
      <el-form-item
        label="AUTO_ASSY_HOSTNAME"
        prop="assyHostName">
        <el-input v-model="temp.assyHostName" />
      </el-form-item>
      <el-form-item
        label="AUTO_ASSY_PLC_HOSTNAME"
        prop="assyPLCHostName">
        <el-input v-model="temp.assyPLCHostName" />
      </el-form-item>
      <el-form-item
        label="AUTO_TAPE_HOSTNAME"
        prop="autoTapeHostName">
        <el-input v-model="temp.autoTapeHostName" />
      </el-form-item>
      <el-form-item
        label="FI_AOI_HOSTNAME"
        prop="fiAOIHostName">
        <el-input v-model="temp.fiAOIHostName" />
      </el-form-item>
      <el-form-item
        label="FI_TEST_HOSTNAME"
        prop="fiHostName">
        <el-input v-model="temp.fiHostName" />
      </el-form-item>
      <el-form-item
        label="FILM_ATTACH_HOSTNAME"
        prop="filmAttachHostName">
        <el-input v-model="temp.filmAttachHostName" />
      </el-form-item>
      <el-form-item
        label="AUTO_AFFIX_HOSTNAME"
        prop="autoAffixHostName">
        <el-input v-model="temp.autoAffixHostName" />
      </el-form-item>
      <el-form-item
        label="APP_AOI_HOSTNAME"
        prop="appHostName">
        <el-input v-model="temp.appHostName" />
      </el-form-item>
      <el-form-item
        label="ST_HOSTNAME"
        prop="stHostName">
        <el-input v-model="temp.stHostName" />
      </el-form-item>
      <el-form-item
        label="VI_HOSTNAME"
        prop="viHostName">
        <el-input v-model="temp.viHostName" />
      </el-form-item>
      <el-form-item
        label="ASSY_TEST_HOSTNAME"
        prop="rtHostName">
        <el-input v-model="temp.rtHostName" />
      </el-form-item>
      <el-form-item
        label="AUTO_PACKING_HOSTNAME"
        prop="autoPackingHostName">
        <el-input v-model="temp.autoPackingHostName" />
      </el-form-item>
      <el-form-item
        label="LINE_HOSTNAME"
        prop="lineHostName">
        <el-input v-model="temp.lineHostName" />
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
        @click="updateData()">
        SAVE
      </el-button>
    </div>
  </div>
</template>

<script>
import { getHostInfos, updateHostInfos } from '@/api/settings'
export default {
  name: 'ComplexTable',
  data() {
    return {
      list: null,
      temp: {
        service: '',
        network: '',
        daemon: '',
        subject: '',
        listenService: '',
        listenNetwork: '',
        listenDaemon: '',
        listenSubject: '',
        polTestHostname: '',
        piHostname: '',
        ptAOIHostname: '',
        ptManuHostName: '',
        cfHostName: '',
        bluHostName: '',
        assyHostName: '',
        assyPLCHostName: '',
        autoTapeHostName: '',
        fiAOIHostName: '',
        fiHostName: '',
        filmAttachHostName: '',
        autoAffixHostName: '',
        appHostName: '',
        stHostName: '',
        viHostName: '',
        rtHostName: '',
        autoPackingHostName: '',
        lineHostName: '',
        timeout: ''
      },
      rules: {
        service: [{ required: true, message: 'service is required', trigger: 'blur' }],
        network: [{ required: true, message: 'service is required', trigger: 'blur' }],
        daemon: [{ required: true, message: 'service is required', trigger: 'blur' }],
        subject: [{ required: true, message: 'service is required', trigger: 'blur' }],
        listenService: [{ required: true, message: 'service is required', trigger: 'blur' }],
        listenNetwork: [{ required: true, message: 'service is required', trigger: 'blur' }],
        listenDaemon: [{ required: true, message: 'service is required', trigger: 'blur' }],
        listenSubject: [{ required: true, message: 'service is required', trigger: 'blur' }],
        polTestHostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        piHostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        ptAOIHostname: [{ required: true, message: 'service is required', trigger: 'blur' }],
        ptManuHostName: [{ required: true, message: 'service is required', trigger: 'blur' }],
        cfHostName: [{ required: true, message: 'service is required', trigger: 'blur' }],
        bluHostName: [{ required: true, message: 'service is required', trigger: 'blur' }],
        assyHostName: [{ required: true, message: 'service is required', trigger: 'blur' }],
        assyPLCHostName: [{ required: true, message: 'service is required', trigger: 'blur' }],
        autoTapeHostName: [{ required: true, message: 'service is required', trigger: 'blur' }],
        fiAOIHostName: [{ required: true, message: 'service is required', trigger: 'blur' }],
        fiHostName: [{ required: true, message: 'service is required', trigger: 'blur' }],
        filmAttachHostName: [{ required: true, message: 'service is required', trigger: 'blur' }],
        autoAffixHostName: [{ required: true, message: 'service is required', trigger: 'blur' }],
        appHostName: [{ required: true, message: 'service is required', trigger: 'blur' }],
        stHostName: [{ required: true, message: 'service is required', trigger: 'blur' }],
        viHostName: [{ required: true, message: 'service is required', trigger: 'blur' }],
        rtHostName: [{ required: true, message: 'service is required', trigger: 'blur' }],
        autoPackingHostName: [{ required: true, message: 'service is required', trigger: 'blur' }],
        lineHostName: [{ required: true, message: 'service is required', trigger: 'blur' }],
        timeout: [{ required: true, message: 'service is required', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      getHostInfos().then(response => {
        this.list = response
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
      this.temp = this.list // copy obj
      this.$nextTick(() => {
        this.$refs.dataForm.clearValidate()
      })
    },
    updateData() {
      this.$refs.dataForm.validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          updateHostInfos(tempData).then(() => {
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
