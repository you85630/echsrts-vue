import store from './../../store'
import router from './../../router'
import VueCookie from 'vue-cookie'

export default {
  addNewTabs,
  closeTabs
}
// 添加标签
function addNewTabs (key) {
  let isBool = true
  let tab = store.state.home
  tab.nowTab = key.link
  tab.activeName = key.id
  tab.nowOpen[0] = key.id
  tab.breadcrum = key.breadcrum
  if (tab.tabList.length >= 1) {
    for (let i = 0; i < tab.tabList.length; i++) {
      const element = tab.tabList[i]
      if (element.link === tab.nowTab) {
        if (!element.more) {
          isBool = false
        } else {
          if (element.more === key.list.more) {
            isBool = false
          }
        }
      }
    }
  }

  if (isBool) {
    tab.tabList.push(key)
  }
  if (key.key_object) {
    router.push({path: key.link, query: {key_object: JSON.stringify(key.key_object)}})
  } else {
    router.push(key.link)
  }
  VueCookie.set('TAB-LINK', JSON.stringify(key))
}

// 关闭标签
function closeTabs () {
  let tab = store.state.home
  let nowList = []
  let active = tab.nowTab
  let list = tab.tabList

  for (let i = 0; i < list.length; i++) {
    const element = list[i]
    if (element.link !== active) {
      nowList.push(element)
    }
  }
  tab.tabList = nowList
}
