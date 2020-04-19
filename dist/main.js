!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=24)}([function(e,t,n){"use strict";t.__esModule=!0,t.extend=i,t.indexOf=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!l.test(e))return e;return e.replace(o,a)},t.isEmpty=function(e){return!e&&0!==e||!(!u(e)||0!==e.length)},t.createFrame=function(e){var t=i({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,l=/[&<>"'`=]/;function a(e){return r[e]}function i(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var c=Object.prototype.toString;t.toString=c;var s=function(e){return"function"==typeof e};s(/x/)&&(t.isFunction=s=function(e){return"function"==typeof e&&"[object Function]"===c.call(e)}),t.isFunction=s;var u=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===c.call(e)};t.isArray=u},function(e,t,n){"use strict";t.__esModule=!0;var r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function o(e,t){var n=t&&t.loc,l=void 0,a=void 0,i=void 0,c=void 0;n&&(l=n.start.line,a=n.end.line,i=n.start.column,c=n.end.column,e+=" - "+l+":"+i);for(var s=Error.prototype.constructor.call(this,e),u=0;u<r.length;u++)this[r[u]]=s[r[u]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{n&&(this.lineNumber=l,this.endLineNumber=a,Object.defineProperty?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:c,enumerable:!0})):(this.column=i,this.endColumn=c))}catch(e){}}o.prototype=new Error,t.default=o,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=u;var o=n(0),l=r(n(1)),a=n(3),i=n(17),c=r(n(5)),s=n(6);t.VERSION="4.7.6";t.COMPILER_REVISION=8;t.LAST_COMPATIBLE_COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function u(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},a.registerDefaultHelpers(this),i.registerDefaultDecorators(this)}u.prototype={constructor:u,logger:c.default,log:c.default.log,registerHelper:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new l.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===o.toString.call(e))o.extend(this.partials,e);else{if(void 0===t)throw new l.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new l.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){s.resetLoggedProperties()}};var p=c.default.log;t.log=p,t.createFrame=o.createFrame,t.logger=c.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),l.default(e),a.default(e),i.default(e),c.default(e),s.default(e),u.default(e)},t.moveHelperToHooks=function(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])};var o=r(n(10)),l=r(n(11)),a=r(n(12)),i=r(n(13)),c=r(n(14)),s=r(n(15)),u=r(n(16))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=r.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),l=1;l<n;l++)r[l-1]=arguments[l];console[t].apply(console,r)}}};t.default=o,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.createProtoAccessControl=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:r.createNewLookupObject(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:r.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,n){return a("function"==typeof e?t.methods:t.properties,n)},t.resetLoggedProperties=function(){Object.keys(l).forEach((function(e){delete l[e]}))};var r=n(19),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(5)),l=Object.create(null);function a(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==l[e]&&(l[e]=!0,o.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}},function(e,t,n){var r=n(8);e.exports=(r.default||r).template({1:function(e,t,n,r,o){var l,a,i=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,s="function",u=e.escapeExpression,p=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'        <div class="projects__description projects__description_light-gray">\n            <div class="projects__top">\n                <picture class="projects__description-icon">\n                    <source srcset="/dist/img/'+u(typeof(a=null!=(a=p(n,"description-icon")||(null!=t?p(t,"description-icon"):t))?a:c)===s?a.call(i,{name:"description-icon",hash:{},data:o,loc:{start:{line:5,column:46},end:{line:5,column:66}}}):a)+'.svg" type="image/svg+xml">\n                    <img src="/dist/img/'+u(typeof(a=null!=(a=p(n,"description-icon")||(null!=t?p(t,"description-icon"):t))?a:c)===s?a.call(i,{name:"description-icon",hash:{},data:o,loc:{start:{line:6,column:40},end:{line:6,column:60}}}):a)+'.png" alt="'+u(typeof(a=null!=(a=p(n,"project-h")||(null!=t?p(t,"project-h"):t))?a:c)===s?a.call(i,{name:"project-h",hash:{},data:o,loc:{start:{line:6,column:71},end:{line:6,column:84}}}):a)+'">\n                </picture>\n               <div>'+u(typeof(a=null!=(a=p(n,"project-h")||(null!=t?p(t,"project-h"):t))?a:c)===s?a.call(i,{name:"project-h",hash:{},data:o,loc:{start:{line:8,column:20},end:{line:8,column:33}}}):a)+'</div>\n               <div class="projects__menu" id="menuTop">Меню</div>\n               <div class="projects__menu-list" style="display: none;">\n                   <p class="projects__menu-item menu__target">'+u(typeof(a=null!=(a=p(n,"other-project1")||(null!=t?p(t,"other-project1"):t))?a:c)===s?a.call(i,{name:"other-project1",hash:{},data:o,loc:{start:{line:11,column:63},end:{line:11,column:81}}}):a)+'</p>\n                   <p class="projects__menu-item menu__target">'+u(typeof(a=null!=(a=p(n,"other-project2")||(null!=t?p(t,"other-project2"):t))?a:c)===s?a.call(i,{name:"other-project2",hash:{},data:o,loc:{start:{line:12,column:63},end:{line:12,column:81}}}):a)+'</p>\n                   <p class="projects__menu-item menu__target">Главное меню</p>\n               </div>\n            </div>\n            \n            <div class="projects__bottom projects__text">\n                <h1 class="projects__h1 projects__text_middle-gray">'+u(typeof(a=null!=(a=p(n,"project-name")||(null!=t?p(t,"project-name"):t))?a:c)===s?a.call(i,{name:"project-name",hash:{},data:o,loc:{start:{line:18,column:68},end:{line:18,column:84}}}):a)+'</h1>\n                <div class="projects__text-min projects__text_middle-gray">'+u(typeof(a=null!=(a=p(n,"project-text")||(null!=t?p(t,"project-text"):t))?a:c)===s?a.call(i,{name:"project-text",hash:{},data:o,loc:{start:{line:19,column:75},end:{line:19,column:91}}}):a)+"</div>\n"+(null!=(l=p(n,"if").call(i,null!=t?p(t,"project-skills"):t,{name:"if",hash:{},fn:e.program(2,o,0),inverse:e.noop,data:o,loc:{start:{line:20,column:16},end:{line:27,column:23}}}))?l:"")+(null!=(l=p(n,"if").call(i,null!=t?p(t,"phone"):t,{name:"if",hash:{},fn:e.program(5,o,0),inverse:e.noop,data:o,loc:{start:{line:28,column:16},end:{line:44,column:23}}}))?l:"")+(null!=(l=p(n,"if").call(i,null!=t?p(t,"project-site-href"):t,{name:"if",hash:{},fn:e.program(14,o,0),inverse:e.noop,data:o,loc:{start:{line:45,column:16},end:{line:47,column:23}}}))?l:"")+(null!=(l=p(n,"if").call(i,null!=t?p(t,"project-git-href"):t,{name:"if",hash:{},fn:e.program(16,o,0),inverse:e.noop,data:o,loc:{start:{line:48,column:16},end:{line:50,column:23}}}))?l:"")+"            </div>\n        </div>\n"+(null!=(l=p(n,"if").call(i,null!=t?p(t,"project-image-big"):t,{name:"if",hash:{},fn:e.program(18,o,0),inverse:e.noop,data:o,loc:{start:{line:53,column:8},end:{line:78,column:15}}}))?l:"")},2:function(e,t,n,r,o){var l,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                <div class="projects__text-min projects__text_middle-gray">Ключевые навыки:</div>\n                <ul class="projects__list projects__text_middle-gray">\n'+(null!=(l=a(n,"each").call(null!=t?t:e.nullContext||{},null!=t?a(t,"project-skills"):t,{name:"each",hash:{},fn:e.program(3,o,0),inverse:e.noop,data:o,loc:{start:{line:23,column:20},end:{line:25,column:29}}}))?l:"")+"                </ul>\n"},3:function(e,t,n,r,o){return"                    <li>"+e.escapeExpression(e.lambda(t,t))+"</li>\n"},5:function(e,t,n,r,o){var l,a,i=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,s=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                <ul class="projects__list">\n'+(null!=(l=u(n,"with").call(i,null!=t?u(t,"phone"):t,{name:"with",hash:{},fn:e.program(6,o,0),inverse:e.noop,data:o,loc:{start:{line:30,column:16},end:{line:32,column:25}}}))?l:"")+'                <li>E-mail: <a href="mailto:'+s("function"==typeof(a=null!=(a=u(n,"e-mail")||(null!=t?u(t,"e-mail"):t))?a:c)?a.call(i,{name:"e-mail",hash:{},data:o,loc:{start:{line:33,column:44},end:{line:33,column:54}}}):a)+'" class="projects__text_middle-gray">'+s("function"==typeof(a=null!=(a=u(n,"e-mail")||(null!=t?u(t,"e-mail"):t))?a:c)?a.call(i,{name:"e-mail",hash:{},data:o,loc:{start:{line:33,column:91},end:{line:33,column:101}}}):a)+"</a></li>\n"+(null!=(l=u(n,"with").call(i,null!=t?u(t,"vk"):t,{name:"with",hash:{},fn:e.program(8,o,0),inverse:e.noop,data:o,loc:{start:{line:34,column:16},end:{line:36,column:25}}}))?l:"")+(null!=(l=u(n,"with").call(i,null!=t?u(t,"linkedin"):t,{name:"with",hash:{},fn:e.program(10,o,0),inverse:e.noop,data:o,loc:{start:{line:37,column:16},end:{line:39,column:25}}}))?l:"")+(null!=(l=u(n,"with").call(i,null!=t?u(t,"github"):t,{name:"with",hash:{},fn:e.program(12,o,0),inverse:e.noop,data:o,loc:{start:{line:40,column:16},end:{line:42,column:25}}}))?l:"")+"                </ul>\n"},6:function(e,t,n,r,o){var l,a=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                <li>Тел: <a href="tel:'+c("function"==typeof(l=null!=(l=s(n,"href")||(null!=t?s(t,"href"):t))?l:i)?l.call(a,{name:"href",hash:{},data:o,loc:{start:{line:31,column:38},end:{line:31,column:46}}}):l)+'" class="projects__text_middle-gray">'+c("function"==typeof(l=null!=(l=s(n,"text")||(null!=t?s(t,"text"):t))?l:i)?l.call(a,{name:"text",hash:{},data:o,loc:{start:{line:31,column:83},end:{line:31,column:91}}}):l)+"</a></li>\n"},8:function(e,t,n,r,o){var l,a=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                <li>Vk: <a href="'+c("function"==typeof(l=null!=(l=s(n,"href")||(null!=t?s(t,"href"):t))?l:i)?l.call(a,{name:"href",hash:{},data:o,loc:{start:{line:35,column:33},end:{line:35,column:41}}}):l)+'" target="_blank" class="projects__text_middle-gray">'+c("function"==typeof(l=null!=(l=s(n,"text")||(null!=t?s(t,"text"):t))?l:i)?l.call(a,{name:"text",hash:{},data:o,loc:{start:{line:35,column:94},end:{line:35,column:102}}}):l)+"</a></li>\n"},10:function(e,t,n,r,o){var l,a=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                <li>Linkedin: <a href="'+c("function"==typeof(l=null!=(l=s(n,"href")||(null!=t?s(t,"href"):t))?l:i)?l.call(a,{name:"href",hash:{},data:o,loc:{start:{line:38,column:39},end:{line:38,column:47}}}):l)+'" target="_blank" class="projects__text_middle-gray">'+c("function"==typeof(l=null!=(l=s(n,"text")||(null!=t?s(t,"text"):t))?l:i)?l.call(a,{name:"text",hash:{},data:o,loc:{start:{line:38,column:100},end:{line:38,column:108}}}):l)+"</a></li>\n"},12:function(e,t,n,r,o){var l,a=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                <li>Github: <a href="'+c("function"==typeof(l=null!=(l=s(n,"href")||(null!=t?s(t,"href"):t))?l:i)?l.call(a,{name:"href",hash:{},data:o,loc:{start:{line:41,column:37},end:{line:41,column:45}}}):l)+'" target="_blank" class="projects__text_middle-gray">'+c("function"==typeof(l=null!=(l=s(n,"text")||(null!=t?s(t,"text"):t))?l:i)?l.call(a,{name:"text",hash:{},data:o,loc:{start:{line:41,column:98},end:{line:41,column:106}}}):l)+"</a></li>\n"},14:function(e,t,n,r,o){var l,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                <button class="projects__btn"><a href="'+e.escapeExpression("function"==typeof(l=null!=(l=a(n,"project-site-href")||(null!=t?a(t,"project-site-href"):t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"project-site-href",hash:{},data:o,loc:{start:{line:46,column:55},end:{line:46,column:76}}}):l)+'" target="_blank" class="projects__text_middle-gray">Перейти на сайт</a></button>\n'},16:function(e,t,n,r,o){var l,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                <button class="projects__btn projects__text_middle-gray"><a href="'+e.escapeExpression("function"==typeof(l=null!=(l=a(n,"project-git-href")||(null!=t?a(t,"project-git-href"):t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"project-git-href",hash:{},data:o,loc:{start:{line:49,column:82},end:{line:49,column:102}}}):l)+'" target="_blank" class="projects__text_middle-gray">Перейти на Github</a></button>\n'},18:function(e,t,n,r,o){var l,a=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'        <div class="projects__view">\n            <div class="projects__main projects__main_middle-gray">\n                <picture class="projects__main-icon">\n                    <source srcset="/dist/img/'+c("function"==typeof(l=null!=(l=s(n,"project-image-big")||(null!=t?s(t,"project-image-big"):t))?l:i)?l.call(a,{name:"project-image-big",hash:{},data:o,loc:{start:{line:57,column:46},end:{line:57,column:67}}}):l)+'.webp" type="webp">\n                    <img src="/dist/img/'+c("function"==typeof(l=null!=(l=s(n,"project-image-big")||(null!=t?s(t,"project-image-big"):t))?l:i)?l.call(a,{name:"project-image-big",hash:{},data:o,loc:{start:{line:58,column:40},end:{line:58,column:61}}}):l)+'.png" alt="Проект">\n                </picture> \n            </div>\n            <div class="projects__scroll projects__scroll_middle-gray projects__scroll-back projects__scroll_down" style="background-image: url(/distimg/'+c("function"==typeof(l=null!=(l=s(n,"project-image-next-min")||(null!=t?s(t,"project-image-next-min"):t))?l:i)?l.call(a,{name:"project-image-next-min",hash:{},data:o,loc:{start:{line:61,column:153},end:{line:61,column:179}}}):l)+'.png);">\n                <div class="project__overlay">\n                    <picture class="project__overlay-icon">\n                        <source srcset="/dist/img/icon-4.svg" type="image/svg+xml">\n                        <img src="/dist/img/icon-4.png" alt="Стрелка вниз">\n                    </picture>\n                </div>\n            </div>\n            <div class="projects__scroll projects__scroll_light-gray projects__scroll-back projects__scroll_up" style="background-image: url(/distimg/'+c("function"==typeof(l=null!=(l=s(n,"project-image-before-min")||(null!=t?s(t,"project-image-before-min"):t))?l:i)?l.call(a,{name:"project-image-before-min",hash:{},data:o,loc:{start:{line:69,column:150},end:{line:69,column:178}}}):l)+'.png);">\n                <div class="project__overlay">\n                    <picture class="project__overlay-icon">\n                        <source srcset="/dist/img/icon-5.svg" type="image/svg+xml">\n                        <img src="/dist/img/icon-5.png" alt="Стрелка вверх">\n                    </picture>\n                </div>\n            </div>\n        </div>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,o){var l,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(l=a(n,"if").call(null!=t?t:e.nullContext||{},null!=t?a(t,"project-h"):t,{name:"if",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:8},end:{line:79,column:15}}}))?l:""},useData:!0})},function(e,t,n){e.exports=n(9).default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.__esModule=!0;var l=o(n(2)),a=r(n(20)),i=r(n(1)),c=o(n(0)),s=o(n(21)),u=r(n(23));function p(){var e=new l.HandlebarsEnvironment;return c.extend(e,l),e.SafeString=a.default,e.Exception=i.default,e.Utils=c,e.escapeExpression=c.escapeExpression,e.VM=s,e.template=function(t){return s.template(t,e)},e}var f=p();f.create=p,u.default(f),f.default=f,t.default=f,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,n){var o=n.inverse,l=n.fn;if(!0===t)return l(this);if(!1===t||null==t)return o(this);if(r.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):o(this);if(n.data&&n.ids){var a=r.createFrame(n.data);a.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:a}}return l(t,n)}))},e.exports=t.default},function(e,t,n){"use strict";(function(r){t.__esModule=!0;var o,l=n(0),a=n(1),i=(o=a)&&o.__esModule?o:{default:o};t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new i.default("Must pass iterator to #each");var n,o=t.fn,a=t.inverse,c=0,s="",u=void 0,p=void 0;function f(t,n,r){u&&(u.key=t,u.index=n,u.first=0===n,u.last=!!r,p&&(u.contextPath=p+t)),s+=o(e[t],{data:u,blockParams:l.blockParams([e[t],t],[p+t,null])})}if(t.data&&t.ids&&(p=l.appendContextPath(t.data.contextPath,t.ids[0])+"."),l.isFunction(e)&&(e=e.call(this)),t.data&&(u=l.createFrame(t.data)),e&&"object"==typeof e)if(l.isArray(e))for(var d=e.length;c<d;c++)c in e&&f(c,c,c===e.length-1);else if(r.Symbol&&e[r.Symbol.iterator]){for(var h=[],m=e[r.Symbol.iterator](),_=m.next();!_.done;_=m.next())h.push(_.value);for(d=(e=h).length;c<d;c++)f(c,c,c===e.length-1)}else n=void 0,Object.keys(e).forEach((function(e){void 0!==n&&f(n,c-1),n=e,c++})),void 0!==n&&f(n,c-1,!0);return 0===c&&(s=a(this)),s}))},e.exports=t.default}).call(this,n(4))},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(1),l=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new l.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(0),l=n(1),a=(r=l)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new a.default("#if requires exactly one argument");return o.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||o.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new a.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var o=1;null!=n.hash.level?o=n.hash.level:n.data&&null!=n.data.level&&(o=n.data.level),t[0]=o,e.log.apply(e,t)}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",(function(e,t,n){return e?n.lookupProperty(e,t):e}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(0),l=n(1),a=(r=l)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new a.default("#with requires exactly one argument");o.isFunction(e)&&(e=e.call(this));var n=t.fn;if(o.isEmpty(e))return t.inverse(this);var r=t.data;return t.data&&t.ids&&((r=o.createFrame(t.data)).contextPath=o.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:o.blockParams([e],[r&&r.contextPath])})}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){l.default(e)};var r,o=n(18),l=(r=o)&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerDecorator("inline",(function(e,t,n,o){var l=e;return t.partials||(t.partials={},l=function(o,l){var a=n.partials;n.partials=r.extend({},a,t.partials);var i=e(o,l);return n.partials=a,i}),t.partials[o.args[0]]=o.fn,l}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.extend.apply(void 0,[Object.create(null)].concat(t))};var r=n(0)},function(e,t,n){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,n=i.COMPILER_REVISION;if(t>=i.LAST_COMPATIBLE_COMPILER_REVISION&&t<=i.COMPILER_REVISION)return;if(t<i.LAST_COMPATIBLE_COMPILER_REVISION){var r=i.REVISION_CHANGES[n],o=i.REVISION_CHANGES[t];throw new a.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+o+").")}throw new a.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},t.template=function(e,t){if(!t)throw new a.default("No environment passed to template");if(!e||!e.main)throw new a.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n=e.compiler&&7===e.compiler[0];var r={strict:function(e,t,n){if(!(e&&t in e))throw new a.default('"'+t+'" not defined in '+e,{loc:n});return e[t]},lookupProperty:function(e,t){var n=e[t];return null==n||Object.prototype.hasOwnProperty.call(e,t)||u.resultIsAllowed(n,r.protoAccessControl,t)?n:void 0},lookup:function(e,t){for(var n=e.length,o=0;o<n;o++){if(null!=(e[o]&&r.lookupProperty(e[o],t)))return e[o][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:o.escapeExpression,invokePartial:function(n,r,l){l.hash&&(r=o.extend({},r,l.hash),l.ids&&(l.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,l);var i=o.extend({},l,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),c=t.VM.invokePartial.call(this,n,r,i);if(null==c&&t.compile&&(l.partials[l.name]=t.compile(n,e.compilerOptions,t),c=l.partials[l.name](r,i)),null!=c){if(l.indent){for(var s=c.split("\n"),u=0,p=s.length;u<p&&(s[u]||u+1!==p);u++)s[u]=l.indent+s[u];c=s.join("\n")}return c}throw new a.default("The partial "+l.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,o){var l=this.programs[e],a=this.fn(e);return t||o||r||n?l=p(this,e,a,t,n,r,o):l||(l=this.programs[e]=p(this,e,a)),l},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=o.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function l(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=n.data;l._setup(n),!n.partial&&e.useData&&(o=d(t,o));var a=void 0,i=e.useBlockParams?[]:void 0;function c(t){return""+e.main(r,t,r.helpers,r.partials,o,i,a)}return e.useDepths&&(a=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(c=h(e.main,c,r,n.depths||[],o,i))(t,n)}return l.isTop=!0,l._setup=function(l){if(l.partial)r.protoAccessControl=l.protoAccessControl,r.helpers=l.helpers,r.partials=l.partials,r.decorators=l.decorators,r.hooks=l.hooks;else{var a=o.extend({},t.helpers,l.helpers);!function(e,t){Object.keys(e).forEach((function(n){var r=e[n];e[n]=function(e,t){var n=t.lookupProperty;return s.wrapHelper(e,(function(e){return o.extend({lookupProperty:n},e)}))}(r,t)}))}(a,r),r.helpers=a,e.usePartial&&(r.partials=r.mergeIfNeeded(l.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=o.extend({},t.decorators,l.decorators)),r.hooks={},r.protoAccessControl=u.createProtoAccessControl(l);var i=l.allowCallsToHelperMissing||n;c.moveHelperToHooks(r,"helperMissing",i),c.moveHelperToHooks(r,"blockHelperMissing",i)}},l._child=function(t,n,o,l){if(e.useBlockParams&&!o)throw new a.default("must pass block params");if(e.useDepths&&!l)throw new a.default("must pass parent depths");return p(r,t,e[t],n,0,o,l)},l},t.wrapProgram=p,t.resolvePartial=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},t.invokePartial=function(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var l=void 0;n.fn&&n.fn!==f&&function(){n.data=i.createFrame(n.data);var e=n.fn;l=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=i.createFrame(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=o.extend({},n.partials,e.partials))}();void 0===e&&l&&(e=l);if(void 0===e)throw new a.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},t.noop=f;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),l=n(1),a=(r=l)&&r.__esModule?r:{default:r},i=n(2),c=n(3),s=n(22),u=n(6);function p(e,t,n,r,o,l,a){function i(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=a;return!a||t==a[0]||t===e.nullContext&&null===a[0]||(i=[t].concat(a)),n(e,t,e.helpers,e.partials,o.data||r,l&&[o.blockParams].concat(l),i)}return(i=h(n,i,e,a,r,l)).program=t,i.depth=a?a.length:0,i.blockParams=o||0,i}function f(){return""}function d(e,t){return t&&"root"in t||((t=t?i.createFrame(t):{}).root=e),t}function h(e,t,n,r,l,a){if(e.decorator){var i={};t=e.decorator(t,i,n,r&&r[0],l,a,r),o.extend(t,i)}return t}},function(e,t,n){"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){if("function"!=typeof e)return e;return function(){var n=arguments[arguments.length-1];return arguments[arguments.length-1]=t(n),e.apply(this,arguments)}}},function(e,t,n){"use strict";(function(n){t.__esModule=!0,t.default=function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default}).call(this,n(4))},function(e,t,n){"use strict";n.r(t);n(25);var r=n(7),o=n.n(r),l=function(e){if(document.querySelector("#projects").innerHTML=o()(e),"Контакты"==e["project-h"])document.querySelector(".projects__description").style.width="100%";else if("Обо мне"==e["project-h"]){var t=document.querySelector(".projects__main-icon img"),n=document.querySelector(".projects__main-icon source");t.style.width="60%",n.style.width="60%",t.style.marginTop="2%",n.style.marginTop="2%"}},a=function(){var e=document.querySelector("#menuTop"),t=document.querySelector("body");null!=e&&t.addEventListener("click",(function(t){var n=document.querySelector(".projects__menu-list"),r=n.style.display;t.target==e?n.style.display="block"==r?"none":"block":"block"==r&&(n.style.display="none")}))},i=function e(t,n){var r=document.querySelector(".projects__scroll_up"),o=document.querySelector(".projects__scroll_down");r&&o&&(r.addEventListener("click",(function(){var r=parseInt(n.replace(/[^\d]/g,""));if(r<4){var o=t+ ++r;u(o).then((function(e){return l(e)})).then((function(){return a()})).then((function(){return c()})).then((function(){return e(t,o)}))}else{var i=t+1;u(i).then((function(e){return l(e)})).then((function(){return a()})).then((function(){return c()})).then((function(){return e(t,i)}))}})),o.addEventListener("click",(function(){var r=parseInt(n.replace(/[^\d]/g,""));if(1!=r){var o=t+--r;u(o).then((function(e){return l(e)})).then((function(){return a()})).then((function(){return c()})).then((function(){return e(t,o)}))}else{var i=t+(r+3);u(i).then((function(e){return l(e)})).then((function(){return a()})).then((function(){return c()})).then((function(){return e(t,i)}))}})))},c=function e(){var t=document.querySelector("body");t&&t.addEventListener("click",(function(t){var n=document.querySelector("#menuPage"),r=document.querySelector("#projects");"Мои проекты"==t.target.innerText||"Мои проекты"==t.target.alt&&s(t.target.className)?(n&&(n.style.display="none"),r&&(r.style.display="flex"),u("project1").then((function(e){return l(e)})).then((function(){return a()})).then((function(){return e()})).then((function(){return i("project","project1")}))):"Обо мне"==t.target.innerText||"Обо мне"==t.target.alt&&s(t.target.className)?(n&&(n.style.display="none"),r&&(r.style.display="flex"),u("about1").then((function(e){return l(e)})).then((function(){return a()})).then((function(){return e()})).then((function(){return i("about","about1")}))):"Контакты"==t.target.innerText||"Контакты"==t.target.alt&&s(t.target.className)?(n&&(n.style.display="none"),r&&(r.style.display="flex"),u("contacts").then((function(e){return l(e)})).then((function(){return a()})).then((function(){return e()}))):"Главное меню"==t.target.innerText&&s(t.target.className)&&(r&&(r.style.display="none"),n&&(n.style.display="flex"))}))},s=function(e){return e.toUpperCase().indexOf("menu__target".toUpperCase())>=0},u=function(e){return new Promise((function(t,n){var r=new XMLHttpRequest;r.open("GET","data/data.json"),r.responseType="json",r.onload=function(){if(200==this.status){var r,o=this.response;for(var l in o)l==e&&(r=o[l]);t(r)}else{var a=new Error(this.statusText);a.code=this.status,n(a)}},r.onerror=function(){n(new Error("Network Error"))},r.send()}))};a(),c()},function(e,t){}]);