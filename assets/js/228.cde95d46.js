(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{954:function(t,a,r){"use strict";r.r(a);var e=r(27),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"websocket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[t._v("#")]),t._v(" WebSocket")]),t._v(" "),a("h2",{attrs:{id:"同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步"}},[t._v("#")]),t._v(" 同步")]),t._v(" "),a("p",[t._v("首先说同步策略")]),t._v(" "),a("h3",{attrs:{id:"采用rtmp协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#采用rtmp协议"}},[t._v("#")]),t._v(" 采用RTMP协议")]),t._v(" "),a("p",[t._v("需要了解RTMP的协议，将音视频流(H264/SPEEX)构造成RTMP包，通过WebSocket发送到客户端\n这样的话，开发成本大，需要搭建一台用于发送RTMP包的WebSocket服务器而不是普通的RTMP服务器\n这东西网上基本没人做，搜到了一个别人做的demo，但是没有文档，实在难以研究,且不知性能如何")]),t._v(" "),a("p",[t._v("参考：http://my.oschina.net/langhuihui/blog")]),t._v(" "),a("h3",{attrs:{id:"开两个websocket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开两个websocket"}},[t._v("#")]),t._v(" 开两个WebSocket")]),t._v(" "),a("p",[t._v("我自己写的，从服务器端同时发送音视频流，由于音频方面我没做编解码直接推的PCM可能数据量较大，\n视频的话采用jsmpeg解码然后通过canvas绘制")]),t._v(" "),a("p",[t._v("这样的话没有做同步。")]),t._v(" "),a("p",[t._v("可以参考我上次发的fiiser技术研究：")]),t._v(" "),a("p",[t._v("同步：每5s发送一个同步指令给客户端进行同步(具体细节我就不懂了)")]),t._v(" "),a("p",[t._v("编解码:BroadwayJS+SpeexJS 大概做法和我差不多 就是编解码的效率问题了")]),t._v(" "),a("h2",{attrs:{id:"解码-软解码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解码-软解码"}},[t._v("#")]),t._v(" 解码-软解码")]),t._v(" "),a("p",[t._v("如果是采用RTMP同步，客户端还要去写JS解协议包(这方面不懂，资料也比较少)")]),t._v(" "),a("p",[t._v("然后一般都是利用BroadwayJS+SpeexJS来解码，这两个是利用Emscripten把原生代码编译成JS，比普通JS效率高")]),t._v(" "),a("h2",{attrs:{id:"渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染"}},[t._v("#")]),t._v(" 渲染")]),t._v(" "),a("p",[t._v("Canvas+AudioContext")]),t._v(" "),a("h2",{attrs:{id:"支持情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持情况"}},[t._v("#")]),t._v(" 支持情况")]),t._v(" "),a("p",[t._v("除IE外，其他大部分PC/Mobile浏览器(有的可能需要较新版本)都支持上述技术")]),t._v(" "),a("h2",{attrs:{id:"延迟及卡顿情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#延迟及卡顿情况"}},[t._v("#")]),t._v(" 延迟及卡顿情况")]),t._v(" "),a("p",[t._v("局域网内，我的方案基本没有延迟(200ms以内)和卡顿")]),t._v(" "),a("h2",{attrs:{id:"开发成本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发成本"}},[t._v("#")]),t._v(" 开发成本")]),t._v(" "),a("p",[t._v("首先同步本身不好做，还有编解码这块，需要编译上述两个解码库然后找下文档看怎么用，然后服务端还得构造相应编码的流来测试。")]),t._v(" "),a("p",[t._v("想做好一套解决方案一个人基本搞不定")]),t._v(" "),a("h1",{attrs:{id:"webrtc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webrtc"}},[t._v("#")]),t._v(" WebRTC")]),t._v(" "),a("h2",{attrs:{id:"同步及渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步及渲染"}},[t._v("#")]),t._v(" 同步及渲染")]),t._v(" "),a("p",[t._v("浏览器端已经做好同步策略，绑定"),a("code",[t._v("<video>")]),t._v("标签进行渲染")]),t._v(" "),a("h2",{attrs:{id:"解码-硬解码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解码-硬解码"}},[t._v("#")]),t._v(" 解码-硬解码")]),t._v(" "),a("h2",{attrs:{id:"支持情况-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持情况-2"}},[t._v("#")]),t._v(" 支持情况")]),t._v(" "),a("ul",[a("li",[t._v("PC:Chrome29和火狐47以上支持，Opera 39以上支持，IE内核的浏览器、Edge、Safari不支持")]),t._v(" "),a("li",[t._v("Mobile：Chrome for Android ，firefox for Android支持\nAndroid WebView(5.0以上支持，4.4部分手机(samsung htc等)支持)，手机自带浏览器(4.4以上部分厂商支持)\nQQ/UC/百度浏览器 正在测试，\nWP手机不支持(可以考虑后面兼容ORTC)")])]),t._v(" "),a("p",[t._v("参考 http://www.tutorialspoint.com/webrtc/webrtc_mobile_support.htm 并做了下验证")]),t._v(" "),a("h3",{attrs:{id:"question-苹果用户怎么使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#question-苹果用户怎么使用"}},[t._v("#")]),t._v(" Question:苹果用户怎么使用")]),t._v(" "),a("p",[t._v("苹果官方15年底声称Safari接下来会支持，有望在近两年得到使用")]),t._v(" "),a("p",[t._v("如果苹果用户想使用，可以下载 Bowser(http://www.openwebrtc.org/bowser/) 或者Chrome")])])}),[],!1,null,null,null);a.default=s.exports}}]);