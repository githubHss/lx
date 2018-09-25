<template>
  <div>
    <a-pagination  :total="2" :showTotal="total => `共计 ${total} 条`" @change="onChange" :current="current"   :pageSize="24" style="margin: auto;width: auto;"/>

    <a-list
      :grid="{  gutter: 5, lg: 6, md: 2, sm: 1, xs: 1 }"
      :dataSource="data"
    >
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-card
          hoverable
        >
          <img style="margin: auto;width: auto; height: 140px"
          alt="example"
            :src="'/api/v1/jm/libraries/'+id+'/images/'+item.id"
            slot="cover"
          />
          <a-card-meta
            title="Europe Street beat">
          </a-card-meta>
        </a-card>
      </a-list-item>
    </a-list>

  </div>
</template>

<script>
  import api from '../../../api/api'
  export default {
    data() {
      return {
        pagination: {},
        loading: false,
        id:{},
        data:[],
        current: 3
      }
    },
    mounted() {
      this.fetch();
    },
    props:['libraryId'],
    methods: {
      onChange(current) {
        this.current = current
      },
    fetch () {
      let picId=this.$router.query.id;
      this.data.id=picId;
      this.loading = true;
      let page =1;
    api.libraryListItems(picId,{ page: page - 1 }).then((data) => {
      const pagination = { ...this.pagination };
      // pagination.total = PAGE_SIZE;
      this.loading = false;
      this.data.data=data
      // this.$store.commit('setList',data.data);
      this.pagination = pagination;
    });
  }
    },
  }
</script>

<style scoped>

</style>
