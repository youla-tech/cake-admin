import { getRequestUrl } from '@/api/manage'

const getGraphicCode = () => getRequestUrl('/sys/captcha', {t: new Date().getTime()})

export {
  getGraphicCode
}