(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{781:function(s,t,e){"use strict";e.r(t);var n=e(27),a=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("今天看文章 "),t("a",{attrs:{href:"https://github.com/lessfish/underscore-analysis/issues/1",target:"_blank",rel:"noopener noreferrer"}},[s._v("为什么用「void 0」代替「undefined」"),t("OutboundLink")],1),s._v(" 的时候，")]),s._v(" "),t("p",[s._v("作者提到，用 "),t("code",[s._v("void 0")]),s._v(" 替代 "),t("code",[s._v("undefined")]),s._v(" 的原因其中有一点是前者更短，更省空间。")]),s._v(" "),t("blockquote",[t("p",[s._v("当然最主要的原因还是 undefined 在局部作用域中可以被重写")])]),s._v(" "),t("p",[s._v("下面有人回复 "),t("code",[s._v("0.._")]),s._v(" 长度更短，结果也是 "),t("code",[s._v("undefined")]),s._v("。 后面解释说是相当于 "),t("code",[s._v("0['_']")]),s._v("，不过没有更深入的讨论了。")]),s._v(" "),t("p",[s._v("当时心中产生了几个问题：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("0.._")]),s._v(" 是如何隐式转换成 "),t("code",[s._v("undefined")]),s._v(" 的")]),s._v(" "),t("li",[s._v("为何（几乎）没有人采用 "),t("code",[s._v("0.._")]),s._v(" 的写法代替 "),t("code",[s._v("void 0")])])]),s._v(" "),t("h2",{attrs:{id:"_0-的隐式转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-的隐式转换"}},[s._v("#")]),s._v(" "),t("code",[s._v("0.._")]),s._v(" 的隐式转换")]),s._v(" "),t("h3",{attrs:{id:"词法分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#词法分析"}},[s._v("#")]),s._v(" 词法分析")]),s._v(" "),t("p",[s._v("对于10进制数字来说，后面接 "),t("code",[s._v(".")]),s._v(" 操作符，js 引擎并不知道该 "),t("code",[s._v(".")]),s._v(" 是小数点还是访问属性的 "),t("code",[s._v(".")]),s._v("，因此有如下规定：")]),s._v(" "),t("p",[s._v("前面的数字为10进制，已带小数点的，则该 "),t("code",[s._v(".")]),s._v(" 是访问属性，否则即为小数点；\n若不是10进制，则 "),t("code",[s._v(".")]),s._v(" 是访问属性")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出 undefined  相当于 (0.0)._ ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 相当于 (0.)._")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 前面为 8进制")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出 undefined")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 语法错误 .后面应该接数字")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'use strict'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Uncaught SyntaxError: Octal literals are not allowed in strict mode. 严格模式下不会解析成八进制")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[t("strong",[s._v("注")]),s._v("：以上是测试得出的结论，规范中没找到。")]),s._v(" "),t("p",[s._v("不过按编译原理的知识，引擎会先根据 "),t("a",{attrs:{href:"http://yanhaijing.com/es5/#65",target:"_blank",rel:"noopener noreferrer"}},[s._v("词法解析-数值字面量"),t("OutboundLink")],1),s._v(" 找到 "),t("code",[s._v("0.")]),s._v(" 这个数值字面量词法，接着才进行语法分析")]),s._v(" "),t("p",[s._v("同时 "),t("a",{attrs:{href:"http://yanhaijing.com/es5/#628",target:"_blank",rel:"noopener noreferrer"}},[s._v("附加语法-数值字面量"),t("OutboundLink")],1),s._v(" 中提到非 strict 模式下 NumericLiteral 才允许 OctalIntegerLiteral 八进制的词法")]),s._v(" "),t("h3",{attrs:{id:"语法分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法分析"}},[s._v("#")]),s._v(" 语法分析")]),s._v(" "),t("p",[s._v("接下来就是 "),t("strong",[s._v("为何数值字面量能够进行属性访问")]),s._v(" 的问题了。这是一个左值表达式。")]),s._v(" "),t("p",[t("a",{attrs:{href:"http://yanhaijing.com/es5/#162",target:"_blank",rel:"noopener noreferrer"}},[s._v("左值表达式"),t("OutboundLink")],1),s._v(" 语法,这里列举部分")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("LeftHandSideExpression :\nNewExpression\nCallExpression\n\nCallExpression :\nMemberExpression Arguments\nCallExpression Arguments\nCallExpression [ Expression ]\nCallExpression . IdentifierName\n\nMemberExpression :\nPrimaryExpression\nFunctionExpression\nMemberExpression [ Expression ]\nMemberExpression . IdentifierName\nnew MemberExpression Arguments\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[t("a",{attrs:{href:"http://yanhaijing.com/es5/#162",target:"_blank",rel:"noopener noreferrer"}},[s._v("左值表达式-属性访问"),t("OutboundLink")],1),s._v(" 有两者方式")]),s._v(" "),t("ul",[t("li",[s._v("MemberExpression . IdentifierName")]),s._v(" "),t("li",[s._v("MemberExpression [ Expression ]")])]),s._v(" "),t("p",[s._v("前者等同于 "),t("code",[s._v("MemberExpression [ <identifier-name-string> ]")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("<identifier-name-string>")]),s._v(" 是一个字符串字面量，它与 Unicode 编码后的 IdentifierName 包含相同的字符序列。")])]),s._v(" "),t("p",[s._v("对于 "),t("code",[s._v("MemberExpression [ Expression ]")]),s._v(" 表达式，其执行顺序如下：")]),s._v(" "),t("ol",[t("li",[s._v("令 baseReference 为解释执行 MemberExpression 的结果 .")]),s._v(" "),t("li",[s._v("令 baseValue 为 "),t("a",{attrs:{href:"http://yanhaijing.com/es5/#81",target:"_blank",rel:"noopener noreferrer"}},[s._v("GetValue"),t("OutboundLink")],1),s._v("(baseReference).")]),s._v(" "),t("li",[s._v("令 propertyNameReference 为解释执行 Expression 的结果 .")]),s._v(" "),t("li",[s._v("令 propertyNameValue 为 GetValue(propertyNameReference).")]),s._v(" "),t("li",[s._v("调用 "),t("a",{attrs:{href:"http://yanhaijing.com/es5/#114",target:"_blank",rel:"noopener noreferrer"}},[s._v("CheckObjectCoercible(baseValue)"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("li",[s._v("令 propertyNameString 为 ToString(propertyNameValue).")]),s._v(" "),t("li",[s._v("如果正在执行中的语法产生式包含在严格模式代码当中，令 strict 为 true, 否则令 strict 为 false.")]),s._v(" "),t("li",[s._v("返回一个 "),t("a",{attrs:{href:"http://yanhaijing.com/es5/#80",target:"_blank",rel:"noopener noreferrer"}},[s._v("引用类型"),t("OutboundLink")],1),s._v(" 的值。该引用类型，其基 (base) 值为 baseValue, 其引用名称（referenced name）为 propertyNameString, 严格模式标记为 strict.")])]),s._v(" "),t("p",[s._v("以 "),t("code",[s._v("0.._")]),s._v(" 为例，其等同于 "),t("code",[s._v("0['_']")]),s._v("，即 "),t("code",[s._v("MemberExpression = 0,Expression = '_'")]),s._v("，按以下步骤进行")]),s._v(" "),t("ol",[t("li",[s._v("baseReference = 0")]),s._v(" "),t("li",[s._v("baseValue = GetValue(baseReference) = 0")]),s._v(" "),t("li",[s._v("propertyNameReference = '_'")]),s._v(" "),t("li",[s._v("propertyNameValue = GetValue(propertyNameReference) = '_'")]),s._v(" "),t("li",[s._v("baseValue = ToObject(0) = new Number(0) // 生成一个临时包装对象")])]),s._v(" "),t("blockquote",[t("p",[s._v("即 "),t("code",[s._v("Number { __proto__: Number, [[PrimitiveValue]]: 0}")])])]),s._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[s._v("propertyNameString = ToString(propertyNameValue) = '_'")]),s._v(" "),t("li",[s._v("strict 设置")]),s._v(" "),t("li",[s._v("生成引用，其基值为 "),t("code",[s._v("Number { __proto__: Number, [[PrimitiveValue]]: 0}")]),s._v("，引用名称为 "),t("code",[s._v("_")]),s._v("。在该基值（及原型链）中进行"),t("code",[s._v("_")]),s._v("属性的寻找。最后没有找到，返回 "),t("code",[s._v("undefined")])])]),s._v(" "),t("p",[s._v("其实关键的就是执行 "),t("code",[s._v("CheckObjectCoercible(0)")]),s._v(" 的时候调用 "),t("code",[s._v("ToObject")]),s._v(" 返回了一个临时包装对象")]),s._v(" "),t("blockquote",[t("p",[s._v("这点规范说的有点模糊，只说了 "),t("strong",[s._v("CheckObjectCoercible 在其参数无法用 ToObject 转换成对象的情况下抛出一个异常")]),s._v("，但是没有说 baseValue 会进行 ToObject 转换。\n在 "),t("a",{attrs:{href:"https://www.zhihu.com/question/37117614/answer/70737896",target:"_blank",rel:"noopener noreferrer"}},[s._v("JS的基本数据类型的临时包装类型对象的触发条件和生命周期是多久? - 貘吃馍香的回答 - 知乎"),t("OutboundLink")],1),s._v(" 中有人进行了回答。")])]),s._v(" "),t("h2",{attrs:{id:"为何不用-0-代替-void-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为何不用-0-代替-void-0"}},[s._v("#")]),s._v(" 为何不用 "),t("code",[s._v("0.._")]),s._v(" 代替 "),t("code",[s._v("void 0")])]),s._v(" "),t("p",[s._v("我们从 可读性、性能、正确性 三个方面分析")]),s._v(" "),t("h3",{attrs:{id:"可读性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可读性"}},[s._v("#")]),s._v(" 可读性")]),s._v(" "),t("p",[s._v("与 "),t("code",[s._v("void 0")]),s._v(" 相比，"),t("code",[s._v("0.._")]),s._v(" 仅减少了一个字符，但是该写法大大减低了"),t("strong",[s._v("可读性")]),s._v("。")]),s._v(" "),t("p",[s._v("对于压缩工具来说，不在乎可读性，那么我们从"),t("strong",[s._v("性能")]),s._v("角度分析。")]),s._v(" "),t("h3",{attrs:{id:"性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[s._v("#")]),s._v(" 性能")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COUNT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100000000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" tmp\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COUNT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tmp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeEnd")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// test1: 61.760986328125ms")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COUNT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tmp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeEnd")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// test2: 74.657958984375ms")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[t("code",[s._v("void 0")]),s._v(" 更快一点，但这个影响不大，单次指令之间的执行差异在微秒之内。")]),s._v(" "),t("p",[s._v("最后就看两者的值是不是正确的，即结果永远为 undefined")]),s._v(" "),t("h3",{attrs:{id:"正确性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正确性"}},[s._v("#")]),s._v(" 正确性")]),s._v(" "),t("p",[s._v("对于 "),t("code",[s._v("void 0")]),s._v(" ，void 是关键字，不会被外部改变，因此返回值永远返回 undefined ，见 "),t("a",{attrs:{href:"http://yanhaijing.com/es5/#172",target:"_blank",rel:"noopener noreferrer"}},[s._v("void 运算符"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("对于 "),t("code",[s._v("0.._")]),s._v("，我们上面分析到，在"),t("code",[s._v("基值")]),s._v("中进行"),t("code",[s._v("引用名称")]),s._v("的查找时，会往原型链中查找，因此改变 Number、Object 等的原型属性，"),t("code",[s._v("0.._")]),s._v(" 值就不一样了")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// undefined")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("可以看到， "),t("code",[s._v("0.._")]),s._v(" 结果不是固定的，因此不能用于替换 "),t("code",[s._v("void 0")])]),s._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"http://yanhaijing.com/es5/",target:"_blank",rel:"noopener noreferrer"}},[s._v("es5 规范_中文版"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.ecma-international.org/ecma-262/5.1/",target:"_blank",rel:"noopener noreferrer"}},[s._v("es5 规范"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("ps: 中文版翻译有些地方不够准确，可以先看中文版了解大概，再到原版中详细查看")])])}),[],!1,null,null,null);t.default=a.exports}}]);