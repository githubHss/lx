<template>
  <div>
    <span  @click="showModal"><slot name="click"> </slot></span>
    <a-modal
      width="640px"
      :title="id?'编辑任务':'新建任务'"
      :visible="visible"
      v-on:cancel="handleCancel"
      v-on:ok="handleOk"
      :confirmLoading="confirmLoading"
    >
      <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
        <a-form-item
          label='名称'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 14 }"
          fieldDecoratorId="note"
          :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入任务名称' }]}"
        >
          <a-input v-model.trim="jobs.name"/>
        </a-form-item>
        <a-form-item
          label='任务类型'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 14 }"
          fieldDecoratorId="type"
          :fieldDecoratorOptions="{rules: [{ required: true, message: '请选择任务类型' }]}"
        >
          <a-select
            defaultValue='enroll_faces'
            @change="this.handleSelectChange"
          >
            <a-select-option value='enroll_faces'>图片入库</a-select-option>
            <a-select-option value='detect_faces_in_stream'>视频流实时分析</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label='人像库'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 14 }"
          fieldDecoratorId="library"
          :fieldDecoratorOptions="{rules: [{ required: true, message: '请选择人像库' }]}"
        >
          <a-select>
            <a-select-option value='library'>lynxi</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          v-show="videoStream"
          label='视屏流路径'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 14 }"
          fieldDecoratorId="source"
          :fieldDecoratorOptions="{rules: [{ message: '请输入任务名称' }]}"
        >
          <a-input v-model="jobs.payload.source"/>
        </a-form-item>
        <a-form-item
          label='调度方式'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 14 }"
        >
          <a-radio-group defaultValue='oneshot' v-model="jobs.scheduleType">
            <a-radio-button value='oneshot'>一次执行</a-radio-button>
            <a-radio-button value='forever'>一直运行</a-radio-button>
            <a-radio-button value='duration'>指定时间段</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item
          label='开始时间'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 14 }"
        >
          <a-date-picker
            class="dataWidth"
            :showTime="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
            :disabledDate="disabledStartDate"
            format="YYYY-MM-DD HH:mm:ss"
            placeholder="Select Time"
            v-model="jobs.startTime"
            @openChange="handleStartOpenChange"
          />
        </a-form-item>
        <a-form-item
          label='结束时间'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 14 }"
        >
          <a-date-picker
            class="dataWidth"
            :disabledDate="disabledEndDate"
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            placeholder="Select Time"
            v-model="jobs.endTime"
            :open="endOpen"
            @openChange="handleEndOpenChange"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
  import api from "../../../api/api"
  import Vue from "vue"
  import moment from 'moment'
  export default {
    data() {
      return {
        visible:false,
        videoStream:false,
        confirmLoading:false,
        jobs:{
          name:"",
          type:"",
          scheduleType:"",
          startTime:null,
          endTime:null,
          payload:{
            source:"",
            library:""
          },
        },
        endOpen: false,
      }
    },
    props:['id', 'name', 'type', 'scheduleType', 'startTime', 'endTime', 'payload','props'],
    methods: {
      moment,
      showModal() {
        this.visible=true;
        if(this.id){
          let jobId = this.id;
          api.getDetail('jobs',jobId).then((res)=>{
            this.jobs=res.data;
            console.log(this.jobs)
          })
        }
      },

      // ***Handel button click function****
      handleOk(e) {
        api.create("jobs",this.jobs).then(()=>{
          Vue.set(state,'jobs.list',this.jobs)
        })
        // this.props.form.validateFields((err, values) => {
        //   if (!err) {
        //     console.log('onOk: ', value);;
        //     this.handleCancel();
        //   }
        // });
      },
      handleCancel(e) {
        this.visible = false
      },

      handleSelectChange (value) {
        console.log(value)
        this.jobs.type=value
        if(value === 'detect_faces_in_stream'){
          this.videoStream=true
        }else{ this.videoStream=false}
      },

      handleSubmit (e) {
        e.preventDefault()
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values)
          }
        })
      },

      // ****Handel datePicker function****
      disabledStartDate (startValue) {
        const endValue = this.jobs.endTime;
        if (!startValue|| !endValue) {
          return startValue < moment().endOf('day') && startValue;
        }
        return startValue.valueOf() > endValue.valueOf() || startValue < moment().endOf('day') && startValue ;
      },
      disabledEndDate (endValue) {
        const startValue = this.jobs.startTime;
        if (!endValue || !startValue) {
          return false;
        }
        return startValue.valueOf() >= endValue.valueOf();
      },
      handleStartOpenChange (open) {
        if (!open) {
          this.endOpen = true;
        }
      },
      handleEndOpenChange (open) {
        this.endOpen = open;
      },
    },
  }
</script>
<style scoped>
  .dataWidth {
    width: 100%;
  }
</style>
