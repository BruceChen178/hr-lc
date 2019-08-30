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
<!--        <el-button-->
<!--          class="alarmItem"-->
<!--          type="danger"-->
<!--          circle>-->
<!--          {{ polTestAlarmNumber }}-->
<!--        </el-button>-->
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
<!--        <el-button-->
<!--          class="alarmItem"-->
<!--          type="danger"-->
<!--          circle>-->
<!--          {{ piAlarmNumber }}-->
<!--        </el-button>-->
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in pi">
            <el-collapse-item :key="item.name">
              <template slot="title">
                PI 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
<!--        <el-button-->
<!--          class="alarmItem"-->
<!--          type="danger"-->
<!--          circle>-->
<!--          {{ ptAoiAlarmNumber }}-->
<!--        </el-button>-->
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in ptAoi">
            <el-collapse-item :key="item.name">
              <template slot="title">
                PT AOI 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
<!--        <el-button-->
<!--          class="alarmItem"-->
<!--          type="danger"-->
<!--          circle>-->
<!--          {{ panelTestAlarmNumber }}-->
<!--        </el-button>-->
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in panelTest">
            <el-collapse-item :key="item.name">
              <template slot="title">
                Panel Test 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
<!--        <el-button-->
<!--          class="alarmItem"-->
<!--          type="danger"-->
<!--          circle>-->
<!--          {{ cfTestAlarmNumber }}-->
<!--        </el-button>-->
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in cfTest">
            <el-collapse-item :key="item.name">
              <template slot="title">
                CF Test 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
<!--        <el-button-->
<!--          class="alarmItem"-->
<!--          type="danger"-->
<!--          circle>-->
<!--          {{ bluAoiAlarmNumber }}-->
<!--        </el-button>-->
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in bluAoi">
            <el-collapse-item :key="item.name">
              <template slot="title">
                BLU AOI 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
<!--        <el-button-->
<!--          class="alarmItem"-->
<!--          type="danger"-->
<!--          circle>-->
<!--          {{ fiAoiAlarmNumber }}-->
<!--        </el-button>-->
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in fiAoi">
            <el-collapse-item :key="item.name">
              <template slot="title">
                FI AOI 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
      class="box-card-2">
      <div
        slot="header"
        class="clearfix">
        <span>FI TEST</span>
<!--        <el-button-->
<!--          class="alarmItem"-->
<!--          type="danger"-->
<!--          circle>-->
<!--          {{ fiTestAlarmNumber }}-->
<!--        </el-button>-->
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in fiTest">
            <el-collapse-item :key="item.name">
              <template slot="title">
                {{ item.name }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
      class="box-card-2">
      <div
        slot="header"
        class="clearfix">
        <span>ST</span>
<!--        <el-button-->
<!--          class="alarmItem"-->
<!--          type="danger"-->
<!--          circle>-->
<!--          {{ stAlarmNumber }}-->
<!--        </el-button>-->
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in st">
            <el-collapse-item :key="item.name">
              <template slot="title">
                ST 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
<!--        <el-button-->
<!--          class="alarmItem"-->
<!--          type="danger"-->
<!--          circle>-->
<!--          {{ autoAssyAlarmNumber }}-->
<!--        </el-button>-->
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in autoAssy">
            <el-collapse-item :key="item.name">
              <template slot="title">
                Auto Assy 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
<!--        <el-button-->
<!--          class="alarmItem"-->
<!--          type="danger"-->
<!--          circle>-->
<!--          {{ autoTapeAlarmNumber }}-->
<!--        </el-button>-->
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in autoTape">
            <el-collapse-item :key="item.name">
              <template slot="title">
                auto Tape 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
<!--        <el-button-->
<!--          class="alarmItem"-->
<!--          type="danger"-->
<!--          circle>-->
<!--          {{ filmAttachAlarmNumber }}-->
<!--        </el-button>-->
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in filmAttach">
            <el-collapse-item :key="item.name">
              <template slot="title">
                Film Attach 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
<!--        <el-button-->
<!--          class="alarmItem"-->
<!--          type="danger"-->
<!--          circle>-->
<!--          {{ autoAffixAlarmNumber }}-->
<!--        </el-button>-->
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in autoAffix">
            <el-collapse-item :key="item.name">
              <template slot="title">
                Auto Affix 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
<!--        <el-button-->
<!--          class="alarmItem"-->
<!--          type="danger"-->
<!--          circle>-->
<!--          {{ appAoiAlarmNumber }}-->
<!--        </el-button>-->
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in appAoi">
            <el-collapse-item :key="item.name">
              <template slot="title">
                App AOI 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
      class="box-card-2">
      <div
        slot="header"
        class="clearfix">
        <span>VI</span>
<!--        <el-button-->
<!--          class="alarmItem"-->
<!--          type="danger"-->
<!--          circle>-->
<!--          {{ viAlarmNumber }}-->
<!--        </el-button>-->
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in vi">
            <el-collapse-item :key="item.name">
              <template slot="title">
                VI 0{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
      :class="{ hide : RTIsHide }"
      shadow="hover"
      class="box-card-2">
      <div
        slot="header"
        class="clearfix">
        <span>RT</span>
<!--        <el-button-->
<!--          class="alarmItem"-->
<!--          type="danger"-->
<!--          circle>-->
<!--          {{ RTAlarmNumber }}-->
<!--        </el-button>-->
      </div>
      <div class="text item">
        <el-collapse accordion>
          <template v-for="(item, index) in rt">
            <el-collapse-item :key="item.name">
              <template slot="title">
                {{ item.name }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
<!--        <el-button-->
<!--                class="alarmItem"-->
<!--                type="danger"-->
<!--                circle>-->
<!--          {{ autoPackingAlarmNumber }}-->
<!--        </el-button>-->
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
import { getInspectionLists } from '@/api/settings'
import { GetCurrentCapacity } from '@/api/others'
import socket from '@/utils/socket.js'
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
      RTIsHide: false,
      // polTestAlarmNumber: 0,
      // piAlarmNumber: 0,
      // ptAoiAlarmNumber: 0,
      // panelTestAlarmNumber: 0,
      // cfTestAlarmNumber: 2,
      // bluAoiAlarmNumber: 0,
      // autoAssyAlarmNumber: 0,
      // autoTapeAlarmNumber: 0,
      // fiAoiAlarmNumber: 0,
      // filmAttachAlarmNumber: 0,
      // fiTestAlarmNumber: 0,
      // autoAffixAlarmNumber: 0,
      // appAoiAlarmNumber: 0,
      // stAlarmNumber: 0,
      // viAlarmNumber: 0,
      // autoPackingAlarmNumber: 0,
      // RTAlarmNumber: 0,
      polTest: [{ name: 'POL Test 01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'POL Test 02', fgCode: 'NT140WHM-N34-8941', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'POL Test 03', fgCode: 'NT140WHM-N34-8942', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'POL Test 04', fgCode: 'NT140WHM-N34-8943', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'POL Test 05', fgCode: 'NT140WHM-N34-8944', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'POL Test 06', fgCode: 'NT140WHM-N34-8945', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      pi: [{ name: 'PI 01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'PI 02', fgCode: 'NT140WHM-N34-8941', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'PI 03', fgCode: 'NT140WHM-N34-8942', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'PI 04', fgCode: 'NT140WHM-N34-8943', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      ptAoi: [{ name: 'PT AOI 01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'PT AOI 02', fgCode: 'NT140WHM-N34-8941', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'PT AOI 03', fgCode: 'NT140WHM-N34-8942', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'PT AOI 04', fgCode: 'NT140WHM-N34-8943', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      panelTest: [{ name: 'PT 01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'PT 02', fgCode: 'NT140WHM-N34-8941', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'PT 03', fgCode: 'NT140WHM-N34-8942', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'PT 04', fgCode: 'NT140WHM-N34-8943', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'PT 05', fgCode: 'NT140WHM-N34-8944', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'PT 06', fgCode: 'NT140WHM-N34-8945', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      cfTest: [{ name: 'CF Test 01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'CF Test 02', fgCode: 'NT140WHM-N34-8941', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'CF Test 03', fgCode: 'NT140WHM-N348942', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'CF Test 04', fgCode: 'NT140WHM-N34-8943', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'CF Test 05', fgCode: 'NT140WHM-N34-8944', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'CF Test 06', fgCode: 'NT140WHM-N34-8945', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      bluAoi: [{ name: 'BLU AOI 01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'BLU AOI 02', fgCode: 'NT140WHM-N34-8941', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'BLU AOI 03', fgCode: 'NT140WHM-N34-8942', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'BLU AOI 04', fgCode: 'NT140WHM-N34-8943', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      autoAssy: [{ name: 'Auto Assy 01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      autoTape: [{ name: 'Auto Tape 01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      fiAoi: [{ name: 'FI AOI 01', fgCode: '', capacity: '12345', tt: '', connected: false, state: 'down' },
        { name: 'FI AOI 02', fgCode: '', capacity: '12345', tt: '', connected: false, state: 'down' },
        { name: 'FI AOI 03', fgCode: '', capacity: '12345', tt: '', connected: false, state: 'down' },
        { name: 'FI AOI 04', fgCode: '', capacity: '12345', tt: '', connected: false, state: 'down' },
        { name: 'FI AOI 05', fgCode: '', capacity: '12345', tt: '', connected: false, state: 'down' },
        { name: 'FI AOI 06', fgCode: '', capacity: '12345', tt: '', connected: false, state: 'down' }
      ],
      filmAttach: [{ name: 'Film Attach 01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: 'down' }
      ],
      fiTest: [{ name: 'FI Test 01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'FI Test 02', fgCode: 'NT140WHM-N34-8941', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'FI Test 03', fgCode: 'NT140WHM-N34-8942', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'FI Test 04', fgCode: 'NT140WHM-N34-8943', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'FI Test 05', fgCode: 'NT140WHM-N34-8944', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'FI Test 06', fgCode: 'NT140WHM-N34-8945', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'FI Test 07', fgCode: 'NT140WHM-N34-8946', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'FI Test 08', fgCode: 'NT140WHM-N34-8947', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'FI Test 09', fgCode: 'NT140WHM-N34-8948', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'FI Test 10', fgCode: 'NT140WHM-N34-8949', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      autoAffix: [{ name: 'AUTO Affix 01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      appAoi: [{ name: 'APP AOI 01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      st: [{ name: 'ST 01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'ST 02', fgCode: 'NT140WHM-N34-8941', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'ST 03', fgCode: 'NT140WHM-N34-8942', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'ST 04', fgCode: 'NT140WHM-N34-8943', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'ST 05', fgCode: 'NT140WHM-N34-8944', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      vi: [{ name: 'VI Test 01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      autoPacking: [{ name: 'Auto Packing 01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' }
      ],
      rt: [{ name: 'RT 01', fgCode: 'NT140WHM-N34-8940', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'RT 02', fgCode: 'NT140WHM-N34-8941', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'RT 03', fgCode: 'NT140WHM-N34-8942', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'RT 04', fgCode: 'NT140WHM-N34-8943', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'RT 05', fgCode: 'NT140WHM-N34-8944', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'RT 06', fgCode: 'NT140WHM-N34-8945', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'RT 07', fgCode: 'NT140WHM-N34-8946', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'RT 08', fgCode: 'NT140WHM-N34-8947', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'RT 09', fgCode: 'NT140WHM-N34-8948', capacity: '12345', tt: '', connected: false, state: '' },
        { name: 'RT 10', fgCode: 'NT140WHM-N34-8949', capacity: '12345', tt: '', connected: false, state: '' }
      ]

    }
  },
  created() {
    this.lineChange()
    this.getEQPList()
    this.getCapacity()
  },
  mounted() {
    socket.setCallback(this.callback)
    socket.initWebSocket('localhost', 9002)
  },
  destroyed() {
    socket.close()
  },
  methods: {
    callback: function(ip, e) {
      // topic handler
      var msg = JSON.parse(e.data)
      if (msg === undefined || msg['pub']['topic'] === undefined) {
        return
      }
      var topic = msg['pub']['topic']
      if (topic === 'InspectionState') {
        var eqpName = msg['pub']['content']['EQPName']
        var eqpCon = msg['pub']['content']['Connected']
        var inspectName = eqpName.substring(0, eqpName.length - 3)
        if (inspectName === 'POL TEST') {
          let a = 0
          for (; a < this.polTest.length; a++) {
            if (this.polTest[a].name === eqpName) {
              this.polTest[a].connected = eqpCon
            }
          }
        }
        if (inspectName === 'PI') {
          let b = 0
          for (; b < this.pi.length; b++) {
            if (this.pi[b].name === eqpName) {
              this.pi[b].connected = eqpCon
            }
          }
        }
        if (inspectName === 'PT') {
          let c = 0
          for (; c < this.panelTest.length; c++) {
            if (this.panelTest[c].name === eqpName) {
              this.panelTest[c].connected = eqpCon
            }
          }
        }
        if (inspectName === 'FI AOI') {
          let d = 0
          for (; d < this.fiAoi.length; d++) {
            if (this.fiAoi[d].name === eqpName) {
              this.fiAoi[d].connected = eqpCon
            }
          }
        }
        if (inspectName === 'FI TEST') {
          let e = 0
          for (; e < this.fiTest.length; e++) {
            if (this.fiTest[e].name === eqpName) {
              this.fiTest[e].connected = eqpCon
            }
          }
        }
        if (inspectName === 'ST') {
          let f = 0
          for (; f < this.st.length; f++) {
            if (this.st[f].name === eqpName) {
              this.st[f].connected = eqpCon
            }
          }
        }
        if (inspectName === 'VI Test') {
          let g = 0
          for (; g < this.vi.length; g++) {
            if (this.vi[g].name === eqpName) {
              this.vi[g].connected = eqpCon
            }
          }
        }
        if (inspectName === 'RT') {
          let h = 0
          for (; h < this.rt.length; h++) {
            if (this.rt[h].name === eqpName) {
              this.rt[h].connected = eqpCon
            }
          }
        }
        if (inspectName === 'BLU AOI') {
          let k = 0
          for (; k < this.bluAoi.length; k++) {
            if (this.bluAoi[k].name === eqpName) {
              this.bluAoi[k].connected = eqpCon
            }
          }
        }
        if (inspectName === 'PT AOI') {
          let l = 0
          for (; l < this.ptAoi.length; l++) {
            if (this.ptAoi[l].name === eqpName) {
              this.ptAoi[l].connected = eqpCon
            }
          }
        }
        if (inspectName === 'CF Test') {
          let m = 0
          for (; m < this.cfTest.length; m++) {
            if (this.cfTest[m].name === eqpName) {
              this.cfTest[m].connected = eqpCon
            }
          }
        }
        if (inspectName === 'Auto Tape') {
          let n = 0
          for (; n < this.autoTape.length; n++) {
            if (this.autoTape[n].name === eqpName) {
              this.autoTape[n].connected = eqpCon
            }
          }
        }
        if (inspectName === 'Auto Assy') {
          let o = 0
          for (; o < this.autoAssy.length; o++) {
            if (this.autoAssy[o].name === eqpName) {
              this.autoAssy[o].connected = eqpCon
            }
          }
        }
        if (inspectName === 'Film Attach') {
          let p = 0
          for (; p < this.filmAttach.length; p++) {
            if (this.filmAttach[p].name === eqpName) {
              this.filmAttach[p].connected = eqpCon
            }
          }
        }
        if (inspectName === 'Auto Affix') {
          let q = 0
          for (; q < this.autoAffix.length; q++) {
            if (this.autoAffix[q].name === eqpName) {
              this.autoAffix[q].connected = eqpCon
            }
          }
        }
        if (inspectName === 'APP AOI') {
          let r = 0
          for (; r < this.appAoi.length; r++) {
            if (this.appAoi[r].name === eqpName) {
              this.appAoi[r].connected = eqpCon
            }
          }
        }
        if (inspectName === 'Auto Packing') {
          let s = 0
          for (; s < this.autoPacking.length; s++) {
            if (this.autoPacking[s].name === eqpName) {
              this.autoPacking[s].connected = eqpCon
            }
          }
        }
      }
      if (topic === 'CurrentCapacity') {
        var unitName = msg['pub']['content']['UnitName']
        var currentCapacity = msg['pub']['content']['CurrentCapacity']
        if (unitName === 'PTAOI_UNIT1') {
          this.ptAoi[0].capacity = currentCapacity
        }
        if (unitName === 'PTAOI_UNIT2') {
          this.ptAoi[1].capacity = currentCapacity
        }
        if (unitName === 'PTAOI_UNIT3') {
          this.ptAoi[2].capacity = currentCapacity
        }
        if (unitName === 'PTAOI_UNIT4') {
          this.ptAoi[3].capacity = currentCapacity
        }
        if (unitName === 'BLUAOI_UNIT1') {
          this.bluAoi[0].capacity = currentCapacity
        }
        if (unitName === 'BLUAOI_UNIT2') {
          this.bluAoi[1].capacity = currentCapacity
        }
        if (unitName === 'BLUAOI_UNIT3') {
          this.bluAoi[2].capacity = currentCapacity
        }
        if (unitName === 'BLUAOI_UNIT4') {
          this.bluAoi[3].capacity = currentCapacity
        }
        if (unitName === 'AutoAssy_UNIT1') {
          this.autoAssy[0].capacity = currentCapacity
        }
        if (unitName === 'AutoAssy_UNIT2') {
          this.autoAssy[1].capacity = currentCapacity
        }
        if (unitName === 'FIAOI_UNIT1') {
          this.fiAoi[0].capacity = currentCapacity
        }
        if (unitName === 'FIAOI_UNIT2') {
          this.fiAoi[1].capacity = currentCapacity
        }
        if (unitName === 'FIAOI_UNIT3') {
          this.fiAoi[2].capacity = currentCapacity
        }
        if (unitName === 'FIAOI_UNIT4') {
          this.fiAoi[3].capacity = currentCapacity
        }
        if (unitName === 'FIAOI_UNIT5') {
          this.fiAoi[4].capacity = currentCapacity
        }
        if (unitName === 'FIAOI_UNIT6') {
          this.fiAoi[5].capacity = currentCapacity
        }
        if (unitName === 'AutoAffix_UNIT1') {
          this.autoAffix[0].capacity = currentCapacity
        }
        if (unitName === 'AutoAffix_UNIT2') {
          this.autoAffix[1].capacity = currentCapacity
        }
        if (unitName === 'AppAOI_UNIT1') {
          this.appAoi[0].capacity = currentCapacity
        }
        if (unitName === 'AppAOI_UNIT2') {
          this.appAoi[1].capacity = currentCapacity
        }
        if (unitName === 'AutoTape_UNIT1') {
          this.autoTape[0].capacity = currentCapacity
        }
        if (unitName === 'FilmAttach_UNIT1') {
          this.filmAttach[0].capacity = currentCapacity
        }
        if (unitName === 'AutoPacking_UNIT1') {
          this.autoPacking[0].capacity = currentCapacity
        }
      }
    },
    lineChange() {
      if (this.line === 11) {
        this.polTestIsHide = true
        this.ptAoiIsHide = true
        this.cfTestIsHide = true
        this.autoTapeIsHide = true
        this.autoAssyIsHide = true
        this.filmAttachIsHide = true
        this.autoAffixIsHide = true
        this.appAoiIsHide = true
        this.autoPackingIsHide = true
      }
    },
    getEQPList() {
      const InspectionLists = []
      getInspectionLists()
        .then(response => {
          const items = response.machines
          let i = 0
          const len = items.length
          for (; i < len; i++) {
            InspectionLists.push({ name: items[i].eqpName, connected: items[i].connected })
          }
          let j = 0
          const length = InspectionLists.length
          for (; j < length; j++) {
            var inspectName = InspectionLists[j].name.substring(0, InspectionLists[j].name.length - 3)
            if (inspectName === 'POL Test') {
              let a = 0
              for (; a < this.polTest.length; a++) {
                if (this.polTest[a].name === InspectionLists[j].name) {
                  this.polTest[a].connected = InspectionLists[j].connected
                }
              }
            }
            if (inspectName === 'PI') {
              let b = 0
              for (; b < this.pi.length; b++) {
                if (this.pi[b].name === InspectionLists[j].name) {
                  this.pi[b].connected = InspectionLists[j].connected
                }
              }
            }
            if (inspectName === 'PT') {
              let c = 0
              for (; c < this.panelTest.length; c++) {
                if (this.panelTest[c].name === InspectionLists[j].name) {
                  this.panelTest[c].connected = InspectionLists[j].connected
                }
              }
            }
            if (inspectName === 'FI AOI') {
              let d = 0
              for (; d < this.fiAoi.length; d++) {
                if (this.fiAoi[d].name === InspectionLists[j].name) {
                  this.fiAoi[d].connected = InspectionLists[j].connected
                }
              }
            }
            if (inspectName === 'FI TEST') {
              let e = 0
              for (; e < this.fiTest.length; e++) {
                if (this.fiTest[e].name === InspectionLists[j].name) {
                  this.fiTest[e].connected = InspectionLists[j].connected
                }
              }
            }
            if (inspectName === 'ST') {
              let f = 0
              for (; f < this.st.length; f++) {
                if (this.st[f].name === InspectionLists[j].name) {
                  this.st[f].connected = InspectionLists[j].connected
                }
              }
            }
            if (inspectName === 'VI Test') {
              let g = 0
              for (; g < this.vi.length; g++) {
                if (this.vi[g].name === InspectionLists[j].name) {
                  this.vi[g].connected = InspectionLists[j].connected
                }
              }
            }
            if (inspectName === 'RT') {
              let h = 0
              for (; h < this.rt.length; h++) {
                if (this.rt[h].name === InspectionLists[j].name) {
                  this.rt[h].connected = InspectionLists[j].connected
                }
              }
            }
            if (inspectName === 'BLU AOI') {
              let k = 0
              for (; k < this.bluAoi.length; k++) {
                if (this.bluAoi[k].name === InspectionLists[j].name) {
                  this.bluAoi[k].connected = InspectionLists[j].connected
                }
              }
            }
            if (inspectName === 'PT AOI') {
              let l = 0
              for (; l < this.ptAoi.length; l++) {
                if (this.ptAoi[l].name === InspectionLists[j].name) {
                  this.ptAoi[l].connected = InspectionLists[j].connected
                }
              }
            }
            if (inspectName === 'CF Test') {
              let m = 0
              for (; m < this.cfTest.length; m++) {
                if (this.cfTest[m].name === InspectionLists[j].name) {
                  this.cfTest[m].connected = InspectionLists[j].connected
                }
              }
            }
            if (inspectName === 'Auto Tape') {
              let n = 0
              for (; n < this.autoTape.length; n++) {
                if (this.autoTape[n].name === InspectionLists[j].name) {
                  this.autoTape[n].connected = InspectionLists[j].connected
                }
              }
            }
            if (inspectName === 'Auto Assy') {
              let o = 0
              for (; o < this.autoAssy.length; o++) {
                if (this.autoAssy[o].name === InspectionLists[j].name) {
                  this.autoAssy[o].connected = InspectionLists[j].connected
                }
              }
            }
            if (inspectName === 'Film Attach') {
              let p = 0
              for (; p < this.filmAttach.length; p++) {
                if (this.filmAttach[p].name === InspectionLists[j].name) {
                  this.filmAttach[p].connected = InspectionLists[j].connected
                }
              }
            }
            if (inspectName === 'Auto Affix') {
              let q = 0
              for (; q < this.autoAffix.length; q++) {
                if (this.autoAffix[q].name === InspectionLists[j].name) {
                  this.autoAffix[q].connected = InspectionLists[j].connected
                }
              }
            }
            if (inspectName === 'APP AOI') {
              let r = 0
              for (; r < this.appAoi.length; r++) {
                if (this.appAoi[r].name === InspectionLists[j].name) {
                  this.appAoi[r].connected = InspectionLists[j].connected
                }
              }
            }
            if (inspectName === 'Auto Packing') {
              let s = 0
              for (; s < this.autoPacking.length; s++) {
                if (this.autoPacking[s].name === InspectionLists[j].name) {
                  this.autoPacking[s].connected = InspectionLists[j].connected
                }
              }
            }
          }
        })
    },
    getCapacity() {
      GetCurrentCapacity().then(response => {
        var capacity = []
        capacity = response
        this.bluAoi[0].capacity = capacity.blu_aoi_unit1_cap
        this.bluAoi[1].capacity = capacity.blu_aoi_unit2_cap
        this.bluAoi[2].capacity = capacity.blu_aoi_unit3_cap
        this.bluAoi[3].capacity = capacity.blu_aoi_unit2_cap
        this.fiAoi[0].capacity = capacity.fi_aoi_unit1_cap
        this.fiAoi[1].capacity = capacity.fi_aoi_unit2_cap
        this.fiAoi[2].capacity = capacity.fi_aoi_unit3_cap
        this.fiAoi[3].capacity = capacity.fi_aoi_unit4_cap
        this.fiAoi[4].capacity = capacity.fi_aoi_unit5_cap
        this.fiAoi[5].capacity = capacity.fi_aoi_unit6_cap
        this.autoTape[0].capacity = capacity.auto_tape_unit1_cap
        this.filmAttach[0].capacity = capacity.film_attach_unit1_cap
        this.autoPacking[0].capacity = capacity.auto_packing_unit1_cap
        this.ptAoi[0].capacity = capacity.pt_aoi_unit1_cap
        this.ptAoi[1].capacity = capacity.pt_aoi_unit2_cap
        this.ptAoi[2].capacity = capacity.pt_aoi_unit3_cap
        this.ptAoi[3].capacity = capacity.pt_aoi_unit4_cap
        this.autoAssy[0].capacity = capacity.auto_assy_unit1_cap
        this.autoAssy[1].capacity = capacity.auto_assy_unit2_cap
        this.autoAffix[0].capacity = capacity.auto_affix_unit1_cap
        this.autoAffix[1].capacity = capacity.auto_affix_unit2_cap
        this.appAoi[0].capacity = capacity.app_aoi_unit1_cap
        this.appAoi[1].capacity = capacity.app_aoi_unit2_cap
      })
    }
  }
}
</script>

<style scoped>
  .box-card {
      width: 404px;
      height: 430px;
      float: left;
      margin: 5px;
    }
  .box-card-2 {
    width: 404px;
    height: 610px;
    float: left;
    margin: 5px;
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
