"use strict";$(function(){function I(n){var t=this;function o(n){var o={},s=t.options.period;return o.netInPeriod=r(t.result.net*s),o.grossInPeriod=r(t.result.gross*s),o.ops=r(e(n,t.options.ops)),o.opsInPeriod=r(i(o.grossInPeriod,t.options.opsMax,t.options.ops,t.options.ops2)),o.oms=r(e(n,t.options.oms)),o.omsInPeriod=r(i(o.grossInPeriod,t.options.omsMax,t.options.oms,t.options.oms2)),o.fss=r(e(n,t.options.fss)),o.fssInPeriod=r(o.fss*s),o.insurance=r(e(n,t.options.insurance)),o.insuranceInPeriod=r(o.insurance*s),o.ndfl=r(e(n,t.options.ndfl)),o.ndflInPeriod=r(o.ndfl*s),o.fot=r(o.ops+o.oms+o.fss+o.insurance),o.fotInPeriod=r(o.fot*s),o.nalogAll=r(o.ops+o.oms+o.fss+o.insurance+o.ndfl),o.nalogAllInPeriod=r(o.opsInPeriod+o.omsInPeriod+o.fssInPeriod+o.insuranceInPeriod+o.ndflInPeriod),o.fullCost=r(o.nalogAll+t.result.net),o.fullCostInPeriod=r(o.opsInPeriod+o.omsInPeriod+o.fssInPeriod+o.insuranceInPeriod+o.ndflInPeriod+o.netInPeriod),o}function i(n,o,s,t){return n<o?e(n,s):e(o,s)+e(n-o,t)}function s(n){return n/100}function e(n,o){return s(n)*o}function r(n){return+n.toFixed(2)}return n=n||{},this.options={},this.options.ndfl=n.ndfl||13,this.options.ops=n.ops||22,this.options.opsMax=n.opsMax||115e4,this.options.ops2=n.ops2||10,this.options.oms=n.oms||5.1,this.options.omsMax=n.omsMax||865e3,this.options.oms2=n.oms2||5.1,this.options.fss=n.fss||2.9,this.options.insurance=n.insurance||.2,this.options.period=n.period||12,this.result={},this.setGross=function(n){return t.result.gross=r(n),t.result.net=r(n-e(n,t.options.ndfl)),Object.assign(t.result,o(t.result.gross)),t.result},this.setNet=function(n){return t.result.net=r(n),t.result.gross=r(n/s(100-t.options.ndfl)),Object.assign(t.result,o(t.result.gross)),t.result},t}$(function(){var t=new I,i=66.6,n=function(){navigator.appVersion;var n,o,s,t=navigator.userAgent,i=navigator.appName,e=""+parseFloat(navigator.appVersion),r=parseInt(navigator.appVersion,10);-1!=(o=t.indexOf("Opera"))?(i="opera",e=t.substring(o+6),-1!=(o=t.indexOf("Version"))&&(e=t.substring(o+8))):-1!=(o=t.indexOf("MSIE"))?(i="ie",e=t.substring(o+5)):-1!=(o=t.indexOf("Chrome"))?(i="chrome",e=t.substring(o+7)):-1!=(o=t.indexOf("Safari"))?(i="safari",e=t.substring(o+7),-1!=(o=t.indexOf("Version"))&&(e=t.substring(o+8))):-1!=(o=t.indexOf("Firefox"))?(i="firefox",e=t.substring(o+8)):-1!=t.indexOf("FBAN")&&-1!=t.indexOf("FBAV")?(i="facebook",e=0):(n=t.lastIndexOf(" ")+1)<(o=t.lastIndexOf("/"))&&(i=t.substring(n,o),e=t.substring(o+1),i.toLowerCase()==i.toUpperCase()&&(i=navigator.appName));-1!=(s=e.indexOf(";"))&&(e=e.substring(0,s));-1!=(s=e.indexOf(" "))&&(e=e.substring(0,s));r=parseInt(""+e,10),isNaN(r)&&(e=""+parseFloat(navigator.appVersion),r=parseInt(navigator.appVersion,10));var a=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,c=window.devicePixelRatio||1,l={width:window.screen.width*c,height:window.screen.height*c};return{browserName:i.toLowerCase(),fullVersion:e,majorVersion:r,appName:navigator.appName.toLowerCase(),userAgent:navigator.userAgent.toLowerCase(),platform:navigator.platform.toLowerCase(),iphoneX:a&&1125==l.width&&2436===l.height?"iphoneX":"",isMobile:function(){var n,o="not-mobile";return n=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0,4)))&&(o="mobile"),o}()}}();$("body").addClass(n.isMobile),window.inputtimer=null;var o,s,e,r,a,c,l,d,p,u=$("#app").html(""),m=$((o=f({id:"gross",title:"Оклад (гросс)",description:"Оклад до вычета <strong>13%</strong> НДФЛ. Именно гросс оклад фиксируются в трудовом договоре с сотрудником",unit:"₽"}),s=f({id:"fullCost",title:"Стоимость сотрудника для работодателя",description:"Зарплата сотруднику на руки плюс сумма всех выплат за сотрудника государству. Расходы на организацию рабочего места для сотрудника не учитываются",unit:"₽"}),e=f({id:"salaryInDollar",title:"На руки в долларах",description:"Курс конвертации <strong>"+i+"</strong> рублей за <strong>1</strong> доллар",unit:"$"}),r=f({id:"nalogAll",title:"Все выплаты государству",description:"Сумма всех выплат государству: НДФЛ, ОПС, ОМС, ФСС и взносов по «травматизму»",unit:"₽"}),a=f({id:"ndfl",title:"Налог на доходы физических лиц (НДФЛ)",description:"Работодатель выплачивает за сотрудника налог государству как налоговый агент. Налог на доход для физического лица включен в оклад сотрудника и составляет <strong>13%</strong> от оклада",unit:"₽"}),c=f({id:"ops",title:"В фонд Обязательного пенсионного страхования (ОПС)",description:"Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет <strong>22%</strong> от оклада",unit:"₽"}),l=f({id:"oms",title:"Обязательное медицинское страхование жизни (ОМС)",description:"Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет <strong>5,1%</strong> от оклада",unit:"₽"}),d=f({id:"fss",title:"В фонд социального страхования (ФСС)",description:"Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет <strong>2,9%</strong> от оклада",unit:"₽"}),p=f({id:"insurance",title:"Взносы по «травматизму»",description:"Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника. Размер отчислений зависит от присвоенного класса профессионального риска. Минимально <strong>0,2%</strong> от оклада",unit:"₽"}),'<din class="app__inner"> <form class="app__form"> <div class="search"> <input id="search" type="number" min="0" max="3000000" autofocus="" class="search__input search__input_not-empty" value="0"> <label for="search" class="search__placeholder">Cумма которая получается на руки (нетто)</label> </div> </form> <div class="result"> <section> '.concat(o," ").concat(s," <hr> ").concat(e," </section> <section> <h2>Налоги</h2> ").concat(r," <hr> ").concat(a," ").concat(c," ").concat(l," ").concat(d," ").concat(p," </section> </div></div>")));function f(n){n.unit;return'<div class="result__line" id="'.concat(n.id,'"> <div class="result__head"> <div class="result__title">').concat(n.title,'</div> <div class="result__per result__per-month"> <span class="cost ').concat(n.classname,'">0</span> ').concat(n.unit,'/мес </div> <div class="result__per result__per-year"> <span class="cost ').concat(n.classname,'">0</span> ').concat(n.unit,'/год </div> </div> <div class="result__body"> <p>').concat(n.description,"</p> </div> </div>")}u.append(m);var g=m.find(".search__input"),h=m.find(".result");if(location.hash){var v=+location.hash.replace("#","");g.val(v),_(v),$(document).scrollTop(u.offset().top)}else _(0);function _(n){var o=t.setNet(n);function s(n){$("#"+n).find(".result__per-month .cost").html(w(o[n])),$("#"+n).find(".result__per-year .cost").html(w(o[n+"InPeriod"]))}return function(n){'"","В месяц (₽/мес)","В год (₽/год)"\r"Зарплата на руки",'.concat(n.net,",").concat(n.netInPeriod,'\r"Оклад",').concat(n.gross,",").concat(n.grossInPeriod,'\r"Полная стоимость сотрудника для работодателя",').concat(n.fullCost,",").concat(n.fullCostInPeriod,'\r"Все выплаты государству",').concat(n.nalogAll,",").concat(n.nalogAllInPeriod,'\r"Налог на доходы физических лиц (НДФЛ)",').concat(n.ndfl,",").concat(n.ndflInPeriod,'\r"В фонд Обязательного пенсионного страхования (ОПС)",').concat(n.ops,",").concat(n.opsInPeriod,'\r"Обязательное медицинское страхование жизни (ОМС)",').concat(n.oms,",").concat(n.omsInPeriod,'\r"В фонд социального страхования (ФСС)",').concat(n.fss,",").concat(n.fssInPeriod,'\r"Взносы по «травматизму»",').concat(n.insurance,",").concat(n.insuranceInPeriod,"\r")}(o),s("gross"),s("fullCost"),s("nalogAll"),s("ndfl"),s("ops"),s("oms"),s("fss"),s("insurance"),$("#salaryInDollar").find(".result__per-month .cost").html(w((o.net/i).toFixed(2))),$("#salaryInDollar").find(".result__per-year .cost").html(w((o.netInPeriod/i).toFixed(2))),o}function b(n){(v=n.val())?n.attr("value",v):n.removeAttr("value")}function w(n){n=/\.\d/.test(n)?n+"":n+".00";var o=(n=(n=/\.\d{2}/.test(n)?n:n+"0").replace(/\d(?=(\d{3})+\.)/g,"$& ")).split(".");return n='<span class="cost__first">'+o[0]+'</span><span class="cost__last">.'+o[1]+"</span>"}b(g),h.find(".result__head .result__per").each(function(n,o){$(o).is(".result__per-year")&&$(o).addClass("result__per_selected")}),h.find(".result__per").on("click",function(){$("body").is(".mobile")&&$(".result__per").toggleClass("result__per_selected")}),g.change(function(){$(this).keyup()}),h.find(".result__title").on("click",function(){$(this).parent().parent().find(".result__body").toggleClass("result__body_visible")}),g.keyup(function(n){var o=+$(this).val();b($(this));var s=_(o);$(this).val()?$(this).addClass("search__input_not-empty"):$(this).removeClass("search__input_not-empty"),clearTimeout(window.inputtimer),window.inputtimer=setTimeout(function(){ym&&ym(54839833,"reachGoal","SEARCH_RESULT",{value:o})},1e3),location.hash="#"+s.net})}),console.log("version: 0.1.0")});
//# sourceMappingURL=main.js.map
