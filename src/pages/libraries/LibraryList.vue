<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item><router-link  to="/">Home</router-link></a-breadcrumb-item>
      <a-breadcrumb-item>Libraries</a-breadcrumb-item>
    </a-breadcrumb>
    <libraryList></libraryList>
  </div>
</template>

<script>
  import libraryList from './components/libraryList';
  export default {
    components:{
      libraryList
    }
  }
</script>

<style scoped>

</style>
