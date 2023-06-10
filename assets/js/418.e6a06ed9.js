(window.webpackJsonp=window.webpackJsonp||[]).push([[418],{1144:function(s,a,t){"use strict";t.r(a);var e=t(27),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-文本删除线效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-文本删除线效果"}},[s._v("#")]),s._v(" 1. 文本删除线效果")]),s._v(" "),a("p",[s._v("在需要删除线效果的单行文本两侧加"),a("code",[s._v("~~")]),s._v("，例如")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("~~test~~\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("效果如下：")]),s._v(" "),a("p",[a("s",[s._v("test")])]),s._v(" "),a("p",[s._v("但对于多行文本，使用")]),s._v(" "),a("p",[s._v("~~test1")]),s._v(" "),a("p",[s._v("test2~~")]),s._v(" "),a("p",[s._v("我们发现没有效果，此时有两种方法，")]),s._v(" "),a("ol",[a("li",[s._v("每行都用"),a("code",[s._v("~~")]),s._v("包起来，即")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("~~test1~~\n\n~~test2~~\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("利用html的"),a("code",[s._v("<s>")]),s._v("删除线标签")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<s>test1\n\ntest2~~</s>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_2-区块引用的换行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-区块引用的换行"}},[s._v("#")]),s._v(" 2. 区块引用的换行")]),s._v(" "),a("p",[s._v("我们可以在文明前使用"),a("code",[s._v(">")]),s._v(" 来对文本样式进行特殊的展示，常用于引用、说明、标注，例如")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("效果如下：")]),s._v(" "),a("blockquote",[a("p",[s._v("test")])]),s._v(" "),a("p",[s._v("对于多行文本，使用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> test1\n> test2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("效果如下：")]),s._v(" "),a("blockquote",[a("p",[s._v("test1\ntest2")])]),s._v(" "),a("p",[s._v("我们发现 test1 test2处于同一行，解决方法有两种")]),s._v(" "),a("ol",[a("li",[s._v("加入空的"),a("code",[s._v(">")]),s._v("行")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> test1\n>\n> test2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("效果如下,会多一个空行：")]),s._v(" "),a("blockquote",[a("p",[s._v("test1")]),s._v(" "),a("p",[s._v("test2")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("行末加入"),a("code",[s._v("\\")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> test1\\\n> test2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("效果如下：")]),s._v(" "),a("blockquote",[a("p",[s._v("test1"),a("br"),s._v("\ntest2")])]),s._v(" "),a("p",[s._v("ps: 有些md解析器没有效果")]),s._v(" "),a("h2",{attrs:{id:"_3-点击展开效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-点击展开效果"}},[s._v("#")]),s._v(" 3. 点击展开效果")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<details>\n<summary>title</summary>\ncontent\n</details>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("效果如下:")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("点击展开")]),s._v(" "),a("p",[s._v("我是内容详情")])]),s._v(" "),a("h2",{attrs:{id:"_4-页内跳转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-页内跳转"}},[s._v("#")]),s._v(" 4. 页内跳转")]),s._v(" "),a("ol",[a("li",[s._v("先定义一个锚")])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("anchor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("使用链接跳转语法")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[点击跳转](#anchor)\nor\n<a href="#anchor">点击跳转</a>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("注意：")])]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("#")]),s._v(" 语法定义的各级标题，若标题为纯文本（没有使用md样式）且不带空格，该标题就是一个锚")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("## 前言\n\n## **内容** 1\n\n\n// 有效\n[点击跳转](#前言)\n// 无效\n[点击跳转](#**内容** 1)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"_5-行内代码中包含-字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-行内代码中包含-字符"}},[s._v("#")]),s._v(" 5. 行内代码中包含 "),a("code",[s._v("`")]),s._v(" 字符")]),s._v(" "),a("p",[s._v("行内代码的语法是 "),a("code",[s._v("`内容`")]),s._v(" ，如果里面的内容包含 "),a("code",[s._v("`")]),s._v(" 字符，不能直接使用 "),a("code",[s._v("`内`容`")]),s._v(" 语法, 会被识别为 "),a("code",[s._v("内")]),s._v("容` ，而不是 "),a("code",[s._v("内`容")]),s._v(" ,")]),s._v(" "),a("p",[s._v("此时有两种方案：")]),s._v(" "),a("ol",[a("li",[s._v("使用特殊字符 "),a("code",[s._v("ˋ")]),s._v(" 代替：其实不是同个字符，长相相似表达个意思即可，")]),s._v(" "),a("li",[s._v("使用 `` 将语句包裹，比如 ``内`容``，将被正确识别为 "),a("code",[s._v("内`容")]),s._v("。特别说明，如果 `` 直接连接内容的 ` 字符，中间需要加个空格避免识别失败")])]),s._v(" "),a("p",[s._v("同样的，对于代码块中，如果需要包含 "),a("code",[s._v("```")]),s._v(" 字符且前面没有前缀字符，不能这么写")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("```\n```\n```\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("需要前后包裹的 "),a("code",[s._v("`")]),s._v(" 使用和内容中出现的 ` 不同的数量，比如")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("````\n```\n````\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("将展示如下效果")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("```\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6"}},[s._v("#")]),s._v(" 6.")])])}),[],!1,null,null,null);a.default=n.exports}}]);