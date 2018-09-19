<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item><router-link  to="/">Home</router-link></a-breadcrumb-item>
      <a-breadcrumb-item>Jobs</a-breadcrumb-item>
    </a-breadcrumb>
    <jobList></jobList>
  </div>
</template>

<script>
  import jobList from './components/jobList';
  export default {
    name: 'JobList',
    components:{
      jobList
    }
  }
</script>

<style scoped>

</style>
