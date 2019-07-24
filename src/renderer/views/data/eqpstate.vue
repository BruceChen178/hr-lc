<template>
  <div class="app-container">
    <el-form
            ref="dataForm"
            label-position="right"
            style="margin:50px; vertical-align: center">
      <el-header align="center"> 设备上报状态</el-header>
      <el-form-item label="PT AOI Zone">
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="success">{{states.PTAOI_UNIT1_STATE}}</el-button>
            <el-button >{{states.PTAOI_UNIT1_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="5">
          <el-button-group>
          <el-button>Unit2</el-button>
          <el-button type="success">{{states.PTAOI_UNIT2_STATE}}</el-button>
          <el-button >{{states.PTAOI_UNIT2_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="5">
          <el-button-group>
          <el-button>Unit3</el-button>
          <el-button type="success">{{states.PTAOI_UNIT3_STATE}}</el-button>
          <el-button >{{states.PTAOI_UNIT3_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="5">
          <el-button-group>
          <el-button>Unit4</el-button>
          <el-button type="success">{{states.PTAOI_UNIT4_STATE}}</el-button>
          <el-button >{{states.PTAOI_UNIT4_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>
      <el-form-item label="BLU AOI Zone">
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="success">{{states.BLUAOI_UNIT1_STATE}}</el-button>
            <el-button >{{states.BLUAOI_UNIT1_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="5">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="success">{{states.BLUAOI_UNIT2_STATE}}</el-button>
            <el-button >{{states.BLUAOI_UNIT2_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="5">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button type="success">{{states.BLUAOI_UNIT3_STATE}}</el-button>
            <el-button >{{states.BLUAOI_UNIT3_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="5">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button type="success">{{states.BLUAOI_UNIT4_STATE}}</el-button>
            <el-button >{{states.BLUAOI_UNIT4_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>

      </el-form-item>

      <el-form-item label="Auto Assembly Zone">
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="success">{{states.AutoAssy_UNIT1_STATE}}</el-button>
            <el-button >{{states.AutoAssy_UNIT1_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="5">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="success">{{states.AutoAssy_UNIT2_STATE}}</el-button>
            <el-button >{{states.AutoAssy_UNIT2_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="FI AOI Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="success">{{states.FIAOI_UNIT1_STATE}}</el-button>
            <el-button >{{states.FIAOI_UNIT1_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="success">{{states.FIAOI_UNIT2_STATE}}</el-button>
            <el-button >{{states.FIAOI_UNIT2_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button type="success">{{states.FIAOI_UNIT3_STATE}}</el-button>
            <el-button >{{states.FIAOI_UNIT3_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button type="success">{{states.FIAOI_UNIT4_STATE}}</el-button>
            <el-button >{{states.FIAOI_UNIT4_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit5</el-button>
            <el-button type="success">{{states.FIAOI_UNIT5_STATE}}</el-button>
            <el-button >{{states.FIAOI_UNIT5_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit6</el-button>
            <el-button type="success">{{states.FIAOI_UNIT6_STATE}}</el-button>
            <el-button >{{states.FIAOI_UNIT6_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Auto Affix Zone">
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="success">{{states.AutoAffix_UNIT1_STATE}}</el-button>
            <el-button >{{states.AutoAffix_UNIT1_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="5">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="success">{{states.AutoAffix_UNIT2_STATE}}</el-button>
            <el-button >{{states.AutoAffix_UNIT2_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="App AOI Zone">
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="success">{{states.AppAOI_UNIT1_STATE}}</el-button>
            <el-button >{{states.AppAOI_UNIT1_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="5">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="success">{{states.AppAOI_UNIT2_STATE}}</el-button>
            <el-button >{{states.AppAOI_UNIT2_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Auto Tape Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="success">{{states.AutoTape_UNIT1_STATE}}</el-button>
            <el-button >{{states.AutoTape_UNIT1_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Film Attach Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="success">{{states.FilmAttach_UNIT1_STATE}}</el-button>
            <el-button >{{states.FilmAttach_UNIT1_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Auto Packing Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="success">{{states.AutoPacking_UNIT1_STATE}}</el-button>
            <el-button >{{states.AutoPacking_UNIT1_REASONCODE}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer" style="float: right">
      <el-button type="primary" @click="refreshData">
        refresh
      </el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EQPState',
    data() {
      return {
        states: {
          PTAOI_UNIT1_STATE: 'RUN-TIME',
          PTAOI_UNIT1_REASONCODE: 'RR',
          PTAOI_UNIT2_STATE: 'RUN-TIME',
          PTAOI_UNIT2_REASONCODE: 'RR',
          PTAOI_UNIT3_STATE: 'RUN-TIME',
          PTAOI_UNIT3_REASONCODE: 'RR',
          PTAOI_UNIT4_STATE: 'RUN-TIME',
          PTAOI_UNIT4_REASONCODE: 'RR',

          BLUAOI_UNIT1_STATE: 'RUN-TIME',
          BLUAOI_UNIT1_REASONCODE: 'RR',
          BLUAOI_UNIT2_STATE: 'RUN-TIME',
          BLUAOI_UNIT2_REASONCODE: 'RR',
          BLUAOI_UNIT3_STATE: 'RUN-TIME',
          BLUAOI_UNIT3_REASONCODE: 'RR',
          BLUAOI_UNIT4_STATE: 'RUN-TIME',
          BLUAOI_UNIT4_REASONCODE: 'RR',

          AutoAssy_UNIT1_STATE: 'RUN-TIME',
          AutoAssy_UNIT1_REASONCODE: 'RR',
          AutoAssy_UNIT2_STATE: 'RUN-TIME',
          AutoAssy_UNIT2_REASONCODE: 'RR',

          FIAOI_UNIT1_STATE: 'RUN-TIME',
          FIAOI_UNIT1_REASONCODE: 'RR',
          FIAOI_UNIT2_STATE: 'RUN-TIME',
          FIAOI_UNIT2_REASONCODE: 'RR',
          FIAOI_UNIT3_STATE: 'RUN-TIME',
          FIAOI_UNIT3_REASONCODE: 'RR',
          FIAOI_UNIT4_STATE: 'RUN-TIME',
          FIAOI_UNIT4_REASONCODE: 'RR',
          FIAOI_UNIT5_STATE: 'RUN-TIME',
          FIAOI_UNIT5_REASONCODE: 'RR',
          FIAOI_UNIT6_STATE: 'RUN-TIME',
          FIAOI_UNIT6_REASONCODE: 'RR',

          AutoAffix_UNIT1_STATE: 'RUN-TIME',
          AutoAffix_UNIT1_REASONCODE: 'RR',
          AutoAffix_UNIT2_STATE: 'RUN-TIME',
          AutoAffix_UNIT2_REASONCODE: 'RR',

          AppAOI_UNIT1_STATE: 'RUN-TIME',
          AppAOI_UNIT1_REASONCODE: 'RR',
          AppAOI_UNIT2_STATE: 'RUN-TIME',
          AppAOI_UNIT2_REASONCODE: 'RR',

          AutoTape_UNIT1_STATE: 'RUN-TIME',
          AutoTape_UNIT1_REASONCODE: 'RR',

          FilmAttach_UNIT1_STATE: 'RUN-TIME',
          FilmAttach_UNIT1_REASONCODE: 'RR',

          AutoPacking_UNIT1_STATE: 'RUN-TIME',
          AutoPacking_UNIT1_REASONCODE: 'RR'

        }

      }
    },
    created() {
      this.refreshData()
    },
    methods: {
      refreshData() {
        // getHostInfos().then(response => {
        //   this.list = response
        //   if (this.list !== null) {
        //     this.handleUpdate()
        //   }
        //   // Just to simulate the time of the request
        //   setTimeout(() => {
        //     if (this.list !== null) {
        //       this.handleUpdate()
        //     }
        //   }, 1.5 * 1000)
        // })
      }
    }
  }
</script>
