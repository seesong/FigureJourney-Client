//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  // 设置页面分享内容
  onShareAppMessage: function(res) {
    return {
      title: '还在为记录点滴发愁？快来记录~~',
      path: '/pages/index',
      imageUrl: '../../images/home.png',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  //事件处理函数
  addRecord: function() {
    wx.navigateTo({
      url: '../addrocord/addrocord'
    })
  },
  goToList: function() {
    wx.navigateTo({
      url: '../list/list'
    })
  },
  goToOwer: function() {
    wx.navigateTo({
      url: '../ower/ower'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
