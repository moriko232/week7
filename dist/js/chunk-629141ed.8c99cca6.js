(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-629141ed"],{"1dde":function(t,i,e){var r=e("d039"),n=e("b622"),c=e("2d00"),o=n("species");t.exports=function(t){return c>=51||!r((function(){var i=[],e=i.constructor={};return e[o]=function(){return{foo:1}},1!==i[t](Boolean).foo}))}},"65f0":function(t,i,e){var r=e("861d"),n=e("e8b5"),c=e("b622"),o=c("species");t.exports=function(t,i){var e;return n(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!n(e.prototype)?r(e)&&(e=e[o],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===i?0:i)}},8418:function(t,i,e){"use strict";var r=e("c04e"),n=e("9bf2"),c=e("5c6c");t.exports=function(t,i,e){var o=r(i);o in t?n.f(t,o,c(0,e)):t[o]=e}},"99af":function(t,i,e){"use strict";var r=e("23e7"),n=e("d039"),c=e("e8b5"),o=e("861d"),a=e("7b0b"),s=e("50c4"),d=e("8418"),u=e("65f0"),f=e("1dde"),l=e("b622"),p=e("2d00"),v=l("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",m=p>=51||!n((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=f("concat"),_=function(t){if(!o(t))return!1;var i=t[v];return void 0!==i?!!i:c(t)},C=!m||!b;r({target:"Array",proto:!0,forced:C},{concat:function(t){var i,e,r,n,c,o=a(this),f=u(o,0),l=0;for(i=-1,r=arguments.length;i<r;i++)if(c=-1===i?o:arguments[i],_(c)){if(n=s(c.length),l+n>h)throw TypeError(g);for(e=0;e<n;e++,l++)e in c&&d(f,l,c[e])}else{if(l>=h)throw TypeError(g);d(f,l++,c)}return f.length=l,f}})},d2f1:function(t,i,e){"use strict";e.r(i);var r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"product"},[e("Header",{attrs:{isLoading:t.isLoading}}),t.isLoading?t._e():e("div",{staticClass:"main-content"},[e("div",{staticClass:"container"},[e("router-link",{attrs:{to:"/products"}},[t._v("back")]),e("div",{staticClass:"row align-items-start justify-content-center"},[e("div",{staticClass:"product-item col-md-6"},[e("h1",{staticClass:"title"},[t._v(t._s(t.item.title))]),e("img",{attrs:{src:t.item.imageUrl[0]}}),e("div",{staticClass:"product-text"},[e("p",{staticClass:"text"},[t._v(t._s(t.item.content))]),e("div",{staticClass:"text-right"},[e("p",{staticClass:"price"},[t._v("$ "+t._s(t.item.price))]),e("p",{staticClass:"origin-price"},[t._v("原價 $ "+t._s(t.item.origin_price))])])]),e("span",[e("button",{staticClass:"add-cart",on:{click:function(i){return t.addToCart(t.item,1)}}},[t._v("加入購物車")])])])])],1)])],1)},n=[],c=(e("99af"),e("31fb")),o="".concat("https://course-ec-api.hexschool.io/api/").concat("31e50ae2-761f-42e4-b9da-0c081fdb851d","/ec/product"),a={name:"Product",data:function(){return{isLoading:!1,item:{id:"",title:"",content:"",price:"",origin_price:"",imageUrl:[]}}},components:{Header:c["a"]},created:function(){this.getProductDetailApi()},methods:{getProductDetailApi:function(){var t=this;this.isLoading=!0,this.$http.get("".concat(o,"/").concat(this.$route.params.id)).then((function(i){t.item=i.data.data,t.isLoading=!1})).catch((function(t){console.log("err",t)}))}}},s=a,d=e("2877"),u=Object(d["a"])(s,r,n,!1,null,null,null);i["default"]=u.exports},e8b5:function(t,i,e){var r=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-629141ed.8c99cca6.js.map