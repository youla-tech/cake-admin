const DEV_BASE_API = 'http://localhost:9100/jeecg-boot'
const PRO_BASE_API = 'https://aliiot.on-bright.com/mock/13/pro'
const envConfig = {
  dev: {
    baseApi: DEV_BASE_API
  },
  prod: {
    baseApi: PRO_BASE_API
  }
}

export const WEBSOCKET_URL = 'https://aliiot.on-bright.com/pro/websocket/{topic}'

export function isProEnv () {
  return process.env.NODE_ENV === 'production'
}

export function getReqBaseUrl () {
  return isProEnv() ? envConfig.prod.baseApi : envConfig.dev.baseApi
}

export default envConfig
