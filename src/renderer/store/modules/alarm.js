const state = {
  alarmGridData: [],
  alarmNumber: 0,
  alarmDialogTableVisible: false
}

const mutations = {
  // ADD_ERROR_LOG: (state, log) => {
  //   state.logs.push(log)
  // }
  show(state) {
    state.alarmDialogTableVisible = true
  },
  hide(state) {
    state.alarmDialogTableVisible = false
  },
  newAlarmNum(state, sum) {
    state.alarmNumber = sum
  },
  pushAlarmGridData(state, items) {
    state.alarmGridData = []
    // state.alarmGridData.push(items)
    state.alarmGridData = items
  }
}

const actions = {
  // addErrorLog({ commit }, log) {
  //   commit('ADD_ERROR_LOG', log)
  // }
  showAlarmDialog(context) {
    context.commit('show')
  },
  hideAlarmDialog(context) {
    context.commit('hide')
  },
  getNewAlarmNum(context, num) {
    context.commit('newAlarmNum', num)
  },
  getPushAlarmGridData(context, item) {
    context.commit('pushAlarmGridData', item)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
