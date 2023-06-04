(window.webpackJsonp=window.webpackJsonp||[]).push([[391],{1117:function(t,r,e){"use strict";e.r(r);var a=e(27),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),r("p",[t._v("推荐文章。。"),r("a",{attrs:{href:"https://juejin.im/post/5ba4a6b75188255ca1537b19",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入探究immutable.js的实现机制（二）"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("写的很明白了，本文简单做个记录")]),t._v(" "),r("h2",{attrs:{id:"基本数据结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本数据结构"}},[t._v("#")]),t._v(" 基本数据结构")]),t._v(" "),r("h3",{attrs:{id:"trie"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trie"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Trie",target:"_blank",rel:"noopener noreferrer"}},[t._v("Trie"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("前缀树，又称字典树")]),t._v(" "),r("p",[t._v("可以共用节点")]),t._v(" "),r("h3",{attrs:{id:"vector-trie"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vector-trie"}},[t._v("#")]),t._v(" Vector trie")]),t._v(" "),r("p",[t._v("Trie 没有修改能力，引入 Vector Head 进行结构共享")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/14/165d635ebb85e04d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),t._v(" "),r("p",[t._v("每次修改操作的时候， 我们复制从根到叶子节点的路径而不是直接修改它们，这样从两个根我们就可以访问到对数据不同时刻的两个快照。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://pic4.zhimg.com/v2-2b4c801a7b40eefcd4ee6767fb984fdf_b.webp",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"hash-array-mapped-trie"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hash-array-mapped-trie"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Hash_array_mapped_trie",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hash array mapped trie"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("取 2^5 作为树宽。 更新和查询的考量")]),t._v(" "),r("p",[t._v("Vector trie 会出现空值，将占用空间，我们需要采用新的数据机构")]),t._v(" "),r("h4",{attrs:{id:"_1-压缩树宽"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-压缩树宽"}},[t._v("#")]),t._v(" 1. 压缩树宽")]),t._v(" "),r("p",[t._v("4 bit 的 mask 子节点长度为4")]),t._v(" "),r("p",[t._v("例 mask 1001 ,表示 01 11 有值")]),t._v(" "),r("p",[t._v("利用 mask 进行位运算 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Hamming_weight",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hamming weight"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("n 表示第几个前缀 ， 统计 mask 上从最低位 至第 n 位 1 出现的次数，即前缀在压缩数组中的索引")])]),t._v(" "),r("p",[t._v("不采用高位还有一个原因是 mask 的位数不固定")]),t._v(" "),r("p",[t._v("增加属性的话，会调整数组的节点顺序，并重新计算 mask （或操作）")]),t._v(" "),r("h4",{attrs:{id:"_2-压缩树高"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-压缩树高"}},[t._v("#")]),t._v(" 2. 压缩树高")]),t._v(" "),r("p",[t._v("单链的话，去除中间节点。")]),t._v(" "),r("p",[t._v("如果新增节点，需要增加中间节点，其实就是还原之前被去除的中间节点")]),t._v(" "),r("p",[t._v("最终保持单链只有一级即可")]),t._v(" "),r("h4",{attrs:{id:"_3-trie-优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-trie-优化"}},[t._v("#")]),t._v(" 3. trie 优化")]),t._v(" "),r("p",[t._v("记录当前 trie 的高度")]),t._v(" "),r("p",[t._v("针对 List push 的优化 -- tail 节点")]),t._v(" "),r("h2",{attrs:{id:"要点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#要点"}},[t._v("#")]),t._v(" 要点")]),t._v(" "),r("h3",{attrs:{id:"hash-冲突"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hash-冲突"}},[t._v("#")]),t._v(" hash 冲突")]),t._v(" "),r("p",[t._v("保持在一个线性数组中，由于冲突概率不高，不再引入复杂的数据结构")]),t._v(" "),r("h3",{attrs:{id:"为何比-object-assign-好"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为何比-object-assign-好"}},[t._v("#")]),t._v(" 为何比 Object.assign 好")]),t._v(" "),r("p",[t._v("后者还会再次做个引用连接，对于大数据对象，引用连接也是有耗时的")]),t._v(" "),r("p",[t._v("如果是基本类型，还会重新赋值，也有耗时")]),t._v(" "),r("p",[t._v("而 immutable 也会对未变动节点做引用链接，但是由于设置了 32 的宽度，可以减少很多引用")]),t._v(" "),r("h2",{attrs:{id:"展望"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#展望"}},[t._v("#")]),t._v(" 展望")]),t._v(" "),r("h3",{attrs:{id:"利用-proxy-重写-immutable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#利用-proxy-重写-immutable"}},[t._v("#")]),t._v(" 利用 proxy 重写 immutable")]),t._v(" "),r("p",[t._v("在看过 seamless-immutable 的用法，是否可以用 Proxy 让用法更接近原生？")]),t._v(" "),r("p",[t._v("多个属性赋值的话可以先开启某个标记")]),t._v(" "),r("h2",{attrs:{id:"拓展阅读"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[t._v("#")]),t._v(" 拓展阅读")]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://github.com/dt-fe/weekly/issues/14",target:"_blank",rel:"noopener noreferrer"}},[t._v("Immutable 结构共享是如何实现的？"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/27133830",target:"_blank",rel:"noopener noreferrer"}},[t._v("精读 Immutable 结构共享"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://io-meter.com/2016/09/03/Functional-Go-persist-datastructure-intro/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Functional Go: 持久化数据结构简介"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://medium.com/@dtinth/immutable-js-persistent-data-structures-and-structural-sharing-6d163fbd73d2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Immutable.js, persistent data structures and structural sharing"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.slideshare.net/mohitthatte/a-deep-dive-into-clojures-data-structures-euroclojure-2015",target:"_blank",rel:"noopener noreferrer"}},[t._v("PPT: A deep dive into Clojure's data structures - EuroClojure 2015"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/20295971",target:"_blank",rel:"noopener noreferrer"}},[t._v("Immutable 详解及 React 中实践"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://idea.popcount.org/2012-07-25-introduction-to-hamt/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introduction to HAMT"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("【荐】"),r("a",{attrs:{href:"https://juejin.im/post/5ba4a6b75188255ca1537b19",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入探究immutable.js的实现机制（二）"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=s.exports}}]);