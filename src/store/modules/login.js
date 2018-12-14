import router from './../../router'
// import api from 'assets/js/api'

export default {
  state: {
    // 缓冲
    status: false,
    // 导航
    Menu: [
      {
        id: '1',
        icon: 'ios-albums',
        label: '初中考试质量监测',
        link: '/home/page1',
        children: [
          {
            id: '1-1',
            icon: 'ios-albums',
            label: '2017届学生八年级期末考试',
            link: '/home/page1-1',
            children: [
              {
                id: '1-1-1',
                icon: 'ios-albums',
                label: '参与考试学校/学生情况',
                link: '/home/page1-1-1'
              }, {
                id: '1-1-2',
                icon: 'ios-albums',
                label: '生源总体情况',
                link: '/home/page1-1-2'
              }, {
                id: '1-1-3',
                icon: 'ios-albums',
                label: '整体教育优质情况分析',
                link: '/home/page1-1-3'
              }, {
                id: '1-1-4',
                icon: 'ios-albums',
                label: '教育优质均衡情况分析',
                link: '/home/page1-1-4'
              }, {
                id: '1-1-5',
                icon: 'ios-albums',
                label: '学科情况概况分析',
                link: '/home/page1-1-5'
              }
            ]
          }, {
            id: '1-2',
            icon: 'ios-albums',
            label: '教育质量健康体检数据分析',
            link: '/home/page1-2',
            children: [
              {
                id: '1-2-1',
                icon: 'ios-albums',
                label: '参与考试学校/学生情况',
                link: '/home/page1-2-1'
              }, {
                id: '1-2-2',
                icon: 'ios-albums',
                label: '教育优质情况分析',
                link: '/home/page1-2-3'
              }, {
                id: '1-2-3',
                icon: 'ios-albums',
                label: '教育均衡情况分析',
                link: '/home/page1-2-3'
              }, {
                id: '1-2-4',
                icon: 'ios-albums',
                label: '学校类型分布',
                link: '/home/page1-2-4'
              }
            ]
          }
        ]
      }, {
        id: '2',
        icon: 'ios-albums',
        label: '小升初与将康体检数据分析',
        link: '/home/page1',
        children: [
          {
            id: '2-1',
            icon: 'ios-albums',
            label: '民办小升初结果分析',
            link: '/home/page2-1',
            children: [
              {
                id: '2-1-1',
                icon: 'ios-albums',
                label: '校参与评价人数情况',
                link: '/home/page2-1-1'
              }, {
                id: '2-1-2',
                icon: 'ios-albums',
                label: '学科I类学生分析',
                link: '/home/page2-1-2'
              }, {
                id: '2-1-3',
                icon: 'ios-albums',
                label: '区域I类学生分析',
                link: '/home/page2-1-3'
              }
            ]
          },
          {
            id: '2-2',
            icon: 'ios-albums',
            label: '教育质量健康体检数据分析',
            link: '/home/page2-2',
            children: [
              {
                id: '2-2-1',
                icon: 'ios-albums',
                label: '参与评价学校/学生情况',
                link: '/home/page2-2-1'
              }, {
                id: '2-2-2',
                icon: 'ios-albums',
                label: '区域教育质量优质指数分析',
                link: '/home/page2-2-2'
              }, {
                id: '2-2-3',
                icon: 'ios-albums',
                label: '区域教育质量均衡指数分析',
                link: '/home/page2-2-3'
              }, {
                id: '2-2-4',
                icon: 'ios-albums',
                label: '区域教育质量领先与建议关注分析',
                link: '/home/page2-2-4'
              }, {
                id: '2-2-5',
                icon: 'ios-albums',
                label: '学校教育质量分析',
                link: '/home/page2-2-5'
              }
            ]
          }
        ]
      }
    ],
    // 用户信息
    user: {},
    // 错误信息
    errMsg: ''
  },

  getters: {
    // 缓冲
    status: state => state.status,
    //  主导航
    Menu: state => state.Menu,
    // 用户信息
    user: state => state.user,
    // 错误信息
    errMsg: state => state.errMsg
  },

  actions: {
    // 登录
    login ({ commit }, key) {
      commit('login')
    },
    // 获取用户信息
    User ({ commit }, key) {
      commit('User')
    },
    // 退出
    exit ({ commit }) {
      commit('exit')
    }
  },

  mutations: {
    // 登录
    login (state, key) {
      state.user = {
        name: '小明',
        pic: 'http://you-img-box.oss-cn-shanghai.aliyuncs.com/img-5.jpeg'
      }
      this._vm.VueCookie.set('USER', JSON.stringify(state.user))
      router.push('/home/index')
    },
    // 获取用户信息
    User (state) {
      state.user = {
        name: '小明',
        pic: 'http://you-img-box.oss-cn-shanghai.aliyuncs.com/img-5.jpeg'
      }
    },

    // 退出
    exit (state) {
      state.user = {}
      router.push('/login')
      this._vm.VueCookie.delete('USER')
      this._vm.VueCookie.delete('TAB-LINK')
      this._vm.VueCookie.delete('TAB-TABLIST')
    }
  }
}
