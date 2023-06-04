(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{890:function(t,s,a){"use strict";a.r(s);var e=a(27),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"preload简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preload简介"}},[t._v("#")]),t._v(" preload简介")]),t._v(" "),s("p",[t._v("一种资源预加载的方式。用于提高性能，方便开发人员控制资源加载。")]),t._v(" "),s("p",[t._v("preload 指示浏览器预先请求当前页面接下来会需要用到的资源。")]),t._v(" "),s("p",[t._v("在chrome中，采用 preload 预加载资源后，后续没有在对资源进行请求(3s)，控制台会提示说是否有必要预加载该资源。")]),t._v(" "),s("h1",{attrs:{id:"使用preload的几种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用preload的几种方式"}},[t._v("#")]),t._v(" 使用preload的几种方式")]),t._v(" "),s("h2",{attrs:{id:"方式1-html页面书写link标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式1-html页面书写link标签"}},[t._v("#")]),t._v(" 方式1：html页面书写link标签")]),t._v(" "),s("p",[s("code",[t._v('<link rel="preload" href="资源地址" as="script">')])]),t._v(" "),s("p",[t._v("as 属性告诉浏览器加载的是什么资源，"),s("a",{attrs:{href:"https://link.jianshu.com/?t=https://fetch.spec.whatwg.org/#concept-request-destination"}},[t._v('常见取值有："script","style","image","media","document"')])]),t._v(" "),s("p",[t._v("不加as参数，资源请求优先级和异步xhr一样，非常低。(新版chrome无as或错误值将不会进行preload)")]),t._v(" "),s("p",[t._v("对于字体文件"),s("code",[t._v('as="font"')]),t._v("，需要加上"),s("code",[t._v("crossorigin")]),t._v("属性: "),s("a",{attrs:{href:"https://drafts.csswg.org/css-fonts/#font-fetching-requirements"}},[t._v("fonts were fetched using anonymous mode CORS ")]),t._v(",\n否则接下来的字体资源请求会重新获取（二次获取）。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("font.woff2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("font"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("font/woff2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("crossorigin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("type和as有一样的作用，取值不一样")]),t._v(" "),s("blockquote",[s("p",[t._v("一行代码实现css懒加载")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("asyncstyle.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onload")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value javascript language-javascript"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stylesheet'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("响应式加载")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("map.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(max-width: 600px)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("map.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(min-width: 601px)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"方式2-js创建link标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式2-js创建link标签"}},[t._v("#")]),t._v(" 方式2：js创建link标签")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" elem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"link"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nelem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"href"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nelem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"as"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nelem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rel"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"preload"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"利用http响应头预加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用http响应头预加载"}},[t._v("#")]),t._v(" 利用http响应头预加载")]),t._v(" "),s("p",[t._v("在html页面的响应头中增加 Link 响应头，其内容为"),s("code",[t._v("<./js/image-optimizer.js>; rel=preload; as=script")])]),t._v(" "),s("p",[t._v("在html文档下载完毕时，则会进行"),s("code",[t._v("./js/image-optimizer.js")]),t._v("的预加载")]),t._v(" "),s("blockquote",[s("p",[t._v("本地利用 fiddler4做个测试")])]),t._v(" "),s("ol",[s("li",[t._v("输入bpu localhost/test.html命令 拦截测试页面html请求，此时可以进行请求头和内容的修改")]),t._v(" "),s("li",[t._v("点击 "),s("em",[t._v("Break on Response")]),t._v(" 按钮 发起请求，并拦截响应，此处我们对响应头进行内容添加")]),t._v(" "),s("li",[t._v("点击 "),s("em",[t._v("Run to Completino")]),t._v(" 按钮,返回响应。")])]),t._v(" "),s("h1",{attrs:{id:"浏览器兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器兼容性"}},[t._v("#")]),t._v(" 浏览器兼容性")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://caniuse.com/#search=preload"}},[t._v("chrome 50+,safari 11+等")])]),t._v(" "),s("blockquote",[s("p",[t._v("检测"),s("code",[t._v('<link rel="preload">')]),t._v("是否被支持")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("preloadSupported")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" link "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" relList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" link"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("relList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("relList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("relList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("supports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" relList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("supports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'preload'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h1",{attrs:{id:"与-prefetch-的异同点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与-prefetch-的异同点"}},[t._v("#")]),t._v(" 与 prefetch 的异同点")]),t._v(" "),s("h2",{attrs:{id:"区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),s("p",[t._v("当前页面必要资源则采用"),s("code",[t._v("preload")]),t._v(",将来页面使用的资源采用"),s("code",[t._v("prefetch")])]),t._v(" "),s("p",[t._v("A页面发起 a.js 的 prefetch 预加载，在请求过程中此时调转到B页面，a.js 请求不会中断，而换成 preload预加载则请求会中断。")]),t._v(" "),s("h2",{attrs:{id:"共通点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#共通点"}},[t._v("#")]),t._v(" 共通点")]),t._v(" "),s("blockquote",[s("p",[t._v("Chrome 有四种缓存: HTTP 缓存，内存缓存，Service Worker 缓存和 Push 缓存。preload 和 prefetch 都被存储在 HTTP 缓存中。")]),t._v(" "),s("p",[t._v("当一个资源被 preload 或者 prefetch 获取后，它可以从 HTTP 缓存移动至渲染器的内存缓存中。如果资源可以被缓存（比如说存在有效的cache-control 和 max-age），它被存储在 HTTP 缓存中可以被现在或将来的任务使用，如果资源不能被>缓存在 HTTP 缓存中，作为代替，它被放在内存缓存中直到被使用。")])]),t._v(" "),s("h2",{attrs:{id:"注意点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意点"}},[t._v("#")]),t._v(" 注意点")]),t._v(" "),s("ol",[s("li",[t._v("当prefetch和preload预加载同一个资源时，实际会产生两次下载")])]),t._v(" "),s("h2",{attrs:{id:"chrome-对于-preload-和-prefetch-的网络优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chrome-对于-preload-和-prefetch-的网络优先级"}},[t._v("#")]),t._v(" Chrome 对于 preload 和 prefetch 的网络优先级？")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://www.w3cplus.com/sites/default/files/blogs/2017/1708/preload-6.jpeg"}}),t._v("\n(来源：https://docs.google.com/document/d/1bCDuq9H1ih9iNjgzyAL0gpwNFiEP4TZS-YLRp_RuMlc/edit#)")]),t._v(" "),s("blockquote",[s("p",[t._v("perload利用as或type来表示请求资源的优先级。")])]),t._v(" "),s("p",[t._v("按DevTools的标准，as取值对应的优先级如下：")]),t._v(" "),s("ul",[s("li",[t._v("style--\x3eHighest")]),t._v(" "),s("li",[t._v("script,font--\x3eHigh")]),t._v(" "),s("li",[t._v("image--\x3eLow")])]),t._v(" "),s("p",[t._v("Prefetch的优先级为 Lowest")]),t._v(" "),s("p",[t._v("从该表得到的其他信息：")]),t._v(" "),s("ol",[s("li",[t._v("第一张图片预加载之前发起的脚本请求优先级为 High")]),t._v(" "),s("li",[t._v("第一张图片预加载之后发起的脚本请求优先级为 Medium")]),t._v(" "),s("li",[t._v("异步脚本请求优先级为 Low")]),t._v(" "),s("li",[t._v("视口图片比非视口图片的请求优先级高")])]),t._v(" "),s("p",[t._v("图片预加载之前："),s("code",[t._v("script节点")]),t._v("在dom解析时处于图片节点之前")]),t._v(" "),s("h1",{attrs:{id:"dns-prefetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-prefetch"}},[t._v("#")]),t._v(" DNS prefetch")]),t._v(" "),s("p",[t._v("预解析 DNS")]),t._v(" "),s("p",[t._v("默认情况下 "),s("code",[t._v("dns prefetch")]),t._v(" 只对href属性的url地址进行dns预解析，但若当该网站处于https时则不会进行处理")]),t._v(" "),s("p",[t._v("可以通过"),s("code",[t._v('<meta http-equiv="x-dns-prefetch-control" content="on">')]),t._v("手动开启，此时https也可正常处理，可通过设置off来进行关闭，当设置off关闭后，再设置on就没有效果了。")]),t._v(" "),s("p",[t._v("利用 "),s("code",[t._v('<link rel="dns-prefetch" href="//host_name_to_prefetch.com">')]),t._v("手动预解析，一般用来预解析以下场景：请求重定向后的地址，js代码中的异步请求地址，图片请求地址，较晚被dom解析的script节点地址")]),t._v(" "),s("h1",{attrs:{id:"参考文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://www.w3.org/TR/preload/"}},[t._v("W3C preload 文档")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/"}},[t._v("Preload: What is it Good For?")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://dev.chromium.org/developers/design-documents/dns-prefetching"}},[t._v("chromium DNS Prefetching")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.w3cplus.com/performance/reloading/preload-prefetch-and-priorities-in-chrome.html"}},[t._v("Preload，Prefetch 和它们在 Chrome 之中的优先级")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://dev.chromium.org/developers/design-documents/dns-prefetching"}},[t._v("DNS Prefetching")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);