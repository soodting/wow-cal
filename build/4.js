(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{488:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,s=h(n(203)),a=h(n(202)),u=h(n(201)),o=h(n(200)),i=h(n(199)),l=h(n(72)),c=n(2),f=h(c),d=n(668),j=n(507),v=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(719)),m=h(n(644));function h(e){return e&&e.__esModule?e:{default:e}}var p=(0,l.default)({},v),g=(0,j.connectRedux)(function(e){return{market:e.market}},p)(r=function(e){function t(){return(0,a.default)(this,t),(0,o.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return f.default.createElement(c.Fragment,null,f.default.createElement(m.default,{name:"market"}),f.default.createElement(d.Row,null,f.default.createElement(d.Column,{D:12},"Market")))}}]),t}(c.Component))||r;t.default=g},506:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(502)),s=u(n(501)),a=u(n(667));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){return u=(0,s.default)(r.default.mark(function s(u,o){return r.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e(u,o);case 3:n&&n(),t&&t(),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),a.default.open(r.t0),t&&t();case 11:case"end":return r.stop()}},s,void 0,[[0,7]])})),function(e,t){return u.apply(this,arguments)};var u}},507:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(655);Object.defineProperty(t,"connectRedux",{enumerable:!0,get:function(){return i(r).default}});var s=n(654);Object.defineProperty(t,"createFetcher",{enumerable:!0,get:function(){return i(s).default}});var a=n(506);Object.defineProperty(t,"withTryCatch",{enumerable:!0,get:function(){return i(a).default}});var u=n(646);Object.defineProperty(t,"withLoading",{enumerable:!0,get:function(){return i(u).default}});var o=n(645);function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"createActionWithFetching",{enumerable:!0,get:function(){return i(o).default}})},644:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(498)),s=d(n(203)),a=d(n(202)),u=d(n(201)),o=d(n(200)),i=d(n(199)),l=n(2),c=d(l),f=n(204);function d(e){return e&&e.__esModule?e:{default:e}}var j=function(e){function t(){var e,n,u,i;(0,a.default)(this,t);for(var l=arguments.length,d=Array(l),j=0;j<l;j++)d[j]=arguments[j];return n=u=(0,o.default)(this,(e=t.__proto__||(0,s.default)(t)).call.apply(e,[this].concat(d))),u.menuItemList=function(e){var t=[],n=!0,s=!1,a=void 0;try{for(var u,o=(0,r.default)([{name:"market",link:"/market"},{name:"vga",link:"/vga"}]);!(n=(u=o.next()).done);n=!0){var i=u.value;t.push(c.default.createElement("div",{key:i.name,className:"toggle-menu "+(e===i.name&&"active")},c.default.createElement(f.Link,{to:i.link},i.name)))}}catch(e){s=!0,a=e}finally{try{!n&&o.return&&o.return()}finally{if(s)throw a}}return t},i=n,(0,o.default)(u,i)}return(0,i.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.name;return c.default.createElement(l.Fragment,null,c.default.createElement("div",{className:"web-header"},this.menuItemList(e)))}}]),t}(l.Component);t.default=j},645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(656)),s=a(n(506));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.loadingMessage,n=e.successMessage,a=e.endTask,u=e.callAction,o=(0,r.default)({type:"LOADING",message:t});return(0,s.default)(u,function(){o.close(),a&&a()},function(){n&&(0,r.default)({type:"SUCCESS",closeTime:2,message:n})})}},646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(203)),s=f(n(202)),a=f(n(201)),u=f(n(200)),o=f(n(199)),i=f(n(669)),l=f(n(72)),c=f(n(2));function f(e){return e&&e.__esModule?e:{default:e}}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.stateNames,f=void 0===n?[]:n,d="loading",j=function(){return f.length>0?f.reduce(function(e,t){return(0,l.default)({},e,(0,i.default)({},t,!1))},{}):(0,i.default)({},d,!1)};return function(e){function n(){var e,t,a,o;(0,s.default)(this,n);for(var l=arguments.length,c=Array(l),v=0;v<l;v++)c[v]=arguments[v];return t=a=(0,u.default)(this,(e=n.__proto__||(0,r.default)(n)).call.apply(e,[this].concat(c))),a.state=j(),a.isStateNameMissing=function(e){return e!==d&&!f.some(function(t){return t===e})},a.createLoading=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return a.isStateNameMissing(e)?(console.warn(e+" is not defined in stateNames."),function(){return null}):(a.setState((0,i.default)({},e,!0)),function(){return a.hideLoading(e)})},a.hideLoading=function(e){a.setState((0,i.default)({},e,!1))},o=t,(0,u.default)(a,o)}return(0,o.default)(n,e),(0,a.default)(n,[{key:"render",value:function(){var e={createLoading:this.createLoading};return c.default.createElement(t,(0,l.default)({},this.props,this.state,e))}}]),n}(c.default.Component)}}},647:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.convertServiceResponseToError=t.isServiceError=void 0;var r,s=n(504),a=(r=s)&&r.__esModule?r:{default:r};t.isServiceError=function(e,t,n){return!e||!!n.fault||!!n.IsError},t.convertServiceResponseToError=function(e,t){return{type:"ERROR",message:function(e,t){return(0,a.default)(t,"head")?t.head.message:(0,a.default)(t,"message")?t.message[0]:(0,a.default)(t,"messages")?t.messages[0]:(0,a.default)(t,"MessageTH")?t.MessageTH:(0,a.default)(t,"MessageEN")?t.MessageEN:"Service Error "+e}(e,t),closeTime:10}}},653:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchUploadImage=t.fetchPOST=t.fetchGET=t.fetchAPI=void 0;var r=d(n(688)),s=d(n(652)),a=d(n(72)),u=d(n(681)),o=d(n(680)),i=d(n(679)),l=d(n(504)),c=d(n(657)),f=n(647);function d(e){return e&&e.__esModule?e:{default:e}}function j(e,t,n){null==e&&(e={}),null==e.credentials&&(e.credentials="same-origin");var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={t:Date.now()},n=(0,a.default)({},e,t),r=(0,i.default)(n,function(e,t){return t+"="+encodeURIComponent((0,c.default)(e))});return"?"+(0,o.default)(r,"&")}(n);return new s.default(function(n,s){(0,u.default)(""+t+r,e).then(function(e){if(!function(e){var t=-1!==e.url.indexOf("xxo-uat.true.th");return!(!e.redirected||!t)}(e))return{ok:e.ok,status:e.status,response:function(e){return e.text().then(function(e){return e?JSON.parse(e):{}})}(e)};alert("Your User Session Has Expired. Please Log In Now. Session Timeout")}).then(function(e){var t=e.ok,r=e.status,a=e.response;a.then(function(e){var u=(0,l.default)(a,"head.code",r);(0,f.isServiceError)(t,u,e)&&s((0,f.convertServiceResponseToError)(u,e)),n(a)})}).catch(function(e){s((0,f.convertServiceResponseToError)({MessageEN:e.message+" URL: "+t}))})})}t.fetchAPI=j,t.fetchGET=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return j({method:"GET",headers:(0,a.default)({"Content-Type":"application/json"},n),credentials:"same-origin"},e,t)},t.fetchPOST=function(e,t,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return j({method:"POST",headers:(0,a.default)({"Content-Type":"application/json"},s),credentials:"same-origin",body:(0,r.default)(t)},e,n)},t.fetchUploadImage=function(e,t){var n=new FormData;for(var r in t)n.append(r,t[r]);return(0,u.default)(e,{method:"POST",credentials:"same-origin",body:n})}},654:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(653);t.default=function(e){var t=e.method,n=void 0===t?"get":t,s=(e.jsonMock,e.url),a=void 0===s?"":s,u=e.params,o=void 0===u?{}:u,i=e.body,l=void 0===i?{}:i,c=a;return"post"===n?(0,r.fetchPOST)(c,l,o):(0,r.fetchGET)(c,o)}},655:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,s=n(2),a=(r=s)&&r.__esModule?r:{default:r},u=n(67),o=n(144);t.default=function(e,t){return function(n){return(0,o.connect)(e,function(e){return t?{actions:(0,u.bindActionCreators)(t,e)}:{dispatch:e}})(function(e){return a.default.createElement(n,e)})}}},700:function(e,t,n){var r={"./af":641,"./af.js":641,"./ar":640,"./ar-dz":639,"./ar-dz.js":639,"./ar-kw":638,"./ar-kw.js":638,"./ar-ly":637,"./ar-ly.js":637,"./ar-ma":636,"./ar-ma.js":636,"./ar-sa":635,"./ar-sa.js":635,"./ar-tn":634,"./ar-tn.js":634,"./ar.js":640,"./az":633,"./az.js":633,"./be":632,"./be.js":632,"./bg":631,"./bg.js":631,"./bm":630,"./bm.js":630,"./bn":629,"./bn.js":629,"./bo":628,"./bo.js":628,"./br":627,"./br.js":627,"./bs":626,"./bs.js":626,"./ca":625,"./ca.js":625,"./cs":624,"./cs.js":624,"./cv":623,"./cv.js":623,"./cy":622,"./cy.js":622,"./da":621,"./da.js":621,"./de":620,"./de-at":619,"./de-at.js":619,"./de-ch":618,"./de-ch.js":618,"./de.js":620,"./dv":617,"./dv.js":617,"./el":616,"./el.js":616,"./en-au":615,"./en-au.js":615,"./en-ca":614,"./en-ca.js":614,"./en-gb":613,"./en-gb.js":613,"./en-ie":612,"./en-ie.js":612,"./en-il":611,"./en-il.js":611,"./en-nz":610,"./en-nz.js":610,"./eo":609,"./eo.js":609,"./es":608,"./es-do":607,"./es-do.js":607,"./es-us":606,"./es-us.js":606,"./es.js":608,"./et":605,"./et.js":605,"./eu":604,"./eu.js":604,"./fa":603,"./fa.js":603,"./fi":602,"./fi.js":602,"./fo":601,"./fo.js":601,"./fr":600,"./fr-ca":599,"./fr-ca.js":599,"./fr-ch":598,"./fr-ch.js":598,"./fr.js":600,"./fy":597,"./fy.js":597,"./gd":596,"./gd.js":596,"./gl":595,"./gl.js":595,"./gom-latn":594,"./gom-latn.js":594,"./gu":593,"./gu.js":593,"./he":592,"./he.js":592,"./hi":591,"./hi.js":591,"./hr":590,"./hr.js":590,"./hu":589,"./hu.js":589,"./hy-am":588,"./hy-am.js":588,"./id":587,"./id.js":587,"./is":586,"./is.js":586,"./it":585,"./it.js":585,"./ja":584,"./ja.js":584,"./jv":583,"./jv.js":583,"./ka":582,"./ka.js":582,"./kk":581,"./kk.js":581,"./km":580,"./km.js":580,"./kn":579,"./kn.js":579,"./ko":578,"./ko.js":578,"./ky":577,"./ky.js":577,"./lb":576,"./lb.js":576,"./lo":575,"./lo.js":575,"./lt":574,"./lt.js":574,"./lv":573,"./lv.js":573,"./me":572,"./me.js":572,"./mi":571,"./mi.js":571,"./mk":570,"./mk.js":570,"./ml":569,"./ml.js":569,"./mn":568,"./mn.js":568,"./mr":567,"./mr.js":567,"./ms":566,"./ms-my":565,"./ms-my.js":565,"./ms.js":566,"./mt":564,"./mt.js":564,"./my":563,"./my.js":563,"./nb":562,"./nb.js":562,"./ne":561,"./ne.js":561,"./nl":560,"./nl-be":559,"./nl-be.js":559,"./nl.js":560,"./nn":558,"./nn.js":558,"./pa-in":557,"./pa-in.js":557,"./pl":556,"./pl.js":556,"./pt":555,"./pt-br":554,"./pt-br.js":554,"./pt.js":555,"./ro":553,"./ro.js":553,"./ru":552,"./ru.js":552,"./sd":551,"./sd.js":551,"./se":550,"./se.js":550,"./si":549,"./si.js":549,"./sk":548,"./sk.js":548,"./sl":547,"./sl.js":547,"./sq":546,"./sq.js":546,"./sr":545,"./sr-cyrl":544,"./sr-cyrl.js":544,"./sr.js":545,"./ss":543,"./ss.js":543,"./sv":542,"./sv.js":542,"./sw":541,"./sw.js":541,"./ta":540,"./ta.js":540,"./te":539,"./te.js":539,"./tet":538,"./tet.js":538,"./tg":537,"./tg.js":537,"./th":536,"./th.js":536,"./tl-ph":535,"./tl-ph.js":535,"./tlh":534,"./tlh.js":534,"./tr":533,"./tr.js":533,"./tzl":532,"./tzl.js":532,"./tzm":531,"./tzm-latn":530,"./tzm-latn.js":530,"./tzm.js":531,"./ug-cn":529,"./ug-cn.js":529,"./uk":528,"./uk.js":528,"./ur":527,"./ur.js":527,"./uz":526,"./uz-latn":525,"./uz-latn.js":525,"./uz.js":526,"./vi":524,"./vi.js":524,"./x-pseudo":523,"./x-pseudo.js":523,"./yo":522,"./yo.js":522,"./zh-cn":521,"./zh-cn.js":521,"./zh-hk":520,"./zh-hk.js":520,"./zh-tw":519,"./zh-tw.js":519};function s(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id=700},719:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getMarket=function(){return{x1:1,x2:2}}}}]);