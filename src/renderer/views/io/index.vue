<template>
  <div class="tab-container">
<!--    <el-tag>mounted times ：{{ createdTimes }}</el-tag>-->
<!--    <el-alert-->
<!--      :closable="false"-->
<!--      style="width:200px;display:inline-block;vertical-align: middle;margin-left:30px;"-->
<!--      title="Tab with keep-alive"-->
<!--      type="success" />-->
    <el-tabs
      v-model="activeName"
      type="border-card"
      style="margin-top:15px;"
      >
      <el-tab-pane
        v-for="item in tabMapOptions"
        :key="item.key"
        :label="item.label"
        :name="item.key"
        style="">
        <keep-alive>
          <!--          <tab-pane v-if="activeName==item.key" :type="item.key" @create="showCreatedTimes" />-->
          <i-o-section :datasource-id="item.key" />
          <h3>fjsofdsfsdpfdios</h3>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import tabPane from './components/TabPane'
import { getDatasources } from '@/api/datasource'
import IOSection from './components/io-section'
export default {
  name: 'Tab',
  components: { IOSection },
  data() {
    return {
      query: {
        page: 1,
        limit: 20,
        sort: '',
        currentDS: ''
      },
      tabMapOptions: [],
      activeName: '',
      createdTimes: 0
    }
  },
  created() {
    this.fillOptions()
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    },
    fillOptions() {
      getDatasources(this.query)
        .then(response => {
          let data
          let i = 0
          const { length } = response.sources
          this.tabMapOptions = []
          for (; i < length; i += 1) {
            data = response.sources[i]
            if (i === 0) {
              this.activeName = data.id
            }
            this.tabMapOptions.push({ label: data.name, key: data.id })
          }
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
  .tab-container {
    margin: 30px;
  }
</style>
