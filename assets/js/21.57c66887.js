(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{186:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"从一个例子分析js内存泄漏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从一个例子分析js内存泄漏","aria-hidden":"true"}},[t._v("#")]),t._v(" 从一个例子分析js内存泄漏")]),t._v(" "),a("p",[a("strong",[t._v("内存泄漏")]),t._v("，是 Javascript 开发人员经常谈及的一个话题。那么到底什么样的场景会造成内存泄漏，又应该怎么去防治内存泄漏呢？")]),t._v(" "),a("p",[t._v("我对内存泄漏的理解是这样的：变量是所有语言所提供的最基本的元素，在 Javascript 中，对于一些引用类型的数据或者是形成了闭包的变量所引用的数据，是保存在堆内存中的。当一个变量我们已经不再使用了，确由于开发时的一些疏忽导致这块儿数据所占用的内存空间无法被清理时，这就形成了内存泄漏。")]),t._v(" "),a("h2",{attrs:{id:"_1、闭包与内存泄漏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、闭包与内存泄漏","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、闭包与内存泄漏")]),t._v(" "),a("p",[t._v("经常听见讲说，闭包会引起内存的泄漏，这曾经也给我留下了不小的阴影。让我在使用了闭包后总是战战兢兢，觉得是不是我写的东西内存泄漏了。")]),t._v(" "),a("p",[t._v("为什么开发者们会得出闭包会引起内存泄漏这个结论呢？")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ccy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t  \t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t  \t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ccy'")]),t._v("\n\t\t  \t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ccy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ccy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ccy\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" test1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// test1 = null")]),t._v("\n\n")])])]),a("p",[t._v("在这段代码中，实例 "),a("code",[t._v("ccy")]),t._v(" 原本只是函数 "),a("code",[t._v("test")]),t._v(" 的一个局部变量，如果没有 "),a("code",[t._v("return")]),t._v(" 的这段代码，那么它们在函数 "),a("code",[t._v("test")]),t._v(" 执行完毕之后，应该就会被销毁。但是现在函数 "),a("code",[t._v("test")]),t._v(" 所返回的对象被保存到了变量 "),a("code",[t._v("test1")]),t._v(" 上，而这个对象的 "),a("code",[t._v("name")]),t._v(" 属性又引用了 "),a("code",[t._v("ccy")]),t._v(" 这个实例， 这就形成了闭包，使得即使是基本类型的值，也被放到了堆内存当中，由于 "),a("code",[t._v("test")]),t._v(" 的引用，所以这块儿内存也不会被销毁。")]),t._v(" "),a("p",[t._v("使用 Chrome 的控制台可以观察到这个实例。但是其实，当我们增加一行代码，也就是将 "),a("code",[t._v("test1")]),t._v(" 设为 "),a("code",[t._v("null")]),t._v(" 之后再去观察，机会发现 "),a("code",[t._v("ccy")]),t._v(" 这块儿内存也会被正确的清理掉了。")]),t._v(" "),a("p",[t._v("所以，其实，并不是只要使用了闭包，就一定会导致内存泄漏。在这个例子中，只要最后所 return 出去的对象也不再被任何变量所引用，那么被闭包了的变量也会被垃圾回收器给清理的。所以，不要再对闭包有那么多的顾虑了。要知道，不会在被使用的变量才会被称之为垃圾。而对于闭包很多的使用场景当中，比如 去抖和节流经常会使用闭包的方法去记录一些数据。这些数据对于我们而言并不是没用的，所以它继续存在是合理的。")])])}],!1,null,null,null);s.default=e.exports}}]);