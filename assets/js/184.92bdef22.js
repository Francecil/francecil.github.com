(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{507:function(t,e,r){"use strict";r.r(e);var s=r(4),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"order-by-优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#order-by-优化"}},[t._v("#")]),t._v(" order by 优化")]),t._v(" "),e("p",[t._v("如果有索引，就是 O(1)")]),t._v(" "),e("p",[t._v("没有索引的话，使用 filesort 文件内排序")]),t._v(" "),e("ul",[e("li",[t._v("双路排序")]),t._v(" "),e("li",[t._v("单路排序")])]),t._v(" "),e("p",[t._v("https://juejin.cn/post/6847902224786391048#heading-22")]),t._v(" "),e("p",[t._v("https://blog.csdn.net/SCT_T/article/details/78263414")]),t._v(" "),e("p",[t._v("保证 query 的内容足够少，能够在 sort buffer 中直接排（单路排序），这样速度比双路排序更快")]),t._v(" "),e("p",[t._v("总结：减小行查询大小，尽量走索引，能够走覆盖索引最佳，可适当增加sort buffer内存大小")]),t._v(" "),e("h1",{attrs:{id:"拓展阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[t._v("#")]),t._v(" 拓展阅读")]),t._v(" "),e("p",[t._v("https://www.itzhai.com/articles/how-sql-works-understand-the-essence-of-tuning-by-the-execution-principle.html")])])}),[],!1,null,null,null);e.default=n.exports}}]);