<template>
  <div>
    <jobModal>
      <a-button slot="click" type="primary">新建任务</a-button>
    </jobModal>
    <a-table :columns="columns"
             :rowKey="record => record.id"
             :dataSource="listData"
             :pagination="pagination"
             :loading="loading"
             @change="handleTableChange"
    >
      <router-link  :to="'/jobs/'+record.id" slot="name" slot-scope="name,record" @click.native="setJobRecord(record)">{{name}}</router-link>
      <template   slot="type" slot-scope="type"><a-icon :type="JobTypes[type].icon" style=" margin-right: 5px "/>{{JobTypes[type].title}}</template>
      <a-badge :status="JobStatus[status].status" :text="JobStatus[status].title" slot="status"  slot-scope="status"/>
      <template slot="operation" slot-scope="operation,record">
        <a-dropdown :trigger="['click']">
          <a class="ant-dropdown-link" href="#">
            <i class="anticon anticon-ellipsis"></i>
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <jobModal :id="record.id"><a href="#" slot="click">编辑</a></jobModal>
            </a-menu-item>
            <a-menu-item key="1">
              <a-popconfirm title="Are you sure delete this task?" @confirm="confirm(record.id)" okText="Yes" cancelText="No">
                <a href="#">删除</a>
              </a-popconfirm>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </template>
    </a-table>
  </div>
</template>
<script>
  import api from '../../../api/api'
  // import store from '../../../store/store'
  import {mapGetters} from "vuex";
  import Vue from "vue"
  import jobModal from './jobModal';
  import { PAGE_SIZE, JobTypes, JobStatus } from "../../../constants"

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
        pagination: {},
        loading: false,
        JobStatus : JobStatus,
        JobTypes:JobTypes,
        columns:[{
          dataIndex: 'name',
          key:'name',
          title:'名称',
          scopedSlots: { customRender: 'name' },
        }, {
          key:'type',
          title: '类型',
          dataIndex: 'type',
          scopedSlots:{customRender:'type'}
        }, {
          title: '状态',
          dataIndex: 'status',
          scopedSlots:{customRender:'status'}
        }, {
          title: '',
          dataIndex: 'operation',
          scopedSlots: { customRender: 'operation' },
        }],
      }
    },
    computed: {
      ...mapGetters(['listData'])
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
      setJobRecord(record){
        this.$store.commit('setJobRecord',record);
      },
      confirm(id){
        api.remove("jobs",id).then(()=>{Vue.set(state,'jobs.list',this.jobs)})
    },

      fetch (params = {}) {
        console.log('params:', params);
        this.loading = true;
        api.getJobList({...params,results:10}).then((data) => {
          const pagination = { ...this.pagination };
          // Read total count from server
          // pagination.total = data.totalCount;
          pagination.total = PAGE_SIZE;
          this.loading = false;
          this.$store.commit('setList',data.data);
          this.pagination = pagination;
        });
      }
    },
  }
</script>



