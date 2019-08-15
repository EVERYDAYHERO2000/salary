$(function () {
  var salary = new Salary();
  
  var products = {
    salt : 17,
    buckwheat : 50,
    dollar : 65,
    gas_95 : 47.35,
    gold_585 : 1500,
    salary_min_2018 : 32635,
    iphone : 60000,
    apartment : 6000000,
    car : 1000000
  }
  
  var Browser = browserDetect();
  
  $('body').addClass( Browser.isMobile );
  
  window.inputtimer = null;

  var $app = $('#app').html('');
  
  var costs = `
<div class="result__per result__per-month">
  <span class="cost">0</span> ₽/мес
</div>
<div class="result__per result__per-year">
  <span class="cost">0</span> ₽/год
</div>
`;

  var $inApp = $(`
<din>
  <form>
  <div class="search">
    <input id="search" type="number" min="0" max="3000000" autofocus="" class="search__input search__input_not-empty" value="0">
    <label for="search" class="search__placeholder">Cумма которая получается на руки (нетто)</label> 
  </div>
  </form>
  <div class="result">
    <div class="result__line" id="gross">
      <div class="result__head">
        <div class="result__title">Оклад (гросс)</div>
        ${costs}
      </div>
      <div class="result__body">
        <p>Оклад до вычета <strong>13%</strong> НДФЛ. Именно гросс оклад фиксируются в трудовом договоре с сотрудником</p>
      </div>
    </div>

    <div class="result__line" id="fullCost">
      <div class="result__head">
        <div class="result__title">Стоимость сотрудника для работодателя</div>
        ${costs}
      </div>
      <div class="result__body">
        <p>Зарплата сотруднику на руки плюс сумма всех выплат за сотрудника государству. Расходы на организацию рабочего места для сотрудника не учитываются</p>
      </div>
    </div>

    <hr>

    <div class="result__line" id="nalogAll">
      <div class="result__head">
        <div class="result__title">Все выплаты государству</div>
        ${costs}
      </div>
      <div class="result__body">
        <p>Сумма всех выплат государству: НДФЛ, ОПС, ОМС, ФСС и взносов по «травматизму»</p>
      </div>
    </div>

    <hr>

    <div class="result__line" id="ndfl">
      <div class="result__head">
        <div class="result__title">Налог на доходы физических лиц (НДФЛ)</div>
        ${costs}
      </div>
      <div class="result__body">
        <p>Работодатель выплачивает за сотрудника налог государству как налоговый агент. Налог на доход для физического лица включен в оклад сотрудника и составляет <strong>13%</strong> от оклада</p>
      </div>
    </div>

    <div class="result__line" id="ops">
      <div class="result__head">
        <div class="result__title">В фонд Обязательного пенсионного страхования (ОПС)</div>
        ${costs}
      </div>
      <div class="result__body">
        <p>Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет <strong>22%</strong> от оклада</p>
      </div>
    </div>

    <div class="result__line" id="oms">
      <div class="result__head">
        <div class="result__title">Обязательное медицинское страхование жизни (ОМС)</div>
        ${costs}
      </div>
      <div class="result__body">
        <p>Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет <strong>5,1%</strong> от оклада</p>
      </div>
    </div>

    <div class="result__line" id="fss">
      <div class="result__head">
        <div class="result__title">В фонд социального страхования (ФСС)</div>
        ${costs}
      </div>
      <div class="result__body">
        <p>Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет <strong>2,9%</strong> от оклада</p>
      </div>
    </div>

    <div class="result__line" id="insurance">
      <div class="result__head">
        <div class="result__title">Взносы по «травматизму»</div>
        ${costs}
      </div>
      <div class="result__body">
        <p>Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника. Размер отчислений зависит от присвоенного класса профессионального риска. Минимально <strong>0,2%</strong> от оклада</p>
      </div>
    </div>
  </div>
</div>`
  );

  $app.append($inApp);
  
  

  var $input = $inApp.find('.search__input');
  var $result = $inApp.find('.result');


  if (location.hash) {
    var value = +location.hash.replace('#', '');
    $input.val(value);
    renderResult(value);

  } else {
    renderResult(0);
  }

  setValue($input);

  $result.find('.result__head .result__per').each(function(i,e){
    if ( $(e).is('.result__per-month') ){
      $(e).addClass('result__per_selected');
    }
  });
  
  $result.find('.result__per').on('click',function(){
    if ( $('body').is('.mobile') ){
      $('.result__per').toggleClass('result__per_selected');
    }
  });
  
  $input.change(function () {
    $(this).keyup();
  });

  $result.find('.result__title').on('click',function(){
    $(this).parent().parent().find('.result__body').toggleClass('result__body_visible');
  });
  
  $input.keyup(function (event) {

    var value = +$(this).val();

    setValue($(this));

    var d = renderResult(value);

    if ($(this).val()) {
      $(this).addClass('search__input_not-empty');
    } else {
      $(this).removeClass('search__input_not-empty');
    }
    
    clearTimeout(window.inputtimer);
    window.inputtimer = setTimeout(function(){
      if (ym) ym(54839833, 'reachGoal', 'SEARCH_RESULT', { value: value });
      
    },1000);


    location.hash = '#' + d.net; 


  });

  function renderResult(value) {
    var d = salary.setNet(value);
    
    updValue('gross');
    updValue('fullCost');
    updValue('nalogAll');
    updValue('ndfl');
    updValue('ops');
    updValue('oms');
    updValue('fss');
    updValue('insurance');
    
    function updValue(v){
      $('#' + v).find('.result__per-month .cost').html(formatUnit(d[v]));
      $('#' + v).find('.result__per-year .cost').html(formatUnit(d[v + 'InPeriod']));
    }
    
    
    return d;
  }

  function setValue($elem) {

    value = $elem.val();

    if (value) {
      $elem.attr('value', value);
    } else {
      $elem.removeAttr('value');
    }
  }

  function formatUnit(value) {
    value = (/\.\d/.test(value)) ? value + '' : value + '.00';
    value = (/\.\d{2}/.test(value)) ? value : value + '0';
    value = (value).replace(/\d(?=(\d{3})+\.)/g, '$& ');
    
    var cost = value.split('.');
    value = '<span class="cost__first">' + cost[0] + '</span><span class="cost__last">.' + cost[1] + '</span>';

    return value;
  }

  
  function browserDetect() {

	var nVer = navigator.appVersion;
	var nAgt = navigator.userAgent;
	var browserName = navigator.appName;
	var fullVersion = '' + parseFloat(navigator.appVersion);
	var majorVersion = parseInt(navigator.appVersion, 10);
	var nameOffset, verOffset, ix;

	if ((verOffset = nAgt.indexOf("Opera")) != -1) {
		browserName = "opera";
		fullVersion = nAgt.substring(verOffset + 6);
		if ((verOffset = nAgt.indexOf("Version")) != -1)
			fullVersion = nAgt.substring(verOffset + 8);
    
	} else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
		browserName = "ie";
		fullVersion = nAgt.substring(verOffset + 5);
    
	} else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
		browserName = "chrome";
		fullVersion = nAgt.substring(verOffset + 7);
    
	} else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
		browserName = "safari";
		fullVersion = nAgt.substring(verOffset + 7);
		if ((verOffset = nAgt.indexOf("Version")) != -1)
			fullVersion = nAgt.substring(verOffset + 8);
    
	} else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
		browserName = "firefox";
		fullVersion = nAgt.substring(verOffset + 8);
    
	} else if (nAgt.indexOf("FBAN") != -1 && nAgt.indexOf("FBAV") != -1 ) {
		browserName = "facebook";
		fullVersion = 0;
    
	} else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
		(verOffset = nAgt.lastIndexOf('/'))) {
		browserName = nAgt.substring(nameOffset, verOffset);
		fullVersion = nAgt.substring(verOffset + 1);
		if (browserName.toLowerCase() == browserName.toUpperCase()) {
			browserName = navigator.appName;
		}
	}

	if ((ix = fullVersion.indexOf(";")) != -1)
		fullVersion = fullVersion.substring(0, ix);
	if ((ix = fullVersion.indexOf(" ")) != -1)
		fullVersion = fullVersion.substring(0, ix);

	majorVersion = parseInt('' + fullVersion, 10);
	if (isNaN(majorVersion)) {
		fullVersion = '' + parseFloat(navigator.appVersion);
		majorVersion = parseInt(navigator.appVersion, 10);
	}

  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var ratio = window.devicePixelRatio || 1;
  var screen = {
    width : window.screen.width * ratio,
    height : window.screen.height * ratio
  };
  
	return {
		browserName: browserName.toLowerCase(),
		fullVersion: fullVersion,
		majorVersion: majorVersion,
		appName: navigator.appName.toLowerCase(),
		userAgent: navigator.userAgent.toLowerCase(),
		platform: navigator.platform.toLowerCase(),
    iphoneX: (iOS && screen.width == 1125 && screen.height === 2436) ? 'iphoneX' : '',
		isMobile: (function () {
			var check = 'not-mobile';
			(function (a) {
				if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = 'mobile';
			})(navigator.userAgent || navigator.vendor || window.opera);
			return check;
		})()
	}
  
};


});