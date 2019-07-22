<template>
  <div>
    <el-card
      :class="{ hide : polTestIsHide }"
      shadow="hover"
      class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span>POL TEST</span>
        <el-button
          class="alarmItem"
          type="danger"
          circle>
          {{ polTestAlarmNumber }}
        </el-button>
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in polTest">
            <el-collapse-item :key="item.name">
              <template slot="title">
                POL TEST 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div v-if="item.connected">
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    size="mini"
                    circle />
                </div>
                <div v-else>
                  <el-button
                    type="danger"
                    icon="el-icon-close"
                    size="mini"
                    circle />
                </div>
              </template>
              <el-row>
                <span class="myfont">FG Code:</span>
                <span class="dataText">{{ item.fgCode }}</span>
              </el-row>
              <el-row>
                <span class="myfont">capacity:</span>
                <span>{{ item.capacity }}</span>
              </el-row>
            </el-collapse-item>
          </template>
        </el-collapse>
      </div>
    </el-card>
    <el-card
      :class="{ hide : piIsHide }"
      shadow="hover"
      class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span>PI</span>
        <el-button
          class="alarmItem"
          type="danger"
          circle>
          {{ piAlarmNumber }}
        </el-button>
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in pi">
            <el-collapse-item :key="item.name">
              <template slot="title">
                PI 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div v-if="item.connected">
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    size="mini"
                    circle />
                </div>
                <div v-else>
                  <el-button
                    type="danger"
                    icon="el-icon-close"
                    size="mini"
                    circle />
                </div>
              </template>
              <el-row>
                <span class="myfont">FG Code:</span>
                <span class="dataText">{{ item.fgCode }}</span>
              </el-row>
              <el-row>
                <span class="myfont">capacity:</span>
                <span>{{ item.capacity }}</span>
              </el-row>
            </el-collapse-item>
          </template>
        </el-collapse>
      </div>
    </el-card>
    <el-card
      :class="{ hide : ptAoiIsHide }"
      shadow="hover"
      class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span>PT AOI</span>
        <el-button
          class="alarmItem"
          type="danger"
          circle>
          {{ ptAoiAlarmNumber }}
        </el-button>
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in ptAoi">
            <el-collapse-item :key="item.name">
              <template slot="title">
                PT AOI 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div v-if="item.connected">
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    size="mini"
                    circle />
                </div>
                <div v-else>
                  <el-button
                    type="danger"
                    icon="el-icon-close"
                    size="mini"
                    circle />
                </div>
              </template>
              <el-row>
                <span class="myfont">FG Code:</span>
                <span class="dataText">{{ item.fgCode }}</span>
              </el-row>
              <el-row>
                <span class="myfont">capacity:</span>
                <span>{{ item.capacity }}</span>
              </el-row>
            </el-collapse-item>
          </template>
        </el-collapse>
      </div>
    </el-card>
    <el-card
      :class="{ hide : panelTestIsHide }"
      shadow="hover"
      class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span>Panel Test</span>
        <el-button
          class="alarmItem"
          type="danger"
          circle>
          {{ panelTestAlarmNumber }}
        </el-button>
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in panelTest">
            <el-collapse-item :key="item.name">
              <template slot="title">
                Panel Test 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div v-if="item.connected">
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    size="mini"
                    circle />
                </div>
                <div v-else>
                  <el-button
                    type="danger"
                    icon="el-icon-close"
                    size="mini"
                    circle />
                </div>
              </template>
              <el-row>
                <span class="myfont">FG Code:</span>
                <span class="dataText">{{ item.fgCode }}</span>
              </el-row>
              <el-row>
                <span class="myfont">capacity:</span>
                <span>{{ item.capacity }}</span>
              </el-row>
            </el-collapse-item>
          </template>
        </el-collapse>
      </div>
    </el-card>
    <el-card
      :class="{ hide : cfTestIsHide }"
      shadow="hover"
      class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span>CF Test</span>
        <el-button
          class="alarmItem"
          type="danger"
          circle>
          {{ cfTestAlarmNumber }}
        </el-button>
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in cfTest">
            <el-collapse-item :key="item.name">
              <template slot="title">
                CF Test 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div v-if="item.connected">
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    size="mini"
                    circle />
                </div>
                <div v-else>
                  <el-button
                    type="danger"
                    icon="el-icon-close"
                    size="mini"
                    circle />
                </div>
              </template>
              <el-row>
                <span class="myfont">FG Code:</span>
                <span class="dataText">{{ item.fgCode }}</span>
              </el-row>
              <el-row>
                <span class="myfont">capacity:</span>
                <span>{{ item.capacity }}</span>
              </el-row>
            </el-collapse-item>
          </template>
        </el-collapse>
      </div>
    </el-card>
    <el-card
      :class="{ hide : bluAoiIsHide }"
      shadow="hover"
      class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span>BLU AOI</span>
        <el-button
          class="alarmItem"
          type="danger"
          circle>
          {{ bluAoiAlarmNumber }}
        </el-button>
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in bluAoi">
            <el-collapse-item :key="item.name">
              <template slot="title">
                BLU AOI 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div v-if="item.connected">
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    size="mini"
                    circle />
                </div>
                <div v-else>
                  <el-button
                    type="danger"
                    icon="el-icon-close"
                    size="mini"
                    circle />
                </div>
              </template>
              <el-row>
                <span class="myfont">FG Code:</span>
                <span class="dataText">{{ item.fgCode }}</span>
              </el-row>
              <el-row>
                <span class="myfont">capacity:</span>
                <span>{{ item.capacity }}</span>
              </el-row>
            </el-collapse-item>
          </template>
        </el-collapse>
      </div>
    </el-card>
    <el-card
      :class="{ hide : fiAoiIsHide }"
      shadow="hover"
      class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span>FI AOI</span>
        <el-button
          class="alarmItem"
          type="danger"
          circle>
          {{ fiAoiAlarmNumber }}
        </el-button>
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in fiAoi">
            <el-collapse-item :key="item.name">
              <template slot="title">
                FI AOI 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div v-if="item.connected">
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    size="mini"
                    circle />
                </div>
                <div v-else>
                  <el-button
                    type="danger"
                    icon="el-icon-close"
                    size="mini"
                    circle />
                </div>
              </template>
              <el-row>
                <span class="myfont">FG Code:</span>
                <span class="dataText">{{ item.fgCode }}</span>
              </el-row>
              <el-row>
                <span class="myfont">capacity:</span>
                <span>{{ item.capacity }}</span>
              </el-row>
            </el-collapse-item>
          </template>
        </el-collapse>
      </div>
    </el-card>
    <el-card
      :class="{ hide : fiTestIsHide }"
      shadow="hover"
      class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span>FI TEST</span>
        <el-button
          class="alarmItem"
          type="danger"
          circle>
          {{ fiTestAlarmNumber }}
        </el-button>
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in fiTest">
            <el-collapse-item :key="item.name">
              <template slot="title">
                FI TEST 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div v-if="item.connected">
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    size="mini"
                    circle />
                </div>
                <div v-else>
                  <el-button
                    type="danger"
                    icon="el-icon-close"
                    size="mini"
                    circle />
                </div>
              </template>
              <el-row>
                <span class="myfont">FG Code:</span>
                <span class="dataText">{{ item.fgCode }}</span>
              </el-row>
              <el-row>
                <span class="myfont">capacity:</span>
                <span>{{ item.capacity }}</span>
              </el-row>
            </el-collapse-item>
          </template>
        </el-collapse>
      </div>
    </el-card>
    <el-card
      :class="{ hide : stIsHide }"
      shadow="hover"
      class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span>ST</span>
        <el-button
          class="alarmItem"
          type="danger"
          circle>
          {{ stAlarmNumber }}
        </el-button>
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in st">
            <el-collapse-item :key="item.name">
              <template slot="title">
                ST 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div v-if="item.connected">
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    size="mini"
                    circle />
                </div>
                <div v-else>
                  <el-button
                    type="danger"
                    icon="el-icon-close"
                    size="mini"
                    circle />
                </div>
              </template>
              <el-row>
                <span class="myfont">FG Code:</span>
                <span class="dataText">{{ item.fgCode }}</span>
              </el-row>
              <el-row>
                <span class="myfont">capacity:</span>
                <span>{{ item.capacity }}</span>
              </el-row>
            </el-collapse-item>
          </template>
        </el-collapse>
      </div>
    </el-card>
    <el-card
      :class="{ hide : autoAssyIsHide }"
      shadow="hover"
      class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span>Auto Assy</span>
        <el-button
          class="alarmItem"
          type="danger"
          circle>
          {{ autoAssyAlarmNumber }}
        </el-button>
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in autoAssy">
            <el-collapse-item :key="item.name">
              <template slot="title">
                Auto Assy 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div v-if="item.connected">
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    size="mini"
                    circle />
                </div>
                <div v-else>
                  <el-button
                    type="danger"
                    icon="el-icon-close"
                    size="mini"
                    circle />
                </div>
              </template>
              <el-row>
                <span class="myfont">FG Code:</span>
                <span class="dataText">{{ item.fgCode }}</span>
              </el-row>
              <el-row>
                <span class="myfont">capacity:</span>
                <span>{{ item.capacity }}</span>
              </el-row>
            </el-collapse-item>
          </template>
        </el-collapse>
      </div>
    </el-card>
    <el-card
      :class="{ hide : autoTapeIsHide }"
      shadow="hover"
      class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span>Auto Tape</span>
        <el-button
          class="alarmItem"
          type="danger"
          circle>
          {{ autoTapeAlarmNumber }}
        </el-button>
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in autoTape">
            <el-collapse-item :key="item.name">
              <template slot="title">
                auto Tape 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div v-if="item.connected">
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    size="mini"
                    circle />
                </div>
                <div v-else>
                  <el-button
                    type="danger"
                    icon="el-icon-close"
                    size="mini"
                    circle />
                </div>
              </template>
              <el-row>
                <span class="myfont">FG Code:</span>
                <span class="dataText">{{ item.fgCode }}</span>
              </el-row>
              <el-row>
                <span class="myfont">capacity:</span>
                <span>{{ item.capacity }}</span>
              </el-row>
            </el-collapse-item>
          </template>
        </el-collapse>
      </div>
    </el-card>
    <el-card
      :class="{ hide : filmAttachIsHide }"
      shadow="hover"
      class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span>Film Attach</span>
        <el-button
          class="alarmItem"
          type="danger"
          circle>
          {{ filmAttachAlarmNumber }}
        </el-button>
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in filmAttach">
            <el-collapse-item :key="item.name">
              <template slot="title">
                Film Attach 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div v-if="item.connected">
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    size="mini"
                    circle />
                </div>
                <div v-else>
                  <el-button
                    type="danger"
                    icon="el-icon-close"
                    size="mini"
                    circle />
                </div>
              </template>
              <el-row>
                <span class="myfont">FG Code:</span>
                <span class="dataText">{{ item.fgCode }}</span>
              </el-row>
              <el-row>
                <span class="myfont">capacity:</span>
                <span>{{ item.capacity }}</span>
              </el-row>
            </el-collapse-item>
          </template>
        </el-collapse>
      </div>
    </el-card>
    <el-card
      :class="{ hide : autoAffixIsHide }"
      shadow="hover"
      class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span>Auto AFFIX</span>
        <el-button
          class="alarmItem"
          type="danger"
          circle>
          {{ autoAffixAlarmNumber }}
        </el-button>
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in autoAffix">
            <el-collapse-item :key="item.name">
              <template slot="title">
                Auto Affix 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div v-if="item.connected">
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    size="mini"
                    circle />
                </div>
                <div v-else>
                  <el-button
                    type="danger"
                    icon="el-icon-close"
                    size="mini"
                    circle />
                </div>
              </template>
              <el-row>
                <span class="myfont">FG Code:</span>
                <span class="dataText">{{ item.fgCode }}</span>
              </el-row>
              <el-row>
                <span class="myfont">capacity:</span>
                <span>{{ item.capacity }}</span>
              </el-row>
            </el-collapse-item>
          </template>
        </el-collapse>
      </div>
    </el-card>
    <el-card
      :class="{ hide : appAoiIsHide }"
      shadow="hover"
      class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span>APP AOI</span>
        <el-button
          class="alarmItem"
          type="danger"
          circle>
          {{ appAoiAlarmNumber }}
        </el-button>
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in appAoi">
            <el-collapse-item :key="item.name">
              <template slot="title">
                App AOI 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div v-if="item.connected">
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    size="mini"
                    circle />
                </div>
                <div v-else>
                  <el-button
                    type="danger"
                    icon="el-icon-close"
                    size="mini"
                    circle />
                </div>
              </template>
              <el-row>
                <span class="myfont">FG Code:</span>
                <span class="dataText">{{ item.fgCode }}</span>
              </el-row>
              <el-row>
                <span class="myfont">capacity:</span>
                <span>{{ item.capacity }}</span>
              </el-row>
            </el-collapse-item>
          </template>
        </el-collapse>
      </div>
    </el-card>
    <el-card
      :class="{ hide : viIsHide }"
      shadow="hover"
      class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span>VI</span>
        <el-button
          class="alarmItem"
          type="danger"
          circle>
          {{ viAlarmNumber }}
        </el-button>
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in vi">
            <el-collapse-item :key="item.name">
              <template slot="title">
                VI 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div v-if="item.connected">
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    size="mini"
                    circle />
                </div>
                <div v-else>
                  <el-button
                    type="danger"
                    icon="el-icon-close"
                    size="mini"
                    circle />
                </div>
              </template>
              <el-row>
                <span class="myfont">FG Code:</span>
                <span class="dataText">{{ item.fgCode }}</span>
              </el-row>
              <el-row>
                <span class="myfont">capacity:</span>
                <span>{{ item.capacity }}</span>
              </el-row>
            </el-collapse-item>
          </template>
        </el-collapse>
      </div>
    </el-card>
    <el-card
      :class="{ hide : autoPackingIsHide }"
      shadow="hover"
      class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span>Auto Packing</span>
        <el-button
          class="alarmItem"
          type="danger"
          circle>
          {{ autoPackingAlarmNumber }}
        </el-button>
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in autoPacking">
            <el-collapse-item :key="item.name">
              <template slot="title">
                Auto Packing 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div v-if="item.connected">
                  <el-button
                    type="success"
                    icon="el-icon-check"
                    size="mini"
                    circle />
                </div>
                <div v-else>
                  <el-button
                    type="danger"
                    icon="el-icon-close"
                    size="mini"
                    circle />
                </div>
              </template>
              <el-row>
                <span class="myfont">FG Code:</span>
                <span class="dataText">{{ item.fgCode }}</span>
              </el-row>
              <el-row>
                <span class="myfont">capacity:</span>
                <span>{{ item.capacity }}</span>
              </el-row>
            </el-collapse-item>
          </template>
        </el-collapse>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      line: 11,
      polTestIsHide: false,
      piIsHide: false,
      ptAoiIsHide: false,
      panelTestIsHide: false,
      cfTestIsHide: false,
      bluAoiIsHide: false,
      autoAssyIsHide: false,
      autoTapeIsHide: false,
      fiAoiIsHide: false,
      filmAttachIsHide: false,
      fiTestIsHide: false,
      autoAffixIsHide: false,
      appAoiIsHide: false,
      stIsHide: false,
      viIsHide: false,
      autoPackingIsHide: false,
      polTestAlarmNumber: 0,
      piAlarmNumber: 0,
      ptAoiAlarmNumber: 0,
      panelTestAlarmNumber: 0,
      cfTestAlarmNumber: 2,
      bluAoiAlarmNumber: 0,
      autoAssyAlarmNumber: 0,
      autoTapeAlarmNumber: 0,
      fiAoiAlarmNumber: 0,
      filmAttachAlarmNumber: 0,
      fiTestAlarmNumber: 0,
      autoAffixAlarmNumber: 0,
      appAoiAlarmNumber: 0,
      stAlarmNumber: 0,
      viAlarmNumber: 0,
      autoPackingAlarmNumber: 0,
      polTest: [{ name: 'polTest01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'polTest02', fgCode: 'NT140WHM-N34-8941', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'polTest03', fgCode: 'NT140WHM-N34-8942', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'polTest04', fgCode: 'NT140WHM-N34-8943', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'polTest05', fgCode: 'NT140WHM-N34-8944', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'polTest06', fgCode: 'NT140WHM-N34-8945', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      pi: [{ name: 'pi01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'pi02', fgCode: 'NT140WHM-N34-8941', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'pi03', fgCode: 'NT140WHM-N34-8942', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'pi04', fgCode: 'NT140WHM-N34-8943', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      ptAoi: [{ name: 'ptAoi01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'ptAoi02', fgCode: 'NT140WHM-N34-8941', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'ptAoi03', fgCode: 'NT140WHM-N34-8942', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'ptAoi04', fgCode: 'NT140WHM-N34-8943', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      panelTest: [{ name: 'panTest01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'panelTest02', fgCode: 'NT140WHM-N34-8941', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'panelTest03', fgCode: 'NT140WHM-N34-8942', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'panelTest04', fgCode: 'NT140WHM-N34-8943', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'panelTest05', fgCode: 'NT140WHM-N34-8944', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'panelTest06', fgCode: 'NT140WHM-N34-8945', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      cfTest: [{ name: 'cfTest01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'cfTest02', fgCode: 'NT140WHM-N34-8941', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'cfTest03', fgCode: 'NT140WHM-N348942', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'cfTest04', fgCode: 'NT140WHM-N34-8943', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'cfTest05', fgCode: 'NT140WHM-N34-8944', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'cfTest06', fgCode: 'NT140WHM-N34-8945', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      bluAoi: [{ name: 'bluAoi01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'bluAoi02', fgCode: 'NT140WHM-N34-8941', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'bluAoi03', fgCode: 'NT140WHM-N34-8942', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'bluAoi04', fgCode: 'NT140WHM-N34-8943', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      autoAssy: [{ name: 'autoAssy01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      autoTape: [{ name: 'autoTape01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      fiAoi: [{ name: 'fiAoi01', fgCode: '', capacity: '12345', tt: '', connected: false, state: 'down' },
        { name: 'fiAoi02', fgCode: '', capacity: '12345', tt: '', connected: false, state: 'down' },
        { name: 'fiAoi03', fgCode: '', capacity: '12345', tt: '', connected: false, state: 'down' },
        { name: 'fiAoi04', fgCode: '', capacity: '12345', tt: '', connected: false, state: 'down' }
      ],
      filmAttach: [{ name: 'filmAttach01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: 'down' }
      ],
      fiTest: [{ name: 'fiTest01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'fiTest02', fgCode: 'NT140WHM-N34-8941', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'fiTest03', fgCode: 'NT140WHM-N34-8942', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'fiTest04', fgCode: 'NT140WHM-N34-8943', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'fiTest05', fgCode: 'NT140WHM-N34-8944', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'fiTest06', fgCode: 'NT140WHM-N34-8945', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'fiTest07', fgCode: 'NT140WHM-N34-8946', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'fiTest08', fgCode: 'NT140WHM-N34-8947', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'fiTest09', fgCode: 'NT140WHM-N34-8948', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'fiTest10', fgCode: 'NT140WHM-N34-8949', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      autoAffix: [{ name: 'autoAffix01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      appAoi: [{ name: 'appAoi01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      st: [{ name: 'st01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'st02', fgCode: 'NT140WHM-N34-8941', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'st03', fgCode: 'NT140WHM-N34-8942', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'st04', fgCode: 'NT140WHM-N34-8943', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'st05', fgCode: 'NT140WHM-N34-8944', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      vi: [{ name: 'vi01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      autoPacking: [{ name: 'autoPacking01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' }
      ],

      alarmNumber: '0'

    }
  },
  created() {
    this.lineChange()
  },
  methods: {
    lineChange() {
      if (this.line === 11) {
        this.polTestIsHide = true
        this.ptAoiIsHide = true
        this.cfTestIsHide = true
        this.stIsHide = true
        this.autoTapeIsHide = true
        this.filmAttachIsHide = true
        this.autoAffixIsHide = true
        this.appAoiIsHide = true
        this.autoPackingIsHide = true
      }
    }
    // dataChange: function() {
    //   for (var i = 0, len = this.polTest.length; i < len; i++) {
    //     if (this.polTest[i].name === 'polTest01') {
    //           this.set(this.polTest, i, )
    //
    //     }
    //   }
    // }
  }

}
</script>

<style scoped>
  .box-card {
    /*width: 246px;*/
    width: 268px;
    height: 430px;
    float: left;
  }
  .hide {
    display: none;
  }
  .alarmItem {
    float: right;
    padding: 3px 0;
    height: 28px;
    width: 28px;
  }
  .myfont {
    font-family: "Courier New", Courier, monospace;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
  .clearfix{
    height: 20px;
  }
</style>
