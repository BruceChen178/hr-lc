const state = {
  parameters: [] // name,type,description,value
}

const mutations = {
  INIT_PARAMETERS: (state, parameter) => {
    state.parameters.push(parameter)
  },
  UPDATE_PARAMETER_VALUE: (state, name, newValue) => {
    for (let i = 0; i < state.parameters.length; i++) {
      if (state.parameters[i].name === name) {
        state.parameters[i].value = newValue
      }
    }
  }
}

const actions = {
  initParameters({ commit }, parameter) {
    commit('INIT_PARAMETERS', parameter)
  },
  updateParameterValue({ commit }, name, newValue) {
    commit('UPDATE_PARAMETER_VALUE', name, newValue)
  }
}

const getters = {
  getParameterByName: (state) => (name) => {
    return state.parameters.find(parameter => parameter.name === name)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
