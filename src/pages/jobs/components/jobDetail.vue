<template>
  <div>
    <jobDetail1 v-if="record.type ==='detect_faces_in_stream'"></jobDetail1>
    <jobDetail2 v-else></jobDetail2>
  </div>
</template>

<script>
  import jobDetail1 from './jobDetail1';
  import jobDetail2 from './jobDetail2';
  export  default {
    components:{
      jobDetail1,jobDetail2
    },
    data(){
      return {
        videoType:''
      }
    },
    computed: {
      record:function(){
        return this.$store.getters.jobRecord;
      }
    },
    method:{

    }
  }
</script>

