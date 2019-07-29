<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      fit
      highlight-current-row>
<!--      <el-table-column-->
<!--        v-loading="loading"-->
<!--        align="center"-->
<!--        label="Device"-->
<!--        width="65"-->
<!--        element-loading-text="Loading...">-->
<!--        <template slot-scope="scope">-->
<!--          <span style="color: #2c3e50">{{ scope.row.datatype }}</span>-->
<!--        </template>-->
<!--      </el-table-column>-->

      <el-table-column
        min-width="100px"
        align="center"
        label="Address">
        <template slot-scope="{row}">
          <!--          <span>{{ row.address0.description }}</span>-->
          <span>{{ row.sourceItemId }}</span>
        </template>
      </el-table-column>

      <el-table-column
        min-width="100px"
        align="center"
        label="Comment">
        <template slot-scope="{row}">
          <span>{{ row.description }}</span>
        </template>
      </el-table-column>

      <el-table-column
        min-width="100px"
        align="center"
        label="Value">
        <template slot-scope="{row}">
          <span>{{ row.value }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getEQMetadataByDSId } from '../../../api/datasource'
export default {
  name: 'IOTable',
  props: {
    datasourceId: {
      type: String,
      default: ''
    },
    devType: {
      type: String,
      default: 'B'
    },
    startAddress: {
      type: String,
      default: ''
    },
    addrLen: {
      type: Number,
      default: 0
    },
    direction: {
      type: Number,
      default: 0
    },
    comment: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      query: {
        page: 1,
        limit: 500,
        type: this.currentDS,
        sort: ''
      },
      // updatingDatasourceId: '',
      // updatingSourceItemId: '',
      // varValue: '',
      loading: false,
      tableData: [],
      devType: this.devType,
      direction: this.direction
    }
  },
  computed: {
    getMetadataBySection() {
      // return this.$store.getters.getMetadataBySection(this.datasourceId, this.direction, this.devType)
      // return this.$store.getters.allMetadatas
      const all = this.$store.getters.allMetadatas
      const curr = []
      for (let i = 0; i < all.length; i += 1) {
        if (all[i].datasourceId === this.datasourceId && all[i].direction === this.direction && all[i].sourceItemId.slice(0, 1) === this.devType) {
          curr.push(all[i])
        }
      }
      return curr
    },
    ...mapState({
      updatingDatasourceId: state => state.ioDevice.updatingDatasourceId,
      updatingSourceItemId: state => state.ioDevice.updatingSourceItemId,
      varValue: state => state.ioDevice.varValue
    })
  },
  watch: {
    varValue(newValue) {
      // a
      // console.log('io-table.....', this.updatingDatasourceId, this.updatingSourceItemId, this.varValue)
      if (this.updatingDatasourceId !== this.datasourceId) {
        return
      }

      // update tableData item value
      // find the item
      // for (let j = 0; j < this.tableData.length; j += 1) {
      //   const tableRow = parseInt(j / 16)
      //   const tableCol = `address${(j % 16).toString(16).toUpperCase()}`
      //   if (parseInt(this.updatingSourceItemId.slice(1), 16) === parseInt(this.tableData[tableRow][tableCol].sourceItem.slice(1), 16)) {
      //     this.tableData[tableRow][tableCol].value = this.varValue
      //     break
      //   }
      // }
      this.tableData.values = this.varValue()
    }
    // devType(newValue) {
    //   this.query.currentDS = this.datasourceId
    //   getEQMetadataByDSId(this.query).then(response => {
    //     const all = response.data
    //     const len = all.length
    //     let i = 0
    //     const selectIOData = []
    //     for (; i < len; i++) {
    //       if (this.newValue === 'B') {
    //         if (this.direction === 0) {
    //           if (all[i].datatype === 'BOOLEAN_TYPE' && all[i].direction === undefined) {
    //             selectIOData.push(all[i])
    //           }
    //         } else if (this.direction === 1) {
    //           if (all[i].datatype === 'BOOLEAN_TYPE' && all[i].direction === 1) {
    //             selectIOData.push(all[i])
    //           }
    //         }
    //       } else if (this.newValue === 'W') {
    //         if (this.direction === 0) {
    //           if (all[i].sourceItemId.includes('W') && all[i].direction === undefined) {
    //             selectIOData.push(all[i])
    //           }
    //         } else if (this.direction === 1) {
    //           if (all[i].sourceItemId.includes('W') && all[i].direction === 1) {
    //             selectIOData.push(all[i])
    //           }
    //         }
    //       }
    //     }
    //     this.tableData = selectIOData
    //     console.log('watch success')
    //   })
    // }
  },
  created() {
    this.generateTemplate()
  },
  methods: {
    generateTemplate() {
      // if (this.addrLen > 0) {
      //   let addrType = ''
      //   if (this.devType.startsWith('B')) {
      //     addrType = 'B'
      //   } else if (this.devType.startsWith('W')) {
      //     addrType = 'W'
      //   } else {
      //     return
      //   }

      // generate table template
      // for (let i = 0; i < this.addrLen; i += 1) {
      //   const obj = {}
      //   const hex = parseInt(this.startAddress, 16)
      //   const intRow = hex + i * 16
      //   obj.startAddr = addrType + (hex + i * 16).toString(16).toUpperCase()
      //   // eslint-disable-next-line no-plusplus
      //   for (let j = 0; j < 16; j++) {
      //     const intCol = intRow + j
      //     // get meta data
      //     const descVal = 'Reserved'
      //     const varVal = '99'
      //     // if (currMetadatas !== undefined) {
      //     //   for (const item of currMetadatas) {
      //     //     if (parseInt(item.sourceItemId.slice(1), 16) === intCol) {
      //     //       descVal = item.description // item.abbrv
      //     //       varVal = item.varValue
      //     //       break
      //     //     }
      //     //   }
      //     // }
      //     obj[`address${j.toString(16).toUpperCase()}`] = { sourceItem: `${addrType + intCol.toString(16).toUpperCase()}`, description: descVal, value: varVal }
      //   }
      //   this.tableData.push(obj)
      // }
      // fill available/used item
      // fill
      this.query.currentDS = this.datasourceId
      getEQMetadataByDSId(this.query).then(response => {
        const all = response.data
        const len = all.length
        let i = 0
        const selectIOData = []
        for (; i < len; i++) {
          if (this.devType === 'B') {
            if (this.direction === 0) {
              if (all[i].datatype === 'BOOLEAN_TYPE' && all[i].direction === undefined) {
                selectIOData.push(all[i])
              }
            } else if (this.direction === 'FROM_CIM') {
              if (all[i].datatype === 'BOOLEAN_TYPE' && all[i].direction === 'FROM_CIM') {
                selectIOData.push(all[i])
              }
            }
          } else if (this.devType === 'W') {
            if (this.direction === 0) {
              if (all[i].sourceItemId.includes('W') && all[i].direction === undefined) {
                selectIOData.push(all[i])
              }
            } else if (this.direction === 'FROM_CIM') {
              if (all[i].sourceItemId.includes('W') && all[i].direction === 'FROM_CIM') {
                selectIOData.push(all[i])
              }
            }
          }
        }
        this.tableData = selectIOData
      })

      // const all = this.$store.getters.allMetadatas
      // this.tableData = all
      // var currMetadatas = []
      // eslint-disable-next-line no-plusplus
      // for (let i = 0; i < all.length; i++) {
      //   if (all[i].datasourceId === this.datasourceId && all[i].direction === this.direction && all[i].sourceItemId.slice(0, 1) === this.devType) {
      //     // currMetadatas.push(all[i])
      //     // find the item
      //     for (let j = 0; j < this.tableData.length; j += 1) {
      //       const tableRow = parseInt(j / 16)
      //       const tableCol = `address${(j % 16).toString(16).toUpperCase()}`
      //       if (parseInt(all[i].sourceItemId.slice(1), 16) === parseInt(this.tableData[tableRow][tableCol].sourceItem.slice(1), 16)) {
      //         this.tableData[tableRow][tableCol].description = all[i].description // item.abbrv
      //         this.tableData[tableRow][tableCol].value = all[i].varValue
      //         break
      //       }
      //     }
      //   }
      // }
    }
  }
}
</script>

<style scoped>

</style>
