/*!
   SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 DataTables 1.12.1
 ©2008-2022 SpryMedia Ltd - datatables.net/license
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(l,y,A){l instanceof String&&(l=String(l));for(var q=l.length,E=0;E<q;E++){var P=l[E];if(y.call(A,P,E,l))return{i:E,v:P}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(l,y,A){if(l==Array.prototype||l==Object.prototype)return l;l[y]=A.value;return l};$jscomp.getGlobal=function(l){l=["object"==typeof globalThis&&globalThis,l,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var y=0;y<l.length;++y){var A=l[y];if(A&&A.Math==Math)return A}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(l,y){var A=$jscomp.propertyToPolyfillSymbol[y];if(null==A)return l[y];A=l[A];return void 0!==A?A:l[y]};
$jscomp.polyfill=function(l,y,A,q){y&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(l,y,A,q):$jscomp.polyfillUnisolated(l,y,A,q))};$jscomp.polyfillUnisolated=function(l,y,A,q){A=$jscomp.global;l=l.split(".");for(q=0;q<l.length-1;q++){var E=l[q];if(!(E in A))return;A=A[E]}l=l[l.length-1];q=A[l];y=y(q);y!=q&&null!=y&&$jscomp.defineProperty(A,l,{configurable:!0,writable:!0,value:y})};
$jscomp.polyfillIsolated=function(l,y,A,q){var E=l.split(".");l=1===E.length;q=E[0];q=!l&&q in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var P=0;P<E.length-1;P++){var la=E[P];if(!(la in q))return;q=q[la]}E=E[E.length-1];A=$jscomp.IS_SYMBOL_NATIVE&&"es6"===A?q[E]:null;y=y(A);null!=y&&(l?$jscomp.defineProperty($jscomp.polyfills,E,{configurable:!0,writable:!0,value:y}):y!==A&&($jscomp.propertyToPolyfillSymbol[E]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(E):$jscomp.POLYFILL_PREFIX+E,
E=$jscomp.propertyToPolyfillSymbol[E],$jscomp.defineProperty(q,E,{configurable:!0,writable:!0,value:y})))};$jscomp.polyfill("Array.prototype.find",function(l){return l?l:function(y,A){return $jscomp.findInternal(this,y,A).v}},"es6","es3");
(function(l){"function"===typeof define&&define.amd?define(["jquery"],function(y){return l(y,window,document)}):"object"===typeof exports?module.exports=function(y,A){y||(y=window);A||(A="undefined"!==typeof window?require("jquery"):require("jquery")(y));return l(A,y,y.document)}:window.DataTable=l(jQuery,window,document)})(function(l,y,A,q){function E(a){var b,c,d={};l.each(a,function(e,h){(b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" ")&&(c=e.replace(b[0],
b[2].toLowerCase()),d[c]=e,"o"===b[1]&&E(a[e]))});a._hungarianMap=d}function P(a,b,c){a._hungarianMap||E(a);var d;l.each(b,function(e,h){d=a._hungarianMap[e];d===q||!c&&b[d]!==q||("o"===d.charAt(0)?(b[d]||(b[d]={}),l.extend(!0,b[d],b[e]),P(a[d],b[d],c)):b[d]=b[e])})}function la(a){var b=u.defaults.oLanguage,c=b.sDecimal;c&&bb(c);if(a){var d=a.sZeroRecords;!a.sEmptyTable&&d&&"No data available in table"===b.sEmptyTable&&Y(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&d&&"Loading..."===b.sLoadingRecords&&
Y(a,a,"sZeroRecords","sLoadingRecords");a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&c!==a&&bb(a)}}function Db(a){S(a,"ordering","bSort");S(a,"orderMulti","bSortMulti");S(a,"orderClasses","bSortClasses");S(a,"orderCellsTop","bSortCellsTop");S(a,"order","aaSorting");S(a,"orderFixed","aaSortingFixed");S(a,"paging","bPaginate");S(a,"pagingType","sPaginationType");S(a,"pageLength","iDisplayLength");S(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":
"");"boolean"===typeof a.scrollX&&(a.scrollX=a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&P(u.models.oSearch,a[b])}function Eb(a){S(a,"orderable","bSortable");S(a,"orderData","aDataSort");S(a,"orderSequence","asSorting");S(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"!==typeof b||Array.isArray(b)||(a.aDataSort=[b])}function Fb(a){if(!u.__browser){var b={};u.__browser=b;var c=l("<div/>").css({position:"fixed",top:0,left:-1*l(y).scrollLeft(),height:1,
width:1,overflow:"hidden"}).append(l("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(l("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}l.extend(a.oBrowser,u.__browser);a.oScroll.iBarWidth=u.__browser.barWidth}
function Gb(a,b,c,d,e,h){var f=!1;if(c!==q){var g=c;f=!0}for(;d!==e;)a.hasOwnProperty(d)&&(g=f?b(g,a[d],d,a):a[d],f=!0,d+=h);return g}function cb(a,b){var c=u.defaults.column,d=a.aoColumns.length;c=l.extend({},u.models.oColumn,c,{nTh:b?b:A.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=l.extend({},u.models.oSearch,c[d]);Ia(a,d,l(b).data())}function Ia(a,b,c){b=a.aoColumns[b];
var d=a.oClasses,e=l(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=e.attr("width")||null;var h=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);h&&(b.sWidthOrig=h[1])}c!==q&&null!==c&&(Eb(c),P(u.defaults.column,c,!0),c.mDataProp===q||c.mData||(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),c.sClass&&e.addClass(c.sClass),h=b.sClass,l.extend(b,c),Y(b,c,"sWidth","sWidthOrig"),h!==b.sClass&&(b.sClass=h+" "+b.sClass),c.iDataSort!==q&&(b.aDataSort=[c.iDataSort]),
Y(b,c,"aDataSort"));var f=b.mData,g=ma(f),k=b.mRender?ma(b.mRender):null;c=function(m){return"string"===typeof m&&-1!==m.indexOf("@")};b._bAttrSrc=l.isPlainObject(f)&&(c(f.sort)||c(f.type)||c(f.filter));b._setter=null;b.fnGetData=function(m,n,p){var t=g(m,n,q,p);return k&&n?k(t,n,m,p):t};b.fnSetData=function(m,n,p){return ha(f)(m,n,p)};"number"!==typeof f&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==l.inArray("asc",b.asSorting);c=-1!==l.inArray("desc",
b.asSorting);b.bSortable&&(a||c)?a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI):(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI="")}function sa(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;db(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;""===b.sY&&""===b.sX||Ja(a);F(a,null,"column-sizing",
[a])}function ta(a,b){a=Ka(a,"bVisible");return"number"===typeof a[b]?a[b]:null}function ua(a,b){a=Ka(a,"bVisible");b=l.inArray(b,a);return-1!==b?b:null}function na(a){var b=0;l.each(a.aoColumns,function(c,d){d.bVisible&&"none"!==l(d.nTh).css("display")&&b++});return b}function Ka(a,b){var c=[];l.map(a.aoColumns,function(d,e){d[b]&&c.push(e)});return c}function eb(a){var b=a.aoColumns,c=a.aoData,d=u.ext.type.detect,e,h,f;var g=0;for(e=b.length;g<e;g++){var k=b[g];var m=[];if(!k.sType&&k._sManualType)k.sType=
k._sManualType;else if(!k.sType){var n=0;for(h=d.length;n<h;n++){var p=0;for(f=c.length;p<f;p++){m[p]===q&&(m[p]=T(a,p,g,"type"));var t=d[n](m[p],a);if(!t&&n!==d.length-1)break;if("html"===t&&!aa(m[p]))break}if(t){k.sType=t;break}}k.sType||(k.sType="string")}}}function Hb(a,b,c,d){var e,h,f,g=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){var k=b[e];var m=k.target!==q?k.target:k.targets!==q?k.targets:k.aTargets;Array.isArray(m)||(m=[m]);var n=0;for(h=m.length;n<h;n++)if("number"===typeof m[n]&&0<=m[n]){for(;g.length<=
m[n];)cb(a);d(m[n],k)}else if("number"===typeof m[n]&&0>m[n])d(g.length+m[n],k);else if("string"===typeof m[n]){var p=0;for(f=g.length;p<f;p++)("_all"==m[n]||l(g[p].nTh).hasClass(m[n]))&&d(p,k)}}if(c)for(e=0,a=c.length;e<a;e++)d(e,c[e])}function ia(a,b,c,d){var e=a.aoData.length,h=l.extend(!0,{},u.models.oRow,{src:c?"dom":"data",idx:e});h._aData=b;a.aoData.push(h);for(var f=a.aoColumns,g=0,k=f.length;g<k;g++)f[g].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==q&&(a.aIds[b]=h);!c&&a.oFeatures.bDeferRender||
fb(a,e,c,d);return e}function La(a,b){var c;b instanceof l||(b=l(b));return b.map(function(d,e){c=gb(a,e);return ia(a,c.data,e,c.cells)})}function T(a,b,c,d){"search"===d?d="filter":"order"===d&&(d="sort");var e=a.iDraw,h=a.aoColumns[c],f=a.aoData[b]._aData,g=h.sDefaultContent,k=h.fnGetData(f,d,{settings:a,row:b,col:c});if(k===q)return a.iDrawError!=e&&null===g&&(ea(a,0,"Requested unknown parameter "+("function"==typeof h.mData?"{function}":"'"+h.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=
e),g;if((k===f||null===k)&&null!==g&&d!==q)k=g;else if("function"===typeof k)return k.call(f);if(null===k&&"display"===d)return"";"filter"===d&&(a=u.ext.type.search,a[h.sType]&&(k=a[h.sType](k)));return k}function Ib(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}function hb(a){return l.map(a.match(/(\\.|[^\.])+/g)||[""],function(b){return b.replace(/\\\./g,".")})}function ib(a){return U(a.aoData,"_aData")}function Ma(a){a.aoData.length=0;a.aiDisplayMaster.length=
0;a.aiDisplay.length=0;a.aIds={}}function Na(a,b,c){for(var d=-1,e=0,h=a.length;e<h;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===q&&a.splice(d,1)}function va(a,b,c,d){var e=a.aoData[b],h,f=function(k,m){for(;k.childNodes.length;)k.removeChild(k.firstChild);k.innerHTML=T(a,b,m,"display")};if("dom"!==c&&(c&&"auto"!==c||"dom"!==e.src)){var g=e.anCells;if(g)if(d!==q)f(g[d],d);else for(c=0,h=g.length;c<h;c++)f(g[c],c)}else e._aData=gb(a,e,d,d===q?q:e._aData).data;e._aSortData=null;e._aFilterData=null;f=
a.aoColumns;if(d!==q)f[d].sType=null;else{c=0;for(h=f.length;c<h;c++)f[c].sType=null;jb(a,e)}}function gb(a,b,c,d){var e=[],h=b.firstChild,f,g=0,k,m=a.aoColumns,n=a._rowReadObject;d=d!==q?d:n?{}:[];var p=function(x,w){if("string"===typeof x){var r=x.indexOf("@");-1!==r&&(r=x.substring(r+1),ha(x)(d,w.getAttribute(r)))}},t=function(x){if(c===q||c===g)f=m[g],k=x.innerHTML.trim(),f&&f._bAttrSrc?(ha(f.mData._)(d,k),p(f.mData.sort,x),p(f.mData.type,x),p(f.mData.filter,x)):n?(f._setter||(f._setter=ha(f.mData)),
f._setter(d,k)):d[g]=k;g++};if(h)for(;h;){var v=h.nodeName.toUpperCase();if("TD"==v||"TH"==v)t(h),e.push(h);h=h.nextSibling}else for(e=b.anCells,h=0,v=e.length;h<v;h++)t(e[h]);(b=b.firstChild?b:b.nTr)&&(b=b.getAttribute("id"))&&ha(a.rowId)(d,b);return{data:d,cells:e}}function fb(a,b,c,d){var e=a.aoData[b],h=e._aData,f=[],g,k;if(null===e.nTr){var m=c||A.createElement("tr");e.nTr=m;e.anCells=f;m._DT_RowIndex=b;jb(a,e);var n=0;for(g=a.aoColumns.length;n<g;n++){var p=a.aoColumns[n];e=(k=c?!1:!0)?A.createElement(p.sCellType):
d[n];e._DT_CellIndex={row:b,column:n};f.push(e);if(k||!(!p.mRender&&p.mData===n||l.isPlainObject(p.mData)&&p.mData._===n+".display"))e.innerHTML=T(a,b,n,"display");p.sClass&&(e.className+=" "+p.sClass);p.bVisible&&!c?m.appendChild(e):!p.bVisible&&c&&e.parentNode.removeChild(e);p.fnCreatedCell&&p.fnCreatedCell.call(a.oInstance,e,T(a,b,n),h,b,n)}F(a,"aoRowCreatedCallback",null,[m,h,b,f])}}function jb(a,b){var c=b.nTr,d=b._aData;if(c){if(a=a.rowIdFn(d))c.id=a;d.DT_RowClass&&(a=d.DT_RowClass.split(" "),
b.__rowc=b.__rowc?Oa(b.__rowc.concat(a)):a,l(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&l(c).attr(d.DT_RowAttr);d.DT_RowData&&l(c).data(d.DT_RowData)}}function Jb(a){var b,c,d=a.nTHead,e=a.nTFoot,h=0===l("th, td",d).length,f=a.oClasses,g=a.aoColumns;h&&(c=l("<tr/>").appendTo(d));var k=0;for(b=g.length;k<b;k++){var m=g[k];var n=l(m.nTh).addClass(m.sClass);h&&n.appendTo(c);a.oFeatures.bSort&&(n.addClass(m.sSortingClass),!1!==m.bSortable&&(n.attr("tabindex",a.iTabIndex).attr("aria-controls",
a.sTableId),kb(a,m.nTh,k)));m.sTitle!=n[0].innerHTML&&n.html(m.sTitle);lb(a,"header")(a,n,m,f)}h&&wa(a.aoHeader,d);l(d).children("tr").children("th, td").addClass(f.sHeaderTH);l(e).children("tr").children("th, td").addClass(f.sFooterTH);if(null!==e)for(a=a.aoFooter[0],k=0,b=a.length;k<b;k++)m=g[k],m.nTf=a[k].cell,m.sClass&&l(m.nTf).addClass(m.sClass)}function xa(a,b,c){var d,e,h=[],f=[],g=a.aoColumns.length;if(b){c===q&&(c=!1);var k=0;for(d=b.length;k<d;k++){h[k]=b[k].slice();h[k].nTr=b[k].nTr;for(e=
g-1;0<=e;e--)a.aoColumns[e].bVisible||c||h[k].splice(e,1);f.push([])}k=0;for(d=h.length;k<d;k++){if(a=h[k].nTr)for(;e=a.firstChild;)a.removeChild(e);e=0;for(b=h[k].length;e<b;e++){var m=g=1;if(f[k][e]===q){a.appendChild(h[k][e].cell);for(f[k][e]=1;h[k+g]!==q&&h[k][e].cell==h[k+g][e].cell;)f[k+g][e]=1,g++;for(;h[k][e+m]!==q&&h[k][e].cell==h[k][e+m].cell;){for(c=0;c<g;c++)f[k+c][e+m]=1;m++}l(h[k][e].cell).attr("rowspan",g).attr("colspan",m)}}}}}function ja(a,b){var c="ssp"==Q(a),d=a.iInitDisplayStart;
d!==q&&-1!==d&&(a._iDisplayStart=c?d:d>=a.fnRecordsDisplay()?0:d,a.iInitDisplayStart=-1);c=F(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==l.inArray(!1,c))V(a,!1);else{c=[];var e=0;d=a.asStripeClasses;var h=d.length,f=a.oLanguage,g="ssp"==Q(a),k=a.aiDisplay,m=a._iDisplayStart,n=a.fnDisplayEnd();a.bDrawing=!0;if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,V(a,!1);else if(!g)a.iDraw++;else if(!a.bDestroying&&!b){Kb(a);return}if(0!==k.length)for(b=g?a.aoData.length:n,f=g?0:m;f<b;f++){g=k[f];var p=a.aoData[g];
null===p.nTr&&fb(a,g);var t=p.nTr;if(0!==h){var v=d[e%h];p._sRowStripe!=v&&(l(t).removeClass(p._sRowStripe).addClass(v),p._sRowStripe=v)}F(a,"aoRowCallback",null,[t,p._aData,e,f,g]);c.push(t);e++}else e=f.sZeroRecords,1==a.iDraw&&"ajax"==Q(a)?e=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(e=f.sEmptyTable),c[0]=l("<tr/>",{"class":h?d[0]:""}).append(l("<td />",{valign:"top",colSpan:na(a),"class":a.oClasses.sRowEmpty}).html(e))[0];F(a,"aoHeaderCallback","header",[l(a.nTHead).children("tr")[0],
ib(a),m,n,k]);F(a,"aoFooterCallback","footer",[l(a.nTFoot).children("tr")[0],ib(a),m,n,k]);d=l(a.nTBody);d.children().detach();d.append(l(c));F(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function ka(a,b){var c=a.oFeatures,d=c.bFilter;c.bSort&&Lb(a);d?ya(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;ja(a);a._drawHold=!1}function Mb(a){var b=a.oClasses,c=l(a.nTable);c=l("<div/>").insertBefore(c);var d=a.oFeatures,
e=l("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var h=a.sDom.split(""),f,g,k,m,n,p,t=0;t<h.length;t++){f=null;g=h[t];if("<"==g){k=l("<div/>")[0];m=h[t+1];if("'"==m||'"'==m){n="";for(p=2;h[t+p]!=m;)n+=h[t+p],p++;"H"==n?n=b.sJUIHeader:"F"==n&&(n=b.sJUIFooter);-1!=n.indexOf(".")?(m=n.split("."),k.id=m[0].substr(1,m[0].length-1),k.className=m[1]):"#"==n.charAt(0)?k.id=n.substr(1,
n.length-1):k.className=n;t+=p}e.append(k);e=l(k)}else if(">"==g)e=e.parent();else if("l"==g&&d.bPaginate&&d.bLengthChange)f=Nb(a);else if("f"==g&&d.bFilter)f=Ob(a);else if("r"==g&&d.bProcessing)f=Pb(a);else if("t"==g)f=Qb(a);else if("i"==g&&d.bInfo)f=Rb(a);else if("p"==g&&d.bPaginate)f=Sb(a);else if(0!==u.ext.feature.length)for(k=u.ext.feature,p=0,m=k.length;p<m;p++)if(g==k[p].cFeature){f=k[p].fnInit(a);break}f&&(k=a.aanFeatures,k[g]||(k[g]=[]),k[g].push(f),e.append(f))}c.replaceWith(e);a.nHolding=
null}function wa(a,b){b=l(b).children("tr");var c,d,e;a.splice(0,a.length);var h=0;for(e=b.length;h<e;h++)a.push([]);h=0;for(e=b.length;h<e;h++){var f=b[h];for(c=f.firstChild;c;){if("TD"==c.nodeName.toUpperCase()||"TH"==c.nodeName.toUpperCase()){var g=1*c.getAttribute("colspan");var k=1*c.getAttribute("rowspan");g=g&&0!==g&&1!==g?g:1;k=k&&0!==k&&1!==k?k:1;var m=0;for(d=a[h];d[m];)m++;var n=m;var p=1===g?!0:!1;for(d=0;d<g;d++)for(m=0;m<k;m++)a[h+m][n+d]={cell:c,unique:p},a[h+m].nTr=f}c=c.nextSibling}}}
function Pa(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],wa(c,b)));b=0;for(var e=c.length;b<e;b++)for(var h=0,f=c[b].length;h<f;h++)!c[b][h].unique||d[h]&&a.bSortCellsTop||(d[h]=c[b][h].cell);return d}function Qa(a,b,c){F(a,"aoServerParams","serverParams",[b]);if(b&&Array.isArray(b)){var d={},e=/(.*?)\[\]$/;l.each(b,function(n,p){(n=p.name.match(e))?(n=n[0],d[n]||(d[n]=[]),d[n].push(p.value)):d[p.name]=p.value});b=d}var h=a.ajax,f=a.oInstance,g=function(n){var p=a.jqXHR?a.jqXHR.status:null;if(null===
n||"number"===typeof p&&204==p)n={},za(a,n,[]);(p=n.error||n.sError)&&ea(a,0,p);a.json=n;F(a,null,"xhr",[a,n,a.jqXHR]);c(n)};if(l.isPlainObject(h)&&h.data){var k=h.data;var m="function"===typeof k?k(b,a):k;b="function"===typeof k&&m?m:l.extend(!0,b,m);delete h.data}m={data:b,success:g,dataType:"json",cache:!1,type:a.sServerMethod,error:function(n,p,t){t=F(a,null,"xhr",[a,null,a.jqXHR]);-1===l.inArray(!0,t)&&("parsererror"==p?ea(a,0,"Invalid JSON response",1):4===n.readyState&&ea(a,0,"Ajax error",
7));V(a,!1)}};a.oAjaxData=b;F(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(f,a.sAjaxSource,l.map(b,function(n,p){return{name:p,value:n}}),g,a):a.sAjaxSource||"string"===typeof h?a.jqXHR=l.ajax(l.extend(m,{url:h||a.sAjaxSource})):"function"===typeof h?a.jqXHR=h.call(f,b,g,a):(a.jqXHR=l.ajax(l.extend(m,h)),h.data=k)}function Kb(a){a.iDraw++;V(a,!0);Qa(a,Tb(a),function(b){Ub(a,b)})}function Tb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,h=a.aoPreSearchCols,f=[],g=oa(a);
var k=a._iDisplayStart;var m=!1!==d.bPaginate?a._iDisplayLength:-1;var n=function(x,w){f.push({name:x,value:w})};n("sEcho",a.iDraw);n("iColumns",c);n("sColumns",U(b,"sName").join(","));n("iDisplayStart",k);n("iDisplayLength",m);var p={draw:a.iDraw,columns:[],order:[],start:k,length:m,search:{value:e.sSearch,regex:e.bRegex}};for(k=0;k<c;k++){var t=b[k];var v=h[k];m="function"==typeof t.mData?"function":t.mData;p.columns.push({data:m,name:t.sName,searchable:t.bSearchable,orderable:t.bSortable,search:{value:v.sSearch,
regex:v.bRegex}});n("mDataProp_"+k,m);d.bFilter&&(n("sSearch_"+k,v.sSearch),n("bRegex_"+k,v.bRegex),n("bSearchable_"+k,t.bSearchable));d.bSort&&n("bSortable_"+k,t.bSortable)}d.bFilter&&(n("sSearch",e.sSearch),n("bRegex",e.bRegex));d.bSort&&(l.each(g,function(x,w){p.order.push({column:w.col,dir:w.dir});n("iSortCol_"+x,w.col);n("sSortDir_"+x,w.dir)}),n("iSortingCols",g.length));b=u.ext.legacy.ajax;return null===b?a.sAjaxSource?f:p:b?f:p}function Ub(a,b){var c=function(f,g){return b[f]!==q?b[f]:b[g]},
d=za(a,b),e=c("sEcho","draw"),h=c("iTotalRecords","recordsTotal");c=c("iTotalDisplayRecords","recordsFiltered");if(e!==q){if(1*e<a.iDraw)return;a.iDraw=1*e}d||(d=[]);Ma(a);a._iRecordsTotal=parseInt(h,10);a._iRecordsDisplay=parseInt(c,10);e=0;for(h=d.length;e<h;e++)ia(a,d[e]);a.aiDisplay=a.aiDisplayMaster.slice();ja(a,!0);a._bInitComplete||Ra(a,b);V(a,!1)}function za(a,b,c){a=l.isPlainObject(a.ajax)&&a.ajax.dataSrc!==q?a.ajax.dataSrc:a.sAjaxDataProp;if(!c)return"data"===a?b.aaData||b[a]:""!==a?ma(a)(b):
b;ha(a)(b,c)}function Ob(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,h=a.aanFeatures,f='<input type="search" class="'+b.sFilterInput+'"/>',g=d.sSearch;g=g.match(/_INPUT_/)?g.replace("_INPUT_",f):g+f;b=l("<div/>",{id:h.f?null:c+"_filter","class":b.sFilter}).append(l("<label/>").append(g));var k=function(n){var p=this.value?this.value:"";e.return&&"Enter"!==n.key||p==e.sSearch||(ya(a,{sSearch:p,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive,"return":e.return}),
a._iDisplayStart=0,ja(a))};h=null!==a.searchDelay?a.searchDelay:"ssp"===Q(a)?400:0;var m=l("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",h?mb(k,h):k).on("mouseup",function(n){setTimeout(function(){k.call(m[0],n)},10)}).on("keypress.DT",function(n){if(13==n.keyCode)return!1}).attr("aria-controls",c);l(a.nTable).on("search.dt.DT",function(n,p){if(a===p)try{m[0]!==A.activeElement&&m.val(e.sSearch)}catch(t){}});return b[0]}function ya(a,
b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,h=function(g){d.sSearch=g.sSearch;d.bRegex=g.bRegex;d.bSmart=g.bSmart;d.bCaseInsensitive=g.bCaseInsensitive;d.return=g.return},f=function(g){return g.bEscapeRegex!==q?!g.bEscapeRegex:g.bRegex};eb(a);if("ssp"!=Q(a)){Vb(a,b.sSearch,c,f(b),b.bSmart,b.bCaseInsensitive,b.return);h(b);for(b=0;b<e.length;b++)Wb(a,e[b].sSearch,b,f(e[b]),e[b].bSmart,e[b].bCaseInsensitive);Xb(a)}else h(b);a.bFiltered=!0;F(a,null,"search",[a])}function Xb(a){for(var b=u.ext.search,
c=a.aiDisplay,d,e,h=0,f=b.length;h<f;h++){for(var g=[],k=0,m=c.length;k<m;k++)e=c[k],d=a.aoData[e],b[h](a,d._aFilterData,e,d._aData,k)&&g.push(e);c.length=0;l.merge(c,g)}}function Wb(a,b,c,d,e,h){if(""!==b){var f=[],g=a.aiDisplay;d=nb(b,d,e,h);for(e=0;e<g.length;e++)b=a.aoData[g[e]]._aFilterData[c],d.test(b)&&f.push(g[e]);a.aiDisplay=f}}function Vb(a,b,c,d,e,h){e=nb(b,d,e,h);var f=a.oPreviousSearch.sSearch,g=a.aiDisplayMaster;h=[];0!==u.ext.search.length&&(c=!0);var k=Yb(a);if(0>=b.length)a.aiDisplay=
g.slice();else{if(k||c||d||f.length>b.length||0!==b.indexOf(f)||a.bSorted)a.aiDisplay=g.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)e.test(a.aoData[b[c]]._sFilterRow)&&h.push(b[c]);a.aiDisplay=h}}function nb(a,b,c,d){a=b?a:ob(a);c&&(a="^(?=.*?"+l.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(e){if('"'===e.charAt(0)){var h=e.match(/^"(.*)"$/);e=h?h[1]:e}return e.replace('"',"")}).join(")(?=.*?")+").*$");return new RegExp(a,d?"i":"")}function Yb(a){var b=a.aoColumns,c,d;var e=!1;var h=0;for(c=a.aoData.length;h<
c;h++){var f=a.aoData[h];if(!f._aFilterData){var g=[];e=0;for(d=b.length;e<d;e++){var k=b[e];k.bSearchable?(k=T(a,h,e,"filter"),null===k&&(k=""),"string"!==typeof k&&k.toString&&(k=k.toString())):k="";k.indexOf&&-1!==k.indexOf("&")&&(Sa.innerHTML=k,k=Bc?Sa.textContent:Sa.innerText);k.replace&&(k=k.replace(/[\r\n\u2028]/g,""));g.push(k)}f._aFilterData=g;f._sFilterRow=g.join("  ");e=!0}}return e}function Zb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,caseInsensitive:a.bCaseInsensitive}}
function $b(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function Rb(a){var b=a.sTableId,c=a.aanFeatures.i,d=l("<div/>",{"class":a.oClasses.sInfo,id:c?null:b+"_info"});c||(a.aoDrawCallback.push({fn:ac,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),l(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function ac(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+1,e=a.fnDisplayEnd(),h=a.fnRecordsTotal(),
f=a.fnRecordsDisplay(),g=f?c.sInfo:c.sInfoEmpty;f!==h&&(g+=" "+c.sInfoFiltered);g+=c.sInfoPostFix;g=bc(a,g);c=c.fnInfoCallback;null!==c&&(g=c.call(a.oInstance,a,d,e,h,f,g));l(b).html(g)}}function bc(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,h=a.fnRecordsDisplay(),f=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,h)).replace(/_PAGE_/g,c.call(a,f?1:Math.ceil(d/
e))).replace(/_PAGES_/g,c.call(a,f?1:Math.ceil(h/e)))}function Aa(a){var b=a.iInitDisplayStart,c=a.aoColumns;var d=a.oFeatures;var e=a.bDeferLoading;if(a.bInitialised){Mb(a);Jb(a);xa(a,a.aoHeader);xa(a,a.aoFooter);V(a,!0);d.bAutoWidth&&db(a);var h=0;for(d=c.length;h<d;h++){var f=c[h];f.sWidth&&(f.nTh.style.width=K(f.sWidth))}F(a,null,"preInit",[a]);ka(a);c=Q(a);if("ssp"!=c||e)"ajax"==c?Qa(a,[],function(g){var k=za(a,g);for(h=0;h<k.length;h++)ia(a,k[h]);a.iInitDisplayStart=b;ka(a);V(a,!1);Ra(a,g)},
a):(V(a,!1),Ra(a))}else setTimeout(function(){Aa(a)},200)}function Ra(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&sa(a);F(a,null,"plugin-init",[a,b]);F(a,"aoInitComplete","init",[a,b])}function pb(a,b){b=parseInt(b,10);a._iDisplayLength=b;qb(a);F(a,null,"length",[a,b])}function Nb(a){var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=Array.isArray(d[0]),h=e?d[0]:d;d=e?d[1]:d;e=l("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect});for(var f=0,g=h.length;f<g;f++)e[0][f]=new Option("number"===
typeof d[f]?a.fnFormatNumber(d[f]):d[f],h[f]);var k=l("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(k[0].id=c+"_length");k.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));l("select",k).val(a._iDisplayLength).on("change.DT",function(m){pb(a,l(this).val());ja(a)});l(a.nTable).on("length.dt.DT",function(m,n,p){a===n&&l("select",k).val(p)});return k[0]}function Sb(a){var b=a.sPaginationType,c=u.ext.pager[b],d="function"===typeof c,e=function(f){ja(f)};b=l("<div/>").addClass(a.oClasses.sPaging+
b)[0];var h=a.aanFeatures;d||c.fnInit(a,b,e);h.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(f){if(d){var g=f._iDisplayStart,k=f._iDisplayLength,m=f.fnRecordsDisplay(),n=-1===k;g=n?0:Math.ceil(g/k);k=n?1:Math.ceil(m/k);m=c(g,k);var p;n=0;for(p=h.p.length;n<p;n++)lb(f,"pageButton")(f,h.p[n],n,m,g,k)}else c.fnUpdate(f,e)},sName:"pagination"}));return b}function Ta(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,h=a.fnRecordsDisplay();0===h||-1===e?d=0:"number"===typeof b?(d=b*
e,d>h&&(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<h&&(d+=e):"last"==b?d=Math.floor((h-1)/e)*e:ea(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(F(a,null,"page",[a]),c&&ja(a));return b}function Pb(a){return l("<div/>",{id:a.aanFeatures.r?null:a.sTableId+"_processing","class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>").insertBefore(a.nTable)[0]}function V(a,
b){a.oFeatures.bProcessing&&l(a.aanFeatures.r).css("display",b?"block":"none");F(a,null,"processing",[a,b])}function Qb(a){var b=l(a.nTable),c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,h=a.oClasses,f=b.children("caption"),g=f.length?f[0]._captionSide:null,k=l(b[0].cloneNode(!1)),m=l(b[0].cloneNode(!1)),n=b.children("tfoot");n.length||(n=null);k=l("<div/>",{"class":h.sScrollWrapper}).append(l("<div/>",{"class":h.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,
width:d?d?K(d):null:"100%"}).append(l("<div/>",{"class":h.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(k.removeAttr("id").css("margin-left",0).append("top"===g?f:null).append(b.children("thead"))))).append(l("<div/>",{"class":h.sScrollBody}).css({position:"relative",overflow:"auto",width:d?K(d):null}).append(b));n&&k.append(l("<div/>",{"class":h.sScrollFoot}).css({overflow:"hidden",border:0,width:d?d?K(d):null:"100%"}).append(l("<div/>",{"class":h.sScrollFootInner}).append(m.removeAttr("id").css("margin-left",
0).append("bottom"===g?f:null).append(b.children("tfoot")))));b=k.children();var p=b[0];h=b[1];var t=n?b[2]:null;if(d)l(h).on("scroll.DT",function(v){v=this.scrollLeft;p.scrollLeft=v;n&&(t.scrollLeft=v)});l(h).css("max-height",e);c.bCollapse||l(h).css("height",e);a.nScrollHead=p;a.nScrollBody=h;a.nScrollFoot=t;a.aoDrawCallback.push({fn:Ja,sName:"scrolling"});return k[0]}function Ja(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY;b=b.iBarWidth;var h=l(a.nScrollHead),f=h[0].style,g=h.children("div"),k=
g[0].style,m=g.children("table");g=a.nScrollBody;var n=l(g),p=g.style,t=l(a.nScrollFoot).children("div"),v=t.children("table"),x=l(a.nTHead),w=l(a.nTable),r=w[0],C=r.style,G=a.nTFoot?l(a.nTFoot):null,ba=a.oBrowser,L=ba.bScrollOversize;U(a.aoColumns,"nTh");var O=[],I=[],H=[],fa=[],Z,Ba=function(D){D=D.style;D.paddingTop="0";D.paddingBottom="0";D.borderTopWidth="0";D.borderBottomWidth="0";D.height=0};var X=g.scrollHeight>g.clientHeight;if(a.scrollBarVis!==X&&a.scrollBarVis!==q)a.scrollBarVis=X,sa(a);
else{a.scrollBarVis=X;w.children("thead, tfoot").remove();if(G){X=G.clone().prependTo(w);var ca=G.find("tr");var Ca=X.find("tr");X.find("[id]").removeAttr("id")}var Ua=x.clone().prependTo(w);x=x.find("tr");X=Ua.find("tr");Ua.find("th, td").removeAttr("tabindex");Ua.find("[id]").removeAttr("id");c||(p.width="100%",h[0].style.width="100%");l.each(Pa(a,Ua),function(D,W){Z=ta(a,D);W.style.width=a.aoColumns[Z].sWidth});G&&da(function(D){D.style.width=""},Ca);h=w.outerWidth();""===c?(C.width="100%",L&&
(w.find("tbody").height()>g.offsetHeight||"scroll"==n.css("overflow-y"))&&(C.width=K(w.outerWidth()-b)),h=w.outerWidth()):""!==d&&(C.width=K(d),h=w.outerWidth());da(Ba,X);da(function(D){var W=y.getComputedStyle?y.getComputedStyle(D).width:K(l(D).width());H.push(D.innerHTML);O.push(W)},X);da(function(D,W){D.style.width=O[W]},x);l(X).css("height",0);G&&(da(Ba,Ca),da(function(D){fa.push(D.innerHTML);I.push(K(l(D).css("width")))},Ca),da(function(D,W){D.style.width=I[W]},ca),l(Ca).height(0));da(function(D,
W){D.innerHTML='<div class="dataTables_sizing">'+H[W]+"</div>";D.childNodes[0].style.height="0";D.childNodes[0].style.overflow="hidden";D.style.width=O[W]},X);G&&da(function(D,W){D.innerHTML='<div class="dataTables_sizing">'+fa[W]+"</div>";D.childNodes[0].style.height="0";D.childNodes[0].style.overflow="hidden";D.style.width=I[W]},Ca);Math.round(w.outerWidth())<Math.round(h)?(ca=g.scrollHeight>g.offsetHeight||"scroll"==n.css("overflow-y")?h+b:h,L&&(g.scrollHeight>g.offsetHeight||"scroll"==n.css("overflow-y"))&&
(C.width=K(ca-b)),""!==c&&""===d||ea(a,1,"Possible column misalignment",6)):ca="100%";p.width=K(ca);f.width=K(ca);G&&(a.nScrollFoot.style.width=K(ca));!e&&L&&(p.height=K(r.offsetHeight+b));c=w.outerWidth();m[0].style.width=K(c);k.width=K(c);d=w.height()>g.clientHeight||"scroll"==n.css("overflow-y");e="padding"+(ba.bScrollbarLeft?"Left":"Right");k[e]=d?b+"px":"0px";G&&(v[0].style.width=K(c),t[0].style.width=K(c),t[0].style[e]=d?b+"px":"0px");w.children("colgroup").insertBefore(w.children("thead"));
n.trigger("scroll");!a.bSorted&&!a.bFiltered||a._drawHold||(g.scrollTop=0)}}function da(a,b,c){for(var d=0,e=0,h=b.length,f,g;e<h;){f=b[e].firstChild;for(g=c?c[e].firstChild:null;f;)1===f.nodeType&&(c?a(f,g,d):a(f,d),d++),f=f.nextSibling,g=c?g.nextSibling:null;e++}}function db(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,e=d.sY,h=d.sX,f=d.sXInner,g=c.length,k=Ka(a,"bVisible"),m=l("th",a.nTHead),n=b.getAttribute("width"),p=b.parentNode,t=!1,v,x=a.oBrowser;d=x.bScrollOversize;(v=b.style.width)&&-1!==
v.indexOf("%")&&(n=v);for(v=0;v<k.length;v++){var w=c[k[v]];null!==w.sWidth&&(w.sWidth=cc(w.sWidthOrig,p),t=!0)}if(d||!t&&!h&&!e&&g==na(a)&&g==m.length)for(v=0;v<g;v++)k=ta(a,v),null!==k&&(c[k].sWidth=K(m.eq(v).width()));else{g=l(b).clone().css("visibility","hidden").removeAttr("id");g.find("tbody tr").remove();var r=l("<tr/>").appendTo(g.find("tbody"));g.find("thead, tfoot").remove();g.append(l(a.nTHead).clone()).append(l(a.nTFoot).clone());g.find("tfoot th, tfoot td").css("width","");m=Pa(a,g.find("thead")[0]);
for(v=0;v<k.length;v++)w=c[k[v]],m[v].style.width=null!==w.sWidthOrig&&""!==w.sWidthOrig?K(w.sWidthOrig):"",w.sWidthOrig&&h&&l(m[v]).append(l("<div/>").css({width:w.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(v=0;v<k.length;v++)t=k[v],w=c[t],l(dc(a,t)).clone(!1).append(w.sContentPadding).appendTo(r);l("[name]",g).removeAttr("name");w=l("<div/>").css(h||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(g).appendTo(p);h&&f?g.width(f):h?
(g.css("width","auto"),g.removeAttr("width"),g.width()<p.clientWidth&&n&&g.width(p.clientWidth)):e?g.width(p.clientWidth):n&&g.width(n);for(v=e=0;v<k.length;v++)p=l(m[v]),f=p.outerWidth()-p.width(),p=x.bBounding?Math.ceil(m[v].getBoundingClientRect().width):p.outerWidth(),e+=p,c[k[v]].sWidth=K(p-f);b.style.width=K(e);w.remove()}n&&(b.style.width=K(n));!n&&!h||a._reszEvt||(b=function(){l(y).on("resize.DT-"+a.sInstance,mb(function(){sa(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0)}function cc(a,b){if(!a)return 0;
a=l("<div/>").css("width",K(a)).appendTo(b||A.body);b=a[0].offsetWidth;a.remove();return b}function dc(a,b){var c=ec(a,b);if(0>c)return null;var d=a.aoData[c];return d.nTr?d.anCells[b]:l("<td/>").html(T(a,c,b,"display"))[0]}function ec(a,b){for(var c,d=-1,e=-1,h=0,f=a.aoData.length;h<f;h++)c=T(a,h,b,"display")+"",c=c.replace(Cc,""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=h);return e}function K(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function oa(a){var b=
[],c=a.aoColumns;var d=a.aaSortingFixed;var e=l.isPlainObject(d);var h=[];var f=function(n){n.length&&!Array.isArray(n[0])?h.push(n):l.merge(h,n)};Array.isArray(d)&&f(d);e&&d.pre&&f(d.pre);f(a.aaSorting);e&&d.post&&f(d.post);for(a=0;a<h.length;a++){var g=h[a][0];f=c[g].aDataSort;d=0;for(e=f.length;d<e;d++){var k=f[d];var m=c[k].sType||"string";h[a]._idx===q&&(h[a]._idx=l.inArray(h[a][1],c[k].asSorting));b.push({src:g,col:k,dir:h[a][1],index:h[a]._idx,type:m,formatter:u.ext.type.order[m+"-pre"]})}}return b}
function Lb(a){var b,c=[],d=u.ext.type.order,e=a.aoData,h=0,f=a.aiDisplayMaster;eb(a);var g=oa(a);var k=0;for(b=g.length;k<b;k++){var m=g[k];m.formatter&&h++;fc(a,m.col)}if("ssp"!=Q(a)&&0!==g.length){k=0;for(b=f.length;k<b;k++)c[f[k]]=k;h===g.length?f.sort(function(n,p){var t,v=g.length,x=e[n]._aSortData,w=e[p]._aSortData;for(t=0;t<v;t++){var r=g[t];var C=x[r.col];var G=w[r.col];C=C<G?-1:C>G?1:0;if(0!==C)return"asc"===r.dir?C:-C}C=c[n];G=c[p];return C<G?-1:C>G?1:0}):f.sort(function(n,p){var t,v=g.length,
x=e[n]._aSortData,w=e[p]._aSortData;for(t=0;t<v;t++){var r=g[t];var C=x[r.col];var G=w[r.col];r=d[r.type+"-"+r.dir]||d["string-"+r.dir];C=r(C,G);if(0!==C)return C}C=c[n];G=c[p];return C<G?-1:C>G?1:0})}a.bSorted=!0}function gc(a){var b=a.aoColumns,c=oa(a);a=a.oLanguage.oAria;for(var d=0,e=b.length;d<e;d++){var h=b[d];var f=h.asSorting;var g=h.ariaTitle||h.sTitle.replace(/<.*?>/g,"");var k=h.nTh;k.removeAttribute("aria-sort");h.bSortable&&(0<c.length&&c[0].col==d?(k.setAttribute("aria-sort","asc"==
c[0].dir?"ascending":"descending"),h=f[c[0].index+1]||f[0]):h=f[0],g+="asc"===h?a.sSortAscending:a.sSortDescending);k.setAttribute("aria-label",g)}}function rb(a,b,c,d){var e=a.aaSorting,h=a.aoColumns[b].asSorting,f=function(g,k){var m=g._idx;m===q&&(m=l.inArray(g[1],h));return m+1<h.length?m+1:k?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=l.inArray(b,U(e,"0")),-1!==c?(b=f(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=h[b],e[c]._idx=b)):
(e.push([b,h[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=f(e[0]),e.length=1,e[0][1]=h[b],e[0]._idx=b):(e.length=0,e.push([b,h[0]]),e[0]._idx=0);ka(a);"function"==typeof d&&d(a)}function kb(a,b,c,d){var e=a.aoColumns[c];sb(b,{},function(h){!1!==e.bSortable&&(a.oFeatures.bProcessing?(V(a,!0),setTimeout(function(){rb(a,c,h.shiftKey,d);"ssp"!==Q(a)&&V(a,!1)},0)):rb(a,c,h.shiftKey,d))})}function Va(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=oa(a),e=a.oFeatures,h;if(e.bSort&&e.bSortClasses){e=
0;for(h=b.length;e<h;e++){var f=b[e].src;l(U(a.aoData,"anCells",f)).removeClass(c+(2>e?e+1:3))}e=0;for(h=d.length;e<h;e++)f=d[e].src,l(U(a.aoData,"anCells",f)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function fc(a,b){var c=a.aoColumns[b],d=u.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,ua(a,b)));for(var h,f=u.ext.type.order[c.sType+"-pre"],g=0,k=a.aoData.length;g<k;g++)if(c=a.aoData[g],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)h=d?e[g]:T(a,g,b,"sort"),c._aSortData[b]=f?f(h):h}
function Da(a){if(!a._bLoadingState){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:l.extend(!0,[],a.aaSorting),search:Zb(a.oPreviousSearch),columns:l.map(a.aoColumns,function(c,d){return{visible:c.bVisible,search:Zb(a.aoPreSearchCols[d])}})};a.oSavedState=b;F(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oFeatures.bStateSave&&!a.bDestroying&&a.fnStateSaveCallback.call(a.oInstance,a,b)}}function hc(a,b,c){if(a.oFeatures.bStateSave)return b=a.fnStateLoadCallback.call(a.oInstance,
a,function(d){tb(a,d,c)}),b!==q&&tb(a,b,c),!0;c()}function tb(a,b,c){var d,e=a.aoColumns;a._bLoadingState=!0;var h=a._bInitComplete?new u.Api(a):null;if(b&&b.time){var f=F(a,"aoStateLoadParams","stateLoadParams",[a,b]);if(-1!==l.inArray(!1,f))a._bLoadingState=!1;else if(f=a.iStateDuration,0<f&&b.time<+new Date-1E3*f)a._bLoadingState=!1;else if(b.columns&&e.length!==b.columns.length)a._bLoadingState=!1;else{a.oLoadedState=l.extend(!0,{},b);b.length!==q&&(h?h.page.len(b.length):a._iDisplayLength=b.length);
b.start!==q&&(null===h?(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start):Ta(a,b.start/a._iDisplayLength));b.order!==q&&(a.aaSorting=[],l.each(b.order,function(k,m){a.aaSorting.push(m[0]>=e.length?[0,m[1]]:m)}));b.search!==q&&l.extend(a.oPreviousSearch,$b(b.search));if(b.columns){f=0;for(d=b.columns.length;f<d;f++){var g=b.columns[f];g.visible!==q&&(h?h.column(f).visible(g.visible,!1):e[f].bVisible=g.visible);g.search!==q&&l.extend(a.aoPreSearchCols[f],$b(g.search))}h&&h.columns.adjust()}a._bLoadingState=
!1;F(a,"aoStateLoaded","stateLoaded",[a,b])}}else a._bLoadingState=!1;c()}function Wa(a){var b=u.settings;a=l.inArray(a,U(b,"nTable"));return-1!==a?b[a]:null}function ea(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)y.console&&console.log&&console.log(c);else if(b=u.ext,b=b.sErrMode||b.errMode,a&&F(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==
typeof b&&b(a,d,c)}}function Y(a,b,c,d){Array.isArray(c)?l.each(c,function(e,h){Array.isArray(h)?Y(a,b,h[0],h[1]):Y(a,b,h)}):(d===q&&(d=c),b[c]!==q&&(a[d]=b[c]))}function ub(a,b,c){var d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];l.isPlainObject(e)?(l.isPlainObject(a[d])||(a[d]={}),l.extend(!0,a[d],e)):c&&"data"!==d&&"aaData"!==d&&Array.isArray(e)?a[d]=e.slice():a[d]=e}return a}function sb(a,b,c){l(a).on("click.DT",b,function(d){l(a).trigger("blur");c(d)}).on("keypress.DT",b,function(d){13===d.which&&
(d.preventDefault(),c(d))}).on("selectstart.DT",function(){return!1})}function R(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function F(a,b,c,d){var e=[];b&&(e=l.map(a[b].slice().reverse(),function(h,f){return h.fn.apply(a.oInstance,d)}));null!==c&&(b=l.Event(c+".dt"),l(a.nTable).trigger(b,d),e.push(b.result));return e}function qb(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function lb(a,b){a=a.renderer;var c=u.ext.renderer[b];
return l.isPlainObject(a)&&a[b]?c[a[b]]||c._:"string"===typeof a?c[a]||c._:c._}function Q(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function Ea(a,b){var c=ic.numbers_length,d=Math.floor(c/2);b<=c?a=pa(0,b):a<=d?(a=pa(0,c-2),a.push("ellipsis"),a.push(b-1)):(a>=b-1-d?a=pa(b-(c-2),b):(a=pa(a-d+2,a+d-1),a.push("ellipsis"),a.push(b-1)),a.splice(0,0,"ellipsis"),a.splice(0,0,0));a.DT_el="span";return a}function bb(a){l.each({num:function(b){return Xa(b,a)},"num-fmt":function(b){return Xa(b,
a,vb)},"html-num":function(b){return Xa(b,a,Ya)},"html-num-fmt":function(b){return Xa(b,a,Ya,vb)}},function(b,c){M.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(M.type.search[b+a]=M.type.search.html)})}function jc(a,b,c,d,e){return y.moment?a[b](e):y.luxon?a[c](e):d?a[d](e):a}function Za(a,b,c){if(y.moment){var d=y.moment.utc(a,b,c,!0);if(!d.isValid())return null}else if(y.luxon){d=b?y.luxon.DateTime.fromFormat(a,b):y.luxon.DateTime.fromISO(a);if(!d.isValid)return null;d.setLocale(c)}else b?(kc||
alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"),kc=!0):d=new Date(a);return d}function wb(a){return function(b,c,d,e){0===arguments.length?(d="en",b=c=null):1===arguments.length?(d="en",c=b,b=null):2===arguments.length&&(d=c,c=b,b=null);var h="datetime-"+c;u.ext.type.order[h]||(u.ext.type.detect.unshift(function(f){return f===h?h:!1}),u.ext.type.order[h+"-asc"]=function(f,g){f=f.valueOf();g=g.valueOf();return f===g?0:f<g?-1:1},u.ext.type.order[h+
"-desc"]=function(f,g){f=f.valueOf();g=g.valueOf();return f===g?0:f>g?-1:1});return function(f,g){if(null===f||f===q)"--now"===e?(f=new Date,f=new Date(Date.UTC(f.getFullYear(),f.getMonth(),f.getDate(),f.getHours(),f.getMinutes(),f.getSeconds()))):f="";if("type"===g)return h;if(""===f)return"sort"!==g?"":Za("0000-01-01 00:00:00",null,d);if(null!==c&&b===c&&"sort"!==g&&"type"!==g&&!(f instanceof Date))return f;var k=Za(f,b,d);if(null===k)return f;if("sort"===g)return k;f=null===c?jc(k,"toDate","toJSDate",
"")[a]():jc(k,"format","toFormat","toISOString",c);return"display"===g?$a(f):f}}}function lc(a){return function(){var b=[Wa(this[u.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return u.ext.internal[a].apply(this,b)}}var u=function(a,b){if(this instanceof u)return l(a).DataTable(b);b=a;this.$=function(f,g){return this.api(!0).$(f,g)};this._=function(f,g){return this.api(!0).rows(f,g).data()};this.api=function(f){return f?new B(Wa(this[M.iApiIndex])):new B(this)};this.fnAddData=function(f,
g){var k=this.api(!0);f=Array.isArray(f)&&(Array.isArray(f[0])||l.isPlainObject(f[0]))?k.rows.add(f):k.row.add(f);(g===q||g)&&k.draw();return f.flatten().toArray()};this.fnAdjustColumnSizing=function(f){var g=this.api(!0).columns.adjust(),k=g.settings()[0],m=k.oScroll;f===q||f?g.draw(!1):(""!==m.sX||""!==m.sY)&&Ja(k)};this.fnClearTable=function(f){var g=this.api(!0).clear();(f===q||f)&&g.draw()};this.fnClose=function(f){this.api(!0).row(f).child.hide()};this.fnDeleteRow=function(f,g,k){var m=this.api(!0);
f=m.rows(f);var n=f.settings()[0],p=n.aoData[f[0][0]];f.remove();g&&g.call(this,n,p);(k===q||k)&&m.draw();return p};this.fnDestroy=function(f){this.api(!0).destroy(f)};this.fnDraw=function(f){this.api(!0).draw(f)};this.fnFilter=function(f,g,k,m,n,p){n=this.api(!0);null===g||g===q?n.search(f,k,m,p):n.column(g).search(f,k,m,p);n.draw()};this.fnGetData=function(f,g){var k=this.api(!0);if(f!==q){var m=f.nodeName?f.nodeName.toLowerCase():"";return g!==q||"td"==m||"th"==m?k.cell(f,g).data():k.row(f).data()||
null}return k.data().toArray()};this.fnGetNodes=function(f){var g=this.api(!0);return f!==q?g.row(f).node():g.rows().nodes().flatten().toArray()};this.fnGetPosition=function(f){var g=this.api(!0),k=f.nodeName.toUpperCase();return"TR"==k?g.row(f).index():"TD"==k||"TH"==k?(f=g.cell(f).index(),[f.row,f.columnVisible,f.column]):null};this.fnIsOpen=function(f){return this.api(!0).row(f).child.isShown()};this.fnOpen=function(f,g,k){return this.api(!0).row(f).child(g,k).show().child()[0]};this.fnPageChange=
function(f,g){f=this.api(!0).page(f);(g===q||g)&&f.draw(!1)};this.fnSetColumnVis=function(f,g,k){f=this.api(!0).column(f).visible(g);(k===q||k)&&f.columns.adjust().draw()};this.fnSettings=function(){return Wa(this[M.iApiIndex])};this.fnSort=function(f){this.api(!0).order(f).draw()};this.fnSortListener=function(f,g,k){this.api(!0).order.listener(f,g,k)};this.fnUpdate=function(f,g,k,m,n){var p=this.api(!0);k===q||null===k?p.row(g).data(f):p.cell(g,k).data(f);(n===q||n)&&p.columns.adjust();(m===q||m)&&
p.draw();return 0};this.fnVersionCheck=M.fnVersionCheck;var c=this,d=b===q,e=this.length;d&&(b={});this.oApi=this.internal=M.internal;for(var h in u.ext.internal)h&&(this[h]=lc(h));this.each(function(){var f={},g=1<e?ub(f,b,!0):b,k=0,m;f=this.getAttribute("id");var n=!1,p=u.defaults,t=l(this);if("table"!=this.nodeName.toLowerCase())ea(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{Db(p);Eb(p.column);P(p,p,!0);P(p.column,p.column,!0);P(p,l.extend(g,t.data()),!0);var v=u.settings;
k=0;for(m=v.length;k<m;k++){var x=v[k];if(x.nTable==this||x.nTHead&&x.nTHead.parentNode==this||x.nTFoot&&x.nTFoot.parentNode==this){var w=g.bRetrieve!==q?g.bRetrieve:p.bRetrieve;if(d||w)return x.oInstance;if(g.bDestroy!==q?g.bDestroy:p.bDestroy){x.oInstance.fnDestroy();break}else{ea(x,0,"Cannot reinitialise DataTable",3);return}}if(x.sTableId==this.id){v.splice(k,1);break}}if(null===f||""===f)this.id=f="DataTables_Table_"+u.ext._unique++;var r=l.extend(!0,{},u.models.oSettings,{sDestroyWidth:t[0].style.width,
sInstance:f,sTableId:f});r.nTable=this;r.oApi=c.internal;r.oInit=g;v.push(r);r.oInstance=1===c.length?c:t.dataTable();Db(g);la(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=Array.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);g=ub(l.extend(!0,{},p),g);Y(r.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));Y(r,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod",
"aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]);Y(r.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);Y(r.oLanguage,g,"fnInfoCallback");
R(r,"aoDrawCallback",g.fnDrawCallback,"user");R(r,"aoServerParams",g.fnServerParams,"user");R(r,"aoStateSaveParams",g.fnStateSaveParams,"user");R(r,"aoStateLoadParams",g.fnStateLoadParams,"user");R(r,"aoStateLoaded",g.fnStateLoaded,"user");R(r,"aoRowCallback",g.fnRowCallback,"user");R(r,"aoRowCreatedCallback",g.fnCreatedRow,"user");R(r,"aoHeaderCallback",g.fnHeaderCallback,"user");R(r,"aoFooterCallback",g.fnFooterCallback,"user");R(r,"aoInitComplete",g.fnInitComplete,"user");R(r,"aoPreDrawCallback",
g.fnPreDrawCallback,"user");r.rowIdFn=ma(g.rowId);Fb(r);var C=r.oClasses;l.extend(C,u.ext.classes,g.oClasses);t.addClass(C.sTable);r.iInitDisplayStart===q&&(r.iInitDisplayStart=g.iDisplayStart,r._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(r.bDeferLoading=!0,f=Array.isArray(g.iDeferLoading),r._iRecordsDisplay=f?g.iDeferLoading[0]:g.iDeferLoading,r._iRecordsTotal=f?g.iDeferLoading[1]:g.iDeferLoading);var G=r.oLanguage;l.extend(!0,G,g.oLanguage);G.sUrl?(l.ajax({dataType:"json",url:G.sUrl,
success:function(I){P(p.oLanguage,I);la(I);l.extend(!0,G,I,r.oInit.oLanguage);F(r,null,"i18n",[r]);Aa(r)},error:function(){Aa(r)}}),n=!0):F(r,null,"i18n",[r]);null===g.asStripeClasses&&(r.asStripeClasses=[C.sStripeOdd,C.sStripeEven]);f=r.asStripeClasses;var ba=t.children("tbody").find("tr").eq(0);-1!==l.inArray(!0,l.map(f,function(I,H){return ba.hasClass(I)}))&&(l("tbody tr",this).removeClass(f.join(" ")),r.asDestroyStripes=f.slice());f=[];v=this.getElementsByTagName("thead");0!==v.length&&(wa(r.aoHeader,
v[0]),f=Pa(r));if(null===g.aoColumns)for(v=[],k=0,m=f.length;k<m;k++)v.push(null);else v=g.aoColumns;k=0;for(m=v.length;k<m;k++)cb(r,f?f[k]:null);Hb(r,g.aoColumnDefs,v,function(I,H){Ia(r,I,H)});if(ba.length){var L=function(I,H){return null!==I.getAttribute("data-"+H)?H:null};l(ba[0]).children("th, td").each(function(I,H){var fa=r.aoColumns[I];if(fa.mData===I){var Z=L(H,"sort")||L(H,"order");H=L(H,"filter")||L(H,"search");if(null!==Z||null!==H)fa.mData={_:I+".display",sort:null!==Z?I+".@data-"+Z:q,
type:null!==Z?I+".@data-"+Z:q,filter:null!==H?I+".@data-"+H:q},Ia(r,I)}})}var O=r.oFeatures;f=function(){if(g.aaSorting===q){var I=r.aaSorting;k=0;for(m=I.length;k<m;k++)I[k][1]=r.aoColumns[k].asSorting[0]}Va(r);O.bSort&&R(r,"aoDrawCallback",function(){if(r.bSorted){var Z=oa(r),Ba={};l.each(Z,function(X,ca){Ba[ca.src]=ca.dir});F(r,null,"order",[r,Z,Ba]);gc(r)}});R(r,"aoDrawCallback",function(){(r.bSorted||"ssp"===Q(r)||O.bDeferRender)&&Va(r)},"sc");I=t.children("caption").each(function(){this._captionSide=
l(this).css("caption-side")});var H=t.children("thead");0===H.length&&(H=l("<thead/>").appendTo(t));r.nTHead=H[0];var fa=t.children("tbody");0===fa.length&&(fa=l("<tbody/>").insertAfter(H));r.nTBody=fa[0];H=t.children("tfoot");0===H.length&&0<I.length&&(""!==r.oScroll.sX||""!==r.oScroll.sY)&&(H=l("<tfoot/>").appendTo(t));0===H.length||0===H.children().length?t.addClass(C.sNoFooter):0<H.length&&(r.nTFoot=H[0],wa(r.aoFooter,r.nTFoot));if(g.aaData)for(k=0;k<g.aaData.length;k++)ia(r,g.aaData[k]);else(r.bDeferLoading||
"dom"==Q(r))&&La(r,l(r.nTBody).children("tr"));r.aiDisplay=r.aiDisplayMaster.slice();r.bInitialised=!0;!1===n&&Aa(r)};R(r,"aoDrawCallback",Da,"state_save");g.bStateSave?(O.bStateSave=!0,hc(r,g,f)):f()}});c=null;return this},M,z,J,xb={},mc=/[\r\n\u2028]/g,Ya=/<.*?>/g,Dc=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,Ec=/(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,vb=/['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,aa=function(a){return a&&!0!==a&&"-"!==
a?!1:!0},nc=function(a){var b=parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null},oc=function(a,b){xb[b]||(xb[b]=new RegExp(ob(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(xb[b],"."):a},yb=function(a,b,c){var d="string"===typeof a;if(aa(a))return!0;b&&d&&(a=oc(a,b));c&&d&&(a=a.replace(vb,""));return!isNaN(parseFloat(a))&&isFinite(a)},pc=function(a,b,c){return aa(a)?!0:aa(a)||"string"===typeof a?yb(a.replace(Ya,""),b,c)?!0:null:null},U=function(a,b,c){var d=[],e=0,h=a.length;
if(c!==q)for(;e<h;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<h;e++)a[e]&&d.push(a[e][b]);return d},Fa=function(a,b,c,d){var e=[],h=0,f=b.length;if(d!==q)for(;h<f;h++)a[b[h]][c]&&e.push(a[b[h]][c][d]);else for(;h<f;h++)e.push(a[b[h]][c]);return e},pa=function(a,b){var c=[];if(b===q){b=0;var d=a}else d=b,b=a;for(a=b;a<d;a++)c.push(a);return c},qc=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},Oa=function(a){a:{if(!(2>a.length)){var b=a.slice().sort();for(var c=b[0],
d=1,e=b.length;d<e;d++){if(b[d]===c){b=!1;break a}c=b[d]}}b=!0}if(b)return a.slice();b=[];e=a.length;var h,f=0;d=0;a:for(;d<e;d++){c=a[d];for(h=0;h<f;h++)if(b[h]===c)continue a;b.push(c);f++}return b},rc=function(a,b){if(Array.isArray(b))for(var c=0;c<b.length;c++)rc(a,b[c]);else a.push(b);return a},sc=function(a,b){b===q&&(b=0);return-1!==this.indexOf(a,b)};Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)});Array.prototype.includes||(Array.prototype.includes=
sc);String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")});String.prototype.includes||(String.prototype.includes=sc);u.util={throttle:function(a,b){var c=b!==q?b:200,d,e;return function(){var h=this,f=+new Date,g=arguments;d&&f<d+c?(clearTimeout(e),e=setTimeout(function(){d=q;a.apply(h,g)},c)):(d=f,a.apply(h,g))}},escapeRegex:function(a){return a.replace(Ec,"\\$1")},set:function(a){if(l.isPlainObject(a))return u.util.set(a._);if(null===
a)return function(){};if("function"===typeof a)return function(c,d,e){a(c,"set",d,e)};if("string"!==typeof a||-1===a.indexOf(".")&&-1===a.indexOf("[")&&-1===a.indexOf("("))return function(c,d){c[a]=d};var b=function(c,d,e){e=hb(e);var h=e[e.length-1];for(var f,g,k=0,m=e.length-1;k<m;k++){if("__proto__"===e[k]||"constructor"===e[k])throw Error("Cannot set prototype values");f=e[k].match(Ga);g=e[k].match(qa);if(f){e[k]=e[k].replace(Ga,"");c[e[k]]=[];h=e.slice();h.splice(0,k+1);f=h.join(".");if(Array.isArray(d))for(g=
0,m=d.length;g<m;g++)h={},b(h,d[g],f),c[e[k]].push(h);else c[e[k]]=d;return}g&&(e[k]=e[k].replace(qa,""),c=c[e[k]](d));if(null===c[e[k]]||c[e[k]]===q)c[e[k]]={};c=c[e[k]]}if(h.match(qa))c[h.replace(qa,"")](d);else c[h.replace(Ga,"")]=d};return function(c,d){return b(c,d,a)}},get:function(a){if(l.isPlainObject(a)){var b={};l.each(a,function(d,e){e&&(b[d]=u.util.get(e))});return function(d,e,h,f){var g=b[e]||b._;return g!==q?g(d,e,h,f):d}}if(null===a)return function(d){return d};if("function"===typeof a)return function(d,
e,h,f){return a(d,e,h,f)};if("string"!==typeof a||-1===a.indexOf(".")&&-1===a.indexOf("[")&&-1===a.indexOf("("))return function(d,e){return d[a]};var c=function(d,e,h){if(""!==h){var f=hb(h);for(var g=0,k=f.length;g<k;g++){h=f[g].match(Ga);var m=f[g].match(qa);if(h){f[g]=f[g].replace(Ga,"");""!==f[g]&&(d=d[f[g]]);m=[];f.splice(0,g+1);f=f.join(".");if(Array.isArray(d))for(g=0,k=d.length;g<k;g++)m.push(c(d[g],e,f));d=h[0].substring(1,h[0].length-1);d=""===d?m:m.join(d);break}else if(m){f[g]=f[g].replace(qa,
"");d=d[f[g]]();continue}if(null===d||d[f[g]]===q)return q;d=d[f[g]]}}return d};return function(d,e){return c(d,e,a)}}};var S=function(a,b,c){a[b]!==q&&(a[c]=a[b])},Ga=/\[.*?\]$/,qa=/\(\)$/,ma=u.util.get,ha=u.util.set,ob=u.util.escapeRegex,Sa=l("<div>")[0],Bc=Sa.textContent!==q,Cc=/<.*?>/g,mb=u.util.throttle,tc=[],N=Array.prototype,Fc=function(a){var b,c=u.settings,d=l.map(c,function(h,f){return h.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase()){var e=
l.inArray(a,d);return-1!==e?[c[e]]:null}if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?b=l(a):a instanceof l&&(b=a)}else return[];if(b)return b.map(function(h){e=l.inArray(this,d);return-1!==e?c[e]:null}).toArray()};var B=function(a,b){if(!(this instanceof B))return new B(a,b);var c=[],d=function(f){(f=Fc(f))&&c.push.apply(c,f)};if(Array.isArray(a))for(var e=0,h=a.length;e<h;e++)d(a[e]);else d(a);this.context=Oa(c);b&&l.merge(this,b);this.selector={rows:null,
cols:null,opts:null};B.extend(this,this,tc)};u.Api=B;l.extend(B.prototype,{any:function(){return 0!==this.count()},concat:N.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=this.context;return b.length>a?new B(b[a],this[a]):null},filter:function(a){var b=[];if(N.filter)b=N.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);
return new B(this.context,b)},flatten:function(){var a=[];return new B(this.context,a.concat.apply(a,this.toArray()))},join:N.join,indexOf:N.indexOf||function(a,b){b=b||0;for(var c=this.length;b<c;b++)if(this[b]===a)return b;return-1},iterator:function(a,b,c,d){var e=[],h,f,g=this.context,k,m=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);var n=0;for(h=g.length;n<h;n++){var p=new B(g[n]);if("table"===b){var t=c.call(p,g[n],n);t!==q&&e.push(t)}else if("columns"===b||"rows"===b)t=c.call(p,g[n],
this[n],n),t!==q&&e.push(t);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){var v=this[n];"column-rows"===b&&(k=ab(g[n],m.opts));var x=0;for(f=v.length;x<f;x++)t=v[x],t="cell"===b?c.call(p,g[n],t.row,t.column,n,x):c.call(p,g[n],t,n,x,k),t!==q&&e.push(t)}}return e.length||d?(a=new B(g,a?e.concat.apply([],e):e),b=a.selector,b.rows=m.rows,b.cols=m.cols,b.opts=m.opts,a):this},lastIndexOf:N.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,
map:function(a){var b=[];if(N.map)b=N.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new B(this.context,b)},pluck:function(a){var b=u.util.get(a);return this.map(function(c){return b(c)})},pop:N.pop,push:N.push,reduce:N.reduce||function(a,b){return Gb(this,a,b,0,this.length,1)},reduceRight:N.reduceRight||function(a,b){return Gb(this,a,b,this.length-1,-1,-1)},reverse:N.reverse,selector:null,shift:N.shift,slice:function(){return new B(this.context,
this)},sort:N.sort,splice:N.splice,toArray:function(){return N.slice.call(this)},to$:function(){return l(this)},toJQuery:function(){return l(this)},unique:function(){return new B(this.context,Oa(this))},unshift:N.unshift});B.extend=function(a,b,c){if(c.length&&b&&(b instanceof B||b.__dt_wrapper)){var d,e=function(g,k,m){return function(){var n=k.apply(g,arguments);B.extend(n,n,m.methodExt);return n}};var h=0;for(d=c.length;h<d;h++){var f=c[h];b[f.name]="function"===f.type?e(a,f.val,f):"object"===
f.type?{}:f.val;b[f.name].__dt_wrapper=!0;B.extend(a,b[f.name],f.propExt)}}};B.register=z=function(a,b){if(Array.isArray(a))for(var c=0,d=a.length;c<d;c++)B.register(a[c],b);else{d=a.split(".");var e=tc,h;a=0;for(c=d.length;a<c;a++){var f=(h=-1!==d[a].indexOf("()"))?d[a].replace("()",""):d[a];a:{var g=0;for(var k=e.length;g<k;g++)if(e[g].name===f){g=e[g];break a}g=null}g||(g={name:f,val:{},methodExt:[],propExt:[],type:"object"},e.push(g));a===c-1?(g.val=b,g.type="function"===typeof b?"function":l.isPlainObject(b)?
"object":"other"):e=h?g.methodExt:g.propExt}}};B.registerPlural=J=function(a,b,c){B.register(a,c);B.register(b,function(){var d=c.apply(this,arguments);return d===this?this:d instanceof B?d.length?Array.isArray(d[0])?new B(d.context,d[0]):d[0]:q:d})};var uc=function(a,b){if(Array.isArray(a))return l.map(a,function(d){return uc(d,b)});if("number"===typeof a)return[b[a]];var c=l.map(b,function(d,e){return d.nTable});return l(c).filter(a).map(function(d){d=l.inArray(this,c);return b[d]}).toArray()};
z("tables()",function(a){return a!==q&&null!==a?new B(uc(a,this.context)):this});z("table()",function(a){a=this.tables(a);var b=a.context;return b.length?new B(b[0]):a});J("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});J("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});J("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},
1)});J("tables().footer()","table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});J("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});z("draw()",function(a){return this.iterator("table",function(b){"page"===a?ja(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),ka(b,!1===a))})});z("page()",function(a){return a===q?this.page.info().page:this.iterator("table",function(b){Ta(b,a)})});z("page.info()",
function(a){if(0===this.context.length)return q;a=this.context[0];var b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===Q(a)}});z("page.len()",function(a){return a===q?0!==this.context.length?this.context[0]._iDisplayLength:q:this.iterator("table",function(b){pb(b,a)})});var vc=function(a,b,
c){if(c){var d=new B(a);d.one("draw",function(){c(d.ajax.json())})}if("ssp"==Q(a))ka(a,b);else{V(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();Qa(a,[],function(h){Ma(a);h=za(a,h);for(var f=0,g=h.length;f<g;f++)ia(a,h[f]);ka(a,b);V(a,!1)})}};z("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});z("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});z("ajax.reload()",function(a,b){return this.iterator("table",function(c){vc(c,!1===b,a)})});
z("ajax.url()",function(a){var b=this.context;if(a===q){if(0===b.length)return q;b=b[0];return b.ajax?l.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(c){l.isPlainObject(c.ajax)?c.ajax.url=a:c.ajax=a})});z("ajax.url().load()",function(a,b){return this.iterator("table",function(c){vc(c,!1===b,a)})});var zb=function(a,b,c,d,e){var h=[],f,g,k;var m=typeof b;b&&"string"!==m&&"function"!==m&&b.length!==q||(b=[b]);m=0;for(g=b.length;m<g;m++){var n=b[m]&&b[m].split&&
!b[m].match(/[\[\(:]/)?b[m].split(","):[b[m]];var p=0;for(k=n.length;p<k;p++)(f=c("string"===typeof n[p]?n[p].trim():n[p]))&&f.length&&(h=h.concat(f))}a=M.selector[a];if(a.length)for(m=0,g=a.length;m<g;m++)h=a[m](d,e,h);return Oa(h)},Ab=function(a){a||(a={});a.filter&&a.search===q&&(a.search=a.filter);return l.extend({search:"none",order:"current",page:"all"},a)},Bb=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=
0;return a},ab=function(a,b){var c=[],d=a.aiDisplay;var e=a.aiDisplayMaster;var h=b.search;var f=b.order;b=b.page;if("ssp"==Q(a))return"removed"===h?[]:pa(0,e.length);if("current"==b)for(f=a._iDisplayStart,a=a.fnDisplayEnd();f<a;f++)c.push(d[f]);else if("current"==f||"applied"==f)if("none"==h)c=e.slice();else if("applied"==h)c=d.slice();else{if("removed"==h){var g={};f=0;for(a=d.length;f<a;f++)g[d[f]]=null;c=l.map(e,function(k){return g.hasOwnProperty(k)?null:k})}}else if("index"==f||"original"==
f)for(f=0,a=a.aoData.length;f<a;f++)"none"==h?c.push(f):(e=l.inArray(f,d),(-1===e&&"removed"==h||0<=e&&"applied"==h)&&c.push(f));return c},Gc=function(a,b,c){var d;return zb("row",b,function(e){var h=nc(e),f=a.aoData;if(null!==h&&!c)return[h];d||(d=ab(a,c));if(null!==h&&-1!==l.inArray(h,d))return[h];if(null===e||e===q||""===e)return d;if("function"===typeof e)return l.map(d,function(k){var m=f[k];return e(k,m._aData,m.nTr)?k:null});if(e.nodeName){h=e._DT_RowIndex;var g=e._DT_CellIndex;if(h!==q)return f[h]&&
f[h].nTr===e?[h]:[];if(g)return f[g.row]&&f[g.row].nTr===e.parentNode?[g.row]:[];h=l(e).closest("*[data-dt-row]");return h.length?[h.data("dt-row")]:[]}if("string"===typeof e&&"#"===e.charAt(0)&&(h=a.aIds[e.replace(/^#/,"")],h!==q))return[h.idx];h=qc(Fa(a.aoData,d,"nTr"));return l(h).filter(e).map(function(){return this._DT_RowIndex}).toArray()},a,c)};z("rows()",function(a,b){a===q?a="":l.isPlainObject(a)&&(b=a,a="");b=Ab(b);var c=this.iterator("table",function(d){return Gc(d,a,b)},1);c.selector.rows=
a;c.selector.opts=b;return c});z("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||q},1)});z("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return Fa(a.aoData,b,"_aData")},1)});J("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){b=b.aoData[c];return"search"===a?b._aFilterData:b._aSortData},1)});J("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){va(b,
c,a)})});J("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b},1)});J("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var h=0,f=this[d].length;h<f;h++){var g=c[d].rowIdFn(c[d].aoData[this[d][h]]._aData);b.push((!0===a?"#":"")+g)}return new B(c,b)});J("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,h=e[c],f,g;e.splice(c,1);var k=0;for(f=e.length;k<
f;k++){var m=e[k];var n=m.anCells;null!==m.nTr&&(m.nTr._DT_RowIndex=k);if(null!==n)for(m=0,g=n.length;m<g;m++)n[m]._DT_CellIndex.row=k}Na(b.aiDisplayMaster,c);Na(b.aiDisplay,c);Na(a[d],c,!1);0<b._iRecordsDisplay&&b._iRecordsDisplay--;qb(b);c=b.rowIdFn(h._aData);c!==q&&delete b.aIds[c]});this.iterator("table",function(b){for(var c=0,d=b.aoData.length;c<d;c++)b.aoData[c].idx=c});return this});z("rows.add()",function(a){var b=this.iterator("table",function(d){var e,h=[];var f=0;for(e=a.length;f<e;f++){var g=
a[f];g.nodeName&&"TR"===g.nodeName.toUpperCase()?h.push(La(d,g)[0]):h.push(ia(d,g))}return h},1),c=this.rows(-1);c.pop();l.merge(c,b);return c});z("row()",function(a,b){return Bb(this.rows(a,b))});z("row().data()",function(a){var b=this.context;if(a===q)return b.length&&this.length?b[0].aoData[this[0]]._aData:q;var c=b[0].aoData[this[0]];c._aData=a;Array.isArray(a)&&c.nTr&&c.nTr.id&&ha(b[0].rowId)(a,c.nTr.id);va(b[0],this[0],"data");return this});z("row().node()",function(){var a=this.context;return a.length&&
this.length?a[0].aoData[this[0]].nTr||null:null});z("row.add()",function(a){a instanceof l&&a.length&&(a=a[0]);var b=this.iterator("table",function(c){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?La(c,a)[0]:ia(c,a)});return this.row(b[0])});l(A).on("plugin-init.dt",function(a,b){a=new B(b);a.on("stateSaveParams",function(d,e,h){d=e.rowIdFn;e=e.aoData;for(var f=[],g=0;g<e.length;g++)e[g]._detailsShow&&f.push("#"+d(e[g]._aData));h.childRows=f});var c=a.state.loaded();c&&c.childRows&&a.rows(l.map(c.childRows,
function(d){return d.replace(/:/g,"\\:")})).every(function(){F(b,null,"requestChild",[this])})});var Hc=function(a,b,c,d){var e=[],h=function(f,g){if(Array.isArray(f)||f instanceof l)for(var k=0,m=f.length;k<m;k++)h(f[k],g);else f.nodeName&&"tr"===f.nodeName.toLowerCase()?e.push(f):(k=l("<tr><td></td></tr>").addClass(g),l("td",k).addClass(g).html(f)[0].colSpan=na(a),e.push(k[0]))};h(c,d);b._details&&b._details.detach();b._details=l(e);b._detailsShow&&b._details.insertAfter(b.nTr)},wc=u.util.throttle(function(a){Da(a[0])},
500),Cb=function(a,b){var c=a.context;c.length&&(a=c[0].aoData[b!==q?b:a[0]])&&a._details&&(a._details.remove(),a._detailsShow=q,a._details=q,l(a.nTr).removeClass("dt-hasChild"),wc(c))},xc=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];d._details&&((d._detailsShow=b)?(d._details.insertAfter(d.nTr),l(d.nTr).addClass("dt-hasChild")):(d._details.detach(),l(d.nTr).removeClass("dt-hasChild")),F(c[0],null,"childRow",[b,a.row(a[0])]),Ic(c[0]),wc(c))}},Ic=function(a){var b=new B(a),
c=a.aoData;b.off("draw.dt.DT_details column-sizing.dt.DT_details destroy.dt.DT_details");0<U(c,"_details").length&&(b.on("draw.dt.DT_details",function(d,e){a===e&&b.rows({page:"current"}).eq(0).each(function(h){h=c[h];h._detailsShow&&h._details.insertAfter(h.nTr)})}),b.on("column-sizing.dt.DT_details",function(d,e,h,f){if(a===e)for(e=na(e),h=0,f=c.length;h<f;h++)d=c[h],d._details&&d._details.children("td[colspan]").attr("colspan",e)}),b.on("destroy.dt.DT_details",function(d,e){if(a===e)for(d=0,e=
c.length;d<e;d++)c[d]._details&&Cb(b,d)}))};z("row().child()",function(a,b){var c=this.context;if(a===q)return c.length&&this.length?c[0].aoData[this[0]]._details:q;!0===a?this.child.show():!1===a?Cb(this):c.length&&this.length&&Hc(c[0],c[0].aoData[this[0]],a,b);return this});z(["row().child.show()","row().child().show()"],function(a){xc(this,!0);return this});z(["row().child.hide()","row().child().hide()"],function(){xc(this,!1);return this});z(["row().child.remove()","row().child().remove()"],function(){Cb(this);
return this});z("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var Jc=/^([^:]+):(name|visIdx|visible)$/,yc=function(a,b,c,d,e){c=[];d=0;for(var h=e.length;d<h;d++)c.push(T(a,e[d],b));return c},Kc=function(a,b,c){var d=a.aoColumns,e=U(d,"sName"),h=U(d,"nTh");return zb("column",b,function(f){var g=nc(f);if(""===f)return pa(d.length);if(null!==g)return[0<=g?g:d.length+g];if("function"===typeof f){var k=ab(a,c);return l.map(d,
function(p,t){return f(t,yc(a,t,0,0,k),h[t])?t:null})}var m="string"===typeof f?f.match(Jc):"";if(m)switch(m[2]){case "visIdx":case "visible":g=parseInt(m[1],10);if(0>g){var n=l.map(d,function(p,t){return p.bVisible?t:null});return[n[n.length+g]]}return[ta(a,g)];case "name":return l.map(e,function(p,t){return p===m[1]?t:null});default:return[]}if(f.nodeName&&f._DT_CellIndex)return[f._DT_CellIndex.column];g=l(h).filter(f).map(function(){return l.inArray(this,h)}).toArray();if(g.length||!f.nodeName)return g;
g=l(f).closest("*[data-dt-column]");return g.length?[g.data("dt-column")]:[]},a,c)};z("columns()",function(a,b){a===q?a="":l.isPlainObject(a)&&(b=a,a="");b=Ab(b);var c=this.iterator("table",function(d){return Kc(d,a,b)},1);c.selector.cols=a;c.selector.opts=b;return c});J("columns().header()","column().header()",function(a,b){return this.iterator("column",function(c,d){return c.aoColumns[d].nTh},1)});J("columns().footer()","column().footer()",function(a,b){return this.iterator("column",function(c,
d){return c.aoColumns[d].nTf},1)});J("columns().data()","column().data()",function(){return this.iterator("column-rows",yc,1)});J("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});J("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,h){return Fa(b.aoData,h,"search"===a?"_aFilterData":"_aSortData",c)},1)});J("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",
function(a,b,c,d,e){return Fa(a.aoData,e,"anCells",b)},1)});J("columns().visible()","column().visible()",function(a,b){var c=this,d=this.iterator("column",function(e,h){if(a===q)return e.aoColumns[h].bVisible;var f=e.aoColumns,g=f[h],k=e.aoData,m;if(a!==q&&g.bVisible!==a){if(a){var n=l.inArray(!0,U(f,"bVisible"),h+1);f=0;for(m=k.length;f<m;f++){var p=k[f].nTr;e=k[f].anCells;p&&p.insertBefore(e[h],e[n]||null)}}else l(U(e.aoData,"anCells",h)).detach();g.bVisible=a}});a!==q&&this.iterator("table",function(e){xa(e,
e.aoHeader);xa(e,e.aoFooter);e.aiDisplay.length||l(e.nTBody).find("td[colspan]").attr("colspan",na(e));Da(e);c.iterator("column",function(h,f){F(h,null,"column-visibility",[h,f,a,b])});(b===q||b)&&c.columns.adjust()});return d});J("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?ua(b,c):c},1)});z("columns.adjust()",function(){return this.iterator("table",function(a){sa(a)},1)});z("column.index()",function(a,b){if(0!==this.context.length){var c=
this.context[0];if("fromVisible"===a||"toData"===a)return ta(c,b);if("fromData"===a||"toVisible"===a)return ua(c,b)}});z("column()",function(a,b){return Bb(this.columns(a,b))});var Lc=function(a,b,c){var d=a.aoData,e=ab(a,c),h=qc(Fa(d,e,"anCells")),f=l(rc([],h)),g,k=a.aoColumns.length,m,n,p,t,v,x;return zb("cell",b,function(w){var r="function"===typeof w;if(null===w||w===q||r){m=[];n=0;for(p=e.length;n<p;n++)for(g=e[n],t=0;t<k;t++)v={row:g,column:t},r?(x=d[g],w(v,T(a,g,t),x.anCells?x.anCells[t]:null)&&
m.push(v)):m.push(v);return m}if(l.isPlainObject(w))return w.column!==q&&w.row!==q&&-1!==l.inArray(w.row,e)?[w]:[];r=f.filter(w).map(function(C,G){return{row:G._DT_CellIndex.row,column:G._DT_CellIndex.column}}).toArray();if(r.length||!w.nodeName)return r;x=l(w).closest("*[data-dt-row]");return x.length?[{row:x.data("dt-row"),column:x.data("dt-column")}]:[]},a,c)};z("cells()",function(a,b,c){l.isPlainObject(a)&&(a.row===q?(c=a,a=null):(c=b,b=null));l.isPlainObject(b)&&(c=b,b=null);if(null===b||b===
q)return this.iterator("table",function(n){return Lc(n,a,Ab(c))});var d=c?{page:c.page,order:c.order,search:c.search}:{},e=this.columns(b,d),h=this.rows(a,d),f,g,k,m;d=this.iterator("table",function(n,p){n=[];f=0;for(g=h[p].length;f<g;f++)for(k=0,m=e[p].length;k<m;k++)n.push({row:h[p][f],column:e[p][k]});return n},1);d=c&&c.selected?this.cells(d,c):d;l.extend(d.selector,{cols:b,rows:a,opts:c});return d});J("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=
a.aoData[b])&&a.anCells?a.anCells[c]:q},1)});z("cells().data()",function(){return this.iterator("cell",function(a,b,c){return T(a,b,c)},1)});J("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});J("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return T(b,c,d,a)},1)});J("cells().indexes()","cell().index()",function(){return this.iterator("cell",
function(a,b,c){return{row:b,column:c,columnVisible:ua(a,c)}},1)});J("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){va(b,c,a,d)})});z("cell()",function(a,b,c){return Bb(this.cells(a,b,c))});z("cell().data()",function(a){var b=this.context,c=this[0];if(a===q)return b.length&&c.length?T(b[0],c[0].row,c[0].column):q;Ib(b[0],c[0].row,c[0].column,a);va(b[0],c[0].row,"data",c[0].column);return this});z("order()",function(a,b){var c=this.context;if(a===
q)return 0!==c.length?c[0].aaSorting:q;"number"===typeof a?a=[[a,b]]:a.length&&!Array.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(d){d.aaSorting=a.slice()})});z("order.listener()",function(a,b,c){return this.iterator("table",function(d){kb(d,a,b,c)})});z("order.fixed()",function(a){if(!a){var b=this.context;b=b.length?b[0].aaSortingFixed:q;return Array.isArray(b)?{pre:b}:b}return this.iterator("table",function(c){c.aaSortingFixed=l.extend(!0,{},a)})});
z(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];l.each(b[d],function(h,f){e.push([f,a])});c.aaSorting=e})});z("search()",function(a,b,c,d){var e=this.context;return a===q?0!==e.length?e[0].oPreviousSearch.sSearch:q:this.iterator("table",function(h){h.oFeatures.bFilter&&ya(h,l.extend({},h.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});J("columns().search()","column().search()",
function(a,b,c,d){return this.iterator("column",function(e,h){var f=e.aoPreSearchCols;if(a===q)return f[h].sSearch;e.oFeatures.bFilter&&(l.extend(f[h],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),ya(e,e.oPreviousSearch,1))})});z("state()",function(){return this.context.length?this.context[0].oSavedState:null});z("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});z("state.loaded()",function(){return this.context.length?
this.context[0].oLoadedState:null});z("state.save()",function(){return this.iterator("table",function(a){Da(a)})});u.versionCheck=u.fnVersionCheck=function(a){var b=u.version.split(".");a=a.split(".");for(var c,d,e=0,h=a.length;e<h;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};u.isDataTable=u.fnIsDataTable=function(a){var b=l(a).get(0),c=!1;if(a instanceof u.Api)return!0;l.each(u.settings,function(d,e){d=e.nScrollHead?l("table",e.nScrollHead)[0]:null;var h=e.nScrollFoot?
l("table",e.nScrollFoot)[0]:null;if(e.nTable===b||d===b||h===b)c=!0});return c};u.tables=u.fnTables=function(a){var b=!1;l.isPlainObject(a)&&(b=a.api,a=a.visible);var c=l.map(u.settings,function(d){if(!a||a&&l(d.nTable).is(":visible"))return d.nTable});return b?new B(c):c};u.camelToHungarian=P;z("$()",function(a,b){b=this.rows(b).nodes();b=l(b);return l([].concat(b.filter(a).toArray(),b.find(a).toArray()))});l.each(["on","one","off"],function(a,b){z(b+"()",function(){var c=Array.prototype.slice.call(arguments);
c[0]=l.map(c[0].split(/\s/),function(e){return e.match(/\.dt\b/)?e:e+".dt"}).join(" ");var d=l(this.tables().nodes());d[b].apply(d,c);return this})});z("clear()",function(){return this.iterator("table",function(a){Ma(a)})});z("settings()",function(){return new B(this.context,this.context)});z("init()",function(){var a=this.context;return a.length?a[0].oInit:null});z("data()",function(){return this.iterator("table",function(a){return U(a.aoData,"_aData")}).flatten()});z("destroy()",function(a){a=a||
!1;return this.iterator("table",function(b){var c=b.oClasses,d=b.nTable,e=b.nTBody,h=b.nTHead,f=b.nTFoot,g=l(d);e=l(e);var k=l(b.nTableWrapper),m=l.map(b.aoData,function(p){return p.nTr}),n;b.bDestroying=!0;F(b,"aoDestroyCallback","destroy",[b]);a||(new B(b)).columns().visible(!0);k.off(".DT").find(":not(tbody *)").off(".DT");l(y).off(".DT-"+b.sInstance);d!=h.parentNode&&(g.children("thead").detach(),g.append(h));f&&d!=f.parentNode&&(g.children("tfoot").detach(),g.append(f));b.aaSorting=[];b.aaSortingFixed=
[];Va(b);l(m).removeClass(b.asStripeClasses.join(" "));l("th, td",h).removeClass(c.sSortable+" "+c.sSortableAsc+" "+c.sSortableDesc+" "+c.sSortableNone);e.children().detach();e.append(m);h=b.nTableWrapper.parentNode;f=a?"remove":"detach";g[f]();k[f]();!a&&h&&(h.insertBefore(d,b.nTableReinsertBefore),g.css("width",b.sDestroyWidth).removeClass(c.sTable),(n=b.asDestroyStripes.length)&&e.children().each(function(p){l(this).addClass(b.asDestroyStripes[p%n])}));c=l.inArray(b,u.settings);-1!==c&&u.settings.splice(c,
1)})});l.each(["column","row","cell"],function(a,b){z(b+"s().every()",function(c){var d=this.selector.opts,e=this;return this.iterator(b,function(h,f,g,k,m){c.call(e[b](f,"cell"===b?g:d,"cell"===b?d:q),f,g,k,m)})})});z("i18n()",function(a,b,c){var d=this.context[0];a=ma(a)(d.oLanguage);a===q&&(a=b);c!==q&&l.isPlainObject(a)&&(a=a[c]!==q?a[c]:a._);return a.replace("%d",c)});u.version="1.12.1";u.settings=[];u.models={};u.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0,"return":!1};
u.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};u.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,
sWidth:null,sWidthOrig:null};u.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){return{}}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+
a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",
sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:l.extend({},u.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};E(u.defaults);
u.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};E(u.defaults.column);u.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,
bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],
aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,jqXHR:null,json:q,oAjaxData:q,fnServerData:null,aoServerParams:[],sServerMethod:null,
fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==Q(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==Q(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+
a,d=this.aiDisplay.length,e=this.oFeatures,h=e.bPaginate;return e.bServerSide?!1===h||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!h||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};u.ext=M={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],
search:{},order:{}},_unique:0,fnVersionCheck:u.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:u.version};l.extend(M,{afnFiltering:M.search,aTypes:M.type.detect,ofnSearch:M.type.search,oSort:M.type.order,afnSortData:M.order,aoFeatures:M.feature,oApi:M.internal,oStdClasses:M.classes,oPagination:M.pager});l.extend(u.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",
sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_desc_disabled",sSortableDesc:"sorting_asc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",
sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var ic=u.ext.pager;l.extend(ic,{simple:function(a,b){return["previous","next"]},full:function(a,b){return["first","previous","next","last"]},numbers:function(a,b){return[Ea(a,b)]},simple_numbers:function(a,b){return["previous",
Ea(a,b),"next"]},full_numbers:function(a,b){return["first","previous",Ea(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",Ea(a,b),"last"]},_numbers:Ea,numbers_length:7});l.extend(!0,u.ext.renderer,{pageButton:{_:function(a,b,c,d,e,h){var f=a.oClasses,g=a.oLanguage.oPaginate,k=a.oLanguage.oAria.paginate||{},m,n,p=0,t=function(x,w){var r,C=f.sPageButtonDisabled,G=function(I){Ta(a,I.data.action,!0)};var ba=0;for(r=w.length;ba<r;ba++){var L=w[ba];if(Array.isArray(L)){var O=l("<"+(L.DT_el||
"div")+"/>").appendTo(x);t(O,L)}else{m=null;n=L;O=a.iTabIndex;switch(L){case "ellipsis":x.append('<span class="ellipsis">&#x2026;</span>');break;case "first":m=g.sFirst;0===e&&(O=-1,n+=" "+C);break;case "previous":m=g.sPrevious;0===e&&(O=-1,n+=" "+C);break;case "next":m=g.sNext;if(0===h||e===h-1)O=-1,n+=" "+C;break;case "last":m=g.sLast;if(0===h||e===h-1)O=-1,n+=" "+C;break;default:m=a.fnFormatNumber(L+1),n=e===L?f.sPageButtonActive:""}null!==m&&(O=l("<a>",{"class":f.sPageButton+" "+n,"aria-controls":a.sTableId,
"aria-label":k[L],"data-dt-idx":p,tabindex:O,id:0===c&&"string"===typeof L?a.sTableId+"_"+L:null}).html(m).appendTo(x),sb(O,{action:L},G),p++)}}};try{var v=l(b).find(A.activeElement).data("dt-idx")}catch(x){}t(l(b).empty(),d);v!==q&&l(b).find("[data-dt-idx="+v+"]").trigger("focus")}}});l.extend(u.ext.type.detect,[function(a,b){b=b.oLanguage.sDecimal;return yb(a,b)?"num"+b:null},function(a,b){if(a&&!(a instanceof Date)&&!Dc.test(a))return null;b=Date.parse(a);return null!==b&&!isNaN(b)||aa(a)?"date":
null},function(a,b){b=b.oLanguage.sDecimal;return yb(a,b,!0)?"num-fmt"+b:null},function(a,b){b=b.oLanguage.sDecimal;return pc(a,b)?"html-num"+b:null},function(a,b){b=b.oLanguage.sDecimal;return pc(a,b,!0)?"html-num-fmt"+b:null},function(a,b){return aa(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);l.extend(u.ext.type.search,{html:function(a){return aa(a)?a:"string"===typeof a?a.replace(mc," ").replace(Ya,""):""},string:function(a){return aa(a)?a:"string"===typeof a?a.replace(mc," "):
a}});var Xa=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=oc(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};l.extend(M.type.order,{"date-pre":function(a){a=Date.parse(a);return isNaN(a)?-Infinity:a},"html-pre":function(a){return aa(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return aa(a)?"":"string"===typeof a?a.toLowerCase():a.toString?a.toString():""},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,
b){return a<b?1:a>b?-1:0}});bb("");l.extend(!0,u.ext.renderer,{header:{_:function(a,b,c,d){l(a.nTable).on("order.dt.DT",function(e,h,f,g){a===h&&(e=c.idx,b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass("asc"==g[e]?d.sSortAsc:"desc"==g[e]?d.sSortDesc:c.sSortingClass))})},jqueryui:function(a,b,c,d){l("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(l("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);l(a.nTable).on("order.dt.DT",function(e,h,f,g){a===h&&(e=c.idx,
b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass("asc"==g[e]?d.sSortAsc:"desc"==g[e]?d.sSortDesc:c.sSortingClass),b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass("asc"==g[e]?d.sSortJUIAsc:"desc"==g[e]?d.sSortJUIDesc:c.sSortingClassJUI))})}}});var $a=function(a){Array.isArray(a)&&(a=a.join(","));return"string"===typeof a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,
"&quot;"):a},kc=!1,zc=",",Ac=".";if(Intl)try{for(var Ha=(new Intl.NumberFormat).formatToParts(100000.1),ra=0;ra<Ha.length;ra++)"group"===Ha[ra].type?zc=Ha[ra].value:"decimal"===Ha[ra].type&&(Ac=Ha[ra].value)}catch(a){}u.datetime=function(a,b){var c="datetime-detect-"+a;b||(b="en");u.ext.type.order[c]||(u.ext.type.detect.unshift(function(d){var e=Za(d,a,b);return""===d||e?c:!1}),u.ext.type.order[c+"-pre"]=function(d){return Za(d,a,b)||0})};u.render={date:wb("toLocaleDateString"),datetime:wb("toLocaleString"),
time:wb("toLocaleTimeString"),number:function(a,b,c,d,e){if(null===a||a===q)a=zc;if(null===b||b===q)b=Ac;return{display:function(h){if("number"!==typeof h&&"string"!==typeof h||""===h||null===h)return h;var f=0>h?"-":"",g=parseFloat(h);if(isNaN(g))return $a(h);g=g.toFixed(c);h=Math.abs(g);g=parseInt(h,10);h=c?b+(h-g).toFixed(c).substring(2):"";0===g&&0===parseFloat(h)&&(f="");return f+(d||"")+g.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+h+(e||"")}}},text:function(){return{display:$a,filter:$a}}};
l.extend(u.ext.internal,{_fnExternApiFunc:lc,_fnBuildAjax:Qa,_fnAjaxUpdate:Kb,_fnAjaxParameters:Tb,_fnAjaxUpdateDraw:Ub,_fnAjaxDataSrc:za,_fnAddColumn:cb,_fnColumnOptions:Ia,_fnAdjustColumnSizing:sa,_fnVisibleToColumnIndex:ta,_fnColumnIndexToVisible:ua,_fnVisbleColumns:na,_fnGetColumns:Ka,_fnColumnTypes:eb,_fnApplyColumnDefs:Hb,_fnHungarianMap:E,_fnCamelToHungarian:P,_fnLanguageCompat:la,_fnBrowserDetect:Fb,_fnAddData:ia,_fnAddTr:La,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==q?b._DT_RowIndex:
null},_fnNodeToColumnIndex:function(a,b,c){return l.inArray(c,a.aoData[b].anCells)},_fnGetCellData:T,_fnSetCellData:Ib,_fnSplitObjNotation:hb,_fnGetObjectDataFn:ma,_fnSetObjectDataFn:ha,_fnGetDataMaster:ib,_fnClearTable:Ma,_fnDeleteIndex:Na,_fnInvalidate:va,_fnGetRowElements:gb,_fnCreateTr:fb,_fnBuildHead:Jb,_fnDrawHead:xa,_fnDraw:ja,_fnReDraw:ka,_fnAddOptionsHtml:Mb,_fnDetectHeader:wa,_fnGetUniqueThs:Pa,_fnFeatureHtmlFilter:Ob,_fnFilterComplete:ya,_fnFilterCustom:Xb,_fnFilterColumn:Wb,_fnFilter:Vb,
_fnFilterCreateSearch:nb,_fnEscapeRegex:ob,_fnFilterData:Yb,_fnFeatureHtmlInfo:Rb,_fnUpdateInfo:ac,_fnInfoMacros:bc,_fnInitialise:Aa,_fnInitComplete:Ra,_fnLengthChange:pb,_fnFeatureHtmlLength:Nb,_fnFeatureHtmlPaginate:Sb,_fnPageChange:Ta,_fnFeatureHtmlProcessing:Pb,_fnProcessingDisplay:V,_fnFeatureHtmlTable:Qb,_fnScrollDraw:Ja,_fnApplyToChildren:da,_fnCalculateColumnWidths:db,_fnThrottle:mb,_fnConvertToWidth:cc,_fnGetWidestNode:dc,_fnGetMaxLenString:ec,_fnStringToCss:K,_fnSortFlatten:oa,_fnSort:Lb,
_fnSortAria:gc,_fnSortListener:rb,_fnSortAttachListener:kb,_fnSortingClasses:Va,_fnSortData:fc,_fnSaveState:Da,_fnLoadState:hc,_fnImplementState:tb,_fnSettingsFromNode:Wa,_fnLog:ea,_fnMap:Y,_fnBindAction:sb,_fnCallbackReg:R,_fnCallbackFire:F,_fnLengthOverflow:qb,_fnRenderer:lb,_fnDataSource:Q,_fnRowAttributes:jb,_fnExtend:ub,_fnCalculateEnd:function(){}});l.fn.dataTable=u;u.$=l;l.fn.dataTableSettings=u.settings;l.fn.dataTableExt=u.ext;l.fn.DataTable=function(a){return l(this).dataTable(a).api()};
l.each(u,function(a,b){l.fn.DataTable[a]=b});return u});

/*!
 DataTables Bootstrap 4 integration
 ©2011-2017 SpryMedia Ltd - datatables.net/license
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,b,c){a instanceof String&&(a=String(a));for(var e=a.length,d=0;d<e;d++){var f=a[d];if(b.call(c,f,d,a))return{i:d,v:f}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,b){var c=$jscomp.propertyToPolyfillSymbol[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]};
$jscomp.polyfill=function(a,b,c,e){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,c,e):$jscomp.polyfillUnisolated(a,b,c,e))};$jscomp.polyfillUnisolated=function(a,b,c,e){c=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var d=a[e];if(!(d in c))return;c=c[d]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,c,e){var d=a.split(".");a=1===d.length;e=d[0];e=!a&&e in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var f=0;f<d.length-1;f++){var l=d[f];if(!(l in e))return;e=e[l]}d=d[d.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?e[d]:null;b=b(c);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,d,{configurable:!0,writable:!0,value:b}):b!==c&&($jscomp.propertyToPolyfillSymbol[d]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(d):$jscomp.POLYFILL_PREFIX+d,d=
$jscomp.propertyToPolyfillSymbol[d],$jscomp.defineProperty(e,d,{configurable:!0,writable:!0,value:b})))};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(b,c){return $jscomp.findInternal(this,b,c).v}},"es6","es3");
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(b){return a(b,window,document)}):"object"===typeof exports?module.exports=function(b,c){b||(b=window);c&&c.fn.dataTable||(c=require("datatables.net")(b,c).$);return a(c,b,b.document)}:a(jQuery,window,document)})(function(a,b,c,e){var d=a.fn.dataTable;a.extend(!0,d.defaults,{dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
renderer:"bootstrap"});a.extend(d.ext.classes,{sWrapper:"dataTables_wrapper dt-bootstrap4",sFilterInput:"form-control form-control-sm",sLengthSelect:"custom-select custom-select-sm form-control form-control-sm",sProcessing:"dataTables_processing card",sPageButton:"paginate_button page-item"});d.ext.renderer.pageButton.bootstrap=function(f,l,A,B,m,t){var u=new d.Api(f),C=f.oClasses,n=f.oLanguage.oPaginate,D=f.oLanguage.oAria.paginate||{},h,k,v=0,y=function(q,w){var x,E=function(p){p.preventDefault();
a(p.currentTarget).hasClass("disabled")||u.page()==p.data.action||u.page(p.data.action).draw("page")};var r=0;for(x=w.length;r<x;r++){var g=w[r];if(Array.isArray(g))y(q,g);else{k=h="";switch(g){case "ellipsis":h="&#x2026;";k="disabled";break;case "first":h=n.sFirst;k=g+(0<m?"":" disabled");break;case "previous":h=n.sPrevious;k=g+(0<m?"":" disabled");break;case "next":h=n.sNext;k=g+(m<t-1?"":" disabled");break;case "last":h=n.sLast;k=g+(m<t-1?"":" disabled");break;default:h=g+1,k=m===g?"active":""}if(h){var F=
a("<li>",{"class":C.sPageButton+" "+k,id:0===A&&"string"===typeof g?f.sTableId+"_"+g:null}).append(a("<a>",{href:"#","aria-controls":f.sTableId,"aria-label":D[g],"data-dt-idx":v,tabindex:f.iTabIndex,"class":"page-link"}).html(h)).appendTo(q);f.oApi._fnBindAction(F,{action:g},E);v++}}}};try{var z=a(l).find(c.activeElement).data("dt-idx")}catch(q){}y(a(l).empty().html('<ul class="pagination"/>').children("ul"),B);z!==e&&a(l).find("[data-dt-idx="+z+"]").trigger("focus")};return d});

/*!
 Buttons for DataTables 2.2.3
 ©2016-2022 SpryMedia Ltd - datatables.net/license
*/
(function(d){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(A){return d(A,window,document)}):"object"===typeof exports?module.exports=function(A,C){A||(A=window);C&&C.fn.dataTable||(C=require("datatables.net")(A,C).$);return d(C,A,A.document)}:d(jQuery,window,document)})(function(d,A,C,p){function I(a,b,c){d.fn.animate?a.stop().fadeIn(b,c):(a.css("display","block"),c&&c.call(a))}function J(a,b,c){d.fn.animate?a.stop().fadeOut(b,c):(a.css("display","none"),c&&c.call(a))}
function L(a,b){a=new u.Api(a);b=b?b:a.init().buttons||u.defaults.buttons;return(new x(a,b)).container()}var u=d.fn.dataTable,O=0,P=0,D=u.ext.buttons,x=function(a,b){if(!(this instanceof x))return function(c){return(new x(c,a)).container()};"undefined"===typeof b&&(b={});!0===b&&(b={});Array.isArray(b)&&(b={buttons:b});this.c=d.extend(!0,{},x.defaults,b);b.buttons&&(this.c.buttons=b.buttons);this.s={dt:new u.Api(a),buttons:[],listenKeys:"",namespace:"dtb"+O++};this.dom={container:d("<"+this.c.dom.container.tag+
"/>").addClass(this.c.dom.container.className)};this._constructor()};d.extend(x.prototype,{action:function(a,b){a=this._nodeToButton(a);if(b===p)return a.conf.action;a.conf.action=b;return this},active:function(a,b){var c=this._nodeToButton(a);a=this.c.dom.button.active;c=d(c.node);if(b===p)return c.hasClass(a);c.toggleClass(a,b===p?!0:b);return this},add:function(a,b,c){var e=this.s.buttons;if("string"===typeof b){b=b.split("-");var h=this.s;e=0;for(var f=b.length-1;e<f;e++)h=h.buttons[1*b[e]];e=
h.buttons;b=1*b[b.length-1]}this._expandButton(e,a,a!==p?a.split:p,(a===p||a.split===p||0===a.split.length)&&h!==p,!1,b);c!==p&&!0!==c||this._draw();return this},collectionRebuild:function(a,b){a=this._nodeToButton(a);if(b!==p){var c;for(c=a.buttons.length-1;0<=c;c--)this.remove(a.buttons[c].node);for(c=0;c<b.length;c++){var e=b[c];this._expandButton(a.buttons,e,e!==p&&e.config!==p&&e.config.split!==p,!0,e.parentConf!==p&&e.parentConf.split!==p,c,e.parentConf)}}this._draw(a.collection,a.buttons)},
container:function(){return this.dom.container},disable:function(a){a=this._nodeToButton(a);d(a.node).addClass(this.c.dom.button.disabled).attr("disabled",!0);return this},destroy:function(){d("body").off("keyup."+this.s.namespace);var a=this.s.buttons.slice(),b;var c=0;for(b=a.length;c<b;c++)this.remove(a[c].node);this.dom.container.remove();a=this.s.dt.settings()[0];c=0;for(b=a.length;c<b;c++)if(a.inst===this){a.splice(c,1);break}return this},enable:function(a,b){if(!1===b)return this.disable(a);
a=this._nodeToButton(a);d(a.node).removeClass(this.c.dom.button.disabled).removeAttr("disabled");return this},index:function(a,b,c){b||(b="",c=this.s.buttons);for(var e=0,h=c.length;e<h;e++){var f=c[e].buttons;if(c[e].node===a)return b+e;if(f&&f.length&&(f=this.index(a,e+"-",f),null!==f))return f}return null},name:function(){return this.c.name},node:function(a){if(!a)return this.dom.container;a=this._nodeToButton(a);return d(a.node)},processing:function(a,b){var c=this.s.dt,e=this._nodeToButton(a);
if(b===p)return d(e.node).hasClass("processing");d(e.node).toggleClass("processing",b);d(c.table().node()).triggerHandler("buttons-processing.dt",[b,c.button(a),c,d(a),e.conf]);return this},remove:function(a){var b=this._nodeToButton(a),c=this._nodeToHost(a),e=this.s.dt;if(b.buttons.length)for(var h=b.buttons.length-1;0<=h;h--)this.remove(b.buttons[h].node);b.conf.destroying=!0;b.conf.destroy&&b.conf.destroy.call(e.button(a),e,d(a),b.conf);this._removeKey(b.conf);d(b.node).remove();a=d.inArray(b,
c);c.splice(a,1);return this},text:function(a,b){var c=this._nodeToButton(a);a=this.c.dom.collection.buttonLiner;a=c.inCollection&&a&&a.tag?a.tag:this.c.dom.buttonLiner.tag;var e=this.s.dt,h=d(c.node),f=function(g){return"function"===typeof g?g(e,h,c.conf):g};if(b===p)return f(c.conf.text);c.conf.text=b;a?h.children(a).eq(0).filter(":not(.dt-down-arrow)").html(f(b)):h.html(f(b));return this},_constructor:function(){var a=this,b=this.s.dt,c=b.settings()[0],e=this.c.buttons;c._buttons||(c._buttons=
[]);c._buttons.push({inst:this,name:this.c.name});for(var h=0,f=e.length;h<f;h++)this.add(e[h]);b.on("destroy",function(g,l){l===c&&a.destroy()});d("body").on("keyup."+this.s.namespace,function(g){if(!C.activeElement||C.activeElement===C.body){var l=String.fromCharCode(g.keyCode).toLowerCase();-1!==a.s.listenKeys.toLowerCase().indexOf(l)&&a._keypress(l,g)}})},_addKey:function(a){a.key&&(this.s.listenKeys+=d.isPlainObject(a.key)?a.key.key:a.key)},_draw:function(a,b){a||(a=this.dom.container,b=this.s.buttons);
a.children().detach();for(var c=0,e=b.length;c<e;c++)a.append(b[c].inserter),a.append(" "),b[c].buttons&&b[c].buttons.length&&this._draw(b[c].collection,b[c].buttons)},_expandButton:function(a,b,c,e,h,f,g){var l=this.s.dt,m=0,r=Array.isArray(b)?b:[b];b===p&&(r=Array.isArray(c)?c:[c]);c=0;for(var q=r.length;c<q;c++){var n=this._resolveExtends(r[c]);if(n)if(b=n.config!==p&&n.config.split?!0:!1,Array.isArray(n))this._expandButton(a,n,k!==p&&k.conf!==p?k.conf.split:p,e,g!==p&&g.split!==p,f,g);else{var k=
this._buildButton(n,e,n.split!==p||n.config!==p&&n.config.split!==p,h);if(k){f!==p&&null!==f?(a.splice(f,0,k),f++):a.push(k);if(k.conf.buttons||k.conf.split){k.collection=d("<"+(b?this.c.dom.splitCollection.tag:this.c.dom.collection.tag)+"/>");k.conf._collection=k.collection;if(k.conf.split)for(var t=0;t<k.conf.split.length;t++)"object"===typeof k.conf.split[t]&&(k.conf.split[t].parent=g,k.conf.split[t].collectionLayout===p&&(k.conf.split[t].collectionLayout=k.conf.collectionLayout),k.conf.split[t].dropup===
p&&(k.conf.split[t].dropup=k.conf.dropup),k.conf.split[t].fade===p&&(k.conf.split[t].fade=k.conf.fade));else d(k.node).append(d('<span class="dt-down-arrow">'+this.c.dom.splitDropdown.text+"</span>"));this._expandButton(k.buttons,k.conf.buttons,k.conf.split,!b,b,f,k.conf)}k.conf.parent=g;n.init&&n.init.call(l.button(k.node),l,d(k.node),n);m++}}}},_buildButton:function(a,b,c,e){var h=this.c.dom.button,f=this.c.dom.buttonLiner,g=this.c.dom.collection,l=this.c.dom.splitCollection,m=this.c.dom.splitDropdownButton,
r=this.s.dt,q=function(v){return"function"===typeof v?v(r,k,a):v};if(a.spacer){var n=d("<span></span>").addClass("dt-button-spacer "+a.style+" "+h.spacerClass).html(q(a.text));return{conf:a,node:n,inserter:n,buttons:[],inCollection:b,isSplit:c,inSplit:e,collection:null}}!c&&e&&l?h=m:!c&&b&&g.button&&(h=g.button);!c&&e&&l.buttonLiner?f=l.buttonLiner:!c&&b&&g.buttonLiner&&(f=g.buttonLiner);if(a.available&&!a.available(r,a)&&!a.hasOwnProperty("html"))return!1;if(a.hasOwnProperty("html"))var k=d(a.html);
else{var t=function(v,E,F,G){G.action.call(E.button(F),v,E,F,G);d(E.table().node()).triggerHandler("buttons-action.dt",[E.button(F),E,F,G])};g=a.tag||h.tag;var y=a.clickBlurs===p?!0:a.clickBlurs;k=d("<"+g+"/>").addClass(h.className).addClass(e?this.c.dom.splitDropdownButton.className:"").attr("tabindex",this.s.dt.settings()[0].iTabIndex).attr("aria-controls",this.s.dt.table().node().id).on("click.dtb",function(v){v.preventDefault();!k.hasClass(h.disabled)&&a.action&&t(v,r,k,a);y&&k.trigger("blur")}).on("keypress.dtb",
function(v){13===v.keyCode&&(v.preventDefault(),!k.hasClass(h.disabled)&&a.action&&t(v,r,k,a))});"a"===g.toLowerCase()&&k.attr("href","#");"button"===g.toLowerCase()&&k.attr("type","button");f.tag?(g=d("<"+f.tag+"/>").html(q(a.text)).addClass(f.className),"a"===f.tag.toLowerCase()&&g.attr("href","#"),k.append(g)):k.html(q(a.text));!1===a.enabled&&k.addClass(h.disabled);a.className&&k.addClass(a.className);a.titleAttr&&k.attr("title",q(a.titleAttr));a.attr&&k.attr(a.attr);a.namespace||(a.namespace=
".dt-button-"+P++);a.config!==p&&a.config.split&&(a.split=a.config.split)}f=(f=this.c.dom.buttonContainer)&&f.tag?d("<"+f.tag+"/>").addClass(f.className).append(k):k;this._addKey(a);this.c.buttonCreated&&(f=this.c.buttonCreated(a,f));if(c){n=d("<div/>").addClass(this.c.dom.splitWrapper.className);n.append(k);var w=d.extend(a,{text:this.c.dom.splitDropdown.text,className:this.c.dom.splitDropdown.className,closeButton:!1,attr:{"aria-haspopup":"dialog","aria-expanded":!1},align:this.c.dom.splitDropdown.align,
splitAlignClass:this.c.dom.splitDropdown.splitAlignClass});this._addKey(w);var B=function(v,E,F,G){D.split.action.call(E.button(d("div.dt-btn-split-wrapper")[0]),v,E,F,G);d(E.table().node()).triggerHandler("buttons-action.dt",[E.button(F),E,F,G]);F.attr("aria-expanded",!0)},z=d('<button class="'+this.c.dom.splitDropdown.className+' dt-button"><span class="dt-btn-split-drop-arrow">'+this.c.dom.splitDropdown.text+"</span></button>").on("click.dtb",function(v){v.preventDefault();v.stopPropagation();
z.hasClass(h.disabled)||B(v,r,z,w);y&&z.trigger("blur")}).on("keypress.dtb",function(v){13===v.keyCode&&(v.preventDefault(),z.hasClass(h.disabled)||B(v,r,z,w))});0===a.split.length&&z.addClass("dtb-hide-drop");n.append(z).attr(w.attr)}return{conf:a,node:c?n.get(0):k.get(0),inserter:c?n:f,buttons:[],inCollection:b,isSplit:c,inSplit:e,collection:null}},_nodeToButton:function(a,b){b||(b=this.s.buttons);for(var c=0,e=b.length;c<e;c++){if(b[c].node===a)return b[c];if(b[c].buttons.length){var h=this._nodeToButton(a,
b[c].buttons);if(h)return h}}},_nodeToHost:function(a,b){b||(b=this.s.buttons);for(var c=0,e=b.length;c<e;c++){if(b[c].node===a)return b;if(b[c].buttons.length){var h=this._nodeToHost(a,b[c].buttons);if(h)return h}}},_keypress:function(a,b){if(!b._buttonsHandled){var c=function(e){for(var h=0,f=e.length;h<f;h++){var g=e[h].conf,l=e[h].node;g.key&&(g.key===a?(b._buttonsHandled=!0,d(l).click()):!d.isPlainObject(g.key)||g.key.key!==a||g.key.shiftKey&&!b.shiftKey||g.key.altKey&&!b.altKey||g.key.ctrlKey&&
!b.ctrlKey||g.key.metaKey&&!b.metaKey||(b._buttonsHandled=!0,d(l).click()));e[h].buttons.length&&c(e[h].buttons)}};c(this.s.buttons)}},_removeKey:function(a){if(a.key){var b=d.isPlainObject(a.key)?a.key.key:a.key;a=this.s.listenKeys.split("");b=d.inArray(b,a);a.splice(b,1);this.s.listenKeys=a.join("")}},_resolveExtends:function(a){var b=this,c=this.s.dt,e,h=function(m){for(var r=0;!d.isPlainObject(m)&&!Array.isArray(m);){if(m===p)return;if("function"===typeof m){if(m=m.call(b,c,a),!m)return!1}else if("string"===
typeof m){if(!D[m])return{html:m};m=D[m]}r++;if(30<r)throw"Buttons: Too many iterations";}return Array.isArray(m)?m:d.extend({},m)};for(a=h(a);a&&a.extend;){if(!D[a.extend])throw"Cannot extend unknown button type: "+a.extend;var f=h(D[a.extend]);if(Array.isArray(f))return f;if(!f)return!1;var g=f.className;a.config!==p&&f.config!==p&&(a.config=d.extend({},f.config,a.config));a=d.extend({},f,a);g&&a.className!==g&&(a.className=g+" "+a.className);var l=a.postfixButtons;if(l){a.buttons||(a.buttons=[]);
g=0;for(e=l.length;g<e;g++)a.buttons.push(l[g]);a.postfixButtons=null}if(l=a.prefixButtons){a.buttons||(a.buttons=[]);g=0;for(e=l.length;g<e;g++)a.buttons.splice(g,0,l[g]);a.prefixButtons=null}a.extend=f.extend}return a},_popover:function(a,b,c,e){e=this.c;var h=!1,f=d.extend({align:"button-left",autoClose:!1,background:!0,backgroundClassName:"dt-button-background",closeButton:!0,contentClassName:e.dom.collection.className,collectionLayout:"",collectionTitle:"",dropup:!1,fade:400,popoverTitle:"",
rightAlignClassName:"dt-button-right",tag:e.dom.collection.tag},c),g=b.node(),l=function(){h=!0;J(d(".dt-button-collection"),f.fade,function(){d(this).detach()});d(b.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()).attr("aria-expanded","false");d("div.dt-button-background").off("click.dtb-collection");x.background(!1,f.backgroundClassName,f.fade,g);d(A).off("resize.resize.dtb-collection");d("body").off(".dtb-collection");b.off("buttons-action.b-internal");b.off("destroy")};if(!1===
a)l();else{c=d(b.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes());c.length&&(g.closest("div.dt-button-collection").length&&(g=c.eq(0)),l());c=d(".dt-button",a).length;e="";3===c?e="dtb-b3":2===c?e="dtb-b2":1===c&&(e="dtb-b1");var m=d("<div/>").addClass("dt-button-collection").addClass(f.collectionLayout).addClass(f.splitAlignClass).addClass(e).css("display","none").attr({"aria-modal":!0,role:"dialog"});a=d(a).addClass(f.contentClassName).attr("role","menu").appendTo(m);g.attr("aria-expanded",
"true");g.parents("body")[0]!==C.body&&(g=C.body.lastChild);f.popoverTitle?m.prepend('<div class="dt-button-collection-title">'+f.popoverTitle+"</div>"):f.collectionTitle&&m.prepend('<div class="dt-button-collection-title">'+f.collectionTitle+"</div>");f.closeButton&&m.prepend('<div class="dtb-popover-close">x</div>').addClass("dtb-collection-closeable");I(m.insertAfter(g),f.fade);c=d(b.table().container());var r=m.css("position");if("container"===f.span||"dt-container"===f.align)g=g.parent(),m.css("width",
c.width());if("absolute"===r){var q=d(g[0].offsetParent);c=g.position();e=g.offset();var n=q.offset(),k=q.position(),t=A.getComputedStyle(q[0]);n.height=q.outerHeight();n.width=q.width()+parseFloat(t.paddingLeft);n.right=n.left+n.width;n.bottom=n.top+n.height;q=c.top+g.outerHeight();var y=c.left;m.css({top:q,left:y});t=A.getComputedStyle(m[0]);var w=m.offset();w.height=m.outerHeight();w.width=m.outerWidth();w.right=w.left+w.width;w.bottom=w.top+w.height;w.marginTop=parseFloat(t.marginTop);w.marginBottom=
parseFloat(t.marginBottom);f.dropup&&(q=c.top-w.height-w.marginTop-w.marginBottom);if("button-right"===f.align||m.hasClass(f.rightAlignClassName))y=c.left-w.width+g.outerWidth();if("dt-container"===f.align||"container"===f.align)y<c.left&&(y=-c.left),y+w.width>n.width&&(y=n.width-w.width);k.left+y+w.width>d(A).width()&&(y=d(A).width()-w.width-k.left);0>e.left+y&&(y=-e.left);k.top+q+w.height>d(A).height()+d(A).scrollTop()&&(q=c.top-w.height-w.marginTop-w.marginBottom);k.top+q<d(A).scrollTop()&&(q=
c.top+g.outerHeight());m.css({top:q,left:y})}else r=function(){var B=d(A).height()/2,z=m.height()/2;z>B&&(z=B);m.css("marginTop",-1*z)},r(),d(A).on("resize.dtb-collection",function(){r()});f.background&&x.background(!0,f.backgroundClassName,f.fade,f.backgroundHost||g);d("div.dt-button-background").on("click.dtb-collection",function(){});f.autoClose&&setTimeout(function(){b.on("buttons-action.b-internal",function(B,z,v,E){E[0]!==g[0]&&l()})},0);d(m).trigger("buttons-popover.dt");b.on("destroy",l);
setTimeout(function(){h=!1;d("body").on("click.dtb-collection",function(B){if(!h){var z=d.fn.addBack?"addBack":"andSelf",v=d(B.target).parent()[0];(!d(B.target).parents()[z]().filter(a).length&&!d(v).hasClass("dt-buttons")||d(B.target).hasClass("dt-button-background"))&&l()}}).on("keyup.dtb-collection",function(B){27===B.keyCode&&l()}).on("keydown.dtb-collection",function(B){var z=d("a, button",a),v=C.activeElement;9===B.keyCode&&(-1===z.index(v)?(z.first().focus(),B.preventDefault()):B.shiftKey?
v===z[0]&&(z.last().focus(),B.preventDefault()):v===z.last()[0]&&(z.first().focus(),B.preventDefault()))})},0)}}});x.background=function(a,b,c,e){c===p&&(c=400);e||(e=C.body);a?I(d("<div/>").addClass(b).css("display","none").insertAfter(e),c):J(d("div."+b),c,function(){d(this).removeClass(b).remove()})};x.instanceSelector=function(a,b){if(a===p||null===a)return d.map(b,function(f){return f.inst});var c=[],e=d.map(b,function(f){return f.name}),h=function(f){if(Array.isArray(f))for(var g=0,l=f.length;g<
l;g++)h(f[g]);else"string"===typeof f?-1!==f.indexOf(",")?h(f.split(",")):(f=d.inArray(f.trim(),e),-1!==f&&c.push(b[f].inst)):"number"===typeof f?c.push(b[f].inst):"object"===typeof f&&c.push(f)};h(a);return c};x.buttonSelector=function(a,b){for(var c=[],e=function(l,m,r){for(var q,n,k=0,t=m.length;k<t;k++)if(q=m[k])n=r!==p?r+k:k+"",l.push({node:q.node,name:q.conf.name,idx:n}),q.buttons&&e(l,q.buttons,n+"-")},h=function(l,m){var r,q=[];e(q,m.s.buttons);var n=d.map(q,function(k){return k.node});if(Array.isArray(l)||
l instanceof d)for(n=0,r=l.length;n<r;n++)h(l[n],m);else if(null===l||l===p||"*"===l)for(n=0,r=q.length;n<r;n++)c.push({inst:m,node:q[n].node});else if("number"===typeof l)m.s.buttons[l]&&c.push({inst:m,node:m.s.buttons[l].node});else if("string"===typeof l)if(-1!==l.indexOf(","))for(q=l.split(","),n=0,r=q.length;n<r;n++)h(q[n].trim(),m);else if(l.match(/^\d+(\-\d+)*$/))n=d.map(q,function(k){return k.idx}),c.push({inst:m,node:q[d.inArray(l,n)].node});else if(-1!==l.indexOf(":name"))for(l=l.replace(":name",
""),n=0,r=q.length;n<r;n++)q[n].name===l&&c.push({inst:m,node:q[n].node});else d(n).filter(l).each(function(){c.push({inst:m,node:this})});else"object"===typeof l&&l.nodeName&&(q=d.inArray(l,n),-1!==q&&c.push({inst:m,node:n[q]}))},f=0,g=a.length;f<g;f++)h(b,a[f]);return c};x.stripData=function(a,b){if("string"!==typeof a)return a;a=a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"");a=a.replace(/<!\-\-.*?\-\->/g,"");if(!b||b.stripHtml)a=a.replace(/<[^>]*>/g,"");if(!b||b.trim)a=a.replace(/^\s+|\s+$/g,
"");if(!b||b.stripNewlines)a=a.replace(/\n/g," ");if(!b||b.decodeEntities)M.innerHTML=a,a=M.value;return a};x.defaults={buttons:["copy","excel","csv","pdf","print"],name:"main",tabIndex:0,dom:{container:{tag:"div",className:"dt-buttons"},collection:{tag:"div",className:""},button:{tag:"button",className:"dt-button",active:"active",disabled:"disabled",spacerClass:""},buttonLiner:{tag:"span",className:""},split:{tag:"div",className:"dt-button-split"},splitWrapper:{tag:"div",className:"dt-btn-split-wrapper"},
splitDropdown:{tag:"button",text:"&#x25BC;",className:"dt-btn-split-drop",align:"split-right",splitAlignClass:"dt-button-split-left"},splitDropdownButton:{tag:"button",className:"dt-btn-split-drop-button dt-button"},splitCollection:{tag:"div",className:"dt-button-split-collection"}}};x.version="2.2.3";d.extend(D,{collection:{text:function(a){return a.i18n("buttons.collection","Collection")},className:"buttons-collection",closeButton:!1,init:function(a,b,c){b.attr("aria-expanded",!1)},action:function(a,
b,c,e){e._collection.parents("body").length?this.popover(!1,e):this.popover(e._collection,e);"keypress"===a.type&&d("a, button",e._collection).eq(0).focus()},attr:{"aria-haspopup":"dialog"}},split:{text:function(a){return a.i18n("buttons.split","Split")},className:"buttons-split",closeButton:!1,init:function(a,b,c){return b.attr("aria-expanded",!1)},action:function(a,b,c,e){this.popover(e._collection,e)},attr:{"aria-haspopup":"dialog"}},copy:function(a,b){if(D.copyHtml5)return"copyHtml5"},csv:function(a,
b){if(D.csvHtml5&&D.csvHtml5.available(a,b))return"csvHtml5"},excel:function(a,b){if(D.excelHtml5&&D.excelHtml5.available(a,b))return"excelHtml5"},pdf:function(a,b){if(D.pdfHtml5&&D.pdfHtml5.available(a,b))return"pdfHtml5"},pageLength:function(a){a=a.settings()[0].aLengthMenu;var b=[],c=[];if(Array.isArray(a[0]))b=a[0],c=a[1];else for(var e=0;e<a.length;e++){var h=a[e];d.isPlainObject(h)?(b.push(h.value),c.push(h.label)):(b.push(h),c.push(h))}return{extend:"collection",text:function(f){return f.i18n("buttons.pageLength",
{"-1":"Show all rows",_:"Show %d rows"},f.page.len())},className:"buttons-page-length",autoClose:!0,buttons:d.map(b,function(f,g){return{text:c[g],className:"button-page-length",action:function(l,m){m.page.len(f).draw()},init:function(l,m,r){var q=this;m=function(){q.active(l.page.len()===f)};l.on("length.dt"+r.namespace,m);m()},destroy:function(l,m,r){l.off("length.dt"+r.namespace)}}}),init:function(f,g,l){var m=this;f.on("length.dt"+l.namespace,function(){m.text(l.text)})},destroy:function(f,g,
l){f.off("length.dt"+l.namespace)}}},spacer:{style:"empty",spacer:!0,text:function(a){return a.i18n("buttons.spacer","")}}});u.Api.register("buttons()",function(a,b){b===p&&(b=a,a=p);this.selector.buttonGroup=a;var c=this.iterator(!0,"table",function(e){if(e._buttons)return x.buttonSelector(x.instanceSelector(a,e._buttons),b)},!0);c._groupSelector=a;return c});u.Api.register("button()",function(a,b){a=this.buttons(a,b);1<a.length&&a.splice(1,a.length);return a});u.Api.registerPlural("buttons().active()",
"button().active()",function(a){return a===p?this.map(function(b){return b.inst.active(b.node)}):this.each(function(b){b.inst.active(b.node,a)})});u.Api.registerPlural("buttons().action()","button().action()",function(a){return a===p?this.map(function(b){return b.inst.action(b.node)}):this.each(function(b){b.inst.action(b.node,a)})});u.Api.registerPlural("buttons().collectionRebuild()","button().collectionRebuild()",function(a){return this.each(function(b){for(var c=0;c<a.length;c++)"object"===typeof a[c]&&
(a[c].parentConf=b);b.inst.collectionRebuild(b.node,a)})});u.Api.register(["buttons().enable()","button().enable()"],function(a){return this.each(function(b){b.inst.enable(b.node,a)})});u.Api.register(["buttons().disable()","button().disable()"],function(){return this.each(function(a){a.inst.disable(a.node)})});u.Api.register("button().index()",function(){var a=null;this.each(function(b){b=b.inst.index(b.node);null!==b&&(a=b)});return a});u.Api.registerPlural("buttons().nodes()","button().node()",
function(){var a=d();d(this.each(function(b){a=a.add(b.inst.node(b.node))}));return a});u.Api.registerPlural("buttons().processing()","button().processing()",function(a){return a===p?this.map(function(b){return b.inst.processing(b.node)}):this.each(function(b){b.inst.processing(b.node,a)})});u.Api.registerPlural("buttons().text()","button().text()",function(a){return a===p?this.map(function(b){return b.inst.text(b.node)}):this.each(function(b){b.inst.text(b.node,a)})});u.Api.registerPlural("buttons().trigger()",
"button().trigger()",function(){return this.each(function(a){a.inst.node(a.node).trigger("click")})});u.Api.register("button().popover()",function(a,b){return this.map(function(c){return c.inst._popover(a,this.button(this[0].node),b)})});u.Api.register("buttons().containers()",function(){var a=d(),b=this._groupSelector;this.iterator(!0,"table",function(c){if(c._buttons){c=x.instanceSelector(b,c._buttons);for(var e=0,h=c.length;e<h;e++)a=a.add(c[e].container())}});return a});u.Api.register("buttons().container()",
function(){return this.containers().eq(0)});u.Api.register("button().add()",function(a,b,c){var e=this.context;e.length&&(e=x.instanceSelector(this._groupSelector,e[0]._buttons),e.length&&e[0].add(b,a,c));return this.button(this._groupSelector,a)});u.Api.register("buttons().destroy()",function(){this.pluck("inst").unique().each(function(a){a.destroy()});return this});u.Api.registerPlural("buttons().remove()","buttons().remove()",function(){this.each(function(a){a.inst.remove(a.node)});return this});
var H;u.Api.register("buttons.info()",function(a,b,c){var e=this;if(!1===a)return this.off("destroy.btn-info"),J(d("#datatables_buttons_info"),400,function(){d(this).remove()}),clearTimeout(H),H=null,this;H&&clearTimeout(H);d("#datatables_buttons_info").length&&d("#datatables_buttons_info").remove();a=a?"<h2>"+a+"</h2>":"";I(d('<div id="datatables_buttons_info" class="dt-button-info"/>').html(a).append(d("<div/>")["string"===typeof b?"html":"append"](b)).css("display","none").appendTo("body"));c!==
p&&0!==c&&(H=setTimeout(function(){e.buttons.info(!1)},c));this.on("destroy.btn-info",function(){e.buttons.info(!1)});return this});u.Api.register("buttons.exportData()",function(a){if(this.context.length)return Q(new u.Api(this.context[0]),a)});u.Api.register("buttons.exportInfo()",function(a){a||(a={});var b=a;var c="*"===b.filename&&"*"!==b.title&&b.title!==p&&null!==b.title&&""!==b.title?b.title:b.filename;"function"===typeof c&&(c=c());c===p||null===c?c=null:(-1!==c.indexOf("*")&&(c=c.replace("*",
d("head > title").text()).trim()),c=c.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,""),(b=K(b.extension))||(b=""),c+=b);b=K(a.title);b=null===b?null:-1!==b.indexOf("*")?b.replace("*",d("head > title").text()||"Exported data"):b;return{filename:c,title:b,messageTop:N(this,a.message||a.messageTop,"top"),messageBottom:N(this,a.messageBottom,"bottom")}});var K=function(a){return null===a||a===p?null:"function"===typeof a?a():a},N=function(a,b,c){b=K(b);if(null===b)return null;a=d("caption",a.table().container()).eq(0);
return"*"===b?a.css("caption-side")!==c?null:a.length?a.text():"":b},M=d("<textarea/>")[0],Q=function(a,b){var c=d.extend(!0,{},{rows:null,columns:"",modifier:{search:"applied",order:"applied"},orthogonal:"display",stripHtml:!0,stripNewlines:!0,decodeEntities:!0,trim:!0,format:{header:function(t){return x.stripData(t,c)},footer:function(t){return x.stripData(t,c)},body:function(t){return x.stripData(t,c)}},customizeData:null},b);b=a.columns(c.columns).indexes().map(function(t){var y=a.column(t).header();
return c.format.header(y.innerHTML,t,y)}).toArray();var e=a.table().footer()?a.columns(c.columns).indexes().map(function(t){var y=a.column(t).footer();return c.format.footer(y?y.innerHTML:"",t,y)}).toArray():null,h=d.extend({},c.modifier);a.select&&"function"===typeof a.select.info&&h.selected===p&&a.rows(c.rows,d.extend({selected:!0},h)).any()&&d.extend(h,{selected:!0});h=a.rows(c.rows,h).indexes().toArray();var f=a.cells(h,c.columns);h=f.render(c.orthogonal).toArray();f=f.nodes().toArray();for(var g=
b.length,l=[],m=0,r=0,q=0<g?h.length/g:0;r<q;r++){for(var n=[g],k=0;k<g;k++)n[k]=c.format.body(h[m],r,k,f[m]),m++;l[r]=n}b={header:b,footer:e,body:l};c.customizeData&&c.customizeData(b);return b};d.fn.dataTable.Buttons=x;d.fn.DataTable.Buttons=x;d(C).on("init.dt plugin-init.dt",function(a,b){"dt"===a.namespace&&(a=b.oInit.buttons||u.defaults.buttons)&&!b._buttons&&(new x(b,a)).container()});u.ext.feature.push({fnInit:L,cFeature:"B"});u.ext.features&&u.ext.features.register("buttons",L);return x});

/*!
 Bootstrap integration for DataTables' Buttons
 ©2016 SpryMedia Ltd - datatables.net/license
*/
(function(c){"function"===typeof define&&define.amd?define(["jquery","datatables.net-bs4","datatables.net-buttons"],function(a){return c(a,window,document)}):"object"===typeof exports?module.exports=function(a,b){a||(a=window);b&&b.fn.dataTable||(b=require("datatables.net-bs4")(a,b).$);b.fn.dataTable.Buttons||require("datatables.net-buttons")(a,b);return c(b,a,a.document)}:c(jQuery,window,document)})(function(c,a,b,f){a=c.fn.dataTable;c.extend(!0,a.Buttons.defaults,{dom:{container:{className:"dt-buttons btn-group flex-wrap"},
button:{className:"btn btn-secondary"},collection:{tag:"div",className:"dropdown-menu",closeButton:!1,button:{tag:"a",className:"dt-button dropdown-item",active:"active",disabled:"disabled"}},splitWrapper:{tag:"div",className:"dt-btn-split-wrapper btn-group",closeButton:!1},splitDropdown:{tag:"button",text:"",className:"btn btn-secondary dt-btn-split-drop dropdown-toggle dropdown-toggle-split",closeButton:!1,align:"split-left",splitAlignClass:"dt-button-split-left"},splitDropdownButton:{tag:"button",
className:"dt-btn-split-drop-button btn btn-secondary",closeButton:!1}},buttonCreated:function(e,d){return e.buttons?c('<div class="btn-group"/>').append(d):d}});a.ext.buttons.collection.className+=" dropdown-toggle";a.ext.buttons.collection.rightAlignClassName="dropdown-menu-right";return a.Buttons});

/*!
   Copyright 2015-2021 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net/extensions/select
 Select for DataTables 1.4.0-dev
 2015-2021 SpryMedia Ltd - datatables.net/license/mit
*/
(function(h){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(r){return h(r,window,document)}):"object"===typeof exports?module.exports=function(r,w){r||(r=window);w&&w.fn.dataTable||(w=require("datatables.net")(r,w).$);return h(w,r,r.document)}:h(jQuery,window,document)})(function(h,r,w,l){function I(a,b,c){var d=function(g,f){if(g>f){var k=f;f=g;g=k}var n=!1;return a.columns(":visible").indexes().filter(function(q){q===g&&(n=!0);return q===f?(n=!1,!0):n})};var e=
function(g,f){var k=a.rows({search:"applied"}).indexes();if(k.indexOf(g)>k.indexOf(f)){var n=f;f=g;g=n}var q=!1;return k.filter(function(y){y===g&&(q=!0);return y===f?(q=!1,!0):q})};a.cells({selected:!0}).any()||c?(d=d(c.column,b.column),c=e(c.row,b.row)):(d=d(0,b.column),c=e(0,b.row));c=a.cells(c,d).flatten();a.cells(b,{selected:!0}).any()?a.cells(c).deselect():a.cells(c).select()}function C(a){var b=a.settings()[0]._select.selector;h(a.table().container()).off("mousedown.dtSelect",b).off("mouseup.dtSelect",
b).off("click.dtSelect",b);h("body").off("click.dtSelect"+D(a.table().node()))}function J(a){var b=h(a.table().container()),c=a.settings()[0],d=c._select.selector,e;b.on("mousedown.dtSelect",d,function(g){if(g.shiftKey||g.metaKey||g.ctrlKey)b.css("-moz-user-select","none").one("selectstart.dtSelect",d,function(){return!1});r.getSelection&&(e=r.getSelection())}).on("mouseup.dtSelect",d,function(){b.css("-moz-user-select","")}).on("click.dtSelect",d,function(g){var f=a.select.items();if(e){var k=r.getSelection();
if((!k.anchorNode||h(k.anchorNode).closest("table")[0]===a.table().node())&&k!==e)return}k=a.settings()[0];var n=a.settings()[0].oClasses.sWrapper.trim().replace(/ +/g,".");if(h(g.target).closest("div."+n)[0]==a.table().container()&&(n=a.cell(h(g.target).closest("td, th")),n.any())){var q=h.Event("user-select.dt");u(a,q,[f,n,g]);q.isDefaultPrevented()||(q=n.index(),"row"===f?(f=q.row,E(g,a,k,"row",f)):"column"===f?(f=n.index().column,E(g,a,k,"column",f)):"cell"===f&&(f=n.index(),E(g,a,k,"cell",f)),
k._select_lastCell=q)}});h("body").on("click.dtSelect"+D(a.table().node()),function(g){if(c._select.blurable&&!h(g.target).parents().filter(a.table().container()).length&&0!==h(g.target).parents("html").length&&!h(g.target).parents("div.DTE").length){var f=h.Event("select-blur.dt");u(a,f,[g.target,g]);f.isDefaultPrevented()||z(c,!0)}})}function u(a,b,c,d){if(!d||a.flatten().length)"string"===typeof b&&(b+=".dt"),c.unshift(a),h(a.table().node()).trigger(b,c)}function N(a){var b=a.settings()[0];if(b._select.info&&
b.aanFeatures.i&&"api"!==a.select.style()){var c=a.rows({selected:!0}).flatten().length,d=a.columns({selected:!0}).flatten().length,e=a.cells({selected:!0}).flatten().length,g=function(f,k,n){f.append(h('<span class="select-item"/>').append(a.i18n("select."+k+"s",{_:"%d "+k+"s selected",0:"",1:"1 "+k+" selected"},n)))};h.each(b.aanFeatures.i,function(f,k){k=h(k);f=h('<span class="select-info"/>');g(f,"row",c);g(f,"column",d);g(f,"cell",e);var n=k.children("span.select-info");n.length&&n.remove();
""!==f.text()&&k.append(f)})}}function O(a){var b=new m.Api(a);a._select_init=!0;a.aoRowCreatedCallback.push({fn:function(c,d,e){d=a.aoData[e];d._select_selected&&h(c).addClass(a._select.className);c=0;for(e=a.aoColumns.length;c<e;c++)(a.aoColumns[c]._select_selected||d._selected_cells&&d._selected_cells[c])&&h(d.anCells[c]).addClass(a._select.className)},sName:"select-deferRender"});b.on("preXhr.dt.dtSelect",function(c,d){if(d===b.settings()[0]){var e=b.rows({selected:!0}).ids(!0).filter(function(f){return f!==
l}),g=b.cells({selected:!0}).eq(0).map(function(f){var k=b.row(f.row).id(!0);return k?{row:k,column:f.column}:l}).filter(function(f){return f!==l});b.one("draw.dt.dtSelect",function(){b.rows(e).select();g.any()&&g.each(function(f){b.cells(f.row,f.column).select()})})}});b.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt",function(){N(b);b.state.save()});b.on("destroy.dtSelect",function(){b.rows({selected:!0}).deselect();C(b);b.off(".dtSelect");h("body").off(".dtSelect"+D(b.table().node()))})}
function K(a,b,c,d){var e=a[b+"s"]({search:"applied"}).indexes();d=h.inArray(d,e);var g=h.inArray(c,e);if(a[b+"s"]({selected:!0}).any()||-1!==d){if(d>g){var f=g;g=d;d=f}e.splice(g+1,e.length);e.splice(0,d)}else e.splice(h.inArray(c,e)+1,e.length);a[b](c,{selected:!0}).any()?(e.splice(h.inArray(c,e),1),a[b+"s"](e).deselect()):a[b+"s"](e).select()}function z(a,b){if(b||"single"===a._select.style)a=new m.Api(a),a.rows({selected:!0}).deselect(),a.columns({selected:!0}).deselect(),a.cells({selected:!0}).deselect()}
function E(a,b,c,d,e){var g=b.select.style(),f=b.select.toggleable(),k=b[d](e,{selected:!0}).any();if(!k||f)"os"===g?a.ctrlKey||a.metaKey?b[d](e).select(!k):a.shiftKey?"cell"===d?I(b,e,c._select_lastCell||null):K(b,d,e,c._select_lastCell?c._select_lastCell[d]:null):(a=b[d+"s"]({selected:!0}),k&&1===a.flatten().length?b[d](e).deselect():(a.deselect(),b[d](e).select())):"multi+shift"==g?a.shiftKey?"cell"===d?I(b,e,c._select_lastCell||null):K(b,d,e,c._select_lastCell?c._select_lastCell[d]:null):b[d](e).select(!k):
b[d](e).select(!k)}function D(a){return a.id.replace(/[^a-zA-Z0-9\-_]/g,"-")}function A(a,b){return function(c){return c.i18n("buttons."+a,b)}}function F(a){a=a._eventNamespace;return"draw.dt.DT"+a+" select.dt.DT"+a+" deselect.dt.DT"+a}function P(a,b){return-1!==h.inArray("rows",b.limitTo)&&a.rows({selected:!0}).any()||-1!==h.inArray("columns",b.limitTo)&&a.columns({selected:!0}).any()||-1!==h.inArray("cells",b.limitTo)&&a.cells({selected:!0}).any()?!0:!1}var m=h.fn.dataTable;m.select={};m.select.version=
"1.4.0-dev";m.select.init=function(a){var b=a.settings()[0];if(!b._select){var c=a.state.loaded(),d=function(t,G,p){if(null!==p&&p.select!==l){a.rows({selected:!0}).any()&&a.rows().deselect();p.select.rows!==l&&a.rows(p.select.rows).select();a.columns({selected:!0}).any()&&a.columns().deselect();p.select.columns!==l&&a.columns(p.select.columns).select();a.cells({selected:!0}).any()&&a.cells().deselect();if(p.select.cells!==l)for(t=0;t<p.select.cells.length;t++)a.cell(p.select.cells[t].row,p.select.cells[t].column).select();
a.state.save()}};a.one("init",function(){a.on("stateSaveParams",function(t,G,p){p.select={};p.select.rows=a.rows({selected:!0}).ids(!0).toArray();p.select.columns=a.columns({selected:!0})[0];p.select.cells=a.cells({selected:!0})[0].map(function(L){return{row:a.row(L.row).id(!0),column:L.column}})});d(l,l,c);a.on("stateLoaded stateLoadParams",d)});var e=b.oInit.select,g=m.defaults.select;e=e===l?g:e;g="row";var f="api",k=!1,n=!0,q=!0,y="td, th",M="selected",B=!1;b._select={};!0===e?(f="os",B=!0):"string"===
typeof e?(f=e,B=!0):h.isPlainObject(e)&&(e.blurable!==l&&(k=e.blurable),e.toggleable!==l&&(n=e.toggleable),e.info!==l&&(q=e.info),e.items!==l&&(g=e.items),f=e.style!==l?e.style:"os",B=!0,e.selector!==l&&(y=e.selector),e.className!==l&&(M=e.className));a.select.selector(y);a.select.items(g);a.select.style(f);a.select.blurable(k);a.select.toggleable(n);a.select.info(q);b._select.className=M;h.fn.dataTable.ext.order["select-checkbox"]=function(t,G){return this.api().column(G,{order:"index"}).nodes().map(function(p){return"row"===
t._select.items?h(p).parent().hasClass(t._select.className):"cell"===t._select.items?h(p).hasClass(t._select.className):!1})};!B&&h(a.table().node()).hasClass("selectable")&&a.select.style("os")}};h.each([{type:"row",prop:"aoData"},{type:"column",prop:"aoColumns"}],function(a,b){m.ext.selector[b.type].push(function(c,d,e){d=d.selected;var g=[];if(!0!==d&&!1!==d)return e;for(var f=0,k=e.length;f<k;f++){var n=c[b.prop][e[f]];(!0===d&&!0===n._select_selected||!1===d&&!n._select_selected)&&g.push(e[f])}return g})});
m.ext.selector.cell.push(function(a,b,c){b=b.selected;var d=[];if(b===l)return c;for(var e=0,g=c.length;e<g;e++){var f=a.aoData[c[e].row];(!0===b&&f._selected_cells&&!0===f._selected_cells[c[e].column]||!(!1!==b||f._selected_cells&&f._selected_cells[c[e].column]))&&d.push(c[e])}return d});var v=m.Api.register,x=m.Api.registerPlural;v("select()",function(){return this.iterator("table",function(a){m.select.init(new m.Api(a))})});v("select.blurable()",function(a){return a===l?this.context[0]._select.blurable:
this.iterator("table",function(b){b._select.blurable=a})});v("select.toggleable()",function(a){return a===l?this.context[0]._select.toggleable:this.iterator("table",function(b){b._select.toggleable=a})});v("select.info()",function(a){return a===l?this.context[0]._select.info:this.iterator("table",function(b){b._select.info=a})});v("select.items()",function(a){return a===l?this.context[0]._select.items:this.iterator("table",function(b){b._select.items=a;u(new m.Api(b),"selectItems",[a])})});v("select.style()",
function(a){return a===l?this.context[0]._select.style:this.iterator("table",function(b){b._select||m.select.init(new m.Api(b));b._select_init||O(b);b._select.style=a;var c=new m.Api(b);C(c);"api"!==a&&J(c);u(new m.Api(b),"selectStyle",[a])})});v("select.selector()",function(a){return a===l?this.context[0]._select.selector:this.iterator("table",function(b){C(new m.Api(b));b._select.selector=a;"api"!==b._select.style&&J(new m.Api(b))})});x("rows().select()","row().select()",function(a){var b=this;
if(!1===a)return this.deselect();this.iterator("row",function(c,d){z(c);c.aoData[d]._select_selected=!0;h(c.aoData[d].nTr).addClass(c._select.className)});this.iterator("table",function(c,d){u(b,"select",["row",b[d]],!0)});return this});v("row().selected()",function(){var a=this.context[0];return a&&this.length&&a.aoData[this[0]]&&a.aoData[this[0]]._select_selected?!0:!1});x("columns().select()","column().select()",function(a){var b=this;if(!1===a)return this.deselect();this.iterator("column",function(c,
d){z(c);c.aoColumns[d]._select_selected=!0;d=(new m.Api(c)).column(d);h(d.header()).addClass(c._select.className);h(d.footer()).addClass(c._select.className);d.nodes().to$().addClass(c._select.className)});this.iterator("table",function(c,d){u(b,"select",["column",b[d]],!0)});return this});v("column().selected()",function(){var a=this.context[0];return a&&this.length&&a.aoColumns[this[0]]&&a.aoColumns[this[0]]._select_selected?!0:!1});x("cells().select()","cell().select()",function(a){var b=this;
if(!1===a)return this.deselect();this.iterator("cell",function(c,d,e){z(c);d=c.aoData[d];d._selected_cells===l&&(d._selected_cells=[]);d._selected_cells[e]=!0;d.anCells&&h(d.anCells[e]).addClass(c._select.className)});this.iterator("table",function(c,d){u(b,"select",["cell",b.cells(b[d]).indexes().toArray()],!0)});return this});v("cell().selected()",function(){var a=this.context[0];return a&&this.length&&(a=a.aoData[this[0][0].row])&&a._selected_cells&&a._selected_cells[this[0][0].column]?!0:!1});
x("rows().deselect()","row().deselect()",function(){var a=this;this.iterator("row",function(b,c){b.aoData[c]._select_selected=!1;b._select_lastCell=null;h(b.aoData[c].nTr).removeClass(b._select.className)});this.iterator("table",function(b,c){u(a,"deselect",["row",a[c]],!0)});return this});x("columns().deselect()","column().deselect()",function(){var a=this;this.iterator("column",function(b,c){b.aoColumns[c]._select_selected=!1;var d=new m.Api(b),e=d.column(c);h(e.header()).removeClass(b._select.className);
h(e.footer()).removeClass(b._select.className);d.cells(null,c).indexes().each(function(g){var f=b.aoData[g.row],k=f._selected_cells;!f.anCells||k&&k[g.column]||h(f.anCells[g.column]).removeClass(b._select.className)})});this.iterator("table",function(b,c){u(a,"deselect",["column",a[c]],!0)});return this});x("cells().deselect()","cell().deselect()",function(){var a=this;this.iterator("cell",function(b,c,d){c=b.aoData[c];c._selected_cells!==l&&(c._selected_cells[d]=!1);c.anCells&&!b.aoColumns[d]._select_selected&&
h(c.anCells[d]).removeClass(b._select.className)});this.iterator("table",function(b,c){u(a,"deselect",["cell",a[c]],!0)});return this});var H=0;h.extend(m.ext.buttons,{selected:{text:A("selected","Selected"),className:"buttons-selected",limitTo:["rows","columns","cells"],init:function(a,b,c){var d=this;c._eventNamespace=".select"+H++;a.on(F(c),function(){d.enable(P(a,c))});this.disable()},destroy:function(a,b,c){a.off(c._eventNamespace)}},selectedSingle:{text:A("selectedSingle","Selected single"),
className:"buttons-selected-single",init:function(a,b,c){var d=this;c._eventNamespace=".select"+H++;a.on(F(c),function(){var e=a.rows({selected:!0}).flatten().length+a.columns({selected:!0}).flatten().length+a.cells({selected:!0}).flatten().length;d.enable(1===e)});this.disable()},destroy:function(a,b,c){a.off(c._eventNamespace)}},selectAll:{text:A("selectAll","Select all"),className:"buttons-select-all",action:function(){this[this.select.items()+"s"]().select()}},selectNone:{text:A("selectNone",
"Deselect all"),className:"buttons-select-none",action:function(){z(this.settings()[0],!0)},init:function(a,b,c){var d=this;c._eventNamespace=".select"+H++;a.on(F(c),function(){var e=a.rows({selected:!0}).flatten().length+a.columns({selected:!0}).flatten().length+a.cells({selected:!0}).flatten().length;d.enable(0<e)});this.disable()},destroy:function(a,b,c){a.off(c._eventNamespace)}}});h.each(["Row","Column","Cell"],function(a,b){var c=b.toLowerCase();m.ext.buttons["select"+b+"s"]={text:A("select"+
b+"s","Select "+c+"s"),className:"buttons-select-"+c+"s",action:function(){this.select.items(c)},init:function(d){var e=this;d.on("selectItems.dt.DT",function(g,f,k){e.active(k===c)})}}});h(w).on("preInit.dt.dtSelect",function(a,b){"dt"===a.namespace&&m.select.init(new m.Api(b))});return m.select});

/*!
 Bootstrap 4 styling wrapper for Select
 ©2018 SpryMedia Ltd - datatables.net/license
*/
(function(c){"function"===typeof define&&define.amd?define(["jquery","datatables.net-bs4","datatables.net-select"],function(a){return c(a,window,document)}):"object"===typeof exports?module.exports=function(a,b){a||(a=window);b&&b.fn.dataTable||(b=require("datatables.net-bs4")(a,b).$);b.fn.dataTable.select||require("datatables.net-select")(a,b);return c(b,a,a.document)}:c(jQuery,window,document)})(function(c,a,b,d){return c.fn.dataTable});

/*! Responsive 2.2.9
 * 2014-2021 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     Responsive
 * @description Responsive tables plug-in for DataTables
 * @version     2.2.9
 * @file        dataTables.responsive.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2014-2021 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license/mit
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */
(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				root = window;
			}

			if ( ! $ || ! $.fn.dataTable ) {
				$ = require('datatables.net')(root, $).$;
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}(function( $, window, document, undefined ) {
'use strict';
var DataTable = $.fn.dataTable;


/**
 * Responsive is a plug-in for the DataTables library that makes use of
 * DataTables' ability to change the visibility of columns, changing the
 * visibility of columns so the displayed columns fit into the table container.
 * The end result is that complex tables will be dynamically adjusted to fit
 * into the viewport, be it on a desktop, tablet or mobile browser.
 *
 * Responsive for DataTables has two modes of operation, which can used
 * individually or combined:
 *
 * * Class name based control - columns assigned class names that match the
 *   breakpoint logic can be shown / hidden as required for each breakpoint.
 * * Automatic control - columns are automatically hidden when there is no
 *   room left to display them. Columns removed from the right.
 *
 * In additional to column visibility control, Responsive also has built into
 * options to use DataTables' child row display to show / hide the information
 * from the table that has been hidden. There are also two modes of operation
 * for this child row display:
 *
 * * Inline - when the control element that the user can use to show / hide
 *   child rows is displayed inside the first column of the table.
 * * Column - where a whole column is dedicated to be the show / hide control.
 *
 * Initialisation of Responsive is performed by:
 *
 * * Adding the class `responsive` or `dt-responsive` to the table. In this case
 *   Responsive will automatically be initialised with the default configuration
 *   options when the DataTable is created.
 * * Using the `responsive` option in the DataTables configuration options. This
 *   can also be used to specify the configuration options, or simply set to
 *   `true` to use the defaults.
 *
 *  @class
 *  @param {object} settings DataTables settings object for the host table
 *  @param {object} [opts] Configuration options
 *  @requires jQuery 1.7+
 *  @requires DataTables 1.10.3+
 *
 *  @example
 *      $('#example').DataTable( {
 *        responsive: true
 *      } );
 *    } );
 */
var Responsive = function ( settings, opts ) {
	// Sanity check that we are using DataTables 1.10 or newer
	if ( ! DataTable.versionCheck || ! DataTable.versionCheck( '1.10.10' ) ) {
		throw 'DataTables Responsive requires DataTables 1.10.10 or newer';
	}

	this.s = {
		dt: new DataTable.Api( settings ),
		columns: [],
		current: []
	};

	// Check if responsive has already been initialised on this table
	if ( this.s.dt.settings()[0].responsive ) {
		return;
	}

	// details is an object, but for simplicity the user can give it as a string
	// or a boolean
	if ( opts && typeof opts.details === 'string' ) {
		opts.details = { type: opts.details };
	}
	else if ( opts && opts.details === false ) {
		opts.details = { type: false };
	}
	else if ( opts && opts.details === true ) {
		opts.details = { type: 'inline' };
	}

	this.c = $.extend( true, {}, Responsive.defaults, DataTable.defaults.responsive, opts );
	settings.responsive = this;
	this._constructor();
};

$.extend( Responsive.prototype, {
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Constructor
	 */

	/**
	 * Initialise the Responsive instance
	 *
	 * @private
	 */
	_constructor: function ()
	{
		var that = this;
		var dt = this.s.dt;
		var dtPrivateSettings = dt.settings()[0];
		var oldWindowWidth = $(window).innerWidth();

		dt.settings()[0]._responsive = this;

		// Use DataTables' throttle function to avoid processor thrashing on
		// resize
		$(window).on( 'resize.dtr orientationchange.dtr', DataTable.util.throttle( function () {
			// iOS has a bug whereby resize can fire when only scrolling
			// See: http://stackoverflow.com/questions/8898412
			var width = $(window).innerWidth();

			if ( width !== oldWindowWidth ) {
				that._resize();
				oldWindowWidth = width;
			}
		} ) );

		// DataTables doesn't currently trigger an event when a row is added, so
		// we need to hook into its private API to enforce the hidden rows when
		// new data is added
		dtPrivateSettings.oApi._fnCallbackReg( dtPrivateSettings, 'aoRowCreatedCallback', function (tr, data, idx) {
			if ( $.inArray( false, that.s.current ) !== -1 ) {
				$('>td, >th', tr).each( function ( i ) {
					var idx = dt.column.index( 'toData', i );

					if ( that.s.current[idx] === false ) {
						$(this).css('display', 'none');
					}
				} );
			}
		} );

		// Destroy event handler
		dt.on( 'destroy.dtr', function () {
			dt.off( '.dtr' );
			$( dt.table().body() ).off( '.dtr' );
			$(window).off( 'resize.dtr orientationchange.dtr' );
			dt.cells('.dtr-control').nodes().to$().removeClass('dtr-control');

			// Restore the columns that we've hidden
			$.each( that.s.current, function ( i, val ) {
				if ( val === false ) {
					that._setColumnVis( i, true );
				}
			} );
		} );

		// Reorder the breakpoints array here in case they have been added out
		// of order
		this.c.breakpoints.sort( function (a, b) {
			return a.width < b.width ? 1 :
				a.width > b.width ? -1 : 0;
		} );

		this._classLogic();
		this._resizeAuto();

		// Details handler
		var details = this.c.details;

		if ( details.type !== false ) {
			that._detailsInit();

			// DataTables will trigger this event on every column it shows and
			// hides individually
			dt.on( 'column-visibility.dtr', function () {
				// Use a small debounce to allow multiple columns to be set together
				if ( that._timer ) {
					clearTimeout( that._timer );
				}

				that._timer = setTimeout( function () {
					that._timer = null;

					that._classLogic();
					that._resizeAuto();
					that._resize(true);

					that._redrawChildren();
				}, 100 );
			} );

			// Redraw the details box on each draw which will happen if the data
			// has changed. This is used until DataTables implements a native
			// `updated` event for rows
			dt.on( 'draw.dtr', function () {
				that._redrawChildren();
			} );

			$(dt.table().node()).addClass( 'dtr-'+details.type );
		}

		dt.on( 'column-reorder.dtr', function (e, settings, details) {
			that._classLogic();
			that._resizeAuto();
			that._resize(true);
		} );

		// Change in column sizes means we need to calc
		dt.on( 'column-sizing.dtr', function () {
			that._resizeAuto();
			that._resize();
		});

		// DT2 let's us tell it if we are hiding columns
		dt.on( 'column-calc.dt', function (e, d) {
			var curr = that.s.current;

			for (var i=0 ; i<curr.length ; i++) {
				var idx = d.visible.indexOf(i);

				if (curr[i] === false && idx >= 0) {
					d.visible.splice(idx, 1);
				}
			}
		} );

		// On Ajax reload we want to reopen any child rows which are displayed
		// by responsive
		dt.on( 'preXhr.dtr', function () {
			var rowIds = [];
			dt.rows().every( function () {
				if ( this.child.isShown() ) {
					rowIds.push( this.id(true) );
				}
			} );

			dt.one( 'draw.dtr', function () {
				that._resizeAuto();
				that._resize();

				dt.rows( rowIds ).every( function () {
					that._detailsDisplay( this, false );
				} );
			} );
		});

		dt
			.on( 'draw.dtr', function () {
				that._controlClass();
			})
			.on( 'init.dtr', function (e, settings, details) {
				if ( e.namespace !== 'dt' ) {
					return;
				}

				that._resizeAuto();
				that._resize();

				// If columns were hidden, then DataTables needs to adjust the
				// column sizing
				if ( $.inArray( false, that.s.current ) ) {
					dt.columns.adjust();
				}
			} );

		// First pass - draw the table for the current viewport size
		this._resize();
	},


	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Private methods
	 */

	/**
	 * Calculate the visibility for the columns in a table for a given
	 * breakpoint. The result is pre-determined based on the class logic if
	 * class names are used to control all columns, but the width of the table
	 * is also used if there are columns which are to be automatically shown
	 * and hidden.
	 *
	 * @param  {string} breakpoint Breakpoint name to use for the calculation
	 * @return {array} Array of boolean values initiating the visibility of each
	 *   column.
	 *  @private
	 */
	_columnsVisiblity: function ( breakpoint )
	{
		var dt = this.s.dt;
		var columns = this.s.columns;
		var i, ien;

		// Create an array that defines the column ordering based first on the
		// column's priority, and secondly the column index. This allows the
		// columns to be removed from the right if the priority matches
		var order = columns
			.map( function ( col, idx ) {
				return {
					columnIdx: idx,
					priority: col.priority
				};
			} )
			.sort( function ( a, b ) {
				if ( a.priority !== b.priority ) {
					return a.priority - b.priority;
				}
				return a.columnIdx - b.columnIdx;
			} );

		// Class logic - determine which columns are in this breakpoint based
		// on the classes. If no class control (i.e. `auto`) then `-` is used
		// to indicate this to the rest of the function
		var display = $.map( columns, function ( col, i ) {
			if ( dt.column(i).visible() === false ) {
				return 'not-visible';
			}
			return col.auto && col.minWidth === null ?
				false :
				col.auto === true ?
					'-' :
					$.inArray( breakpoint, col.includeIn ) !== -1;
		} );

		// Auto column control - first pass: how much width is taken by the
		// ones that must be included from the non-auto columns
		var requiredWidth = 0;
		for ( i=0, ien=display.length ; i<ien ; i++ ) {
			if ( display[i] === true ) {
				requiredWidth += columns[i].minWidth;
			}
		}

		// Second pass, use up any remaining width for other columns. For
		// scrolling tables we need to subtract the width of the scrollbar. It
		// may not be requires which makes this sub-optimal, but it would
		// require another full redraw to make complete use of those extra few
		// pixels
		var scrolling = dt.settings()[0].oScroll;
		var bar = scrolling.sY || scrolling.sX ? scrolling.iBarWidth : 0;
		var widthAvailable = dt.table().container().offsetWidth - bar;
		var usedWidth = widthAvailable - requiredWidth;

		// Control column needs to always be included. This makes it sub-
		// optimal in terms of using the available with, but to stop layout
		// thrashing or overflow. Also we need to account for the control column
		// width first so we know how much width is available for the other
		// columns, since the control column might not be the first one shown
		for ( i=0, ien=display.length ; i<ien ; i++ ) {
			if ( columns[i].control ) {
				usedWidth -= columns[i].minWidth;
			}
		}

		// Allow columns to be shown (counting by priority and then right to
		// left) until we run out of room
		var empty = false;
		for ( i=0, ien=order.length ; i<ien ; i++ ) {
			var colIdx = order[i].columnIdx;

			if ( display[colIdx] === '-' && ! columns[colIdx].control && columns[colIdx].minWidth ) {
				// Once we've found a column that won't fit we don't let any
				// others display either, or columns might disappear in the
				// middle of the table
				if ( empty || usedWidth - columns[colIdx].minWidth < 0 ) {
					empty = true;
					display[colIdx] = false;
				}
				else {
					display[colIdx] = true;
				}

				usedWidth -= columns[colIdx].minWidth;
			}
		}

		// Determine if the 'control' column should be shown (if there is one).
		// This is the case when there is a hidden column (that is not the
		// control column). The two loops look inefficient here, but they are
		// trivial and will fly through. We need to know the outcome from the
		// first , before the action in the second can be taken
		var showControl = false;

		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			if ( ! columns[i].control && ! columns[i].never && display[i] === false ) {
				showControl = true;
				break;
			}
		}

		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			if ( columns[i].control ) {
				display[i] = showControl;
			}

			// Replace not visible string with false from the control column detection above
			if ( display[i] === 'not-visible' ) {
				display[i] = false;
			}
		}

		// Finally we need to make sure that there is at least one column that
		// is visible
		if ( $.inArray( true, display ) === -1 ) {
			display[0] = true;
		}

		return display;
	},


	/**
	 * Create the internal `columns` array with information about the columns
	 * for the table. This includes determining which breakpoints the column
	 * will appear in, based upon class names in the column, which makes up the
	 * vast majority of this method.
	 *
	 * @private
	 */
	_classLogic: function ()
	{
		var that = this;
		var calc = {};
		var breakpoints = this.c.breakpoints;
		var dt = this.s.dt;
		var columns = dt.columns().eq(0).map( function (i) {
			var column = this.column(i);
			var className = column.header().className;
			var priority = dt.settings()[0].aoColumns[i].responsivePriority;
			var dataPriority = column.header().getAttribute('data-priority');

			if ( priority === undefined ) {
				priority = dataPriority === undefined || dataPriority === null?
					10000 :
					dataPriority * 1;
			}

			return {
				className: className,
				includeIn: [],
				auto:      false,
				control:   false,
				never:     className.match(/\b(dtr\-)?never\b/) ? true : false,
				priority:  priority
			};
		} );

		// Simply add a breakpoint to `includeIn` array, ensuring that there are
		// no duplicates
		var add = function ( colIdx, name ) {
			var includeIn = columns[ colIdx ].includeIn;

			if ( $.inArray( name, includeIn ) === -1 ) {
				includeIn.push( name );
			}
		};

		var column = function ( colIdx, name, operator, matched ) {
			var size, i, ien;

			if ( ! operator ) {
				columns[ colIdx ].includeIn.push( name );
			}
			else if ( operator === 'max-' ) {
				// Add this breakpoint and all smaller
				size = that._find( name ).width;

				for ( i=0, ien=breakpoints.length ; i<ien ; i++ ) {
					if ( breakpoints[i].width <= size ) {
						add( colIdx, breakpoints[i].name );
					}
				}
			}
			else if ( operator === 'min-' ) {
				// Add this breakpoint and all larger
				size = that._find( name ).width;

				for ( i=0, ien=breakpoints.length ; i<ien ; i++ ) {
					if ( breakpoints[i].width >= size ) {
						add( colIdx, breakpoints[i].name );
					}
				}
			}
			else if ( operator === 'not-' ) {
				// Add all but this breakpoint
				for ( i=0, ien=breakpoints.length ; i<ien ; i++ ) {
					if ( breakpoints[i].name.indexOf( matched ) === -1 ) {
						add( colIdx, breakpoints[i].name );
					}
				}
			}
		};

		// Loop over each column and determine if it has a responsive control
		// class
		columns.each( function ( col, i ) {
			var classNames = col.className.split(' ');
			var hasClass = false;

			// Split the class name up so multiple rules can be applied if needed
			for ( var k=0, ken=classNames.length ; k<ken ; k++ ) {
				var className = classNames[k].trim();

				if ( className === 'all' || className === 'dtr-all' ) {
					// Include in all
					hasClass = true;
					col.includeIn = $.map( breakpoints, function (a) {
						return a.name;
					} );
					return;
				}
				else if ( className === 'none' || className === 'dtr-none' || col.never ) {
					// Include in none (default) and no auto
					hasClass = true;
					return;
				}
				else if ( className === 'control' || className === 'dtr-control' ) {
					// Special column that is only visible, when one of the other
					// columns is hidden. This is used for the details control
					hasClass = true;
					col.control = true;
					return;
				}

				$.each( breakpoints, function ( j, breakpoint ) {
					// Does this column have a class that matches this breakpoint?
					var brokenPoint = breakpoint.name.split('-');
					var re = new RegExp( '(min\\-|max\\-|not\\-)?('+brokenPoint[0]+')(\\-[_a-zA-Z0-9])?' );
					var match = className.match( re );

					if ( match ) {
						hasClass = true;

						if ( match[2] === brokenPoint[0] && match[3] === '-'+brokenPoint[1] ) {
							// Class name matches breakpoint name fully
							column( i, breakpoint.name, match[1], match[2]+match[3] );
						}
						else if ( match[2] === brokenPoint[0] && ! match[3] ) {
							// Class name matched primary breakpoint name with no qualifier
							column( i, breakpoint.name, match[1], match[2] );
						}
					}
				} );
			}

			// If there was no control class, then automatic sizing is used
			if ( ! hasClass ) {
				col.auto = true;
			}
		} );

		this.s.columns = columns;
	},

	/**
	 * Update the cells to show the correct control class / button
	 * @private
	 */
	_controlClass: function ()
	{
		if ( this.c.details.type === 'inline' ) {
			var dt = this.s.dt;
			var columnsVis = this.s.current;
			var firstVisible = $.inArray(true, columnsVis);

			// Remove from any cells which shouldn't have it
			dt.cells(
				null,
				function(idx) {
					return idx !== firstVisible;
				},
				{page: 'current'}
			)
				.nodes()
				.to$()
				.filter('.dtr-control')
				.removeClass('dtr-control');

			dt.cells(null, firstVisible, {page: 'current'})
				.nodes()
				.to$()
				.addClass('dtr-control');
		}
	},

	/**
	 * Show the details for the child row
	 *
	 * @param  {DataTables.Api} row    API instance for the row
	 * @param  {boolean}        update Update flag
	 * @private
	 */
	_detailsDisplay: function ( row, update )
	{
		var that = this;
		var dt = this.s.dt;
		var details = this.c.details;

		if ( details && details.type !== false ) {
			var renderer = typeof details.renderer === 'string'
				? Responsive.renderer[details.renderer]()
				: details.renderer;

			var res = details.display( row, update, function () {
				return renderer(
					dt, row[0], that._detailsObj(row[0])
				);
			} );

			if ( res === true || res === false ) {
				$(dt.table().node()).triggerHandler( 'responsive-display.dt', [dt, row, res, update] );
			}
		}
	},


	/**
	 * Initialisation for the details handler
	 *
	 * @private
	 */
	_detailsInit: function ()
	{
		var that    = this;
		var dt      = this.s.dt;
		var details = this.c.details;

		// The inline type always uses the first child as the target
		if ( details.type === 'inline' ) {
			details.target = 'td.dtr-control, th.dtr-control';
		}

		// Keyboard accessibility
		dt.on( 'draw.dtr', function () {
			that._tabIndexes();
		} );
		that._tabIndexes(); // Initial draw has already happened

		$( dt.table().body() ).on( 'keyup.dtr', 'td, th', function (e) {
			if ( e.keyCode === 13 && $(this).data('dtr-keyboard') ) {
				$(this).click();
			}
		} );

		// type.target can be a string jQuery selector or a column index
		var target   = details.target;
		var selector = typeof target === 'string' ? target : 'td, th';

		if ( target !== undefined || target !== null ) {
			// Click handler to show / hide the details rows when they are available
			$( dt.table().body() )
				.on( 'click.dtr mousedown.dtr mouseup.dtr', selector, function (e) {
					// If the table is not collapsed (i.e. there is no hidden columns)
					// then take no action
					if ( ! $(dt.table().node()).hasClass('collapsed' ) ) {
						return;
					}

					// Check that the row is actually a DataTable's controlled node
					if ( $.inArray( $(this).closest('tr').get(0), dt.rows().nodes().toArray() ) === -1 ) {
						return;
					}

					// For column index, we determine if we should act or not in the
					// handler - otherwise it is already okay
					if ( typeof target === 'number' ) {
						var targetIdx = target < 0 ?
							dt.columns().eq(0).length + target :
							target;

						if ( dt.cell( this ).index().column !== targetIdx ) {
							return;
						}
					}

					// $().closest() includes itself in its check
					var row = dt.row( $(this).closest('tr') );

					// Check event type to do an action
					if ( e.type === 'click' ) {
						// The renderer is given as a function so the caller can execute it
						// only when they need (i.e. if hiding there is no point is running
						// the renderer)
						that._detailsDisplay( row, false );
					}
					else if ( e.type === 'mousedown' ) {
						// For mouse users, prevent the focus ring from showing
						$(this).css('outline', 'none');
					}
					else if ( e.type === 'mouseup' ) {
						// And then re-allow at the end of the click
						$(this).trigger('blur').css('outline', '');
					}
				} );
		}
	},


	/**
	 * Get the details to pass to a renderer for a row
	 * @param  {int} rowIdx Row index
	 * @private
	 */
	_detailsObj: function ( rowIdx )
	{
		var that = this;
		var dt = this.s.dt;

		return $.map( this.s.columns, function( col, i ) {
			// Never and control columns should not be passed to the renderer
			if ( col.never || col.control ) {
				return;
			}

			var dtCol = dt.settings()[0].aoColumns[ i ];

			return {
				className:   dtCol.sClass,
				columnIndex: i,
				data:        dt.cell( rowIdx, i ).render( that.c.orthogonal ),
				hidden:      dt.column( i ).visible() && !that.s.current[ i ],
				rowIndex:    rowIdx,
				title:       dtCol.sTitle !== null ?
					dtCol.sTitle :
					$(dt.column(i).header()).text()
			};
		} );
	},


	/**
	 * Find a breakpoint object from a name
	 *
	 * @param  {string} name Breakpoint name to find
	 * @return {object}      Breakpoint description object
	 * @private
	 */
	_find: function ( name )
	{
		var breakpoints = this.c.breakpoints;

		for ( var i=0, ien=breakpoints.length ; i<ien ; i++ ) {
			if ( breakpoints[i].name === name ) {
				return breakpoints[i];
			}
		}
	},


	/**
	 * Re-create the contents of the child rows as the display has changed in
	 * some way.
	 *
	 * @private
	 */
	_redrawChildren: function ()
	{
		var that = this;
		var dt = this.s.dt;

		dt.rows( {page: 'current'} ).iterator( 'row', function ( settings, idx ) {
			var row = dt.row( idx );

			that._detailsDisplay( dt.row( idx ), true );
		} );
	},


	/**
	 * Alter the table display for a resized viewport. This involves first
	 * determining what breakpoint the window currently is in, getting the
	 * column visibilities to apply and then setting them.
	 *
	 * @param  {boolean} forceRedraw Force a redraw
	 * @private
	 */
	_resize: function (forceRedraw)
	{
		var that = this;
		var dt = this.s.dt;
		var width = $(window).innerWidth();
		var breakpoints = this.c.breakpoints;
		var breakpoint = breakpoints[0].name;
		var columns = this.s.columns;
		var i, ien;
		var oldVis = this.s.current.slice();

		// Determine what breakpoint we are currently at
		for ( i=breakpoints.length-1 ; i>=0 ; i-- ) {
			if ( width <= breakpoints[i].width ) {
				breakpoint = breakpoints[i].name;
				break;
			}
		}
		
		// Show the columns for that break point
		var columnsVis = this._columnsVisiblity( breakpoint );
		this.s.current = columnsVis;

		// Set the class before the column visibility is changed so event
		// listeners know what the state is. Need to determine if there are
		// any columns that are not visible but can be shown
		var collapsedClass = false;
	
		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			if ( columnsVis[i] === false && ! columns[i].never && ! columns[i].control && ! dt.column(i).visible() === false ) {
				collapsedClass = true;
				break;
			}
		}

		$( dt.table().node() ).toggleClass( 'collapsed', collapsedClass );

		var changed = false;
		var visible = 0;

		dt.columns().eq(0).each( function ( colIdx, i ) {
			if ( columnsVis[i] === true ) {
				visible++;
			}

			if ( forceRedraw || columnsVis[i] !== oldVis[i] ) {
				changed = true;
				that._setColumnVis( colIdx, columnsVis[i] );
			}
		} );

		if ( changed ) {
			this._redrawChildren();

			// Inform listeners of the change
			$(dt.table().node()).trigger( 'responsive-resize.dt', [dt, this.s.current] );

			// If no records, update the "No records" display element
			if ( dt.page.info().recordsDisplay === 0 ) {
				$('td', dt.table().body()).eq(0).attr('colspan', visible);
			}
		}

		that._controlClass();
	},


	/**
	 * Determine the width of each column in the table so the auto column hiding
	 * has that information to work with. This method is never going to be 100%
	 * perfect since column widths can change slightly per page, but without
	 * seriously compromising performance this is quite effective.
	 *
	 * @private
	 */
	_resizeAuto: function ()
	{
		var dt = this.s.dt;
		var columns = this.s.columns;

		// Are we allowed to do auto sizing?
		if ( ! this.c.auto ) {
			return;
		}

		// Are there any columns that actually need auto-sizing, or do they all
		// have classes defined
		if ( $.inArray( true, $.map( columns, function (c) { return c.auto; } ) ) === -1 ) {
			return;
		}

		// Need to restore all children. They will be reinstated by a re-render
		if ( ! $.isEmptyObject( _childNodeStore ) ) {
			$.each( _childNodeStore, function ( key ) {
				var idx = key.split('-');

				_childNodesRestore( dt, idx[0]*1, idx[1]*1 );
			} );
		}

		// Clone the table with the current data in it
		var tableWidth   = dt.table().node().offsetWidth;
		var columnWidths = dt.columns;
		var clonedTable  = dt.table().node().cloneNode( false );
		var clonedHeader = $( dt.table().header().cloneNode( false ) ).appendTo( clonedTable );
		var clonedBody   = $( dt.table().body() ).clone( false, false ).empty().appendTo( clonedTable ); // use jQuery because of IE8

		clonedTable.style.width = 'auto';

		// Header
		var headerCells = dt.columns()
			.header()
			.filter( function (idx) {
				return dt.column(idx).visible();
			} )
			.to$()
			.clone( false )
			.css( 'display', 'table-cell' )
			.css( 'width', 'auto' )
			.css( 'min-width', 0 );

		// Body rows - we don't need to take account of DataTables' column
		// visibility since we implement our own here (hence the `display` set)
		$(clonedBody)
			.append( $(dt.rows( { page: 'current' } ).nodes()).clone( false ) )
			.find( 'th, td' ).css( 'display', '' );

		// Footer
		var footer = dt.table().footer();
		if ( footer ) {
			var clonedFooter = $( footer.cloneNode( false ) ).appendTo( clonedTable );
			var footerCells = dt.columns()
				.footer()
				.filter( function (idx) {
					return dt.column(idx).visible();
				} )
				.to$()
				.clone( false )
				.css( 'display', 'table-cell' );

			$('<tr/>')
				.append( footerCells )
				.appendTo( clonedFooter );
		}

		$('<tr/>')
			.append( headerCells )
			.appendTo( clonedHeader );

		// In the inline case extra padding is applied to the first column to
		// give space for the show / hide icon. We need to use this in the
		// calculation
		if ( this.c.details.type === 'inline' ) {
			$(clonedTable).addClass( 'dtr-inline collapsed' );
		}
		
		// It is unsafe to insert elements with the same name into the DOM
		// multiple times. For example, cloning and inserting a checked radio
		// clears the chcecked state of the original radio.
		$( clonedTable ).find( '[name]' ).removeAttr( 'name' );

		// A position absolute table would take the table out of the flow of
		// our container element, bypassing the height and width (Scroller)
		$( clonedTable ).css( 'position', 'relative' )
		
		var inserted = $('<div/>')
			.css( {
				width: 1,
				height: 1,
				overflow: 'hidden',
				clear: 'both'
			} )
			.append( clonedTable );

		inserted.insertBefore( dt.table().node() );

		// The cloned header now contains the smallest that each column can be
		headerCells.each( function (i) {
			var idx = dt.column.index( 'fromVisible', i );
			columns[ idx ].minWidth =  this.offsetWidth || 0;
		} );

		inserted.remove();
	},

	/**
	 * Get the state of the current hidden columns - controlled by Responsive only
	 */
	_responsiveOnlyHidden: function ()
	{
		var dt = this.s.dt;

		return $.map( this.s.current, function (v, i) {
			// If the column is hidden by DataTables then it can't be hidden by
			// Responsive!
			if ( dt.column(i).visible() === false ) {
				return true;
			}
			return v;
		} );
	},

	/**
	 * Set a column's visibility.
	 *
	 * We don't use DataTables' column visibility controls in order to ensure
	 * that column visibility can Responsive can no-exist. Since only IE8+ is
	 * supported (and all evergreen browsers of course) the control of the
	 * display attribute works well.
	 *
	 * @param {integer} col      Column index
	 * @param {boolean} showHide Show or hide (true or false)
	 * @private
	 */
	_setColumnVis: function ( col, showHide )
	{
		var dt = this.s.dt;
		var display = showHide ? '' : 'none'; // empty string will remove the attr

		$( dt.column( col ).header() )
			.css( 'display', display )
			.toggleClass('dtr-hidden', !showHide);

		$( dt.column( col ).footer() )
			.css( 'display', display )
			.toggleClass('dtr-hidden', !showHide);

		dt.column( col ).nodes().to$()
			.css( 'display', display )
			.toggleClass('dtr-hidden', !showHide);

		// If the are child nodes stored, we might need to reinsert them
		if ( ! $.isEmptyObject( _childNodeStore ) ) {
			dt.cells( null, col ).indexes().each( function (idx) {
				_childNodesRestore( dt, idx.row, idx.column );
			} );
		}
	},


	/**
	 * Update the cell tab indexes for keyboard accessibility. This is called on
	 * every table draw - that is potentially inefficient, but also the least
	 * complex option given that column visibility can change on the fly. Its a
	 * shame user-focus was removed from CSS 3 UI, as it would have solved this
	 * issue with a single CSS statement.
	 *
	 * @private
	 */
	_tabIndexes: function ()
	{
		var dt = this.s.dt;
		var cells = dt.cells( { page: 'current' } ).nodes().to$();
		var ctx = dt.settings()[0];
		var target = this.c.details.target;

		cells.filter( '[data-dtr-keyboard]' ).removeData( '[data-dtr-keyboard]' );

		if ( typeof target === 'number' ) {
			dt.cells( null, target, { page: 'current' } ).nodes().to$()
				.attr( 'tabIndex', ctx.iTabIndex )
				.data( 'dtr-keyboard', 1 );
		}
		else {
			// This is a bit of a hack - we need to limit the selected nodes to just
			// those of this table
			if ( target === 'td:first-child, th:first-child' ) {
				target = '>td:first-child, >th:first-child';
			}

			$( target, dt.rows( { page: 'current' } ).nodes() )
				.attr( 'tabIndex', ctx.iTabIndex )
				.data( 'dtr-keyboard', 1 );
		}
	}
} );


/**
 * List of default breakpoints. Each item in the array is an object with two
 * properties:
 *
 * * `name` - the breakpoint name.
 * * `width` - the breakpoint width
 *
 * @name Responsive.breakpoints
 * @static
 */
Responsive.breakpoints = [
	{ name: 'desktop',  width: Infinity },
	{ name: 'tablet-l', width: 1024 },
	{ name: 'tablet-p', width: 768 },
	{ name: 'mobile-l', width: 480 },
	{ name: 'mobile-p', width: 320 }
];


/**
 * Display methods - functions which define how the hidden data should be shown
 * in the table.
 *
 * @namespace
 * @name Responsive.defaults
 * @static
 */
Responsive.display = {
	childRow: function ( row, update, render ) {
		if ( update ) {
			if ( $(row.node()).hasClass('parent') ) {
				row.child( render(), 'child' ).show();

				return true;
			}
		}
		else {
			if ( ! row.child.isShown()  ) {
				row.child( render(), 'child' ).show();
				$( row.node() ).addClass( 'parent' );

				return true;
			}
			else {
				row.child( false );
				$( row.node() ).removeClass( 'parent' );

				return false;
			}
		}
	},

	childRowImmediate: function ( row, update, render ) {
		if ( (! update && row.child.isShown()) || ! row.responsive.hasHidden() ) {
			// User interaction and the row is show, or nothing to show
			row.child( false );
			$( row.node() ).removeClass( 'parent' );

			return false;
		}
		else {
			// Display
			row.child( render(), 'child' ).show();
			$( row.node() ).addClass( 'parent' );

			return true;
		}
	},

	// This is a wrapper so the modal options for Bootstrap and jQuery UI can
	// have options passed into them. This specific one doesn't need to be a
	// function but it is for consistency in the `modal` name
	modal: function ( options ) {
		return function ( row, update, render ) {
			if ( ! update ) {
				// Show a modal
				var close = function () {
					modal.remove(); // will tidy events for us
					$(document).off( 'keypress.dtr' );
				};

				var modal = $('<div class="dtr-modal"/>')
					.append( $('<div class="dtr-modal-display"/>')
						.append( $('<div class="dtr-modal-content"/>')
							.append( render() )
						)
						.append( $('<div class="dtr-modal-close">&times;</div>' )
							.click( function () {
								close();
							} )
						)
					)
					.append( $('<div class="dtr-modal-background"/>')
						.click( function () {
							close();
						} )
					)
					.appendTo( 'body' );

				$(document).on( 'keyup.dtr', function (e) {
					if ( e.keyCode === 27 ) {
						e.stopPropagation();

						close();
					}
				} );
			}
			else {
				$('div.dtr-modal-content')
					.empty()
					.append( render() );
			}

			if ( options && options.header ) {
				$('div.dtr-modal-content').prepend(
					'<h2>'+options.header( row )+'</h2>'
				);
			}
		};
	}
};


var _childNodeStore = {};

function _childNodes( dt, row, col ) {
	var name = row+'-'+col;

	if ( _childNodeStore[ name ] ) {
		return _childNodeStore[ name ];
	}

	// https://jsperf.com/childnodes-array-slice-vs-loop
	var nodes = [];
	var children = dt.cell( row, col ).node().childNodes;
	for ( var i=0, ien=children.length ; i<ien ; i++ ) {
		nodes.push( children[i] );
	}

	_childNodeStore[ name ] = nodes;

	return nodes;
}

function _childNodesRestore( dt, row, col ) {
	var name = row+'-'+col;

	if ( ! _childNodeStore[ name ] ) {
		return;
	}

	var node = dt.cell( row, col ).node();
	var store = _childNodeStore[ name ];
	var parent = store[0].parentNode;
	var parentChildren = parent.childNodes;
	var a = [];

	for ( var i=0, ien=parentChildren.length ; i<ien ; i++ ) {
		a.push( parentChildren[i] );
	}

	for ( var j=0, jen=a.length ; j<jen ; j++ ) {
		node.appendChild( a[j] );
	}

	_childNodeStore[ name ] = undefined;
}


/**
 * Display methods - functions which define how the hidden data should be shown
 * in the table.
 *
 * @namespace
 * @name Responsive.defaults
 * @static
 */
Responsive.renderer = {
	listHiddenNodes: function () {
		return function ( api, rowIdx, columns ) {
			var ul = $('<ul data-dtr-index="'+rowIdx+'" class="dtr-details"/>');
			var found = false;

			var data = $.each( columns, function ( i, col ) {
				if ( col.hidden ) {
					var klass = col.className ?
						'class="'+ col.className +'"' :
						'';
	
					$(
						'<li '+klass+' data-dtr-index="'+col.columnIndex+'" data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
							'<span class="dtr-title">'+
								col.title+
							'</span> '+
						'</li>'
					)
						.append( $('<span class="dtr-data"/>').append( _childNodes( api, col.rowIndex, col.columnIndex ) ) )// api.cell( col.rowIndex, col.columnIndex ).node().childNodes ) )
						.appendTo( ul );

					found = true;
				}
			} );

			return found ?
				ul :
				false;
		};
	},

	listHidden: function () {
		return function ( api, rowIdx, columns ) {
			var data = $.map( columns, function ( col ) {
				var klass = col.className ?
					'class="'+ col.className +'"' :
					'';

				return col.hidden ?
					'<li '+klass+' data-dtr-index="'+col.columnIndex+'" data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
						'<span class="dtr-title">'+
							col.title+
						'</span> '+
						'<span class="dtr-data">'+
							col.data+
						'</span>'+
					'</li>' :
					'';
			} ).join('');

			return data ?
				$('<ul data-dtr-index="'+rowIdx+'" class="dtr-details"/>').append( data ) :
				false;
		}
	},

	tableAll: function ( options ) {
		options = $.extend( {
			tableClass: ''
		}, options );

		return function ( api, rowIdx, columns ) {
			var data = $.map( columns, function ( col ) {
				var klass = col.className ?
					'class="'+ col.className +'"' :
					'';

				return '<tr '+klass+' data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
						'<td>'+col.title+':'+'</td> '+
						'<td>'+col.data+'</td>'+
					'</tr>';
			} ).join('');

			return $('<table class="'+options.tableClass+' dtr-details" width="100%"/>').append( data );
		}
	}
};

/**
 * Responsive default settings for initialisation
 *
 * @namespace
 * @name Responsive.defaults
 * @static
 */
Responsive.defaults = {
	/**
	 * List of breakpoints for the instance. Note that this means that each
	 * instance can have its own breakpoints. Additionally, the breakpoints
	 * cannot be changed once an instance has been creased.
	 *
	 * @type {Array}
	 * @default Takes the value of `Responsive.breakpoints`
	 */
	breakpoints: Responsive.breakpoints,

	/**
	 * Enable / disable auto hiding calculations. It can help to increase
	 * performance slightly if you disable this option, but all columns would
	 * need to have breakpoint classes assigned to them
	 *
	 * @type {Boolean}
	 * @default  `true`
	 */
	auto: true,

	/**
	 * Details control. If given as a string value, the `type` property of the
	 * default object is set to that value, and the defaults used for the rest
	 * of the object - this is for ease of implementation.
	 *
	 * The object consists of the following properties:
	 *
	 * * `display` - A function that is used to show and hide the hidden details
	 * * `renderer` - function that is called for display of the child row data.
	 *   The default function will show the data from the hidden columns
	 * * `target` - Used as the selector for what objects to attach the child
	 *   open / close to
	 * * `type` - `false` to disable the details display, `inline` or `column`
	 *   for the two control types
	 *
	 * @type {Object|string}
	 */
	details: {
		display: Responsive.display.childRow,

		renderer: Responsive.renderer.listHidden(),

		target: 0,

		type: 'inline'
	},

	/**
	 * Orthogonal data request option. This is used to define the data type
	 * requested when Responsive gets the data to show in the child row.
	 *
	 * @type {String}
	 */
	orthogonal: 'display'
};


/*
 * API
 */
var Api = $.fn.dataTable.Api;

// Doesn't do anything - work around for a bug in DT... Not documented
Api.register( 'responsive()', function () {
	return this;
} );

Api.register( 'responsive.index()', function ( li ) {
	li = $(li);

	return {
		column: li.data('dtr-index'),
		row:    li.parent().data('dtr-index')
	};
} );

Api.register( 'responsive.rebuild()', function () {
	return this.iterator( 'table', function ( ctx ) {
		if ( ctx._responsive ) {
			ctx._responsive._classLogic();
		}
	} );
} );

Api.register( 'responsive.recalc()', function () {
	return this.iterator( 'table', function ( ctx ) {
		if ( ctx._responsive ) {
			ctx._responsive._resizeAuto();
			ctx._responsive._resize();
		}
	} );
} );

Api.register( 'responsive.hasHidden()', function () {
	var ctx = this.context[0];

	return ctx._responsive ?
		$.inArray( false, ctx._responsive._responsiveOnlyHidden() ) !== -1 :
		false;
} );

Api.registerPlural( 'columns().responsiveHidden()', 'column().responsiveHidden()', function () {
	return this.iterator( 'column', function ( settings, column ) {
		return settings._responsive ?
			settings._responsive._responsiveOnlyHidden()[ column ] :
			false;
	}, 1 );
} );


/**
 * Version information
 *
 * @name Responsive.version
 * @static
 */
Responsive.version = '2.2.9';


$.fn.dataTable.Responsive = Responsive;
$.fn.DataTable.Responsive = Responsive;

// Attach a listener to the document which listens for DataTables initialisation
// events so we can automatically initialise
$(document).on( 'preInit.dt.dtr', function (e, settings, json) {
	if ( e.namespace !== 'dt' ) {
		return;
	}

	if ( $(settings.nTable).hasClass( 'responsive' ) ||
		 $(settings.nTable).hasClass( 'dt-responsive' ) ||
		 settings.oInit.responsive ||
		 DataTable.defaults.responsive
	) {
		var init = settings.oInit.responsive;

		if ( init !== false ) {
			new Responsive( settings, $.isPlainObject( init ) ? init : {}  );
		}
	}
} );


return Responsive;
}));

/*! Bootstrap 4 integration for DataTables' Responsive
 * ©2016 SpryMedia Ltd - datatables.net/license
 */

(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net-bs4', 'datatables.net-responsive'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				root = window;
			}

			if ( ! $ || ! $.fn.dataTable ) {
				$ = require('datatables.net-bs4')(root, $).$;
			}

			if ( ! $.fn.dataTable.Responsive ) {
				require('datatables.net-responsive')(root, $);
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}(function( $, window, document, undefined ) {
'use strict';
var DataTable = $.fn.dataTable;


var _display = DataTable.Responsive.display;
var _original = _display.modal;
var _modal = $(
	'<div class="modal fade dtr-bs-modal" role="dialog">'+
		'<div class="modal-dialog" role="document">'+
			'<div class="modal-content">'+
				'<div class="modal-header">'+
					'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
				'</div>'+
				'<div class="modal-body"/>'+
			'</div>'+
		'</div>'+
	'</div>'
);

_display.modal = function ( options ) {
	return function ( row, update, render ) {
		if ( ! $.fn.modal ) {
			_original( row, update, render );
		}
		else {
			if ( ! update ) {
				if ( options && options.header ) {
					var header = _modal.find('div.modal-header');
					var button = header.find('button').detach();
					
					header
						.empty()
						.append( '<h4 class="modal-title">'+options.header( row )+'</h4>' )
						.append( button );
				}

				_modal.find( 'div.modal-body' )
					.empty()
					.append( render() );

				_modal
					.appendTo( 'body' )
					.modal();
			}
		}
	};
};


return DataTable.Responsive;
}));
