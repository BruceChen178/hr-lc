<template>
    <div>
        <el-button v-if="alarmNumber === 0"  icon="el-icon-bell" size="mini " round="">{{ alarmNumber }}</el-button>
        <el-button v-else type="danger" icon="el-icon-bell" size="mini " round="" @click="openDialog">{{ alarmNumber }}</el-button>

    <el-dialog v-el-drag-dialog :visible.sync="alarmDialogTableVisible" title="Alarm Message List" @dragDialog="handleDrag" @close="closeDialog">
      <el-table :data="alarmGridData">
        <el-table-column property="AlarmCode" label="Alarm Code" />
        <el-table-column property="SourceName" label="Source Name" />
        <el-table-column property="UnitName" label="Unit Name" />
        <el-table-column property="Description" label="Description" />
        <el-table-column property="OccuredTime" label="Occured Time" />
       </el-table>
    </el-dialog>
    </div>
</template>

<script>
  import elDragDialog from '@/directive/el-drag-dialog'
  import { mapActions } from 'vuex'

  export default {
    name: 'index',
    directives: { elDragDialog },
    data() {
      return {
        // alarmNumber: 0,
        // alarmDialogTableVisible: false,
        // alarmGridData: []
      }
    },
    computed: {
      // ...mapState(['alarmNumber'])
      alarmNumber() {
        return this.$store.state.alarm.alarmNumber
      },
      alarmDialogTableVisible() {
        return this.$store.state.alarm.alarmDialogTableVisible
      },
      alarmGridData() {
        return this.$store.state.alarm.alarmGridData
      }
    },

    methods: {
      // v-el-drag-dialog onDrag callback function
      handleDrag() {
        // this.$store.dispatch('alarm/hideAlarmDialog')
      },
      openDialog() {
        if (this.$store.state.alarm.alarmNumber > 0) {
          this.$store.dispatch('alarm/showAlarmDialog')
        }
      },
      closeDialog() {
        this.$store.dispatch('alarm/hideAlarmDialog')
      },
      ...mapActions([
        'showAlarmDialog',
        'hideAlarmDialog'
      ])

    }
  }
</script>

<style scoped>

</style>
