<template>
  <div class="app-container">
    <el-form
            ref="dataForm"
            label-position="right"
            style="margin:50px; vertical-align: center">
      <el-header align="center"> 设备产能</el-header>
      <el-form-item label="POL Test Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{capacity.POLTest_UNIT1_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{capacity.POLTest_UNIT2_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button type="warning">{{capacity.POLTest_UNIT3_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button type="warning">{{capacity.POLTest_UNIT4_CAP}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit5</el-button>
            <el-button type="warning">{{capacity.POLTest_UNIT5_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit6</el-button>
            <el-button type="warning">{{capacity.POLTest_UNIT6_CAP}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>
      <el-form-item label="PI Test Zone">
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{capacity.PI_UNIT1_CAP}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{capacity.PI_UNIT2_CAP}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button type="warning">{{capacity.PI_UNIT3_CAP}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button type="warning">{{capacity.PI_UNIT4_CAP}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="PT AOI Zone">
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{capacity.PTAOI_UNIT1_CAP}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{capacity.PTAOI_UNIT2_CAP}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button type="warning">{{capacity.PTAOI_UNIT3_CAP}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button type="warning">{{capacity.PTAOI_UNIT4_CAP}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="PT Manual Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{capacity.PTManu_UNIT1_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{capacity.PTManu_UNIT2_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button type="warning">{{capacity.PTManu_UNIT3_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button type="warning">{{capacity.PTManu_UNIT4_CAP}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit5</el-button>
            <el-button type="warning">{{capacity.PTManu_UNIT5_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit6</el-button>
            <el-button type="warning">{{capacity.PTManu_UNIT6_CAP}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="CF Test Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{capacity.CFTest_UNIT1_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{capacity.CFTest_UNIT2_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button type="warning">{{capacity.CFTest_UNIT3_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button type="warning">{{capacity.CFTest_UNIT4_CAP}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit5</el-button>
            <el-button type="warning">{{capacity.CFTest_UNIT5_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit6</el-button>
            <el-button type="warning">{{capacity.CFTest_UNIT6_CAP}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="BLU AOI Zone">
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{capacity.BLUAOI_UNIT1_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="5">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{capacity.BLUAOI_UNIT2_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="5">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button type="warning">{{capacity.BLUAOI_UNIT3_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="5">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button type="warning">{{capacity.BLUAOI_UNIT4_CAP}}</el-button>
          </el-button-group>
        </el-col>

      </el-form-item>

      <el-form-item label="Auto Assembly Zone">
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{capacity.AutoAssy_UNIT1_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="5">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{capacity.AutoAssy_UNIT2_CAP}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="FI AOI Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{capacity.FIAOI_UNIT1_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{capacity.FIAOI_UNIT2_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button type="warning">{{capacity.FIAOI_UNIT3_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button type="warning">{{capacity.FIAOI_UNIT4_CAP}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit5</el-button>
            <el-button type="warning">{{capacity.FIAOI_UNIT5_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit6</el-button>
            <el-button type="warning">{{capacity.FIAOI_UNIT6_CAP}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="FI Zone">
        <el-col :span="2">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{capacity.FI_UNIT1_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="2">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{capacity.FI_UNIT2_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="2">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button type="warning">{{capacity.FI_UNIT3_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="2">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button type="warning">{{capacity.FI_UNIT4_CAP}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="2">
          <el-button-group>
            <el-button>Unit5</el-button>
            <el-button type="warning">{{capacity.FI_UNIT5_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="2">
          <el-button-group>
            <el-button>Unit6</el-button>
            <el-button type="warning">{{capacity.FI_UNIT6_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="2">
          <el-button-group>
            <el-button>Unit7</el-button>
            <el-button type="warning">{{capacity.FI_UNIT7_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="2">
          <el-button-group>
            <el-button>Unit8</el-button>
            <el-button type="warning">{{capacity.FI_UNIT8_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="2">
          <el-button-group>
            <el-button>Unit9</el-button>
            <el-button type="warning">{{capacity.FI_UNIT9_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="2">
          <el-button-group>
            <el-button>Unit10</el-button>
            <el-button type="warning">{{capacity.FI_UNIT10_CAP}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>
      <el-form-item label="ST Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{capacity.ST_UNIT1_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{capacity.ST_UNIT2_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button type="warning">{{capacity.ST_UNIT3_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button type="warning">{{capacity.ST_UNIT4_CAP}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit5</el-button>
            <el-button type="warning">{{capacity.ST_UNIT5_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit6</el-button>
            <el-button type="warning">{{capacity.ST_UNIT6_CAP}}</el-button>
          </el-button-group>
        </el-col>

      </el-form-item>
      <el-form-item label="RT Zone">
        <el-col :span="2">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{capacity.RT_UNIT1_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="2">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{capacity.RT_UNIT2_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="2">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button type="warning">{{capacity.RT_UNIT3_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="2">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button type="warning">{{capacity.RT_UNIT4_CAP}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="2">
          <el-button-group>
            <el-button>Unit5</el-button>
            <el-button type="warning">{{capacity.RT_UNIT5_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="2">
          <el-button-group>
            <el-button>Unit6</el-button>
            <el-button type="warning">{{capacity.RT_UNIT6_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="2">
          <el-button-group>
            <el-button>Unit7</el-button>
            <el-button type="warning">{{capacity.RT_UNIT7_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="2">
          <el-button-group>
            <el-button>Unit8</el-button>
            <el-button type="warning">{{capacity.RT_UNIT8_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="2">
          <el-button-group>
            <el-button>Unit9</el-button>
            <el-button type="warning">{{capacity.RT_UNIT9_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="2">
          <el-button-group>
            <el-button>Unit10</el-button>
            <el-button type="warning">{{capacity.RT_UNIT10_CAP}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>
      <el-form-item label="Auto Affix Zone">
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{capacity.AutoAffix_UNIT1_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="5">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{capacity.AutoAffix_UNIT2_CAP}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="App AOI Zone">
        <el-col :span="5">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{capacity.AppAOI_UNIT1_CAP}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="5">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button type="warning">{{capacity.AppAOI_UNIT2_CAP}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Auto Tape Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{capacity.AutoTape_UNIT1_CAP}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Film Attach Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button type="warning">{{capacity.FilmAttach_UNIT1_CAP}}</el-button>
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
    name: 'Capacity',
    data() {
      return {
        capacity: {
          POLTest_UNIT1_CAP: '0',
          POLTest_UNIT2_CAP: '0',
          POLTest_UNIT3_CAP: '0',
          POLTest_UNIT4_CAP: '0',
          POLTest_UNIT5_CAP: '0',
          POLTest_UNIT6_CAP: '0',

          PI_UNIT1_CAP: '0',
          PI_UNIT2_CAP: '0',
          PI_UNIT3_CAP: '0',
          PI_UNIT4_CAP: '0',

          PTAOI_UNIT1_CAP: '0',
          PTAOI_UNIT2_CAP: '0',
          PTAOI_UNIT3_CAP: '0',
          PTAOI_UNIT4_CAP: '0',

          PTManu_UNIT1_CAP: '0',
          PTManu_UNIT2_CAP: '0',
          PTManu_UNIT3_CAP: '0',
          PTManu_UNIT4_CAP: '0',
          PTManu_UNIT5_CAP: '0',
          PTManu_UNIT6_CAP: '0',

          CFTest_UNIT1_CAP: '0',
          CFTest_UNIT2_CAP: '0',
          CFTest_UNIT3_CAP: '0',
          CFTest_UNIT4_CAP: '0',
          CFTest_UNIT5_CAP: '0',
          CFTest_UNIT6_CAP: '0',

          BLUAOI_UNIT1_CAP: '0',
          BLUAOI_UNIT2_CAP: '0',
          BLUAOI_UNIT3_CAP: '0',
          BLUAOI_UNIT4_CAP: '0',

          AutoAssy_UNIT1_CAP: '0',
          AutoAssy_UNIT2_CAP: '0',

          FIAOI_UNIT1_CAP: '0',
          FIAOI_UNIT2_CAP: '0',
          FIAOI_UNIT3_CAP: '0',
          FIAOI_UNIT4_CAP: '0',
          FIAOI_UNIT5_CAP: '0',
          FIAOI_UNIT6_CAP: '0',

          FI_UNIT1_CAP: '0',
          FI_UNIT2_CAP: '0',
          FI_UNIT3_CAP: '0',
          FI_UNIT4_CAP: '0',
          FI_UNIT5_CAP: '0',
          FI_UNIT6_CAP: '0',
          FI_UNIT7_CAP: '0',
          FI_UNIT8_CAP: '0',
          FI_UNIT9_CAP: '0',
          FI_UNIT10_CAP: '0',

          ST_UNIT1_CAP: '0',
          ST_UNIT2_CAP: '0',
          ST_UNIT3_CAP: '0',
          ST_UNIT4_CAP: '0',
          ST_UNIT5_CAP: '0',
          ST_UNIT6_CAP: '0',

          RT_UNIT1_CAP: '0',
          RT_UNIT2_CAP: '0',
          RT_UNIT3_CAP: '0',
          RT_UNIT4_CAP: '0',
          RT_UNIT5_CAP: '0',
          RT_UNIT6_CAP: '0',
          RT_UNIT7_CAP: '0',
          RT_UNIT8_CAP: '0',
          RT_UNIT9_CAP: '0',
          RT_UNIT10_CAP: '0',

          AutoAffix_UNIT1_CAP: '0',
          AutoAffix_UNIT2_CAP: '0',

          AppAOI_UNIT1_CAP: '0',
          AppAOI_UNIT2_CAP: '0',

          AutoTape_UNIT1_CAP: '0',

          FilmAttach_UNIT1_CAP: '0'

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
