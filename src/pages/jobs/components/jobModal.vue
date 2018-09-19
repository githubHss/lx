<template>
  <div>
    <a-button type="primary" v-on:click="showModal">{{}}</a-button>
    <a-modal
      width="640px"
      title="Title"
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
          <a-input />
        </a-form-item>
        <a-form-item
          label='任务类型'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 14 }"
          fieldDecoratorId="gender"
          :fieldDecoratorOptions="{rules: [{ required: true, message: '请选择任务类型' }]}"
        >
          <a-select
            placeholder='Select a option and change input text above'
            @change="this.handleSelectChange"
          >
            <a-select-option value='male'>图片入库</a-select-option>
            <a-select-option value='female'>视频流实时分析</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label='人像库'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 14 }"
          fieldDecoratorId="gender"
          :fieldDecoratorOptions="{rules: [{ required: true, message: '请选择任务类型' }]}"
        >
          <a-select
            placeholder='Select a option and change input text above'
            @change="this.handleSelectChange"
          >
            <a-select-option value='male'>图片入库</a-select-option>
            <a-select-option value='female'>视频流实时分析</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label='调度方式'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 14 }"
        >
          <a-radio-group defaultValue='horizontal'>
            <a-radio-button value='horizontal'>一次执行</a-radio-button>
            <a-radio-button value='vertical'>一直运行</a-radio-button>
            <a-radio-button value='inline'>指定时间段</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item
          label='开始时间'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 14 }"
        >
          <a-date-picker
            class="dataWidth"
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            placeholder="Select Time"
            @change="onChange"
            @ok="onOk"
          />
        </a-form-item>
        <a-form-item
        label='结束时间'
        :labelCol="{ span: 6 }"
        :wrapperCol="{ span: 14 }"
      >
        <a-date-picker
          class="dataWidth"
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          placeholder="Select Time"
          @change="onChange"
          @ok="onOk"
        />
      </a-form-item>

      </a-form>
    </a-modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
        formLayout: 'horizontal',
      }
    },
    methods: {
      showModal() {
        this.visible = true
      },
      handleOk(e) {
        this.ModalText = 'The modal will be closed after two seconds';
        this.confirmLoading = true;
        setTimeout(() => {
          this.visible = false;
          this.confirmLoading = false;
        }, 2000);
      },
      handleCancel(e) {
        console.log('Clicked cancel button');
        this.visible = false
      },
      handleSubmit (e) {
        e.preventDefault()
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values)
          }
        })
      },
      handleSelectChange (value) {
        console.log(value)
        this.form.setFieldsValue({
          note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        })
      },
      onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      },
      onOk(value) {
        console.log('onOk: ', value);
      }
    },
  }
</script>
<style scoped>
.dataWidth {
  width: 100%;
}
</style>
