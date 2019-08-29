"use strict";$(function(){function O(a){var s=this;function e(a){var e={},n=s.options.period;return e.netInPeriod=o(s.result.net*n),e.grossInPeriod=o(s.result.gross*n),e.ops=o(t(a,s.options.ops)),e.opsInPeriod=o(l(e.grossInPeriod,s.options.opsMax,s.options.ops,s.options.ops2)),e.oms=o(t(a,s.options.oms)),e.omsInPeriod=o(l(e.grossInPeriod,s.options.omsMax,s.options.oms,s.options.oms2)),e.fss=o(t(a,s.options.fss)),e.fssInPeriod=o(e.fss*n),e.insurance=o(t(a,s.options.insurance)),e.insuranceInPeriod=o(e.insurance*n),e.ndfl=o(t(a,s.options.ndfl)),e.ndflInPeriod=o(e.ndfl*n),e.fot=o(e.ops+e.oms+e.fss+e.insurance),e.fotInPeriod=o(e.fot*n),e.nalogAll=o(e.ops+e.oms+e.fss+e.insurance+e.ndfl),e.nalogAllInPeriod=o(e.opsInPeriod+e.omsInPeriod+e.fssInPeriod+e.insuranceInPeriod+e.ndflInPeriod),e.fullCost=o(e.nalogAll+s.result.net),e.fullCostInPeriod=o(e.opsInPeriod+e.omsInPeriod+e.fssInPeriod+e.insuranceInPeriod+e.ndflInPeriod+e.netInPeriod),e}function l(a,e,n,s){return a<e?t(a,n):t(e,n)+t(a-e,s)}function n(a){return a/100}function t(a,e){return n(a)*e}function o(a){return+a.toFixed(2)}return a=a||{},this.options={},this.options.ndfl=a.ndfl||13,this.options.ops=a.ops||22,this.options.opsMax=a.opsMax||115e4,this.options.ops2=a.ops2||10,this.options.oms=a.oms||5.1,this.options.omsMax=a.omsMax||865e3,this.options.oms2=a.oms2||5.1,this.options.fss=a.fss||2.9,this.options.insurance=a.insurance||.2,this.options.period=a.period||12,this.result={},this.setGross=function(a){return s.result.gross=o(a),s.result.net=o(a-t(a,s.options.ndfl)),Object.assign(s.result,e(s.result.gross)),s.result},this.setNet=function(a){return s.result.net=o(a),s.result.gross=o(a/n(100-s.options.ndfl)),Object.assign(s.result,e(s.result.gross)),s.result},s}$(function(){var s=new O,l=66.55,a=[{flag:"🇲🇨",name:"Монако",value:4870},{flag:"🇱🇮",name:"Лихтенштейн",value:8166},{flag:"🇧🇲",name:"Бермуды",value:2500},{flag:"🇨🇭",name:"Швейцария",value:6713.33},{flag:"🇳🇴",name:"Норвегия",value:6332.5},{flag:"🇲🇴",name:"Макао",value:6004.17},{flag:"🇱🇺",name:"Люксембург",value:5855},{flag:"🇮🇸",name:"Исландия",value:5069.17},{flag:"🇺🇸",name:"США",value:4855.83},{flag:"🇮🇪",name:"Ирландия",value:4607.5},{flag:"🇩🇰",name:"Дания",value:4601.67},{flag:"🇸🇬",name:"Сингапур",value:4544.17},{flag:"🇸🇪",name:"Швеция",value:4382.5},{flag:"🇦🇺",name:"Австралия",value:4280},{flag:"🇭🇰",name:"Гонконг",value:3859.17},{flag:"🇳🇱",name:"Нидерланды",value:3848.33},{flag:"🇦🇹",name:"Австрия",value:3786.67},{flag:"🇫🇮",name:"Финляндия",value:3715},{flag:"🇩🇪",name:"Германия",value:3624.17},{flag:"🇨🇦",name:"Канада",value:3572.5},{flag:"🇧🇪",name:"Бельгия",value:3482.5},{flag:"🇬🇧",name:"Великобритания",value:3377.5},{flag:"🇦🇪",name:"ОАЭ",value:3260.83},{flag:"🇳🇿",name:"Новая Зеландия",value:3247.5},{flag:"🇯🇵",name:"Япония",value:3212.5},{flag:"🇫🇷",name:"Франция",value:3164.17},{flag:"🇮🇱",name:"Израиль",value:3105.83},{flag:"🇮🇹",name:"Италия",value:2585},{flag:"🇰🇷",name:"Южная Корея",value:2365},{flag:"🇪🇸",name:"Испания",value:2265},{flag:"🇸🇦",name:"Саудовская Аравия",value:1674.17},{flag:"🇵🇹",name:"Португалия",value:1651.67},{flag:"🇨🇿",name:"Чехия",value:1513.33},{flag:"🇬🇷",name:"Греция",value:1507.5},{flag:"🇨🇱",name:"Чили",value:1134.17},{flag:"🇦🇷",name:"Аргентина",value:1085.83},{flag:"🇭🇺",name:"Венгрия",value:1072.5},{flag:"🇻🇪",name:"Венесуэла",value:1065},{flag:"🇵🇱",name:"Польша",value:1060.83},{flag:"🇭🇷",name:"Хорватия",value:1047.5},{flag:"🇨🇷",name:"Коста-Рика",value:926.67},{flag:"🇹🇷",name:"Турция",value:911.67},{flag:"🇷🇴",name:"Румыния",value:833.33},{flag:"🇲🇾",name:"Малайзия",value:804.17},{flag:"🇷🇺",name:"Россия",value:769.17},{flag:"🇨🇳",name:"Китай",value:724.17},{flag:"🇲🇽",name:"Мексика",value:717.5},{flag:"🇧🇷",name:"Бразилия",value:716.67},{flag:"🇰🇿",name:"Казахстан",value:664.17},{flag:"🇧🇬",name:"Болгария",value:655},{flag:"🇨🇺",name:"Куба",value:595.83},{flag:"🇬🇳",name:"Гвинея",value:587.5},{flag:"🇵🇪",name:"Перу",value:496.67},{flag:"🇹🇭",name:"Таиланд",value:495.83},{flag:"🇪🇨",name:"Эквадор",value:493.33},{flag:"🇨🇴",name:"Колумбия",value:490.83},{flag:"🇮🇷",name:"Иран",value:452.5},{flag:"🇿🇦",name:"Южная Африка",value:452.5},{flag:"🇷🇸",name:"Сербия",value:431.67},{flag:"🇧🇦",name:"Босния",value:409.17},{flag:"🇦🇱",name:"Албания",value:360},{flag:"🇱🇰",name:"Шри Ланка",value:320.83},{flag:"🇵🇭",name:"Филиппины",value:305},{flag:"🇮🇩",name:"Индонезия",value:295},{flag:"🇪🇬",name:"Египет",value:250.83},{flag:"🇲🇦",name:"Марокко",value:238.33},{flag:"🇺🇦",name:"Украина",value:199.17},{flag:"🇻🇳",name:"Вьетнам",value:180},{flag:"🇳🇬",name:"Нигерия",value:175},{flag:"🇸🇾",name:"Сирия",value:153.33},{flag:"🇮🇳",name:"Индия",value:150},{flag:"🇵🇰",name:"Пакистан",value:131.67},{flag:"🇧🇩",name:"Бангладеш",value:122.5},{flag:"🇰🇪",name:"Кения",value:121.67},{flag:"🇪🇹",name:"Эфиопия",value:61.67},{flag:"🇦🇫",name:"Афганистан",value:46.67},{flag:"🇨🇩",name:"Демократическая Республика Конго",value:38.33},{flag:"🇲🇬",name:"Мадагаскар",value:33.33}].sort(A),e=[{name:"Белгород",value:27280},{name:"Брянск",value:20790},{name:"Владимир",value:22770},{name:"Воронеж",value:26070},{name:"Иваново",value:21120},{name:"Калуга",value:27060},{name:"Кострома",value:22550},{name:"Курск",value:22770},{name:"Липецк",value:24640},{name:"Московская область",value:42460},{name:"Орёл",value:16830},{name:"Рязань",value:21340},{name:"Смоленск",value:20020},{name:"Тамбов",value:21450},{name:"Тверь",value:20130},{name:"Тула",value:25520},{name:"Ярославль",value:26620},{name:"Москва",value:66880},{name:"Карелия",value:32450},{name:"Коми",value:39380},{name:"Архангельск",value:36850},{name:"Вологда",value:28820},{name:"Калининград",value:28820},{name:"Ленинградская область",value:28050},{name:"Мурманск",value:43670},{name:"Новгород",value:27390},{name:"Псков",value:24310},{name:"Санкт-Петербург",value:45430},{name:"Адыгея",value:20680},{name:"Калмыкия",value:20130},{name:"Краснодар",value:25850},{name:"Астрахань",value:27390},{name:"Волгоград",value:23650},{name:"Ростов",value:23320},{name:"Дагестан",value:25160},{name:"Ингушетия",value:20790},{name:"Кабардино-Балкарская",value:18920},{name:"Карачаево-Черкесская",value:18040},{name:"Северная Осетия",value:18590},{name:"Чечня",value:21010},{name:"Ставрополь",value:22e3},{name:"Башкортостан",value:28160},{name:"Марий Эл",value:21230},{name:"Мордовия",value:20900},{name:"Татарстан",value:27060},{name:"Удмуртская",value:23430},{name:"Чувашия",value:22990},{name:"Пермь",value:27280},{name:"Киров",value:22880},{name:"Нижний Новгород",value:26840},{name:"Оренбург",value:26070},{name:"Пенза",value:22990},{name:"Самара",value:27060},{name:"Саратов",value:23430},{name:"Ульяновск",value:22880},{name:"Курган",value:22770},{name:"Свердловск",value:32780},{name:"Тюмень",value:50160},{name:"Ханты-Мансийский автономный округ",value:61930},{name:"Ямало-Ненецкий автономный округ",value:70620},{name:"Челябинск",value:26620},{name:"Алтай",value:24860},{name:"Бурятия",value:27720},{name:"Тыва",value:30580},{name:"Хакасия",value:32010},{name:"Забайкалье",value:25300},{name:"Красноярский край",value:29260},{name:"Иркутск",value:32450},{name:"Кемерово",value:17490},{name:"Новосибирск",value:17600},{name:"Омск",value:28820},{name:"Томск",value:32230},{name:"Саха",value:53460},{name:"Камчатка",value:50600},{name:"Приморск",value:33990},{name:"Хабаровск",value:35200},{name:"Амур",value:34540},{name:"Магадан",value:55880},{name:"Сахалин",value:51260},{name:"Чукотка",value:56100}].sort(A),n=function(){navigator.appVersion;var a,e,n,s=navigator.userAgent,l=navigator.appName,t=""+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10);-1!=(e=s.indexOf("Opera"))?(l="opera",t=s.substring(e+6),-1!=(e=s.indexOf("Version"))&&(t=s.substring(e+8))):-1!=(e=s.indexOf("MSIE"))?(l="ie",t=s.substring(e+5)):-1!=(e=s.indexOf("Chrome"))?(l="chrome",t=s.substring(e+7)):-1!=(e=s.indexOf("Safari"))?(l="safari",t=s.substring(e+7),-1!=(e=s.indexOf("Version"))&&(t=s.substring(e+8))):-1!=(e=s.indexOf("Firefox"))?(l="firefox",t=s.substring(e+8)):-1!=s.indexOf("FBAN")&&-1!=s.indexOf("FBAV")?(l="facebook",t=0):(a=s.lastIndexOf(" ")+1)<(e=s.lastIndexOf("/"))&&(l=s.substring(a,e),t=s.substring(e+1),l.toLowerCase()==l.toUpperCase()&&(l=navigator.appName));-1!=(n=t.indexOf(";"))&&(t=t.substring(0,n));-1!=(n=t.indexOf(" "))&&(t=t.substring(0,n));o=parseInt(""+t,10),isNaN(o)&&(t=""+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10));var i=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,r=window.devicePixelRatio||1,u={width:window.screen.width*r,height:window.screen.height*r};return{browserName:l.toLowerCase(),fullVersion:t,majorVersion:o,appName:navigator.appName.toLowerCase(),userAgent:navigator.userAgent.toLowerCase(),platform:navigator.platform.toLowerCase(),iphoneX:i&&1125==u.width&&2436===u.height?"iphoneX":"",isMobile:function(){var a,e="not-mobile";return a=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))&&(e="mobile"),e}()}}();$("body").addClass(n.isMobile),window.inputtimer=null;var t,o,i,r,u,c,m,v,d,p,f,g=$("#app").html(""),_=$((t=h({id:"gross",title:"Оклад (гросс)",description:"Оклад до вычета <strong>13%</strong> НДФЛ. Именно гросс оклад фиксируются в трудовом договоре с сотрудником",unit:"₽"}),o=h({id:"fullCost",title:"Стоимость сотрудника для работодателя",description:"Зарплата сотруднику на руки плюс сумма всех выплат за сотрудника государству. Расходы на организацию рабочего места для сотрудника не учитываются",unit:"₽"}),i=h({id:"salaryInDollar",title:"На руки в долларах",description:"Курс конвертации <strong>"+l+"</strong> рублей за <strong>1</strong> доллар",unit:"$"}),r=h({id:"nalogAll",title:"Все выплаты государству",description:"Сумма всех выплат государству: НДФЛ, ОПС, ОМС, ФСС и взносов по «травматизму»",unit:"₽"}),u=h({id:"ndfl",title:"Налог на доходы физических лиц (НДФЛ)",description:"Работодатель выплачивает за сотрудника налог государству как налоговый агент. Налог на доход для физического лица включен в оклад сотрудника и составляет <strong>13%</strong> от оклада",unit:"₽"}),c=h({id:"ops",title:"В фонд Обязательного пенсионного страхования (ОПС)",description:"Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет <strong>22%</strong> от оклада",unit:"₽"}),m=h({id:"oms",title:"Обязательное медицинское страхование жизни (ОМС)",description:"Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет <strong>5,1%</strong> от оклада",unit:"₽"}),v=h({id:"fss",title:"В фонд социального страхования (ФСС)",description:"Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет <strong>2,9%</strong> от оклада",unit:"₽"}),d=h({id:"insurance",title:"Взносы по «травматизму»",description:"Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника. Размер отчислений зависит от присвоенного класса профессионального риска. Минимально <strong>0,2%</strong> от оклада",unit:"₽"}),p=k(e),f=function(a){for(var e=a.slice(),n=0;n<e.length;n++)e[n].value=(e[n].value*l).toFixed(2),e[n].name='<span class="emoji">'+e[n].flag+"</span> "+e[n].name;return k(e)}(a),'<din class="app__inner"> <form class="app__form"> <div class="search"> <input id="search" type="number" min="0" max="3000000" autofocus="" class="search__input search__input_not-empty" value="0"> <label for="search" class="search__placeholder">Cумма, которая получается на руки (нетто)</label> </div> </form> <div class="result"> <section> '.concat(t," ").concat(o," <hr> ").concat(i," </section> <section> <h2>Налоги</h2> ").concat(r," <hr> ").concat(u," ").concat(c," ").concat(m," ").concat(v," ").concat(d,' </section> <div class="section"> <a id="salaryExport" class="link link_export" href="#" download="salary.csv">Экспортировать в CSV</a> </div> <section> <div class="tab"> <h2 class="tab__header">Средняя зарплата в регионах России за 2019 год</h2> <div class="tab__panel tab__panel_hidden" id="salaryInRussia"> ').concat(p,' </div> </div> </section> <section> <div class="tab"> <h2 class="tab__header">Средняя зарплата по странам мира за 2019 год</h2> <div class="tab__panel tab__panel_hidden" id="salaryInWorld"> ').concat(f," </div> </div> </section> </div></div>")));function h(a){var e="$"==a.unit?"cost_dollar":"";return'<div class="result__line" id="'.concat(a.id,'"> <div class="result__head"> <div class="result__title result__title_info">').concat(a.title,'</div> <div class="result__per result__per-month"> <span class="cost ').concat(e,'">0</span> ').concat(a.unit,'/мес </div> <div class="result__per result__per-year"> <span class="cost ').concat(e,'">0</span> ').concat(a.unit,'/год </div> </div> <div class="result__body"> <p>').concat(a.description,"</p> </div> </div>")}g.append(_);var b=_.find(".search__input"),w=_.find(".result");if(location.hash){var y=+location.hash.replace("#","");b.val(y),I(y),$(document).scrollTop(g.offset().top)}else I(0);function I(a){var e=s.setNet(a);function n(a){$("#"+a).find(".result__per-month .cost").html(P(e[a])),$("#"+a).find(".result__per-year .cost").html(P(e[a+"InPeriod"]))}return n("gross"),n("fullCost"),n("nalogAll"),n("ndfl"),n("ops"),n("oms"),n("fss"),n("insurance"),$("#salaryInDollar").find(".result__per-month .cost").html(P((e.net/l).toFixed(2))),$("#salaryInDollar").find(".result__per-year .cost").html(P((e.netInPeriod/l).toFixed(2))),$("#salaryExport").attr("href","data:text/csv,"+function(a){return'"","В месяц (₽/мес)","В год (₽/год)"\r"Зарплата на руки",'.concat(a.net,",").concat(a.netInPeriod,'\r"Оклад",').concat(a.gross,",").concat(a.grossInPeriod,'\r"Полная стоимость сотрудника для работодателя",').concat(a.fullCost,",").concat(a.fullCostInPeriod,'\r"Все выплаты государству",').concat(a.nalogAll,",").concat(a.nalogAllInPeriod,'\r"Налог на доходы физических лиц (НДФЛ)",').concat(a.ndfl,",").concat(a.ndflInPeriod,'\r"В фонд Обязательного пенсионного страхования (ОПС)",').concat(a.ops,",").concat(a.opsInPeriod,'\r"Обязательное медицинское страхование жизни (ОМС)",').concat(a.oms,",").concat(a.omsInPeriod,'\r"В фонд социального страхования (ФСС)",').concat(a.fss,",").concat(a.fssInPeriod,'\r"Взносы по «травматизму»",').concat(a.insurance,",").concat(a.insuranceInPeriod,"\r")}(e)),C("#salaryInRussia",e.gross,e.grossInPeriod),C("#salaryInWorld",e.gross,e.grossInPeriod),e}function x(a){(y=a.val())?a.attr("value",y):a.removeAttr("value")}function P(a){a=/\.\d/.test(a)?a+"":a+".00";var e=(a=(a=/\.\d{2}/.test(a)?a:a+"0").replace(/\d(?=(\d{3})+\.)/g,"$& ")).split(".");return a='<span class="cost__first">'+e[0]+'</span><span class="cost__last">.'+e[1]+"</span>"}function k(a){for(var e='<div class="result__line result__line-my-salary"> <div class="result__head"> <div class="result__title">Моя зарплата (гросс)</div> <div class="result__per result__per-month"> <span class="cost">0.00</span> ₽/мес </div> <div class="result__per result__per-year result__per_selected"> <span class="cost">0.00</span> ₽/год </div> </div> </div>',n=0;n<a.length;n++)e+='<div class="result__line result__line-regions" data-salary="'.concat(a[n].value,'"> <div class="result__head"> <div class="result__title">').concat(a[n].name,'</div> <div class="result__per result__per-month"> <span class="cost">').concat(P(a[n].value),'</span> ₽/мес </div> <div class="result__per result__per-year"> <span class="cost">').concat(P((12*a[n].value).toFixed(2)),"</span> ₽/год </div> </div> </div>");return e}function C(a,n,e){var s=$(a).find(".result__line-my-salary").remove().clone(),l=0,t=$(a).find(".result__line-regions");t.each(function(a,e){$(e).data("salary")>=n&&(l=a)}),s.find(".result__per-month").find(".cost").html(P(n)),s.find(".result__per-year").find(".cost").html(P(e)),n>=$(t[l]).data("salary")?s.insertBefore($(t[l])):s.insertAfter($(t[l]))}function A(a,e){var n=a.value,s=e.value,l=0;return s<n?l=-1:n<s&&(l=1),l}x(b),w.find(".result__head .result__per").each(function(a,e){$(e).is(".result__per-year")&&$(e).addClass("result__per_selected")}),w.on("click",".result__per",function(){$("body").is(".mobile")&&$(".result__per").toggleClass("result__per_selected")}),w.on("click",".tab__header",function(){$(this).toggleClass("tab__header_open"),$(this).next().toggleClass("tab__panel_hidden")}),b.change(function(){$(this).keyup()}),w.find(".result__title_info").on("click",function(){$(this).parent().parent().find(".result__body").toggleClass("result__body_visible")}),b.keyup(function(a){var e=+$(this).val();x($(this));var n=I(e);$(this).val()?$(this).addClass("search__input_not-empty"):$(this).removeClass("search__input_not-empty"),clearTimeout(window.inputtimer),window.inputtimer=setTimeout(function(){ym&&ym(54839833,"reachGoal","SEARCH_RESULT",{value:e})},1e3),location.hash="#"+n.net})}),console.log("version: 0.1.0")});
//# sourceMappingURL=main.js.map
