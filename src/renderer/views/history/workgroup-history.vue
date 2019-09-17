<<template>
  <div>
    <el-row>
      <el-radio v-model="query.optionBy" label="1" border>By Date Time</el-radio>
      <el-date-picker
              v-model="query.time"
              :default-time="['12:00:00']"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetimerange"
              start-placeholder="Start Date"
              end-placeholder="End Date"
              style="width: auto"
              @change="getList"
      />
    </el-row>

    <el-table
            :data="tbInspections"
            stripe
            fit
            border
    >
      <el-table-column type="index" />
      <el-table-column align="center" label="Work Date" prop="workDate" />
      <el-table-column align="center" label="Hour" prop="hour" />
      <el-table-column align="center" label="Group A Count" prop="groupACount" />
      <el-table-column align="center" label="Group B Count" prop="groupBCount" />
      <el-table-column align="center" label="Group C Count" prop="groupCCount" />

    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="query.page" :limit.sync="query.limit" @pagination="getList" />
  </div>
</template>
<script>
  import Pagination from '@/components/Pagination'
  import { GetWorkGroupHistory } from '@/api/history'
  export default {
    name: 'InspectionHistory',
    components: {
      Pagination
    },
    // data
    data: function() {
      return {
        tbInspections: [],
        total: 0,
        loading: false,

        query: {
          page: 1,
          limit: 20,
          sort: '',
          optionBy: '1',
          time: [new Date(), new Date()]
        }
      }
    },
    // created
    created() {
      this.getList()
    },
    // methods
    methods: {
      getList() {
        GetWorkGroupHistory(this.query)
          .then(response => {
            this.total = typeof (response.paging.totalCount) === 'undefined' ? 0 : response.paging.totalCount
            this.tbInspections = response.historys
          })
          .catch(function(error) {
            console.log(error)
          })
          // get product history by panel id
      }
    }
  }
</script>

<style scoped>

</style>
