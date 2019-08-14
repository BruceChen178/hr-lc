<template>
  <div class="tab-container">
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
      type="border-card"
      style="margin-top:15px;"
      >
      <el-tab-pane
        v-for="item in tabMapOptions"
        :key="item.key"
        :label="item.label"
        :name="item.key"
        style="">
          <i-o-section v-if="item.active" :datasource-id="item.key" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getDatasources } from '@/api/datasource'
import IOSection from './components/io-section'
export default {
  name: 'Tab',
  components: { IOSection },
  data() {
    return {
      query: {
        page: 1,
        limit: 50,
        sort: '',
        currentDS: ''
      },
      tabMapOptions: [],
      activeName: ''
    }
  },
  created() {
    this.fillOptions()
  },
  methods: {
    handleClick(tab) {
      let i = 0
      const len = this.tabMapOptions.length
      for (;i < len; i++) {
        if (this.tabMapOptions[i].label === tab.label) {
          this.tabMapOptions[i].active = true
        } else {
          this.tabMapOptions[i].active = false
        }
      }
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
              this.tabMapOptions.push({ label: data.name, key: data.id, active: true })
            } else {
              this.tabMapOptions.push({ label: data.name, key: data.id, active: false })
            }
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
