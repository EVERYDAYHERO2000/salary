"use strict";$(function(){function x(n){var s=this;function e(n){var e={},a=s.options.period;return e.netInPeriod=i(s.result.net*a),e.grossInPeriod=i(s.result.gross*a),e.ops=i(o(n,s.options.ops)),e.opsInPeriod=i(t(e.grossInPeriod,s.options.opsMax,s.options.ops,s.options.ops2)),e.oms=i(o(n,s.options.oms)),e.omsInPeriod=i(t(e.grossInPeriod,s.options.omsMax,s.options.oms,s.options.oms2)),e.fss=i(o(n,s.options.fss)),e.fssInPeriod=i(e.fss*a),e.insurance=i(o(n,s.options.insurance)),e.insuranceInPeriod=i(e.insurance*a),e.ndfl=i(o(n,s.options.ndfl)),e.ndflInPeriod=i(e.ndfl*a),e.fot=i(e.ops+e.oms+e.fss+e.insurance),e.fotInPeriod=i(e.fot*a),e.nalogAll=i(e.ops+e.oms+e.fss+e.insurance+e.ndfl),e.nalogAllInPeriod=i(e.opsInPeriod+e.omsInPeriod+e.fssInPeriod+e.insuranceInPeriod+e.ndflInPeriod),e.fullCost=i(e.nalogAll+s.result.net),e.fullCostInPeriod=i(e.opsInPeriod+e.omsInPeriod+e.fssInPeriod+e.insuranceInPeriod+e.ndflInPeriod+e.netInPeriod),e}function t(n,e,a,s){return n<e?o(n,a):o(e,a)+o(n-e,s)}function a(n){return n/100}function o(n,e){return a(n)*e}function i(n){return+n.toFixed(2)}return n=n||{},this.options={},this.options.ndfl=n.ndfl||13,this.options.ops=n.ops||22,this.options.opsMax=n.opsMax||115e4,this.options.ops2=n.ops2||10,this.options.oms=n.oms||5.1,this.options.omsMax=n.omsMax||865e3,this.options.oms2=n.oms2||5.1,this.options.fss=n.fss||2.9,this.options.insurance=n.insurance||.2,this.options.period=n.period||12,this.result={},this.setGross=function(n){return s.result.gross=i(n),s.result.net=i(n-o(n,s.options.ndfl)),Object.assign(s.result,e(s.result.gross)),s.result},this.setNet=function(n){return s.result.net=i(n),s.result.gross=i(n/a(100-s.options.ndfl)),Object.assign(s.result,e(s.result.gross)),s.result},s}$(function(){var s=new x,t=65.56,n=[{name:"Белгород",value:27280},{name:"Брянск",value:20790},{name:"Владимир",value:22770},{name:"Воронеж",value:26070},{name:"Иваново",value:21120},{name:"Калуга",value:27060},{name:"Кострома",value:22550},{name:"Курск",value:22770},{name:"Липецк",value:24640},{name:"Московская область",value:42460},{name:"Орёл",value:16830},{name:"Рязань",value:21340},{name:"Смоленск",value:20020},{name:"Тамбов",value:21450},{name:"Тверь",value:20130},{name:"Тула",value:25520},{name:"Ярославль",value:26620},{name:"Москва",value:66880},{name:"Карелия",value:32450},{name:"Коми",value:39380},{name:"Архангельск",value:36850},{name:"Вологда",value:28820},{name:"Калининград",value:28820},{name:"Ленинградская область",value:28050},{name:"Мурманск",value:43670},{name:"Новгород",value:27390},{name:"Псков",value:24310},{name:"Санкт-Петербург",value:45430},{name:"Адыгея",value:20680},{name:"Калмыкия",value:20130},{name:"Краснодар",value:25850},{name:"Астрахань",value:27390},{name:"Волгоград",value:23650},{name:"Ростов",value:23320},{name:"Дагестан",value:25160},{name:"Ингушетия",value:20790},{name:"Кабардино-Балкарская",value:18920},{name:"Карачаево-Черкесская",value:18040},{name:"Северная Осетия",value:18590},{name:"Чечня",value:21010},{name:"Ставрополь",value:22e3},{name:"Башкортостан",value:28160},{name:"Марий Эл",value:21230},{name:"Мордовия",value:20900},{name:"Татарстан",value:27060},{name:"Удмуртская",value:23430},{name:"Чувашия",value:22990},{name:"Пермь",value:27280},{name:"Киров",value:22880},{name:"Нижний Новгород",value:26840},{name:"Оренбург",value:26070},{name:"Пенза",value:22990},{name:"Самара",value:27060},{name:"Саратов",value:23430},{name:"Ульяновск",value:22880},{name:"Курган",value:22770},{name:"Свердловск",value:32780},{name:"Тюмень",value:50160},{name:"Ханты-Мансийский автономный округ",value:61930},{name:"Ямало-Ненецкий автономный округ",value:70620},{name:"Челябинск",value:26620},{name:"Алтай",value:24860},{name:"Бурятия",value:27720},{name:"Тыва",value:30580},{name:"Хакасия",value:32010},{name:"Забайкалье",value:25300},{name:"Красноярский край",value:29260},{name:"Иркутск",value:32450},{name:"Кемерово",value:17490},{name:"Новосибирск",value:17600},{name:"Омск",value:28820},{name:"Томск",value:32230},{name:"Саха",value:53460},{name:"Камчатка",value:50600},{name:"Приморск",value:33990},{name:"Хабаровск",value:35200},{name:"Амур",value:34540},{name:"Магадан",value:55880},{name:"Сахалин",value:51260},{name:"Чукотка",value:56100}].sort(function(n,e){var a=n.value,s=e.value,t=0;s<a?t=-1:a<s&&(t=1);return t}),e=function(){navigator.appVersion;var n,e,a,s=navigator.userAgent,t=navigator.appName,o=""+parseFloat(navigator.appVersion),i=parseInt(navigator.appVersion,10);-1!=(e=s.indexOf("Opera"))?(t="opera",o=s.substring(e+6),-1!=(e=s.indexOf("Version"))&&(o=s.substring(e+8))):-1!=(e=s.indexOf("MSIE"))?(t="ie",o=s.substring(e+5)):-1!=(e=s.indexOf("Chrome"))?(t="chrome",o=s.substring(e+7)):-1!=(e=s.indexOf("Safari"))?(t="safari",o=s.substring(e+7),-1!=(e=s.indexOf("Version"))&&(o=s.substring(e+8))):-1!=(e=s.indexOf("Firefox"))?(t="firefox",o=s.substring(e+8)):-1!=s.indexOf("FBAN")&&-1!=s.indexOf("FBAV")?(t="facebook",o=0):(n=s.lastIndexOf(" ")+1)<(e=s.lastIndexOf("/"))&&(t=s.substring(n,e),o=s.substring(e+1),t.toLowerCase()==t.toUpperCase()&&(t=navigator.appName));-1!=(a=o.indexOf(";"))&&(o=o.substring(0,a));-1!=(a=o.indexOf(" "))&&(o=o.substring(0,a));i=parseInt(""+o,10),isNaN(i)&&(o=""+parseFloat(navigator.appVersion),i=parseInt(navigator.appVersion,10));var r=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,l=window.devicePixelRatio||1,u={width:window.screen.width*l,height:window.screen.height*l};return{browserName:t.toLowerCase(),fullVersion:o,majorVersion:i,appName:navigator.appName.toLowerCase(),userAgent:navigator.userAgent.toLowerCase(),platform:navigator.platform.toLowerCase(),iphoneX:r&&1125==u.width&&2436===u.height?"iphoneX":"",isMobile:function(){var n,e="not-mobile";return n=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0,4)))&&(e="mobile"),e}()}}();$("body").addClass(e.isMobile),window.inputtimer=null;var a,o,i,r,l,u,c,d,p,m,v=$("#app").html(""),f=$((a=_({id:"gross",title:"Оклад (гросс)",description:"Оклад до вычета <strong>13%</strong> НДФЛ. Именно гросс оклад фиксируются в трудовом договоре с сотрудником",unit:"₽"}),o=_({id:"fullCost",title:"Стоимость сотрудника для работодателя",description:"Зарплата сотруднику на руки плюс сумма всех выплат за сотрудника государству. Расходы на организацию рабочего места для сотрудника не учитываются",unit:"₽"}),i=_({id:"salaryInDollar",title:"На руки в долларах",description:"Курс конвертации <strong>"+t+"</strong> рублей за <strong>1</strong> доллар",unit:"$"}),r=_({id:"nalogAll",title:"Все выплаты государству",description:"Сумма всех выплат государству: НДФЛ, ОПС, ОМС, ФСС и взносов по «травматизму»",unit:"₽"}),l=_({id:"ndfl",title:"Налог на доходы физических лиц (НДФЛ)",description:"Работодатель выплачивает за сотрудника налог государству как налоговый агент. Налог на доход для физического лица включен в оклад сотрудника и составляет <strong>13%</strong> от оклада",unit:"₽"}),u=_({id:"ops",title:"В фонд Обязательного пенсионного страхования (ОПС)",description:"Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет <strong>22%</strong> от оклада",unit:"₽"}),c=_({id:"oms",title:"Обязательное медицинское страхование жизни (ОМС)",description:"Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет <strong>5,1%</strong> от оклада",unit:"₽"}),d=_({id:"fss",title:"В фонд социального страхования (ФСС)",description:"Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет <strong>2,9%</strong> от оклада",unit:"₽"}),p=_({id:"insurance",title:"Взносы по «травматизму»",description:"Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника. Размер отчислений зависит от присвоенного класса профессионального риска. Минимально <strong>0,2%</strong> от оклада",unit:"₽"}),m=function(n){for(var e='<div class="result__line result__line-my-salary"> <div class="result__head"> <div class="result__title">Моя зарплата (гросс)</div> <div class="result__per result__per-month"> <span class="cost">0.00</span> ₽/мес </div> <div class="result__per result__per-year result__per_selected"> <span class="cost">0.00</span> ₽/год </div> </div> </div>',a=0;a<n.length;a++)e+='<div class="result__line result__line-regions" data-salary="'.concat(n[a].value,'"> <div class="result__head"> <div class="result__title">').concat(n[a].name,'</div> <div class="result__per result__per-month"> <span class="cost">').concat(I(n[a].value),'</span> ₽/мес </div> <div class="result__per result__per-year"> <span class="cost">').concat(I(12*n[a].value),"</span> ₽/год </div> </div> </div>");return e}(n),'<din class="app__inner"> <form class="app__form"> <div class="search"> <input id="search" type="number" min="0" max="3000000" autofocus="" class="search__input search__input_not-empty" value="0"> <label for="search" class="search__placeholder">Cумма, которая получается на руки (нетто)</label> </div> </form> <div class="result"> <section> '.concat(a," ").concat(o," <hr> ").concat(i," </section> <section> <h2>Налоги</h2> ").concat(r," <hr> ").concat(l," ").concat(u," ").concat(c," ").concat(d," ").concat(p,' </section> <div class="section"> <a id="salaryExport" class="link link_export" href="#" download="salary.csv">Экспортировать в CSV</a> </div> <section > <h2>Средняя зарплата в регионах России за 2019 год</h2> <div id="salaryInRussia"> ').concat(m," </div> </section> </div></div>")));function _(n){var e="$"==n.unit?"cost_dollar":"";return'<div class="result__line" id="'.concat(n.id,'"> <div class="result__head"> <div class="result__title">').concat(n.title,'</div> <div class="result__per result__per-month"> <span class="cost ').concat(e,'">0</span> ').concat(n.unit,'/мес </div> <div class="result__per result__per-year"> <span class="cost ').concat(e,'">0</span> ').concat(n.unit,'/год </div> </div> <div class="result__body"> <p>').concat(n.description,"</p> </div> </div>")}v.append(f);var g=f.find(".search__input"),h=f.find(".result");if(location.hash){var b=+location.hash.replace("#","");g.val(b),w(b),$(document).scrollTop(v.offset().top)}else w(0);function w(n){var e=s.setNet(n);function a(n){$("#"+n).find(".result__per-month .cost").html(I(e[n])),$("#"+n).find(".result__per-year .cost").html(I(e[n+"InPeriod"]))}return a("gross"),a("fullCost"),a("nalogAll"),a("ndfl"),a("ops"),a("oms"),a("fss"),a("insurance"),$("#salaryInDollar").find(".result__per-month .cost").html(I((e.net/t).toFixed(2))),$("#salaryInDollar").find(".result__per-year .cost").html(I((e.netInPeriod/t).toFixed(2))),$("#salaryExport").attr("href","data:text/csv,"+function(n){return'"","В месяц (₽/мес)","В год (₽/год)"\r"Зарплата на руки",'.concat(n.net,",").concat(n.netInPeriod,'\r"Оклад",').concat(n.gross,",").concat(n.grossInPeriod,'\r"Полная стоимость сотрудника для работодателя",').concat(n.fullCost,",").concat(n.fullCostInPeriod,'\r"Все выплаты государству",').concat(n.nalogAll,",").concat(n.nalogAllInPeriod,'\r"Налог на доходы физических лиц (НДФЛ)",').concat(n.ndfl,",").concat(n.ndflInPeriod,'\r"В фонд Обязательного пенсионного страхования (ОПС)",').concat(n.ops,",").concat(n.opsInPeriod,'\r"Обязательное медицинское страхование жизни (ОМС)",').concat(n.oms,",").concat(n.omsInPeriod,'\r"В фонд социального страхования (ФСС)",').concat(n.fss,",").concat(n.fssInPeriod,'\r"Взносы по «травматизму»",').concat(n.insurance,",").concat(n.insuranceInPeriod,"\r")}(e)),function(a,n){var e=$("#salaryInRussia").find(".result__line-my-salary").remove().clone(),s=0,t=$("#salaryInRussia").find(".result__line-regions");t.each(function(n,e){$(e).data("salary")>=a&&(s=n)}),e.find(".result__per-month").find(".cost").html(I(a)),e.find(".result__per-year").find(".cost").html(I(n)),a>=$(t[s]).data("salary")?e.insertBefore($(t[s])):e.insertAfter($(t[s]))}(e.gross,e.grossInPeriod),e}function y(n){(b=n.val())?n.attr("value",b):n.removeAttr("value")}function I(n){n=/\.\d/.test(n)?n+"":n+".00";var e=(n=(n=/\.\d{2}/.test(n)?n:n+"0").replace(/\d(?=(\d{3})+\.)/g,"$& ")).split(".");return n='<span class="cost__first">'+e[0]+'</span><span class="cost__last">.'+e[1]+"</span>"}y(g),h.find(".result__head .result__per").each(function(n,e){$(e).is(".result__per-year")&&$(e).addClass("result__per_selected")}),h.on("click",".result__per",function(){$("body").is(".mobile")&&$(".result__per").toggleClass("result__per_selected")}),g.change(function(){$(this).keyup()}),h.find(".result__title").on("click",function(){$(this).parent().parent().find(".result__body").toggleClass("result__body_visible")}),g.keyup(function(n){var e=+$(this).val();y($(this));var a=w(e);$(this).val()?$(this).addClass("search__input_not-empty"):$(this).removeClass("search__input_not-empty"),clearTimeout(window.inputtimer),window.inputtimer=setTimeout(function(){ym&&ym(54839833,"reachGoal","SEARCH_RESULT",{value:e})},1e3),location.hash="#"+a.net})}),console.log("version: 0.1.0")});
//# sourceMappingURL=main.js.map
