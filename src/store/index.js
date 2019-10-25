import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      sex:'',
      hobbies:[],
      msg:''
  },
  mutations: {
      addSex(state,obj){
        state.sex=obj;
      },
      addHobbies(state,obj){
          state.hobbies.push(obj);
      },
      addMsg(state,obj){
          state.msg=obj;
      }
  },
  actions: {
  },
  modules: {
  }
})
