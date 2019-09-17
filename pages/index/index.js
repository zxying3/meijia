//index.js
//获取应用实例
const app = getApp()
var fileData = require('../../utils/data.js')
Page({
  data: {
    banner_url: fileData.getBannerData(),
    nav_url: fileData.getIndexNavData(),
    getIndexNavSectionData: fileData.getIndexNavSectionData(),
    curNav: 1
  },
  //导航
  switchNav(event) {
    // console.log(event)
    this.setData({
      curNav: event.currentTarget.dataset.id
    })
  },

  // 详情
  navigate(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
      success: function() {
        console.log(e)
      }
    })
  },
  // 预约
  book(){
    // console.log(111)
    wx.navigateTo({
      url: '../book/book',
    })
  },
  onLoad: function() {
    // console.log(this.data.getIndexNavSectionData)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '美甲商城',
      imageUrl: "../../images/banner2.png"
    }
  }
})