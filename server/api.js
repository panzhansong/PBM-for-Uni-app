const serviceModule = {
  //接口地址
  // baseURL: process.env.NODE_ENV === 'production' ?
  //   "http://api.pbm-asia.com" :
  //   "http://api.pbm-asia.com",

  // 测试地址
  baseURL: process.env.NODE_ENV === 'production' ?
  "http://test.yuediankeji.com" :
  "http://test.yuediankeji.com",

  // 前端地址
  webUrl: 'http://h5.pbm-asia.com',

  // 注册
  register: {
    url: '/api/anon/register',
    method: 'post'
  },
  // 发送短信
  sms: {
    url: '/api/anon/sendPhoneCode',
    method: 'post'
  },
  // 获取注册图片验证码
  getRegisterCode: {
    url: '/api/anon/getRegisterCode',
    method: 'post'
  },
  // 忘记密码
  forgetPassword: {
    url: 'api/anon/updatePwdForget',
    method: 'post'
  },
  // 登录
  login: {
    url: '/api/anon/login',
    method: 'post'
  },
  // 获取人脸识别url
  getH5FaceUrl: {
    url: '/api/auth/getH5FaceUrl',
    method: 'post'
  },
  // 人脸识别状态验证
  identificationH5: {
    url: '/api/auth/identificationH5',
    method: 'post'
  },
  // 获取个人用户信息
  getCustInfo: {
    url: '/api/cust/getCustInfo',
    method: 'post'
  },
  // 首页数据
  getIndex: {
    url: '/api/anon/basic/getHomePriceList',
    method: 'post'
  },
  // 矿机列表
  getMinerList: {
    url: '/api/miner/getMinerList',
    method: 'post'
  },
  // 兑换矿机
  exchangeMiner: {
    url: '/api/miner/exchangeMiner',
    method: 'post'
  },
  // 领取矿机奖励
  receiveEarnings: {
    url: '/api/miner/receiveEarnings',
    method: 'post'
  },
  // 获取团队信息
  getTeam: {
    url: '/api/cust/getTeam',
    method: 'post'
  },
  // 保存用户信息
  updateUserPayInfo: {
    url: '/api/cust/updateUserPayInfo',
    method: 'post'
  },
  // 我的账本
  getProfitRecord: {
    url: '/api/cust/getProfitRecord',
    method: 'post'
  },
  // 公告
  getNoticeList: {
    url: '/api/anon/basic/getNoticeList',
    method: 'post'
  },
  // 修改登录密码
  updateLoginPwd: {
    url: '/api/cust/updateLoginPwd',
    method: 'post'
  },
  // 修改交易密码
  updatePayPwd: {
    url: '/api/cust/updatePayPwd',
    method: 'post'
  },
  // 首页数据
  getHomePage: {
    url: '/api/anon/basic/getHomePage',
    method: 'post'
  },
  //修改昵称
  updateNickName: {
    url: '/api/cust/updateUserInfo',
    method: 'post'
  },
  // 提币
  transferCoin: {
    url: '/api/account/transferCoin',
    method: 'post'
  },
  //转账
  transfer:{
    url:'/api/account/transferCoin',
    method:'post'
  },
  // 提币/冲币记录
  getExtractRecordList: {
    url: '/api/account/getExtractRecordList',
    method: 'post'
  },
  // 交易中心统计中心
  getOrderStatistics: {
    url: '/api/trade/getOrderStatistics',
    method: 'post'
  },
  // 交易中心订单列表
  getOrderList: {
    url: '/api/trade/getOrderList',
    method: 'post'
  },
  // 发布买单
  releaseOrder: {
    url: '/api/trade/releaseOrder',
    method: 'post'
  },
  // 卖出确认短信
  sendMsgCode: {
    url: '/api/trade/sendMsgCode',
    method: 'post'
  },
  // 售出确认
  confirmSell: {
    url: '/api/trade/confirmSell',
    method: 'post'
  },
  // 我的交易列表
  getTradeOrderList: {
    url: '/api/trade/getTradeOrderList',
    method: 'post'
  },
  // 确认放行
  confirmRecive: {
    url: '/api/trade/confirmRecive',
    method: 'post'
  },
  // 对方信息
  getOtherUserInfo: {
    url: '/api/trade/getOtherUserInfo',
    method: 'post'
  },
  // 确认支付
  confirmPay: {
    url: '/api/trade/confirmPay',
    method: 'post'
  },
  // 取消订单
  cancelOrder: {
    url: '/api/trade/cancelOrder',
    method: 'post'
  },
  // 签到
  signx: {
    url: '/api/cust/sign',
    method: 'post'
  },
  // 升级任务列表
  getLevelList: {
    url: '/api/cust/getLevelList',
    method: 'post'
  },
  // 直推任务列表
  getDirectTaskList: {
    url: '/api/miner/getDirectTaskList',
    method: 'post'
  },
  // 领取达人奖励
  recordLevelReward: {
    url: '/api/cust/recordLevelReward',
    method: 'post'
  },
  // 领取直推奖励
  directReward: {
    url: '/api/miner/directReward',
    method: 'post'
  },
  // 投诉
  complaint: {
    url: '/api/trade/complaint',
    method: 'post'
  },
  // 实名认证2
  submitIdentityInfo: {
    url: '/api/auth/submitIdentityInfo',
    method: 'post'
  },
  // 上传base64图片
  uploadTradeImage: {
    url: '/api/anon/basic/uploadTradeImage',
    method: 'post'
  },
  // 城市合伙人信息
  getCityInfo: {
    url: '/api/cityPartner/getCityInfo',
    method: 'post'
  },
  // 领取收益
  getProfits: {
    url: '/api/cityPartner/getProfits',
    method: 'post'
  },
  // 区块链浏览器
  getBlockBrowser: {
    url: '/api/anon/basic/getBlockBrowser',
    method: 'post'
  },
  // 服务商列表
  getServiceProviderList: {
    url: '/api/cust/getServiceProviderList',
    method: 'post'
  },
  // 提币记录
  getTransferList: {
    url: '/api/account/getTransferList',
    method: 'post'
  },
  // 支付绑定状态
  getBindUserInfo: {
    url: '/api/index/getBindUserInfo',
    method: 'post'
  },

}
const Api = {
  ...serviceModule
}

export default Api
