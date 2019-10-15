// mongo 数据库配置
module.exports = config => ({
  // mongo 配置
  mongoose: {
    url: 'mongodb://172.16.100.5:27017/api-mock'
  },
  // 密码加密的key
  md5Key: '123456',
  // 发送邮件配置
  transporter: {
    appName: 'ApiPlatform',
    host: 'smtp.exmail.qq.com',
    secure: true,
    port: 465,
    auth: {
      user: 'xxx@dxy.cn',
      pass: 'xxx'
    }
  }
})
