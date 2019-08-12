<template>
  <div class="app-container">
    <el-tabs :tab-position="tabPosition" style="">
      <el-tab-pane v-for="item in sections" :key="item.id" :label="item.label">
<!--        <split-pane split="vertical" @resize="resize">-->
<!--          <template slot="paneL">-->
<!--            <div class="left-container">-->
          <div class="table-container">
        <el-row :gutter="20">
          <el-col :span="6" :offset="4"><span>Receive Data (PLC >> CIM)</span></el-col>
          <el-col :span="6" :offset="6"><span>Send Data (PLC << CIM)</span></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
              <i-o-table
                      :datasource-id="item.datasourceId"
                      :dev-type="item.devType"
                      :start-address="item.startPoint"
                      :direction="plcDir"
                      :addr-len="item.length"
                      :comment="item.comment" />
          </el-col>
<!--            </div>-->
<!--          </template>-->
<!--          <template slot="paneR">-->
<!--            <div class="right-container">-->
          <el-col :span="12">
              <i-o-table
                      :datasource-id="item.datasourceId"
                      :dev-type="item.devType"
                      :start-address="item.startPoint"
                      :direction="dir"
                      :addr-len="item.length"
                      :comment="item.comment" />
          </el-col>
        </el-row>
          </div>
          <!--            </div>-->
<!--          </template>-->
<!--        </split-pane>-->
<!--    <el-carousel-->
<!--      direction="vertical"-->
<!--      :autoplay="false">-->
<!--      <el-carousel-item-->
<!--        v-for="item in sections"-->
<!--        :key="item.id">-->
<!--              <h3 class="medium">{{ item }}</h3>-->

      </el-tab-pane>
    </el-tabs>
<!--      </el-carousel-item>-->
<!--    </el-carousel>-->
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
      },
      plcDir: '0',
      dir: 'FROM_CIM',
      tabPosition: 'top'
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
          const items = response.configs
          const len = items.length

          if (len > 1) {
            // items[0]['label'] = 'Bit'
            // items[1]['label'] = 'Word'
            let i
            for (i = 0; i < len; i++) {
              if (items[i].devType === 'B') {
                items[i]['label'] = 'Bit'
              } else if (items[i].devType === 'W') {
                items[i]['label'] = 'Word'
              }
            }

            this.sections.push(items[0])
            this.sections.push(items[1])
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

</style>
