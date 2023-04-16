(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{460:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("之前提到过实现长列表的方式：监听 scroll 事件，在回调中计算渲染起止项并插入 dom 树，即只渲染可视区域")]),t._v(" "),s("p",[t._v("实现中发现，有些情况下可能会出现短暂的白屏现象")]),t._v(" "),s("p",[t._v("本文就来谈谈白屏成因和解决方案")]),t._v(" "),s("h2",{attrs:{id:"白屏成因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#白屏成因"}},[t._v("#")]),t._v(" 白屏成因")]),t._v(" "),s("p",[t._v("造成滚屏有3种方式")]),t._v(" "),s("ul",[s("li",[t._v("输入事件，如鼠标滚轮，键盘方向键")]),t._v(" "),s("li",[t._v("拖动滚动条")]),t._v(" "),s("li",[t._v("代码控制 scrollTop")])]),t._v(" "),s("p",[t._v("每种方式，浏览器的内部处理都是不一样的")]),t._v(" "),s("h3",{attrs:{id:"输入事件滚动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入事件滚动"}},[t._v("#")]),t._v(" 输入事件滚动")]),t._v(" "),s("p",[t._v("先说交互事件，以鼠标滚轮(mousewheel)为例")]),t._v(" "),s("p",[t._v("大部分浏览器采用的是异步滚动模型。在该模型中，视觉滚动位置在合成器线程中更新，并在 scroll 回调执行前可见")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2016/02/apz.png",alt:"Smoother scrolling in Firefox 46 with APZ"}})]),t._v(" "),s("p",[t._v("内部执行顺序如下：")]),t._v(" "),s("ol",[s("li",[t._v("相关线程捕获到滚轮操作")]),t._v(" "),s("li",[t._v("通知合成器线程去滚动文档，包括更新滚动条位置")]),t._v(" "),s("li",[t._v("【事件循环1】执行滚轮事件回调")]),t._v(" "),s("li",[t._v("【事件循环1】执行 UI Render，触发 scroll 事件")]),t._v(" "),s("li",[t._v("【事件循环2】执行 scroll 事件回调")])]),t._v(" "),s("p",[t._v("在执行滚轮事件回调的时候，可能文档位置已经更新完毕")]),t._v(" "),s("p",[t._v("因此，当 scroll 事件回调执行太久，就会出现文档已经滚动了，但是新的可视区域列表还未计算出来并更新到页面上，白屏就此产生")]),t._v(" "),s("p",[t._v("我们可以禁用浏览器的异步滚动优化，即将滚动文档操作放到【事件循环1】的 UI Render 阶段去做")]),t._v(" "),s("blockquote",[s("p",[t._v("通过 passive=false 来实现\n也就是说滚动文档需要与主线程交互")])]),t._v(" "),s("p",[t._v("如果将原 scroll 事件的处理放到滚轮事件中处理的话， scrollTop 拿到的是之前的值（passive=false，浏览器并不知道是否要滚动，会不会被 prventDefault ）。所以事件回调保持不变")]),t._v(" "),s("p",[t._v("这样下来，下一次的滚动文档必须等待本次 scroll 事件回调执行完毕，"),s("strong",[t._v("减缓")]),t._v("了白屏现象，相应的，页面也显得没那么流畅")]),t._v(" "),s("p",[t._v("于是内部执行顺便变成如下：")]),t._v(" "),s("ol",[s("li",[t._v("相关线程捕获到滚轮操作")]),t._v(" "),s("li",[t._v("【事件循环1】执行滚轮事件回调")]),t._v(" "),s("li",[t._v("【事件循环1】执行 UI Render，触发 scroll 事件，通知合成器线程去滚动文档，包括更新滚动条位置")]),t._v(" "),s("li",[t._v("【事件循环2】执行 scroll 事件回调")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scroll"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" start "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模拟耗时任务")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mousewheel"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("passive")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("不过火狐中设置 "),s("code",[t._v("passive: false")]),t._v(" 没有效果，浏览器的异步滚动优化无法禁用")]),t._v(" "),s("p",[t._v("详情看 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Mozilla/Performance/Scroll-linked_effects",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scroll-linked_effects"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"拖动滚动条"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拖动滚动条"}},[t._v("#")]),t._v(" 拖动滚动条")]),t._v(" "),s("p",[t._v("与滚轮事件有些许不同，chrome 的拖动滚动条没有异步滚动优化")]),t._v(" "),s("p",[t._v("其执行顺序如下：")]),t._v(" "),s("ol",[s("li",[t._v("相关线程捕获到滚动条被拖动")]),t._v(" "),s("li",[t._v("【事件循环1】执行 scroll 事件回调")]),t._v(" "),s("li",[t._v("【事件循环1】执行 UI Render，通知合成器线程去滚动文档，包括更新滚动条位置")])]),t._v(" "),s("p",[t._v("效果就是卡一下，滚一下，滚过去的时候已经新的列表已经绘制完毕了，那么是不会有白屏问题的")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scroll"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" start "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模拟耗时任务")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("但是 Firefox 做了滚动优化，且不能禁用")]),t._v(" "),s("p",[t._v("导致 scroll 回调会在滚屏后执行，和上面输入事件效果一致，于是就出现了白屏")]),t._v(" "),s("h3",{attrs:{id:"代码控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码控制"}},[t._v("#")]),t._v(" 代码控制")]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("dom.scrollTop=xxx")]),t._v(" 进行自动滚动")]),t._v(" "),s("p",[t._v("一般是用来回滚列表显示某一项的")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scroll"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" start "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模拟耗时任务")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollingElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("发现 chrome 和 Firefox 此时的执行效果都一样，都是先执行 scroll 回调再滚动文档，没有什么异步滚动优化了。")]),t._v(" "),s("p",[t._v("这种情况下都不会出现白屏")]),t._v(" "),s("h2",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("p",[t._v("可以看到，chrome 的话只有输入事件可能导致白屏，且可以通过禁用滚动优化来减缓")]),t._v(" "),s("p",[t._v("而 Firefox 在输入事件和拖动滚动条的情况都会出现白屏，且基本不能解决")]),t._v(" "),s("p",[t._v("因此，我们只能提高 scroll 回调事件的执行效率，来减缓白屏的时长")]),t._v(" "),s("p",[t._v("目前有两个方向")]),t._v(" "),s("ol",[s("li",[t._v("算法优化")]),t._v(" "),s("li",[t._v("占位填充，通过防抖等滚动结束再计算")])]),t._v(" "),s("h3",{attrs:{id:"算法优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#算法优化"}},[t._v("#")]),t._v(" 算法优化")]),t._v(" "),s("p",[t._v("具体可以参考我写的 "),s("a",{attrs:{href:"https://juejin.im/post/5dea86f7f265da33a8758820",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端长列表原理及优化"),s("OutboundLink")],1),t._v(" 一文")]),t._v(" "),s("p",[t._v("有两种策略：一种是可变滚动条总高度采用树状数组优化；一种是固定滚动条高度，通过定位项等几何关系算出")]),t._v(" "),s("h3",{attrs:{id:"预填充-防抖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预填充-防抖"}},[t._v("#")]),t._v(" 预填充+防抖")]),t._v(" "),s("p",[t._v("在 scroll 回调中先做填充，并对计算具体列表操作做防抖")]),t._v(" "),s("p",[t._v("效果上可能不太好，比较适合列表项带网络请求的情况，可以减少无效的网络请求")]),t._v(" "),s("h2",{attrs:{id:"结语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),s("p",[t._v("因为很多都是浏览器自身的优化，不在规范范围内，本文较多结论是通过拓展阅读和实验结果得出，不保证正确。")]),t._v(" "),s("p",[t._v("欢迎指正~")]),t._v(" "),s("h2",{attrs:{id:"_2020-02-12-补充"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2020-02-12-补充"}},[t._v("#")]),t._v(" 2020/02/12 补充")]),t._v(" "),s("p",[t._v("scroll 回调的执行不是在下一轮事件循环中执行的，而是在上一轮的 UI Render 中执行的")]),t._v(" "),s("h2",{attrs:{id:"拓展阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[t._v("#")]),t._v(" 拓展阅读")]),t._v(" "),s("ol",[s("li",[t._v("https://hacks.mozilla.org/2016/02/smoother-scrolling-in-firefox-46-with-apz/")]),t._v(" "),s("li",[t._v("https://developers.google.com/web/updates/2018/09/inside-browser-part4")])])])}),[],!1,null,null,null);s.default=e.exports}}]);