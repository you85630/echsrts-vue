import router from '../../router'

export default {
  state: {
    nowTab: '',
    activeName: '',
    tabList: [],
    breadcrum: [],
    nowOpen: []
  },
  getters: {
    nowTab: state => state.nowTab,
    activeName: state => state.activeName,
    tabList: state => state.tabList,
    breadcrum: state => state.breadcrum,
    nowOpen: state => state.nowOpen
  },
  actions: {
    goHome ({commit}) {
      commit('goHome')
    },
    addTabs ({commit}, key) {
      commit('addTabs', key)
    },
    linkTabs ({commit}, key) {
      commit('linkTabs', key)
    },
    closeTabs ({commit}, key) {
      commit('closeTabs', key)
    },
    removeTabs ({commit}, key) {
      commit('removeTabs', key)
    },
    defaultTabList ({commit}, key) {
      commit('defaultTabList', key)
    }
  },
  mutations: {
    // 跳转主页
    goHome (state) {
      state.nowOpen = []
      state.breadcrum = []
      state.tabList = []
      state.activeName = ''
      state.nowTab = '/home/index'
      router.push('/home/index')
      this._vm.VueCookie.delete('TAB-LINK')
      this._vm.VueCookie.delete('TAB-TABLIST')
    },
    // 添加tab
    addTabs (state, key) {
      let list = this.state.login.Menu
      for (let i = 0; i < list.length; i++) {
        const element = list[i].children
        for (let j = 0; j < element.length; j++) {
          const e = element[j].children
          for (let k = 0; k < e.length; k++) {
            const c = e[k]
            if (c.id === key) {
              c.breadcrum = [list[i].label, element[j].label, c.label]
              this._vm.utils.addNewTabs(c)
            }
          }
        }
      }
    },
    // 切换tab
    linkTabs (state, item) {
      this._vm.utils.addNewTabs(item)
    },
    // 关闭tab
    closeTabs (state, item) {
      state.tabList = item
      if (!item.length) {
        state.tabList = []
        state.breadcrum = []
        state.activeName = 0
        state.nowTab = '/home/index'
        router.push('/home/index')
        this._vm.VueCookie.delete('TAB-LINK')
        this._vm.VueCookie.delete('TAB-TABLIST')
      }
    },
    // 删除tab
    removeTabs (state, item) {
      state.tabList = item
      if (!item.length) {
        state.tabList = []
        state.breadcrum = []
        state.activeName = 0
        state.nowTab = '/home/index'
        router.push('/home/index')
        this._vm.VueCookie.delete('TAB-LINK')
        this._vm.VueCookie.delete('TAB-TABLIST')
      } else {
        state.tabList = item
        let last = item[item.length - 1]
        this._vm.utils.addNewTabs(last)
      }
    },
    // 默认tab
    defaultTabList (state, list) {
      state.tabList = list
    }
  }
}
