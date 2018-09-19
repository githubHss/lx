<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item><router-link  to="/">Home</router-link></a-breadcrumb-item>
      <a-breadcrumb-item><router-link  to="/jobs/list">Jobs</router-link></a-breadcrumb-item>
      <a-breadcrumb-item>Detail</a-breadcrumb-item>
    </a-breadcrumb>
    <jobDetail></jobDetail>
  </div>
</template>

<script>
  import  jobDetail from './components/jobDetail';
  export default {
    components:{jobDetail},
  }
</script>

