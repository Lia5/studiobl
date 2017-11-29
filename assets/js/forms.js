/*!
 * jQuery Form Plugin
 * version: 3.14 (30-JUL-2012)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses:
 *    http://malsup.github.com/mit-license.txt
 *    http://malsup.github.com/gpl-license-v2.txt
 */
(function(c){function s(a){var e=a.data;a.isDefaultPrevented()||(a.preventDefault(),c(this).ajaxSubmit(e))}function q(a){var e=a.target,g=c(e);if(!g.is(":submit,input:image")){e=g.closest(":submit");if(0===e.length)return;e=e[0]}var b=this;b.clk=e;"image"==e.type&&(void 0!==a.offsetX?(b.clk_x=a.offsetX,b.clk_y=a.offsetY):"function"==typeof c.fn.offset?(g=g.offset(),b.clk_x=a.pageX-g.left,b.clk_y=a.pageY-g.top):(b.clk_x=a.pageX-e.offsetLeft,b.clk_y=a.pageY-e.offsetTop));setTimeout(function(){b.clk=
    b.clk_x=b.clk_y=null},100)}var v,w;v=void 0!==c("<input type='file'/>").get(0).files;w=void 0!==window.FormData;c.fn.ajaxSubmit=function(a){function e(b){function e(){function a(){try{var b=(o.contentWindow?o.contentWindow.document:o.contentDocument?o.contentDocument:o.document).readyState;b&&"uninitialized"==b.toLowerCase()&&setTimeout(a,50)}catch(c){j(v),q&&clearTimeout(q),q=void 0}}var b=k.attr("target"),h=k.attr("action");f.setAttribute("target",
    m);g||f.setAttribute("method","POST");h!=d.url&&f.setAttribute("action",d.url);!d.skipEncodingOverride&&(!g||/post/i.test(g))&&k.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});d.timeout&&(q=setTimeout(function(){s=!0;j(y)},d.timeout));var l=[];try{if(d.extraData)for(var i in d.extraData)d.extraData.hasOwnProperty(i)&&(c.isPlainObject(d.extraData[i])&&d.extraData[i].hasOwnProperty("name")&&d.extraData[i].hasOwnProperty("value")?l.push(c('<input type="hidden" name="'+d.extraData[i].name+
    '">').attr("value",d.extraData[i].value).appendTo(f)[0]):l.push(c('<input type="hidden" name="'+i+'">').attr("value",d.extraData[i]).appendTo(f)[0]));d.iframeTarget||(t.appendTo("body"),o.attachEvent?o.attachEvent("onload",j):o.addEventListener("load",j,!1));setTimeout(a,15);f.submit()}finally{f.setAttribute("action",h),b?f.setAttribute("target",b):k.removeAttr("target"),c(l).remove()}}function j(a){if(!h.aborted&&!B){try{p=o.contentWindow?o.contentWindow.document:o.contentDocument?o.contentDocument:
    o.document}catch(b){a=v}if(a===y&&h)h.abort("timeout");else if(a==v&&h)h.abort("server abort");else if(p&&p.location.href!=d.iframeSrc||s){o.detachEvent?o.detachEvent("onload",j):o.removeEventListener("load",j,!1);var a="success",i;try{if(s)throw"timeout";var f="xml"==d.dataType||p.XMLDocument||c.isXMLDoc(p);if(!f&&(window.opera&&(null===p.body||!p.body.innerHTML))&&--C){setTimeout(j,250);
    return}var e=p.body?p.body:p.documentElement;h.responseText=e?e.innerHTML:null;h.responseXML=p.XMLDocument?p.XMLDocument:p;f&&(d.dataType="xml");h.getResponseHeader=function(a){return{"content-type":d.dataType}[a]};e&&(h.status=Number(e.getAttribute("status"))||h.status,h.statusText=e.getAttribute("statusText")||h.statusText);var g=(d.dataType||"").toLowerCase(),k=/(json|script|text)/.test(g);if(k||d.textarea){var m=p.getElementsByTagName("textarea")[0];if(m)h.responseText=m.value,h.status=Number(m.getAttribute("status"))||
    h.status,h.statusText=m.getAttribute("statusText")||h.statusText;else if(k){var n=p.getElementsByTagName("pre")[0],x=p.getElementsByTagName("body")[0];n?h.responseText=n.textContent?n.textContent:n.innerText:x&&(h.responseText=x.textContent?x.textContent:x.innerText)}}else"xml"==g&&(!h.responseXML&&h.responseText)&&(h.responseXML=D(h.responseText));try{var f=h,e=d,r=f.getResponseHeader("content-type")||"",z="xml"===g||!g&&0<=r.indexOf("xml"),u=z?f.responseXML:f.responseText;z&&"parsererror"===u.documentElement.nodeName&&
    c.error&&c.error("parsererror");e&&e.dataFilter&&(u=e.dataFilter(u,g));"string"===typeof u&&("json"===g||!g&&0<=r.indexOf("json")?u=E(u):("script"===g||!g&&0<=r.indexOf("javascript"))&&c.globalEval(u));w=u}catch(F){a="parsererror",h.error=i=F||a}}catch(A){a="error",h.error=i=A||a}h.aborted&&(a=null);h.status&&(a=200<=h.status&&300>h.status||304===h.status?"success":"error");"success"===a?(d.success&&d.success.call(d.context,w,"success",h),l&&c.event.trigger("ajaxSuccess",
    [h,d])):a&&(void 0===i&&(i=h.statusText),d.error&&d.error.call(d.context,h,a,i),l&&c.event.trigger("ajaxError",[h,d,i]));l&&c.event.trigger("ajaxComplete",[h,d]);l&&!--c.active&&c.event.trigger("ajaxStop");d.complete&&d.complete.call(d.context,h,a);B=!0;d.timeout&&clearTimeout(q);setTimeout(function(){d.iframeTarget||t.remove();h.responseXML=null},100)}}}var f=k[0],i,d,l,m,t,o,h,r,s,q;r=!!c.fn.prop;if(c(":input[name=submit],:input[id=submit]",f).length)alert('Error: Form elements must not have name or id of "submit".');
    else{if(b)for(i=0;i<n.length;i++)b=c(n[i]),r?b.prop("disabled",!1):b.removeAttr("disabled");d=c.extend(!0,{},c.ajaxSettings,a);d.context=d.context||d;m="jqFormIO"+(new Date).getTime();d.iframeTarget?(t=c(d.iframeTarget),(b=t.attr("name"))?m=b:t.attr("name",m)):(t=c('<iframe name="'+m+'" src="'+d.iframeSrc+'" />'),t.css({position:"absolute",top:"-1000px",left:"-1000px"}));o=t[0];h={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},
    setRequestHeader:function(){},abort:function(a){var b=a==="timeout"?"timeout":"aborted";this.aborted=1;if(o.contentWindow.document.execCommand)try{o.contentWindow.document.execCommand("Stop")}catch(e){}t.attr("src",d.iframeSrc);h.error=b;d.error&&d.error.call(d.context,h,b,a);l&&c.event.trigger("ajaxError",[h,d,b]);d.complete&&d.complete.call(d.context,h,b)}};(l=d.global)&&0===c.active++&&c.event.trigger("ajaxStart");l&&c.event.trigger("ajaxSend",[h,d]);if(d.beforeSend&&
    !1===d.beforeSend.call(d.context,h,d))d.global&&c.active--;else if(!h.aborted){if(r=f.clk)if((b=r.name)&&!r.disabled)d.extraData=d.extraData||{},d.extraData[b]=r.value,"image"==r.type&&(d.extraData[b+".x"]=f.clk_x,d.extraData[b+".y"]=f.clk_y);var y=1,v=2;r=c("meta[name=csrf-token]").attr("content");if((b=c("meta[name=csrf-param]").attr("content"))&&r)d.extraData=d.extraData||{},d.extraData[b]=r;d.forceSync?e():setTimeout(e,10);var w,p,C=50,B,D=c.parseXML||function(a,b){if(window.ActiveXObject){b=
    new ActiveXObject("Microsoft.XMLDOM");b.async="false";b.loadXML(a)}else b=(new DOMParser).parseFromString(a,"text/xml");return b&&b.documentElement&&b.documentElement.nodeName!="parsererror"?b:null},E=c.parseJSON||function(a){return window.eval("("+a+")")}}}}if(!this.length)return this;var g,b,k=this;"function"==typeof a&&(a={success:a});g=this.attr("method");b=this.attr("action");(b=(b="string"===typeof b?c.trim(b):"")||window.location.href||
    "")&&(b=(b.match(/^([^#]+)/)||[])[1]);a=c.extend(!0,{url:b,success:c.ajaxSettings.success,type:g||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a);b={};this.trigger("form-pre-serialize",[this,a,b]);if(b.veto)return this;if(a.beforeSerialize&&!1===a.beforeSerialize(this,a))return this;var f=a.traditional;void 0===f&&(f=c.ajaxSettings.traditional);
    var n=[],j,l=this.formToArray(a.semantic,n);a.data&&(a.extraData=a.data,j=c.param(a.data,f));if(a.beforeSubmit&&!1===a.beforeSubmit(l,this,a))return this;this.trigger("form-submit-validate",[l,this,a,b]);if(b.veto)return this;b=c.param(l,f);j&&(b=b?b+"&"+j:j);"GET"==a.type.toUpperCase()?(a.url+=(0<=a.url.indexOf("?")?"&":"?")+b,a.data=null):a.data=b;var i=[];a.resetForm&&i.push(function(){k.resetForm()});
    a.clearForm&&i.push(function(){k.clearForm(a.includeHidden)});if(!a.dataType&&a.target){var y=a.success||function(){};i.push(function(b){var e=a.replaceTarget?"replaceWith":"html";c(a.target)[e](b).each(y,arguments)})}else a.success&&i.push(a.success);a.success=function(b,c,e){for(var g=a.context||this,f=0,d=i.length;f<d;f++)i[f].apply(g,[b,c,e||k,k])};j=0<c("input:file:enabled[value]",this).length;b="multipart/form-data"==k.attr("enctype")||"multipart/form-data"==k.attr("encoding");f=v&&w;
    if(!1!==a.iframe&&(a.iframe||(j||b)&&!f))a.closeKeepAlive?c.get(a.closeKeepAlive,function(){e(l)}):e(l);else if((j||b)&&f){var s=new FormData;for(j=0;j<l.length;j++)s.append(l[j].name,l[j].value);if(a.extraData)for(var m in a.extraData)a.extraData.hasOwnProperty(m)&&s.append(m,a.extraData[m]);a.data=null;m=c.extend(!0,{},c.ajaxSettings,a,{contentType:!1,processData:!1,cache:!1,type:"POST"});a.uploadProgress&&(m.xhr=function(){var b=jQuery.ajaxSettings.xhr();if(b.upload)b.upload.onprogress=function(b){var c=
    0,e=b.loaded||b.position,f=b.total;b.lengthComputable&&(c=Math.ceil(e/f*100));a.uploadProgress(b,e,f,c)};return b});m.data=null;var q=m.beforeSend;m.beforeSend=function(a,b){b.data=s;q&&q.call(this,a,b)};c.ajax(m)}else c.ajax(a);for(m=0;m<n.length;m++)n[m]=null;this.trigger("form-submit-notify",[this,a]);return this};c.fn.ajaxForm=function(a){a=a||{};a.delegation=a.delegation&&c.isFunction(c.fn.on);if(!a.delegation&&0===this.length){var e=this.selector,g=this.context;!c.isReady&&e&&c(function(){c(e,
    g).ajaxForm(a)});return this}return a.delegation?(c(document).off("submit.form-plugin",this.selector,s).off("click.form-plugin",this.selector,q).on("submit.form-plugin",this.selector,a,s).on("click.form-plugin",this.selector,a,q),this):this.ajaxFormUnbind().bind("submit.form-plugin",a,s).bind("click.form-plugin",a,q)};c.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};c.fn.formToArray=function(a,e){var g=[];if(0===this.length)return g;var b=this[0],k=a?b.getElementsByTagName("*"):
    b.elements;if(!k)return g;var f,n,j,l,i,q;f=0;for(q=k.length;f<q;f++)if(i=k[f],j=i.name)if(a&&b.clk&&"image"==i.type)!i.disabled&&b.clk==i&&(g.push({name:j,value:c(i).val(),type:i.type}),g.push({name:j+".x",value:b.clk_x},{name:j+".y",value:b.clk_y}));else if((l=c.fieldValue(i,!0))&&l.constructor==Array){e&&e.push(i);n=0;for(i=l.length;n<i;n++)g.push({name:j,value:l[n]})}else if(v&&"file"==i.type&&!i.disabled)if(e&&e.push(i),l=i.files,l.length)for(n=0;n<l.length;n++)g.push({name:j,value:l[n],type:i.type});
    else g.push({name:j,value:"",type:i.type});else null!==l&&"undefined"!=typeof l&&(e&&e.push(i),g.push({name:j,value:l,type:i.type,required:i.required}));if(!a&&b.clk&&(k=c(b.clk),f=k[0],(j=f.name)&&!f.disabled&&"image"==f.type))g.push({name:j,value:k.val()}),g.push({name:j+".x",value:b.clk_x},{name:j+".y",value:b.clk_y});return g};c.fn.formSerialize=function(a){return c.param(this.formToArray(a))};c.fn.fieldSerialize=function(a){var e=[];this.each(function(){var g=this.name;if(g){var b=c.fieldValue(this,
    a);if(b&&b.constructor==Array)for(var k=0,f=b.length;k<f;k++)e.push({name:g,value:b[k]});else null!==b&&"undefined"!=typeof b&&e.push({name:this.name,value:b})}});return c.param(e)};c.fn.fieldValue=function(a){for(var e=[],g=0,b=this.length;g<b;g++){var k=c.fieldValue(this[g],a);null===k||("undefined"==typeof k||k.constructor==Array&&!k.length)||(k.constructor==Array?c.merge(e,k):e.push(k))}return e};c.fieldValue=function(a,e){var g=a.name,b=a.type,k=a.tagName.toLowerCase();void 0===e&&(e=!0);if(e&&
    (!g||a.disabled||"reset"==b||"button"==b||("checkbox"==b||"radio"==b)&&!a.checked||("submit"==b||"image"==b)&&a.form&&a.form.clk!=a||"select"==k&&-1==a.selectedIndex))return null;if("select"==k){var f=a.selectedIndex;if(0>f)return null;for(var g=[],k=a.options,n=(b="select-one"==b)?f+1:k.length,f=b?f:0;f<n;f++){var j=k[f];if(j.selected){var l=j.value;l||(l=j.attributes&&j.attributes.value&&!j.attributes.value.specified?j.text:j.value);if(b)return l;g.push(l)}}return g}return c(a).val()};c.fn.resetForm=
    function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})}})(jQuery);
    
    /**
     * jQuery Validation Plugin 1.9.0
     *
     * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
     * http://docs.jquery.com/Plugins/Validation
     *
     * Copyright (c) 2006 - 2011 JГ¶rn Zaefferer
     *
     * Dual licensed under the MIT and GPL licenses:
     *   http://www.opensource.org/licenses/mit-license.php
     *   http://www.gnu.org/licenses/gpl.html
     */
    (function(c){c.extend(c.fn,{validate:function(a){if(this.length){var b=c.data(this[0],"validator");if(b)return b;this.attr("novalidate","novalidate");b=new c.validator(a,this[0]);c.data(this[0],"validator",b);b.settings.onsubmit&&(a=this.find("input, button"),a.filter(".cancel").click(function(){b.cancelSubmit=!0}),b.settings.submitHandler&&a.filter(":submit").click(function(){b.submitButton=this}),this.submit(function(a){function e(){if(b.settings.submitHandler){if(b.submitButton)var a=c("<input type='hidden'/>").attr("name",
    b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm);b.settings.submitHandler.call(b,b.currentForm);b.submitButton&&a.remove();return!1}return!0}b.settings.debug&&a.preventDefault();if(b.cancelSubmit)return b.cancelSubmit=!1,e();if(b.form())return b.pendingRequest?(b.formSubmitted=!0,!1):e();b.focusInvalid();return!1}));return b}a&&a.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing")},valid:function(){if(c(this[0]).is("form"))return this.validate().form();
    var a=!0,b=c(this[0].form).validate();this.each(function(){a&=b.element(this)});return a},removeAttrs:function(a){var b={},d=this;c.each(a.split(/\s/),function(a,c){b[c]=d.attr(c);d.removeAttr(c)});return b},rules:function(a,b){var d=this[0];if(a){var e=c.data(d.form,"validator").settings,f=e.rules,g=c.validator.staticRules(d);switch(a){case "add":c.extend(g,c.validator.normalizeRule(b));f[d.name]=g;b.messages&&(e.messages[d.name]=c.extend(e.messages[d.name],b.messages));break;case "remove":if(!b)return delete f[d.name],
    g;var h={};c.each(b.split(/\s/),function(a,b){h[b]=g[b];delete g[b]});return h}}d=c.validator.normalizeRules(c.extend({},c.validator.metadataRules(d),c.validator.classRules(d),c.validator.attributeRules(d),c.validator.staticRules(d)),d);d.required&&(e=d.required,delete d.required,d=c.extend({required:e},d));return d}});c.extend(c.expr[":"],{blank:function(a){return!c.trim(""+a.value)},filled:function(a){return!!c.trim(""+a.value)},unchecked:function(a){return!a.checked}});c.validator=function(a,b){this.settings=
    c.extend(!0,{},c.validator.defaults,a);this.currentForm=b;this.init()};c.validator.format=function(a,b){if(1==arguments.length)return function(){var b=c.makeArray(arguments);b.unshift(a);return c.validator.format.apply(this,b)};2<arguments.length&&b.constructor!=Array&&(b=c.makeArray(arguments).slice(1));b.constructor!=Array&&(b=[b]);c.each(b,function(b,c){a=a.replace(RegExp("\\{"+b+"\\}","g"),c)});return a};c.extend(c.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",
    errorElement:"label",focusInvalid:!0,errorContainer:c([]),errorLabelContainer:c([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a;this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(a)).hide())},onfocusout:function(a){!this.checkable(a)&&(a.name in this.submitted||!this.optional(a))&&this.element(a)},onkeyup:function(a){(a.name in
    this.submitted||a==this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(a,b,d){"radio"===a.type?this.findByName(a.name).addClass(b).removeClass(d):c(a).addClass(b).removeClass(d)},unhighlight:function(a,b,d){"radio"===a.type?this.findByName(a.name).removeClass(b).addClass(d):c(a).removeClass(b).addClass(d)}},setDefaults:function(a){c.extend(c.validator.defaults,a)},messages:{required:"<br>РћР±СЏР·Р°С‚РµР»СЊРЅРѕ РґР»СЏ Р·Р°РїРѕР»РЅРµРЅРёСЏ.",
    remote:"Please fix this field.",email:"РџРѕР¶Р°Р»СѓР№СЃС‚Р° РІРІРµРґРёС‚Рµ РєРѕСЂСЂРµРєС‚РЅС‹Р№ email.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:c.validator.format("Please enter no more than {0} characters."),minlength:c.validator.format("Р’РІРµРґРёС‚Рµ РєР°Рє РјРёРЅРёРјСѓРј {0} СЃРёРјРІРѕР»РѕРІ."),
    rangelength:c.validator.format("Please enter a value between {0} and {1} characters long."),range:c.validator.format("Please enter a value between {0} and {1}."),max:c.validator.format("Please enter a value less than or equal to {0}."),min:c.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function a(a){var b=c.data(this[0].form,"validator"),d="on"+a.type.replace(/^validate/,"");b.settings[d]&&b.settings[d].call(b,this[0],a)}this.labelContainer=
    c(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||c(this.currentForm);this.containers=c(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var b=this.groups={};c.each(this.settings.groups,function(a,d){c.each(d.split(/\s/),function(c,d){b[d]=a})});var d=this.settings.rules;c.each(d,function(a,b){d[a]=c.validator.normalizeRule(b)});
    c(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",a).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",a);this.settings.invalidHandler&&c(this.currentForm).bind("invalid-form.validate",
    this.settings.invalidHandler)},form:function(){this.checkForm();c.extend(this.submitted,this.errorMap);this.invalid=c.extend({},this.errorMap);this.valid()||c(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(a){this.lastElement=a=this.validationTargetFor(this.clean(a));this.prepareElement(a);this.currentElements=
    c(a);var b=this.check(a);b?delete this.invalid[a.name]:this.invalid[a.name]=!0;this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers));this.showErrors();return b},showErrors:function(a){if(a){c.extend(this.errorMap,a);this.errorList=[];for(var b in a)this.errorList.push({message:a[b],element:this.findByName(b)[0]});this.successList=c.grep(this.successList,function(b){return!(b.name in a)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},
    resetForm:function(){c.fn.resetForm&&c(this.currentForm).resetForm();this.submitted={};this.lastElement=null;this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b=0,c;for(c in a)b++;return b},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0==this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{c(this.findLastActive()||
    this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(a){}},findLastActive:function(){var a=this.lastActive;return a&&1==c.grep(this.errorList,function(b){return b.element.name==a.name}).length&&a},elements:function(){var a=this,b={};return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&a.settings.debug&&window.console&&console.error("%o has no name assigned",
    this);return this.name in b||!a.objectLength(c(this).rules())?!1:b[this.name]=!0})},clean:function(a){return c(a)[0]},errors:function(){return c(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=c([]);this.toHide=c([]);this.currentElements=c([])},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset();this.toHide=this.errorsFor(a)},
    check:function(a){var a=this.validationTargetFor(this.clean(a)),b=c(a).rules(),d=!1,e;for(e in b){var f={method:e,parameters:b[e]};try{var g=c.validator.methods[e].call(this,a.value.replace(/\r/g,""),a,f.parameters);if("dependency-mismatch"==g)d=!0;else{d=!1;if("pending"==g){this.toHide=this.toHide.not(this.errorsFor(a));return}if(!g)return this.formatAndAdd(a,f),!1}}catch(h){throw this.settings.debug&&window.console&&console.log("exception occured when checking element "+a.id+", check the '"+f.method+
    "' method",h),h;}}if(!d)return this.objectLength(b)&&this.successList.push(a),!0},customMetaMessage:function(a,b){if(c.metadata){var d=this.settings.meta?c(a).metadata()[this.settings.meta]:c(a).metadata();return d&&d.messages&&d.messages[b]}},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor==String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(a,b){return this.findDefined(this.customMessage(a.name,
    b),this.customMetaMessage(a,b),!this.settings.ignoreTitle&&a.title||void 0,c.validator.messages[b],"<strong>Warning: No message defined for "+a.name+"</strong>")},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b.method),e=/\$?\{(\d+)\}/g;"function"==typeof c?c=c.call(this,b.parameters,a):e.test(c)&&(c=jQuery.format(c.replace(e,"{$1}"),b.parameters));this.errorList.push({message:c,element:a});this.errorMap[a.name]=c;this.submitted[a.name]=c},addWrapper:function(a){this.settings.wrapper&&(a=
    a.add(a.parent(this.settings.wrapper)));return a},defaultShowErrors:function(){for(var a=0;this.errorList[a];a++){var b=this.errorList[a];this.settings.highlight&&this.settings.highlight.call(this,b.element,this.settings.errorClass,this.settings.validClass);this.showLabel(b.element,b.message)}this.errorList.length&&(this.toShow=this.toShow.add(this.containers));if(this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight){a=0;for(b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,
    b[a],this.settings.errorClass,this.settings.validClass)}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return c(this.errorList).map(function(){return this.element})},showLabel:function(a,b){var d=this.errorsFor(a);d.length?(d.removeClass(this.settings.validClass).addClass(this.settings.errorClass),d.attr("generated")&&d.html(b)):(d=c("<"+this.settings.errorElement+
    "/>").attr({"for":this.idOrName(a),generated:!0}).addClass(this.settings.errorClass).html(b||""),this.settings.wrapper&&(d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,c(a)):d.insertAfter(a)));!b&&this.settings.success&&(d.text(""),"string"==typeof this.settings.success?d.addClass(this.settings.success):this.settings.success(d));this.toShow=this.toShow.add(d)},errorsFor:function(a){var b=
    this.idOrName(a);return this.errors().filter(function(){return c(this).attr("for")==b})},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(a){this.checkable(a)&&(a=this.findByName(a.name).not(this.settings.ignore)[0]);return a},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(a){var b=this.currentForm;return c(document.getElementsByName(a)).map(function(c,e){return e.form==b&&e.name==a&&e||null})},
    getLength:function(a,b){switch(b.nodeName.toLowerCase()){case "select":return c("option:selected",b).length;case "input":if(this.checkable(b))return this.findByName(b.name).filter(":checked").length}return a.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(a,b){return!!c(a,b.form).length},"function":function(a,b){return a(b)}},optional:function(a){return!c.validator.methods.required.call(this,
    c.trim(a.value),a)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(a,b){this.pendingRequest--;0>this.pendingRequest&&(this.pendingRequest=0);delete this.pending[a.name];b&&0==this.pendingRequest&&this.formSubmitted&&this.form()?(c(this.currentForm).submit(),this.formSubmitted=!1):!b&&(0==this.pendingRequest&&this.formSubmitted)&&(c(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=
    !1)},previousValue:function(a){return c.data(a,"previousValue")||c.data(a,"previousValue",{old:null,valid:!0,message:this.defaultMessage(a,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},dateDE:{dateDE:!0},number:{number:!0},numberDE:{numberDE:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(a,b){a.constructor==String?this.classRuleSettings[a]=b:c.extend(this.classRuleSettings,a)},classRules:function(a){var b=
    {};(a=c(a).attr("class"))&&c.each(a.split(" "),function(){this in c.validator.classRuleSettings&&c.extend(b,c.validator.classRuleSettings[this])});return b},attributeRules:function(a){var b={},a=c(a),d;for(d in c.validator.methods){var e;(e="required"===d&&"function"===typeof c.fn.prop?a.prop(d):a.attr(d))?b[d]=e:a[0].getAttribute("type")===d&&(b[d]=!0)}b.maxlength&&/-1|2147483647|524288/.test(b.maxlength)&&delete b.maxlength;return b},metadataRules:function(a){if(!c.metadata)return{};var b=c.data(a.form,
    "validator").settings.meta;return b?c(a).metadata()[b]:c(a).metadata()},staticRules:function(a){var b={},d=c.data(a.form,"validator");d.settings.rules&&(b=c.validator.normalizeRule(d.settings.rules[a.name])||{});return b},normalizeRules:function(a,b){c.each(a,function(d,e){if(!1===e)delete a[d];else if(e.param||e.depends){var f=!0;switch(typeof e.depends){case "string":f=!!c(e.depends,b.form).length;break;case "function":f=e.depends.call(b,b)}f?a[d]=void 0!==e.param?e.param:!0:delete a[d]}});c.each(a,
    function(d,e){a[d]=c.isFunction(e)?e(b):e});c.each(["minlength","maxlength","min","max"],function(){a[this]&&(a[this]=Number(a[this]))});c.each(["rangelength","range"],function(){a[this]&&(a[this]=[Number(a[this][0]),Number(a[this][1])])});if(c.validator.autoCreateRanges&&(a.min&&a.max&&(a.range=[a.min,a.max],delete a.min,delete a.max),a.minlength&&a.maxlength))a.rangelength=[a.minlength,a.maxlength],delete a.minlength,delete a.maxlength;a.messages&&delete a.messages;return a},normalizeRule:function(a){if("string"==
    typeof a){var b={};c.each(a.split(/\s/),function(){b[this]=!0});a=b}return a},addMethod:function(a,b,d){c.validator.methods[a]=b;c.validator.messages[a]=void 0!=d?d:c.validator.messages[a];3>b.length&&c.validator.addClassRules(a,c.validator.normalizeRule(a))},methods:{required:function(a,b,d){if(!this.depend(d,b))return"dependency-mismatch";switch(b.nodeName.toLowerCase()){case "select":return(a=c(b).val())&&0<a.length;case "input":if(this.checkable(b))return 0<this.getLength(a,b);default:return 0<
    c.trim(a).length}},remote:function(a,b,d){if(this.optional(b))return"dependency-mismatch";var e=this.previousValue(b);this.settings.messages[b.name]||(this.settings.messages[b.name]={});e.originalMessage=this.settings.messages[b.name].remote;this.settings.messages[b.name].remote=e.message;d="string"==typeof d&&{url:d}||d;if(this.pending[b.name])return"pending";if(e.old===a)return e.valid;e.old=a;var f=this;this.startRequest(b);var g={};g[b.name]=a;c.ajax(c.extend(!0,{url:d,mode:"abort",port:"validate"+
    b.name,dataType:"json",data:g,success:function(d){f.settings.messages[b.name].remote=e.originalMessage;var g=d===true;if(g){var i=f.formSubmitted;f.prepareElement(b);f.formSubmitted=i;f.successList.push(b);f.showErrors()}else{i={};d=d||f.defaultMessage(b,"remote");i[b.name]=e.message=c.isFunction(d)?d(a):d;f.showErrors(i)}e.valid=g;f.stopRequest(b,g)}},d));return"pending"},minlength:function(a,b,d){return this.optional(b)||this.getLength(c.trim(a),b)>=d},maxlength:function(a,b,d){return this.optional(b)||
    this.getLength(c.trim(a),b)<=d},rangelength:function(a,b,d){a=this.getLength(c.trim(a),b);return this.optional(b)||a>=d[0]&&a<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},email:function(a,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)},
    url:function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},
    date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a))},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 -]+/.test(a))return!1;for(var c=0,e=0,f=!1,a=a.replace(/\D/g,""),g=a.length-1;0<=g;g--){e=
    a.charAt(g);e=parseInt(e,10);if(f&&9<(e*=2))e-=9;c+=e;f=!f}return 0==c%10},accept:function(a,b,c){c="string"==typeof c?c.replace(/,/g,"|"):"png|jpe?g|gif";return this.optional(b)||a.match(RegExp(".("+c+")$","i"))},equalTo:function(a,b,d){d=c(d).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){c(b).valid()});return a==d.val()}}});c.format=c.validator.format})(jQuery);
    (function(c){var a={};if(c.ajaxPrefilter)c.ajaxPrefilter(function(b,c,f){c=b.port;"abort"==b.mode&&(a[c]&&a[c].abort(),a[c]=f)});else{var b=c.ajax;c.ajax=function(d){var e=("port"in d?d:c.ajaxSettings).port;return"abort"==("mode"in d?d:c.ajaxSettings).mode?(a[e]&&a[e].abort(),a[e]=b.apply(this,arguments)):b.apply(this,arguments)}}})(jQuery);
    (function(c){!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(a){a=c.event.fix(a);a.type=b;return c.event.handle.call(this,a)}c.event.special[b]={setup:function(){this.addEventListener(a,d,!0)},teardown:function(){this.removeEventListener(a,d,!0)},handler:function(a){arguments[0]=c.event.fix(a);arguments[0].type=b;return c.event.handle.apply(this,arguments)}}});c.extend(c.fn,{validateDelegate:function(a,
    b,d){return this.bind(b,function(b){var f=c(b.target);if(f.is(a))return d.apply(f,arguments)})}})})(jQuery);
    var pyroforms = {
        //@todo Create a Namespace
        live: function(selector, event, callback){
            $(selector).live(event, callback);
        },
        submit: function(oForm, form){
            //ajax
            form = form || false;
            if (oForm.hasClass('pyroforms-ajax'))
            {
                oForm.ajaxSubmit({
                    dataType:"json",
                    success: function(a){
                        if (a.status == "ok")
                        {
                            oForm.hide().replaceWith(a.msg).show();
                            pyroforms.error();
                        } else { $("#frm-error").html(a.msg).show() }
    
                        //GA Event tracking
                        if (typeof a.track != 'undefined' && typeof _gaq != 'undefined')
                        {
                            _gaq.push(['_trackEvent', 'Forms', a.track.action, a.track.title]);
                        }
                        if ('captcha' in a)
                        {
                            $('.frm-captcha-img img').replaceWith(a.captcha);
                        }
                    }
                })
            } else {
                if (form) form.submit();
            }
        },
        validate: function(form, opts){
            form.validate(opts);
        },
        error: function(msg) {
            if (typeof msg != 'undefined')
            {
                $("#frm-error").html(msg).show();
            }
            else {
                $("#frm-error").hide();
            }
        },
        init: function(form, opts) {
    
            pyroforms.validate(form, opts);
        }
    };
    $(document).ready(function(){
        // Close the notifications when the close link is clicked
        $('a.close').live('click', function(e){	e.preventDefault();$(this).fadeTo(200, 0);$(this).parent().fadeTo(200, 0);$(this).parent().slideUp(400, function(){$(this).remove()})});
    });