(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{907:function(t,a,s){"use strict";s.r(a);var e=s(27),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("Babel 是什么？")]),t._v(" "),a("blockquote",[a("p",[t._v("Babel 是将我们写的 ES6+ 代码，包括"),a("code",[t._v("语法层（比如 let、class）")]),t._v(" 和 "),a("code",[t._v("api 层（比如 Promise、Array.prototype.flat ）")]),t._v("，转换为向后兼容的代码的工具")])]),t._v(" "),a("p",[t._v("在使用 Babel 的过程中，或多或少会有这些疑问：")]),t._v(" "),a("ol",[a("li",[t._v("Babel 怎么用？它有哪些主要模块？")]),t._v(" "),a("li",[t._v("Babel 与 webpack 什么关系？如何单独使用 Babel？如何处理第三方依赖的？")]),t._v(" "),a("li",[t._v("Babel 与 TypeScript 是怎么配合的？")])]),t._v(" "),a("p",[t._v("我们带着这些问题开始本文~")]),t._v(" "),a("h1",{attrs:{id:"babel-的组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-的组成"}},[t._v("#")]),t._v(" Babel 的组成")]),t._v(" "),a("ul",[a("li",[t._v("@babel/preset-env")]),t._v(" "),a("li",[t._v("@babel/plugin-transform-runtime")])]),t._v(" "),a("h2",{attrs:{id:"babel-preset-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-preset-env"}},[t._v("#")]),t._v(" @babel/preset-env")]),t._v(" "),a("blockquote",[a("p",[t._v("详见官方文档：https://babeljs.io/docs/babel-preset-env")])]),t._v(" "),a("p",[t._v("智能预设，以供项目使用最新的 JavaScript ，包括语法以及"),a("strong",[t._v("可选的 api polyfill")]),t._v("。")]),t._v(" "),a("p",[t._v("包含三个关键配置：")]),t._v(" "),a("ul",[a("li",[t._v("targets: 指定目标浏览器环境配置，表示这些语法和 polyfill 需要在目标浏览器上可以无错运行。实际项目推荐使用 .browserslistrc 文件配置")]),t._v(" "),a("li",[t._v("useBuiltIns: 配置 polyfill 导入策略，包括：\n"),a("ul",[a("li",[t._v("false：不引入 polyfill，只转语法，默认值")]),t._v(" "),a("li",[t._v("entry：全量导入，严格来说，是导入 targets 所需 polyfill。\n"),a("ul",[a("li",[t._v("使用：除了配置外，还需要入口文件引入 "),a("code",[t._v("core-js")])]),t._v(" "),a("li",[t._v("缺点：包体积较大")]),t._v(" "),a("li",[t._v("优点：可以避免第三方包没有处理 polyfill 或者处理不当，导致引用异常")])])]),t._v(" "),a("li",[t._v("usage：按需导入。\n"),a("ul",[a("li",[t._v("使用：配置即可，无需手动引用模块，babel 会根据用户代码自动导入 polyfill")]),t._v(" "),a("li",[t._v("优点：按需导入包体积较小")]),t._v(" "),a("li",[t._v("缺点：无法处理第三方包的 polyfill 问题")]),t._v(" "),a("li",[t._v("注意：按需引入时，如果无法确定具体的原型方法，则都导入。比如 "),a("code",[t._v("t.includes")]),t._v(" 这段代码，不知道是 string 还是 array ，babel 会都导入")])])])])]),t._v(" "),a("li",[t._v("corejs：配置 corejs 的版本，是否使用提案特性（proposals）")])]),t._v(" "),a("h2",{attrs:{id:"babel-plugin-transform-runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-plugin-transform-runtime"}},[t._v("#")]),t._v(" @babel/plugin-transform-runtime")]),t._v(" "),a("blockquote",[a("p",[t._v("详见官方文档：https://babeljs.io/docs/babel-plugin-transform-runtime")])]),t._v(" "),a("p",[t._v("该插件主要为库开发而生，有两个特点：")]),t._v(" "),a("ol",[a("li",[t._v("为待 polyfill 的 api 创建沙盒环境，避免污染全局范围：比如库中使用了 Promise ，与外部项目的 Promise Polyfill 不兼容，那么就可以利用该插件给库用到的 Promise 进行沙盒转换，同时不影响外部的 Promise Polyfill")]),t._v(" "),a("li",[t._v("引用模块 "),a("code",[t._v("@babel/runtime")]),t._v(" 以避免编译重复输出：减少包体积")])]),t._v(" "),a("p",[t._v("然而，大多数第三方包并没有做 "),a("code",[t._v("transform-runtime")]),t._v(" 这个处理，主要有两个原因：")]),t._v(" "),a("ol",[a("li",[t._v("导致产物体积变大")]),t._v(" "),a("li",[t._v("三方包并不知道外部项目的目标环境，不知道哪些该转")])]),t._v(" "),a("p",[t._v("因此，第三方包一般只转语法，不转 api 。\n同时，大家都约定所用语法基于标准，仅当库所用 api 非标准时才自行加 runtime Polyfill。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[t._v("库一般不需要提供补丁，始终由应用方统一提供即可。")]),t._v(" "),a("li",[t._v("应用补丁，使用 @babel/preset-env + useBuiltIns ，根据兼容目标自动获取补丁")])]),t._v(" "),a("h1",{attrs:{id:"babel-与-webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-与-webpack"}},[t._v("#")]),t._v(" Babel 与 webpack")]),t._v(" "),a("p",[t._v("现在的项目中，好像用 Babel 的时候就得带上 webpack ，实际上不是的。")]),t._v(" "),a("p",[t._v("如果项目已经采用 webpack 等构建工具, 那么可以选择使用 babel-loader ，内部会获取文件内容并调用 "),a("code",[t._v("@babel/core")]),t._v(" 进行转换")]),t._v(" "),a("blockquote",[a("p",[t._v("推荐 babel 配置用 "),a("code",[t._v("babel.config.js")]),t._v(" 维护，打包配置用 webpack 维护")])]),t._v(" "),a("p",[t._v("如果不是标准项目，仅仅只是为了转换，那么可以选择使用 babel 命令")]),t._v(" "),a("blockquote",[a("p",[t._v("详见：https://babeljs.io/docs/usage")])]),t._v(" "),a("h2",{attrs:{id:"示例-babel-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-babel-项目"}},[t._v("#")]),t._v(" 示例 Babel 项目")]),t._v(" "),a("ol",[a("li",[t._v("安装依赖")])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--dev")]),t._v(" @babel/core @babel/cli @babel/preset-env\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("配置 babel")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("presets")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/preset-env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("targets")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("edge")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"17"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("firefox")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"60"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("chrome")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"67"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("safari")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ie")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useBuiltIns")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"usage"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("corejs")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.6.5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("编写代码，并执行命令转换")])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 src 目录下的 js 文件进行转换，并输出到 lib 目录")]),t._v("\n./node_modules/.bin/babel src --out-dir lib\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"babel-与第三方依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-与第三方依赖"}},[t._v("#")]),t._v(" Babel 与第三方依赖")]),t._v(" "),a("p",[t._v("babel 只处理单文件，因此如果要转译第三方依赖，以及其他文件，就需要用到打包器（比如 webpack）")]),t._v(" "),a("p",[t._v("注意 core-js 的代码逻辑，除了引入 "),a("code",[t._v("core-js/modules")]),t._v(" 的代码，还会引入众多 "),a("code",[t._v("core-js/internals")]),t._v(" 工具代码（这部分代码量还是挺多的）。")]),t._v(" "),a("h2",{attrs:{id:"将第三方依赖进行-babel-处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将第三方依赖进行-babel-处理"}},[t._v("#")]),t._v(" 将第三方依赖进行 babel 处理")]),t._v(" "),a("p",[t._v("默认情况下不对第三方依赖进行处理 "),a("strong",[t._v("（包括语法转译）")]),t._v(" ，即 exclude /node_modules/ 。")]),t._v(" "),a("p",[t._v("如果想要 babel 处理第三方模块，需要修改 exclude 逻辑：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("@gahing\\/test-pkg")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("注意：webpack 的 target 配置（比如 "),a("code",[t._v("['web','es5']")]),t._v("），只会作用于包裹代码，对第三方依赖的代码不生效。")]),t._v(" "),a("h1",{attrs:{id:"babel-与-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-与-typescript"}},[t._v("#")]),t._v(" Babel 与 TypeScript")]),t._v(" "),a("p",[t._v("对于 typescript 项目，编译采用 tsc 还是 babel？")]),t._v(" "),a("p",[t._v("直接说结论：")]),t._v(" "),a("ul",[a("li",[t._v("大部分项目用 tsc 足以，支持语法转译，polyfill 可以走 core-js 全量引入，担心体积太大可以用 "),a("code",[t._v("polyfill.io")]),t._v(" 这类在线方案")]),t._v(" "),a("li",[t._v("有草案阶段语法诉求，可以升级 tsc 版本实现支持；当然也可以走 babel 方案编译")]),t._v(" "),a("li",[t._v("如果走 babel 方案编译，需要注意 babel 主要针对单文件处理，部分 ts 语法无法正常转换")])]),t._v(" "),a("p",[t._v("更多细节可以看以下文章：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.logrocket.com/babel-vs-typescript-choosing-right-compiler-project/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel vs. TypeScript: Choosing the right compiler for your project"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/7084882650233569317",target:"_blank",rel:"noopener noreferrer"}},[t._v("编译 ts 代码用 tsc 还是 babel？"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6968636129239105549",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么说用 babel 编译 typescript 是更好的选择"),a("OutboundLink")],1)])]),t._v(" "),a("h1",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("h2",{attrs:{id:"q-如果第三方依赖没有转译-es5-webpack-打包时默认会处理么-会出现什么问题-怎么解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-如果第三方依赖没有转译-es5-webpack-打包时默认会处理么-会出现什么问题-怎么解决"}},[t._v("#")]),t._v(" Q: 如果第三方依赖没有转译 es5，webpack 打包时默认会处理么？会出现什么问题？怎么解决？")]),t._v(" "),a("p",[t._v("不会。将导致低版本浏览器解析报错甚至白屏。可以将该包加入 babel 编译")]),t._v(" "),a("h2",{attrs:{id:"q-如果项目-usebuiltins-配置按需加载-且项目代码中未使用-map-而第三方库使用了-map-目标兼容-ie11-会出现什么问题-怎么解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-如果项目-usebuiltins-配置按需加载-且项目代码中未使用-map-而第三方库使用了-map-目标兼容-ie11-会出现什么问题-怎么解决"}},[t._v("#")]),t._v(" Q：如果项目 useBuiltIns 配置按需加载，且项目代码中未使用 Map，而第三方库使用了 Map ，目标兼容 ie11 ，会出现什么问题？怎么解决？")]),t._v(" "),a("p",[t._v("将导致运行时报错。可以手动添加 Polyfill ，或者改用 entry 的 useBuiltIns 配置")]),t._v(" "),a("h2",{attrs:{id:"q-为什么不对第三方依赖全部重新-babel-处理下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-为什么不对第三方依赖全部重新-babel-处理下"}},[t._v("#")]),t._v(" Q：为什么不对第三方依赖全部重新 babel 处理下？")]),t._v(" "),a("p",[t._v("考虑到重新 babel 处理比较耗时，大多数业务对浏览器兼容性诉求没那么高，故通常不会这么做。")]),t._v(" "),a("p",[t._v("但实际上是可以这么做的，比较保险。此外也可以通过一些白屏检测方案来保证这件事")]),t._v(" "),a("h2",{attrs:{id:"q-如何避免不必要的-polyfill-加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-如何避免不必要的-polyfill-加载"}},[t._v("#")]),t._v(" Q：如何避免不必要的 Polyfill 加载？")]),t._v(" "),a("p",[t._v("有两种解决思路：")]),t._v(" "),a("ol",[a("li",[t._v("使用 polyfill.io 这类线上方案\n"),a("ul",[a("li",[t._v("原理：根据 UA 动态加载差异 Polyfill")]),t._v(" "),a("li",[t._v("优点：项目中仅需处理语法，无需处理 api polyyfill")]),t._v(" "),a("li",[t._v("缺点：项目代码中的语法还是得转译，转译语法执行性能相对较差")])])]),t._v(" "),a("li",[t._v("使用 @vitejs/plugin-legacy 的解决方案")])]),t._v(" "),a("ul",[a("li",[t._v("利用 script 的 module/nomodule 特性差异化加载，现代浏览器走 module 逻辑+剩余差异 Polyfill，传统浏览器走语法转译+Polyfill")]),t._v(" "),a("li",[t._v("优点：优先保证大多数现代浏览器的加载体验，少部分浏览器再走语法编译逻辑")]),t._v(" "),a("li",[t._v("缺点：产物文件较多；少部分版本的浏览器存在 ESM 文件重复加载的问题；发展时间短，可能有隐藏问题")]),t._v(" "),a("li",[t._v("更多细节可以看这篇文章："),a("a",{attrs:{href:"https://juejin.cn/post/7217449801633628215",target:"_blank",rel:"noopener noreferrer"}},[t._v("【原理揭秘】Vite 是怎么兼容老旧浏览器的？你以为仅仅依靠 Babel？"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"q-部署-polyfill-io-这类方案-需要注意什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-部署-polyfill-io-这类方案-需要注意什么"}},[t._v("#")]),t._v(" Q：部署 polyfill.io 这类方案，需要注意什么？")]),t._v(" "),a("p",[t._v("polyfill.io 根据 ua 对比自动下发差异，提供"),a("a",{attrs:{href:"https://github.com/JakeChampion/polyfill-service",target:"_blank",rel:"noopener noreferrer"}},[t._v("开源部署方案"),a("OutboundLink")],1),t._v("，使用时需要注意：")]),t._v(" "),a("ul",[a("li",[t._v("时刻关注 browserlist 变化")]),t._v(" "),a("li",[t._v("需要部署 CDN 边缘服务")]),t._v(" "),a("li",[t._v("异常 UA （比如国产浏览器）无法识别，只能走降级兜底策略")]),t._v(" "),a("li",[t._v("不能处理语法层面")])]),t._v(" "),a("h1",{attrs:{id:"最佳方案是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最佳方案是什么"}},[t._v("#")]),t._v(" 最佳方案是什么")]),t._v(" "),a("p",[t._v("目标：尽可能快的打包，尽可能少的加载产物，尽可能快的执行代码")]),t._v(" "),a("p",[t._v("一个终极方案是：")]),t._v(" "),a("ol",[a("li",[t._v("打包不处理 Polyfill ，走 "),a("code",[t._v("polyfill.io")]),t._v(" ：尽可能快的打包，尽可能少的加载产物")]),t._v(" "),a("li",[t._v("业务产物走 script 的 module/nomodule 特性差异化加载方案：尽可能快的执行代码")]),t._v(" "),a("li",[t._v("线上真机白屏检测卡点：避免第三方依赖语法和 api 缺失的报错问题")])]),t._v(" "),a("p",[t._v("当然，要完成这套方案成本较高，可以根据各自公司基建能力和业务诉求来做，最合适的才是最佳的。")]),t._v(" "),a("h1",{attrs:{id:"拓展阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[t._v("#")]),t._v(" 拓展阅读")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/58624930",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel学习系列"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5d7efbbb6fb9a06b2650c74a",target:"_blank",rel:"noopener noreferrer"}},[t._v("不要肆无忌惮地在你的项目中使用 ES78910 了"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);