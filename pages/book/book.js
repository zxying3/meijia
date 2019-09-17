// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    range: [
      '青岛市金阳新区，李先生，电话：18797547888',
      '贵州市金阳新区，张先生，电话：18797547888',
      '太原市金阳新区，李先生，电话：18797547888',
    ],
    index: 0,
    date:'2019-10-10',
    time:'12:34'
  },
  changePeople(e){
    this.setData({
      index: e.detail.value
    })
  },
  changeDate(e){
    this.setData({
      date: e.detail.value
    })
  },
  changeTime(e){
    this.setData({
      time: e.detail.value
    })
  },
  submit(e) {
    // console.log(e)
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})