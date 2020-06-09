<template>
  <div class="app-container">
    <el-form
            ref="dataForm"
            label-position="right"
            label-width="150px"
            style="margin:20px; vertical-align: center">
      <el-header align="center"> 设备产能</el-header>
      <el-form-item label="POL Test Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="capacity.POLTest_UNIT1_CAP !== undefined" type="warning" class="capacityButton">{{capacity.POLTest_UNIT1_CAP}}</el-button>
            <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="capacity.POLTest_UNIT2_CAP !== undefined" type="warning" class="capacityButton">{{capacity.POLTest_UNIT2_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button v-if="capacity.POLTest_UNIT3_CAP !== undefined" type="warning" class="capacityButton">{{capacity.POLTest_UNIT3_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button v-if="capacity.POLTest_UNIT4_CAP !== undefined" type="warning" class="capacityButton">{{capacity.POLTest_UNIT4_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit5</el-button>
            <el-button v-if="capacity.POLTest_UNIT5_CAP !== undefined" type="warning" class="capacityButton">{{capacity.POLTest_UNIT5_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit6</el-button>
            <el-button v-if="capacity.POLTest_UNIT6_CAP !== undefined" type="warning" class="capacityButton">{{capacity.POLTest_UNIT6_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>
      <el-form-item label="PI Test Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="capacity.PI_UNIT1_CAP !== undefined" type="warning" class="capacityButton">{{capacity.PI_UNIT1_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="capacity.PI_UNIT2_CAP !== undefined" type="warning" class="capacityButton">{{capacity.PI_UNIT2_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button v-if="capacity.PI_UNIT3_CAP !== undefined" type="warning" class="capacityButton">{{capacity.PI_UNIT3_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button v-if="capacity.PI_UNIT4_CAP !== undefined" type="warning" class="capacityButton">{{capacity.PI_UNIT4_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="PT AOI Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="capacity.pt_aoi_unit1_cap !== undefined" type="warning" class="capacityButton">{{capacity.pt_aoi_unit1_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="capacity.pt_aoi_unit2_cap !== undefined" type="warning" class="capacityButton">{{capacity.pt_aoi_unit2_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button v-if="capacity.pt_aoi_unit3_cap !== undefined" type="warning" class="capacityButton">{{capacity.pt_aoi_unit3_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button v-if="capacity.pt_aoi_unit4_cap !== undefined" type="warning" class="capacityButton">{{capacity.pt_aoi_unit4_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="PT Manual Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="capacity.PTManu_UNIT1_CAP !== undefined" type="warning" class="capacityButton">{{capacity.PTManu_UNIT1_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="capacity.PTManu_UNIT2_CAP !== undefined" type="warning" class="capacityButton">{{capacity.PTManu_UNIT2_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button v-if="capacity.PTManu_UNIT3_CAP !== undefined" type="warning" class="capacityButton">{{capacity.PTManu_UNIT3_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button v-if="capacity.PTManu_UNIT4_CAP !== undefined" type="warning" class="capacityButton">{{capacity.PTManu_UNIT4_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit5</el-button>
            <el-button v-if="capacity.PTManu_UNIT5_CAP !== undefined" type="warning" class="capacityButton">{{capacity.PTManu_UNIT5_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit6</el-button>
            <el-button v-if="capacity.PTManu_UNIT6_CAP !== undefined" type="warning" class="capacityButton">{{capacity.PTManu_UNIT6_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="CF Test Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="capacity.CFTest_UNIT1_CAP !== undefined" type="warning" class="capacityButton">{{capacity.CFTest_UNIT1_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="capacity.CFTest_UNIT2_CAP !== undefined" type="warning" class="capacityButton">{{capacity.CFTest_UNIT2_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button v-if="capacity.CFTest_UNIT3_CAP !== undefined" type="warning" class="capacityButton">{{capacity.CFTest_UNIT3_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button v-if="capacity.CFTest_UNIT4_CAP !== undefined" type="warning" class="capacityButton">{{capacity.CFTest_UNIT4_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit5</el-button>
            <el-button v-if="capacity.CFTest_UNIT5_CAP !== undefined" type="warning" class="capacityButton">{{capacity.CFTest_UNIT5_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit6</el-button>
            <el-button v-if="capacity.CFTest_UNIT6_CAP !== undefined" type="warning" class="capacityButton">{{capacity.CFTest_UNIT6_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="BLU AOI Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="capacity.blu_aoi_unit1_cap !== undefined" type="warning" class="capacityButton">{{capacity.blu_aoi_unit1_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="capacity.blu_aoi_unit2_cap !== undefined" type="warning" class="capacityButton">{{capacity.blu_aoi_unit2_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button v-if="capacity.blu_aoi_unit3_cap !== undefined" type="warning" class="capacityButton">{{capacity.blu_aoi_unit3_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button v-if="capacity.blu_aoi_unit4_cap !== undefined" type="warning" class="capacityButton">{{capacity.blu_aoi_unit4_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

      </el-form-item>

      <el-form-item label="Auto Assembly Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="capacity.auto_assy_unit1_cap !== undefined" type="warning" class="capacityButton">{{capacity.auto_assy_unit1_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="capacity.auto_assy_unit2_cap !== undefined" type="warning" class="capacityButton">{{capacity.auto_assy_unit2_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="FI AOI Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="capacity.fi_aoi_unit1_cap !== undefined" type="warning" class="capacityButton">{{capacity.fi_aoi_unit1_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="capacity.fi_aoi_unit2_cap !== undefined" type="warning" class="capacityButton">{{capacity.fi_aoi_unit2_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button v-if="capacity.fi_aoi_unit3_cap !== undefined" type="warning" class="capacityButton">{{capacity.fi_aoi_unit3_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button v-if="capacity.fi_aoi_unit4_cap !== undefined" type="warning" class="capacityButton">{{capacity.fi_aoi_unit4_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit5</el-button>
            <el-button v-if="capacity.fi_aoi_unit5_cap !== undefined" type="warning" class="capacityButton">{{capacity.fi_aoi_unit5_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit6</el-button>
            <el-button v-if="capacity.fi_aoi_unit6_cap !== undefined" type="warning" class="capacityButton">{{capacity.fi_aoi_unit6_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="FI Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="capacity.FI_UNIT1_CAP !== undefined" type="warning" class="capacityButton">{{capacity.FI_UNIT1_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="capacity.FI_UNIT2_CAP !== undefined" type="warning" class="capacityButton">{{capacity.FI_UNIT2_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button v-if="capacity.FI_UNIT3_CAP !== undefined" type="warning" class="capacityButton">{{capacity.FI_UNIT3_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button v-if="capacity.FI_UNIT4_CAP !== undefined" type="warning" class="capacityButton">{{capacity.FI_UNIT4_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit5</el-button>
            <el-button v-if="capacity.FI_UNIT5_CAP !== undefined" type="warning" class="capacityButton">{{capacity.FI_UNIT5_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit6</el-button>
            <el-button v-if="capacity.FI_UNIT6_CAP !== undefined" type="warning" class="capacityButton">{{capacity.FI_UNIT6_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit7</el-button>
            <el-button v-if="capacity.FI_UNIT7_CAP !== undefined" type="warning" class="capacityButton">{{capacity.FI_UNIT7_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit8</el-button>
            <el-button v-if="capacity.FI_UNIT8_CAP !== undefined" type="warning" class="capacityButton">{{capacity.FI_UNIT8_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit9</el-button>
            <el-button v-if="capacity.FI_UNIT9_CAP !== undefined" type="warning" class="capacityButton">{{capacity.FI_UNIT9_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button style="width:60px">Unit10</el-button>
            <el-button v-if="capacity.FI_UNIT10_CAP !== undefined" type="warning" class="capacityButton">{{capacity.FI_UNIT10_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>
      <el-form-item label="ST Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="capacity.ST_UNIT1_CAP !== undefined" type="warning" class="capacityButton">{{capacity.ST_UNIT1_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="capacity.ST_UNIT2_CAP !== undefined" type="warning" class="capacityButton">{{capacity.ST_UNIT2_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button v-if="capacity.ST_UNIT3_CAP !== undefined" type="warning" class="capacityButton">{{capacity.ST_UNIT3_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button v-if="capacity.ST_UNIT4_CAP !== undefined" type="warning" class="capacityButton">{{capacity.ST_UNIT4_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit5</el-button>
            <el-button v-if="capacity.ST_UNIT5_CAP !== undefined" type="warning" class="capacityButton">{{capacity.ST_UNIT5_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit6</el-button>
            <el-button v-if="capacity.ST_UNIT6_CAP !== undefined" type="warning" class="capacityButton">{{capacity.ST_UNIT6_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

      </el-form-item>
      <el-form-item label="RT Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="capacity.RT_UNIT1_CAP !== undefined" type="warning" class="capacityButton">{{capacity.RT_UNIT1_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="capacity.RT_UNIT2_CAP !== undefined" type="warning" class="capacityButton">{{capacity.RT_UNIT2_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button v-if="capacity.RT_UNIT3_CAP !== undefined" type="warning" class="capacityButton">{{capacity.RT_UNIT3_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button v-if="capacity.RT_UNIT4_CAP !== undefined" type="warning" class="capacityButton">{{capacity.RT_UNIT4_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit5</el-button>
            <el-button v-if="capacity.RT_UNIT5_CAP !== undefined" type="warning" class="capacityButton">{{capacity.RT_UNIT5_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit6</el-button>
            <el-button v-if="capacity.RT_UNIT6_CAP !== undefined" type="warning" class="capacityButton">{{capacity.RT_UNIT6_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit7</el-button>
            <el-button v-if="capacity.RT_UNIT7_CAP !== undefined" type="warning" class="capacityButton">{{capacity.RT_UNIT7_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit8</el-button>
            <el-button v-if="capacity.RT_UNIT8_CAP !== undefined" type="warning" class="capacityButton">{{capacity.RT_UNIT8_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit9</el-button>
            <el-button v-if="capacity.RT_UNIT9_CAP !== undefined" type="warning" class="capacityButton">{{capacity.RT_UNIT9_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button style="width:60px">Unit10</el-button>
            <el-button v-if="capacity.RT_UNIT10_CAP !== undefined" type="warning" class="capacityButton">{{capacity.RT_UNIT10_CAP}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>
      <el-form-item label="Auto Affix Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="capacity.auto_affix_unit1_cap !== undefined" type="warning" class="capacityButton">{{capacity.auto_affix_unit1_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="capacity.auto_affix_unit2_cap !== undefined" type="warning" class="capacityButton">{{capacity.auto_affix_unit2_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="App AOI Zone">
        <el-col :span="3">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="capacity.app_aoi_unit1_cap !== undefined" type="warning" class="capacityButton">{{capacity.app_aoi_unit1_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="3">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-if="capacity.app_aoi_unit2_cap !== undefined" type="warning" class="capacityButton">{{capacity.app_aoi_unit2_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Auto Tape Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="capacity.auto_tape_unit1_cap !== undefined" type="warning" class="capacityButton">{{capacity.auto_tape_unit1_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Film Attach Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="capacity.film_attach_unit1_cap !== undefined" type="warning" class="capacityButton">{{capacity.film_attach_unit1_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>
      <el-form-item label="Auto Packing Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-if="capacity.auto_packing_unit1_cap !== undefined" type="warning" class="capacityButton">{{capacity.auto_packing_unit1_cap}}</el-button>
              <el-button v-else type="warning" class="capacityButton">0</el-button>
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
  import { GetCurrentCapacity } from '@/api/others'
  import socket from '@/utils/socket.js'
  import { mapActions } from 'vuex'
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

          pt_aoi_unit1_cap: '0',
          pt_aoi_unit2_cap: '0',
          pt_aoi_unit3_cap: '0',
          pt_aoi_unit4_cap: '0',

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

          blu_aoi_unit1_cap: '0',
          blu_aoi_unit2_cap: '0',
          blu_aoi_unit3_cap: '0',
          blu_aoi_unit4_cap: '0',

          auto_assy_unit1_cap: '0',
          auto_assy_unit2_cap: '0',

          fi_aoi_unit1_cap: '0',
          fi_aoi_unit2_cap: '0',
          fi_aoi_unit3_cap: '0',
          fi_aoi_unit4_cap: '0',
          fi_aoi_unit5_cap: '0',
          fi_aoi_unit6_cap: '0',

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

          auto_affix_unit1_cap: '0',
          auto_affix_unit2_cap: '0',

          app_aoi_unit1_cap: '0',
          app_aoi_unit2_cap: '0',

          auto_tape_unit1_cap: '0',

          film_attach_unit1_cap: '0'

        }

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
        GetCurrentCapacity().then(response => {
          this.capacity = response
        })
      },
      callback: function(ip, e) {
        // topic handler
        var capacity = this.capacity
        var msg = JSON.parse(e.data)
        if (msg === undefined || msg['pub']['topic'] === undefined) {
          return
        }
        var topic = msg['pub']['topic']
        if (topic === 'CurrentCapacity') {
          var unitName = msg['pub']['content']['UnitName']
          var currentCapacity = msg['pub']['content']['CurrentCapacity']
          if (unitName === 'PTAOI_UNIT1') {
            capacity.pt_aoi_unit1_cap = currentCapacity
          }
          if (unitName === 'PTAOI_UNIT2') {
            capacity.pt_aoi_unit2_cap = currentCapacity
          }
          if (unitName === 'PTAOI_UNIT3') {
            capacity.pt_aoi_unit3_cap = currentCapacity
          }
          if (unitName === 'PTAOI_UNIT4') {
            capacity.pt_aoi_unit4_cap = currentCapacity
          }
          if (unitName === 'BLUAOI_UNIT1') {
            capacity.blu_aoi_unit1_cap = currentCapacity
          }
          if (unitName === 'BLUAOI_UNIT2') {
            capacity.blu_aoi_unit2_cap = currentCapacity
          }
          if (unitName === 'BLUAOI_UNIT3') {
            capacity.blu_aoi_unit3_cap = currentCapacity
          }
          if (unitName === 'BLUAOI_UNIT4') {
            capacity.blu_aoi_unit4_cap = currentCapacity
          }
          if (unitName === 'AutoAssy_UNIT1') {
            capacity.auto_assy_unit1_cap = currentCapacity
          }
          if (unitName === 'AutoAssy_UNIT2') {
            capacity.auto_assy_unit2_cap = currentCapacity
          }
          if (unitName === 'FIAOI_UNIT1') {
            capacity.fi_aoi_unit1_cap = currentCapacity
          }
          if (unitName === 'FIAOI_UNIT2') {
            capacity.fi_aoi_unit2_cap = currentCapacity
          }
          if (unitName === 'FIAOI_UNIT3') {
            capacity.fi_aoi_unit3_cap = currentCapacity
          }
          if (unitName === 'FIAOI_UNIT4') {
            capacity.fi_aoi_unit4_cap = currentCapacity
          }
          if (unitName === 'FIAOI_UNIT5') {
            capacity.fi_aoi_unit5_cap = currentCapacity
          }
          if (unitName === 'FIAOI_UNIT6') {
            capacity.fi_aoi_unit6_cap = currentCapacity
          }
          if (unitName === 'AutoAffix_UNIT1') {
            capacity.auto_affix_unit1_cap = currentCapacity
          }
          if (unitName === 'AutoAffix_UNIT2') {
            capacity.auto_affix_unit2_cap = currentCapacity
          }
          if (unitName === 'AppAOI_UNIT1') {
            capacity.app_aoi_unit1_cap = currentCapacity
          }
          if (unitName === 'AppAOI_UNIT2') {
            capacity.app_aoi_unit2_cap = currentCapacity
          }
          if (unitName === 'AutoTape_UNIT1') {
            capacity.auto_tape_unit1_cap = currentCapacity
          }
          if (unitName === 'FilmAttach_UNIT1') {
            capacity.film_attach_unit1_cap = currentCapacity
          }
          if (unitName === 'AutoPacking_UNIT1') {
            capacity.auto_packing_unit1_cap = currentCapacity
          }
        }
        if (topic === 'AlarmInfo') {
          var alarms = []
          alarms = msg['pub']['content']['alarms']
          this.$store.dispatch('alarm/getPushAlarmGridData', alarms)
          this.$store.dispatch('alarm/getNewAlarmNum', alarms.length)
          if (alarms.length !== 0) {
            this.$store.dispatch('alarm/showAlarmDialog')
          } else {
            this.$store.dispatch('alarm/hideAlarmDialog')
          }
          // console.log(this.$store.state.alarm.alarmNumber, this.$store.state.alarm.alarmGridData, this.$store.state.alarm.alarmDialogTableVisible)
        }
      },
      ...mapActions([
        'showAlarmDialog',
        'hideAlarmDialog',
        'getNewAlarmNum',
        'getPushAlarmGridData'
      ])
    }
  }
</script>
<style scoped>
  .capacityButton {
    height: 31px;
    width: 50px;
  }
</style>
