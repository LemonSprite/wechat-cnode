// pages/topics/topics.js
const CNODE_URL = 'https://cnodejs.org/api/v1';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '首页列表',
    topicsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTopics();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getTopics();
  },

  getTopics: function () {
    const self = this;
    wx.request({
      url: `${CNODE_URL}/topics`,
      success(res) {
        console.log(res);
        self.setData({
          topicsList: 1
        });
      },
      fail(err) {
        wx.showToast({title: err.message});      
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})