(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),r=n(4),c=n(5),o=n(7),d=n(6),i=n(1),u=n.n(i),p=n(0),l=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={pressedKey:null},e.handlePressedKey=function(t){e.setState({pressedKey:t.key})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handlePressedKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handlePressedKey)}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("p",{className:"App__message",children:this.state.pressedKey?"The last pressed key is [".concat(this.state.pressedKey,"]"):"Nothing was pressed yet"})})}}]),n}(u.a.Component);n(13);a.a.render(Object(p.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0d06a6f5.chunk.js.map