(function(c){function A(b,e,f){var d={},g="[data-ur-set='"+e+"']",B="data-ur-"+e+"-component",l="["+B+"],"+g+":empty";c(b).find(l).addBack(l).each(function(){if(!c(this).data("urCompInit")){var b=[];this!=document&&(b=c(this).attr("data-ur-id")?c(this):c(this).closest(g));if(b[0]&&!b.data("urInit")){c(this).data("urCompInit",e);var l=b.attr("data-ur-id");l||(l=V(),b.attr("data-ur-id",l));d[l]=d[l]||{};d[l]._id=l;if(b.is(g))d[l].set=b[0];if(f)f(d[l],this);else if(b=c(this).attr(B))d[l][b]=d[l][b]||
[],d[l][b].push(this)}}});return d}function y(b,e,f){var d=V();c.each(b,function(g,d){typeof d=="string"&&(b[g]=d=c(d));for(var P=d.length-1;P>=0;P--){var m=c(d[P]);m[0]instanceof Node&&(m.data("urCompInit")?c(d).splice(P,1):c(this).data("urCompInit",e))}!f&&g!="set"&&c(d).attr("data-ur-"+e+"-component",g)});b.set&&b.set.length!==0?c(b.set).attr("data-ur-set",e).attr("data-ur-id",d):c.each(b,function(){c(this).attr("data-ur-id",d)});f&&f(b);var g={};g[d]=c.extend({_id:d},b);return g}function aa(c){var e=
c.originalEvent.touches,c=e&&e[0]||c;return{x:c.clientX,y:c.clientY}}function L(c){c.preventDefault();c.stopPropagation()}function p(c,e){return Math.max(e[0],Math.min(c,e[1]))}function na(c){return typeof c=="string"?c!="disabled"&&c!="false":c}var r=c.fn.jquery.split(".");r[0]==1&&r[1]<4&&(c=c.extend(function(b,e){return new c.fn.init(b||[],e)},c));c.fn.on||c.fn.extend({on:function(c,e,f,d){f==null&&d==null?(d=e,e=null):d==null&&typeof e!="string"&&(d=f,f=e,e=null);return e?this.delegate(e,c,f,
d):this.bind(c,f,d)},off:function(c,e,f){f==null&&(f=e,e=null);return e?this.undelegate(e,c,f):this.unbind(c,f)}});if(!c.fn.addBack)c.fn.addBack=c.fn.andSelf;if(!c.error)c.error=function(c){throw Error(c);};var V=function(){var c=0;return function(){return++c+""}}(),ma=/Android [12]/.test(navigator.userAgent),M=!ma;M&&(r=c("<a>").css({webkitTransform:"translate3d(0, 0, 0)",MozTransform:"translate3d(0, 0, 0)",msTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)"}),M=(r.css("WebkitTransform")+
r.css("MozTransform")+r.css("msTransform")+r.css("transform")+"").indexOf("(")!=-1);var N="ontouchstart"in window,ba=(N?"touchstart":"mousedown")+".ur",ca=(N?"touchmove":"mousemove")+".ur",ga=(N?"touchend":"mouseup")+".ur",E={toggler:function(b){b=b.constructor==Object?y(b,"toggler"):A(b,"toggler");c.each(b,function(b,f){f.button||c.error("no button found for toggler with id: "+b);f.content||c.error("no content found for toggler with id: "+b);var d=c(f.button).attr("data-ur-state")||"disabled";c(f.button).add(f.content).attr("data-ur-state",
d);c(f.button).on("click.ur.toggler",function(){var d=c(f.button).attr("data-ur-state")=="enabled",b=d?"disabled":"enabled";c(f.button).add(f.content).attr("data-ur-state",b);d||c(f.drawer).attr("data-ur-state",b)});c(f.drawer).on("webkitTransitionEnd.ur.toggler transitionend.ur.toggler",function(){c(this).attr("data-ur-state",c(f.button).attr("data-ur-state"))});c(f.set).data("urInit",!0)})},tabs:function(b,e){var e=e||{},f=b.constructor==Object?y(b,"tabs",function(d){c.each(d.tabs,function(d){c.each(this,
function(b){c(this).attr({"data-ur-id":d,"data-ur-tabs-component":b})})})}):A(b,"tabs",function(d,b){var e=c(b).attr("data-ur-tab-id");d.tabs=d.tabs||{};d.tabs[e]=d.tabs[e]||{};var f=c(b).attr("data-ur-tabs-component");d.tabs[e][f]=d.tabs[e][f]||[];d.tabs[e][f].push(b)});c.each(f,function(b,g){g.closeable=na(c(g.set).attr("data-ur-closeable")||e.closeable);c.each(g.tabs,function(){var b=c(this.button).attr("data-ur-state")||"disabled";c(this.button).add(this.content).attr("data-ur-state",b)});c.each(g.tabs,
function(b,d){c(d.button).on("click.ur.tabs",function(){var b=c(this).attr("data-ur-state")=="enabled";c.each(g.tabs,function(){c(this.button).add(this.content).attr("data-ur-state","disabled")});(!b||!g.closeable)&&c(d.button).add(d.content).attr("data-ur-state","enabled")})});c(g.set).data("urInit",!0)})},inputclear:function(b){b=b.constructor==Object?y(b,"input-clear"):A(b,"input-clear");c.each(b,function(b,f){var d=c("<div class='data-ur-input-clear-ex'></div>").hide();c(f.set).append(d);d.on(N?
"touchstart.ur.inputclear":"click.ur.inputclear",function(){g[0].value="";g[0].focus()}).on("touchend.ur.inputclear",function(){g[0].blur()});var g=c(f.set).find("input");g.on("focus.ur.inputclear",function(){g[0].value!=""&&d.show()}).on("keydown.ur.inputclear",function(){d.show()}).on("blur.ur.inputclear",function(){setTimeout(function(){d.hide()},150)});c(f.set).data("urInit",!0)})},geocode:function(b,e){var e=e||{},f=b.constructor==Object?y(b,"reverse-geocode",function(b){b.elements=b.elements||
{};c.each(b,function(e,f){e!="set"&&(b.elements[e]=c(f))})}):A(b,"reverse-geocode",function(b,e){b.elements=b.elements||{};b.elements[c(e).attr("data-ur-reverse-geocode-component")]=e});c.each(f,function(b,f){function B(b,d,e){var f=0,g=null,a=null,l=null;switch(c(b).attr("data-ur-reverse-geocode-component")){case "rg-city":a="locality";break;case "rg-street":a="street_number";break;case "rg-zip":a="postal_code";break;case "rg-state":a="administrative_area_level_1";break;case "rg-country":a="country"}for(var l=
d[0],i=null,B=l.address_components.length,j=0;j<B;j++)for(var m=l.address_components[j].types.length,n=0;n<m;n++)if(i=l.address_components[j].types[n],a==i){switch(i){case "street_number":f=j;g=j+1;break;case "locality":f=j;break;case "postal_code":f=j;break;case "administrative_area_level_1":f=j;break;case "country":f=j}break}if(e==="input")b.value=g===null?d[0].address_components[f].long_name:d[0].address_components[f].long_name+" "+d[0].address_components[g].long_name;else if(e==="select"){d=d[0].address_components[f];
e=0;for(f=b.length;e<f;e++)if(b[e].value===d.long_name||b[e].value.toUpperCase()===d.short_name)b.selectedIndex=e}}var l=this.set,p=c(l).attr("data-ur-callback")||e.callback,m=c(l).attr("data-ur-error-callback")||e.errorCallback,j,w,x;this.setupCallbacks=function(){x=this;var b=this.elements["rg-button"];if(b)c(b).on("click.ur.inputclear",function(c){return function(){c.geocodeInit()}}(this));else console.warn("no button for triggering reverse geocoding present"),this.geocodeInit()};this.geoSuccess=
function(c){c={lat:c.coords.latitude,lng:c.coords.longitude};this.codeLatLng(c.lat,c.lng)};this.geoError=function(c){console.error("Ur geolocation error -- Error Getting Your Coordinates!");switch(c.code){case c.TIMEOUT:console.error("Ur geolocation error -- Timeout");break;case c.POSITION_UNAVAILABLE:console.error("Ur geolocation error -- Position unavailable");break;case c.PERMISSION_DENIED:console.error("Ur geolocation error -- Permission denied");break;case c.UNKNOWN_ERROR:console.error("Ur geolocation error -- Unknown error")}typeof m==
"function"?m():eval(m)};this.geoDenied=function(){console.error("Ur geolocation error -- User Denied Geolocation")};this.codeLatLng=function(c,b){var d=new google.maps.LatLng(c,b);j.geocode({latLng:d},function(c,b){if(b==google.maps.GeocoderStatus.OK)if(c[1]){w=c;var a=x.elements;for(elm in a)a[elm].localName==="input"?B(a[elm],w,"input"):a[elm].localName==="select"&&B(a[elm],w,"select");typeof p=="function"?p():eval(p);return c}else console.error("Geocoder failed due to: "+b)})};this.geocodeInit=
function(){navigator.geolocation&&(j=new google.maps.Geocoder,navigator.geolocation.getCurrentPosition(function(c){return function(b){c.geoSuccess(b)}}(this),function(c){return function(b){c.geoError(b)}}(this),this.geoDenied))};UrGeocode=function(c){return function(){c.setupCallbacks()}}(this);l=document.createElement("script");l.type="text/javascript";l.src="https://maps.googleapis.com/maps/api/js?sensor=true&callback=UrGeocode";c("head").append(l);c(f.set).data("urInit",!0)})},zoom:function(b,
e){function f(b){function d(a){if(x&&a!=x[0]){m.state="enabled-out";var b=x.data("urZoomImg");b.transform(0,0,1);b.transitionEnd()}x=c(a)}function f(b){function B(){w.attr("data-ur-transform3d",j.transform3d?"enabled":"disabled");ia=ia||h.parent().outerWidth();ja=ja||h.parent().outerHeight();Q=Q||parseInt(h.attr("width"))||parseInt(h.css("width"))||h[0].width;da=da||parseInt(h.attr("height"))||parseInt(h.css("height"))||h[0].height;X=parseInt(h.attr("data-ur-width"))||h[0].naturalWidth;ea=parseInt(h.attr("data-ur-height"))||
h[0].naturalHeight;h.attr("data-ur-src")||h.attr("data-ur-src",h.attr("src"));if(h.attr("data-ur-width")&&h.attr("data-ur-height")||h.attr("src")==h.attr("data-ur-src"))S=!0;H=X/Q;C=(X-ia)/2;D=(ea-ja)/2}function m(c){if(j.state=="enabled-slide"){R("enabled");var b=(Date.now()-I)/300;if(b<1){clearTimeout(Y);var o=1-Math.pow(1-b,1.685),b=p(k+o*ka,[-C,C]),o=p(i+o*la,[-D,D]);T(b,o,H)}}n=!1;t=c.pageX;ha=c.pageY;F=!0;if(b=c.originalEvent.touches)t=b[0].pageX,ha=b[0].pageY;b=h[0].style;window.WebKitCSSMatrix?
(b=new WebKitCSSMatrix(b.webkitTransform),z=b.m41,a=b.m42):(b=b.MozTransform||b.msTransform||b.transform||"translate(0, 0)",b=b.replace(/.*?\(|\)/,"").split(","),z=parseInt(b[0]),a=parseInt(b[1]));L(c)}function x(c){if(F){L(c);var b=c.pageX,d=c.pageY;if(c=c.originalEvent.touches)b=c[0].pageX,d=c[0].pageY;b-=t;d-=ha;if(Math.abs(b)>5||Math.abs(d)>5)n=!0;k=p(z+b,[-C,C]);i=p(a+d,[-D,D]);T(k,i,H);Z=J;$=K;J=b;K=d;o=fa;fa=Date.now()}}function P(a){n?Date.now()<fa+50&&N():E.zoomOut();L(a);F=!1;n=!0}function N(){R("enabled-slide");
var a=J-Z,c=K-$,a=100*Math.sqrt((a*a+c*c)/(J*J+K*K))/(fa-o);ka=a*J;la=a*K;a=p(k+ka,[-C,C]);c=p(i+la,[-D,D]);T(a,c,H);I=Date.now();Y=setTimeout(function(){R("enabled")},300)}function R(a){j.state=a;h.attr("data-ur-state",a);j.img.length==1&&w.attr("data-ur-state",a)}function M(a,c){A.attr("data-ur-state","enabled");R("enabled-in");T(a||0,c||0,H)}function T(a,c,b){var o="";a!=null&&(o=G+a+"px, "+c+"px"+O);b!=null&&(o+=u+b+", "+b+q);return h.css({webkitTransform:o,MozTransform:o,msTransform:o,transform:o})}
var E=this,h=c(b),ia,ja,Q,da,X,ea,C,D,H,S;this.transitionEnd=function(){j.state=="enabled-in"?(h.css({webkitTransitionDelay:"",MozTransitionDelay:"",OTransitionDelay:"",transitionDelay:""}),h.attr("src",h.attr("data-ur-src")),g.indexOf(h.attr("data-ur-src"))==-1&&setTimeout(function(){g.indexOf(h.attr("data-ur-src"))==-1&&r.attr("data-ur-state","enabled")},16),R("enabled"),h.on(ba+".zoom",m).on(ca+".zoom",x).on(ga+".zoom",P)):j.state=="enabled-out"&&(R("disabled"),h.off(ba+".zoom",m).off(ca+".zoom",
x).off(ga+".zoom",P))};this.transform=T;this.zoomIn=function(a){if(j.state=="disabled"){Q||(B(),h.css("width",Q+"px"),h.css("height",da+"px"));var c=a.pageX,b=a.pageY;if(a.touches)c=a.touches[0].pageX,b=a.touches[0].pageY;s=a.offsetX;W=a.offsetY;if(s==void 0||W==void 0)a=h[0].getBoundingClientRect(),s=c-a.left,W=b-a.top;S?(c=p(X/2-H*s,[-C,C]),b=p(ea/2-H*W,[-D,D]),M(c,b)):(j.state="enabled-in",h.attr("src",h.attr("data-ur-src")),setTimeout(function(){S||r.attr("data-ur-state","enabled")},0))}};this.zoomOut=
function(){j.state=="enabled"&&(A.attr("data-ur-state","disabled"),R("enabled-out"),T(0,0,1))};if(w.attr("data-ur-touch")!="disabled"||e.touch)h.on(ba+".zoom",function(a){U=v=!0;y=aa(a)}),h.on(ca+".zoom",function(a){a=aa(a);v&&Math.abs(y.x-a.x)+Math.abs(y.x-a.x)>0&&(U=!1)}),h.on("click.ur.zoom",function(a){U&&(d(this),this==h[0]&&E.zoomIn(a))});h.on("load.ur.zoom",function(){h.attr("src")==h.attr("data-ur-src")&&g.push(h.attr("src"));r.attr("data-ur-state","disabled");if(!S&&j.state=="enabled-in"){S=
!0;B();var a=p(X/2-H*s,[-C,C]),c=p(ea/2-H*W,[-D,D]);h.css({webkitTransitionDelay:"0.3s",MozTransitionDelay:"0.3s",OTransitionDelay:"0.3s",transitionDelay:"0.3s"});M(a,c)}});this.zoom=function(){j.state=="disabled"?(Q||(B(),h.css("width",Q+"px"),h.css("height",da+"px")),S?M(0,0):(j.state="enabled-in",h.attr("src",h.attr("data-ur-src")),setTimeout(function(){g.indexOf(h.attr("data-ur-src"))==-1&&r.attr("data-ur-state","enabled")},0))):E.zoomOut()};h.on("webkitTransitionEnd.ur.zoom transitionend.ur.zoom",
this.transitionEnd)}var m=this,j=this;this.container=b.set;this.img=b.img;this.state="disabled";this.button=b.button;this.idler=b.loading;var w=c(this.container),x,r=c(this.idler),A=c(this.button),s,W,z=0,a=0,k=0,i=0,t=0,ha=0,F=!1,n=!0,G="translate(",O=")",u=" scale(",q=")",y,U,v,I,Y,Z=0,$=0,J=0,K=0,o=0,fa=0,ka,la;this.transform3d=M;if(b=w.attr("data-ur-transform3d"))this.transform3d=b!="disabled";else if("transform3d"in e)this.transform3d=e.transform3d;m.transform3d&&(G="translate3d(",O=",0)",u=
" scale3d(",q=",1)");c(m.img).each(function(){g.push(c(this).attr("src"));c(this).data("urZoomImg",new f(this))});c(m.button).on(N?"touchstart.ur.zoom":"click.ur.zoom",function(){m.img.length>1?d(c(m.img).filter(w.find("[data-ur-state='active'] *"))[0]):d(m.img[0]);x.data("urZoomImg").zoom()})}var e=c.extend({touch:!0},e),d=b.constructor==Object?y(b,"zoom",function(b){b.img=[];c.each(b.imgs,function(){c(this.img).attr({"data-ur-zoom-component":"img","data-ur-width":this.width,"data-ur-height":this.height,
"data-ur-src":this.src});b.img.push(c(this.img))});c(b.loading).attr({"data-ur-zoom-component":"loading","data-ur-state":"disabled"})}):A(b,"zoom"),g=[];c.each(d,function(b,d){Uranium.zoom[b]=new f(this);c(d.set).data("urInit",!0)})},carousel:function(b,e){function f(b,d){function e(){a.options.transform3d||(Y="translate(",Z=")");i.each(function(b,d){if(c(d).attr("data-ur-state")=="active")return a.itemIndex=b,!1});f();w(a.options.center?a.itemIndex+a.options.cloneLength:a.itemIndex);j();a.update();
c(a.scroller).on("dragstart.ur.carousel",function(){return!1});a.options.touch&&(c(a.scroller).on(ba+".carousel",x).on(ca+".carousel",r).on(ga+".carousel",y),i.each(function(b,d){d.onclick&&c(d).data("urClick",d.onclick);d.onclick=function(b){if(a.flag.click||!b.clientX&&!b.clientY){var o=c(this).data("urClick");o&&o.call(this,b)}else L(b),b.stopImmediatePropagation()}}));a.button.prev.on("click.ur.carousel",function(){s(1)});a.button.next.on("click.ur.carousel",function(){s(-1)});if("onorientationchange"in
window)c(window).on("orientationchange.ur.carousel",a.update);else c(window).on("resize.ur.carousel",function(){v!=k.outerWidth()&&(a.update(),setTimeout(a.update,100))});i.find("img").addBack("img").on("load.ur.carousel",a.update);a.autoscrollStart();k.triggerHandler("load.ur.carousel")}function f(){if(a.options.infinite){if(a.options.cloneLength==0)if(a.options.fill)a.options.cloneLength=a.options.center?Math.min(1,a.options.fill-1):a.options.fill;else if(a.options.center){for(var b=[0,0],d=v/2+
i[u].offsetWidth/2,e=u;d>0;e=(e-1+a.count)%a.count)d-=i[e].offsetWidth,b[0]++;d=v/2+i[0].offsetWidth/2;for(e=0;d>0;e=(e+1)%a.count)d-=i[e].offsetWidth,b[1]++;a.options.cloneLength=Math.max(b[0],b[1])}else{d=v;for(e=0;d>0;)d-=i[e].offsetWidth,a.options.cloneLength++,e=(e+1)%i.length}k.attr("data-ur-clones",a.options.cloneLength);b=document.createDocumentFragment();for(e=0;e<a.options.cloneLength;e++){var g=e%a.count,g=i.eq(g).clone(!0).attr("data-ur-clone",g).attr("data-ur-state","inactive");b.appendChild(g[0])}i.parent().append(b);
if(a.options.center){b=document.createDocumentFragment();for(e=d=a.count-a.options.cloneLength%a.count;e<d+a.options.cloneLength;e++)g=e%a.count,g=i.eq(g).clone(!0).attr("data-ur-clone",g).attr("data-ur-state","inactive"),b.appendChild(g[0]);i.parent().prepend(b)}i=c(a.scroller).find("[data-ur-carousel-component='item']");u=i.length-1}else a.options.cloneLength=0,k.attr("data-ur-clones",0)}function m(c,b){c.on("click.ur.carousel",function(c){L(c);a.jumpToIndex(b+a.options.cloneLength)})}function j(){if(a.dots){var b=
c(a.dots).find("[data-ur-carousel-component='dot']");if(b.length!=a.count){b.remove();for(var b=c("<a data-ur-carousel-component='dot' href='javascript:void(0)'>"),d=document.createDocumentFragment(),e=0;e<a.count;e++){var f=b.clone().attr("data-ur-state",e==a.itemIndex?"active":"inactive");m(f,e);d.appendChild(f[0])}c(a.dots).append(d)}else b.each(function(a){m(this,a)})}}function w(b){if(b!==void 0){a.itemIndex=b;if(a.itemIndex<0)a.itemIndex=0;else if(a.itemIndex>u)a.itemIndex=u;var d=a.itemIndex;
a.options.infinite&&a.options.center&&(d=a.itemIndex-a.options.cloneLength);d%=a.count;c(a.counter).html(function(){return(c(this).attr("data-ur-template")||"{{index}} of {{count}}").replace("{{index}}",d+1).replace("{{count}}",a.count)});i.attr("data-ur-state","inactive");i.eq(a.itemIndex).attr("data-ur-state","active");c(a.dots).find("[data-ur-carousel-component='dot']").attr("data-ur-state","inactive").eq(d).attr("data-ur-state","active");a.options.infinite?c([a.button.prev,a.button.next]).attr("data-ur-state",
"enabled"):(c(a.button.prev).attr("data-ur-state",a.itemIndex==0?"disabled":"enabled"),c(a.button.next).attr("data-ur-state",a.itemIndex==a.count-Math.max(a.options.fill,1)?"disabled":"enabled"))}}function x(c){a.options.verticalScroll||L(c);a.autoscrollStop();a.flag.touched=!0;a.flag.lock=null;a.flag.click=!0;F=E=t=aa(c);I=a.translate}function r(c){if(a.flag.touched){E=t;t=aa(c);if(Math.abs(F.y-t.y)+Math.abs(F.x-t.x)>0)a.flag.click=!1;if(N&&a.options.verticalScroll){var b=Math.abs((F.y-t.y)/(F.x-
t.x));if(a.flag.lock){if(a.flag.lock=="y")return}else if(b>1.2){a.flag.lock="y";return}else if(b<=1.2)a.flag.lock="x";else return}L(c);if(t!==null){var c=I+(t.x-F.x),d=-c;a.options.center&&(d+=v/2);i.each(function(c,b){var e=b.offsetLeft;if(e+b.offsetWidth>d)return a.itemIndex=c,n=(d-e)/b.offsetWidth,a.options.center&&(n-=0.5),!1});a.options.infinite&&(a.options.center?a.itemIndex<a.options.cloneLength?(I-=q,c-=q,a.itemIndex+=a.count):a.itemIndex>=a.count+a.options.cloneLength&&(I+=q,c+=q,a.itemIndex-=
a.count):n<0?(I-=q,c-=q,a.itemIndex+=a.count,b=i[a.itemIndex],n=(-c-b.offsetLeft)/b.offsetWidth):a.itemIndex>=a.count&&(b=i[a.count].offsetLeft-i[0].offsetLeft,I+=b,c+=b,a.itemIndex-=a.count));z(c)}}}function y(c){if(a.flag.touched){if(!a.flag.click||a.flag.lock)L(c);else if(c.target.tagName=="AREA")location.href=c.target.href;a.flag.touched=!1;c=t.x-E.x;a.options.center?c<0&&n>0?s(-1):c>0&&n<0?s(1):s(0):s(c<0?-1:0)}}function s(c){a.autoscrollStop();clearTimeout(U);var b=a.itemIndex-c;a.options.infinite||
(b=a.options.fill>0?p(b,[0,a.count-a.options.fill]):p(b,[0,u]));if(a.options.infinite){var d=a.translate;if(a.options.center)if(b<a.options.cloneLength)z(d-q),b+=a.count,a.itemIndex=b+c;else{if(b>=a.count+a.options.cloneLength)z(d+q),b-=a.count,a.itemIndex=b+c}else if(b<0)z(d-q),b+=a.count,a.itemIndex=b+c;else if(b>a.count)z(d+q),b-=a.count,a.itemIndex=b+c}G=i[b];k.triggerHandler("slidestart",{index:b});setTimeout(function(){A();w(b)},0)}function A(){function c(){if(!a.flag.touched){var b=a.translate,
d=O-b;d-=d/a.options.speed>=0?Math.floor(d/a.options.speed):Math.ceil(d/a.options.speed);Math.abs(d)<0.01&&(d=0);z(b+d);a.flag.snapping=d!=0;a.flag.snapping?U=setTimeout(c,16):(a.options.infinite&&!a.options.center&&a.itemIndex>=a.count&&(z(a.translate+q),a.itemIndex-=a.count),n=0,a.flag.click=!0,a.autoscrollStart(),k.triggerHandler("slideend",{index:a.itemIndex}))}}O=-G.offsetLeft;a.options.center&&(O+=Math.floor((v-G.offsetWidth)/2));c()}function z(b){a.translate=b;b=Y+b+"px, 0px"+Z;c(a.scroller).css({webkitTransform:b,
MozTransform:b,msTransform:b,transform:b})}var a=this;a.urId=b._id;a.container=b.set;a.scroller=b.scroll_container;a.scroller||c.error("carousel missing item components");a.items=b.item||[];a.button={prev:c(b.button).filter("[data-ur-carousel-button-type='prev']"),next:c(b.button).filter("[data-ur-carousel-button-type='next']")};a.counter=b.count;a.dots=b.dots;a.flag={click:!0,snapping:!1,lock:null,touched:!1};a.options={autoscroll:!1,autoscrollDelay:5E3,autoscrollForward:!0,center:!1,cloneLength:0,
fill:0,infinite:!0,speed:1.1,transform3d:M,touch:!0,verticalScroll:!0};c.extend(a.options,d);a.count=a.items.length;a.itemIndex=0;a.translate=0;var k=c(a.container),i=c(a.items),t=null,E,F={x:0,y:0},n=0,G=i[0],O,u=a.count-1,q,V,U,v=k.outerWidth(),I=null,Y="translate3d(",Z=", 0)";a.update=function(){var b=i.length;i=c(a.scroller).find("[data-ur-carousel-component='item']");if(b!=i.length){a.items=i.filter(":not([data-ur-clone])").toArray();a.count=a.items.length;u=i.length-1;i.each(function(b,d){if(c(d).attr("data-ur-state")==
"active")return a.itemIndex=b,!1});if(a.itemIndex>=i.length-a.options.cloneLength)a.itemIndex=u-a.options.cloneLength,i.eq(a.itemIndex).attr("data-ur-state","active");c.contains(a.scroller,G)||(G=i[a.itemIndex]);j();w(a.options.center?a.itemIndex+a.options.cloneLength:a.itemIndex)}v=k.outerWidth();var b=0,d=[];if(a.options.fill>0)for(var e=v,f=a.options.fill;f>0;f--){var g=Math.round(e/f);d.push(g);e-=g}for(f=q=0;f<i.length;f++)if(a.options.fill>0?(g=d[f%a.options.fill],e=i.eq(f),e.css("width",g+
parseInt(e.css("width"))-e.outerWidth()),b+=g):b+=i[f].offsetWidth,f<=u-a.options.cloneLength&&f>=(a.options.center?a.options.cloneLength:0))q+=i[f].offsetWidth;c(a.scroller).width(b);b=i[a.itemIndex];d=-(b.offsetLeft+n*b.offsetWidth);O=-G.offsetLeft;a.options.center&&(d+=Math.floor((v-b.offsetWidth)/2),O+=Math.floor((v-G.offsetWidth)/2));z(d)};a.autoscrollStart=function(){a.options.autoscroll&&(V=setTimeout(function(){v!=0?!a.options.infinite&&a.itemIndex==u&&a.options.autoscrollForward?a.jumpToIndex(0):
!a.options.infinite&&a.itemIndex==0&&!a.options.autoscrollForward?a.jumpToIndex(u):s(a.options.autoscrollForward?-1:1):a.autoscrollStart()},a.options.autoscrollDelay))};a.autoscrollStop=function(){clearTimeout(V)};a.jumpToIndex=function(b){s(a.itemIndex-b)};(function(){var b=k.attr("data-ur-android3d")||k.attr("data-ur-transform3d");if(b)a.options.transform3d=b!="disabled";k.attr("data-ur-transform3d",a.options.transform3d?"enabled":"disabled");if(ma&&!a.options.transform3d)b=parseFloat(k.attr("data-ur-speed")),
a.options.speed=b>1?b:1.3;k.attr("data-ur-speed",a.options.speed);b=parseInt(k.attr("data-ur-fill"));if(b>0)a.options.fill=b;k.attr("data-ur-fill",a.options.fill);if(b=k.attr("data-ur-clones"))a.options.cloneLength=parseInt(b);k.attr("data-ur-clones",a.options.cloneLength);b=parseInt(k.attr("data-ur-autoscroll-delay"));if(b>=0)a.options.autoscrollDelay=b;k.attr("data-ur-autoscroll-delay",a.options.autoscrollDelay);if(b=k.attr("data-ur-autoscroll-dir"))a.options.autoscrollForward=b!="prev";k.attr("data-ur-autoscroll-dir",
a.options.autoscrollForward?"next":"prev");c.each(["autoscroll","center","infinite","touch","verticalScroll"],function(b,c){var d="data-ur-"+c.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}),e=k.attr(d);e=="enabled"?a.options[c]=!0:e=="disabled"&&(a.options[c]=!1);k.attr(d,a.options[c]?"enabled":"disabled")})})();var $=!1;a.options.infinite&&!a.options.fill&&a.options.cloneLength==0&&i.width(function(a,b){b==0&&($=!0)});if($){console.warn("carousel with id: "+a.urId+" will be late loaded");
var J=i.find("img").addBack("img").filter(function(){return this.naturalWidth==0||this.width==0}),K=J.length;if(K>0)J.on("load.ur.carousel",function(){--K==0&&e()});else c(window).on("load.ur.carousel",e)}else e()}var d=b.constructor==Object?y(b,"carousel"):A(b,"carousel");c.each(d,function(b,d){c(d.buttons).each(function(){var d=c(this).attr("data-ur-carousel-button-type");d||c.error("malformed carousel button type for carousel with id: "+b);c(this).attr("data-ur-state",d=="prev"?"disabled":"enabled")});
Uranium.carousel[b]=new f(d,e);c(d.set).data("urInit",!0);c(d.set).attr("data-ur-state","enabled")})}};window.Uranium={lib:E};c.each(E,function(b){Uranium[b]={}});c.fn.Uranium=function(){var b=this;c.each(E,function(){this(b)});return this};c(document).ready(c(document).Uranium)})(jQuery);
