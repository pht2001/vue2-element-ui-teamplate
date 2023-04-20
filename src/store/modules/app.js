const state = {
  isCollapse: parseInt(localStorage.getItem('isCollapse') || '0')
}
const mutations = {
  setIsCollapse(state, isCollapse) {
    localStorage.setItem('isCollapse', isCollapse.toString())
    state.isCollapse = isCollapse
  }
}
const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
