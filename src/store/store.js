import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  namespace:false,
  state(){
    return {
      jobs:{
        list: [],
        total: null,
        page: null,
        // endTime: "",
        // group: "",
        // metaData: "{}",
        // name: "",
        // payload: "",
        // scheduleType: "",
        // startTime: "",
        record:{}
      },
      libraries:{
        list: [],
        total: null,
        page: null,
        // id: '',
        // created_at: "",
        // modified_at: "",
        // name: "",
        // type: "",
        // metaData: {},
        // group: null
        },
    }
  },
  mutations: {
    setList(state,data){
      state.jobs.list=data;
    },
    setJobRecord(state,record){
      state.jobs.record=record
    }
  },
  getters: {
    listData:state=>state.jobs.list,
    jobRecord:state=>state.jobs.record
  },
  actions: {
  },
});
