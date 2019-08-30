 <template>
  <div class="app-container">
    <el-form :label-position="labelPosition" label-width="180px" style="margin:50px; vertical-align: center">
      <el-header align="center"> 设备节拍</el-header>
      <el-form-item label="PT AOI Zone">
        <el-col :span="4">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="tacttime.pt_aoi_unit1_tt !== undefined" type="warning" class="ttButton">{{tacttime.pt_aoi_unit1_tt}}</el-button>
            <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="4">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="tacttime.pt_aoi_unit2_tt !== undefined" type="warning" class="ttButton">{{tacttime.pt_aoi_unit2_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="4">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button v-if="tacttime.pt_aoi_unit3_tt !== undefined" type="warning" class="ttButton">{{tacttime.pt_aoi_unit3_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="4">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button v-if="tacttime.pt_aoi_unit4_tt !== undefined" type="warning" class="ttButton">{{tacttime.pt_aoi_unit4_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>
      <el-form-item label="BLU AOI Zone">
        <el-col :span="4">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="tacttime.blu_aoi_unit1_tt !== undefined" type="warning" class="ttButton">{{tacttime.blu_aoi_unit1_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="4">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="tacttime.blu_aoi_unit2_tt !== undefined" type="warning" class="ttButton">{{tacttime.blu_aoi_unit2_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="4">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button v-if="tacttime.blu_aoi_unit3_tt !== undefined" type="warning" class="ttButton">{{tacttime.blu_aoi_unit3_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="4">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button v-if="tacttime.blu_aoi_unit4_tt !== undefined" type="warning" class="ttButton">{{tacttime.blu_aoi_unit4_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>

      </el-form-item>

      <el-form-item label="Auto Assembly Zone">
        <el-col :span="4">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="tacttime.auto_assy_unit1_tt !== undefined" type="warning" class="ttButton">{{tacttime.auto_assy_unit1_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="4">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="tacttime.auto_assy_unit2_tt !== undefined" type="warning" class="ttButton">{{tacttime.auto_assy_unit2_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="FI AOI Zone">
        <el-col :span="4">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="tacttime.fi_aoi_unit1_tt !== undefined" type="warning" class="ttButton">{{tacttime.fi_aoi_unit1_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="4">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="tacttime.fi_aoi_unit2_tt !== undefined" type="warning" class="ttButton">{{tacttime.fi_aoi_unit2_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="4">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button v-if="tacttime.fi_aoi_unit3_tt !== undefined" type="warning" class="ttButton">{{tacttime.fi_aoi_unit3_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="4">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button v-if="tacttime.fi_aoi_unit4_tt !== undefined" type="warning" class="ttButton">{{tacttime.fi_aoi_unit4_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="4">
          <el-button-group>
            <el-button>Unit5</el-button>
            <el-button v-if="tacttime.fi_aoi_unit5_tt !== undefined" type="warning" class="ttButton">{{tacttime.fi_aoi_unit5_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="4">
          <el-button-group>
            <el-button>Unit6</el-button>
            <el-button v-if="tacttime.fi_aoi_unit6_tt !== undefined" type="warning" class="ttButton">{{tacttime.fi_aoi_unit6_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Auto Affix Zone">
        <el-col :span="4">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="tacttime.auto_affix_unit1_tt !== undefined" type="warning" class="ttButton">{{tacttime.auto_affix_unit1_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="4">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="tacttime.auto_affix_unit2_tt !== undefined"  type="warning" class="ttButton">{{tacttime.auto_affix_unit2_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="App AOI Zone">
        <el-col :span="4">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button  v-if="tacttime.app_aoi_unit1_tt !== undefined" type="warning" class="ttButton">{{tacttime.app_aoi_unit1_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="4">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="tacttime.app_aoi_unit2_tt !== undefined" type="warning" class="ttButton">{{tacttime.app_aoi_unit2_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Auto Tape Zone">
        <el-col :span="6 ">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="tacttime.auto_tape_unit1_tt !== undefined" type="warning" class="ttButton">{{tacttime.auto_tape_unit1_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Film Attach Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="tacttime.film_attach_unit1_tt !== undefined" type="warning" class="ttButton">{{tacttime.film_attach_unit1_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Auto Packing Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="tacttime.auto_packing_unit1_tt !== undefined" type="warning" class="ttButton">{{tacttime.auto_packing_unit1_tt}}</el-button>
              <el-button v-else type="warning" class="ttButton">0.0</el-button>
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
  import { GetCurrentTactTime } from '@/api/others'
  import socket from '@/utils/socket.js'
  export default {
    name: 'TactTime',
    data() {
      return {
        tacttime: {
          pt_aoi_unit1_tt: '0',
          pt_aoi_unit2_tt: '0',
          pt_aoi_unit3_tt: '0',
          pt_aoi_unit4_tt: '0',

          blu_aoi_unit1_tt: '0',
          blu_aoi_unit2_tt: '0',
          blu_aoi_unit3_tt: '0',
          blu_aoi_unit4_tt: '0',

          auto_assy_unit1_tt: '0',
          auto_assy_unit2_tt: '0',

          fi_aoi_unit1_tt: '0',
          fi_aoi_unit2_tt: '0',
          fi_aoi_unit3_tt: '0',
          fi_aoi_unit4_tt: '0',
          fi_aoi_unit5_tt: '0',
          fi_aoi_unit6_tt: '0',

          auto_affix_unit1_tt: '0',
          auto_affix_unit2_tt: '0',

          app_aoi_unit1_tt: '0',
          app_aoi_unit2_tt: '0',

          auto_tape_unit1_tt: '0',

          film_attach_unit1_tt: '0',

          auto_packing_unit1_tt: '0'

        },
        labelPosition: 'right'

      }
    },
    created() {
      this.refreshData()
    },
    mounted() {
      socket.setCallback(this.callback)
      socket.initWebSocket('localhost', 9002)
    },
    destroyed() {
      socket.close()
    },
    methods: {
      refreshData() {
        GetCurrentTactTime().then(response => {
          this.tacttime = response
        })
      },
      callback: function(ip, e) {
        // topic handler
        var tacttime = this.tacttime
        var msg = JSON.parse(e.data)
        if (msg === undefined || msg['pub']['topic'] === undefined) {
          return
        }
        var topic = msg['pub']['topic']
        if (topic === 'TactTime') {
          var unitName = msg['pub']['content']['UnitName']
          var tt = msg['pub']['content']['TactTime']
          if (unitName === 'PTAOI_UNIT1') {
            tacttime.pt_aoi_unit1_tt = tt
          }
          if (unitName === 'PTAOI_UNIT2') {
            tacttime.pt_aoi_unit2_tt = tt
          }
          if (unitName === 'PTAOI_UNIT3') {
            tacttime.pt_aoi_unit3_tt = tt
          }
          if (unitName === 'PTAOI_UNIT4') {
            tacttime.pt_aoi_unit4_tt = tt
          }
          if (unitName === 'BLUAOI_UNIT1') {
            tacttime.blu_aoi_unit1_tt = tt
          }
          if (unitName === 'BLUAOI_UNIT2') {
            tacttime.blu_aoi_unit2_tt = tt
          }
          if (unitName === 'BLUAOI_UNIT3') {
            tacttime.blu_aoi_unit3_tt = tt
          }
          if (unitName === 'BLUAOI_UNIT4') {
            tacttime.blu_aoi_unit4_tt = tt
          }
          if (unitName === 'AutoAssy_UNIT1') {
            tacttime.auto_assy_unit1_tt = tt
          }
          if (unitName === 'AutoAssy_UNIT2') {
            tacttime.auto_assy_unit2_tt = tt
          }
          if (unitName === 'FIAOI_UNIT1') {
            tacttime.fi_aoi_unit1_tt = tt
          }
          if (unitName === 'FIAOI_UNIT2') {
            tacttime.fi_aoi_unit2_tt = tt
          }
          if (unitName === 'FIAOI_UNIT3') {
            tacttime.fi_aoi_unit3_tt = tt
          }
          if (unitName === 'FIAOI_UNIT4') {
            tacttime.fi_aoi_unit4_tt = tt
          }
          if (unitName === 'FIAOI_UNIT5') {
            tacttime.fi_aoi_unit5_tt = tt
          }
          if (unitName === 'FIAOI_UNIT6') {
            tacttime.fi_aoi_unit6_tt = tt
          }
          if (unitName === 'AutoAffix_UNIT1') {
            tacttime.auto_affix_unit1_tt = tt
          }
          if (unitName === 'AutoAffix_UNIT2') {
            tacttime.auto_affix_unit2_tt = tt
          }
          if (unitName === 'AppAOI_UNIT1') {
            tacttime.app_aoi_unit1_tt = tt
          }
          if (unitName === 'AppAOI_UNIT2') {
            tacttime.app_aoi_unit2_tt = tt
          }
          if (unitName === 'AutoTape_UNIT1') {
            tacttime.auto_tape_unit1_tt = tt
          }
          if (unitName === 'FilmAttach_UNIT1') {
            tacttime.film_attach_unit1_tt = tt
          }
          if (unitName === 'AutoPacking_UNIT1') {
            tacttime.auto_packing_unit1_tt = tt
          }
        }
      }
    }
  }
</script>

 <style scoped>
   .ttButton {
     height: 32px;
     width: 60px;
   }
 </style>
