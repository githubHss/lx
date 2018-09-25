<template>
  <div>
    <div data-vjs-player>
      <video :ref="node => this.videoNode = node" class="video-js" style="width: 100%; min-height: 360px"></video>
    </div>
  </div>
</template>

<script>
  import videojs from 'video.js'
  import 'video.js/dist/video-js.css';
  import 'videojs-flash';
  import 'videojs-contrib-hls';
  export default {
    mounted(){

    },
    computed:{
      componentDidMount() {
        // instantiate Video.js
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
          console.log('onPlayerReady', this)
        });
      },
      componentWillUnmount()   {
        if (this.player) {
          this.player.dispose()
        }
      }
    },

  }
</script>

<style scoped>

</style>
