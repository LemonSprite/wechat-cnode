'use strict';

const CNODE_URI = 'https://cnodejs.org/api/v1';

module.exports = {
  // 获取列表
  getTopics: (obj) => {
    wx.request({
      url: `${CNODE_URI}/topics`,
      success: (res) => {
        console.log(res);
      }
    })
  },

  // 获取详细内容
  getTopicDetail: () => {

  }
};
