import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadComplete: false,
    userInformation: {},
    comSelectList: [],
    userPhone: '',
    payOut: {
      step1: {},
      step2: {},
      step3: {
        existBeneficiaryInfo: {
          paymentMethod: '',
        },
      },
      senderList: [],
      beneficiaryList: [],
      payOutWalletList: [],
      payOutOptionsList: [],
    },
    countDown: 300,
  },
  mutations: {
    setLoad(state, load) {
      state.loadComplete = load
    },
    setUserInfomation(state, data){
      state.userInformation = data
    },
    setComSelectList(state, data) {
      state.comSelectList = data
    },
    saveUserPhone(state, data) {
      state.userPhone = data
    },
    setPayOutStepData(state, data) {
      // console.log('存储store',data)
      // console.log('存储中payOut值',state.payOut)
      const statePara = 'step' + data.num
      state.payOut[statePara] = data.data
    },
    saveSenderList(state, data) {
      state.senderList = data
    },
    saveBeneficiaryList(state, data) {
      state.beneficiaryList = data
    },
    savePayOutWalletList(state, data) {
      state.payOutWalletList = data
    },
    savePayOutOptionsList(state, data) {
      state.payOutOptionsList = data
    },
    saveCountDown(state, data) {
      state.countDown = data
    },
  },
  actions: {
    async getComSelectList({commit}) {
      let temp = JSON.parse(localStorage.getItem('comInfo'))
      if (!temp) {
        await Vue.prototype.$api
          .getComSelectList()
          .then(res => {
            if (res.code === '0') {
              localStorage.setItem('comInfo', JSON.stringify(res.data))
              temp = res.data
            }
          })
          .catch(error => {
            console.log(error)
          })
      }
      commit('setComSelectList', temp)
    },
    async getDataList({dispatch, commit}) {
      await Promise.all(
        ['getComSelectList'].map(x => dispatch(x))
      )
      commit('setLoad', true)
      // await dispatch('getComSelectList')
      // await Promise.all(['getComSelectList'])
    },
    async getSelectList({dispatch, commit}) {
      await dispatch('getComSelectList')
      // await Promise.all(['getComSelectList'])
    },
  },
  modules: {},
})
