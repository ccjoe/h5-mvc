define(function() { return function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<script id="ui.button" type="text/template">\r\n    <button class="btn btn-{{= data.type }} {{= data.outline ? \'btn-outlined\':\'\'}} {{= data.isblock ? \'btn-block\' : \'\'}}">\r\n        {{ if(data.icon){ }}<span class="icon {{= data.icon }}"></span>{{ } }}\r\n        {{= data.title }}\r\n        {{ if(data.badge!==void 0){ }}\r\n        <span class="badge badge-{{= data.type}}">{{=data.badge}}</span>\r\n        {{ } }}\r\n    </button>\r\n</script>\r\n\r\n<script id="ui.header" type="text/template">\r\n    {{ _.each([\'left\', \'right\'], function(posi){ }}\r\n    {{ var type= data[posi].type, text = data[posi].text, icon=data[posi].icon || \'icon-\'+posi+\'-nav\'; }}\r\n    {{ if(type === \'button\'){ }}<button class="btn pull-{{=posi}}">{{= text }}</button>{{ } }}\r\n    {{ if(type === \'icon\'){  }}<a class="icon {{= icon }} pull-{{=posi}}">{{= text }}</a>{{ } }}\r\n    {{ if(type === \'link\'){  }}<button class="btn btn-link btn-nav pull-{{=posi}}">{{= text }}</button>{{ } }}\r\n    {{ }); }}\r\n\r\n    <div class="title-wrapper {{=data.subtitle ? \'title-ms\' : \'\'}}">\r\n        <h1 class="title">{{=data.title}}</h1>\r\n        {{ if(data.subtitle){ }}<h2 class="subtitle">{{=data.subtitle}}</h2>{{ } }}\r\n    </div>\r\n</script>\r\n\r\n<script id="ui.list" type="text/template">\r\n{{= data.card ? \'<div class="card">\' : \'\' }}\r\n    <ul class="table-view">\r\n        {{ _.each(data.list, function(item){ }}\r\n\r\n        <li class="{{= item.isDivider?\'table-view-divider\':\'table-view-cell\' }}{{= item.collapse ? \' table-view-collapse\' : \'\' }}">\r\n            {{ if(item.isDivider){ }}{{=item.title}}{{ return; } }}\r\n            <a class="navigate-right" href="{{= item.hash ? item.hash : \'javascript:\' }}">\r\n                {{ if(item.badge !== void 0){ }}\r\n                <span class="badge">{{=item.badge}}</span>\r\n                {{ } }}\r\n                {{ if(data.media){ }}\r\n                {{ if(data.media === \'img\' && item.img){ }}\r\n                <img class="media-object pull-left" src="{{= item.img }}">\r\n                {{ }else{ }}\r\n                <span class="media-object pull-left icon {{= item.icon }}"></span>\r\n                {{ } }}\r\n                {{ } }}\r\n                <div class="media-body">\r\n                    {{=item.title}}\r\n                    <p>{{=item.desc}}</p>\r\n                </div>\r\n            </a>\r\n        </li>\r\n        {{  }); }}\r\n    </ul>\r\n    {{= data.card ? \'</div>\' : \'\' }}\r\n</script>\r\n\r\n<script id="ui.modal" type="text/template">\r\n    {{ if(data.type.indexOf(\'toast\') === -1 ){ }}\r\n    <div class="modal-overlay modal-overlay-visible"></div>\r\n    <div class="modal-layout  modal-{{=data.type}} {{=data.class}}">\r\n        <div class="modal-inner">\r\n            {{ if(data.type === \'loading\'){ }}\r\n            <div class="spinner">\r\n                <div class="double-bounce1"></div>\r\n                <div class="double-bounce2"></div>\r\n            </div>\r\n            {{ }else{ }}\r\n            <div class="modal-title">\r\n                {{if(data.type===\'bottom\' && data.btns.yes && data.btns.no){ }}<span class=\'btn btn-link modal-btn-no\'>{{=data.btns.no}}</span>{{=data.title}}<span class=\'btn btn-link modal-btn-yes\'>{{=data.btns.yes}}</span>\r\n                {{ }else{ }}\r\n                    {{=data.title}}\r\n                {{ } }}\r\n            </div>\r\n            <div class="modal-text">{{=data.content}}</div>\r\n            {{ } }}\r\n        </div>\r\n        {{ var btns = data.btns; if(btns && (data.type!==\'bottom\')){ }}\r\n        <div class="modal-buttons">\r\n            {{ if(btns.yes){ }}<span class="modal-button modal-btn-yes modal-button-bold">{{= btns.yes}}</span> {{ } }}\r\n            {{ if(btns.no){ }}<span class="modal-button modal-btn-no modal-button-bold">{{= btns.no}}</span> {{ } }}\r\n            {{ if(btns.cancel){ }}<span class="modal-button modal-btn-def modal-button-bold">{{= btns.def}}</span> {{ } }}\r\n        </div>\r\n        {{ } }}\r\n    </div>\r\n    {{ }else{ }}\r\n    <div class="modal-toast modal-{{=data.type}}" >\r\n        {{var type = data.type.match(/toast-(\\w+)/)[1] }}\r\n        <span class="icon icon-{{= type===\'info\' ? \'info\' : (type===\'error\'?\'close\': \'check\')  }}">{{=data.content}}</span>\r\n    </div>\r\n    {{ } }}\r\n</script>\r\n\r\n<script id="ui.sides" type="text/template">\r\n    <div class="sides-overlay"></div>\r\n    <div class="sides sides-{{= data.position }}"></div>\r\n</script>\r\n\r\n<script id="ui.toggle" type="text/template">\r\n    <div class="toggle active">\r\n        <div class="toggle-handle"></div>\r\n    </div>\r\n</script>\r\n\r\n<script id="ui.switch" type="text/template">\r\n    {{ var switchType = /(^\\w+)-?(\\w+)?/.exec(data.type), isSlide = switchType[1]===\'slide\', position = switchType[2];}}\r\n    <div class="switch-container slide-container {{= isSlide ? \'slide-container-\'+position : \'tab-container slide-container-horizontal\'}}">\r\n        {{ if(isSlide || (!isSlide && position===\'top\')){ }}\r\n        <div class="switch-pagination {{= isSlide ? \'slide-pagination\' : \'segmented-control\'}}">\r\n            {{ _.each(data.list, function(item, i){ }}\r\n                <span  index="{{=i}}" class="switch-pagination-bullet {{= isSlide ? \'slide-pagination-bullet\' : \'control-item\'}} {{= i===0 ? \'active\' : \'\' }}">{{=item.title}}</span>\r\n            {{ }); }}\r\n        </div>\r\n        {{ } }}\r\n        <div class="switch-wrapper slide-wrapper" index="0">\r\n            <!--<div class="slide-slide slide-slide-active"></div>\r\n            <div class="slide-slide slide-slide-next"></div>-->\r\n            {{_.each(data.list, function(item, i){ }}\r\n                <div class="switch-item control-content">{{=item.content}}</div>\r\n            {{ }); }}\r\n        </div>\r\n        {{ if(!isSlide && position===\'bottom\'){ }}\r\n        <nav class="bar bar-tab switch-pagination">\r\n            {{ _.each(data.list, function(item, i){ }}\r\n            <a class="tab-item switch-pagination-bullet {{= i===0 ? \'active\' : \'\' }}" href="#" index="{{=i}}">\r\n                {{ if(item.icon){ }}<span class="icon {{=item.icon}}"></span> {{ } }}\r\n                <span class="tab-label">{{=item.title}}</span>\r\n            </a>\r\n            {{ }); }}\r\n        </nav>\r\n        {{ } }}\r\n    </div>\r\n</script>\r\n';}return __p;} });