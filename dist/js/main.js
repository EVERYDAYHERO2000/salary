"use strict";$(function(){function v(s){var t=this;function n(s){var n={},i=t.options.period;return n.netInPeriod=o(t.result.net*i),n.grossInPeriod=o(t.result.gross*i),n.ops=s<=t.options.opsMax?o(e(s,t.options.ops)):o(e(t.options.opsMax,t.options.ops2)),n.opsInPeriod=o(n.ops*i),n.oms=s<=t.options.omsMax?o(e(s,t.options.oms)):o(e(t.options.omsMax,t.options.oms2)),n.omsInPeriod=o(n.oms*i),n.fss=o(e(s,t.options.fss)),n.fssInPeriod=o(n.fss*i),n.insurance=o(e(s,t.options.insurance)),n.insuranceInPeriod=o(n.insurance*i),n.ndfl=o(e(s,t.options.ndfl)),n.ndflInPeriod=o(n.ndfl*i),n.fot=o(n.ops+n.oms+n.fss+n.insurance),n.fotInPeriod=o(n.fot*i),n.nalogAll=o(n.ops+n.oms+n.fss+n.insurance+n.ndfl),n.nalogAllInPeriod=o(n.nalogAll*i),n.fullCost=o(n.nalogAll+t.result.net),n.fullCostInPeriod=o(n.fullCost*i),n}function i(s){return s/100}function e(s,n){return i(s)*n}function o(s){return+s.toFixed(2)}return s=s||{},this.options={},this.options.ndfl=s.ndfl||13,this.options.ops=s.ops||22,this.options.opsMax=s.opsMax||115e4,this.options.ops2=s.ops2||10,this.options.oms=s.oms||5.1,this.options.omsMax=s.omsMax||865e3,this.options.oms2=s.oms2||5.1,this.options.fss=s.fss||2.9,this.options.insurance=s.insurance||.2,this.options.period=s.period||12,this.result={},this.setGross=function(s){return t.result.gross=o(s),t.result.net=o(s-e(s,t.options.ndfl)),Object.assign(t.result,n(t.result.gross)),t.result},this.setNet=function(s){return t.result.net=o(s),t.result.gross=o(s/i(100-t.options.ndfl)),Object.assign(t.result,n(t.result.gross)),t.result},t}$(function(){var t=new v,s=function(){navigator.appVersion;var s,n,i,t=navigator.userAgent,e=navigator.appName,o=""+parseFloat(navigator.appVersion),a=parseInt(navigator.appVersion,10);-1!=(n=t.indexOf("Opera"))?(e="opera",o=t.substring(n+6),-1!=(n=t.indexOf("Version"))&&(o=t.substring(n+8))):-1!=(n=t.indexOf("MSIE"))?(e="ie",o=t.substring(n+5)):-1!=(n=t.indexOf("Chrome"))?(e="chrome",o=t.substring(n+7)):-1!=(n=t.indexOf("Safari"))?(e="safari",o=t.substring(n+7),-1!=(n=t.indexOf("Version"))&&(o=t.substring(n+8))):-1!=(n=t.indexOf("Firefox"))?(e="firefox",o=t.substring(n+8)):-1!=t.indexOf("FBAN")&&-1!=t.indexOf("FBAV")?(e="facebook",o=0):(s=t.lastIndexOf(" ")+1)<(n=t.lastIndexOf("/"))&&(e=t.substring(s,n),o=t.substring(n+1),e.toLowerCase()==e.toUpperCase()&&(e=navigator.appName));-1!=(i=o.indexOf(";"))&&(o=o.substring(0,i));-1!=(i=o.indexOf(" "))&&(o=o.substring(0,i));a=parseInt(""+o,10),isNaN(a)&&(o=""+parseFloat(navigator.appVersion),a=parseInt(navigator.appVersion,10));var r=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,l=window.devicePixelRatio||1,d={width:window.screen.width*l,height:window.screen.height*l};return{browserName:e.toLowerCase(),fullVersion:o,majorVersion:a,appName:navigator.appName.toLowerCase(),userAgent:navigator.userAgent.toLowerCase(),platform:navigator.platform.toLowerCase(),iphoneX:r&&1125==d.width&&2436===d.height?"iphoneX":"",isMobile:function(){var s,n="not-mobile";return s=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(s)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(s.substr(0,4)))&&(n="mobile"),n}()}}();$("body").addClass(s.isMobile),window.inputtimer=null;var n,e,i=$("#app").html(""),o='<div class="result__per result__per-month"> <span class="cost">0</span> ₽/мес</div><div class="result__per result__per-year"> <span class="cost">0</span> ₽/год</div>';n='<hr><div class="result__line" id="salaryInDollar"> <div class="result__head"> <div class="result__title">На руки в долларах</div> <div class="result__per result__per-month"> <span class="cost cost_dollar">0</span> $/мес </div> <div class="result__per result__per-year"> <span class="cost cost_dollar">0</span> $/год </div> </div> <div class="result__body"> <p>Курс конвертации <strong>'.concat(e=65.5,"</strong> рублей за <strong>1</strong> доллар</p> </div></div>");var a=$('<din> <form> <div class="search"> <input id="search" type="number" min="0" max="3000000" autofocus="" class="search__input search__input_not-empty" value="0"> <label for="search" class="search__placeholder">Cумма которая получается на руки (нетто)</label> </div> </form> <div class="result"> <section> <div class="result__line" id="gross"> <div class="result__head"> <div class="result__title">Оклад (гросс)</div> '.concat(o,' </div> <div class="result__body"> <p>Оклад до вычета <strong>13%</strong> НДФЛ. Именно гросс оклад фиксируются в трудовом договоре с сотрудником</p> </div> </div> <div class="result__line" id="fullCost"> <div class="result__head"> <div class="result__title">Стоимость сотрудника для работодателя</div> ').concat(o,' </div> <div class="result__body"> <p>Зарплата сотруднику на руки плюс сумма всех выплат за сотрудника государству. Расходы на организацию рабочего места для сотрудника не учитываются</p> </div> </div> ').concat(n,' </section> <section> <h2>Налоги</h2> <div class="result__line" id="nalogAll"> <div class="result__head"> <div class="result__title">Все выплаты государству</div> ').concat(o,' </div> <div class="result__body"> <p>Сумма всех выплат государству: НДФЛ, ОПС, ОМС, ФСС и взносов по «травматизму»</p> </div> </div> <hr> <div class="result__line" id="ndfl"> <div class="result__head"> <div class="result__title">Налог на доходы физических лиц (НДФЛ)</div> ').concat(o,' </div> <div class="result__body"> <p>Работодатель выплачивает за сотрудника налог государству как налоговый агент. Налог на доход для физического лица включен в оклад сотрудника и составляет <strong>13%</strong> от оклада</p> </div> </div> <div class="result__line" id="ops"> <div class="result__head"> <div class="result__title">В фонд Обязательного пенсионного страхования (ОПС)</div> ').concat(o,' </div> <div class="result__body"> <p>Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет <strong>22%</strong> от оклада</p> </div> </div> <div class="result__line" id="oms"> <div class="result__head"> <div class="result__title">Обязательное медицинское страхование жизни (ОМС)</div> ').concat(o,' </div> <div class="result__body"> <p>Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет <strong>5,1%</strong> от оклада</p> </div> </div> <div class="result__line" id="fss"> <div class="result__head"> <div class="result__title">В фонд социального страхования (ФСС)</div> ').concat(o,' </div> <div class="result__body"> <p>Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет <strong>2,9%</strong> от оклада</p> </div> </div> <div class="result__line" id="insurance"> <div class="result__head"> <div class="result__title">Взносы по «травматизму»</div> ').concat(o,' </div> <div class="result__body"> <p>Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника. Размер отчислений зависит от присвоенного класса профессионального риска. Минимально <strong>0,2%</strong> от оклада</p> </div> </div> </section> </div></div>'));i.append(a);var r=a.find(".search__input"),l=a.find(".result");if(location.hash){var d=+location.hash.replace("#","");r.val(d),c(d)}else c(0);function c(s){var n=t.setNet(s);function i(s){$("#"+s).find(".result__per-month .cost").html(u(n[s])),$("#"+s).find(".result__per-year .cost").html(u(n[s+"InPeriod"]))}return i("gross"),i("fullCost"),i("nalogAll"),i("ndfl"),i("ops"),i("oms"),i("fss"),i("insurance"),$("#salaryInDollar").find(".result__per-month .cost").html(u((n.net/e).toFixed(2))),$("#salaryInDollar").find(".result__per-year .cost").html(u((n.netInPeriod/e).toFixed(2))),n}function p(s){(d=s.val())?s.attr("value",d):s.removeAttr("value")}function u(s){s=/\.\d/.test(s)?s+"":s+".00";var n=(s=(s=/\.\d{2}/.test(s)?s:s+"0").replace(/\d(?=(\d{3})+\.)/g,"$& ")).split(".");return s='<span class="cost__first">'+n[0]+'</span><span class="cost__last">.'+n[1]+"</span>"}p(r),l.find(".result__head .result__per").each(function(s,n){$(n).is(".result__per-month")&&$(n).addClass("result__per_selected")}),l.find(".result__per").on("click",function(){$("body").is(".mobile")&&$(".result__per").toggleClass("result__per_selected")}),r.change(function(){$(this).keyup()}),l.find(".result__title").on("click",function(){$(this).parent().parent().find(".result__body").toggleClass("result__body_visible")}),r.keyup(function(s){var n=+$(this).val();p($(this));var i=c(n);$(this).val()?$(this).addClass("search__input_not-empty"):$(this).removeClass("search__input_not-empty"),clearTimeout(window.inputtimer),window.inputtimer=setTimeout(function(){ym&&ym(54839833,"reachGoal","SEARCH_RESULT",{value:n})},1e3),location.hash="#"+i.net})}),console.log("version: 0.1.0")});
//# sourceMappingURL=main.js.map
