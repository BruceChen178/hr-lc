<template>
  <div class="navbar">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <breadcrumb class="breadcrumb-container"></breadcrumb>
    <div class="right-menu">
<!--      <template v-if="device!=='mobile'">-->
        <alarm class="right-menu-item hover-effect" />
        <error-log class="errLog-container right-menu-item hover-effect" />
        <screenfull class="right-menu-item hover-effect" />
        <lang-select class="right-menu-item hover-effect" />
<!--      </template>-->
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img class="user-avatar" :src="avatar">
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            Home
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">LogOut</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
    <div class="name-wrapper">
      <span>{{ nickname }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import LangSelect from '@/components/LangSelect'
import Alarm from '@/components/Alarms'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    LangSelect,
    Alarm
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'nickname'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    // logout() {
    //   this.$store.dispatch('LogOut').then(() => {
    //     location.reload() // 为了重新实例化vue-router对象 避免bug
    //   })
    // }
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  /*height: 50px;*/
  /*line-height: 50px;*/
  /*border-radius: 0px !important;*/
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
    /*line-height: 46px;*/
    /*height: 100%;*/
    /*float: left;*/
    /*cursor: pointer;*/
    /*transition: background .3s;*/
    /*-webkit-tap-highlight-color:transparent;*/

    /*&:hover {*/
    /*  background: rgba(0, 0, 0, .025)*/
    /*}*/
  }
  .breadcrumb-container {
    float: left;
  }
  /*.screenfull {*/
  /*  position: absolute;*/
  /*  right: 90px;*/
  /*  top: 16px;*/
  /*  color: red;*/
  /*}*/
  .name-wrapper {
    float: right;
    cursor: pointer;
    line-height: 50px;
    margin-right: 5px;
  }
  /*<!--.avatar-container {-->*/
  /*<!--  height: 50px;-->*/
  /*<!--  display: inline-block;-->*/
  /*<!--  position: absolute;-->*/
  /*<!--  right: 35px;-->*/
  /*<!--  .avatar-wrapper {-->*/
  /*<!--    cursor: pointer;-->*/
  /*<!--    margin-top: 5px;-->*/
  /*<!--    position: relative;-->*/
  /*<!--    .user-avatar {-->*/
  /*<!--      width: 40px;-->*/
  /*<!--      height: 40px;-->*/
  /*<!--      border-radius: 10px;-->*/
  /*<!--    }-->*/
  /*<!--    .el-icon-caret-bottom {-->*/
  /*<!--      position: absolute;-->*/
  /*<!--      right: -20px;-->*/
  /*<!--      top: 25px;-->*/
  /*<!--      font-size: 12px;-->*/
  /*<!--    }-->*/
  /*<!--  }-->*/
  /*<!--}-->*/

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

