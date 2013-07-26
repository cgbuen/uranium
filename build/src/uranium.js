(function(b){var J=function(){var b=0;return function(){b+=1;return b}}(),o=function(c,g){var e={};b(c).find("*[data-ur-set='"+g+"']").each(function(){var c=b(this).attr("data-ur-id");c===void 0&&(c=J());b(this).attr("data-ur-id",c);e[c]={};e[c].set=this;e[c][g+"_id"]=c});return jQuery.isEmptyObject(e)?!1:e},y=function(c,g){console.log("findComponents");return b(c).children("*[data-ur-"+g+"-component]")},A=!1,I=[function(c){var g=o(c,"toggler");if(g!==!1){for(group in g)if(c=g[group],y(c.set,"toggler").each(function(){g[group][b(this).attr("data-ur-toggler-component")]=
this}),c.button===void 0)b.error("no button found for toggler with id="+c.toggler_id);else{var e=b(c.button).attr("data-ur-state");e===void 0&&(b(c.button).attr("data-ur-state","disabled"),e="disabled");c.content===void 0?b.error("no content found for toggler with id="+c.toggler_id):b(c.content).attr("data-ur-state")===void 0&&b(c.content).attr("data-ur-state",e)}b.each(g,function(){var c=this;b(c.button).click(function(){event.stopPropagation();var g=b(c.button).attr("data-ur-state")==="enabled"?
"disabled":"enabled";b(c.button).attr("data-ur-state",g);b(c.content).attr("data-ur-state",g)})})}},function(c){var g=o(c,"tabs");if(g!==!1)for(var e in g){var c=g[e],f=b(c.set).attr("data-ur-closeable")==="true";c.closeable=f;c.tabs={};var h=c.tabs,f=y(c.set,"tabs"),l=c.tabs_id;f.each(function(){var c=b(this).attr("data-ur-tab-id");h[c]===void 0&&(h[c]={});h[c][b(this).attr("data-ur-tabs-component")]=this;h[c].tabs_id=l});for(singleTab in h)c=h[singleTab],f=b(c.button).attr("data-ur-state"),f===
void 0?f="disabled":f!=="disabled"&&(f="enabled"),b(c.button).attr("data-ur-state",f),b(c.content).attr("data-ur-state",f);b.each(h,function(){var c=this;b(c.button).click(function(){var p=b(this).attr("data-ur-state")==="enabled";b.each(g[c.tabs_id].tabs,function(){b(this.button).attr("data-ur-state","disabled");b(this.content).attr("data-ur-state","disabled")});p&&g[c.tabs_id].closeable?console.info("Closeable, allowing state to toggle."):(b(this).attr("data-ur-state","enabled"),b(c.content).attr("data-ur-state",
"enabled"))})})}},function(c){c=o(c,"input-clear");b.each(c,function(){var c=b(this.set).find("input"),e=b('<div class="data-ur-input-clear-ex"></div>');e.hide();b(this.set).append(e);e.bind("touchstart",function(){c[0].value=""}).bind("touchend",function(){c[0].focus()});c.bind("focus",function(){c[0].value!=""&&e.show()}).bind("keydown",function(){e.show()}).bind("blur",function(){setTimeout(function(){e.hide()},150)})})},function(c){c=o(c,"reverse-geocode");b.each(c,function(){function c(p,g,e){var f=
0,h=null,s=null,u=null;switch(b(p).attr("data-ur-reverse-geocode-component")){case "rg-city":s="locality";break;case "rg-street":s="street_number";break;case "rg-zip":s="postal_code";break;case "rg-state":s="administrative_area_level_1";break;case "rg-country":s="country"}for(var u=g[0],l=null,q=u.address_components.length,a=0;a<q;a++)for(var t=u.address_components[a].types.length,d=0;d<t;d++)if(l=u.address_components[a].types[d],s==l){switch(l){case "street_number":f=a;h=a+1;break;case "locality":f=
a;break;case "postal_code":f=a;break;case "administrative_area_level_1":f=a;break;case "country":f=a}break}if(e==="input")p.value=h===null?g[0].address_components[f].long_name:g[0].address_components[f].long_name+" "+g[0].address_components[h].long_name;else if(e==="select"){g=g[0].address_components[f];e=0;for(f=p.length;e<f;e++)if(p[e].value===g.long_name||p[e].value.toUpperCase()===g.short_name)p.selectedIndex=e}}var e=this.set;this.elements=y(e,"reverse-geocode");b(e).attr("data-ur-callback");
var f=b(e).attr("data-ur-error-callback"),h,l,D;this.setup_callbacks=function(){D=this;var c=b(this.elements).filter("[data-ur-reverse-geocode-component='rg-button']");c.length>0?b(c).bind("click",function(b){return function(){b.geocodeInit()}}(this)):(console.warn("no button for triggering reverse geocoding present"),this.geocodeInit())};this.geoSuccess=function(b){b={lat:b.coords.latitude,lng:b.coords.longitude};this.codeLatLng(b.lat,b.lng)};this.geoError=function(b){console.error("Ur geolocation error -- Error Getting Your Coordinates!");
switch(b.code){case b.TIMEOUT:console.error("Ur geolocation error -- Timeout");break;case b.POSITION_UNAVAILABLE:console.error("Ur geolocation error -- Position unavailable");break;case b.PERMISSION_DENIED:console.error("Ur geolocation error -- Permission denied");break;case b.UNKNOWN_ERROR:console.error("Ur geolocation error -- Unknown error")}f!==void 0&&eval(f)};this.geoDenied=function(){console.error("Ur geolocation error -- User Denied Geolocation")};this.codeLatLng=function(b,e){var f=new google.maps.LatLng(b,
e),E=this;h.geocode({latLng:f},function(b,e){if(e==google.maps.GeocoderStatus.OK)if(b[1]){l=b;var f=D.elements;global=f;for(elm in f)f[elm].localName==="input"?c(f[elm],l,"input"):f[elm].localName==="select"&&c(f[elm],l,"select");E.callback!==void 0&&eval(E.callback);return b}else console.error("Geocoder failed due to: "+e)})};this.geocodeInit=function(){navigator.geolocation&&(h=new google.maps.Geocoder,navigator.geolocation.getCurrentPosition(function(b){return function(c){b.geoSuccess(c)}}(this),
function(b){return function(c){b.geoError(c)}}(this),this.geoDenied))};UrGeocode=function(b){return function(){b.setup_callbacks()}}(this);e=document.createElement("script");e.type="text/javascript";e.src="https://maps.googleapis.com/maps/api/js?sensor=true&callback=UrGeocode";b("head").append(e)})},function(c){function g(b,c){return Math.max(Math.min(c[0],b),c[1])}function e(c){function e(){a.canvasWidth=a.canvasWidth||a.container.offsetWidth;a.canvasHeight=a.canvasHeight||a.container.offsetHeight;
a.width=a.width||parseInt(d.attr("width"))||parseInt(d.getStyle("width"))||a.img.width;a.height=a.height||parseInt(d.attr("height"))||parseInt(d.getStyle("height"))||a.img.height;a.bigWidth=parseInt(d.attr("data-ur-width"))||a.img.naturalWidth;a.bigHeight=parseInt(d.attr("data-ur-height"))||a.img.naturalHeight;if(d.attr("data-ur-width")&&d.attr("data-ur-height")||d.attr("src")==d.attr("data-ur-src"))a.prescale=!0;a.ratio=a.bigWidth/a.width;n=(a.canvasWidth-a.bigWidth)/2;m=(a.canvasHeight-a.bigHeight)/
2}function h(b){if(b.target==a.img){F=!1;j=b.pageX;G=b.pageY;H=!0;if(b.touches)j=b.touches[0].pageX,G=b.touches[0].pageY;var c=a.img.style;window.WebKitCSSMatrix?(c=new WebKitCSSMatrix(c.webkitTransform),v=c.m41,k=c.m42):(c=c.MozTransform||c.OTransform||c.transform||"translate(0, 0)",c=c.replace(/.*?\(|\)/,"").split(","),v=parseInt(c[0]),k=parseInt(c[1]));b.preventDefault();b.stopPropagation()}}function o(b){if(H&&b.target==a.img){b.preventDefault();b.stopPropagation();var c=b.pageX,d=b.pageY;if(b.touches)c=
b.touches[0].pageX,d=b.touches[0].pageY;b=c-j;d-=G;if(Math.abs(b)>5||Math.abs(d)>5)F=!0;b=g(v+b,[-n,n]);d=g(k+d,[-m,m]);q(b,d,a.ratio)}}function s(b){F||a.zoomOut();b.preventDefault();b.stopPropagation();H=!1;F=!0}function u(){if(a.state=="enabled-in"){d.css({webkitTransitionDelay:"",MozTransitionDelay:"",OTransitionDelay:"",transitionDelay:""});a.img.src=d.attr("data-ur-src");f.indexOf(a.img.getAttribute("data-ur-src"))==-1&&setTimeout(function(){f.indexOf(a.img.getAttribute("data-ur-src"))==-1&&
w.attr("data-ur-state","enabled")},16);a.state="enabled";a.container.setAttribute("data-ur-state",a.state);var k="ontouchstart"in window,c=b(a.container);c.on(k?"touchstart":"mousedown",h);c.on(k?"touchmove":"mousemove",o);c.on(k?"touchend":"mouseup",s)}else if(a.state=="enabled-out")a.state="disabled",a.container.setAttribute("data-ur-state",a.state),k="ontouchstart"in window,c=b(a.container),c.unbind(k?"touchstart":"mousedown",h),c.unbind(k?"touchmove":"mousemove",o),c.unbind(k?"touchend":"mouseup",
s)}function B(b,k){z.attr("data-ur-state","enabled");a.state="enabled-in";a.container.setAttribute("data-ur-state",a.state);q(b?b:0,k?k:0,a.ratio)}function q(a,b,k){var c="";a!=void 0&&(c=D+a+"px, "+b+"px"+p);k!=void 0&&(c+=l?" scale("+k+")":" scale3d("+k+", "+k+", 1)");return d.css({webkitTransform:c,MozTransform:c,OTransform:c,transform:c})}var a=this,t=c.components;this.container=c.set;this.img=b(t).filter("[data-ur-zoom-component='img']")[0];this.prescale=!1;this.canvasWidth=this.canvasHeight=
this.bigWidth=this.bigHeight=this.width=this.height=0;this.ratio=1;this.state="disabled";this.button=b(t).filter("[data-ur-zoom-component='button']")[0];this.idler=b(t).filter("[data-ur-zoom-component='loading']")[0];var d=b(this.img),w=b(this.idler),z=b(this.button),n,m,i,r,v=0,k=0,j=0,G=0,H=!1,F=!0;f.push(d.attr("src"));this.zoomIn=function(b){if(a.state=="disabled"){if(!a.width)e(),a.img.style.width=a.width+"px",a.img.style.height=a.height+"px";var k=b.pageX,c=b.pageY;if(b.touches)k=b.touches[0].pageX,
c=b.touches[0].pageY;i=b.offsetX;r=b.offsetY;if(i==void 0||r==void 0)b=a.img.getBoundingClientRect(),i=k-b.left,r=c-b.top;a.prescale?(k=g(a.bigWidth/2-a.ratio*i,[-n,n]),c=g(a.bigHeight/2-a.ratio*r,[-m,m]),B(k,c)):(a.state="enabled-in",a.img.src=d.attr("data-ur-src"),setTimeout(function(){a.prescale||w.attr("data-ur-state","enabled")},0))}};this.zoomOut=function(){if(a.state=="enabled")z.attr("data-ur-state","disabled"),a.state="enabled-out",a.container.setAttribute("data-ur-state",a.state),q(0,0,
1)};a.container.getAttribute("data-ur-touch")!="disabled"&&b(a.container).click(a.zoomIn);d.load(function(){d.attr("src")==d.attr("data-ur-src")&&f.push(d.attr("src"));w.attr("data-ur-state","disabled");if(!a.prescale&&a.state=="enabled-in"){a.prescale=!0;e();var b=g(a.bigWidth/2-a.ratio*i,[-n,n]),k=g(a.bigHeight/2-a.ratio*r,[-m,m]);d.css({webkitTransitionDelay:"0.3s",MozTransitionDelay:"0.3s",OTransitionDelay:"0.3s",transitionDelay:"0.3s"});B(b,k)}});this.zoom=function(){if(a.state=="disabled"){if(!a.width)e(),
a.img.style.width=a.width+"px",a.img.style.height=a.height+"px";a.prescale?B(0,0):(a.state="enabled-in",a.img.src=d.attr("data-ur-src"),setTimeout(function(){f.indexOf(a.img.getAttribute("data-ur-src"))==-1&&w.attr("data-ur-state","enabled")},0))}else a.zoomOut()};b(a.button).click(a.zoom);b.each(["webkitTransitionEnd","transitionend","oTransitionEnd"],function(a,b){d.on(b,u)});this.reset=function(){a.prescale=!1;a.width=a.height=0;d.css({width:"",height:""});q();a.state="enabled-out";u();w.attr("data-ur-state",
"disabled");z.attr("data-ur-state","disabled")}}var c=o(c,"zoom"),f=[],h=/Android [12]|Opera/.test(navigator.userAgent),l=h,D=h?"translate(":"translate3d(",p=h?")":", 0)";b.each(c,function(){this.components=y(this.set,"zoom");this.zoom_object=new e(this)})},function(c){function g(b){b.preventDefault();b.stopPropagation()}function e(c){function e(){var b=/Android [12]/.test(navigator.userAgent),c=/iP(hone|od) OS 6/.test(navigator.userAgent);if(b&&d.attr("data-ur-android3d")[0]!="enabled"||c)a.options.transform3d=
!1,b=parseFloat(d.attr("data-ur-speed")),a.options.speed=b>1?b:1.3;d.attr("data-ur-speed",a.options.speed);a.options.verticalScroll=d.attr("data-ur-vertical-scroll")!="disabled";d.attr("data-ur-vertical-scroll",a.options.verticalScroll?"enabled":"disabled");a.options.touch=d.attr("data-ur-touch")!="disabled";d.attr("data-ur-touch",a.options.touch?"enabled":"disabled");a.options.infinite=d.attr("data-ur-infinite")!="disabled";if(d.find("[data-ur-carousel-component='item']").length==1)a.options.infinite=
!1;d.attr("data-ur-infinite",a.options.infinite?"enabled":"disabled");a.options.center=d.attr("data-ur-center")=="enabled";d.attr("data-ur-center",a.options.center?"enabled":"disabled");b=parseInt(d.attr("data-ur-fill"));if(b>0)a.options.fill=b;d.attr("data-ur-fill",a.options.fill);b=parseInt(d.attr("data-ur-clones"));if(a.options.infinite){if(isNaN(b)||b<a.options.fill)b=Math.max(1,a.options.fill)}else b=0;a.options.cloneLength=b;d.attr("data-ur-clones",a.options.cloneLength);a.options.autoscroll=
d.attr("data-ur-autoscroll")=="enabled";d.attr("data-ur-autoscroll",a.options.autoscroll?"enabled":"disabled");b=parseInt(d.attr("data-ur-autoscroll-delay"));if(b>=0)a.options.autoscrollDelay=b;d.attr("data-ur-autoscroll-delay",a.options.autoscrollDelay);a.options.autoscrollForward=d.attr("data-ur-autoscroll-dir")!="prev";d.attr("data-ur-autoscroll-dir",a.options.autoscrollForward?"next":"prev")}function l(){if(a.dots){var c=b(a.dots).find("[data-ur-carousel-component='dot']");if(c.length!=a.realItemCount){c.remove();
for(var c=b("<div data-ur-carousel-component='dot'></div>"),j=a.itemIndex-a.options.cloneLength,d=0;d<a.realItemCount;d++){var e=c.clone();d==j?b(e).attr("data-ur-state","active"):b(e).attr("data-ur-state","inactive");b(a.dots).append(e)}}}}function o(){var b=a.container.offsetWidth;m!=b&&b!=0&&a.update()}function p(a){if(a.originalEvent.touches&&a.originalEvent.touches.length>0)return{x:a.originalEvent.touches[0].clientX,y:a.originalEvent.touches[0].clientY};else if(a.clientX!=void 0)return{x:a.clientX,
y:a.clientY};return null}function y(b){b=a.itemIndex-b;if(!a.options.infinite)b>a.lastIndex?b=a.lastIndex:b<0&&(b=0);return b}function A(c){if(c!==void 0){a.itemIndex=c;if(a.itemIndex<0)a.itemIndex=0;else if(a.itemIndex>a.lastIndex)a.itemIndex=a.lastIndex-1;c=a.itemIndex;a.options.infinite&&(c=(a.realItemCount+a.itemIndex-a.options.cloneLength)%a.realItemCount);if(a.count!==void 0)a.count.innerHTML=c+1+" of "+a.realItemCount;b(a.items).find("[data-ur-carousel-component='item'][data-ur-state='active']").attr("data-ur-state",
"inactive");b(b(a.items).find("[data-ur-carousel-component='item']")[a.itemIndex]).attr("data-ur-state","active");a.dots&&b(b(a.dots).find("[data-ur-carousel-component='dot']").attr("data-ur-state","inactive")[c]).attr("data-ur-state","active");a.options.infinite?(b(a.button.prev).attr("data-ur-state","enabled"),b(a.button.next).attr("data-ur-state","enabled")):(b(a.button.prev).attr("data-ur-state",a.itemIndex==0?"disabled":"enabled"),b(a.button.next).attr("data-ur-state",a.itemIndex==a.itemCount-
Math.max(a.options.fill,1)?"disabled":"enabled"));b(d).trigger("slidestart",{index:c})}}function E(c){a.options.verticalScroll||g(c);a.autoscrollStop();a.flag.touched=!0;a.flag.lock=null;a.flag.loop=!1;a.flag.click=!0;c=p(c);w.x=c.x;w.y=c.y;if(c!==null){var j=a.translate,d=b(a.items).find("[data-ur-carousel-component='item']"),d=d[a.realItemCount].offsetLeft-d[a.options.cloneLength-1].offsetLeft;if(i==null||a.destinationOffset==void 0)i=j;Math.abs(i)>d&&(i=0);if(!(Math.abs(i+j)>b(a.items).width()))i=
a.destinationOffset;z=n=c}}function C(c){if(a.flag.touched){a.flag.click=!1;var j=p(c);if(document.ontouchstart!==void 0&&a.options.verticalScroll){var d=Math.abs((w.y-j.y)/(w.x-j.x));if(a.flag.lock){if(a.flag.lock=="y")return}else if(d>1.2){a.flag.lock="y";return}else if(d<=1.2)a.flag.lock="x";else return}g(c);if(j!==null){n=j;c=(n===void 0?0:n.x-z.x)+i;if(a.options.infinite)if(j=b(a.items).find("[data-ur-carousel-component='item']"),d=a.options.center?j[a.lastIndex].offsetLeft+j[a.lastIndex].offsetWidth-
a.container.offsetWidth:j[a.lastIndex].offsetLeft+j[a.lastIndex].offsetWidth,c>0)d=j[a.realItemCount],j=d.offsetLeft-j[0].offsetLeft,i-=j,c-=j,a.flag.loop=!a.flag.loop;else if(c<-d)d=j[a.lastIndex-a.realItemCount],j=d.offsetLeft-j[a.lastIndex].offsetLeft,i-=j,c-=j,a.flag.loop=!a.flag.loop;q(c)}}}function s(c){if(!a.flag.click||a.flag.lock)g(c);else if(c.target.tagName=="AREA")location.href=c.target.href;a.flag.touched=!1;var c=u,d=(n===void 0?0:n.x-z.x)/b(a.items).find("[data-ur-carousel-component='item']")[0].offsetWidth;
c(d<=0?Math.floor(d):Math.ceil(d))}function u(c){a.autoscrollStop();var d=y(c),e=b(a.items).find("[data-ur-carousel-component='item']");if(a.options.infinite){var f=a.translate;if(d<0){var g=e[a.options.cloneLength].offsetLeft-e[a.itemCount-a.options.cloneLength].offsetLeft;if(Math.abs(c)>a.options.cloneLength){var h=(Math.abs(c)-a.options.cloneLength)*b(e[1]).width();i+=h;d-=Math.abs(c)-a.options.cloneLength}a.flag.loop||(f+=g,q(f),i+=g);d+=Math.ceil(Math.abs(d)/a.realItemCount)*a.realItemCount;
a.itemIndex=d+c;if(a.itemIndex>a.realItemCount+a.options.cloneLength)a.itemIndex=a.realItemCount+a.options.cloneLength}else if(d>=a.lastIndex-a.options.cloneLength&&(g=e[a.itemCount-a.options.cloneLength].offsetLeft-e[a.options.cloneLength].offsetLeft,a.flag.loop||(f+=g,q(f),i+=g),d-=Math.floor(Math.abs(d)/a.realItemCount)*a.realItemCount,a.itemIndex=d+c,Math.abs(c)>a.options.cloneLength&&(a.itemIndex+=Math.abs(c)-a.options.cloneLength),a.itemIndex<0))a.itemIndex=a.realItemCount+a.itemIndex-1}var c=
e[d],f=e[a.itemIndex],l=f.offsetLeft-c.offsetLeft;i=-f.offsetLeft;a.options.center&&(e=parseInt((m-e[a.itemIndex].offsetWidth)/2),i+=e);if(d==a.itemIndex)i=a.destinationOffset;a.options.center&&(l+=(f.offsetWidth-c.offsetWidth)/2);a.itemIndex==d&&(l=0);setTimeout(function(){var c=l;a.destinationOffset=c+i;if(a.destinationOffset>0&&a.options.infinite)a.destinationOffset=-Math.abs(c);var c=-1*a.lastIndex*m,e=parseInt(m-b(a.items).find("[data-ur-carousel-component='item']")[0].width/2);a.options.infinite&&
(c=-b(a.items).find("[data-ur-carousel-component='item']").parent().width());if(a.destinationOffset<c||a.destinationOffset>e)a.destinationOffset=Math.abs(a.destinationOffset-c)<1?c:e;B();A(d)},0)}function B(){if(!a.flag.touched){a.flag.increment=!1;var c=a.translate,d=a.destinationOffset-c;d-=d/a.options.speed>=0?Math.floor(d/a.options.speed):Math.ceil(d/a.options.speed);Math.abs(d)<0.01&&(d=0);q(d+c);if(d!=0)a.flag.increment=!0;a.flag.increment?setTimeout(B,16):(i=null,a.autoscrollStart(),c=a.itemIndex,
b(a.container).trigger("slideend",{index:c}))}}function q(c){a.translate=c;b(a.items).css({webkitTransform:r+c+"px, 0px"+v,msTransform:r+c+"px, 0px"+v,OTransform:r+c+"px, 0px"+v,MozTransform:r+c+"px, 0px"+v,transform:r+c+"px, 0px"+v})}var a=this,t=c.components;this.container=c.set;this.items=b(t).filter("[data-ur-carousel-component='scroll_container']")[0];if(this.items.length==0)return b.error("carousel missing item components"),!1;this.button=b(t).filter("[data-ur-carousel-component='button']")[0]===
void 0?{}:b(t).filter("[data-ur-carousel-component='button']");this.count=b(t).filter("[data-ur-carousel-component='count']")[0];this.dots=b(t).filter("[data-ur-carousel-component='dots']")[0];this.button.prev=this.button.filter("[data-ur-carousel-button-type='prev']");this.button.next=this.button.filter("[data-ur-carousel-button-type='next']");this.flag={click:!1,increment:!1,loop:!1,lock:null,timeoutId:null,touched:!1};this.options={autoscroll:!0,autoscrollDelay:5E3,autoscrollForward:!0,center:!0,
cloneLength:1,fill:0,infinite:!0,speed:1.1,transform3d:!0,touch:!0,verticalScroll:!0};this.translate=this.itemIndex=0;var d=b(this.container),w={x:0,y:0},z={x:0,y:0},n={x:0,y:0},m=0,i=null,r="translate3d(",v=", 0px)";this.update=function(){var c=m;m=a.container.offsetWidth;var d=a.itemCount,e=b(a.items).find("[data-ur-carousel-component='item']");a.itemCount=e.length;if(d!=a.itemCount){a.realItemCount=e.filter(":not([data-ur-clone])").length;x=e;a.lastIndex=a.itemCount-1;if(a.itemIndex>a.lastIndex)a.itemIndex=
a.lastIndex;l()}var f=0,d=[];if(a.options.fill>0)for(var g=m,h=a.options.fill;h>0;h--){var i=Math.round(g/h);d.push(i);g-=i}for(h=0;h<e.length;h++)if(a.options.fill>0)i=d[h%a.options.fill],b(e[h]).width(i+"px"),f+=i;else if(a.options.fill==0)if(b(e[h]).width()>0)f+=b(e[h]).width();else b(e[h]).on("load",function(){f+=b(this).width()});b(a.items).width(f+"px");d=-e[a.itemIndex].offsetLeft;a.options.center&&(e=parseInt((m-e[a.itemIndex].offsetWidth)/2),d+=e);if(c)a.destinationOffset=d;q(d)};this.autoscrollStart=
function(){if(a.options.autoscroll)a.flag.timeoutId=setTimeout(function(){a.container.offsetWidth!=0?!a.options.infinite&&a.itemIndex==a.lastIndex&&a.options.autoscrollForward?a.jumpToIndex(0):!a.options.infinite&&a.itemIndex==0&&!a.options.autoscrollForward?a.jumpToIndex(a.lastIndex):a.moveTo(a.options.autoscrollForward?-1:1):a.autoscrollStart()},a.options.autoscrollDelay)};this.autoscrollStop=function(){clearTimeout(a.flag.timeoutId)};this.moveTo=function(b){if(!a.flag.increment)i=a.translate,u(b)};
this.jumpToIndex=function(b){a.moveTo(a.itemIndex-b)};(function(){e();a.options.transform3d||(r="translate(",v=")");b(a.items).filter("[data-ur-carousel-component='item']").each(function(c,d){if(b(c).attr("data-ur-state")=="active")a.itemIndex=d});if(a.options.infinite){var c=b(a.items).find("[data-ur-carousel-component='item']");a.realItemCount=c.length;for(var d=0;d<a.options.cloneLength;d++){var f=b(c[d]).clone(!0);b(f).attr("data-ur-clone",d).attr("data-ur-state","inactive");c.parent().append(f)}for(d=
c.length-1;d>c.length-a.options.cloneLength-1;d--)f=b(c[d]).clone(!0),b(f).attr("data-ur-clone",d).attr("data-ur-state","inactive"),c.parent().prepend(f)}else c=b(a.items).find("[data-ur-carousel-component='item']"),a.realItemCount=c.length;A(a.itemIndex+a.options.cloneLength);a.update();a.options.touch&&(d=(c="ontouchstart"in window)?"touchmove":"mousemove",f=c?"touchend":"mouseup",b(a.items).on(c?"touchstart":"mousedown",E),b(a.items).on(d,C),b(a.items).on(f,s),b(a.items).on("click",function(b){a.flag.click||
g(b)}));b(a.button.prev).on("click",function(){a.moveTo(1)});b(a.button.next).on("click",function(){a.moveTo(-1)});b(window).orientationchange!=void 0&&b(window).orientationchange(o);b(window).on("resize",function(){o();setTimeout(o,100)});b(window).load(function(){a.update()});a.autoscrollStart()})()}c=o(c,"carousel");b.each(c,function(){var c=this.carousel_id,g=y(this.set,"carousel");g.each(function(){if(b(this).attr("data-ur-carousel-component")=="button"){var e=b(this).attr("data-ur-carousel-button-type");
e===void 0&&b.error("malformed carousel button type for carousel with id: "+c+".");b(this).attr("data-ur-state",e=="prev"?"disabled":"enabled")}});this.components=g;this.crsl_object=new e(this);b(this.set).attr("data-ur-state","enabled")})}],C={init:function(){if(!A){var c=this;b.each(I,function(){this(c)})}A=!0},lateInit:function(c){console.log("Uranium lateInit: "+c);b.each(I,function(){this(c)})},warn:function(b){console.warn("Uranium Warning: "+b)},initialized:function(){return A}};b.fn.Uranium=
function(c){return this.each(function(){if(C[c])return C[c].apply(this,Array.prototype.slice.call(arguments,1));else if(typeof c==="object"||!c)return C.init.apply(this,arguments);else b.error("Method "+c+" does not exist on jQuery.Uranium")})}})(jQuery);$(document).ready(function(){$("body").Uranium("init")});
