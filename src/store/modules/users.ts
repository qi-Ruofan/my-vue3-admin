import type { MutationTree, ActionTree } from 'vuex'
import type { State } from '..'
import http from '@/util/request'

export interface UserState {
  token: string
}
const state: UserState = {
  token: ''
}

const mutations: MutationTree<UserState> = {
  updateToken(state, payload){
    state.token = payload;
  },
  clearToken(state){
    state.token = '';
  }
}

const actions: ActionTree<UserState, State> = {
  login(context, payload) {
    return http.post('/users/login', payload)
  },
  getCaptcha(context) {
    return http.get('/users/captcha')
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
