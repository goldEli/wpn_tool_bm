(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{182:function(e,n,c){},185:function(e,n,c){"use strict";c.r(n);var t,i=c(0),a=c.n(i),r=c(9),d=c.n(r),s=(c(86),c(88),c(67)),p=c.n(s),o=(c(130),c(25)),l=c.n(o),g=(c(133),c(33)),h=c.n(g),u=(c(143),c(68)),m=c.n(u),f=(c(64),c(69)),x=c.n(f),j=(c(159),c(70)),k=c.n(j),w=(c(162),c(34)),y=c.n(w),v=(c(168),c(71)),b=c.n(v),P=c(74),E=c(75),z=c(79),G=c(76),L=c(80),O=(c(176),c(77)),C=c.n(O),A=(c(182),c(78)),q=c.n(A);new RegExp("\\biPhone\\b|\\biPod\\b","i").test(window.navigator.userAgent)&&(t={onTouchStart:function(e){return e.preventDefault()}});var S=C.a.alert,B=function(e){return function(n,c){return n[e]-c[e]}},J=function(e){return JSON.parse(JSON.stringify(e))},I={checked:"\u662f\u5426\u53d1\u5e03",index:"\u6392\u5e8f",name:"\u540d\u79f0",spec:"\u89c4\u683c",price:"\u4ef7\u683c",unit:"\u5355\u4f4d",url:"\u56fe\u7247\u5730\u5740"},T=function(e){function n(){var e,c;Object(P.a)(this,n);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return(c=Object(z.a)(this,(e=Object(G.a)(n)).call.apply(e,[this].concat(i)))).state={goodsList:q.a.sort(B("index"))},c.handleInputOnChange=function(e,n,t){var i=c.state.goodsList,a=J(i),r=c.handleFindKeyByMAP_LABEL(t);a.forEach(function(c){c.id===n&&(c[r]=e)}),c.setState({goodsList:a})},c.handleFindKeyByMAP_LABEL=function(e){return Object.keys(I).filter(function(n){return I[n]===e})[0]},c.handleSave=function(){b.a.success("Load success !!!",1)},c.handleDel=function(){S("\u5220\u9664","\u5220\u9664\u5c06\u4e0d\u53ef\u6062\u590d\uff01",[{text:"\u53d6\u6d88",onPress:function(){return console.log("\u53d6\u6d88")}},{text:"\u786e\u5b9a",onPress:function(){return console.log("\u786e\u5b9a")}}])},c.handleAdd=function(){var e=c.state.goodsList,n=J(e),t=n.length+1;n.push({index:t,name:"\u65b0\u5546\u54c1",price:0,unit:"\u888b",spec:"400g",id:t,src:""}),c.setState({goodsList:n})},c.handleWitchChange=function(){},c}return Object(L.a)(n,e),Object(E.a)(n,[{key:"render",value:function(){var e=this,n=this.state.goodsList;return a.a.createElement(p.a,{size:"lg"},n.map(function(c){var i=c.name,r=c.url,d=c.unit,s=c.price,p=c.index,o=c.id,g=c.spec,u=c.src,f=c.checked,j=[{placeholder:"\u4e0d\u80fd\u8d85\u8fc7"+n.length,label:I.index,value:p},{placeholder:"\u8bf7\u8f93\u5165"+I.name,label:I.name,value:i},{placeholder:"\u8bf7\u8f93\u5165"+I.spec,label:I.spec,value:g},{placeholder:"\u8bf7\u8f93\u5165"+I.price,label:I.price,value:s},{placeholder:"\u8bf7\u8f93\u5165"+I.unit,label:I.unit,value:d},{placeholder:"\u8bf7\u8f93\u5165"+I.url,label:I.url,value:u}];return a.a.createElement("div",{key:o,style:{width:"100%"}},a.a.createElement(y.a,null,a.a.createElement(y.a.Header,{title:i,thumb:r}),a.a.createElement(y.a.Body,null,a.a.createElement(x.a.Item,{extra:a.a.createElement(k.a,{checked:f,onChange:function(n){return e.handleInputOnChange(n,o,I.checked)}})},I.checked),j.map(function(n,c){var i=n.placeholder,r=n.label,d=n.value;return a.a.createElement(m.a,{key:c.toString(),type:"input",onChange:function(n){return e.handleInputOnChange(n,o,r)},value:d,placeholder:i,clear:!0,moneyKeyboardAlign:"right",moneyKeyboardWrapProps:t},r)}),a.a.createElement(h.a,{type:"warning",onClick:function(n){return e.handleDel(o)}},"\u5220\u9664"),a.a.createElement(l.a,{size:"lg"}),a.a.createElement(h.a,{type:"primary",onClick:function(n){return e.handleSave(o)}},"\u4fdd\u5b58"))),a.a.createElement(l.a,{size:"lg"}))}),a.a.createElement(l.a,{size:"lg"}),a.a.createElement(h.a,{onClick:this.handleAdd},"\u65b0\u589e"),a.a.createElement(l.a,{size:"lg"}))}}]),n}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(a.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,n){e.exports=[{index:2,name:"\u793c\u76d2\u5305\u88c5",price:5,unit:"\u4e2a",id:"a0f306dcgy1fvfzhh4zarj20kt0fgt99.jpg",src:"http://wx2.sinaimg.cn/mw690/a0f306dcgy1fvfzhh4zarj20kt0fgt99.jpg",checked:!0},{index:1,name:"\u51ac\u83dc\u6263\u8089",price:27,unit:"\u888b",spec:"400g",id:"a0f306dcly1fxd71gmkrjj20jn0eq41w.jpg",src:"http://wx4.sinaimg.cn/mw690/a0f306dcly1fxd71gmkrjj20jn0eq41w.jpg",checked:!0},{index:3,name:"\u7ea2\u7cd6\u5939\u6c99\u8089",price:27,unit:"\u888b",spec:"500g",id:"a0f306dcly1fxd71ht5q6j20jn0eqwgv.jpg",src:"http://wx3.sinaimg.cn/mw690/a0f306dcly1fxd71ht5q6j20jn0eqwgv.jpg",checked:!0},{index:4,name:"\u5c71\u732a\u8089\u9999\u80a0",price:58,unit:"\u888b",spec:"500g",id:"a0f306dcly1fx57b5m7z7j20ri0kntc7.jpg",src:"http://wx3.sinaimg.cn/small/a0f306dcly1fx57b5m7z7j20ri0kntc7.jpg",checked:!0},{index:5,name:"\u52fe\u9b42\u5154\u817f",price:28,unit:"\u888b",spec:"2\u53ea",id:"a0f306dcgy1fw46py0lybj20mo0h07d0",src:"http://wx2.sinaimg.cn/mw690/a0f306dcgy1fw46py0lybj20mo0h07d0.jpg",checked:!0},{index:6,name:"\u6293\u8d22\u638c\u4e2d\u5b9d",price:26,unit:"\u888b",spec:"120g",id:"a0f306dcgy1fuhfyf7l7lj20ht0dd771",src:"http://wx4.sinaimg.cn/mw690/a0f306dcgy1fuhfyf7l7lj20ht0dd771.jpg",checked:!0},{index:7,name:"\u91d1\u724c\u51b7\u5403\u5154",price:26,unit:"\u888b",spec:"200g",id:"Pi8vwj",src:"https://s1.ax1x.com/2018/06/28/Pi8vwj.jpg",checked:!0},{index:8,name:"\u51b7\u9999\u5154\uff08\u4e94\u9999\u849c\u84c9\u5473\uff09",price:28,unit:"\u888b",spec:"200g",id:"PiGilT",src:"https://s1.ax1x.com/2018/06/28/PiGilT.jpg",checked:!0},{index:9,name:"\u9999\u8fa3\u5154\u5934",price:24,unit:"\u888b",spec:"2\u53ea\u88c5",id:"PiGPpV",src:"https://s1.ax1x.com/2018/06/28/PiGPpV.jpg",checked:!0},{index:10,name:"\u4e94\u9999\u725b\u8089",price:35,unit:"\u888b",spec:"150g",id:"a0f306dcgy1fuyoycl79nj20ir0e2go9",src:"http://wx2.sinaimg.cn/mw690/a0f306dcgy1fuyoycl79nj20ir0e2go9.jpg",checked:!0},{index:11,name:"\u9ebb\u8fa3\u725b\u8089\u4e1d",price:35,unit:"\u888b",spec:"170g",id:"a0f306dcgy1fvfzhnwpbhj20i20dkjt8",src:"http://wx4.sinaimg.cn/mw690/a0f306dcgy1fvfzhnwpbhj20i20dkjt8.jpg",checked:!0},{index:12,name:"\u91d1\u724c\u51b7\u5403\u725b\u8089",price:35,unit:"\u888b",spec:"170g",id:"Pi8xTs",src:"https://s1.ax1x.com/2018/06/28/Pi8xTs.jpg",checked:!0},{index:13,name:"\u51b7\u5403\u9e21\u5c16",price:18,unit:"\u888b",spec:"170g",id:"PiGmkR",src:"https://s1.ax1x.com/2018/06/28/PiGmkR.jpg",checked:!0},{index:14,name:"\u542e\u6307\u9e2d\u820c",price:36,unit:"\u888b",spec:"150g",id:"a0f306dcgy1fvfzhktv1jj20m70goztm",src:"http://wx4.sinaimg.cn/mw690/a0f306dcgy1fvfzhktv1jj20m70goztm.jpg",checked:!0},{index:15,name:"\u8131\u9aa8\u9e2d\u638c",price:26,unit:"\u888b",spec:"120g",id:"a0f306dcgy1fw46pkb0atj20kz0fqwma",src:"http://wx1.sinaimg.cn/mw690/a0f306dcgy1fw46pkb0atj20kz0fqwma.jpg",checked:!0},{index:16,name:"\u9999\u5364\u9e2d\u5fc3 ",price:13,unit:"\u888b",spec:"100g",id:"a0f306dcgy1fwshikkv8ij20eo0b0wfr",src:"http://wx4.sinaimg.cn/small/a0f306dcgy1fwshikkv8ij20eo0b0wfr.jpg",checked:!0},{index:17,name:"\u91ce\u751f\u5c0f\u9c7c",price:28,unit:"\u888b",spec:"200g",id:"Pi8jmQ",src:"https://s1.ax1x.com/2018/06/28/Pi8jmQ.jpg",checked:!0},{index:18,name:"\u51b7\u5403\u9c7c",price:22,spec:"200g",id:"PiG9f0",src:"https://s1.ax1x.com/2018/06/28/PiG9f0.jpg",checked:!0},{index:19,name:"\u539f\u5473\u7c73\u82b1\u9165",price:13,unit:"\u888b",spec:"150g",id:"PiGV0J",src:"https://s1.ax1x.com/2018/06/28/PiGV0J.jpg",checked:!0},{index:20,name:"\u539f\u5473\u82b1\u751f\u9165",price:16,unit:"\u888b",spec:"200g",id:"PiGZ79",src:"https://s1.ax1x.com/2018/06/28/PiGZ79.jpg",checked:!0},{index:21,name:"\u9ed1\u829d\u9ebb\u9165",price:18,unit:"\u888b",spec:"200g",id:"PiGufx",src:"https://s1.ax1x.com/2018/06/28/PiGufx.jpg",checked:!0},{index:22,name:"\u602a\u5473\u9165",price:12,unit:"\u888b",spec:"150g",id:"PiGMp6",src:"https://s1.ax1x.com/2018/06/28/PiGMp6.jpg",checked:!0},{index:23,name:"\u725b\u8089\u8c46\u8c49",price:19,unit:"\u74f6",spec:"250g",id:"PiGkXF",src:"https://s1.ax1x.com/2018/06/28/PiGkXF.jpg",checked:!0},{index:24,name:"\u9999\u8fa3\u8c46\u76ae",price:12,unit:"\u888b",spec:"150g",id:"a0f306dcgy1fuyonbibh3j20kf0fcwgn",src:"http://wx4.sinaimg.cn/mw690/a0f306dcgy1fuyonbibh3j20kf0fcwgn.jpg",checked:!1}]},81:function(e,n,c){e.exports=c(185)},86:function(e,n,c){}},[[81,2,1]]]);
//# sourceMappingURL=main.5b6ce49e.chunk.js.map