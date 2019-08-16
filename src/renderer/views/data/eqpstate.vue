<template>
  <div class="app-container">
    <el-form
            ref="dataForm"
            label-position="right"
            label-width="150px"
            style="margin:50px; vertical-align: center">
      <el-header align="center"> 设备上报状态</el-header>
      <el-form-item label="PT AOI Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-show="states.pt_aoi_unit1_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.pt_aoi_unit1_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit1_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.pt_aoi_unit1_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit1_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.pt_aoi_unit1_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit1_state === 'PM TIME'" type="primary" class="eqpButton">{{states.pt_aoi_unit1_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit1_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.pt_aoi_unit1_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit1_state === 'E-TIME'" type="primary" class="eqpButton">{{states.pt_aoi_unit1_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit1_state === 'ETC'" type="primary" class="eqpButton">{{states.pt_aoi_unit1_state}}</el-button>
            <el-button v-show="pt_aoi_unit1_noState" type="danger" class="eqpButton">{{states.pt_aoi_unit1_state}}</el-button>
            <el-button class="codeButton">{{states.pt_aoi_unit1_code}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="6">
          <el-button-group>
          <el-button>Unit2</el-button>
            <el-button v-show="states.pt_aoi_unit2_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.pt_aoi_unit2_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit2_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.pt_aoi_unit2_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit2_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.pt_aoi_unit2_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit2_state === 'PM TIME'" type="primary" class="eqpButton">{{states.pt_aoi_unit2_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit2_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.pt_aoi_unit2_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit2_state === 'E-TIME'" type="primary" class="eqpButton">{{states.pt_aoi_unit2_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit2_state === 'ETC'" type="primary" class="eqpButton">{{states.pt_aoi_unit2_state}}</el-button>
            <el-button v-show="pt_aoi_unit2_noState" type="danger" class="eqpButton">{{states.pt_aoi_unit2_state}}</el-button>
          <el-button class="codeButton">{{states.pt_aoi_unit2_code}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="6">
          <el-button-group>
          <el-button>Unit3</el-button>
            <el-button v-show="states.pt_aoi_unit3_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.pt_aoi_unit3_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit3_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.pt_aoi_unit3_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit3_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.pt_aoi_unit3_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit3_state === 'PM TIME'" type="primary" class="eqpButton">{{states.pt_aoi_unit3_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit3_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.pt_aoi_unit3_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit3_state === 'E-TIME'" type="primary" class="eqpButton">{{states.pt_aoi_unit3_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit3_state === 'ETC'" type="primary" class="eqpButton">{{states.pt_aoi_unit3_state}}</el-button>
            <el-button v-show="pt_aoi_unit3_noState" type="danger" class="eqpButton">{{states.pt_aoi_unit3_state}}</el-button>
          <el-button class="codeButton">{{states.pt_aoi_unit3_code}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="6">
          <el-button-group>
          <el-button>Unit4</el-button>
            <el-button v-show="states.pt_aoi_unit4_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.pt_aoi_unit4_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit4_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.pt_aoi_unit4_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit4_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.pt_aoi_unit4_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit4_state === 'PM TIME'" type="primary" class="eqpButton">{{states.pt_aoi_unit4_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit4_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.pt_aoi_unit4_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit4_state === 'E-TIME'" type="primary" class="eqpButton">{{states.pt_aoi_unit4_state}}</el-button>
            <el-button v-show="states.pt_aoi_unit4_state === 'ETC'" type="primary" class="eqpButton">{{states.pt_aoi_unit4_state}}</el-button>
            <el-button v-show="pt_aoi_unit4_noState" type="danger" class="eqpButton">{{states.pt_aoi_unit4_state}}</el-button>
          <el-button class="codeButton">{{states.pt_aoi_unit4_code}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>
      <el-form-item label="BLU AOI Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-show="states.blu_aoi_unit1_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.blu_aoi_unit1_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit1_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.blu_aoi_unit1_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit1_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.blu_aoi_unit1_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit1_state === 'PM TIME'" type="primary" class="eqpButton">{{states.blu_aoi_unit1_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit1_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.blu_aoi_unit1_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit1_state === 'E-TIME'" type="primary" class="eqpButton">{{states.blu_aoi_unit1_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit1_state === 'ETC'" type="primary" class="eqpButton">{{states.blu_aoi_unit1_state}}</el-button>
            <el-button v-show="blu_aoi_unit1_noState" type="danger" class="eqpButton">{{states.blu_aoi_unit1_state}}</el-button>
            <el-button class="codeButton">{{states.blu_aoi_unit1_code}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="6">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-show="states.blu_aoi_unit2_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.blu_aoi_unit2_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit2_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.blu_aoi_unit2_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit2_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.blu_aoi_unit2_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit2_state === 'PM TIME'" type="primary" class="eqpButton">{{states.blu_aoi_unit2_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit2_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.blu_aoi_unit2_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit2_state === 'E-TIME'" type="primary" class="eqpButton">{{states.blu_aoi_unit2_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit2_state === 'ETC'" type="primary" class="eqpButton">{{states.blu_aoi_unit2_state}}</el-button>
            <el-button v-show="blu_aoi_unit2_noState" type="danger" class="eqpButton">{{states.blu_aoi_unit2_state}}</el-button>
            <el-button class="codeButton">{{states.blu_aoi_unit2_code}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="6">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button v-show="states.blu_aoi_unit3_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.blu_aoi_unit3_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit3_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.blu_aoi_unit3_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit3_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.blu_aoi_unit3_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit3_state === 'PM TIME'" type="primary" class="eqpButton">{{states.blu_aoi_unit3_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit3_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.blu_aoi_unit3_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit3_state === 'E-TIME'" type="primary" class="eqpButton">{{states.blu_aoi_unit3_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit3_state === 'ETC'" type="primary" class="eqpButton">{{states.blu_aoi_unit3_state}}</el-button>
            <el-button v-show="blu_aoi_unit3_noState" type="danger" class="eqpButton">{{states.blu_aoi_unit3_state}}</el-button>
            <el-button class="codeButton">{{states.blu_aoi_unit3_code}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="6">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button v-show="states.blu_aoi_unit4_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.blu_aoi_unit4_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit4_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.blu_aoi_unit4_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit4_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.blu_aoi_unit4_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit4_state === 'PM TIME'" type="primary" class="eqpButton">{{states.blu_aoi_unit4_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit4_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.blu_aoi_unit4_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit4_state === 'E-TIME'" type="primary" class="eqpButton">{{states.blu_aoi_unit4_state}}</el-button>
            <el-button v-show="states.blu_aoi_unit4_state === 'ETC'" type="primary" class="eqpButton">{{states.blu_aoi_unit4_state}}</el-button>
            <el-button v-show="blu_aoi_unit4_noState" type="danger" class="eqpButton">{{states.blu_aoi_unit4_state}}</el-button>
            <el-button class="codeButton">{{states.blu_aoi_unit4_code}}</el-button>
          </el-button-group>
        </el-col>

      </el-form-item>

      <el-form-item label="Auto Assembly Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-show="states.auto_assy_unit1_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.auto_assy_unit1_state}}</el-button>
            <el-button v-show="states.auto_assy_unit1_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.auto_assy_unit1_state}}</el-button>
            <el-button v-show="states.auto_assy_unit1_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.auto_assy_unit1_state}}</el-button>
            <el-button v-show="states.auto_assy_unit1_state === 'PM TIME'" type="primary" class="eqpButton">{{states.auto_assy_unit1_state}}</el-button>
            <el-button v-show="states.auto_assy_unit1_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.auto_assy_unit1_state}}</el-button>
            <el-button v-show="states.auto_assy_unit1_state === 'E-TIME'" type="primary" class="eqpButton">{{states.auto_assy_unit1_state}}</el-button>
            <el-button v-show="states.auto_assy_unit1_state === 'ETC'" type="primary" class="eqpButton">{{states.auto_assy_unit1_state}}</el-button>
            <el-button v-show="auto_assy_unit1_noState" type="danger" class="eqpButton">{{states.auto_assy_unit1_state}}</el-button>
            <el-button class="codeButton">{{states.auto_assy_unit1_code}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="6">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-show="states.auto_assy_unit2_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.auto_assy_unit2_state}}</el-button>
            <el-button v-show="states.auto_assy_unit2_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.auto_assy_unit2_state}}</el-button>
            <el-button v-show="states.auto_assy_unit2_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.auto_assy_unit2_state}}</el-button>
            <el-button v-show="states.auto_assy_unit2_state === 'PM TIME'" type="primary" class="eqpButton">{{states.auto_assy_unit2_state}}</el-button>
            <el-button v-show="states.auto_assy_unit2_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.auto_assy_unit2_state}}</el-button>
            <el-button v-show="states.auto_assy_unit2_state === 'E-TIME'" type="primary" class="eqpButton">{{states.auto_assy_unit2_state}}</el-button>
            <el-button v-show="states.auto_assy_unit2_state === 'ETC'" type="primary" class="eqpButton">{{states.auto_assy_unit2_state}}</el-button>
            <el-button v-show="auto_assy_unit2_noState" type="danger" class="eqpButton">{{states.auto_assy_unit2_state}}</el-button>
            <el-button class="codeButton">{{states.auto_assy_unit2_code}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="FI AOI Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-show="states.fi_aoi_unit1_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.fi_aoi_unit1_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit1_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.fi_aoi_unit1_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit1_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.fi_aoi_unit1_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit1_state === 'PM TIME'" type="primary" class="eqpButton">{{states.fi_aoi_unit1_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit1_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.fi_aoi_unit1_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit1_state === 'E-TIME'" type="primary" class="eqpButton">{{states.fi_aoi_unit1_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit1_state === 'ETC'" type="primary" class="eqpButton">{{states.fi_aoi_unit1_state}}</el-button>
            <el-button v-show="fi_aoi_unit1_noState" type="danger" class="eqpButton">{{states.fi_aoi_unit1_state}}</el-button>
            <el-button class="codeButton">{{states.fi_aoi_unit1_code}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="6">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-show="states.fi_aoi_unit2_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.fi_aoi_unit2_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit2_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.fi_aoi_unit2_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit2_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.fi_aoi_unit2_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit2_state === 'PM TIME'" type="primary" class="eqpButton">{{states.fi_aoi_unit2_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit2_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.fi_aoi_unit2_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit2_state === 'E-TIME'" type="primary" class="eqpButton">{{states.fi_aoi_unit2_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit2_state === 'ETC'" type="primary" class="eqpButton">{{states.fi_aoi_unit2_state}}</el-button>
            <el-button v-show="fi_aoi_unit2_noState" type="danger" class="eqpButton">{{states.fi_aoi_unit2_state}}</el-button>
            <el-button class="codeButton">{{states.fi_aoi_unit2_code}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="6">
          <el-button-group>
            <el-button>Unit3</el-button>
            <el-button v-show="states.fi_aoi_unit3_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.fi_aoi_unit3_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit3_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.fi_aoi_unit3_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit3_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.fi_aoi_unit3_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit3_state === 'PM TIME'" type="primary" class="eqpButton">{{states.fi_aoi_unit3_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit3_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.fi_aoi_unit3_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit3_state === 'E-TIME'" type="primary" class="eqpButton">{{states.fi_aoi_unit3_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit3_state === 'ETC'" type="primary" class="eqpButton">{{states.fi_aoi_unit3_state}}</el-button>
            <el-button v-show="fi_aoi_unit3_noState" type="danger" class="eqpButton">{{states.fi_aoi_unit3_state}}</el-button>
            <el-button class="codeButton">{{states.fi_aoi_unit3_code}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="6">
          <el-button-group>
            <el-button>Unit4</el-button>
            <el-button v-show="states.fi_aoi_unit4_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.fi_aoi_unit4_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit4_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.fi_aoi_unit4_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit4_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.fi_aoi_unit4_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit4_state === 'PM TIME'" type="primary" class="eqpButton">{{states.fi_aoi_unit4_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit4_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.fi_aoi_unit4_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit4_state === 'E-TIME'" type="primary" class="eqpButton">{{states.fi_aoi_unit4_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit4_state === 'ETC'" type="primary" class="eqpButton">{{states.fi_aoi_unit4_state}}</el-button>
            <el-button v-show="fi_aoi_unit4_noState" type="danger" class="eqpButton">{{states.fi_aoi_unit4_state}}</el-button>
            <el-button class="codeButton">{{states.fi_aoi_unit4_code}}</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit5</el-button>
            <el-button v-show="states.fi_aoi_unit5_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.fi_aoi_unit5_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit5_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.fi_aoi_unit5_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit5_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.fi_aoi_unit5_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit5_state === 'PM TIME'" type="primary" class="eqpButton">{{states.fi_aoi_unit5_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit5_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.fi_aoi_unit5_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit5_state === 'E-TIME'" type="primary" class="eqpButton">{{states.fi_aoi_unit5_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit5_state === 'ETC'" type="primary" class="eqpButton">{{states.fi_aoi_unit5_state}}</el-button>
            <el-button v-show="fi_aoi_unit5_noState" type="danger" class="eqpButton">{{states.fi_aoi_unit5_state}}</el-button>
            <el-button class="codeButton">{{states.fi_aoi_unit5_code}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="6">
          <el-button-group>
            <el-button>Unit6</el-button>
            <el-button v-show="states.fi_aoi_unit6_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.fi_aoi_unit6_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit6_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.fi_aoi_unit6_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit6_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.fi_aoi_unit6_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit6_state === 'PM TIME'" type="primary" class="eqpButton">{{states.fi_aoi_unit6_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit6_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.fi_aoi_unit6_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit6_state === 'E-TIME'" type="primary" class="eqpButton">{{states.fi_aoi_unit6_state}}</el-button>
            <el-button v-show="states.fi_aoi_unit6_state === 'ETC'" type="primary" class="eqpButton">{{states.fi_aoi_unit6_state}}</el-button>
            <el-button v-show="fi_aoi_unit6_noState" type="danger" class="eqpButton">{{states.fi_aoi_unit6_state}}</el-button>
            <el-button class="codeButton">{{states.fi_aoi_unit6_code}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Auto Affix Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-show="states.auto_affix_unit1_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.auto_affix_unit1_state}}</el-button>
            <el-button v-show="states.auto_affix_unit1_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.auto_affix_unit1_state}}</el-button>
            <el-button v-show="states.auto_affix_unit1_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.auto_affix_unit1_state}}</el-button>
            <el-button v-show="states.auto_affix_unit1_state === 'PM TIME'" type="primary" class="eqpButton">{{states.auto_affix_unit1_state}}</el-button>
            <el-button v-show="states.auto_affix_unit1_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.auto_affix_unit1_state}}</el-button>
            <el-button v-show="states.auto_affix_unit1_state === 'E-TIME'" type="primary" class="eqpButton">{{states.auto_affix_unit1_state}}</el-button>
            <el-button v-show="states.auto_affix_unit1_state === 'ETC'" type="primary" class="eqpButton">{{states.auto_affix_unit1_state}}</el-button>
            <el-button v-show="auto_affix_unit1_noState" type="danger" class="eqpButton">{{states.auto_affix_unit1_state}}</el-button>
            <el-button class="codeButton">{{states.auto_affix_unit1_code}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="6">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-show="states.auto_affix_unit2_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.auto_affix_unit2_state}}</el-button>
            <el-button v-show="states.auto_affix_unit2_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.auto_affix_unit2_state}}</el-button>
            <el-button v-show="states.auto_affix_unit2_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.auto_affix_unit2_state}}</el-button>
            <el-button v-show="states.auto_affix_unit2_state === 'PM TIME'" type="primary" class="eqpButton">{{states.auto_affix_unit2_state}}</el-button>
            <el-button v-show="states.auto_affix_unit2_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.auto_affix_unit2_state}}</el-button>
            <el-button v-show="states.auto_affix_unit2_state === 'E-TIME'" type="primary" class="eqpButton">{{states.auto_affix_unit2_state}}</el-button>
            <el-button v-show="states.auto_affix_unit2_state === 'ETC'" type="primary" class="eqpButton">{{states.auto_affix_unit2_state}}</el-button>
            <el-button v-show="auto_affix_unit2_noState" type="danger" class="eqpButton">{{states.auto_affix_unit2_state}}</el-button>
            <el-button class="codeButton">{{states.auto_affix_unit2_code}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="App AOI Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-show="states.app_aoi_unit1_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.app_aoi_unit1_state}}</el-button>
            <el-button v-show="states.app_aoi_unit1_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.app_aoi_unit1_state}}</el-button>
            <el-button v-show="states.app_aoi_unit1_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.app_aoi_unit1_state}}</el-button>
            <el-button v-show="states.app_aoi_unit1_state === 'PM TIME'" type="primary" class="eqpButton">{{states.app_aoi_unit1_state}}</el-button>
            <el-button v-show="states.app_aoi_unit1_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.app_aoi_unit1_state}}</el-button>
            <el-button v-show="states.app_aoi_unit1_state === 'E-TIME'" type="primary" class="eqpButton">{{states.app_aoi_unit1_state}}</el-button>
            <el-button v-show="states.app_aoi_unit1_state === 'ETC'" type="primary" class="eqpButton">{{states.app_aoi_unit1_state}}</el-button>
            <el-button v-show="app_aoi_unit1_noState" type="danger" class="eqpButton">{{states.app_aoi_unit1_state}}</el-button>
            <el-button class="codeButton">{{states.app_aoi_unit1_code}}</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="6">
          <el-button-group>
            <el-button>Unit2</el-button>
            <el-button v-show="states.app_aoi_unit2_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.app_aoi_unit2_state}}</el-button>
            <el-button v-show="states.app_aoi_unit2_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.app_aoi_unit2_state}}</el-button>
            <el-button v-show="states.app_aoi_unit2_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.app_aoi_unit2_state}}</el-button>
            <el-button v-show="states.app_aoi_unit2_state === 'PM TIME'" type="primary" class="eqpButton">{{states.app_aoi_unit2_state}}</el-button>
            <el-button v-show="states.app_aoi_unit2_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.app_aoi_unit2_state}}</el-button>
            <el-button v-show="states.app_aoi_unit2_state === 'E-TIME'" type="primary" class="eqpButton">{{states.app_aoi_unit2_state}}</el-button>
            <el-button v-show="states.app_aoi_unit2_state === 'ETC'" type="primary" class="eqpButton">{{states.app_aoi_unit2_state}}</el-button>
            <el-button v-show="app_aoi_unit2_noState" type="danger" class="eqpButton">{{states.app_aoi_unit2_state}}</el-button>
            <el-button class="codeButton">{{states.app_aoi_unit2_code}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Auto Tape Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-show="states.auto_tape_unit1_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.auto_tape_unit1_state}}</el-button>
            <el-button v-show="states.auto_tape_unit1_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.auto_tape_unit1_state}}</el-button>
            <el-button v-show="states.auto_tape_unit1_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.auto_tape_unit1_state}}</el-button>
            <el-button v-show="states.auto_tape_unit1_state === 'PM TIME'" type="primary" class="eqpButton">{{states.auto_tape_unit1_state}}</el-button>
            <el-button v-show="states.auto_tape_unit1_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.auto_tape_unit1_state}}</el-button>
            <el-button v-show="states.auto_tape_unit1_state === 'E-TIME'" type="primary" class="eqpButton">{{states.auto_tape_unit1_state}}</el-button>
            <el-button v-show="states.auto_tape_unit1_state === 'ETC'" type="primary" class="eqpButton">{{states.auto_tape_unit1_state}}</el-button>
            <el-button v-show="auto_tape_unit1_noState" type="danger" class="eqpButton">{{states.auto_tape_unit1_state}}</el-button>
            <el-button class="codeButton">{{states.auto_tape_unit1_code}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Film Attach Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-show="states.film_attach_unit1_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.film_attach_unit1_state}}</el-button>
            <el-button v-show="states.film_attach_unit1_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.film_attach_unit1_state}}</el-button>
            <el-button v-show="states.film_attach_unit1_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.film_attach_unit1_state}}</el-button>
            <el-button v-show="states.film_attach_unit1_state === 'PM TIME'" type="primary" class="eqpButton">{{states.film_attach_unit1_state}}</el-button>
            <el-button v-show="states.film_attach_unit1_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.film_attach_unit1_state}}</el-button>
            <el-button v-show="states.film_attach_unit1_state === 'E-TIME'" type="primary" class="eqpButton">{{states.film_attach_unit1_state}}</el-button>
            <el-button v-show="states.film_attach_unit1_state === 'ETC'" type="primary" class="eqpButton">{{states.film_attach_unit1_state}}</el-button>
            <el-button v-show="film_attach_unit1_noState" type="danger" class="eqpButton">{{states.film_attach_unit1_state}}</el-button>
            <el-button class="codeButton">{{states.film_attach_unit1_code}}</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>

      <el-form-item label="Auto Packing Zone">
        <el-col :span="6">
          <el-button-group>
            <el-button>Unit1</el-button>
            <el-button v-show="states.auto_packing_unit1_state === 'RUN-TIME'" type="success" class="eqpButton">{{states.auto_packing_unit1_state}}</el-button>
            <el-button v-show="states.auto_packing_unit1_state === 'DOWN TIME'" type="danger" class="eqpButton">{{states.auto_packing_unit1_state}}</el-button>
            <el-button v-show="states.auto_packing_unit1_state === 'IDLE TIME'" type="warning" class="eqpButton">{{states.auto_packing_unit1_state}}</el-button>
            <el-button v-show="states.auto_packing_unit1_state === 'PM TIME'" type="primary" class="eqpButton">{{states.auto_packing_unit1_state}}</el-button>
            <el-button v-show="states.auto_packing_unit1_state === 'TEST-RUN'" type="info" class="eqpButton">{{states.auto_packing_unit1_state}}</el-button>
            <el-button v-show="states.auto_packing_unit1_state === 'E-TIME'" type="primary" class="eqpButton">{{states.auto_packing_unit1_state}}</el-button>
            <el-button v-show="states.auto_packing_unit1_state === 'ETC'" type="primary" class="eqpButton">{{states.auto_packing_unit1_state}}</el-button>
            <el-button v-show="auto_packing_unit1_noState" type="danger" class="eqpButton">{{states.auto_packing_unit1_state}}</el-button>
            <el-button class="codeButton">{{states.auto_packing_unit1_code}}</el-button>
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
  import { GetCurrentEQPState } from '@/api/others'
  import socket from '@/utils/socket.js'
  export default {
    name: 'EQPState',
    data() {
      return {
        states: {
          pt_aoi_unit1_state: 'RUN-TIME',
          pt_aoi_unit1_code: 'RR',
          pt_aoi_unit2_state: 'RUN-TIME',
          pt_aoi_unit2_code: 'RR',
          pt_aoi_unit3_state: 'RUN-TIME',
          pt_aoi_unit3_code: 'RR',
          pt_aoi_unit4_state: 'RUN-TIME',
          pt_aoi_unit4_code: 'RR',

          blu_aoi_unit1_state: 'RUN-TIME',
          blu_aoi_unit1_code: 'RR',
          blu_aoi_unit2_state: 'RUN-TIME',
          blu_aoi_unit2_code: 'RR',
          blu_aoi_unit3_state: 'RUN-TIME',
          blu_aoi_unit3_code: 'RR',
          blu_aoi_unit4_state: 'RUN-TIME',
          blu_aoi_unit4_code: 'RR',

          auto_assy_unit1_state: 'RUN-TIME',
          auto_assy_unit1_code: 'RR',
          auto_assy_unit2_state: 'RUN-TIME',
          auto_assy_unit2_code: 'RR',

          fi_aoi_unit1_state: 'RUN-TIME',
          fi_aoi_unit1_code: 'RR',
          fi_aoi_unit2_state: 'RUN-TIME',
          fi_aoi_unit2_code: 'RR',
          fi_aoi_unit3_state: 'RUN-TIME',
          fi_aoi_unit3_code: 'RR',
          fi_aoi_unit4_state: 'RUN-TIME',
          fi_aoi_unit4_code: 'RR',
          fi_aoi_unit5_state: 'RUN-TIME',
          fi_aoi_unit5_code: 'RR',
          fi_aoi_unit6_state: 'RUN-TIME',
          fi_aoi_unit6_code: 'RR',

          auto_affix_unit1_state: 'RUN-TIME',
          auto_affix_unit1_code: 'RR',
          auto_affix_unit2_state: 'RUN-TIME',
          auto_affix_unit2_code: 'RR',

          app_aoi_unit1_state: 'RUN-TIME',
          app_aoi_unit1_code: 'RR',
          app_aoi_unit2_state: 'RUN-TIME',
          app_aoi_unit2_code: 'RR',

          auto_tape_unit1_state: 'RUN-TIME',
          auto_tape_unit1_code: 'RR',

          film_attach_unit1_state: 'RUN-TIME',
          film_attach_unit1_code: 'RR',

          auto_packing_unit1_state: 'RUN-TIME',
          auto_packing_unit1_code: 'RR'

        },
        pt_aoi_unit1_noState: false,
        pt_aoi_unit2_noState: false,
        pt_aoi_unit3_noState: false,
        pt_aoi_unit4_noState: false,
        blu_aoi_unit1_noState: false,
        blu_aoi_unit2_noState: false,
        blu_aoi_unit3_noState: false,
        blu_aoi_unit4_noState: false,
        auto_assy_unit1_noState: false,
        auto_assy_unit2_noState: false,
        fi_aoi_unit1_noState: false,
        fi_aoi_unit2_noState: false,
        fi_aoi_unit3_noState: false,
        fi_aoi_unit4_noState: false,
        fi_aoi_unit5_noState: false,
        fi_aoi_unit6_noState: false,
        auto_affix_unit1_noState: false,
        auto_affix_unit2_noState: false,
        app_aoi_unit1_noState: false,
        app_aoi_unit2_noState: false,
        auto_tape_unit1_noState: false,
        film_attach_unit1_noState: false,
        auto_packing_unit1_noState: false

      }
    },
    created() {
      this.refreshData()
    },
    mounted() {
      socket.setCallback(this.callback)
      socket.initWebSocket('192.168.31.86', 9002)
    },
    destroyed() {
      socket.close()
    },
    methods: {
      checkState() {
        if (this.states.pt_aoi_unit1_state !== 'RUN-TIME' && this.states.pt_aoi_unit1_state !== 'DOWN TIME' &&
                this.states.pt_aoi_unit1_state !== 'IDLE TIME' && this.states.pt_aoi_unit1_state !== 'PM TIME' &&
                this.states.pt_aoi_unit1_state !== 'TEST-RUN' && this.states.pt_aoi_unit1_state !== 'E-TIME' &&
                this.states.pt_aoi_unit1_state !== 'ETC') {
          this.pt_aoi_unit1_noState = true
        } else {
          this.pt_aoi_unit1_noState = false
        }
        if (this.states.pt_aoi_unit2_state !== 'RUN-TIME' && this.states.pt_aoi_unit2_state !== 'DOWN TIME' &&
                this.states.pt_aoi_unit2_state !== 'IDLE TIME' && this.states.pt_aoi_unit2_state !== 'PM TIME' &&
                this.states.pt_aoi_unit2_state !== 'TEST-RUN' && this.states.pt_aoi_unit2_state !== 'E-TIME' &&
                this.states.pt_aoi_unit2_state !== 'ETC') {
          this.pt_aoi_unit2_noState = true
        } else {
          this.pt_aoi_unit2_noState = false
        }
        if (this.states.pt_aoi_unit3_state !== 'RUN-TIME' && this.states.pt_aoi_unit3_state !== 'DOWN TIME' &&
                this.states.pt_aoi_unit3_state !== 'IDLE TIME' && this.states.pt_aoi_unit3_state !== 'PM TIME' &&
                this.states.pt_aoi_unit3_state !== 'TEST-RUN' && this.states.pt_aoi_unit3_state !== 'E-TIME' &&
                this.states.pt_aoi_unit3_state !== 'ETC') {
          this.pt_aoi_unit3_noState = true
        } else {
          this.pt_aoi_unit3_noState = false
        }
        if (this.states.pt_aoi_unit4_state !== 'RUN-TIME' && this.states.pt_aoi_unit4_state !== 'DOWN TIME' &&
                this.states.pt_aoi_unit4_state !== 'IDLE TIME' && this.states.pt_aoi_unit4_state !== 'PM TIME' &&
                this.states.pt_aoi_unit4_state !== 'TEST-RUN' && this.states.pt_aoi_unit4_state !== 'E-TIME' &&
                this.states.pt_aoi_unit4_state !== 'ETC') {
          this.pt_aoi_unit4_noState = true
        } else {
          this.pt_aoi_unit4_noState = false
        }
        if (this.states.blu_aoi_unit1_state !== 'RUN-TIME' && this.states.blu_aoi_unit1_state !== 'DOWN TIME' &&
                this.states.blu_aoi_unit1_state !== 'IDLE TIME' && this.states.blu_aoi_unit1_state !== 'PM TIME' &&
                this.states.blu_aoi_unit1_state !== 'TEST-RUN' && this.states.blu_aoi_unit1_state !== 'E-TIME' &&
                this.states.blu_aoi_unit1_state !== 'ETC') {
          this.blu_aoi_unit1_noState = true
        } else {
          this.blu_aoi_unit1_noState = false
        }
        if (this.states.blu_aoi_unit2_state !== 'RUN-TIME' && this.states.blu_aoi_unit2_state !== 'DOWN TIME' &&
                this.states.blu_aoi_unit2_state !== 'IDLE TIME' && this.states.blu_aoi_unit2_state !== 'PM TIME' &&
                this.states.blu_aoi_unit2_state !== 'TEST-RUN' && this.states.blu_aoi_unit2_state !== 'E-TIME' &&
                this.states.blu_aoi_unit2_state !== 'ETC') {
          this.blu_aoi_unit2_noState = true
        } else {
          this.blu_aoi_unit2_noState = false
        }
        if (this.states.blu_aoi_unit3_state !== 'RUN-TIME' && this.states.blu_aoi_unit3_state !== 'DOWN TIME' &&
                this.states.blu_aoi_unit3_state !== 'IDLE TIME' && this.states.blu_aoi_unit3_state !== 'PM TIME' &&
                this.states.blu_aoi_unit3_state !== 'TEST-RUN' && this.states.blu_aoi_unit3_state !== 'E-TIME' &&
                this.states.blu_aoi_unit3_state !== 'ETC') {
          this.blu_aoi_unit3_noState = true
        } else {
          this.blu_aoi_unit3_noState = false
        }
        if (this.states.blu_aoi_unit4_state !== 'RUN-TIME' && this.states.blu_aoi_unit4_state !== 'DOWN TIME' &&
                this.states.blu_aoi_unit4_state !== 'IDLE TIME' && this.states.blu_aoi_unit4_state !== 'PM TIME' &&
                this.states.blu_aoi_unit4_state !== 'TEST-RUN' && this.states.blu_aoi_unit4_state !== 'E-TIME' &&
                this.states.blu_aoi_unit4_state !== 'ETC') {
          this.blu_aoi_unit4_noState = true
        } else {
          this.blu_aoi_unit4_noState = false
        }
        if (this.states.auto_assy_unit1_state !== 'RUN-TIME' && this.states.auto_assy_unit1_state !== 'DOWN TIME' &&
                this.states.auto_assy_unit1_state !== 'IDLE TIME' && this.states.auto_assy_unit1_state !== 'PM TIME' &&
                this.states.auto_assy_unit1_state !== 'TEST-RUN' && this.states.auto_assy_unit1_state !== 'E-TIME' &&
                this.states.auto_assy_unit1_state !== 'ETC') {
          this.auto_assy_unit1_noState = true
        } else {
          this.auto_assy_unit1_noState = false
        }
        if (this.states.auto_assy_unit2_state !== 'RUN-TIME' && this.states.auto_assy_unit2_state !== 'DOWN TIME' &&
                this.states.auto_assy_unit2_state !== 'IDLE TIME' && this.states.auto_assy_unit2_state !== 'PM TIME' &&
                this.states.auto_assy_unit2_state !== 'TEST-RUN' && this.states.auto_assy_unit2_state !== 'E-TIME' &&
                this.states.auto_assy_unit2_state !== 'ETC') {
          this.auto_assy_unit2_noState = true
        } else {
          this.auto_assy_unit2_noState = false
        }
        if (this.states.app_aoi_unit1_state !== 'RUN-TIME' && this.states.app_aoi_unit1_state !== 'DOWN TIME' &&
                this.states.app_aoi_unit1_state !== 'IDLE TIME' && this.states.app_aoi_unit1_state !== 'PM TIME' &&
                this.states.app_aoi_unit1_state !== 'TEST-RUN' && this.states.app_aoi_unit1_state !== 'E-TIME' &&
                this.states.app_aoi_unit1_state !== 'ETC') {
          this.app_aoi_unit1_noState = true
        } else {
          this.app_aoi_unit1_noState = false
        }
        if (this.states.app_aoi_unit2_state !== 'RUN-TIME' && this.states.app_aoi_unit2_state !== 'DOWN TIME' &&
                this.states.app_aoi_unit2_state !== 'IDLE TIME' && this.states.app_aoi_unit2_state !== 'PM TIME' &&
                this.states.app_aoi_unit2_state !== 'TEST-RUN' && this.states.app_aoi_unit2_state !== 'E-TIME' &&
                this.states.app_aoi_unit2_state !== 'ETC') {
          this.app_aoi_unit2_noState = true
        } else {
          this.app_aoi_unit2_noState = false
        }
        if (this.states.auto_tape_unit1_state !== 'RUN-TIME' && this.states.auto_tape_unit1_state !== 'DOWN TIME' &&
                this.states.auto_tape_unit1_state !== 'IDLE TIME' && this.states.auto_tape_unit1_state !== 'PM TIME' &&
                this.states.auto_tape_unit1_state !== 'TEST-RUN' && this.states.auto_tape_unit1_state !== 'E-TIME' &&
                this.states.auto_tape_unit1_state !== 'ETC') {
          this.auto_tape_unit1_noState = true
        } else {
          this.auto_tape_unit1_noState = false
        }
        if (this.states.film_attach_unit1_state !== 'RUN-TIME' && this.states.film_attach_unit1_state !== 'DOWN TIME' &&
                this.states.film_attach_unit1_state !== 'IDLE TIME' && this.states.film_attach_unit1_state !== 'PM TIME' &&
                this.states.film_attach_unit1_state !== 'TEST-RUN' && this.states.film_attach_unit1_state !== 'E-TIME' &&
                this.states.film_attach_unit1_state !== 'ETC') {
          this.film_attach_unit1_noState = true
        } else {
          this.film_attach_unit1_noState = false
        }
        if (this.states.auto_packing_unit1_state !== 'RUN-TIME' && this.states.auto_packing_unit1_state !== 'DOWN TIME' &&
                this.states.auto_packing_unit1_state !== 'IDLE TIME' && this.states.auto_packing_unit1_state !== 'PM TIME' &&
                this.states.auto_packing_unit1_state !== 'TEST-RUN' && this.states.auto_packing_unit1_state !== 'E-TIME' &&
                this.states.auto_packing_unit1_state !== 'ETC') {
          this.auto_packing_unit1_noState = true
        } else {
          this.auto_packing_unit1_noState = false
        }
      },
      refreshData() {
        GetCurrentEQPState().then(response => {
          this.states = response
          this.checkState()
        })
      },
      callback: function(ip, e) {
        // topic handler
        var EQPStates = this.states
        var msg = JSON.parse(e.data)
        if (msg === undefined || msg['pub']['topic'] === undefined) {
          return
        }
        var topic = msg['pub']['topic']
        if (topic === 'EQPState') {
          var unitName = msg['pub']['content']['UnitName']
          var state = msg['pub']['content']['State']
          var code = msg['pub']['content']['Code']
          if (unitName === 'PTAOI_UNIT1') {
            EQPStates.pt_aoi_unit1_state = state
            EQPStates.pt_aoi_unit1_code = code
          }
          if (unitName === 'PTAOI_UNIT2') {
            EQPStates.pt_aoi_unit2_state = state
            EQPStates.pt_aoi_unit2_code = code
          }
          if (unitName === 'PTAOI_UNIT3') {
            EQPStates.pt_aoi_unit3_state = state
            EQPStates.pt_aoi_unit3_code = code
          }
          if (unitName === 'PTAOI_UNIT4') {
            EQPStates.pt_aoi_unit4_state = state
            EQPStates.pt_aoi_unit4_code = code
          }
          if (unitName === 'BLUAOI_UNIT1') {
            EQPStates.blu_aoi_unit1_state = state
            EQPStates.blu_aoi_unit1_code = code
          }
          if (unitName === 'BLUAOI_UNIT2') {
            EQPStates.blu_aoi_unit2_state = state
            EQPStates.blu_aoi_unit2_code = code
          }
          if (unitName === 'BLUAOI_UNIT3') {
            EQPStates.blu_aoi_unit3_state = state
            EQPStates.blu_aoi_unit3_code = code
          }
          if (unitName === 'BLUAOI_UNIT4') {
            EQPStates.blu_aoi_unit4_state = state
            EQPStates.blu_aoi_unit4_code = code
          }
          if (unitName === 'AutoAssy_UNIT1') {
            EQPStates.auto_assy_unit1_state = state
            EQPStates.auto_assy_unit1_code = code
          }
          if (unitName === 'AutoAssy_UNIT2') {
            EQPStates.auto_assy_unit2_state = state
            EQPStates.auto_assy_unit2_code = code
          }
          if (unitName === 'FIAOI_UNIT1') {
            EQPStates.fi_aoi_unit1_state = state
            EQPStates.fi_aoi_unit1_code = code
          }
          if (unitName === 'FIAOI_UNIT2') {
            EQPStates.fi_aoi_unit2_state = state
            EQPStates.fi_aoi_unit2_code = code
          }
          if (unitName === 'FIAOI_UNIT3') {
            EQPStates.fi_aoi_unit3_state = state
            EQPStates.fi_aoi_unit3_code = code
          }
          if (unitName === 'FIAOI_UNIT4') {
            EQPStates.fi_aoi_unit4_state = state
            EQPStates.fi_aoi_unit4_code = code
          }
          if (unitName === 'FIAOI_UNIT5') {
            EQPStates.fi_aoi_unit5_state = state
            EQPStates.fi_aoi_unit5_code = code
          }
          if (unitName === 'FIAOI_UNIT6') {
            EQPStates.fi_aoi_unit6_state = state
            EQPStates.fi_aoi_unit6_code = code
          }
          if (unitName === 'AutoAffix_UNIT1') {
            EQPStates.auto_affix_unit1_state = state
            EQPStates.auto_affix_unit1_code = code
          }
          if (unitName === 'AutoAffix_UNIT2') {
            EQPStates.auto_affix_unit2_state = state
            EQPStates.auto_affix_unit2_code = code
          }
          if (unitName === 'AppAOI_UNIT1') {
            EQPStates.app_aoi_unit1_state = state
            EQPStates.app_aoi_unit1_code = code
          }
          if (unitName === 'AppAOI_UNIT2') {
            EQPStates.app_aoi_unit2_state = state
            EQPStates.app_aoi_unit2_code = code
          }
          if (unitName === 'AutoTape_UNIT1') {
            EQPStates.auto_tape_unit1_state = state
            EQPStates.auto_tape_unit1_code = code
          }
          if (unitName === 'FilmAttach_UNIT1') {
            EQPStates.film_attach_unit1_state = state
            EQPStates.film_attach_unit1_code = code
          }
          if (unitName === 'AutoPacking_UNIT1') {
            EQPStates.auto_packing_unit1_state = state
            EQPStates.auto_packing_unit1_code = code
          }
          this.checkState()
        }
      }
    }
  }
</script>
<style scoped>
    .eqpButton {
        width: 102px;
        height: 32px;
    }
    .codeButton {
        width: 49px;
        height: 32px;
    }
</style>
