import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import errorLog from './modules/errorLog'
import ioDevice from './modules/ioDevice'
import parameters from './modules/parameters'
import alarm from './modules/alarm'
import getters from './getters'
Vue.use(Vuex)

import {
  SOCKET_ONOPEN,
  SOCKET_ONCLOSE,
  SOCKET_ONERROR,
  SOCKET_ONMESSAGE,
  SOCKET_RECONNECT,
  SOCKET_RECONNECT_ERROR
} from './mutation-types'

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    errorLog,
    ioDevice,
    parameters,
    alarm
  },
  state: {
    socket: {
      isConnected: false,
      message: '',
      reconnectError: false
    }
  },
  mutations: {
    [SOCKET_ONOPEN](state, event) {
      state.socket.isConnected = true
      console.log('SOCKET_ONOPEN')
      // subscribe
      // Vue.prototype.$socket.send(JSON.stringify({ sub: ['IO'] }))
    },
    [SOCKET_ONCLOSE](state, event) {
      state.socket.isConnected = false
    },
    [SOCKET_ONERROR](state, event) {
      console.error(state, event)
    },
    // default handler called for all methods
    [SOCKET_ONMESSAGE](state, message) {
      state.socket.message = message
      // topic handler
      var msg = JSON.parse(JSON.stringify(message))
      if (msg === undefined || msg['pub']['topic'] === undefined) {
        return
      }
      var topic = msg['pub']['topic']
      if (topic === 'IO') {
        // var lineNo = msg['pub']['LineNo']
        var sourceId = msg['pub']['content']['ID']
        var devType = msg['pub']['content']['DevType']
        var devNo = msg['pub']['content']['DevNo']
        var devVal = msg['pub']['content']['Value']

        for (let i = 0; i < state.ioDevice.metadatas.length; i++) {
          if (state.ioDevice.metadatas[i].datasourceId === sourceId &&
              state.ioDevice.metadatas[i].sourceItemId.slice(0, 1) === devType &&
              parseInt(state.ioDevice.metadatas[i].sourceItemId.slice(1), 16) === parseInt(devNo, 16)) {
            state.ioDevice.metadatas[i].value = devVal
            state.ioDevice.updatingDatasourceId = sourceId
            state.ioDevice.updatingSourceItemId = devType + devNo
            state.ioDevice.varValue = devVal
            console.log(sourceId, devType, devNo, devVal)
          }
        }
      }
      if (topic === 'AlarmInfo') {
        var alarms = []
        alarms = msg['pub']['content']['alarms']
        state.alarm.alarmGridData = alarms
        state.alarm.alarmNumber = alarms.length
        if (state.alarm.alarmNumber !== 0) {
          state.alarm.alarmDialogTableVisible = true
        } else {
          state.alarm.alarmDialogTableVisible = false
        }
        console.log(alarms)
      }
    },
    // mutations for reconnect methods
    [SOCKET_RECONNECT](state, count) {
      console.info(state, count)
    },
    [SOCKET_RECONNECT_ERROR](state) {
      state.socket.reconnectError = true
    }
  },
  actions: {
    sendMessage: function(context, message) {
      Vue.prototype.$socket.send(message)
      console.log('send message: ', message)
    }
  },
  getters
})

export default store
