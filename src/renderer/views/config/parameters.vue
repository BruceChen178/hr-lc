<template>
    <div class="components-container">
        <split-pane
                split="vertical"
                @resize="resize">
            <template slot="paneL">
                <div class="left-container">
                    <el-table
                            :data="tbParameters"
                            stripe
                            fit
                            border
                            @row-click="handleCurrentChange">
                        <el-table-column type="index" />
                        <el-table-column
                                align="center"
                                label="Name"
                                prop="name" />
                        <el-table-column
                                align="center"
                                label="Type"
                                prop="type" />
                        <el-table-column
                                align="center"
                                label="Description"
                                prop="description" />
                        <el-table-column
                                align="center"
                                label="Transient"
                                prop="transient" />
                        <el-table-column
                                align="center"
                                label="Classification"
                                prop="property" />
                        <el-table-column
                                align="center"
                                label="Source ID"
                                prop="parentId" />
                        <el-table-column
                                align="center"
                                label="Value"
                                prop="value" />
                        <el-table-column
                                align="center"
                                label="Machine Name"
                                prop="machineName" />
                        <el-table-column
                                align="center"
                                label="Unit Name"
                                prop="unitName" />
                    </el-table>
                </div>
            </template>
            <template slot="paneR">
                <p style="text-align: center; margin: 0 0 20px">
                    Customize data items using render-content
                </p>
                <div style="text-align: center">
                    <el-transfer
                            v-model="metadataKeyValue"
                            style="text-align: left; display: inline-block"
                            filterable
                            :render-content="renderFunc"
                            :titles="['Parameter\'s Metadata', 'Avaliable Metadata']"
                            :button-texts="['To left', 'To right']"
                            :format="{
              noChecked: '${total}',
              hasChecked: '${checked}/${total}'
            }"
                            :data="paraMetas"
                            @change="handleChange">
                        <el-button
                                slot="left-footer"
                                class="transfer-footer"
                                size="small">
                            Operation
                        </el-button>
                        <el-button
                                slot="right-footer"
                                class="transfer-footer"
                                size="small">
                            Operation
                        </el-button>
                    </el-transfer>
                </div>
            </template>
        </split-pane>
    </div>
</template>

<script>
  import splitPane from 'vue-splitpane'
  import { getEQMetadata, getEQMetadataByDSId } from '@/api/datasource'
  import { getParameters, getParameterVariables } from '@/api/equipment'

  export default {
    name: 'Parameter',
    components: {
      splitPane
    },
    data() {
      return {
        tbParameters: [],
        metadataKeyValue: [],
        paraMetas: [],
        tbMetadata: [],
        variables: [],
        loading: false,
        query: {
          page: 1,
          limit: 50,
          sort: '',
          currentDS: '',
          parameterName: ''
        },
        renderFunc(h, option) {
          // return <span>{ option.key } - { option.label }</span>
        }
      }
    },
    created() {
      this.getParameterList()
      this.getMetadata()
    },
    methods: {
      getParameterList() {
        getParameters(this.query)
          .then(response => {
            this.tbParameters = response.parameters
          })
          // eslint-disable-next-line func-names
          .catch(function(error) {
            console.log(error)
          })
      },
      getMetadata() {
        this.loading = true
        if (this.query.currentDS === '') {
          getEQMetadata(this.query)
            .then(response => {
              this.total = response.paging.totalCount
              this.tbMetadata = response.data
            })
            // eslint-disable-next-line func-names
            .catch(function(error) {
              console.log(error)
            })
        } else {
          getEQMetadataByDSId(this.query)
            .then(response => {
              // this.total = response.paging.totalCount
              this.tbMetadata = response.data
            })
            // eslint-disable-next-line func-names
            .catch(function(error) {
              console.log(error)
            })
        }
        this.loading = false
      },
      handleCurrentChange(row, column, event) {
        // this.tbParameterVariables = []
        if (row.name.length > 0) {
          this.query.parameterName = row.name
          this.query.currentDS = row.parentId

          getParameterVariables(this.query)
            .then(response => {
              this.variables = response.variables
            })
            // eslint-disable-next-line func-names
            .catch(function(error) {
              console.log(error)
            })
          if (this.variables === undefined) {
            return
          }
          getEQMetadataByDSId(this.query)
            .then(response => {
              // this.total = response.paging.totalCount
              this.metadatas = response.data
            })
            // eslint-disable-next-line func-names
            .catch(function(error) {
              console.log(error)
            })
          if (this.metadatas === undefined) {
            return
          }
          // filling
          this.paraMetas = []
          this.metadataKeyValue = []
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < this.variables.length; i++) {
            const { variableId } = this.variables[i]
            // eslint-disable-next-line no-plusplus
            for (let j = 0; j < this.metadatas.length; j++) {
              const variableId2 = this.metadatas[j].id
              const variableName = this.metadatas[j].name
              this.paraMetas.push({ key: variableId2, label: variableName })
              if (variableId !== variableId2) {
                this.metadataKeyValue.push(variableId2)
              }
            }
          }
        }
      },
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys)
      },
      resize() {
        console.log('resize')
      }
    }
  }
</script>

<style scoped>
    .components-container {
        position: relative;
        height: 100vh;
    }

    .left-container {
        /*background-color: #F38181;*/
        height: 100%;
    }

    .right-container {
        /*background-color: #FCE38A;*/
        height: 200px;
    }

    .top-container {
        /*background-color: #FCE38A;*/
        width: 100%;
        height: 100%;
    }

    .bottom-container {
        width: 100%;
        /*background-color: #95E1D3;*/
        height: 100%;
    }
</style>

