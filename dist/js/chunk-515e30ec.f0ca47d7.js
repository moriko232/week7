(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-515e30ec"],{"0450":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"nav"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(e,i){return a("li",{key:i,staticClass:"page-item",class:{active:e===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.emitPages(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},n=[],s={name:"Pagination",data:function(){return{}},props:{pages:{type:Object,default:function(){return{}}}},methods:{emitPages:function(t){this.$emit("emit-pages",t)}}},r=s,o=a("2877"),c=Object(o["a"])(r,i,n,!1,null,null,null);e["a"]=c.exports},"159b":function(t,e,a){var i=a("da84"),n=a("fdbc"),s=a("17c2"),r=a("9112");for(var o in n){var c=i[o],l=c&&c.prototype;if(l&&l.forEach!==s)try{r(l,"forEach",s)}catch(d){l.forEach=s}}},"17c2":function(t,e,a){"use strict";var i=a("b727").forEach,n=a("a640"),s=a("ae40"),r=n("forEach"),o=s("forEach");t.exports=r&&o?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,a){var i=a("d039"),n=a("b622"),s=a("2d00"),r=n("species");t.exports=function(t){return s>=51||!i((function(){var e=[],a=e.constructor={};return a[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,a){"use strict";var i=a("23e7"),n=a("17c2");i({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"65f0":function(t,e,a){var i=a("861d"),n=a("e8b5"),s=a("b622"),r=s("species");t.exports=function(t,e){var a;return n(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?i(a)&&(a=a[r],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},8418:function(t,e,a){"use strict";var i=a("c04e"),n=a("9bf2"),s=a("5c6c");t.exports=function(t,e,a){var r=i(e);r in t?n.f(t,r,s(0,a)):t[r]=a}},"99af":function(t,e,a){"use strict";var i=a("23e7"),n=a("d039"),s=a("e8b5"),r=a("861d"),o=a("7b0b"),c=a("50c4"),l=a("8418"),d=a("65f0"),p=a("1dde"),u=a("b622"),m=a("2d00"),f=u("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",g=m>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),b=p("concat"),D=function(t){if(!r(t))return!1;var e=t[f];return void 0!==e?!!e:s(t)},_=!g||!b;i({target:"Array",proto:!0,forced:_},{concat:function(t){var e,a,i,n,s,r=o(this),p=d(r,0),u=0;for(e=-1,i=arguments.length;e<i;e++)if(s=-1===e?r:arguments[e],D(s)){if(n=c(s.length),u+n>h)throw TypeError(v);for(a=0;a<n;a++,u++)a in s&&l(p,u,s[a])}else{if(u>=h)throw TypeError(v);l(p,u++,s)}return p.length=u,p}})},a434:function(t,e,a){"use strict";var i=a("23e7"),n=a("23cb"),s=a("a691"),r=a("50c4"),o=a("7b0b"),c=a("65f0"),l=a("8418"),d=a("1dde"),p=a("ae40"),u=d("splice"),m=p("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,h=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!u||!m},{splice:function(t,e){var a,i,d,p,u,m,b=o(this),D=r(b.length),_=n(t,D),C=arguments.length;if(0===C?a=i=0:1===C?(a=0,i=D-_):(a=C-2,i=h(f(s(e),0),D-_)),D+a-i>v)throw TypeError(g);for(d=c(b,i),p=0;p<i;p++)u=_+p,u in b&&l(d,p,b[u]);if(d.length=i,a<i){for(p=_;p<D-i;p++)u=p+i,m=p+a,u in b?b[m]=b[u]:delete b[m];for(p=D;p>D-i+a;p--)delete b[p-1]}else if(a>i)for(p=D-i;p>_;p--)u=p+i-1,m=p+a-1,u in b?b[m]=b[u]:delete b[m];for(p=0;p<a;p++)b[p+_]=arguments[p+2];return b.length=D-i+a,d}})},a640:function(t,e,a){"use strict";var i=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&i((function(){a.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,a){var i=a("83ab"),n=a("d039"),s=a("5135"),r=Object.defineProperty,o={},c=function(t){throw t};t.exports=function(t,e){if(s(o,t))return o[t];e||(e={});var a=[][t],l=!!s(e,"ACCESSORS")&&e.ACCESSORS,d=s(e,0)?e[0]:c,p=s(e,1)?e[1]:void 0;return o[t]=!!a&&!n((function(){if(l&&!i)return!0;var t={length:-1};l?r(t,1,{enumerable:!0,get:c}):t[1]=1,a.call(t,d,p)}))}},b727:function(t,e,a){var i=a("0366"),n=a("44ad"),s=a("7b0b"),r=a("50c4"),o=a("65f0"),c=[].push,l=function(t){var e=1==t,a=2==t,l=3==t,d=4==t,p=6==t,u=5==t||p;return function(m,f,h,v){for(var g,b,D=s(m),_=n(D),C=i(f,h,3),y=r(_.length),x=0,L=v||o,w=e?L(m,y):a?L(m,0):void 0;y>x;x++)if((u||x in _)&&(g=_[x],b=C(g,x,D),t))if(e)w[x]=b;else if(b)switch(t){case 3:return!0;case 5:return g;case 6:return x;case 2:c.call(w,g)}else if(d)return!1;return p?-1:l||d?d:w}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},d416:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"d-flex justify-content-between mb-2"},[a("h2",[t._v("產品列表")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.editData()}}},[t._v("新增產品")])]),a("table",{staticClass:"table"},[t._m(0),t._l(t.shopDatas,(function(e,i){return a("tr",{key:e.id},[a("td",[t._v(t._s((t.pagination.current_page-1)*t.productListSettings.paged+i+1))]),a("td",[t._v(t._s(e.title))]),a("td",[e.enabled?[a("span",{staticClass:"text-success"},[t._v("是")])]:[a("span",[t._v("否")])]],2),a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.origin_price))]),a("td",[t._v(t._s(e.price))]),a("td",[a("button",{staticClass:"btn btn-primary mr-2",attrs:{type:"button"},on:{click:function(a){return t.editData(e)}}},[t._v(" 修改 ")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){return t.deleteQA(e.id,e.title)}}},[t._v(" 刪除 ")])])])}))],2),a("Pagination",{attrs:{pages:t.pagination,name:"pagination"},on:{"emit-pages":t.getData}}),a("div",{staticClass:"modal fade bd-example-modal-sm",attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-sm modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),a("div",{staticClass:"modal-body"},[t._v("確定要刪除 "+t._s(t.tempDelete.title)+"?")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deleteData()}}},[t._v("確認刪除")])])])])]),a("div",{staticClass:"modal fade bd-example-modal-lg",attrs:{id:"editModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t.tempData.id?[t._v(" 編輯產品 ")]:[t._v(" 新增產品 ")]],2),t._m(2)]),a("div",{staticClass:"modal-body"},[a("form",{staticClass:"form-group w-100"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("table",[a("tr",[a("th",{attrs:{width:"30%"}},[t._v(" 產品標題 ")]),a("td",{attrs:{width:"70%"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.title,expression:"tempData.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"產品標題",required:""},domProps:{value:t.tempData.title},on:{input:function(e){e.target.composing||t.$set(t.tempData,"title",e.target.value)}}})])]),a("tr",[a("th",[t._v("分類")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.category,expression:"tempData.category"}],staticClass:"form-control",attrs:{type:"text",placeholder:"分類"},domProps:{value:t.tempData.category},on:{input:function(e){e.target.composing||t.$set(t.tempData,"category",e.target.value)}}})])]),a("tr",[a("th",[t._v("內容")]),a("td",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempData.content,expression:"tempData.content"}],staticClass:"form-control",attrs:{type:"text",placeholder:"內容"},domProps:{value:t.tempData.content},on:{input:function(e){e.target.composing||t.$set(t.tempData,"content",e.target.value)}}})])]),a("tr",[a("th",[t._v("原價")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.tempData.origin_price,expression:"tempData.origin_price",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"原價"},domProps:{value:t.tempData.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempData,"origin_price",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),a("tr",[a("th",[t._v("售價")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.tempData.price,expression:"tempData.price",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"售價"},domProps:{value:t.tempData.price},on:{input:function(e){e.target.composing||t.$set(t.tempData,"price",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])])]),a("div",{staticClass:"col-sm-6"},[a("table",[a("tr",[a("th",{attrs:{width:"30%"}},[t._v("單位")]),a("td",{attrs:{width:"70%"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.unit,expression:"tempData.unit"}],staticClass:"form-control",attrs:{type:"text",placeholder:"單位"},domProps:{value:t.tempData.unit},on:{input:function(e){e.target.composing||t.$set(t.tempData,"unit",e.target.value)}}})])]),a("tr",[a("th",[t._v("是否啟用")]),a("td",[a("div",{staticClass:"custom-control custom-switch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.enabled,expression:"tempData.enabled"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customSwitches"},domProps:{checked:Array.isArray(t.tempData.enabled)?t._i(t.tempData.enabled,null)>-1:t.tempData.enabled},on:{change:function(e){var a=t.tempData.enabled,i=e.target,n=!!i.checked;if(Array.isArray(a)){var s=null,r=t._i(a,s);i.checked?r<0&&t.$set(t.tempData,"enabled",a.concat([s])):r>-1&&t.$set(t.tempData,"enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempData,"enabled",n)}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"customSwitches"}})])])]),a("tr",[a("th",[t._v("敘述")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.description,expression:"tempData.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"敘述"},domProps:{value:t.tempData.description},on:{input:function(e){e.target.composing||t.$set(t.tempData,"description",e.target.value)}}})])])]),a("hr"),t._m(3),t._l(3,(function(e){return a("div",{key:e,staticClass:"mt-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.imageUrl[e-1],expression:"tempData.imageUrl[imgIdx - 1]"}],staticClass:"form-control",attrs:{type:"text",placeholder:"圖片網址"},domProps:{value:t.tempData.imageUrl[e-1]},on:{input:function(a){a.target.composing||t.$set(t.tempData.imageUrl,e-1,a.target.value)}}}),t.tempData.imageUrl[e-1]?a("img",{attrs:{src:t.tempData.imageUrl[e-1],alt:""}}):t._e()])})),a("div",[a("label",{attrs:{for:"customFile"}},[t._v(" 或是上傳圖片 ")]),a("input",{ref:"file",staticClass:"form-control",attrs:{id:"customFile",type:"file"},on:{change:t.uploadFile}})])],2)])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.updateData()}}},[t._v("送出")])])])])])],1),a("div",{staticClass:"mt-5"})])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("序號")]),a("th",[t._v("產品名稱")]),a("th",[t._v("商品上架")]),a("th",[t._v("商品分類")]),a("th",[t._v("原價")]),a("th",[t._v("售價")]),a("th",[t._v("功能")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("確認操作")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3"},[a("b",[t._v("圖片網址")])])}],s=(a("99af"),a("4160"),a("a434"),a("159b"),a("0450")),r="".concat("https://course-ec-api.hexschool.io/api/").concat("31e50ae2-761f-42e4-b9da-0c081fdb851d"),o="".concat("https://course-ec-api.hexschool.io/api/").concat("31e50ae2-761f-42e4-b9da-0c081fdb851d","/admin/ec/products"),c={components:{Pagination:s["a"]},data:function(){return{productListSettings:{page:1,paged:10},pagination:{current_page:1},tempDelete:{id:"",title:""},shopDatas:[],baseData:{imageUrl:[]},tempData:{imageUrl:[]}}},created:function(){this.getData()},methods:{getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$parent.isLoading=!0;var a="".concat(o);this.productListSettings.page=e,this.$http.get(a,{params:this.productListSettings}).then((function(e){t.shopDatas=e.data.data,t.pagination=e.data.meta.pagination,t.$parent.isLoading=!1})).catch((function(t){console.log("err ",t)}))},updateData:function(){var t=this;if(this.tempData.id)this.apiEditData(this.tempData.id),this.shopDatas.forEach((function(e,a){t.tempData.id===e.id&&(t.shopDatas[a]=t.tempData)}));else{var e=(new Date).getTime();this.tempData.id=e,this.shopDatas.push(this.tempData),this.apiAddNewData(this.tempData)}this.tempData=JSON.parse(JSON.stringify(this.baseData)),$("#editModal").modal("hide")},editData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.baseData;this.tempData=JSON.parse(JSON.stringify(t)),$("#editModal").modal("show")},apiEditData:function(t){var e=this;this.$parent.isLoading=!0;var a="".concat(r,"/admin/ec/product/").concat(t);this.$http.patch(a,this.tempData).then((function(t){console.log(t),e.getData()})).catch((function(t){console.log(t)}))},apiAddNewData:function(t){var e=this;this.$parent.isLoading=!0;var a="".concat(r,"/admin/ec/product");this.$http.post(a,t).then((function(t){console.log(t),e.getData()})).catch((function(t){console.log(t)}))},deleteQA:function(t,e){this.tempDelete.id=t,this.tempDelete.title=e,$("#deleteModal").modal("show")},deleteData:function(){var t=this,e=this.tempDelete.id;this.apiDeleteData(e),this.shopDatas.forEach((function(a,i){a.id===e&&t.shopDatas.splice(i,1)})),this.tempDelete.id="",this.tempDelete.title="",$("#deleteModal").modal("hide")},apiDeleteData:function(t){this.$parent.isLoading=!0;var e="".concat(r,"/admin/ec/product/").concat(t);this.$http.delete(e).then((function(t){console.log(t),this.getData()})).catch((function(t){console.log(t)}))},uploadFile:function(){var t=this;this.$parent.isLoading=!0;var e=this.$refs.file.files[0],a=new FormData;a.append("file",e);var i="".concat(r,"/admin/storage");this.$http.post(i,a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.$parent.isLoading=!1,200===e.status&&t.tempData.imageUrl.push(e.data.data.path)})).catch((function(){t.$parent.isLoading=!0}))}}},l=c,d=a("2877"),p=Object(d["a"])(l,i,n,!1,null,null,null);e["default"]=p.exports},e8b5:function(t,e,a){var i=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-515e30ec.f0ca47d7.js.map