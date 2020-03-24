import { WEBSOCKET_URL } from '@/config/env.config'

export function initWebSocket (topic, url) {
  url = url || WEBSOCKET_URL
  url = url.replace('https://', 'wss://').replace('http://', 'ws://').format({topic})
  const websocket = new WebSocket(url)
  websocket.onopen = onWebSocketOpen
  websocket.onclose = onWebSocketClose
  websocket.onerror = onWebSocketError
  websocket.onmessage = onWebSocketMessage
  return websocket
}

export function onWebSocketOpen () {
  console.log('WebSocket Connected.')
}

export function onWebSocketClose (e) {
  console.log(`WebSocket Closed (${e.code}).`)
}

export function onWebSocketError () {
  console.log('WebSocket Connect Error.')
}

export function onWebSocketMessage (e) {
  console.log('WebSocket Receive Data.\n')
  console.log(e.data)
}
