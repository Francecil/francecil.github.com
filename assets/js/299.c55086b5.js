(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{625:function(a,t,s){"use strict";s.r(t);var v=s(4),_=Object(v.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("先通读一遍，重点章节再细读 2 遍")]),a._v(" "),t("h1",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[a._v("#")]),a._v(" 基本概念")]),a._v(" "),t("h2",{attrs:{id:"类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[a._v("#")]),a._v(" 类型")]),a._v(" "),t("p",[a._v("实体")]),a._v(" "),t("p",[a._v("值对象")]),a._v(" "),t("p",[a._v("服务")]),a._v(" "),t("h2",{attrs:{id:"模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式"}},[a._v("#")]),a._v(" 模式")]),a._v(" "),t("p",[a._v("工厂")]),a._v(" "),t("p",[a._v("聚合")]),a._v(" "),t("p",[a._v("仓储")]),a._v(" "),t("p",[a._v("提供参数给工厂，得到一个聚合；利用仓储保存聚合")]),a._v(" "),t("h2",{attrs:{id:"函数化思想"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数化思想"}},[a._v("#")]),a._v(" 函数化思想")]),a._v(" "),t("p",[a._v("每次改动，重新创建一个不可变对象")]),a._v(" "),t("h3",{attrs:{id:"函数式领域模式设计通用准则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数式领域模式设计通用准则"}},[a._v("#")]),a._v(" 函数式领域模式设计通用准则")]),a._v(" "),t("ul",[t("li",[a._v("将不可变状态建模为代数数据类型（ADT）")])]),a._v(" "),t("p",[a._v("用纯函数方法代理实例方法")]),a._v(" "),t("blockquote",[t("p",[a._v("面向对象不可变模型=》函数化抽象")])]),a._v(" "),t("p",[a._v("两个实体间都需要进行数据转换，则建立抽象服务")]),a._v(" "),t("blockquote",[t("p",[a._v("例如转账")])]),a._v(" "),t("p",[a._v("传入")]),a._v(" "),t("p",[a._v("异常是不纯粹的")]),a._v(" "),t("h3",{attrs:{id:"纯函数组合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#纯函数组合"}},[a._v("#")]),a._v(" 纯函数组合")]),a._v(" "),t("p",[a._v("组合器")]),a._v(" "),t("h3",{attrs:{id:"管理副作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理副作用"}},[a._v("#")]),a._v(" 管理副作用")]),a._v(" "),t("p",[a._v("副作用无可避免")]),a._v(" "),t("p",[a._v("与外部组件通信等")]),a._v(" "),t("p",[a._v("副作用抽离")]),a._v(" "),t("h2",{attrs:{id:"响应式模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#响应式模型"}},[a._v("#")]),a._v(" 响应式模型")]),a._v(" "),t("p",[a._v("响应能力由 3 方面决定：")]),a._v(" "),t("ul",[t("li",[a._v("弹性")]),a._v(" "),t("li",[a._v("伸缩性")]),a._v(" "),t("li",[a._v("消息驱动")])]),a._v(" "),t("h3",{attrs:{id:"处理失败"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#处理失败"}},[a._v("#")]),a._v(" 处理失败")]),a._v(" "),t("p",[a._v("围绕失败做设计，提示弹性")]),a._v(" "),t("p",[a._v("如何处理失败？")]),a._v(" "),t("ol",[t("li",[a._v("每个存在异常的地方都做下异常处理：未实现「关注点分离」")]),a._v(" "),t("li",[a._v("一个或多个独立模块集中处理失败")])]),a._v(" "),t("p",[a._v("针对失败设计独立的处理模块")]),a._v(" "),t("p",[a._v("举例：")]),a._v(" "),t("h3",{attrs:{id:"伸缩性与消息驱动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#伸缩性与消息驱动"}},[a._v("#")]),a._v(" 伸缩性与消息驱动")]),a._v(" "),t("p",[a._v("减少模型组件间的耦合，异步消息进行通信")]),a._v(" "),t("p",[a._v("actor 模型")]),a._v(" "),t("h2",{attrs:{id:"事件驱动编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动编程"}},[a._v("#")]),a._v(" 事件驱动编程")]),a._v(" "),t("p",[a._v("自追踪模型")]),a._v(" "),t("h2",{attrs:{id:"函数式-响应式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数式-响应式"}},[a._v("#")]),a._v(" 函数式 + 响应式")]),a._v(" "),t("h1",{attrs:{id:"scale-与函数式领域模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scale-与函数式领域模型"}},[a._v("#")]),a._v(" scale 与函数式领域模型")]),a._v(" "),t("p",[a._v("纯函数无副作用，也叫引用透明")]),a._v(" "),t("h2",{attrs:{id:"领域行为纯函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#领域行为纯函数"}},[a._v("#")]),a._v(" 领域行为纯函数")]),a._v(" "),t("p",[a._v("函数组合优越性")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fn1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fn2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\nlist"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fn1 andThen fn2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// or")]),a._v("\nlist"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fn2 compose fn1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("第一种做法增加了中间态集合，若空间过大会有问题，")]),a._v(" "),t("p",[a._v("后面两种做法去除了中间态，带来性能上的优化")]),a._v(" "),t("h2",{attrs:{id:"代数数据类型-adt-与不变性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代数数据类型-adt-与不变性"}},[a._v("#")]),a._v(" 代数数据类型（ADT）与不变性")]),a._v(" "),t("h1",{attrs:{id:"设计函数式领域模型-重点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计函数式领域模型-重点"}},[a._v("#")]),a._v(" 设计函数式领域模型（重点）")]),a._v(" "),t("h2",{attrs:{id:"api-设计的代数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-设计的代数"}},[a._v("#")]),a._v(" API 设计的代数")]),a._v(" "),t("p",[a._v("OO 开发，先做接口设计再具体类实现")]),a._v(" "),t("p",[a._v("操作->(组合)->模块")])])}),[],!1,null,null,null);t.default=_.exports}}]);