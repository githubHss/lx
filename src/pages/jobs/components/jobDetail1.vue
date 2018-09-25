<template>
  <div>
    <br />
    <a-row>
      <a-col span="16">
      <VideoPlayer  autoplay="true"  controls="true"  :poster="loadingImg" src='http://www.html5videoplayer.net/videos/toystory.mp4' type='video/mp4'>
      <br />
      <a-table :columns="columns" :dataSource="matches" pagination="false" scroll=" y: 240" size="small" />
      </a-col>
      <a-col span="8">
      <div style="overflow-y: auto; max-height: 100vh;padding: 0 25px">
      <a-list
        rowKey="id"
        itemLayout="horizontal"
        :dataSource="faces"
       />
  </div>
  </a-col>
  </a-row>
  </div>
</template>
<script>
  import VideoPlayer from '../../../components/VideoPlayer';
  import loadingImg from '../../../assets/loading.gif';
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    poster: loadingImg,
    sources: [{
      //src: 'http://www.html5videoplayer.net/videos/toystory.mp4', type: 'video/mp4'
      //src: 'rtmp://120.26.6.217/live/livestream', type: 'rtmp/flv'
      src: `rtmp://${host}:1935/live/job-` + job.id, type: 'rtmp/flv'
    }]
  }
  export default {
    name: 'jobDetail1',
    components:{VideoPlayer},
    data(){
      return {
        columns:[
          {
            title: 'ID',
            dataIndex: 'id',
            width: 100,
          }, {
            title: '名字',
            dataIndex: 'name',
            width: 250,
          }, {
            title: '分数',
            dataIndex: 'score',
            width: 80,
          }, {
            title: '抓拍图像',
            align: 'center',
            dataIndex: 'face',
            width: 80,
            // render: text => <img alt="" style={{ width: 'auto', height: '40px' }}src={text}/>,
          },
          {
        title: '库图像',
          align: 'center',
          dataIndex: 'image',
          width: 80,
          // render: (text, record) => <img alt="" style={{ width: 'auto', height: '40px' }}src={`/api/v1/jm/libraries/${job.payload.library}/images/` + record.id}/>,
      }],
      }
    }
  }
</script>
