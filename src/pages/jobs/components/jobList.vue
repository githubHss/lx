<template>
  <div>
    <jobModal></jobModal>
    <a-table :columns="columns"
             :rowKey="record => record.login.uuid"
             :dataSource="data"
             :pagination="pagination"
             :loading="loading"
             @change="handleTableChange"
    >
      <span slot="customTitle"><a-icon type="smile-o" /> 名称</span>
      <router-link to="/jobs/id" slot="name" slot-scope="name">
        {{name.first}}:{{name.last}}
      </router-link>
      <template slot="operation" slot-scope="operation">
        <a-dropdown :trigger="['click']">
          <a class="ant-dropdown-link" href="#">
            <i class="anticon anticon-ellipsis"></i>
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <jobModal>编辑</jobModal>
            </a-menu-item>
            <a-menu-item key="1">
              <span>新建</span>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </template>
    </a-table>
  </div>
</template>
<script>
  import axios from 'axios'
  import reqwest from 'reqwest';
  import jobModal from './jobModal';
  const columns = [{
    dataIndex: 'name',
    key:'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  }, {
    title: '类型',
    dataIndex: 'gender',
  }, {
    title: '状态',
    dataIndex: 'email',
  }, {
    title: '',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
  }];

  export default {
    name:'jobList',
    components:{
      jobModal
    },
    mounted() {
      this.fetch();
    },
    data() {
      return {
        data: [],
        pagination: {},
        loading: false,
        columns,
      }
    },
    methods: {
      handleTableChange (pagination, filters, sorter) {
        console.log(pagination);
        const pager = { ...this.pagination };
        pager.current = pagination.current;
        this.pagination = pager;
        this.fetch({
          results: pagination.pageSize,
          page: pagination.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters,
        });
      },
      fetch (params = {}) {
        console.log('params:', params);
        this.loading = true
        axios({
          method:'get',
          url:'http://192.168.8.12:4000/api/v1/jm/jobs',
          data: {
            results: 10,
            ...params,
          },
          headers:{
            // 'Accept':'application/schema+json',
            // 'Content-Type':'application/json;charset=UTF-8'
            'content-type': 'application/x-www-form-urlencoded'
          }
        })
          .then((data) => {
            const pagination = { ...this.pagination };
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 200;
            this.loading = false;
            this.data = data.results;
            this.pagination = pagination;
          });
        // reqwest({
        //   url: 'http://192.168.8.12:4000/api/v1/jm/jobs',
        //   method: 'get',
        //   data: {
        //     ...params,
        //   },
        //   type: 'json',
        // }).then((data) => {
        //   const pagination = { ...this.pagination };
        //   // Read total count from server
        //   // pagination.total = data.totalCount;
        //   pagination.total = 200;
        //   this.loading = false;
        //   this.data = data.results;
        //   this.pagination = pagination;
        // });
      }
    },
  }
</script>
