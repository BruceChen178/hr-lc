<template>
  <div class="app-container">
    <el-carousel
      direction="vertical"
      :autoplay="false">
      <el-carousel-item
        v-for="item in sections"
        :key="item.id">
        <!--      <h3 class="medium">{{ item }}</h3>-->
        <i-o-table
          :datasource-id="item.datasourceId"
          :dev-type="item.devType"
          :start-address="item.startPoint"
          :direction="item.direction ===undefined? 0: item.direction"
          :addr-len="item.length"
          :comment="item.comment" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import IOTable from './io-table'
import { getMitPLCConfigs } from '@/api/datasource'

export default {
  name: 'IOSection',
  components: { IOTable },
  props: {
    datasourceId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      sourceId: this.datasourceId,
      sections: [],
      query: {
        page: 1,
        limit: 50,
        sort: '',
        currentDS: ''
      }
    }
  },
  created() {
    this.getSectionConfigs()
  },
  methods: {
    getSectionConfigs() {
      this.query.currentDS = this.sourceId
      getMitPLCConfigs(this.query)
        .then(response => {
          this.sections = response.configs
        })
        // eslint-disable-next-line func-names
        .catch(function(error) {
          console.log(error)
        })
    }
  }

}
</script>

<style scoped>
  .el-carousel__item i-o-table {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 600px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
