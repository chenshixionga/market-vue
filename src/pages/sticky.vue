<template>
  <div class="sticky-container">
    <!-- <sticky className="sub-navbar">
      <el-dropdown trigger="click">
        <el-button plain>
          Platform<i class="el-icon-caret-bottom el-icon&#45;&#45;right"></i>
        </el-button>
        <el-dropdown-menu class="no-border" slot="dropdown">
          <el-checkbox-group v-model="platforms" style="padding: 5px 15px;">
            <el-checkbox v-for="item in platformsOptions" :label="item.key" :key="item.key">
              {{item.name}}
            </el-checkbox>
          </el-checkbox-group>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown trigger="click">
        <el-button plain>
          Link<i class="el-icon-caret-bottom el-icon&#45;&#45;right"></i>
        </el-button>
        <el-dropdown-menu class="no-padding no-border" style="width:300px" slot="dropdown">
          <el-input placeholder="Please enter the content" v-model="url">
            <template slot="prepend">Url</template>
          </el-input>
        </el-dropdown-menu>
      </el-dropdown>

      <div class="time-container">
        <el-date-picker v-model="time" type="datetime" :picker-options="pickerOptions" format="yyyy-MM-dd HH:mm:ss" placeholder="Release time">
        </el-date-picker>
      </div>

      <el-button style="margin-left: 10px;" type="success">publish
      </el-button>
    </sticky> -->
    <simple-sticky className="sub-navbar">
      <el-dropdown trigger="click">
        <el-button plain>
          Platform<i class="el-icon-caret-bottom el-icon--right"></i>
        </el-button>
        <el-dropdown-menu class="no-border" slot="dropdown">
          <el-checkbox-group v-model="platforms" style="padding: 5px 15px;">
            <el-checkbox v-for="item in platformsOptions" :label="item.key" :key="item.key">
              {{item.name}}
            </el-checkbox>
          </el-checkbox-group>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown trigger="click">
        <el-button plain>
          Link<i class="el-icon-caret-bottom el-icon--right"></i>
        </el-button>
        <el-dropdown-menu class="no-padding no-border" style="width:300px" slot="dropdown">
          <el-input placeholder="Please enter the content" v-model="url">
            <template slot="prepend">Url</template>
          </el-input>
        </el-dropdown-menu>
      </el-dropdown>

      <div class="time-container">
        <el-date-picker v-model="time" type="datetime" :picker-options="pickerOptions" format="yyyy-MM-dd HH:mm:ss" placeholder="Release time">
        </el-date-picker>
      </div>

      <el-button style="margin-left: 10px;" type="success">publish
      </el-button>
    </simple-sticky>

    <div class="components-container">
      <code>Sticky header</code>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
    </div>
  </div>
</template>


<script>
import Sticky from '@/components/Sticky'
import SimpleSticky from '@/components/SimpleSticky'

export default {
  name: 'sticky-demo',
  components: {
    SimpleSticky,
    Sticky },
  data() {
    return {
      teadfd:'',
      time: '',
      url: '',
      platforms: ['a-platform'],
      platformsOptions: [
        { key: 'a-platform', name: 'platformA' },
        { key: 'b-platform', name: 'platformB' },
        { key: 'c-platform', name: 'platformC' }
      ],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      }
    }
  }
}
</script>

<style scoped>
.components-container div {
  margin: 10px;
}

.time-container {
  display: inline-block;
}
.sticky-container >>> .sub-navbar {  /* 样式深入子组件*/
  background-color: rgba(197, 250, 195, 0.62);
  border-radius: 5px;
}
</style>
