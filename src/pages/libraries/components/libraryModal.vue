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
          fieldDecoratorId="name"
          :fieldDecoratorOptions="{rules: [{  message: '请输入任务名称' }]}"
        >
          <a-input />
        </a-form-item>
        <a-form-item
          label='类型'
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 14 }"
          fieldDecoratorId="type"
          :fieldDecoratorOptions="{rules: [{ message: '请选择任务类型' }]}"
        >
          <a-select
            placeholder=''
            @change="this.handleSelectChange"
          >
            <a-select-option value='在逃人员库'>在逃人员库</a-select-option>
            <a-select-option value='失信人员库'>失信人员库</a-select-option>
          </a-select>
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
    props:['id', 'name', 'type', 'scheduleType', 'startTime', 'endTime', 'payload'],
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
          // note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
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

