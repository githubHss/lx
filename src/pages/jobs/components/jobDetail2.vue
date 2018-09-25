<template>
  <div>
    <a-steps  direction="vertical" :current="current">
      <a-step title="上传压缩文件"/>
       <TUSUpload></TUSUpload>
      <a-step title="解压缩" />
      <a-step title="分析图片+人脸入库" />
      <a-step title="完成"/>
    </a-steps>
  </div>
</template>
<script>
  import TUSUpload from '../../../components/TUSUpload';
  export default {
    components:{
      TUSUpload
    },
    data() {
      return {
        current: 0,
        steps: [{
          title: 'First',
          content: 'First-content',
        }, {
          title: 'Second',
          content: 'Second-content',
        }, {
          title: 'Last',
          content: 'Last-content',
        }],
      }
    },
    methods: {
      next() {
        this.current++
      },
      prev() {
        this.current--
      }
    },
  }
</script>
<style scoped>
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
</style>
