/* eslint-disable */
export default {
  // ws: [],
  globalCallback: null,
  websocket: null,

  initWebSocket: function (ip, port) { // 初始化weosocket
    var that = this
    if ('WebSocket' in window) {
      // ws地址
      var wsuri = 'ws://' + ip + ':' + port
      this.websocket = new WebSocket(wsuri)
      this.websocket.onmessage = function (e) {
        that.websocketonmessage(ip, e)
        // 此处可将ip改成wsuri, 已查看完整的url
      }
      this.websocket.onclose = function(e) {
        that.websocketclose(wsuri, e)
        // that.reconnect(ip, port, wsuri)
      }
      this.websocket.onopen = function (e) {
        that.websocketopen(wsuri, e)
      }
      // 连接发生错误的回调方法
      this.websocket.onerror = function (e) {
        // console.log(wsuri + ' WebSocket连接发生错误: ' + e)
        that.reconnect(ip, port, wsuri)
      }
      // let i = 0
      // for (;i < this.ws.length; i++) {
      //   if (this.ws[i].wsuri === wsuri) {
      //     this.ws[i].websocket = websocket
      //     break
      //   }
      // }
      // if (i === this.ws.length) {
      //   this.ws.push({ websocket: websocket, ip: ip, wsuri: wsuri })
      // }
    } else {
      console.log('您的浏览器不支持 WebSocket!')
    }
  },

  setCallback: function (callback) {
    this.globalCallback = callback
  },

  // 数据接收
  websocketonmessage: function (ip, e) {
    this.globalCallback(ip, e)
  },
  // 关闭
  websocketclose: function (wsuri, e) {
    // console.log(wsuri + 'connection closed (' + e.code + ')')
  },

  websocketopen: function (wsuri, e) {
    // console.log(wsuri + '连接成功')
    //subscribe all topics
    this.websocket.send(JSON.stringify({ sub: ['*'] }))
  },

  close: function () {
    // for (var s in this.ws) {
    //   this.ws[s].websocket.close()
    //   this.ws[s] = null
    // }
    // this.ws = null
    this.websocket = null
  },

  reconnect: function (ip, port, wsuri) {
    // 没连接上会一直重连，设置延迟避免请求过多
    var that = this
    var websockHere

    websockHere = this.websocket
    if (this.websocket.timer === undefined || this.websocket.timer === null) {
      var timer = setTimeout(function () {
        if (websockHere.websock.readyState == 2 || websockHere.websock.readyState == 3) {
          that.initWebSocket(ip, port)
          clearTimeout(websockHere.timer)
          websockHere.timer = null
        } else if (websockHere.websock.readyState == 1) {
          clearTimeout(websockHere.timer)
          websockHere.timer = null
        }
      }, 5000)
      websockHere.timer = timer
    }
  }
}
