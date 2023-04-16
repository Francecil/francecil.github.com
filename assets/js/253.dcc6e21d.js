(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{576:function(s,t,e){"use strict";e.r(t);var a=e(4),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"jsonp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsonp"}},[s._v("#")]),s._v(" jsonp")]),s._v(" "),t("p",[s._v("比如调用天气接口，正常 ajax 访问跨域url 是不行的，")]),s._v(" "),t("p",[s._v("主要是利用 script 标签可以跨域的原理")]),s._v(" "),t("p",[s._v("我们往 script url 上加上回调函数名和请求参数时")]),s._v(" "),t("blockquote",[t("p",[s._v("回调函数参数是约定值，不一定是 cb 也可以是 callback 看服务端是怎么处理的\n在提供参数后，服务端做了处理，后面返回一个可执行的js代码，一般是把响应结果放入回调函数中\n比如url = xxxx?cb=test&userId=1")])]),s._v(" "),t("p",[s._v("jsonp 可以返回这样一段代码")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xx"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("age")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("缺点就是只支持 get")]),s._v(" "),t("h2",{attrs:{id:"cors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[s._v("#")]),s._v(" cors")]),s._v(" "),t("p",[s._v("服务端设置 Access-Control-Allow-Origin： * or 某个域名")]),s._v(" "),t("p",[s._v("若要带 cookie （跨域请求接口所在域的 cookie）,需要：\n前端设置 xhr.withCredentials = true\n后端返回 Access-Control-Allow-Credentials: true")]),s._v(" "),t("p",[s._v("根据请求方法和请求头字段判断是否为简单请求")]),s._v(" "),t("p",[s._v("简单请求的话浏览器直接发跨域请求，否则的话得看服务端支不支持，会先发个预检请求，")]),s._v(" "),t("blockquote",[t("p",[s._v("带上 Access-Control-Request-Method （实际请求将用的方法）和 Access-Control-Request-Headers（实际请求将带的自定义头部）")])]),s._v(" "),t("p",[s._v("服务端返回自己支持的请求方法和请求头")]),s._v(" "),t("blockquote",[t("p",[s._v("Access-Control-Allow-Methods 和 Access-Control-Allow-Headers\n可以避免多次预检请求")])]),s._v(" "),t("p",[s._v("如果我们发起的请求满足条件的话，则可发起跨域请求")]),s._v(" "),t("p",[s._v("预检请求可以被缓存，下次访问相同请求（包括url参数）时，预检请求还在缓存就不会发起")]),s._v(" "),t("p",[s._v("https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS")]),s._v(" "),t("h2",{attrs:{id:"postmessage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postmessage"}},[s._v("#")]),s._v(" postMessage")]),s._v(" "),t("p",[s._v("允许非同源之间窗口的通信")]),s._v(" "),t("h2",{attrs:{id:"加代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加代理"}},[s._v("#")]),s._v(" 加代理")]),s._v(" "),t("h2",{attrs:{id:"websocket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[s._v("#")]),s._v(" websocket")]),s._v(" "),t("p",[s._v("WebSocket 使用上需要指定访问地址，所以肯定是可以跨域的")])])}),[],!1,null,null,null);t.default=r.exports}}]);