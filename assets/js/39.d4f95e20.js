(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{204:function(n,a,s){"use strict";s.r(a);var t=s(0),e=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,a=n.$createElement,s=n._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"连接服务器且下载nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接服务器且下载nginx","aria-hidden":"true"}},[n._v("#")]),n._v(" 连接服务器且下载nginx")]),n._v(" "),s("h2",{attrs:{id:"mac-os-连接服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mac-os-连接服务器","aria-hidden":"true"}},[n._v("#")]),n._v(" Mac Os 连接服务器")]),n._v(" "),s("p",[n._v("打开命令行工具，选择 shell 。在右侧服务器菜单选择加号，添加进购买的服务器的公网ip。然后左边选择 安全 Shell (ssh) ，点击连接连接，然后输入登录密码就可以连接成功了。")]),n._v(" "),s("h2",{attrs:{id:"下载-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载-nginx","aria-hidden":"true"}},[n._v("#")]),n._v(" 下载 nginx")]),n._v(" "),s("p",[n._v("正常情况下，输入：")]),n._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("apt-get")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" nginx\n")])])]),s("p",[n._v("即可下载 nginx，但是今天下载的时候遇到了一个问题：输入命令后提示：")]),n._v(" "),s("p",[n._v("Reading package lists... Done\nBuilding dependency tree"),s("br"),n._v("\nReading state information... Done\nE: Unable to locate package nginx")]),n._v(" "),s("p",[n._v("此时输入命令：")]),n._v(" "),s("div",{staticClass:"language-ba extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("sudo apt-get update\n")])])]),s("p",[n._v("作用是：同步 /etc/apt/sources.list 和 /etc/apt/sources.list.d 中列出的源的索引，这样才能获取到最新的软件包。")]),n._v(" "),s("p",[n._v("然后在执行刚才的下载命令，nginx安装成功。")]),n._v(" "),s("h3",{attrs:{id:"常用nginx命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用nginx命令","aria-hidden":"true"}},[n._v("#")]),n._v(" 常用nginx命令")]),n._v(" "),s("ul",[s("li",[n._v("查看帮助命令："),s("code",[n._v("nginx -h")])]),n._v(" "),s("li",[n._v("启动 nginx 服务器："),s("code",[n._v("sudo nginx")])]),n._v(" "),s("li",[n._v("查看进程："),s("code",[n._v("ps aux | grep nginx")])]),n._v(" "),s("li",[n._v("配置文件路径："),s("code",[n._v("/usr/local/nginx/conf/nginx.conf")])]),n._v(" "),s("li",[n._v("检查配置文件："),s("code",[n._v("sudo nginx -t")])]),n._v(" "),s("li",[n._v("指定启动配置文件："),s("code",[n._v("sudo nginx -c /usr/local/nginx/conf/nginx.conf")])]),n._v(" "),s("li",[n._v("暴力停止服务："),s("code",[n._v("sudo nginx -s stop")])]),n._v(" "),s("li",[n._v("优雅停止服务："),s("code",[n._v("sudo nginx -s quit")])]),n._v(" "),s("li",[n._v("重新加载配置文件："),s("code",[n._v("sudo nginx -s reload")])])]),n._v(" "),s("p",[n._v("ok，此时我信心满满的执行了 "),s("code",[n._v("sudo nginx")]),n._v("，果不其然，我知道编程的世界里按着步骤也是会出很多意外的，此时显示：")]),n._v(" "),s("p",[s("img",{attrs:{src:"https://s3.ax1x.com/2020/11/24/DtlwYd.png",alt:""}})]),n._v(" "),s("p",[n._v("这里说的原因是端口被占用了。")]),n._v(" "),s("p",[n._v("暴力一点，执行命令，杀掉80端口的进程：")]),n._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("fuser")]),n._v(" -k 80/tcp\n")])])]),s("p",[n._v("然后在启动 nginx。")]),n._v(" "),s("p",[n._v("nginx 是运行在 80 端口的，此时访问我们服务器的公网ip，就能成功的看到 nginx 的欢迎界面了：")]),n._v(" "),s("h2",{attrs:{id:"nginx-配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置文件","aria-hidden":"true"}},[n._v("#")]),n._v(" nginx 配置文件")]),n._v(" "),s("p",[n._v("使用 "),s("code",[n._v("nginx -t")]),n._v(" 可以看到看到 nginx 的安装目录，就能找到 "),s("code",[n._v("nginx.conf")]),n._v(" 配置文件。")])])}],!1,null,null,null);a.default=e.exports}}]);