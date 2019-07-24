<template>
  <div class="app-container">
    <el-form
            ref="dataForm"
            label-position="right"
            style="margin:50px; vertical-align: center">
      <el-header align="center"> 设备节拍</el-header>
      <el-form-item label="PT AOI Zone">
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{tacttime.PTAOI_UNIT1_TT}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{tacttime.PTAOI_UNIT2_TT}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button type="warning">{{tacttime.PTAOI_UNIT3_TT}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button type="warning">{{tacttime.PTAOI_UNIT4_TT}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>
      <el-form-item label="BLU AOI Zone">
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{tacttime.BLUAOI_UNIT1_TT}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="5">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{tacttime.BLUAOI_UNIT2_TT}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="5">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button type="warning">{{tacttime.BLUAOI_UNIT3_TT}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="5">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button type="warning">{{tacttime.BLUAOI_UNIT4_TT}}</el-button>
          </el-button-group>
        </el-col>

      </el-form-item>

      <el-form-item label="Auto Assembly Zone">
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{tacttime.AutoAssy_UNIT1_TT}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="5">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{tacttime.AutoAssy_UNIT2_TT}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="FI AOI Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{tacttime.FIAOI_UNIT1_TT}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{tacttime.FIAOI_UNIT2_TT}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button type="warning">{{tacttime.FIAOI_UNIT3_TT}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button type="warning">{{tacttime.FIAOI_UNIT4_TT}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit5</el-button>
            <el-button type="warning">{{tacttime.FIAOI_UNIT5_TT}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit6</el-button>
            <el-button type="warning">{{tacttime.FIAOI_UNIT6_TT}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Auto Affix Zone">
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{tacttime.AutoAffix_UNIT1_TT}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="5">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{tacttime.AutoAffix_UNIT2_TT}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="App AOI Zone">
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{tacttime.AppAOI_UNIT1_TT}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="5">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{tacttime.AppAOI_UNIT2_TT}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Auto Tape Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{tacttime.AutoTape_UNIT1_TT}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Film Attach Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{tacttime.FilmAttach_UNIT1_TT}}</el-button>
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
    name: 'TactTime',
    data() {
      return {
        tacttime: {
          PTAOI_UNIT1_TT: '88.68',
          PTAOI_UNIT2_TT: '88.68',
          PTAOI_UNIT3_TT: '88.68',
          PTAOI_UNIT4_TT: '88.68',

          BLUAOI_UNIT1_TT: '88.68',
          BLUAOI_UNIT2_TT: '88.68',
          BLUAOI_UNIT3_TT: '88.68',
          BLUAOI_UNIT4_TT: '88.68',

          AutoAssy_UNIT1_TT: '88.68',
          AutoAssy_UNIT2_TT: '88.68',

          FIAOI_UNIT1_TT: '88.68',
          FIAOI_UNIT2_TT: '88.68',
          FIAOI_UNIT3_TT: '88.68',
          FIAOI_UNIT4_TT: '88.68',
          FIAOI_UNIT5_TT: '88.68',
          FIAOI_UNIT6_TT: '88.68',

          AutoAffix_UNIT1_TT: '88.68',
          AutoAffix_UNIT2_TT: '88.68',

          AppAOI_UNIT1_TT: '88.68',
          AppAOI_UNIT2_TT: '88.68',

          AutoTape_UNIT1_TT: '88.68',

          FilmAttach_UNIT1_TT: '88.68'

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
