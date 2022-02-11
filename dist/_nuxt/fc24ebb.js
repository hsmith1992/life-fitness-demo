(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3],{285:function(t,e,r){var content=r(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("c682f8ee",content,!0,{sourceMap:!1})},286:function(t,e,r){var content=r(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("a3ac1d04",content,!0,{sourceMap:!1})},291:function(t,e,r){"use strict";r(285)},292:function(t,e,r){var c=r(51)((function(i){return i[1]}));c.push([t.i,".cart-table[data-v-04657d31]{width:100%;margin-top:20px;margin-bottom:30px}.cart-table-cell[data-v-04657d31]{padding:8px 0;border-bottom:1px solid #ccc}.cart-table-heading[data-v-04657d31]{padding:10px 0;border-bottom:1px solid #ccc}.cart-table-row[data-v-04657d31]{text-align:center}",""]),c.locals={},t.exports=c},293:function(t,e,r){"use strict";r(286)},294:function(t,e,r){var c=r(51)((function(i){return i[1]}));c.push([t.i,".cart-total[data-v-1c8371fb]{display:grid;grid-template-columns:repeat(5,1fr)}.cart-total-content[data-v-1c8371fb]{grid-column:1/span 5;display:grid;grid-template-columns:repeat(2,1fr)}@media screen and (min-width:1024px){.cart-total-content[data-v-1c8371fb]{grid-column:4/span 2}}.cart-total-column p[data-v-1c8371fb]{padding:10px;margin:0;text-align:right}.cart-total-column p[data-v-1c8371fb]:last-child{font-weight:700;background:#f2eee2}",""]),c.locals={},t.exports=c},297:function(t,e,r){var content=r(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("17e3f257",content,!0,{sourceMap:!1})},300:function(t,e,r){"use strict";r.r(e);r(35),r(26),r(34),r(53),r(30),r(54);var c=r(5),n=r(18),o=(r(55),r(132),r(56)),l=r(99);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({cartId:"cart/id",cartItems:"cart/items"})),methods:{formatCurrency:l.a,itemTotal:function(t,e){var r=Number(t.amount)*Number(e);return this.formatCurrency(r,t.currencyCode)},removeItem:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$http.$post("/api/remove-from-cart",{cartId:e.cartId,lineId:t});case 2:c=r.sent,e.$store.dispatch("cart/updateBase",c);case 4:case"end":return r.stop()}}),r)})))()}}},v=(r(291),r(21)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"cart-table"},[t._m(0),t._v(" "),r("tbody",t._l(t.cartItems,(function(e){var c=e.node;return r("tr",{key:c.id,staticClass:"cart-table-row"},[r("td",{staticClass:"cart-table-cell"},[r("nuxt-link",{attrs:{to:"/products/"+c.merchandise.product.handle}},[t._v("\n          "+t._s(c.merchandise.product.title)+" ("+t._s(c.merchandise.title)+")\n        ")])],1),t._v(" "),r("td",{staticClass:"cart-table-cell"},[t._v("\n        "+t._s(t.formatCurrency(c.merchandise.priceV2.amount,c.merchandise.priceV2.currencyCode))+"\n      ")]),t._v(" "),r("td",{staticClass:"cart-table-cell"},[t._v(t._s(c.quantity))]),t._v(" "),r("td",{staticClass:"cart-table-cell"},[t._v("\n        "+t._s(t.itemTotal(c.merchandise.priceV2,c.quantity))+"\n      ")]),t._v(" "),r("td",{staticClass:"cart-table-cell"},[r("button",{staticClass:"rounded shadow px-2 p-1 ml-4",on:{click:function(e){return t.removeItem(c.id)}}},[t._v("\n          Delete\n        ")])])])})),0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("th",{staticClass:"cart-table-heading"},[t._v("Item")]),t._v(" "),r("th",{staticClass:"cart-table-heading"},[t._v("Price")]),t._v(" "),r("th",{staticClass:"cart-table-heading"},[t._v("Quantity")]),t._v(" "),r("th",{staticClass:"cart-table-heading"},[t._v("Total")]),t._v(" "),r("th",{staticClass:"cart-table-heading"},[t._v("Actions")])])}],!1,null,"04657d31",null);e.default=component.exports},301:function(t,e,r){"use strict";r.r(e);r(35),r(26),r(34),r(53),r(30),r(54);var c=r(18),n=r(56);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)({subtotal:"cart/subtotal",total:"cart/total"}))},d=(r(293),r(21)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"cart-total"},[r("div",{staticClass:"cart-total-content"},[t._m(0),t._v(" "),r("div",{staticClass:"cart-total-column"},[r("p",[r("strong",[t._v(t._s(t.subtotal))])]),t._v(" "),r("p",[t._v("Free Shipping")]),t._v(" "),r("p",[t._v(t._s(t.total))])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart-total-column"},[r("p",[r("strong",[t._v("Subtotal:")])]),t._v(" "),r("p",[t._v("Shipping:")]),t._v(" "),r("p",[t._v("Total:")])])}],!1,null,"1c8371fb",null);e.default=component.exports},303:function(t,e,r){"use strict";r(297)},304:function(t,e,r){var c=r(51)((function(i){return i[1]}));c.push([t.i,".cart-page[data-v-25e3f452]{width:80vw;margin:0 auto}.cart-page-button.is-dark[data-v-25e3f452]{background:#222;color:#f8f8f8;padding:10px 14px;display:inline-block}.cart-page-content[data-v-25e3f452]{margin:2rem 0 3rem;text-align:center}.cart-page-message[data-v-25e3f452]{margin-bottom:1.5rem}",""]),c.locals={},t.exports=c},310:function(t,e,r){"use strict";r.r(e);r(35),r(26),r(34),r(53),r(30),r(54);var c=r(5),n=r(18),o=(r(55),r(56));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={head:function(){return{title:"Life Fitness - Cart"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({cartId:"cart/id",cartItems:"cart/items",checkoutUrl:"cart/checkoutUrl"})),mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=window.localStorage.getItem("shopifyNuxtCart"))){e.next=5;break}t.$store.dispatch("cart/updateBase",JSON.parse(r)),e.next=9;break;case 5:return e.next=7,t.$http.$post("/api/get-cart",{cartId:t.cartId});case 7:(c=e.sent)&&t.$store.dispatch("cart/updateBase",c.cart);case 9:case"end":return e.stop()}}),e)})))()}},f=(r(303),r(21)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"cart-page"},[r("article",{staticClass:"\n      cart-page-content\n      uppercase\n      flex flex-col\n      justify-center\n      items-center\n      py-6\n    "},[r("h1",{staticClass:"uppercase text-3xl"},[t._v("Your Cart")]),t._v(" "),t.cartItems.length>0?r("div",{staticClass:"w-2/3"},[r("cart-table"),t._v(" "),r("cart-total"),t._v(" "),r("div",{staticClass:"flex justify-end p-2 py-4"},[r("a",{staticClass:"\n            rounded\n            shadow\n            font-bold\n            border\n            hover:bg-black hover:text-white\n            px-2\n            p-1\n            cursor-pointer\n          ",attrs:{target:"blank",href:t.checkoutUrl}},[t._v("Checkout")])])],1):r("section",{staticClass:"p-6"},[r("p",{staticClass:"cart-page-message"},[t._v("Your cart is empty, fill it up!")]),t._v(" "),r("nuxt-link",{staticClass:"cart-page-button rounded shadow hover:bg-gray-800 is-dark",attrs:{to:"/"}},[t._v("\n        Back to Products\n      ")])],1)])])}),[],!1,null,"25e3f452",null);e.default=component.exports;installComponents(component,{CartTable:r(300).default,CartTotal:r(301).default})}}]);