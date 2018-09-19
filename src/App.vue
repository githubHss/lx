<template>
  <div>
    <a-layout id="components-layout-demo-top-side-2" style="min-height: 100vh;">
      <a-layout-header class="header">
        <div class="logo" />
        <!--<a-menu theme="dark" mode="horizontal" :defaultSelectedKeys="['{{location.pathname}}']" :style="{ lineHeight: '64px' }">-->
          <a-menu theme="dark" mode="horizontal" :defaultSelectedKeys="['/']" :style="{ lineHeight: '64px' }">
          <!--<a-menu-item key="/"><Link to="/"><a-icon type="home" />Home</Link></a-menu-item>-->
          <!--<a-menu-item key="/libraries/list"><Link to="/libraries/list"><a-icon type="bars" />Libraries</Link></a-menu-item>-->
          <a-menu-item key="/">
            <router-link to="/">
              <a-icon type="home" class="icon" />
              <span class="nav-text">Home</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/libraries/list">
            <router-link to="/libraries/list">
              <a-icon type="bars" class="icon" />
              <span class="nav-text">Home</span>
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout>
        <a-layout-sider width="200" style="background: #fff">
          <a-menu mode="inline" :defaultSelectedKeys="['/']">
            <a-menu-item key="/">
              <router-link to="/">
              <a-icon type="home" class="icon" />
              <span class="nav-text">Home</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="/jobs">
              <router-link to="/jobs/list">
                <a-icon type="bars" class="icon" />
                <span class="nav-text">Jobs</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="/libraries">
              <router-link to="/libraries/list">
              <a-icon type="bars" class="icon" />
              <span class="nav-text">Libraries</span>
              </router-link>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout-content style="margin: 0px 16px;">
          <router-view  style="margin: 16px 0px; padding: 24px; background:#fff; min-height: 360px;"></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
// import * as Vuex form "vuex"
import  Vue from  "vue"
import store from './store/store'
import 'ant-design-vue/dist/antd.css'
// import { DatePicker } from 'ant-design-vue';
// import {Layout,Header,Sider,Content,Footer} from 'ant-design-vue'
import  Routes from './router'

export default {
  name: 'App',
  components:{

  },
  data () {
    return {
      collapsed: false,
      routes:Routes
    }
  },
}
</script>

<style scoped>
  #components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255,255,255,.2);
    margin: 16px 28px 16px 0;
    float: left;
  }
  .normal {
    font-family: Georgia, sans-serif;
    margin-top: 3em;
    text-align: center;
  }

  .title {
    font-size: 2.5rem;
    font-weight: normal;
    letter-spacing: -1px;
  }

  .welcome {
    height: 328px;
    background: url(/assets/yay.jpg) no-repeat center 0;
    background-size: 388px 328px;
  }

  .list {
    font-size: 1.2em;
    margin-top: 1.8em;
    list-style: none;
    line-height: 1.5em;
  }

  .list code {
    background: #f7f7f7;
  }
  .content {
    flex: 1;
    display: flex;
  }

  .main {
    padding: 0 8px;
    flex: 1 0 auto;
  }

  .logo {
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
  }

  .icon {
    font-size: 16px;
  }

</style>
