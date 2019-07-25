<template>
    <div style="horiz-align: center">
        <div>
            <h2 style="margin-top: 50px"> MES Host Connection State </h2>
            <el-row>
                <el-button type="success">Remote</el-button>
            </el-row>
        </div>

        <div>
            <h2 style="margin-top: 50px"> PLC Connection State </h2>
            <el-button-group>
                <el-button type="primary">BLU AOI PLC1</el-button>
                <el-button type="success">Connected</el-button>
                <el-button type="warning">101ms</el-button>
            </el-button-group>
        </div>

        <div>
            <h2 style="margin-top: 50px"> EQP Connection State </h2>
            <el-button-group>
                <el-button type="primary">BLU AOI PLC1</el-button>
                <el-button type="success">Connected</el-button>
            </el-button-group>
        </div>

    </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style scoped>

</style>
