import { createStore, useStore as baseUseStore } from 'vuex'
import type { Store } from 'vuex'
import users from './modules/users'
import type { UserState } from './modules/users'
import type { InjectionKey } from 'vue'
import VuexPersistence from 'vuex-persist'

export interface State {
}
export interface StateAll extends State {
  users: UserState
}


const vuexLocal = new VuexPersistence<State>({
  storage: window.localStorage,
  reducer: (state) => ({ users: { token: (state as StateAll).users.token } }),
})

// 疑问
export const key: InjectionKey<Store<StateAll>> = Symbol()
export function useStore () {
  return baseUseStore(key)
}

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users
  },
  plugins: [vuexLocal.plugin]
})
