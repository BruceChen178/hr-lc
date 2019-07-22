<template>
  <div>
    <el-row>
      <el-select
        v-model="query.position"
        placeholder="Select Data Source"
        style="width: 200px"
        @change="onChanged">
        <el-option
          v-for="item in dsOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          style="width: auto" />
      </el-select>
      <el-button
        icon="el-icon-search"
        circle />
    </el-row>

    <el-table
      ref="metaTable"
      v-loading="loading"
      element-loading-text="Loading..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      highlight-current-row
      :data="tbMetadata"
      stripe
      fit
      border>
      <el-table-column type="index" />
      <el-table-column
        align="center"
        label="UID"
        prop="uid" />
      <el-table-column
        align="center"
        label="ID"
        prop="id" />
      <el-table-column
        align="center"
        label="Name"
        prop="name" />
      <el-table-column
        align="center"
        label="Description"
        prop="description" />
      <el-table-column
        align="center"
        label="Belong"
        prop="belong" />
      <el-table-column
        align="center"
        label="Machine Name"
        prop="machineName" />
      <el-table-column
        align="center"
        label="Unit Name"
        prop="unitName" />
      <el-table-column
        align="center"
        label="Classification"
        prop="classification" />
      <el-table-column
        align="center"
        label="Data Type"
        prop="datatype" />
      <el-table-column
        align="center"
        label="Abbrv"
        prop="abbrv" />
      <el-table-column
        align="center"
        label="Data Source ID"
        prop="datasourceId" />
      <el-table-column
        align="center"
        label="Source Item ID"
        prop="sourceItemId" />
      <el-table-column
        align="center"
        label="Direction"
        prop="direction" />
      <el-table-column
        align="center"
        label="Value"
        prop="varValue" />
    </el-table>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="query.page"
      :limit.sync="query.limit"
      @pagination="getList" />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { getEQMetadata, getEQMetadataByDSId, getDatasources } from '@/api/datasource'

export default {
  name: 'Metadata',
  components: {
    Pagination
  },
  // data
  data() {
    return {
      // pallet position options
      dsOptions: [],
      // pallet
      tbMetadata: [],

      total: 0,
      loading: false,
      query: {
        page: 1,
        limit: 20,
        sort: '',
        currentDS: ''
      },
      dsQuery: {
        page: 1,
        limit: 50,
        sort: '',
        currentDS: ''
      }
    }
  },
  // created
  created() {
    this.getList()
    this.fillOptions()
  },
  // methods
  methods: {
    getList() {
      this.loading = true
      if (this.query.currentDS === '') {
        getEQMetadata(this.query)
          .then(response => {
            this.total = response.paging.totalCount
            this.tbMetadata = response.data
            if (this.tbMetadata.length > 0) {
              this.$refs.metaTable.setCurrentRow(this.tbMetadata[0])
            }
          })
          // eslint-disable-next-line func-names
          .catch(function(error) {
            console.log(error)
          })
      } else {
        getEQMetadataByDSId(this.query)
          .then(response => {
            this.total = response.paging.totalCount
            this.tbMetadata = response.data
          })
          // eslint-disable-next-line func-names
          .catch(function(error) {
            console.log(error)
          })
      }
      this.loading = false
    },
    fillOptions() {
      getDatasources(this.dsQuery)
        .then(response => {
          let data
          let i = 0
          const { length } = response.sources
          // eslint-disable-next-line no-plusplus
          for (; i < length; i++) {
            data = response.sources[i]
            this.dsOptions.push({ label: data.name, value: data.id })
          }
          // this.tbSourceData = response.sources
        })
        // eslint-disable-next-line func-names
        .catch(function(error) {
          console.log(error)
        })
    },
    onChanged(value) {
      this.query.currentDS = value
      this.getList()
    }
  }
}
</script>

<style scoped>

</style>
