const state = {
  metadatas: [],
  updatingDatasourceId: '',
  updatingSourceItemId: '',
  varValue: ''
}

const mutations = {
  INIT_METADATA: (state, metadata) => {
    state.metadatas.push(metadata)
  },
  UPDATE_METADATA_VALUE: (state, sourceItem, newValue) => {
    for (let i = 0; i < state.metadatas.length; i++) {
      if (state.metadatas[i].sourceItem === sourceItem) {
        state.metadatas[i].value = newValue
      }
    }
  }
}

const actions = {
  initMetadatas({ commit }, metadata) {
    commit('INIT_METADATA', metadata)
  },
  updateMetadataValue({ commit }, sourceItem, newValue) {
    commit('UPDATE_METADATA_VALUE', sourceItem, newValue)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
