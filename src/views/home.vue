<template>
  <div class="home">
    <Layout>
      <Sider hide-trigger width="300" class="sider-box">
        <div class="logo" @click="goHome"><img src="./../assets/img/logo.png" alt=""></div>
        <Menu theme="dark" ref="echarts" width="auto" :active-name="activeName" :open-names="nowOpen" @on-select="addTabs">
          <MenuGroup  v-for="item in Menu"  :key="item.id" :title="item.label">
            <Submenu v-for="li in item.children" :key="li.id" :name="li.id" :title="li.label">
              <template slot="title"><Icon :type="li.icon" /> {{li.label}}</template>
              <MenuItem v-for="i in li.children" :key="i.id" :name="i.id"><Icon :type="li.icon" />{{i.label}}</MenuItem>
            </Submenu>
          </MenuGroup>
        </Menu>
      </Sider>
      <Layout>
          <Header class="header">
            <Breadcrumb>
              <BreadcrumbItem class="breadcrum-home"><Icon type="md-home" size="16" /> Home</BreadcrumbItem>
              <BreadcrumbItem v-for="(li,index) in breadcrum" :key="index">{{li}}</BreadcrumbItem>
            </Breadcrumb>
            <Dropdown trigger="click" @on-click="exit" class="user">
              <div class="name"><Avatar>{{user.name.slice(0,1)}}</Avatar><span>{{user.name}}</span><Icon size="14" type="ios-arrow-down" /></div>
              <DropdownMenu slot="list"><DropdownItem class="box">退出</DropdownItem></DropdownMenu>
            </Dropdown>
          </Header>
          <Content class="content">
            <tab-page :list="tabList" :active="nowTab"  @on-click="linkTabs" @on-remove="removeTabs" @on-close="closeTabs"></tab-page>
            <div class="content-box">
              <router-view/>
            </div>
          </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import tabPage from 'components/common/tab-page'
export default {
  components: {
    tabPage
  },
  computed: {
    ...mapGetters([
      'Menu',
      'activeName',
      'nowTab',
      'nowOpen',
      'tabList',
      'breadcrum',
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'exit',
      'addTabs',
      'linkTabs',
      'closeTabs',
      'removeTabs',
      'defaultTabList',
      'goHome',
      'User'
    ]),
    // 默认事件
    init () {
      let tabList = JSON.parse(this.VueCookie.get('TAB-TABLIST'))
      let active = JSON.parse(this.VueCookie.get('TAB-LINK'))
      if (tabList) {
        this.defaultTabList(tabList)
        if (active) {
          this.linkTabs(active)
        }
      } else {
        this.goHome()
      }
      // 获取用户信息
      this.User()
    },
    refresh () {
      this.$nextTick(() => {
        this.$refs.echarts.updateOpened()
        this.$refs.echarts.updateActiveName()
      })
    }
  },
  created () {
    this.init()
  },
  watch: {
    'activeName': 'refresh',
    'tabList': {
      handler: function (val) {
        this.VueCookie.set('TAB-TABLIST', JSON.stringify(val))
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
// .ivu-menu-dark,
// .sider-box{
//   background-color: #2d8cf0;
// }
.home{
  position: relative;
  overflow: hidden;
  border: 1px solid #d7dde4;
  border-radius: 4px;
  background: #f5f7f9;
  .logo{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    img{
      cursor: pointer;
      width: auto;
      height: 100%;
    }
  }
}
.header{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #dcdee2;
  background-color: #fff;
  box-shadow: 0 2px 5px #dcdee2;
  line-height: 1;
  .breadcrum-home{
    .ivu-icon{
      vertical-align: text-bottom;
    }
  }
  .user{
    cursor: pointer;
    .name{
      display: flex;
      align-items: center;
      flex-direction: row;
      span{
        margin: 0 5px;
        font-size: 14px;
      }
    }
    .box{
      text-align: center;
    }
  }
}
.content{
  margin-top: 20px;
  .content-box{
    box-sizing: border-box;
    margin: 20px;
    padding: 20px;
    // 页面默认高度
    height: 79.4vh;
    background-color: #fff;
    overflow-y: auto;
  }
}
</style>
