<template>
  <div>
    <libraryModal>
      <a-button slot="click" type="primary">新建任务</a-button>
    </libraryModal>
    <a-table :columns="columns"
             :rowKey="record => record.id"
             :dataSource="listData"
             :pagination="pagination"
             :loading="loading"
             @change="handleTableChange"
    >
      <router-link  :to="'/libraries/'+record.id" :libraryId="record.id"  slot="name" slot-scope="name,record">{{name}}</router-link>
      <template slot="operation" slot-scope="operation,record">
        <a-dropdown :trigger="['click']">
          <a class="ant-dropdown-link" href="#">
            <i class="anticon anticon-ellipsis"></i>
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <libraryModal  :id="record.id" :props="record.name"><a href="#" slot="click">编辑</a></libraryModal>
            </a-menu-item>
            <a-menu-item key="1">
              <a-popconfirm  title="Confirm to delete?"  okText="Yes" cancelText="No">
                <span>删除</span>
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
  import {mapGetters} from "vuex";
  import libraryModal from './libraryModal';
  import { PAGE_SIZE} from "../../../constants"

  export default {
    name:'libraryList',
    components:{
      libraryModal
    },
    mounted() {
      this.fetch();
    },
    data() {
      return {
        pagination: {},
        loading: false,
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
      ok(e) {
        console.log(e)
      },
      // deleteHandler:{
      //
      // },
      fetch (params = {}) {
        console.log('params:', params);
        this.loading = true;
        api.getLibraryList({...params,results:10}).then((data) => {
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
