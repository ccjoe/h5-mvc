define("Store",[],function(){var e=window.localStorage,t=function(e){if(typeof e!="string")return undefined;try{return JSON.parse(e)}catch(t){return e||undefined}},n=function(e){return e===void 0||typeof e=="function"?e+"":JSON.stringify(e)},r=function(e,t){return t===void 0?n({value:e}):n({value:e,expire:+(new Date)+t})},i={on:function(e){window.addEventListener("storage",function(t){e(t)})},each:function(t){var n=this;for(var r=0;r<e.length;r++)key=e.key[r],val=n.noexpire(key),val&&t(key,val)},noexpire:function(n){if(n===void 0)return null;var r=(new Date).getTime(),i=t(e.getItem(n));return i?i.expire!==void 0&&r>=i.expire?(this.del(n),null):i.value:null},get:function(e){if(e)return this.noexpire(e);var t={};return this.each(function(e,n){t[e]=n}),t},set:function(t,n,i){if(typeof t=="string")return e.setItem(t,r(n,i)),this;var s=t;for(var o in s)n=s[o],this.set(o,n,i)},del:function(t){return e.removeItem(t),this},cls:function(){return e.clear(),this},has:function(t){return e.hasOwnProperty(t)},size:function(e){var t=JSON.stringify(localStorage).length;return e?e==="KB"?t/1024:e==="MB"?t/1024/1024:t:t}};return i}),define("UITmpl",[],function(){return function(obj){var __t,__p="",__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,"")};with(obj||{})__p+='<script id="ui.button" type="text/template">\r\n<button class="btn btn-{{= data.type }} {{= data.outline ? \'btn-outlined\':\'\'}} {{= data.isblock ? \'btn-block\' : \'\'}}">\r\n    {{ if(data.icon){ }}<span class="icon {{= data.icon }}"></span>{{ } }}\r\n    {{= data.title }}\r\n    {{ if(data.badge!==void 0){ }}\r\n    <span class="badge badge-{{= data.type}}">{{=data.badge}}</span>\r\n    {{ } }}\r\n</button>\r\n</script>\r\n\r\n<script id="ui.header" type="text/template">\r\n{{ _.each([\'left\', \'right\'], function(posi){ }}\r\n{{ var type= data[posi].type, text = data[posi].text, icon=data[posi].icon || \'icon-\'+posi+\'-nav\'; }}\r\n{{ if(type === \'button\'){ }}<button class="btn pull-{{=posi}}">{{= text }}</button>{{ } }}\r\n{{ if(type === \'icon\'){  }}<a class="icon {{= icon }} pull-{{=posi}}">{{= text }}</a>{{ } }}\r\n{{ if(type === \'link\'){  }}<button class="btn btn-link btn-nav pull-{{=posi}}">{{= text }}</button>{{ } }}\r\n{{ }); }}\r\n\r\n<div class="title-wrapper {{=data.subtitle ? \'title-ms\' : \'\'}}">\r\n    <h1 class="title">{{=data.title}}</h1>\r\n    {{ if(data.subtitle){ }}<h2 class="subtitle">{{=data.subtitle}}</h2>{{ } }}\r\n</div>\r\n</script>\r\n\r\n<script id="ui.list" type="text/template">\r\n{{= data.card ? \'<div class="card">\' : \'\' }}\r\n<ul class="table-view">\r\n    {{ _.each(data.list, function(item){ }}\r\n\r\n    <li class="{{= item.isDivider?\'table-view-divider\':\'table-view-cell\' }}{{= item.collapse ? \' table-view-collapse\' : \'\' }}">\r\n        {{ if(item.isDivider){ }}{{=item.title}}{{ return; } }}\r\n        <a class="navigate-right" href="{{= item.hash ? item.hash : \'javascript:\' }}">\r\n            {{ if(item.badge !== void 0){ }}\r\n            <span class="badge">{{=item.badge}}</span>\r\n            {{ } }}\r\n            {{ if(data.media){ }}\r\n            {{ if(data.media === \'img\' && item.img){ }}\r\n            <img class="media-object pull-left" src="{{= item.img }}">\r\n            {{ }else{ }}\r\n            <span class="media-object pull-left icon {{= item.icon }}"></span>\r\n            {{ } }}\r\n            {{ } }}\r\n            <div class="media-body">\r\n                {{=item.title}}\r\n                <p>{{=item.desc}}</p>\r\n            </div>\r\n        </a>\r\n    </li>\r\n    {{  }); }}\r\n</ul>\r\n{{= data.card ? \'</div>\' : \'\' }}\r\n</script>\r\n\r\n<script id="ui.modal" type="text/template">\r\n{{ if(data.type.indexOf(\'toast\') === -1 ){ }}\r\n<div class="modal-overlay modal-overlay-visible"></div>\r\n<div class="modal-layout  modal-{{=data.type}} {{=data.class}}">\r\n    <div class="modal-inner">\r\n        {{ if(data.type === \'loading\'){ }}\r\n        <div class="spinner">\r\n            <div class="double-bounce1"></div>\r\n            <div class="double-bounce2"></div>\r\n        </div>\r\n        {{ }else{ }}\r\n        <div class="modal-title">\r\n            {{if(data.type===\'bottom\' && data.btns.yes && data.btns.no){ }}<span class=\'btn btn-link modal-btn-no\'>{{=data.btns.no}}</span>{{=data.title}}<span class=\'btn btn-link modal-btn-yes\'>{{=data.btns.yes}}</span>\r\n            {{ }else{ }}\r\n                {{=data.title}}\r\n            {{ } }}\r\n        </div>\r\n        <div class="modal-text">{{=data.content}}</div>\r\n        {{ } }}\r\n    </div>\r\n    {{ var btns = data.btns; if(btns && (data.type!==\'bottom\')){ }}\r\n    <div class="modal-buttons">\r\n        {{ if(btns.yes){ }}<span class="modal-button modal-btn-yes modal-button-bold">{{= btns.yes}}</span> {{ } }}\r\n        {{ if(btns.no){ }}<span class="modal-button modal-btn-no modal-button-bold">{{= btns.no}}</span> {{ } }}\r\n        {{ if(btns.cancel){ }}<span class="modal-button modal-btn-def modal-button-bold">{{= btns.def}}</span> {{ } }}\r\n    </div>\r\n    {{ } }}\r\n</div>\r\n{{ }else{ }}\r\n<div class="modal-toast modal-{{=data.type}}" >\r\n    {{var type = data.type.match(/toast-(\\w+)/)[1] }}\r\n    <span class="icon icon-{{= type===\'info\' ? \'info\' : (type===\'error\'?\'close\': \'check\')  }}">{{=data.content}}</span>\r\n</div>\r\n{{ } }}\r\n</script>\r\n\r\n<script id="ui.sides" type="text/template">\r\n<div class="sides-overlay"></div>\r\n<div class="sides sides-{{= data.position }}"></div>\r\n</script>\r\n\r\n\r\n<script id="ui.toggle" type="text/template">\r\n<div class="toggle active">\r\n    <div class="toggle-handle"></div>\r\n</div>\r\n</script>\r\n\r\n<script id="ui.switch" type="text/template">\r\n{{ var switchType = /(^\\w+)-?(\\w+)?/.exec(data.type), isSlide = switchType[1]===\'slide\', position = switchType[2];}}\r\n<div class="switch-container slide-container {{= isSlide ? \'slide-container-\'+position : \'tab-container slide-container-horizontal\'}}">\r\n    {{ if(isSlide || (!isSlide && position===\'top\')){ }}\r\n    <div class="switch-pagination {{= isSlide ? \'slide-pagination\' : \'segmented-control\'}}">\r\n        {{ _.each(data.list, function(item, i){ }}\r\n            <span  index="{{=i}}" class="switch-pagination-bullet {{= isSlide ? \'slide-pagination-bullet\' : \'control-item\'}} {{= i===0 ? \'active\' : \'\' }}">{{=item.title}}</span>\r\n        {{ }); }}\r\n    </div>\r\n    {{ } }}\r\n    <div class="switch-wrapper slide-wrapper" index="0">\r\n        <!--<div class="slide-slide slide-slide-active"></div>\r\n        <div class="slide-slide slide-slide-next"></div>-->\r\n        {{_.each(data.list, function(item, i){ }}\r\n            <div class="switch-item control-content">{{=item.content}}</div>\r\n        {{ }); }}\r\n    </div>\r\n    {{ if(!isSlide && position===\'bottom\'){ }}\r\n    <nav class="bar bar-tab switch-pagination">\r\n        {{ _.each(data.list, function(item, i){ }}\r\n        <a class="tab-item switch-pagination-bullet {{= i===0 ? \'active\' : \'\' }}" href="#" index="{{=i}}">\r\n            {{ if(item.icon){ }}<span class="icon {{=item.icon}}"></span> {{ } }}\r\n            <span class="tab-label">{{=item.title}}</span>\r\n        </a>\r\n        {{ }); }}\r\n    </nav>\r\n    {{ } }}\r\n</div>\r\n</script>\r\n';return __p}}),define("View",["Store","UITmpl"],function(e,t){_.templateSettings={evaluate:/\{\{(.+?)\}\}/g,interpolate:/\{\{=(.+?)\}\}/g,escape:/\{\{\-(.+?)\}\}/g};var n=function(e,t){return _.template(e.replace(/\{\{\s*include\s*(.*?)\s*\}\}/g,function(e,t){var n=document.getElementById(t);return n?n.innerHTML:""}),t)},r=function(e){var n=$(t()).find("script"),r,i,s;return n.prevObject.each(function(t,n){r=n.id,i=$(n).html(),!!r&&e===r&&(s=i)}),s},i=function(e,t){var n=e.prop("attributes"),r=$(t);return $.each(n,function(){this.name==="class"?r.attr(this.name,this.value+" "+r.attr("class")):this.name!=="data-opts"&&this.name!=="data-ui-widget"&&r.attr(this.name,this.value)}),r},s=Class.extend({init:function(e){this.wrapper=$(e.wrapper),this.tmplname=e.tmplname||"",this.tmpl=e.tmpl||"",this.data=e.data||{},this.replace=e.replace||!1,this.events=e.events||{},this.construct(e)},construct:function(e){this.events&&this._parseEvent(e.ctrl||this)},render:function(){var e=this.wrapper,t=this.getHTMLFragment(),n;return e&&(this.replace?(n=i(e,t),e.replaceWith(n)):e.html(t)),this.show(),e.length?this:t},show:function(){},update:function(e){e&&(this.data=$.extend({},this.data,e)),this.render()},destory:function(){this.wrapper.empty()},getHTMLFragment:function(e){this.getHTMLTmpl(e);if(!this.tmpl)return;return this.data?n(this.tmpl)(this):n(this.tmpl)},getHTMLTmpl:function(e){var t=e==="view"?this.tmpl:r(this.tmplname);return this.tmpl=t,t},onview:function(e,t,n){return this.wrapper.on(e,t,n),this},offview:function(e,t,n){return this.wrapper.off(e,t,n),this},_parseEvent:function(e){function t(e){var t=/(\w+)+\s+(.+)/.exec(e);return{event:t[1],selector:t[2]}}var n=this;if(!this.events)return;this.offview();var r=this.events;for(var i in r)(function(i){var s=t(i),o=r[i];n.onview(s.event,s.selector,function(t){return typeof o=="function"?(o(t,this,e),!1):(e[o](t,this),!1)})})(i)}});return s}),define("Fx",[],function(){var e={linear:[.25,.25,.75,.75],ease:[.25,.1,.25,1],easeIn:[.42,0,1,1],easeOut:[0,0,.58,1],easeInOut:[.42,0,.58,1],easeInQuad:[.55,.085,.68,.53],easeInCubic:[.55,.055,.675,.19],easeInQuart:[.895,.03,.685,.22],easeInQuint:[.755,.05,.855,.06],easeInSine:[.47,0,.745,.715],easeInExpo:[.95,.05,.795,.035],easeInCirc:[.6,.04,.98,.335],easeInBack:[.6,-0.28,.735,.045],easeOutQuad:[.25,.46,.45,.94],easeOutCubic:[.215,.61,.355,1],easeOutQuart:[.165,.84,.44,1],easeOutQuint:[.23,1,.32,1],easeOutSine:[.39,.575,.565,1],easeOutExpo:[.19,1,.22,1],easeOutCirc:[.075,.82,.165,1],easeOutBack:[.175,.885,.32,1.275],easeInOutQuad:[.455,.03,.515,.955],easeInOutCubic:[.645,.045,.355,1],easeInOutQuart:[.77,0,.175,1],easeInOutQuint:[.86,0,.07,1],easeInOutSine:[.445,.05,.55,.95],easeInOutExpo:[1,0,0,1],easeInOutCirc:[.785,.135,.15,.86],easeInOutBack:[.68,-0.55,.265,1.55],custom:[0,.35,.5,1.3],random:[Math.random().toFixed(3),Math.random().toFixed(3),Math.random().toFixed(3),Math.random().toFixed(3)]};$.fn.fx=function(t,n,r,i,s){return r=r||"linear",r=e[r],this.animate(t,n,"cubic-bezier("+r.join(",")+")",i,s),this}}),define("Modal",["View","Fx"],function(e){var t={type:"loading",btns:{yes:"确定",no:"取消"},title:"",content:"","class":"",mask:!0},n=function(){},r=e.extend({init:function(e){e.data=$.extend({},t,e.data),$.extend(e,this),e.tmplname="ui.modal",e.wrapper=e.wrapper||"#modal",this._super(e),this.onYes=e.data.onYes||n,this.onNo=e.data.onNo||n,this.mask=e.data.mask},show:function(){this.wrapper.fadeIn(100),this.reloc(),this.toggleModal(),this.isToast()&&this.autoHide(),this.mask!==!0&&$(".modal-overlay").removeClass("modal-overlay-visible")},getType:function(){return this.data.type},isToast:function(){return this.getType().indexOf("toast")!==-1},isTopBot:function(){var e=this.getType(),t=e==="top"||e==="bottom";return t?e:t},getModal:function(){return this.wrapper.find(this.isToast()?".modal-toast":".modal-layout")},toggleModal:function(e){e=e||"In";var t=this.isTopBot();t?this["slide"+e+"Modal"](t):this["scale"+e+"Modal"]()},scaleInModal:function(){this.getModal().css({opacity:.2,transform:"scale(1.5)"}).fx({opacity:1,scale:1},300,"easeOutCirc")},scaleOutModal:function(){var e=this;this.getModal().fx({opacity:0,scale:.2},300,"easeOutCirc",function(){e.wrapper.hide()})},slideInModal:function(e){var t={opacity:1};t[e]=0,this.getModal().fx(t,300,"easeOutCirc")},slideOutModal:function(e){var t=this,n={opacity:0};n[e]=-this.getModal().height(),this.getModal().fx(n,300,"easeOutCirc",function(){t.wrapper.hide()})},reloc:function(){var e=this.getModal(),t=e.height(),n=this.isTopBot(),r={};r[n]=-t,e.css("height",t).css(n?r:{"margin-top":-t/2})},close:function(){this.wrapper.hide()},autoHide:function(){var e=this,t=setTimeout(function(){e.toggleModal("Out"),clearTimeout(t)},3e3)},events:{"click .modal-overlay":"_onNo","click .modal-btn-yes":"_onYes","click .modal-btn-no":"_onNo"},_onYes:function(){this.onYes(),this.toggleModal("Out")},_onNo:function(){this.onNo(),this.toggleModal("Out")}}),i={layout:function(e,t,n){var i={};return typeof t=="string"?i.content=t:i=t,new r({data:$.extend({},e,i,{type:n})})},alert:function(e){var t={title:e.title||"警告:",btns:{yes:"OK"}};return this.layout(t,e,"alert").render()},confirm:function(e){var t={title:e.title||"请确认:",btns:{yes:"确定",no:"取消"}};return this.layout(t,e,"confirm").render()},loading:function(){return(new r({data:{type:"loading",btns:!1,title:!1,mask:!1}})).render()},center:function(e){var t={title:e.title||"",btns:!1};return this.layout(t,e,"center").render()},top:function(e){var t={title:e.title||"",btns:!1};return this.layout(t,e,"top").render()},bottom:function(e){var t={title:e.title||"",btns:{no:"取消",yes:"完成"}};return this.layout(t,e,"bottom").render()},popover:function(e){var t={type:"tips",btn:!1,content:[{},{},{}]};return this.layout(t,e).render()},toast:function(e,t){return t=t||"info",(new r({wrapper:"#toast",data:{type:"toast-"+t,content:e,btns:!1,title:!1}})).render()}};return $.extend({},{modal:r},i)}),define("Service",["Modal"],function(e){var t,n={request:function(e,t,n){},response:function(e,t,n){}},r=$.extend({},n),i=function(e,t){r.request=function(t,r,i){n.request(t,r,i);var s=e(t,r,i);if(s===!1)return!1},r.response=function(e,r,i){n.response(e,r,i),t(e,r,i)}};$.ajaxSettings.timeout=6e4,$.ajaxSettings.error=function(t,n){if(n==="timeout")e.toast("信号偏弱，访问超时","error");else if(n==="error"){var r=t.status;r===404||r===500}},$(document).on("ajaxBeforeSend",function(n,i,s){t=e.loading();var o=r.request(n,i,s);if(o===!1)return!1}).on("ajaxComplete",function(e,n,i){t.toggleModal("Out"),r.response(e,n,i)});var s=Class.extend({init:function(e){if(e.req||e.res){i(e.req,e.res);return}this.url=e.url},save:function(e){return this.ajax(e,{type:"POST"})},fetch:function(e){return this.ajax(e)},tmpl:function(){return this.ajax({dataType:"html",async:!1})},get:$.get,post:$.post,ajax:function(e,t){var n={},t=t||{};return t.withCredentials&&(n.xhrFields={withCredentials:!0}),$.extend(n,t,{url:this.url,data:e,dataType:t.dataType||"json"}),$.ajax(n)}});return s}),define("Button",["View"],function(e){var t={type:"",outline:!1,icon:void 0,badge:void 0,title:""},n=e.extend({init:function(e){e.data=_.extend({},t,e.data),e.tmplname="ui.button",e.replace=!0,$.extend(e,this),this._super(e)}});return n}),define("Header",["View"],function(e){var t={left:{type:"icon"},right:{type:"icon",icon:"icon-bars"},title:"",subtitle:""},n=e.extend({init:function(e){e.data=_.extend({},t,e.data),e.tmplname="ui.header",e.wrapper=e.wrapper||e.config.selector.header,$.extend(e,this),this._super(e),this.title=e.title},setTitle:function(e){this.data.title=e,this.update()},events:{"click .icon-left-nav":"goBack"},goBack:function(){History.go(-1);return}});return n}),define("List",["View"],function(e){var t={media:"",card:!1,list:[{img:"",title:"",desc:"",badge:""},{img:"",title:"",desc:"",badge:"",isDivider:!0,collapse:!0}]};$.fn.nextAll=function(e){var t=this.next(),n=t;while(t.is(e)){n=n.add(t),t=t.next();if(t.length==0)break}return n};var n=e.extend({init:function(e){$.extend(e,this),e.tmplname="ui.list",this._super(e)},events:{"click .table-view-divider.table-view-collapse":"collapseListGroup"},collapseListGroup:function(e,t){$(t).nextAll(".table-view-cell").toggle()}});return n}),define("Sides",["View","Fx"],function(e){var t={position:"left",content:""},n=e.extend({init:function(e){e.data=_.extend({},t,e.data),e.tmplname="ui.sides",e.wrapper=e.wrapper||"#sides",$.extend(e,this),this._super(e)},events:{"click .sides-overlay":"hide"},getSides:function(){return this.wrapper.find(".sides")},getOverlay:function(){return this.wrapper.find(".sides-overlay")},setContent:function(){this.getSides().html(this.content)},show:function(){this.getOverlay().css("visibility","visible");var e={};e[this.data.position]=0,this.showed=!0,this.getSides().fx(e,500,"easeOutCirc")},hide:function(){var e=this,t=this.getSides(),n={};n[this.data.position]=-t.width(),this.showed=!1,t.fx(n,500,"easeOutCirc",function(){e.getOverlay().css("visibility","hidden")})}});return n}),define("Swipe",[],function(){function e(e,t){var n={swipeX:0,swipeY:0,swipeTime:20,direction:null};t=$.extend({},n,t);var r={setNull:{startX:null,startY:null,startTime:null,moveX:null,moveY:null,moveTime:null,swipeX:null,swipeY:null,swipeTime:null,direction:null},checkRange:function(e){return Math.abs(e.swipeX)>=t.swipeX&&Math.abs(e.swipeY)>=t.swipeY&&(t.direction?e.direction===t.direction:!0)&&e.swipeTime>=t.swipeTime},getDirection:function(e){return Math.abs(e.degree)>45?e.swipeX<0?"left":"right":e.swipeY<0?"top":"bottom"},getAngle:function(e,t){return Math.atan(t/e)*180/Math.PI}},i=/webkit/i.test(navigator.appVersion)?"webkit":/firefox/i.test(navigator.userAgent)?"Moz":"opera"in window?"O":"",s="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,o={vendor:i,has3d:s,set:function(e,t){if(typeof e!="string")return $.extend(this,e),this.auto(),this;this[e]=t},auto:function(){this.swipeX=this.moveX-this.startX,this.swipeY=this.moveY-this.startY,this.swipeTime=this.moveTime-this.startTime,this.degree=r.getAngle(this.swipeY,this.swipeX),this.direction=r.getDirection(this)}},u={startCallback:function(e){$.extend(o,r.setNull);var n=e.touches[0],i={startX:n.pageX,startY:n.pageY,startTime:+(new Date)};o.set(i),t.startCallback?t.startCallback(o):null},moveCallback:function(e){var n=e.touches[0],i={moveX:n.pageX,moveY:n.pageY,moveTime:+(new Date)};o.set(i);if(!r.checkRange(o))return;t.moveCallback?t.moveCallback(o):null},endCallback:function(e){if(!r.checkRange(o))return;t.endCallback?t.endCallback(o):null}};e.die("touchstart,touchmove,touchend"),e.get(0).addEventListener("touchstart",u.startCallback),e.get(0).addEventListener("touchmove",u.moveCallback),e.get(0).addEventListener("touchend",u.endCallback)}var t={swipeX:30,swipeY:30,direction:null};["swipe","swipeLeft","swipeRight","swipeTop","swipeBottom"].forEach(function(n){var r=/swipe(\w*)/.exec(n)[1].toLowerCase(),i={};if(r==="left"||r==="right")i.swipeX=t.swipeX;else if(r==="top"||r==="bottom")i.swipeY=t.swipeY;$.fn[n]=function(t){return this.each(function(){var n=$.extend({},i,t,{direction:r});e($(this),n)}),!0}})}),define("Scroll",["Swipe","Fx"],function(){var e=/webkit/i.test(navigator.appVersion)?"webkit":/firefox/i.test(navigator.userAgent)?"Moz":"opera"in window?"O":"",t="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,n=Class.extend({init:function(e){e.direction=e.direction||"vertical";var t={$wrapper:$(e.wrapper),$scroll:$(e.className),step:e.step||0,speed:e.speed||1,outer:e.outer||150,outerFront:e.outerFront,outerEnd:e.outerEnd,isX:e.direction!=="vertical",onScroll:e.onScroll||function(){},endScroll:e.endScroll||function(){},onTop:e.onTop||function(){},onBottom:e.onBottom||function(){}};$.extend(this,t),this.construct()},construct:function(){this.bindScroll()},bindScroll:function(){var e=this,t=this.$wrapper,n=this.isX?"horizontal":"vertical";console.log(n,"direct"),this.outerFront&&t.prepend('<div class="ui-scroll-front">'+this.outerFront+"</div>"),this.outerEnd&&t.append('<div class="ui-scroll-end">'+this.outerEnd+"</div>"),t.addClass("ui-scroll ui-scroll-"+n).swipe({moveCallback:function(t){e._setScrollTrans(t,!0)},endCallback:function(t){e._setScrollTrans(t)}})},getScrollSize:function(){return this.isX?this.$scroll.width():this.$scroll.height()},getWrapperSize:function(){return this.isX?this.$wrapper.width():this.$wrapper.height()},scrollTo:function(e){var t=typeof e,n;e==="top"?n=0:e==="bottom"&&(n=this.getWrapperSize()-this.getScrollSize()),t==="number"&&(n=e),console.log(n,"scrollTo val"),this._scrollFxTo(n),console.log(this.getSteps(),"滚动的步长为：")},getSteps:function(){return this.$scroll.data("swipe-steps")},_scrollFxTo:function(e){if(this.step){var t=this._getTransStep(e);console.log(t,"步长信息"),e=t.val,this.$scroll.data("swipe-steps",t.stepNum)}this.$scroll.data("swipe-offset",e),this.$scroll.fx(this._scrollCount(e))},_setScrollTrans:function(e,t){var n=this.isX?e.swipeX:e.swipeY,r=this._getTransVal(n,e.swipeTime,t),i=this._scrollCount(r);t?(this.$scroll.css(i),this.onScroll(e)):(this._scrollFxTo(r),this.endScroll(e))},_getTransVal:function(e,t,n){e=n?e:e*this._getRatio(t);var r=this.$scroll.data("swipe-offset")||0;r&&(e+=r);var i=this.getScrollSize()-this.getWrapperSize(),s=n?this.outer:0,o=0+s,u=i+s,a=Math.abs(e),f=e+"px";return 0<e&&e<=o&&$(".ui-scroll-front").show().css({height:f,"line-height":f}),i<a&&a<=u&&(f=a-i+"px",$(".ui-scroll-end").show().css({height:f,"line-height":f})),e>o&&(e=o,n||(this.onTop(),$(".ui-scroll-front").hide())),e<-u&&(e=-u,n||(this.onBottom(),$(".ui-scroll-end").hide())),e},_getTransStep:function(e){var t=this.step,n=Math.round(e/t);return{stepNum:Math.abs(n),val:t*n}},_getRatio:function(e){var t,n=this.speed*1e3;return e>n?t=1:(t=n/e,t=t>30?30:t),console.log(e,t,"swipeRatio"),t},_scrollCount:function(n){var r=this.isX,i=r?n+"px":"0",s=r?"0":n+"px",o={};return o["-"+e+"-transform"]=t?"translate3d("+i+","+s+",0)":"translate("+i+","+s+")",o}});return n}),define("Slide",["View","Store","Fx"],function(e,t){var n={type:"slide-horizontal",swipeX:60,isloop:!0,initIndex:0,list:[]},r=/webkit/i.test(navigator.appVersion)?"webkit":/firefox/i.test(navigator.userAgent)?"Moz":"opera"in window?"O":"",i="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,s=e.extend({init:function(e){e.data=_.extend({},n,e.data),e.tmplname="ui.switch",$.extend(e,this),this._super(e)},show:function(){this.swipeContainer(this.data.initIndex)},getRootDom:function(){return this.wrapper.find(".switch-container")},getListDom:function(){return this.wrapper.find(".switch-wrapper")},getIndexData:function(e){return this.data.list[e]},getIndexDom:function(e){return this.getListDom().find(".switch-item").eq(e)},getPaginationDom:function(){return this.wrapper.find(".switch-pagination")},events:{"click .switch-pagination-bullet":function(e,t,n){n.rollback($(t).attr("index"))}},rollback:function(e){var t=this,n=this.getListDom(),r=n.find(".switch-item"),i=this.getPaginationDom(),s=/(^\w+)-?(\w+)?/.exec(this.data.type)[2]!=="vertical",o=s?n.width():n.height(),u=function(){n.fx(t.swipeCount(o*-e)),i.find(".switch-pagination-bullet").eq(e).addClass("active").siblings().removeClass("active")},a=this.getIndexData(e);!a.content&&a.src!==void 0?this.getIndexAsync(e,function(n){t.getIndexDom(e).html(n),u()}):u()},swipeContainer:function(e){var t=this,n=this.getRootDom(),r=this.getListDom(),i=r.find(".switch-item"),s=i.length,t=this,o=this.data.isloop,u=/(^\w+)-?(\w+)?/.exec(this.data.type)[2]!=="vertical",a=u?"swipeX":"swipeY",f=u?["left","right"]:["top","bottom"];this.rollback(e),r.swipe({moveCallback:function(i){var s=i[a]+n.width()*-e;r.css(t.swipeCount(s))},endCallback:function(n){if(Math.abs(n[a])<t.data[a]){t.rollback(e);return}if(n.direction===f[0]){e++;if(e===s){if(!o){t.rollback(e);return}e=0}}else if(n.direction===f[1]){e--;if(e<0){if(!o){t.rollback(e);return}e=s-1}}t.rollback(e),console.log(e,s);return}})},getIndexAsync:function(e,n){var r=this.getIndexData(e),i=r?r.src:null,s=t.get(i),o=function(e){return r.data?_.template(e)(r.data):e};if(i){if(s){n(o(s));return}$.get(i,function(e){var r=o(e);t.set(i,e),n?n(r):null})}},swipeCount:function(e){var t=/(^\w+)-?(\w+)?/.exec(this.data.type)[2]!=="vertical",n=t?e+"px":"0",s=t?"0":e+"px",o={};return o["-"+r+"-transform"]=i?"translate3d("+n+","+s+",0)":"translate("+n+","+s+")",o}});return s}),define("Select",["Modal","Scroll","List"],function(e,t,n){var r=Class.extend({init:function(e){this.className=e.className||"",$.extend(this,e),this.construct()},construct:function(){var t=this;e.bottom({title:this.title,content:this.makeScrollCtn(),onYes:function(){var e=t.getSelect();t.onYes?t.onYes(e):null},onNo:function(){t.onNo?t.onNo():null}}),this.setScroll(),this.initSelect()},getScrollRoot:function(){return this.className?$("."+this.className):$(".ui-scroll-select")},initSelect:function(){var e=this.getScrollRoot();for(var t=1;t<=this.level;t++)e.find(".ss-cell-"+t).find("li.table-view-cell").eq(0).addClass("active")},makeScrollCtn:function(){var e=this.level,t="",n="";for(var r=1;r<=e;r++)n=this.setListCont(r),t+='<div class="ui-scroll-select-item ui-scroll-select-'+r+'"><div class="ss-cell ss-cell-'+r+'">'+n+"</div></div>";var i='<div class="ss-cell-yard"></div>';return i+'<div class="ui-scroll-select '+this.className+'">'+t+"</div>"},setListCont:function(e){var t=this.data[e],r=[];for(var i=0;i<t.length;i++)r[i]={},r[i].title=t[i];var s={media:!1,card:!1,list:r};return(new n({data:s})).render()},setScroll:function(){for(var e=1;e<=this.level;e++)new t({step:33,speed:.5,wrapper:".ui-scroll-select-"+e,className:".ss-cell-"+e,endScroll:function(e){var t=this.getSteps();this.$scroll.find("li.table-view-cell").removeClass("active").eq(t).addClass("active")}})},getSelect:function(){var e=this.getScrollRoot(),t,n=[];for(var r=1;r<=this.level;r++)t=$.trim(e.find(".ss-cell-"+r).find("li.table-view-cell.active").text()),n.push(t);return n}});return r}),define("UI",["require","Button","Header","List","Modal","Sides","Scroll","Slide","Select"],function(e){return{Button:e("Button"),Header:e("Header"),List:e("List"),Modal:e("Modal"),Sides:e("Sides"),Scroll:e("Scroll"),Slide:e("Slide"),Select:e("Select")}}),define("Page",["View","UI"],function(e,t){var n=e.extend({init:function(e){e.wrapper=e.wrapper||e.config.selector.wrapper||"#viewport",this.title=e.title||"",this.widgets=[],this.params=e.params||null,this.seo=e.seo||{title:"",keywords:"",description:""},this.isback=e.isback,this._super(e),this.config=e.config},render:function(){if(!this.tmplname){this.tmpl='<div class="'+(this.config.selector.content.substring(1)||"content")+'"></div>',this.show();return}this.show()},show:function(){var e=this.isback,t=e===null?null:e?"swipe-right":"swipe-left";this.push(this.getHTMLFragment("view"),t),this.title&&this.setHeader(),this.initWidgetUI()},initWidgetUI:function(){var e,n,r=this;$("body").find("[data-ui-widget]").each(function(i,s){e=$(s),n=e.data("ui-widget"),r.widgets[i]=new t[n]({wrapper:e,data:$.extend({},e.data("opts"),{title:e.text()})}),r.widgets[i].render(),e.data("widget",r.widgets[i]),e.removeAttr("data-ui-widget")})},push:function(e,t){var n=$(this.wrapper?this.wrapper:"#viewport");n.append(e);var r=n.find(".content");r.length>2&&r.eq(0).remove();if(!!t){var i=/left|right/.test(t)?"X":"Y",s=/left|top/.test(t)?"100%":"-100%",o="translate"+i+"("+s+")";if(/swipe-/.test(t)){r.last().css({transform:o}).animate({translateX:"0",translate3d:"0,0,0"},300,"ease-out");return}}},setHeader:function(){$("header.bar .title").text(this.title)},setSeo:function(e){}});return n}),define("Url",[],function(){var e={url:/((http|https):\/\/)?((\w+\.)+\w+)?(:\d+)?((\/\w+)+)?\/?\??((\w+=\w+&?)+)?#?(.+)?/g,kv:/(\w+)=([^&#]+)/g,search:/([^\?]+)?\??((\w+=\w+&?)+)?/,path:/.+((\/\w+)+)?/,history:/[^\?]*\?((\w+\/)+\w+)/},t=function(t){return e.history.exec(t)[1]},n=function(t){if(!t)return{};var n={},r,i=encodeURI(t).match(e.kv);return!i||!i.length?{}:(i.forEach(function(t){e.kv.lastIndex=0,r=e.kv.exec(t),n[r[1]]=decodeURI(r[2])}),n)},r=function(t,r){if(!t)return r?{}:"";var i=e.search.exec(t)[2];return r?n(i):i},i=function(t,n){if(!t)return n?[]:"";var r=e.path.exec(t)[0];return n?r.split("/"):r},s=function(t,s){e.url.lastIndex=0;var o=e.url.exec(t),u=o[10],a=o[6]||"",f=o[8]||"";return{protocal:o[2],domain:o[3],port:o[5],path:s?a.substring(1).split("/"):a,search:s?n(f):f,hash:u,hashPath:i(u,s),hashsearch:r(u,s)}},o=function(e,t,n){var r="",t=t||"=";n=n||"&";for(var i in e)r+=i+t+e[i]+n;return r.remove("right")},u=function(t,n,r){var i=typeof n=="object"?o(n):n+"="+r;return t.replace(e.search,function(e,t,n){return(t?t:"")+"?"+(n?n+"&":"")+i})};return{get:s,set:u,getParams:n,setParams:o,getHashSearch:r,getHashPath:i,getHTML5Hash:t}}),define("App",["Page","Modal","Url","Store"],function(e,t,n,r){var i=Class.extend({init:function(e,t){this.config=e||{},this.route=t||{},this.model={},this.history=[]},run:function(){var e=this,n=!!window.history&&!!history.pushState;if(!n)return;t.loading(),History.Adapter.bind(window,"statechange",function(t){var n=History.getState();n.data.hash=n.data.hash||"/",e._routeByHash(n.data.hash)}),History.Adapter.trigger(window,"statechange"),this.initHref()},initHref:function(){"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){FastClick.attach(document.body)},!1);var e=this;$("body").off().on("click","a",function(){var t=$(this),n=t.attr("href");if(!n||!!~n.indexOf("#")||!n.indexOf("javascript:"))return;var r=n.substring(1);return History.pushState({hash:r,prevHash:e.getPrevHash()},t.attr("title"),"?"+r),!1}).on("click",".icon-left-nav",function(){return History.go(-1),!1})},getViewTmpl:function(e,t){var n=this,i=r.get("tmplname");if(!!i){t?t(i):null;return}$.ajax({url:"/views/"+e+".html",dataType:"html",success:function(i){r.set(e,i,n.config.expires),t?t(i):null}})},getPrevHash:function(){return location.search.substring(1)},setPage:function(t){if(!t)return;return t.config=this.config,t.isback=this.isBack(),new e(t)},getCRO:function(e){var t=n.getHashPath(e,!0),r=this.route;if(e==="/")return r[e];var i=r,s=t.length,o=0,u=0;for(;o<s;o++){u=t[o];if(!o){i=i["/"+u];if(i===void 0)return}else i=i["/"+u]||i;i.index===void 0&&(i.index=o);if(o===s-1&&i.hasOwnProperty("/"))return i=i["/"],i;if(i.index===o-1&&i.hasOwnProperty("/:var"))return i=i["/:var"],i.index=o,i.routeParams=u,i}return i.hashs=t,i},setCRO:function(e){},"goto":function(e){var t=typeof e=="string";if(t){var r=n.get(e),i=r.host+r.port===location.host;if(/^(https:)?\/\//.test(e)){if(!i){location.href=e;return}e=n.getHashPath(r.search)}}this[t?"_routeByHash":"_routeByCRO"](e)},_routeByHash:function(e){this._manageHistory(e);var t=this.getCRO(e);this._routeByCRO(t)},_routeByCRO:function(e){var t=this;if(this.isRouteNotFound(e))return;var n=e.ctrl;n&&(e.events=n.events);var r=function(){var r=t.setPage(e);n&&n.init?(r.hashs=e.hashs,n.init(r)):r.render()};if(!e.tmplname){r();return}this.getViewTmpl(e.tmplname,function(t){e.tmpl=t,r()})},_manageHistory:function(e){if(this.getLastHashByLastIndex(1)===e)return;var t=this.history;t.push(e),t.length>10&&t.shift()},getLastHashByLastIndex:function(e){var t=this.history;return t[t.length-e]},isBack:function(){var e=this.getLastHashByLastIndex(1),t=this.getLastHashByLastIndex(2),r=n.getHashPath(t,!0),i=n.getHashPath(e,!0),s=_.compact(r).length;return t?_.compact(i).length<s:null},isRouteNotFound:function(e){return e?!1:(this.route["/404"].data={Url:location.href},this.goto("404"),!0)}});return i}),function(){var e=!1,t=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(){},Class.extend=function(n){function r(){!e&&this.init&&this.init.apply(this,arguments)}var i=this.prototype;e=!0;var s=new this;e=!1;for(var o in n)s[o]=typeof n[o]=="function"&&typeof i[o]=="function"&&t.test(n[o])?function(e,t){return function(){var n=this._super;this._super=i[e];var r=t.apply(this,arguments);return this._super=n,r}}(o,n[o]):n[o];return r.prototype=s,r.prototype.constructor=r,r.extend=arguments.callee,r}}();var gomPath=$("#gom")[0].src.match(/(.+)gom\.js/)[1];console.log(gomPath,"gomPath"),require.config({paths:{Gom:gomPath+"gom",App:gomPath+"app",UI:gomPath+"ui/ui",Button:gomPath+"ui/ui.button",Header:gomPath+"ui/ui.header",List:gomPath+"ui/ui.list",Modal:gomPath+"ui/ui.modal",Sides:gomPath+"ui/ui.sides",Scroll:gomPath+"ui/ui.scroll",Slide:gomPath+"ui/ui.slide",Select:gomPath+"ui/ui.select",View:gomPath+"core/view",Page:gomPath+"core/page",Service:gomPath+"core/service",Store:gomPath+"utils/store",Url:gomPath+"utils/url",Fx:gomPath+"utils/fx",Swipe:gomPath+"utils/swipe",UITmpl:gomPath+"ui/ui.tmpl"}}),define("Gom",["Service","Page","View","UI","App"],function(e,t,n,r,i){var s={version:"1.0.0",isWebApp:/http(s)?:\/\//.test(location.protocol)},o={Service:e,Page:t,View:n,UI:r,App:i};return console.log(o,"Module"),o})