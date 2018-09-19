<template>
  <div class="normal">
    <h1 class="title">{{msg}}</h1>
    <div class="welcome" ></div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Yay! Welcome to LIVS Console!'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    background: url(../assets/yay.jpg) no-repeat center 0;
    background-size: 388px 328px;
  }

</style>
