(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{202:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("对于很多文章中提到的，尽量将script标签放到最后去引入，其实我觉得意义并不在于说是为了不阻塞页面的渲染。")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),e("p",[t._v("如图所示，回流一定会重绘，而重绘不一定会回流。回流其实就是一个重新计算元素的布局信息的过程。")]),t._v(" "),e("p",[t._v("什么时候会发成回流呢？ 比如在一个自然的流式布局中，一个dom节点的高度改变了，它势必会引起后面的元素的位置也发生改变，元素的位置需要重新去计算，这个过程是回流。而重绘就是只是改变了一个dom节点的如背景颜色，或者改变dom元素的 transfrom， 就是改变一些不会引起布局发生改变的属性，这就只会引起重绘。")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),e("p",[t._v("以上的js代码所设置的属性都会引起回流，但是大部分浏览器会将这个操作优化到一次去进行，也就说只会发生一次回流。")]),t._v(" "),e("p",[t._v("但是如果：")]),t._v(" "),t._m(25),e("p",[t._v("像这段代码中，设置了元素的属性后立马调用这些方法计算出当前元素的样式信息，就会立即触发回流去重新计算元素的信息以得出正确的信息。")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),e("p",[t._v("问题和回答的链接："),e("a",{attrs:{href:"https://www.zhihu.com/question/353069514",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),e("OutboundLink")],1)]),t._v(" "),t._m(30),t._v(" "),e("p",[t._v("其实对于一个元素进行 绝对定位或者固定定位的时候，这个元素就已经脱离的正常的文档流了。也就是说，它的大小、位置的改变，并不会引起正常文档流中的元素发生回流。")]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),e("p",[t._v("上文我提到过，我在知乎上去提了一个问题，在那个时候我错误的吧js的事件循环和浏览器帧的概念结合到了一起，错误的认为浏览器每一帧的刷新对应一次事件循环。")]),t._v(" "),e("p",[t._v("先看js事件循环的过程：")]),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),e("p",[e("code",[t._v("rIc")]),t._v(" 是浏览器提供给我们的空闲调度算法，这个空闲指的是什么呢？我认为，指的就是 "),e("strong",[t._v("一帧的时间里，其他的任务队列都执行空了，渲染任务也结束了（此时也可能根本就没有必要渲染），这时仍然还剩时间")]),t._v("，就去执行 "),e("code",[t._v("rIc")]),t._v(" 队列里面的任务。所以这个 api 也提供一个 "),e("code",[t._v("timeout")]),t._v(" 参数，因为不知道多久才能等到空闲的时间，它提供了 "),e("code",[t._v("timeout")]),t._v(" 参数规定这个任务最晚在多久执行。具体可见 "),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback",target:"_blank",rel:"noopener noreferrer"}},[t._v("rIc文档"),e("OutboundLink")],1),t._v(" 。")]),t._v(" "),e("p",[t._v("参考文章："),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/53913989",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhuanlan.zhihu.com/p/53913989"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://blog.csdn.net/csdnnews/article/details/95267307",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/csdnnews/article/details/95267307"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://juejin.im/post/5ec73026f265da76da29cb25#heading-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/5ec73026f265da76da29cb25#heading-5"),e("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"浏览器渲染过程以及事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染过程以及事件循环","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器渲染过程以及事件循环")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1、浏览器第一次渲染的过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、浏览器第一次渲染的过程","aria-hidden":"true"}},[this._v("#")]),this._v(" 1、浏览器第一次渲染的过程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当请求拿到 "),s("code",[this._v("content-type")]),this._v(" 为 "),s("code",[this._v("text/html")]),this._v(" 的内容的时候，浏览器会将这部分内容当作 "),s("code",[this._v("html")]),this._v(" 去解析，浏览器渲染的过程就开始了。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("首先浏览器会将拿到 "),e("code",[t._v("html")]),t._v(" 进行解析，生成 "),e("code",[t._v("DOM TREE")]),t._v(" ，遇到css样式会生成 "),e("code",[t._v("css tree")]),t._v("，然后 "),e("code",[t._v("dom tree")]),t._v(" 和生成一个 "),e("code",[t._v("render tree")]),t._v("。当浏览器生成 "),e("code",[t._v("render tree")]),t._v(" 后就会根据 "),e("code",[t._v("render tree")]),t._v(" 来布局（这个过程也可以叫做回流）。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v("dom tree")]),t._v(" 的生成和 "),e("code",[t._v("css tree")]),t._v(" 的生成是互相不影响的，也就是说 css的解析不会阻塞 dom的解析，但是，生成 "),e("code",[t._v("render tree")]),t._v(" 是需要 "),e("code",[t._v("css tree")]),t._v(" 的，所以，可以认为 css不会阻塞 dom的解析，但是会阻塞 dom的渲染。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("一个网页的三大要素是 "),e("code",[t._v("html")]),t._v("、"),e("code",[t._v("css")]),t._v("、"),e("code",[t._v("javascript")]),t._v("。前面所说的过程中并没有设计到 "),e("code",[t._v("javascript")]),t._v("，实际上"),e("code",[t._v("js")]),t._v(" 也是通过 html标签引入到页面中的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-1-遇到js时的解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-遇到js时的解析","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.1 遇到js时的解析")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当解析到 "),s("code",[this._v("script")]),this._v(" 是会阻塞浏览器的渲染过程的，因为浏览器中的渲染线程和js的执行线程是两个互斥的线程，当其中一个在工作的时候，另外一个是挂起状态的。其次js它也是可以去操作dom和css的，在这个过程中js有能力去改变dom tree 和 css tree。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("前面说到dom tree的构建和css tree 的构建是两个互不影响的过程，但是js不仅会阻塞dom tree 的构建，会导致 css tree也阻塞 dom tree的构建。因为js是可以更改样式的，而不完成的css tree无法使用，所以如果想在js中访问 css tree并且就必须先生成完整的 css tree，如果浏览器此时没有完成css tree的下载和构建，而我们却想在此时运行脚本，那么浏览器将延迟脚本执行和DOM构建，直至其完成CSSOM的下载和构建。"),s("strong",[this._v("在这种情况下，浏览器会先下载和构建CSSOM，然后再执行JavaScript，最后在继续构建DOM")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("浏览器渲染过程"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello word"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script language-javascript"}},[t._v("\n\t\t\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// window.onload = function(){")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \tvar index = 0")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \twhile(index < 999999999){")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\tindex++")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t}")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" index "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("999999999")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tindex "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在body的最底部去插入这样一段代码， 会发现即使是写在最底部了，页面的渲染也会有一段时间的空白，等到index计算到到999999999才渲染页面。因为解析到 "),s("code",[this._v("</html>")]),this._v(" 页面才算解析完毕啊，遇到这段js代码还不是同样的要等它执行完毕之后在继续html的解析，我觉得js写在最后的意义应该等到内容主题的 dom tree 都构建好了，在js中去获取dom的时候能获取到。当然如果使用了类似 "),s("code",[this._v("window.onload")]),this._v(" 、"),s("code",[this._v("window.addEventListener('DOMContentLoaded')")]),this._v(" 是即使写在了dom的前面也能获取到的，因为这两个事件触发的时候，dom tree都已经生成了。所以，script标签写在哪里真的很重要吗？ 对于js代码操作了css也许有一点影响吧，因为这个操作使dom tree 和 css tree之间的并行生成变成了串行的，需要先生成 css tree。 但我这个影响看起来并不如说的那么大，因为 css tree的构建最终还是会影响 render tree的。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("所以，不管 "),e("code",[t._v("script")]),t._v(" 标签不管写在哪里最终都会阻塞 "),e("code",[t._v("render tree")]),t._v(" 的生成吗？ 答案肯定是否定的，"),e("code",[t._v("script")]),t._v(" 标签的 async、defer 属性就是答案。通常如果我们不设置 async、defer 这个两个属性的话，当解析到 "),e("code",[t._v("script")]),t._v(" 标签后，它的阻塞体现在两个方面：如果 js 是外部文件，则需要先等js加载完成，js加载完成之后才能够解析执行。整个阻塞的时间就等于 js 的加载加上 js的执行。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[t._v("async：可选属性。表示应该立即下载脚本，但是不妨碍页面中的其他操作，当脚本下载完毕后立即执行脚本。\n换言之，async 属性解决了 整个阻塞时间里面的 js加载时间。当脚本加载完毕后，立即执行脚本，不管此时渲染进程在何阶段都会被挂起。 所以使用了 async 属性的 "),e("code",[t._v("script")]),t._v(" 标签还是要注意书写的位置，以及监听页面的 "),e("code",[t._v("DOMContentLoaded")]),t._v("（domtree 生成完毕） 事件。 HTML 还没有被解析完的时候，async脚本已经加载完了，那么 HTML停止解析，去执行脚本，脚本执行完毕后触发DOMContentLoaded事件。 HTML 解析完了之后，async脚本才加载完，然后再执行脚本，那么在HTML解析完毕、async脚本还没加载完的时候就触发DOMContentLoaded事件。")])]),t._v(" "),e("li",[e("p",[t._v("defer：可选属性，表示脚本可以延迟到文档完全被解析和显示之后在执行。无论js文件是否下载完成，只有html解析完毕，才可以执行脚本；脚本执行的顺序与下载的完成时间无关,按照 "),e("code",[t._v("script")]),t._v(" 标签的位置，顺序执行。HTML解析完成时，defer脚本还没加载完毕，那么defer脚本继续加载，加载完成后直接执行，执行完毕后触发DOMContentLoaded事件；HTML还没解析完成时，defer脚本已经加载完毕，那么defer脚本将等待HTML解析完成后再执行。defer脚本执行完毕后触发DOMContentLoaded事件。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-2-引入css四种方式和区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-引入css四种方式和区别","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.2 引入css四种方式和区别")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("内联式：内联式就是直接将样式以 "),s("code",[this._v("style")]),this._v(" 的属性写到 html标签上")]),this._v(" "),s("li",[this._v("style标签：一般写在head标签中的样式")]),this._v(" "),s("li",[this._v("link标签：加载外部的css文件")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/css"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("style.css"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("@import：加载外部css文件")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token style language-css"}},[t._v(" "),e("span",{pre:!0,attrs:{class:"token atrule"}},[e("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token url"}},[t._v("url(style.css)")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v("link")]),t._v(" 和 "),e("code",[t._v("@import")]),t._v(" 都是加载外部的css文件，它们最重要的区别在于加载的顺序。当解析到link标签的时候，引用的CSS会同时被加载，而@import引用的CSS会等到页面全部被下载完再加载。所以有时候浏览@import加载CSS的页面时会没有样式（就是闪烁）。\n所以我的结论是，"),e("code",[t._v("link")]),t._v(" 标签会阻塞最终页面的渲染。相对于内联和"),e("code",[t._v("style")]),t._v("标签，它们的样式已经书写在了文件中，不需要通过网络去加载了，而 "),e("code",[t._v("@import")]),t._v(" 引入的外部css文件会等到页面渲染完毕后才加载。就是说在生成 "),e("code",[t._v("render tree")]),t._v(" 的时候，是需要 "),e("code",[t._v("css tree")]),t._v(" 的，如果引入了link标签，就会等到 dom tree构建完毕，且css tree也构建完毕（通过网络请求加载到，并且生成 css tree）才会去生成 render tree， 如果在dom解析的过程中有script且访问了css tree， render tree的构建还会被阻塞，需要先等到，css文件加载完毕，css tree构建完成，js代码执行完成，最后在生成 render tree。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-3-回流和重绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-回流和重绘","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.3 回流和重绘")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("首先，回流和重绘是两个不同的概念，当render tree生成过后 就会根据render tree去布局，这个过程叫做回流，这一阶段浏览器要做的事情是要弄清楚各个节点在页面中的确切位置和大小，然后在进行绘制（重绘）。\n"),s("img",{attrs:{src:"https://s1.ax1x.com/2020/06/07/t2RdJA.jpg",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-3-1常见的引起回流的属性和方法："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1常见的引起回流的属性和方法：","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.3.1常见的引起回流的属性和方法：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://s1.ax1x.com/2020/06/07/t2hwW9.jpg",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("为什么说 "),s("code",[this._v("getComputedStyle")]),this._v(" 和 "),s("code",[this._v("getBoundingClientRect")]),this._v(" 等方法会引起回流呢？ 其实在js去操作dom的样式中是有优化的，")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("dom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100px'")]),t._v("\ndom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200px'")]),t._v("\ndom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dom2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("dom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100px'")]),t._v("\ndom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200px'")]),t._v("\ndom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dom2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-3-2-常见的引起重绘的属性和方法："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-常见的引起重绘的属性和方法：","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.3.2 常见的引起重绘的属性和方法：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://s1.ax1x.com/2020/06/07/t25VUS.jpg",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-4-renderlayer-tree"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-renderlayer-tree","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.4 RenderLayer Tree")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我曾经在知乎上提过一个问题是关于浏览器渲染和 js事件循环的。很感谢当时的一个人慷慨的解答了我的疑惑，然后在他的回答中我看到了 "),s("code",[this._v("RenderLayer Tree")]),this._v(" 这个名词。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("其实在浏览器不是直接渲染 Render Tree ，而是 Render Tree 会生成 RenderLayer Tree，会提前对需要渲染的对象进行分层，这个分层是基于页面布局以及元素的类型（比如绝对定位布局的元素、Canvas 元素等等），层与层直接可以并行渲染，相互不影响。就拿 Canvas 元素来说，如果你在页面中使用了一个 Canvas ，在从 Render Tree  生成 RenderLayer Tree 的过程中就会把  RenderHTMLCanvas 独立到一个 RenderLayer 中，它内部的改变与渲染将不会影响到其他的 RenderLayer 。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-js事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-js事件循环","aria-hidden":"true"}},[this._v("#")]),this._v(" 2 js事件循环")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-1-js事件循环和浏览器帧的概念的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-js事件循环和浏览器帧的概念的区别","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.1 js事件循环和浏览器帧的概念的区别")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[t._v("从任务队列中取出一个"),e("strong",[t._v("宏任务")]),t._v("并执行。")]),t._v(" "),e("li",[t._v("检查微任务队列，执行并清空"),e("strong",[t._v("微任务")]),t._v("队列，如果在"),e("strong",[t._v("微任务")]),t._v("的执行中又加入了新的"),e("strong",[t._v("微任务")]),t._v("，也会在这一步一起执行。")]),t._v(" "),e("li",[t._v("进入更新渲染阶段，判断是否需要渲染，这里有一个 rendering opportunity 的概念，也就是说不一定每一轮 event loop 都会对应一次浏览 器渲染，要根据屏幕刷新率、页面性能、页面是否在后台运行来共同决定，通常来说这个渲染间隔是固定的。（所以多个 task 很可能在一次渲染之间执行），这里提一下 "),e("code",[t._v("requestAnimationFrame")]),t._v(" ，这个是在重新渲染之前调用的。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("浏览器会尽可能的保持帧率稳定，例如页面性能无法维持 60fps（每 16.66ms 渲染一次）的话，那么浏览器就会选择 30fps 的更新速率，而不是偶尔丢帧。")]),this._v(" "),s("li",[this._v("如果浏览器上下文不可见，那么页面会降低到 4fps 左右甚至更低。")]),this._v(" "),s("li",[this._v("如果满足以下条件，也会跳过渲染：1浏览器判断更新渲染不会带来视觉上的改变。 2map of animation frame callbacks 为空，也就是帧动画回调为空，可以通过 "),s("code",[this._v("requestAnimationFrame")]),this._v(" 来请求帧动画。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("是的，每一次事件循环都会有一次页面渲染的时机，但是有这个时机并不意味这就一定会发生页面渲染。我的理解是比如当前的帧是 "),e("code",[t._v("30fps")]),t._v("，也许在 "),e("code",[t._v("30ms")]),t._v(" 的时间里发生了两次事件循环，但是，浏览器会固定的维持 "),e("code",[t._v("30ms")]),t._v(" 刷新一次的频率，如果这两次事件循环当中都有对dom或者css的改变，也只会在相应的每一帧到了才会去执行。在如果，也许当前事件循环的过程中和"),e("code",[t._v("requestAnimationFrame")]),t._v("的回调中并没有操作dom和css，那么就不需要更新保持原来的样子就可以了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("所以，并不是每一次事件循环里改变了dom或者css都伴随这一次浏览器的渲染，它得符合当前浏览器的帧的时间。\n但是不管浏览器最终会不会真的发生渲染，在渲染时机到了的时候，都会去调用 "),s("code",[this._v("requestAnimationFrame")]),this._v(" 的回调。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-2-requestanimationframe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-requestanimationframe","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.2 "),s("code",[this._v("requestAnimationFrame")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("requestAnimationFrame")]),this._v(" 应该也算是一个宏任务，")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("先分析一下  "),e("code",[t._v("requestAnimationFrame")]),t._v(" 的执行时机，以下简称为 "),e("code",[t._v("rAf")]),t._v(" ，我认为 "),e("code",[t._v("rAf")]),t._v(" 在执行的时候，应该是将其中的回调函数 push 到了帧动画的任务队列之中，  等到渲染时机要到了的时候，会将帧动画任务队列之中的任务取出来执行。此时帧动画任务可能对屏幕元素有一些改变，然后就能马上在屏幕渲染的时候被渲染到屏幕里了。总的来说 "),e("code",[t._v("rAf")]),t._v(" 就是在浏览器决定渲染之前最后一个机会让我们去改变 "),e("code",[t._v("DOM")]),t._v(" 的属性。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("为什么总说  "),s("code",[this._v("rAf")]),this._v(" 更适合比定时器更适合用来做动画呢？因为并不是每一次事件循环都伴随着一次屏幕的渲染，使用定时器并不能保证定时器回调每执行一次屏幕就渲染一次，或许是定时器回调执行了两次屏幕才渲染了一次，这样就会造成丢帧，动画看起来就没那么流畅。而 "),s("code",[this._v("rAf")]),this._v(" 保证了回调每执行一次，屏幕就渲染了一次。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("等到渲染时机到了的时候，页面会刷新，这里就会涉及到回流和重绘。我使用了两个例子，一个在会改变位置信息，一个只是改变了元素的背景颜色，然后使用 "),s("strong",[this._v("performance")]),this._v(" 记录了执行的过程。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("首先是改变了位置信息的图：\n"),s("img",{attrs:{src:"https://s1.ax1x.com/2020/06/08/thRwyn.png",alt:""}})])]),this._v(" "),s("li",[s("p",[this._v("然后是只改变了背景颜色的图\n"),s("img",{attrs:{src:"https://s1.ax1x.com/2020/06/08/thRrwV.png",alt:""}})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("可以看到改变位置信息的多了一个 "),s("code",[this._v("layout")]),this._v(" 的步骤，我想这就是代表回流吧。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-3-requestidlecallback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-requestidlecallback","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.3 "),s("code",[this._v("requestIdleCallback")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("与 "),s("code",[this._v("requestAnimationFrame")]),this._v(" 类似，  "),s("code",[this._v("requestIdleCallback")]),this._v(" （以下简称为rIc） 应该是算是宏任务。在它执行时候将其回调函数 push 到 "),s("code",[this._v("rIc")]),this._v(" 的任务队列当中。")])}],!1,null,null,null);s.default=n.exports}}]);