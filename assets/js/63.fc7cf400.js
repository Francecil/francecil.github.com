(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{389:function(s,n,a){"use strict";a.r(n);var t=a(4),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("本篇为 《你不知道的JavaScript（上）》 的读书笔记。")]),s._v(" "),n("p",[s._v("其实，很多情况下就是因为我们没有熟读规范，导致一些我们认为想当然的用法与实际大相径庭。")]),s._v(" "),n("p",[s._v("该书作者就讲述了这样一些用法，可以避免各个阶段的开发者踩坑。")]),s._v(" "),n("h1",{attrs:{id:"_1-作用域和闭包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-作用域和闭包"}},[s._v("#")]),s._v(" ① 作用域和闭包")]),s._v(" "),n("h2",{attrs:{id:"变量提升"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#变量提升"}},[s._v("#")]),s._v(" 变量提升")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("foo() //TypeError\nvar foo = function(){}\n/*\nfoo会被提升到全局，其运行顺序是这样的：\nvar foo\nfoo() //TypeError\nfoo = function(){}\n*/\n\nfoo() //ReferenceError\nlet foo = function(){}\n\nif(!obj in window){\n\tvar obj = 3 \n}\nconsole.log(obj)\n//obj编译的时候会被提到全局,实际效果是：\nvar obj\nif(!obj in window){\n\tobj = 3 \n}\nconsole.log(obj)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("h1",{attrs:{id:"作用域闭包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#作用域闭包"}},[s._v("#")]),s._v(" 作用域闭包")]),s._v(" "),n("p",[s._v("想用iife循环输出1~5")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("for(var i =1;i<=5;i++){\n\t(function(){\n\t\tsetTimeout(function(){console.log(i)},1000)\n\t})()\n}\n//输出5次6\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("这样是不行的，原因在于这个iife中的作用域是空的，setTimeout的执行顺序在循环之后，故又会去拿全局的i")]),s._v(" "),n("p",[s._v("所以需要传入当前的i到iife的作用域，setTimeout执行的时候就去取这个临时变量了")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("for(var i =1;i<=5;i++){\n\t(function(i){\n\t\tsetTimeout(function(){console.log(i)},1000)\n\t})(i)\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h1",{attrs:{id:"块作用域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#块作用域"}},[s._v("#")]),s._v(" 块作用域")]),s._v(" "),n("p",[s._v("想实现es6这样的效果")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("{\nlet a = 2;\nconsole.log( a ); // 2\n} console.log( a ); // ReferenceError\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("非es6环境下可以这样")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("try{throw undefined;}\ncatch(a){\n\ta = 2;\n\tconsole.log( a ); // 2\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);