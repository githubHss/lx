<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item><router-link  to="/">Home</router-link></a-breadcrumb-item>
      <a-breadcrumb-item><router-link  to="/libraries/list">Libraries</router-link></a-breadcrumb-item>
      <a-breadcrumb-item>Detail</a-breadcrumb-item>
    </a-breadcrumb>
    <libraryDetail></libraryDetail>
  </div>
</template>

<script>
  import  libraryDetail from './components/libraryDetail';
  export default {
    components:{libraryDetail},
  }
</script>
