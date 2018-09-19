<template>
  <div>
    <a-pagination  :showTotal="total => `共计 ${total} 条`" @change="onChange" :current="current"   pageSize="24" total="total" style="margin: auto;width: auto;"/>
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
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            slot="cover"
          />
          <a-card-meta
            title="Europe Street beat">
            <!--<template slot="description">www.instagram.com</template>-->
          </a-card-meta>
        </a-card>
      </a-list-item>
    </a-list>

  </div>
</template>

<script>
  const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
    {
      title: 'Title 5',
    },
    {
      title: 'Title 6',
    },
  ]
  export default {
    data() {
      return {
        data,
        current: 3
      }
    },
    methods: {
      onChange(current) {
        this.current = current
      }
    },
  }
</script>

<style scoped>

</style>
