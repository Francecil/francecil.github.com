(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{861:function(a,s,e){"use strict";e.r(s);var t=e(27),n=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"发布前准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布前准备"}},[a._v("#")]),a._v(" 发布前准备")]),a._v(" "),s("h3",{attrs:{id:"npm-pack-查看哪些文件会被发送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-pack-查看哪些文件会被发送"}},[a._v("#")]),a._v(" npm pack 查看哪些文件会被发送")]),a._v(" "),s("p",[a._v("执行该命令后会生成一个 xxx.tgz 文件")]),a._v(" "),s("p",[a._v("这些要被打包发布的文件是通过以下命令筛选到的")]),a._v(" "),s("ol",[s("li",[a._v("package.json 的 files 配置（白名单模式）")]),a._v(" "),s("li",[a._v(".npmignore")]),a._v(" "),s("li",[a._v(".gitignore")])]),a._v(" "),s("p",[a._v("只要其中一个生效，就会忽略余下的配置，参考自"),s("a",{attrs:{href:"https://zellwk.com/blog/ignoring-files-from-npm-package/",target:"_blank",rel:"noopener noreferrer"}},[a._v("How to ignore files from your npm package"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("所以，files 配置"),s("code",[a._v('["lib"]')]),a._v(" 而 .npmignore 配置 "),s("code",[a._v("*.snap")]),a._v(" 并不会过滤掉 lib 目录下的 snap 文件")]),a._v(" "),s("p",[a._v("因为 第一项配置生效了 也就忽略第二项配置了")]),a._v(" "),s("p",[a._v("那需要怎么做呢？ files 配置"),s("code",[a._v('["lib"]')]),a._v(" 改为 "),s("code",[a._v('["lib","!*.snap"]')]),a._v(" 即可")]),a._v(" "),s("h3",{attrs:{id:"link"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[a._v("#")]),a._v(" link")]),a._v(" "),s("p",[a._v("npm link 发包前，先用本地项目连接调试下")]),a._v(" "),s("p",[a._v("npm link xxx 用测试项目链接待发布 npm 包")]),a._v(" "),s("h2",{attrs:{id:"发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[a._v("#")]),a._v(" 发布")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm publish 包名\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"撤销已发布的包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#撤销已发布的包"}},[a._v("#")]),a._v(" 撤销已发布的包")]),a._v(" "),s("p",[a._v("某个版本的包发布之后，不能再次发布相关版本的包。")]),a._v(" "),s("p",[a._v("如果发现有问题，只能升级包")]),a._v(" "),s("p",[a._v("不过可以进行撤回已发布的包（不提倡）")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm unpublish 包名\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("并且有要求：")]),a._v(" "),s("ol",[s("li",[a._v("24小时内上传的")]),a._v(" "),s("li",[a._v("即使撤回了，也不能再发这个版本的包")])]),a._v(" "),s("h2",{attrs:{id:"发布-beta-包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布-beta-包"}},[a._v("#")]),a._v(" 发布 beta 包")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" publish "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tag")]),a._v(" beta\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);