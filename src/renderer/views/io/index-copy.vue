<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="LC->PLC">
        <div class="components-container">
          <split-pane
            :default-percent="130"
            :min-percent="10"
            split="horizontal"
            @resize="resize">
            <template slot="paneL">
              <split-pane
                :default-percent="70"
                :min-percent="0"
                split="horizontal">
                <template slot="paneL">
                  <div class="top-container">
                    <div class="overf">
                      <div class="example-container">
                        <hot-table
                          class="example"
                          :settings="hotSettings" />
                      </div>
                    </div>
                  </div>
                </template>
                <template slot="paneR">
                  <div class="bottom-container">
                    <div class="overf">
                      <div class="example-container">
                        <hot-table
                          class="example"
                          :settings="hotSettings1" />
                      </div>
                    </div>
                  </div>
                </template>
              </split-pane>
            </template>
          </split-pane>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Assy PLC">
        <div class="components-container">
          <split-pane
            :default-percent="130"
            :min-percent="10"
            split="horizontal"
            @resize="resize">
            <template slot="paneL">
              <split-pane
                :default-percent="70"
                :min-percent="0"
                split="horizontal">
                <template slot="paneL">
                  <div class="top-container">
                    <div class="overf">
                      <div class="example-container">
                        <hot-table
                          class="example"
                          :settings="assySettings" />
                      </div>
                    </div>
                  </div>
                </template>
                <template slot="paneR">
                  <div class="bottom-container">
                    <div class="overf">
                      <div class="example-container">
                        <hot-table
                          class="example"
                          :settings="assySettings1" />
                      </div>
                    </div>
                  </div>
                </template>
              </split-pane>
            </template>
          </split-pane>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Assy Test PLC">
        <div class="components-container">
          <split-pane
            :default-percent="130"
            :min-percent="10"
            split="horizontal"
            @resize="resize">
            <template slot="paneL">
              <split-pane
                :default-percent="70"
                :min-percent="0"
                split="horizontal">
                <template slot="paneL">
                  <div class="top-container">
                    <div class="overf">
                      <div class="example-container">
                        <hot-table
                          class="example"
                          :settings="assyTestSettings" />
                      </div>
                    </div>
                  </div>
                </template>
                <template slot="paneR">
                  <div class="bottom-container">
                    <div class="overf">
                      <div class="example-container">
                        <hot-table
                          class="example"
                          :settings="assyTestSettings1" />
                      </div>
                    </div>
                  </div>
                </template>
              </split-pane>
            </template>
          </split-pane>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Aging PLC">
        <div class="components-container">
          <split-pane
            :default-percent="130"
            :min-percent="10"
            split="horizontal"
            @resize="resize">
            <template slot="paneL">
              <split-pane
                :default-percent="70"
                :min-percent="0"
                split="horizontal">
                <template slot="paneL">
                  <div class="top-container">
                    <div class="overf">
                      <div class="example-container">
                        <hot-table
                          class="example"
                          :settings="agingSettings" />
                      </div>
                    </div>
                  </div>
                </template>
                <template slot="paneR">
                  <div class="bottom-container">
                    <div class="overf">
                      <div class="example-container">
                        <hot-table
                          class="example"
                          :settings="agingSettings1" />
                      </div>
                    </div>
                  </div>
                </template>
              </split-pane>
            </template>
          </split-pane>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Temperature PLC">
        <div class="components-container">
          <split-pane
            :default-percent="130"
            :min-percent="10"
            split="horizontal"
            @resize="resize">
            <template slot="paneL">
              <split-pane
                :default-percent="70"
                :min-percent="0"
                split="horizontal">
                <template slot="paneL">
                  <div class="top-container">
                    <div class="overf">
                      <div class="example-container">
                        <hot-table
                          class="example"
                          :settings="tempSettings" />
                      </div>
                    </div>
                  </div>
                </template>
                <template slot="paneR">
                  <div class="bottom-container">
                    <div class="overf">
                      <div class="example-container">
                        <hot-table
                          class="example"
                          :settings="tempSettings1" />
                      </div>
                    </div>
                  </div>
                </template>
              </split-pane>
            </template>
          </split-pane>
        </div>
      </el-tab-pane>
      <el-tab-pane label="FT PLC">
        <div class="components-container">
          <split-pane
            :default-percent="130"
            :min-percent="10"
            split="horizontal"
            @resize="resize">
            <template slot="paneL">
              <split-pane
                :default-percent="70"
                :min-percent="0"
                split="horizontal">
                <template slot="paneL">
                  <div class="top-container">
                    <div class="overf">
                      <div class="example-container">
                        <hot-table
                          class="example"
                          :settings="ftSettings" />
                      </div>
                    </div>
                  </div>
                </template>
                <template slot="paneR">
                  <div class="bottom-container">
                    <div class="overf">
                      <div class="example-container">
                        <hot-table
                          class="example"
                          :settings="ftSettings1" />
                      </div>
                    </div>
                  </div>
                </template>
              </split-pane>
            </template>
          </split-pane>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { HotTable } from '@handsontable/vue'
import splitPane from 'vue-splitpane'
import Handsontable from 'handsontable'
// import { getEQMetadata, getEQMetadataByDSId, getMitPLCConfigs } from '@/api/datasource'
export default {
  components: {
    HotTable,
    splitPane
  },
  data() {
    function firstRowRenderer(instance, td, row, col, prop, value, cellProperties) {
      // eslint-disable-next-line prefer-rest-params
      Handsontable.renderers.TextRenderer.apply(this, arguments)
      td.style.fontWeight = 'bold'
      td.style.color = 'green'
      td.style.background = '#CEC'
      td.className = 'make-me-red'
    }
    return {
      hotSettings: {
        licenseKey: 'non-commercial-and-evaluation',
        data: null,
        startRows: 32,
        startCols: 19,
        colWidths: 180,
        colHeaders: ['+0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+A', '+B', '+C', '+D', '+E', '+F'],
        rowHeaders: ['B0000', 'B0010', 'B0020', 'B0030', 'B0040', 'B0050', 'B0060', 'B0070', 'B0080', 'B0090', 'B00A0', 'B00B0', 'B00C0', 'B00D0', 'B00E0', 'B00F0', 'B0100', 'B0110', 'B0120', 'B0130', 'B0140', 'B0150', 'B0160', 'B0170', 'B0180', 'B0190', 'B01A0', 'B01B0', 'B01C0', 'B01D0', 'B01E0', 'B01F0'],
        minSpareCols: 0, // 列留白
        // className: 'htCenter',
        currentRowClassName: 'currentRow', // 为选中行添加类名，可以更改样式
        currentColClassName: 'currentCol', // 为选中列添加类名
        columns: [
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' }

        ],
        cells(row, col) {
          const cellProperties = {}
          const data = this.instance.getData()
          const status = data[row][col]

          if (status === 1 || data[row][col] === 'Reserved') {
            // cellProperties.readOnly = true // make cell read-only if it is first row or the text reads 'readOnly'
            cellProperties.renderer = firstRowRenderer
          }
          return cellProperties
        }
      },
      hotSettings1: {
        licenseKey: 'non-commercial-and-evaluation',
        data: null,
        startRows: 16,
        startCols: 19,
        colWidths: 150,
        colHeaders: ['+0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+A', '+B', '+C', '+D', '+E', '+F'],
        rowHeaders: true,
        // mergeCells: [ // 合并
        //   { row: 1, col: 0, rowspan: 2, colspan: 1 }, // 指定合并，从（1,1）开始行3列3合并成一格
        //   { row: 3, col: 0, rowspan: 2, colspan: 1 },
        //   { row: 5, col: 0, rowspan: 6, colspan: 1 },
        //   { row: 11, col: 0, rowspan: 3, colspan: 1 },
        //   { row: 14, col: 0, rowspan: 4, colspan: 1 },
        //   { row: 18, col: 0, rowspan: 3, colspan: 1 },
        //   { row: 21, col: 0, rowspan: 3, colspan: 1 },
        //   { row: 24, col: 0, rowspan: 3, colspan: 1 }
        // ],
        minSpareCols: 0, // 列留白
        // className: 'htCenter',
        currentRowClassName: 'currentRow', // 为选中行添加类名，可以更改样式
        currentColClassName: 'currentCol', // 为选中列添加类名
        columns: [
          // { data: 'bit0.name' },
          // { data: 'bit1' },
          // { data: 'bit2' },
          // { data: 'bit3' },
          // { data: 'bit4' },
          // { data: 'bit5' },
          // { data: 'bit6' },
          // { data: 'bit7' },
          // { data: 'bit8' },
          // { data: 'bit9' },
          // { data: 'bitA' },
          // { data: 'bitB' },
          // { data: 'bitC' },
          // { data: 'bitD' },
          // { data: 'bitE' },
          // { data: 'bitF' }
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' }

        ],
        cells(row, col) {
          const cellProperties = {}
          const data = this.instance.getData()
          const status = data[row][col]

          if (status === 1 || data[row][col] === 'Reserved') {
            // cellProperties.readOnly = true // make cell read-only if it is first row or the text reads 'readOnly'
            cellProperties.renderer = firstRowRenderer
          }
          // if (row === 0) {
          //   cellProperties.renderer = firstRowRenderer // uses function directly
          // } else {
          // if (col >= 2) {
          //   cellProperties.renderer = negativeValueRenderer // uses lookup map
          // }
          return cellProperties
        }
      },
      assySettings: {
        licenseKey: 'non-commercial-and-evaluation',
        data: null,
        startRows: 11,
        startCols: 16,
        colWidths: 180,
        colHeaders: ['+0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+A', '+B', '+C', '+D', '+E', '+F'],
        rowHeaders: true,
        minSpareCols: 0, // 列留白
        // className: 'htCenter',
        currentRowClassName: 'currentRow', // 为选中行添加类名，可以更改样式
        currentColClassName: 'currentCol', // 为选中列添加类名
        columns: [
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' }

        ],
        cells(row, col) {
          const cellProperties = {}
          const data = this.instance.getData()
          const status = data[row][col]

          if (status === 1 || data[row][col] === 'Reserved') {
            // cellProperties.readOnly = true // make cell read-only if it is first row or the text reads 'readOnly'
            cellProperties.renderer = firstRowRenderer
          }
          return cellProperties
        }
      },
      assySettings1: {
        licenseKey: 'non-commercial-and-evaluation',
        data: null,
        startRows: 11,
        startCols: 16,
        colWidths: 180,
        colHeaders: ['+0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+A', '+B', '+C', '+D', '+E', '+F'],
        rowHeaders: true,
        minSpareCols: 0, // 列留白
        // className: 'htCenter',
        currentRowClassName: 'currentRow', // 为选中行添加类名，可以更改样式
        currentColClassName: 'currentCol', // 为选中列添加类名
        columns: [
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' }

        ],
        cells(row, col) {
          const cellProperties = {}
          const data = this.instance.getData()
          const status = data[row][col]

          if (status === 1 || data[row][col] === 'Reserved') {
            // cellProperties.readOnly = true // make cell read-only if it is first row or the text reads 'readOnly'
            cellProperties.renderer = firstRowRenderer
          }
          return cellProperties
        }
      },
      assyTestSettings: {
        licenseKey: 'non-commercial-and-evaluation',
        data: null,
        startRows: 11,
        startCols: 16,
        colWidths: 180,
        colHeaders: ['+0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+A', '+B', '+C', '+D', '+E', '+F'],
        rowHeaders: true,
        minSpareCols: 0, // 列留白
        // className: 'htCenter',
        currentRowClassName: 'currentRow', // 为选中行添加类名，可以更改样式
        currentColClassName: 'currentCol', // 为选中列添加类名
        columns: [
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' }

        ],
        cells(row, col) {
          const cellProperties = {}
          const data = this.instance.getData()
          const status = data[row][col]

          if (status === 1 || data[row][col] === 'Reserved') {
            // cellProperties.readOnly = true // make cell read-only if it is first row or the text reads 'readOnly'
            cellProperties.renderer = firstRowRenderer
          }
          return cellProperties
        }
      },
      assyTestSettings1: {
        licenseKey: 'non-commercial-and-evaluation',
        data: null,
        startRows: 11,
        startCols: 16,
        colWidths: 180,
        colHeaders: ['+0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+A', '+B', '+C', '+D', '+E', '+F'],
        rowHeaders: true,
        minSpareCols: 0, // 列留白
        // className: 'htCenter',
        currentRowClassName: 'currentRow', // 为选中行添加类名，可以更改样式
        currentColClassName: 'currentCol', // 为选中列添加类名
        columns: [
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' }

        ],
        cells(row, col) {
          const cellProperties = {}
          const data = this.instance.getData()
          const status = data[row][col]

          if (status === 1 || data[row][col] === 'Reserved') {
            // cellProperties.readOnly = true // make cell read-only if it is first row or the text reads 'readOnly'
            cellProperties.renderer = firstRowRenderer
          }
          return cellProperties
        }
      },
      agingSettings: {
        licenseKey: 'non-commercial-and-evaluation',
        data: null,
        startRows: 11,
        startCols: 16,
        colWidths: 180,
        colHeaders: ['+0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+A', '+B', '+C', '+D', '+E', '+F'],
        rowHeaders: true,
        minSpareCols: 0, // 列留白
        // className: 'htCenter',
        currentRowClassName: 'currentRow', // 为选中行添加类名，可以更改样式
        currentColClassName: 'currentCol', // 为选中列添加类名
        columns: [
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' }

        ],
        cells(row, col) {
          const cellProperties = {}
          const data = this.instance.getData()
          const status = data[row][col]

          if (status === 1 || data[row][col] === 'Reserved') {
            // cellProperties.readOnly = true // make cell read-only if it is first row or the text reads 'readOnly'
            cellProperties.renderer = firstRowRenderer
          }
          return cellProperties
        }
      },
      agingSettings1: {
        licenseKey: 'non-commercial-and-evaluation',
        data: null,
        startRows: 11,
        startCols: 16,
        colWidths: 180,
        colHeaders: ['+0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+A', '+B', '+C', '+D', '+E', '+F'],
        rowHeaders: true,
        minSpareCols: 0, // 列留白
        // className: 'htCenter',
        currentRowClassName: 'currentRow', // 为选中行添加类名，可以更改样式
        currentColClassName: 'currentCol', // 为选中列添加类名
        columns: [
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' }

        ],
        cells(row, col) {
          const cellProperties = {}
          const data = this.instance.getData()
          const status = data[row][col]

          if (status === 1 || data[row][col] === 'Reserved') {
            // cellProperties.readOnly = true // make cell read-only if it is first row or the text reads 'readOnly'
            cellProperties.renderer = firstRowRenderer
          }
          return cellProperties
        }
      },
      tempSettings: {
        licenseKey: 'non-commercial-and-evaluation',
        data: null,
        startRows: 11,
        startCols: 16,
        colWidths: 180,
        colHeaders: ['+0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+A', '+B', '+C', '+D', '+E', '+F'],
        rowHeaders: true,
        minSpareCols: 0, // 列留白
        // className: 'htCenter',
        currentRowClassName: 'currentRow', // 为选中行添加类名，可以更改样式
        currentColClassName: 'currentCol', // 为选中列添加类名
        columns: [
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' }

        ],
        cells(row, col) {
          const cellProperties = {}
          const data = this.instance.getData()
          const status = data[row][col]

          if (status === 1 || data[row][col] === 'Reserved') {
            // cellProperties.readOnly = true // make cell read-only if it is first row or the text reads 'readOnly'
            cellProperties.renderer = firstRowRenderer
          }
          return cellProperties
        }
      },
      tempSettings1: {
        licenseKey: 'non-commercial-and-evaluation',
        data: null,
        startRows: 11,
        startCols: 16,
        colWidths: 180,
        colHeaders: ['+0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+A', '+B', '+C', '+D', '+E', '+F'],
        rowHeaders: true,
        minSpareCols: 0, // 列留白
        // className: 'htCenter',
        currentRowClassName: 'currentRow', // 为选中行添加类名，可以更改样式
        currentColClassName: 'currentCol', // 为选中列添加类名
        columns: [
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' }

        ],
        cells(row, col) {
          const cellProperties = {}
          const data = this.instance.getData()
          const status = data[row][col]

          if (status === 1 || data[row][col] === 'Reserved') {
            // cellProperties.readOnly = true // make cell read-only if it is first row or the text reads 'readOnly'
            cellProperties.renderer = firstRowRenderer
          }
          return cellProperties
        }
      },
      ftSettings: {
        licenseKey: 'non-commercial-and-evaluation',
        data: null,
        startRows: 11,
        startCols: 16,
        colWidths: 180,
        colHeaders: ['+0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+A', '+B', '+C', '+D', '+E', '+F'],
        rowHeaders: true,
        minSpareCols: 0, // 列留白
        // className: 'htCenter',
        currentRowClassName: 'currentRow', // 为选中行添加类名，可以更改样式
        currentColClassName: 'currentCol', // 为选中列添加类名
        columns: [
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' }

        ],
        cells(row, col) {
          const cellProperties = {}
          const data = this.instance.getData()
          const status = data[row][col]

          if (status === 1 || data[row][col] === 'Reserved') {
            // cellProperties.readOnly = true // make cell read-only if it is first row or the text reads 'readOnly'
            cellProperties.renderer = firstRowRenderer
          }
          return cellProperties
        }
      },
      ftSettings1: {
        licenseKey: 'non-commercial-and-evaluation',
        data: null,
        startRows: 11,
        startCols: 16,
        colWidths: 180,
        colHeaders: ['+0', '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+A', '+B', '+C', '+D', '+E', '+F'],
        rowHeaders: true,
        minSpareCols: 0, // 列留白
        // className: 'htCenter',
        currentRowClassName: 'currentRow', // 为选中行添加类名，可以更改样式
        currentColClassName: 'currentCol', // 为选中列添加类名
        columns: [
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' },
          { type: 'text' }

        ],
        cells(row, col) {
          const cellProperties = {}
          const data = this.instance.getData()
          const status = data[row][col]

          if (status === 1 || data[row][col] === 'Reserved') {
            // cellProperties.readOnly = true // make cell read-only if it is first row or the text reads 'readOnly'
            cellProperties.renderer = firstRowRenderer
          }
          return cellProperties
        }
      },
      total: 0,
      loading: true,
      query: {
        page: 1,
        limit: 200,
        sort: '',
        currentDS: ''
      },
      plcConfig: [],
      assyRowHeader: []
    }
  },
  created() {
    this.getRowHeaders()
    this.getList()
  },
  // methods
  methods: {
    getList() {
      // this.loading = true
      // let arr, i
      // this.query.currentDS = ''
      // if (this.query.currentDS === '') {
      //   getEQMetadata(this.query)
      //     .then(response => {
      //       this.total = response.paging.totalCount
      //       arr = response.data
      //       const len = arr.length
      //       const newarr = []
      //       for (i = 0; i < len; i++) {
      //         if (arr[i].direction === 'FROM_CIM' && arr[i].sourceItemId.includes('B')) {
      //           newarr.push(arr[i])
      //         }
      //       }
      //       newarr.sort(function(a, b) {
      //         return a.sourceItemId.slice(-4) - b.sourceItemId.slice(-4)
      //       })
      //
      //       for (let i = 0; i < newarr.length; i++) {
      //         if ((newarr[i + 1].sourceItemId.slice(-4) - newarr[i].sourceItemId.slice(-4)) > 1) {
      //           for (let j = newarr[i].sourceItemId.slice(-4); j <= newarr[i + 1].sourceItemId.slice(-4); j++) {
      //             newarr.splice(i + 1, 0, { name: 'Reserved', sourceItemId: j++ })
      //           }
      //         }
      //       }
      //       const newarr1 = []
      //       for (let i = 0; i < newarr.length; i++) {
      //         newarr1.push(arr[i].name)
      //       }
      //
      //       const result = []
      //       for (let i = 0; i < newarr1.length; i += 16) {
      //         result.push(newarr1.slice(i, i + 16))
      //       }
      //       this.hotSettings.data = result
      //     })
      //     .catch(function(error) {
      //       console.log(error)
      //     })
      // } else {
      //   getEQMetadataByDSId(this.query)
      //     .then(response => {
      //       this.total = response.paging.totalCount
      //       this.hotSettings.data = response.data
      //     })
      //     .catch(function(error) {
      //       console.log(error)
      //     })
      // }

      this.loading = false
    },
    getRowHeaders() {
      this.loading = true
      let assyBitStart; let assyBitLength; let plcConfiglen
      this.query.currentDS = '2177D1C2-1903-4D27-B290-389EB06FFA57'
      // if (this.query.currentDS !== '') {
      //   getMitPLCConfigs(this.query)
      //     .then(response => {
      //       this.plcConfig = response.configs
      //     })
      //     .catch(function(error) {
      //       console.log(error)
      //     })
      // }
      console.log(this.plcConfig)
      if (this.plcConfig !== undefined) {
        plcConfiglen = this.plcConfig.length
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < plcConfiglen; i++) {
          if (this.plcConfig[i].devType === 'B' && this.plcConfig[i].direction !== 1 && this.plcConfig[i].datasourceId === '2177D1C2-1903-4D27-B290-389EB06FFA57') {
            assyBitStart = this.plcConfig[i].start
            assyBitLength = this.plcConfig[i].length
          }
        }
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < assyBitLength; i++) {
          if (assyBitStart < 1000) {
            const str1 = 'B0'
            const str2 = assyBitStart + i * 10
            this.assyRowHeader.push(str1.concat(str2))
          } else {
            const str3 = 'B'
            const str4 = assyBitStart + i * 10
            this.assyRowHeader.push(str3.concat(str4))
          }
        }
      } else {
        plcConfiglen = 0
      }

      this.assySettings.rowHeaders = this.assyRowHeader
      this.agingSettings.rowHeaders = ['B0400', 'B0410', 'B0420', 'B0430', 'B0440', 'B0450', 'B0460', 'B0470', 'B0480', 'B0490', 'B04A0', 'b04b0']
      this.tempSettings.rowHeaders = ['B0800 ']
    },
    resize() {
      console.log('resize')
    }
  }
}
</script>

<!--<style scoped>-->
<!--@import 'handsontable/dist/handsontable.full.css';-->
<!--</style>-->
<style src="handsontable/dist/handsontable.full.css"></style>
<style>
  .make-me-red {
    color: green;
    font-weight: bold;
    background: #42b983;
  }
  .overf{
    width: 100%;
    /*height: 100px;*/
    height: 500px;
    overflow: hidden;
  }
  .example-container {
    overflow: auto;
    width: 100%;
    height: 100%;
  }
  .example-container1 {
    overflow: auto;
    width: 100%;
    height: 100%;
  }
  .components-container {
    position: relative;
    height: 100vh;
  }

  .left-container {
    /*background-color: #F38181;*/
    height: 100%;
  }

  .right-container {
    background-color: #FCE38A;
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
