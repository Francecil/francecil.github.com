(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{372:function(s,t,a){"use strict";a.r(t);var e=a(4),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("本篇作为 Vue 源码解析的开篇，不会讲源码中的内容，谈谈我们如何查看和调试源码")]),s._v(" "),t("h2",{attrs:{id:"下载仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载仓库"}},[s._v("#")]),s._v(" 下载仓库")]),s._v(" "),t("p",[s._v("我们选择当前较为稳定的 "),t("a",{attrs:{href:"https://github.com/vuejs/vue/tree/v2.6.10",target:"_blank",rel:"noopener noreferrer"}},[s._v("v2.6.10"),t("OutboundLink")],1),s._v(" 分支")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--branch")]),s._v(" v2.6.10 https://github.com/vuejs/vue.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"安装依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[s._v("#")]),s._v(" 安装依赖")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"认识-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#认识-flow"}},[s._v("#")]),s._v(" 认识 Flow")]),s._v(" "),t("p",[s._v("由于代码中用了 Flow , 为了后续更方便的学习和调试代码，先了解下 Flow")]),s._v(" "),t("p",[s._v("Flow 与 TypeScript 类似，是一种 js 静态类型检测工具")]),s._v(" "),t("blockquote",[t("p",[s._v("至于两者的区别，我感觉 Flow 的侵入性较小， TypeScript 功能较强大")])]),s._v(" "),t("p",[s._v("在 js 文件开头添加")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* @flow */")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("就表明需要采用 Flow 检测这个文件")]),s._v(" "),t("h3",{attrs:{id:"一个简单的例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一个简单的例子"}},[s._v("#")]),s._v(" 一个简单的例子")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @flow")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("str")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world!'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("配置 Flow 后， 编辑器会提示说 "),t("code",[s._v("'hello world!' string. This type is incompatible with number")])]),s._v(" "),t("h3",{attrs:{id:"vs-code-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vs-code-配置"}},[s._v("#")]),s._v(" VS Code 配置")]),s._v(" "),t("p",[s._v("VS Code 自带检测工具，会与 Flow 冲突，导致打开 Vue 项目的时候各种报错。")]),s._v(" "),t("p",[s._v("因此需要进行工作区设置")]),s._v(" "),t("p",[t("code",[s._v(".vscode/setting.json")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"javascript.validate.enable"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("或者禁用内置 TS 拓展")]),s._v(" "),t("blockquote",[t("p",[s._v("查找内置拓展：搜索的时候加个 "),t("code",[s._v("@builtin")]),s._v(" 前缀，即 "),t("code",[s._v("@builtin TypeScript")])])]),s._v(" "),t("p",[s._v("至于 Flow 的其他配置，不是我们的重点，我们只需要阅读源码就够了")]),s._v(" "),t("h2",{attrs:{id:"项目结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[s._v("#")]),s._v(" 项目结构")]),s._v(" "),t("p",[s._v("参照 "),t("code",[s._v(".github/CONTRIBUTING.md")]),s._v(" 的 Project Structure 部分，翻译并增加部分说明后如下所示：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("├── scripts ------------------------------- 包含与构建相关的脚本和配置文件,主要看以下两个\n│   ├── alias.js -------------------------- 源码和测试中使用到的模块导入别名\n│   ├── config.js ------------------------- 生成 dist 目录下各种文件的构建配置\n├── dist ---------------------------------- 构建后文件的输出目录\n├── examples ------------------------------ 存放一些使用Vue开发的应用案例\n├── flow ---------------------------------- 全局加载的 Flow 类型声明\n├── packages ------------------------------ 单独分发的其他 NPM 包\n├── test ---------------------------------- 测试文件\n├── src ----------------------------------- 源码目录，基于 ES6 和 Flow 类型注释\n│   ├── compiler -------------------------- 编译器代码，用来将 template 编译为 render 函数\n│   │   ├── parser ------------------------ 存放将模板字符串转换成元素抽象语法树的代码\n│   │   ├── codegen ----------------------- 存放从抽象语法树(AST)生成render函数的代码\n│   │   ├── optimizer.js ------------------ 分析静态树，优化vdom渲染\n│   ├── core ------------------------------ 包含平台无关的，通用的运行时代码\n│   │   ├── observer ---------------------- 响应式实现，包含数据观测的核心代码\n│   │   ├── vdom -------------------------- 虚拟 DOM 的 creation 和 patching 相关代码\n│   │   ├── instance ---------------------- Vue 构造函数与原型方法\n│   │   ├── global-api -------------------- 将 Vue 构造函数挂载上静态方法和属性，如 Vue.set = xxx\n│   │   ├── components -------------------- 包含抽象出来的通用组件，目前只有 keep-alive\n│   ├── server ---------------------------- 服务端渲染(server-side rendering)的相关代码\n│   ├── platforms ------------------------- 不同平台特有的代码\n│   │   ├── weex -------------------------- weex平台支持\n│   │   ├── web --------------------------- web平台支持\n│   │   │   ├── entry-runtime.js ---------------- 运行时构建的入口\n│   │   │   ├── entry-runtime-with-compiler.js -- 独立构建版本的入口\n│   │   │   ├── entry-compiler.js --------------- vue-template-compiler 包的入口文件\n│   │   │   ├── entry-server-renderer.js -------- vue-server-renderer 包的入口文件\n│   ├── sfc ------------------------------- 包含单文件组件(.vue文件)的解析逻辑，用于vue-template-compiler包\n│   ├── shared ---------------------------- 整个代码库通用的代码,包含 constants 和 util\n├── types --------------------------------- 包含TypeScript类型定义 .d.ts ,用于支持 ts 开发\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("h2",{attrs:{id:"入手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#入手"}},[s._v("#")]),s._v(" 入手")]),s._v(" "),t("p",[s._v("拿到一个项目，我们第一反应是看 "),t("code",[s._v("package.json")]),s._v(" ，执行 "),t("code",[s._v("npm run dev")]),s._v(" 的时候做了什么？可以看到")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("rollup "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-w")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--environment")]),s._v(" TARGET:web-full-dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("根据 "),t("code",[s._v("scripts/config.js")]),s._v(" 指定的配置进行 "),t("a",{attrs:{href:"https://www.rollupjs.com/guide/",target:"_blank",rel:"noopener noreferrer"}},[s._v("rollup"),t("OutboundLink")],1),s._v(" 进行打包")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'web-full-dev'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("entry")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'web/entry-runtime-with-compiler.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("dest")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist/vue.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("format")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'umd'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("env")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'development'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("alias")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("he")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./entity-decoder'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    banner\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("入口为："),t("code",[s._v("src/platforms/web/entry-runtime-with-compiler.js")]),s._v(" "),t("br"),s._v("\n生成文件： "),t("code",[s._v("dist/vue.js")])]),s._v(" "),t("h2",{attrs:{id:"断点调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#断点调试"}},[s._v("#")]),s._v(" 断点调试")]),s._v(" "),t("p",[s._v("我们在 "),t("code",[s._v("scripts/config.js")]),s._v(" 中的 genConfig 方法中的 config 对象的 output 属性中加上")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sourcemap: true\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后执行 "),t("code",[s._v("npm run dev")]),s._v(" 进行打包")]),s._v(" "),t("p",[s._v("选择 examples 中的任意项目，修改 js 的引用为 "),t("code",[s._v('<script src="../../dist/vue.js"><\/script>')])]),s._v(" "),t("p",[s._v("之后在浏览器中打开 html 文件，由于开了 sourcemap ，我们即可使用浏览器的开发者工具进行断点调试")]),s._v(" "),t("h2",{attrs:{id:"规划"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#规划"}},[s._v("#")]),s._v(" 规划")]),s._v(" "),t("p",[s._v("下一篇文章，我们来谈谈， Vue 实例化的时候都发生了什么")]),s._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://juejin.im/post/5b38830de51d455888216675",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue源码阅读 - 文件结构与运行机制"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://chuchencheng.com/2019/01/10/Vue%E6%BA%90%E7%A0%81%E6%B5%8F%E8%A7%88%E7%AC%94%E8%AE%B0-0/#more",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue 源码浏览笔记"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);