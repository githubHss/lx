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
        endTime: "",
        group: "",
        metaData: "{}",
        name: "",
        payload: "",
        scheduleType: "",
        startTime: "",
        type: ""
      },
      libraries:{
        list: [],
        total: null,
        page: null,
        id: '',
        created_at: "",
        modified_at: "",
        name: "",
        type: "",
        metaData: {},
        group: null
        },
    }
  },
  mutations: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
    updateJobs(state,{endTime,group,metaData,name,payload,scheduleType,startTime,type}){
      state.jobs.endTime = endTime;
      state.jobs.group = group;
      state.jobs.metaData =metaData;
      state.jobs.name = name;
      state.jobs.payload = payload;
      state.jobs.scheduleType = scheduleType;
      state.jobs.startTime=startTime;
      state.jobs.type=type;
    }
  },
  getters: {
  jobType: state =>{
    return state.jobs.type;
  },
  },
  actions: {
    initial({commit}){
    return new Promise((resolve, reject) =>{
      api.getList("jobs")
        .then(({data:jobs}) => {
          commit('updateJobs',jobs);
          return resolve(jobs)
        })
        .catch(reason =>{
          return reject("错误")
        })
    })
  },
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/jobs/list') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
});
