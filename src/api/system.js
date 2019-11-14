import { getAction } from '@/api/manage'

const getGraphicCode = () => getAction('/sys/captcha')

export {
  getGraphicCode
}