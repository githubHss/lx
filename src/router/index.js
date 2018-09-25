import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import JobList from '../pages/jobs/JobList'
import JobDetails from '../pages/jobs/JobDetails'
import LibraryList from  '../pages/libraries/LibraryList'
import LibraryDetail from  '../pages/libraries/LibraryDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/jobs/list',
      name: 'JobList',
      component: JobList
    },
    {
      path: '/jobs/:id',
      name: 'JobDetails',
      component: JobDetails
    },
    {
      path:'/libraries/list',
      name:'LibraryList',
      component:LibraryList
    },
    {
      path:'/libraries/:id',
      name:'LibraryDetail',
      component:LibraryDetail
    }
  ]
})
