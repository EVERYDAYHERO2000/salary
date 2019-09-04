$(function () {
  var salary = new Salary();

  const products = {
    salt: 17,
    buckwheat: 50,
    dollar: 66.17,
    gas_95: 47.35,
    gold_585: 1500,
    salary_min_2018: 32635,
    iphone: 60000,
    apartment: 6000000,
    car: 1000000
  }

  const salaryInWorlds = [
    {
      "flag": "🇲🇨",
      "name": "Монако",
      "value": 4870
  }, {
      "flag": "🇱🇮",
      "name": "Лихтенштейн",
      "value": 8166
  },{
      "flag": "🇬🇪",
      "name": "Грузия",
      "value": 357
  },{
      "flag": "🇦🇲",
      "name": "Армения",
      "value": 340
  },{
      "flag": "🇧🇲",
      "name": "Бермуды",
      "value": 2500
  }, {
      "flag": "🇨🇭",
      "name": "Швейцария",
      "value": 6713.33
  }, {
      "flag": "🇳🇴",
      "name": "Норвегия",
      "value": 6332.5
  }, {
      "flag": "🇲🇴",
      "name": "Макао",
      "value": 6004.17
  }, {
      "flag": "🇱🇺",
      "name": "Люксембург",
      "value": 5855
  }, {
      "flag": "🇮🇸",
      "name": "Исландия",
      "value": 5069.17
  }, {
      "flag": "🇺🇸",
      "name": "США",
      "value": 4855.83
  }, {
      "flag": "🇮🇪",
      "name": "Ирландия",
      "value": 4607.5
  }, {
      "flag": "🇩🇰",
      "name": "Дания",
      "value": 4601.67
  }, {
      "flag": "🇸🇬",
      "name": "Сингапур",
      "value": 4544.17
  }, {
      "flag": "🇸🇪",
      "name": "Швеция",
      "value": 4382.5
  }, {
      "flag": "🇦🇺",
      "name": "Австралия",
      "value": 4280
  }, {
      "flag": "🇭🇰",
      "name": "Гонконг",
      "value": 3859.17
  }, {
      "flag": "🇳🇱",
      "name": "Нидерланды",
      "value": 3848.33
  }, {
      "flag": "🇦🇹",
      "name": "Австрия",
      "value": 3786.67
  }, {
      "flag": "🇫🇮",
      "name": "Финляндия",
      "value": 3715
  }, {
      "flag": "🇩🇪",
      "name": "Германия",
      "value": 3624.17
  }, {
      "flag": "🇨🇦",
      "name": "Канада",
      "value": 3572.5
  }, {
      "flag": "🇧🇪",
      "name": "Бельгия",
      "value": 3482.5
  }, {
      "flag": "🇬🇧",
      "name": "Великобритания",
      "value": 3377.5
  }, {
      "flag": "🇦🇪",
      "name": "ОАЭ",
      "value": 3260.83
  }, {
      "flag": "🇳🇿",
      "name": "Новая Зеландия",
      "value": 3247.5
  }, {
      "flag": "🇯🇵",
      "name": "Япония",
      "value": 3212.5
  }, {
      "flag": "🇫🇷",
      "name": "Франция",
      "value": 3164.17
  }, {
      "flag": "🇮🇱",
      "name": "Израиль",
      "value": 3105.83
  }, {
      "flag": "🇮🇹",
      "name": "Италия",
      "value": 2585
  }, {
      "flag": "🇰🇷",
      "name": "Южная Корея",
      "value": 2365
  }, {
      "flag": "🇪🇸",
      "name": "Испания",
      "value": 2265
  }, {
      "flag": "🇸🇦",
      "name": "Саудовская Аравия",
      "value": 1674.17
  }, {
      "flag": "🇵🇹",
      "name": "Португалия",
      "value": 1651.67
  }, {
      "flag": "🇨🇿",
      "name": "Чехия",
      "value": 1513.33
  }, {
      "flag": "🇬🇷",
      "name": "Греция",
      "value": 1507.5
  }, {
      "flag": "🇨🇱",
      "name": "Чили",
      "value": 1134.17
  }, {
      "flag": "🇦🇷",
      "name": "Аргентина",
      "value": 1085.83
  }, {
      "flag": "🇭🇺",
      "name": "Венгрия",
      "value": 1072.5
  }, {
      "flag": "🇻🇪",
      "name": "Венесуэла",
      "value": 1065
  }, {
      "flag": "🇵🇱",
      "name": "Польша",
      "value": 1060.83
  }, {
      "flag": "🇭🇷",
      "name": "Хорватия",
      "value": 1047.5
  }, {
      "flag": "🇨🇷",
      "name": "Коста-Рика",
      "value": 926.67
  }, {
      "flag": "🇹🇷",
      "name": "Турция",
      "value": 911.67
  }, {
      "flag": "🇷🇴",
      "name": "Румыния",
      "value": 833.33
  }, {
      "flag": "🇲🇾",
      "name": "Малайзия",
      "value": 804.17
  }, {
      "flag": "🇷🇺",
      "name": "Россия",
      "value": 769.17
  }, {
      "flag": "🇨🇳",
      "name": "Китай",
      "value": 724.17
  }, {
      "flag": "🇲🇽",
      "name": "Мексика",
      "value": 717.5
  }, {
      "flag": "🇧🇷",
      "name": "Бразилия",
      "value": 716.67
  }, {
      "flag": "🇰🇿",
      "name": "Казахстан",
      "value": 664.17
  }, {
      "flag": "🇧🇬",
      "name": "Болгария",
      "value": 655
  }, {
      "flag": "🇨🇺",
      "name": "Куба",
      "value": 595.83
  }, {
      "flag": "🇬🇳",
      "name": "Гвинея",
      "value": 587.5
  }, {
      "flag": "🇵🇪",
      "name": "Перу",
      "value": 496.67
  }, {
      "flag": "🇹🇭",
      "name": "Таиланд",
      "value": 495.83
  }, {
      "flag": "🇪🇨",
      "name": "Эквадор",
      "value": 493.33
  }, {
      "flag": "🇨🇴",
      "name": "Колумбия",
      "value": 490.83
  }, {
      "flag": "🇮🇷",
      "name": "Иран",
      "value": 452.5
  }, {
      "flag": "🇿🇦",
      "name": "Южная Африка",
      "value": 452.5
  }, {
      "flag": "🇷🇸",
      "name": "Сербия",
      "value": 431.67
  }, {
      "flag": "🇧🇦",
      "name": "Босния",
      "value": 409.17
  }, {
      "flag": "🇦🇱",
      "name": "Албания",
      "value": 360
  }, {
      "flag": "🇱🇰",
      "name": "Шри Ланка",
      "value": 320.83
  }, {
      "flag": "🇵🇭",
      "name": "Филиппины",
      "value": 305
  }, {
      "flag": "🇮🇩",
      "name": "Индонезия",
      "value": 295
  }, {
      "flag": "🇪🇬",
      "name": "Египет",
      "value": 250.83
  }, {
      "flag": "🇲🇦",
      "name": "Марокко",
      "value": 238.33
  }, {
      "flag": "🇺🇦",
      "name": "Украина",
      "value": 199.17
  }, {
      "flag": "🇻🇳",
      "name": "Вьетнам",
      "value": 180
  }, {
      "flag": "🇳🇬",
      "name": "Нигерия",
      "value": 175
  }, {
      "flag": "🇸🇾",
      "name": "Сирия",
      "value": 153.33
  }, {
      "flag": "🇮🇳",
      "name": "Индия",
      "value": 150
  }, {
      "flag": "🇵🇰",
      "name": "Пакистан",
      "value": 131.67
  }, {
      "flag": "🇧🇩",
      "name": "Бангладеш",
      "value": 122.5
  }, {
      "flag": "🇰🇪",
      "name": "Кения",
      "value": 121.67
  }, {
      "flag": "🇪🇹",
      "name": "Эфиопия",
      "value": 61.67
  }, {
      "flag": "🇦🇫",
      "name": "Афганистан",
      "value": 46.67
  }, {
      "flag": "🇨🇩",
      "name": "Демократическая Республика Конго",
      "value": 38.33
  }, {
      "flag": "🇲🇬",
      "name": "Мадагаскар",
      "value": 33.33
  }].sort(compare);
  
  const salaryInRussia = [
    {
      name: "Белгород",
      value: 27280
    }, {
      name: "Брянск",
      value: 20790
    }, {
      name: "Владимир",
      value: 22770
    }, {
      name: "Воронеж",
      value: 26070
    }, {
      name: "Иваново",
      value: 21120
    }, {
      name: "Калуга",
      value: 27060
    }, {
      name: "Кострома",
      value: 22550
    }, {
      name: "Курск",
      value: 22770
    }, {
      name: "Липецк",
      value: 24640
    }, {
      name: "Московская область",
      value: 42460
    }, {
      name: "Орёл",
      value: 16830
    }, {
      name: "Рязань",
      value: 21340
    }, {
      name: "Смоленск",
      value: 20020
    }, {
      name: "Тамбов",
      value: 21450
    }, {
      name: "Тверь",
      value: 20130
    }, {
      name: "Тула",
      value: 25520
    }, {
      name: "Ярославль",
      value: 26620
    }, {
      name: "Москва",
      value: 66880
    }, {
      name: "Карелия",
      value: 32450
    }, {
      name: "Коми",
      value: 39380
    }, {
      name: "Архангельск",
      value: 36850
    }, {
      name: "Вологда",
      value: 28820
    }, {
      name: "Калининград",
      value: 28820
    }, {
      name: "Ленинградская область",
      value: 28050
    }, {
      name: "Мурманск",
      value: 43670
    }, {
      name: "Новгород",
      value: 27390
    }, {
      name: "Псков",
      value: 24310
    }, {
      name: "Санкт-Петербург",
      value: 45430
    }, {
      name: "Адыгея",
      value: 20680
    }, {
      name: "Калмыкия",
      value: 20130
    }, {
      name: "Краснодар",
      value: 25850
    }, {
      name: "Астрахань",
      value: 27390
    }, {
      name: "Волгоград",
      value: 23650
    }, {
      name: "Ростов",
      value: 23320
    }, {
      name: "Дагестан",
      value: 25160
    }, {
      name: "Ингушетия",
      value: 20790
    }, {
      name: "Кабардино-Балкарская",
      value: 18920
    }, {
      name: "Карачаево-Черкесская",
      value: 18040
    }, {
      name: "Северная Осетия",
      value: 18590
    }, {
      name: "Чечня",
      value: 21010
    }, {
      name: "Ставрополь",
      value: 22000
    }, {
      name: "Башкортостан",
      value: 28160
    }, {
      name: "Марий Эл",
      value: 21230
    }, {
      name: "Мордовия",
      value: 20900
    }, {
      name: "Татарстан",
      value: 27060
    }, {
      name: "Удмуртская",
      value: 23430
    }, {
      name: "Чувашия",
      value: 22990
    }, {
      name: "Пермь",
      value: 27280
    }, {
      name: "Киров",
      value: 22880
    }, {
      name: "Нижний Новгород",
      value: 26840
    }, {
      name: "Оренбург",
      value: 26070
    }, {
      name: "Пенза",
      value: 22990
    }, {
      name: "Самара",
      value: 27060
    }, {
      name: "Саратов",
      value: 23430
    }, {
      name: "Ульяновск",
      value: 22880
    }, {
      name: "Курган",
      value: 22770
    }, {
      name: "Свердловск",
      value: 32780
    }, {
      name: "Тюмень",
      value: 50160
    }, {
      name: "Ханты-Мансийский автономный округ",
      value: 61930
    }, {
      name: "Ямало-Ненецкий автономный округ",
      value: 70620
    }, {
      name: "Челябинск",
      value: 26620
    }, {
      name: "Алтай",
      value: 24860
    }, {
      name: "Бурятия",
      value: 27720
    }, {
      name: "Тыва",
      value: 30580
    }, {
      name: "Хакасия",
      value: 32010
    }, {
      name: "Забайкалье",
      value: 25300
    }, {
      name: "Красноярский край",
      value: 29260
    }, {
      name: "Иркутск",
      value: 32450
    }, {
      name: "Кемерово",
      value: 17490
    }, {
      name: "Новосибирск",
      value: 17600
    }, {
      name: "Омск",
      value: 28820
    }, {
      name: "Томск",
      value: 32230
    }, {
      name: "Саха",
      value: 53460
    }, {
      name: "Камчатка",
      value: 50600
    }, {
      name: "Приморск",
      value: 33990
    }, {
      name: "Хабаровск",
      value: 35200
    }, {
      name: "Амур",
      value: 34540
    }, {
      name: "Магадан",
      value: 55880
    }, {
      name: "Сахалин",
      value: 51260
    }, {
      name: "Чукотка",
      value: 56100
    }
  ].sort(compare);

  var Browser = browserDetect();

  $('body').addClass(Browser.isMobile);

  window.inputtimer = null;

  var $app = $('#app').html('');

  var $inApp = $((function () {

    let tpl_gross = resultTpl({
      id: 'gross',
      title: 'Оклад (гросс)',
      description: 'Оклад до вычета <strong>13%</strong> НДФЛ. Именно гросс оклад фиксируются в трудовом договоре с сотрудником',
      unit: '₽'
    });

    let tpl_fullCost = resultTpl({
      id: 'fullCost',
      title: 'Стоимость сотрудника для работодателя',
      description: 'Зарплата сотруднику на руки плюс сумма всех выплат за сотрудника государству. Расходы на организацию рабочего места для сотрудника не учитываются',
      unit: '₽'
    });

    let tpl_salaryInDollar = resultTpl({
      id: 'salaryInDollar',
      title: 'На руки в долларах',
      description: 'Курс конвертации <strong>' + products.dollar + '</strong> рублей за <strong>1</strong> доллар',
      unit: '$'
    });

    let tpl_nalogAll = resultTpl({
      id: 'nalogAll',
      title: 'Все выплаты государству',
      description: 'Сумма всех выплат государству: НДФЛ, ОПС, ОМС, ФСС и взносов по «травматизму»',
      unit: '₽',
      active: true
    });


    let tpl_ndfl = resultTpl({
      id: 'ndfl',
      title: 'Налог на доходы физических лиц (НДФЛ)',
      description: 'Работодатель выплачивает за сотрудника налог государству как налоговый агент. Налог на доход для физического лица включен в оклад сотрудника и составляет <strong>13%</strong> от оклада',
      unit: '₽'
    });

    let tpl_ops = resultTpl({
      id: 'ops',
      title: 'В фонд Обязательного пенсионного страхования (ОПС)',
      description: 'Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет <strong>22%</strong> от оклада',
      unit: '₽'
    });

    let tpl_oms = resultTpl({
      id: 'oms',
      title: 'Обязательное медицинское страхование жизни (ОМС)',
      description: 'Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет <strong>5,1%</strong> от оклада',
      unit: '₽'
    });

    let tpl_fss = resultTpl({
      id: 'fss',
      title: 'В фонд социального страхования (ФСС)',
      description: 'Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет <strong>2,9%</strong> от оклада',
      unit: '₽'
    });

    let tpl_insurance = resultTpl({
      id: 'insurance',
      title: 'Взносы по «травматизму»',
      description: 'Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника. Размер отчислений зависит от присвоенного класса профессионального риска. Минимально <strong>0,2%</strong> от оклада',
      unit: '₽'
    });

    let salaryInRussiaTpl = renderRegions({
      arr: salaryInRussia,
      dollar: false,
      id: 'salaryInRussia',
      title: 'Средняя зарплата в регионах России за 2019 год'
    });

    let salaryInWorld = renderRegions({
      arr: salaryInWorlds,
      dollar: products.dollar,
      id: 'salaryInWorld',
      title: 'Средняя зарплата по странам мира за 2019 год'
    });


    let tpl = `
<div class="app__inner">
  <form class="app__form">
  <div class="search">
    <input id="search" type="number" min="0" max="3000000" autofocus="" class="search__input search__input_not-empty" value="0">
    <label for="search" class="search__placeholder">Cумма, которая получается на руки (нетто)</label> 
  </div>
  </form>
  <div class="result">
    <section>
      <div class="result__line" id="grossPerHour">
        <div class="result__head">
          <div class="result__title result__title_info"><span class="info">Оклад в час</span></div>
          <div class="result__per result__per-hour result__per_selected">
            <span class="cost "><span class="cost__first">0</span><span class="cost__last">.00</span></span> ₽/час 
          </div>
        </div>
        <div class="result__body"><p>По законодательству, при 5 дневной рабочей неделе и 8 часовом рабочем дне нормой является 40 часов в неделю. В месяц получается 160 часов.</p><p><strong>оклад / 160 = оклад в час</strong></p></div>
      </div>
      <hr>
      ${tpl_gross}
      <hr>
      ${tpl_fullCost}  
      <hr>
      ${tpl_salaryInDollar}
      <hr>  
    </section>
    <section> 
      <h2>Налоги</h2>
      ${tpl_nalogAll} 
      <hr>
      ${tpl_ndfl} 
      <hr>
      ${tpl_ops} 
      <hr>
      ${tpl_oms} 
      <hr>
      ${tpl_fss} 
      <hr>
      ${tpl_insurance}
    </section>
    <div class="section">
      <a id="salaryExport" class="link link_export" href="#" download="salary.csv">Экспортировать в CSV</a>
    </div>
    <section>
      ${salaryInRussiaTpl}
    </section>
    <section>
      ${salaryInWorld}
    </section>
  </div>
</div>`;


    function resultTpl(o) {

      var id = (o.id) ? `id="${o.id}"` : '';
      var classname = (o.unit == '$') ? 'cost_dollar' : '';
      var active = (o.active) ? 'result__line-active' : '';
      var body = ( o.description && o.description.length ) ? `<div class="result__body"><p>${o.description}</p></div>` : ''
      var region = (o.region) ? 'result__line-regions' : '';
      var value = (o.value) ? o.value : 0;
      var valueInPeriod = (o.valueInPeriod) ? o.valueInPeriod : 0;
      var data = (o.data) ? `data-value="${o.data}"` : '';
      var title = (o.region) ? o.title : `<span class="info">${o.title}</span>`;
      
      return `<div class="result__line ${active} ${region}" ${id} ${data}>
    <div class="result__head">
      <div class="result__title result__title_info">${title}</div>
      <div class="result__per result__per-month">
        <span class="cost ${classname}">${value}</span> ${o.unit}/мес
      </div>
      <div class="result__per result__per-year">
        <span class="cost ${classname}">${valueInPeriod}</span> ${o.unit}/год
      </div>
    </div>
    ${body}
  </div>`;
    }

    function renderRegions(o) {

      var arr = o.arr;
      var dollar = o.dollar;
      var id = o.id;
      var title = o.title;
      
      let result = resultTpl({
        title: '<span class="emoji">💰</span> Моя зарплата (гросс)',
        description: '',
        unit: '₽',
        active: true  
      });

      

      for (var i = 0; i < arr.length; i++) {

        var name = (arr[i].flag) ? `<span class="emoji">${arr[i].flag}</span> ${arr[i].name}` : arr[i].name;
        var value = (dollar) ? arr[i].value * dollar : arr[i].value;
        var valieInPeriod = value * 12;

        result += resultTpl({
          region: true,
          title: name,
          description: '',
          unit: '₽',
          value: formatUnit(value.toFixed(2)),
          valueInPeriod: formatUnit(valieInPeriod.toFixed(2)),
          data: value
        });
        
        
      }

      return `<div class="tab">
      <div class="tab__header">
        <h2>${title}</h2>
        <div class="tab__description"></div>
      </div>
      <div class="tab__panel tab__panel_hidden" id="${id}">
        ${result}
      </div>
      </div>`;
    }

    return tpl;
  })());

  $app.append($inApp);





  var $input = $inApp.find('.search__input');
  var $result = $inApp.find('.result');

  
  if(location.search && location.search.indexOf('salary') > 0){
    var value = +location.search.split('=')[1];
    
    location.href = '#' + value;
    
    $input.val(value);
    renderResult(value);
  }
  

  if (location.hash) {
    var value = +location.hash.replace('#', '');
    $input.val(value);
    renderResult(value);


    $(document).scrollTop($app.offset().top);

  } else {
    renderResult(0);

  }

  setValue($input);

  $result.find('.result__head .result__per').each(function (i, e) {
    if ($(e).is('.result__per-year')) {
      $(e).addClass('result__per_selected');
    }
  });

  $result.on('click', '.result__per', function () {
    if ($('body').is('.mobile')) {
      $('.result__per').not('.result__per-hour').toggleClass('result__per_selected');
    }
  });

  $result.on('click', '.tab__header', function () {
    $(this).toggleClass('tab__header_open');
    $(this).next().toggleClass('tab__panel_hidden');
  });

  $input.change(function () {
    $(this).keyup();
  });

  $result.find('.result__title_info').on('click', function () {
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
    window.inputtimer = setTimeout(function () {
      if (ym) ym(54839833, 'reachGoal', 'SEARCH_RESULT', {
        value: value
      });

    }, 1000);


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
    
    
    $('#grossPerHour').find('.result__per-hour .cost').html( formatUnit( (d['gross'] / 160).toFixed(2) ));


    $('#salaryInDollar').find('.result__per-month .cost').html(formatUnit((d['net'] / products.dollar).toFixed(2)));
    $('#salaryInDollar').find('.result__per-year .cost').html(formatUnit((d['netInPeriod'] / products.dollar).toFixed(2)));

    $('#salaryExport').attr('href', 'data:text/csv,' + exportToCSV(d));

    updateRegions('#salaryInRussia', d['gross'], d['grossInPeriod']);
    updateRegions('#salaryInWorld', d['gross'], d['grossInPeriod']);


    function updValue(v) {
      $('#' + v).find('.result__per-month .cost').html(formatUnit(d[v]));
      $('#' + v).find('.result__per-year .cost').html(formatUnit(d[v + 'InPeriod']));
    }


    return d;
  }

  function setValue($elem) {

    value = $elem.val();

    if (value) {
      $elem.prop('value', +value).attr('value', +value);
    } else {
      $elem.removeAttr('value');
    }
  }

  function formatUnit(value) {
    value = (/\.\d/.test(value)) ? value + '' : value + '.00';
    value = (/\.\d{2}/.test(value)) ? value : value + '0';
    value = (value).replace(/\d(?=(\d{3})+\.)/g, '$& ');

    var cost = value.split('.');
    value = `<span class="cost__first">${cost[0]}</span><span class="cost__last">.${cost[1]}</span>`;

    return value;
  }





  function updateRegions(target, value, valueInPeriod) {
    
    var $mySalary = $(target).find('.result__line-active').remove().clone();
    var $description = $(target).parent().find('.tab__description');
    var similar = 0;
    var $regions = $(target).find('.result__line-regions');
    var message = '';
    

    $regions.each(function (i, e) {

      if ($(e).data('value') >= value) {
        similar = i;
      }

    });

    $mySalary.find('.result__per-month').find('.cost').html(formatUnit(value));
    $mySalary.find('.result__per-year').find('.cost').html(formatUnit(valueInPeriod));


    if (value >= $($regions[similar]).data('value')) {
      $mySalary.insertBefore($($regions[similar]));
      
      message += `Зарплата ${value} ₽/мес больше чем средняя зарплата в <strong>${$($regions[similar]).find('.result__title').text()}</strong>`;
    
    } else {
      $mySalary.insertAfter($($regions[similar]));
      
      message += ( $($regions[similar + 1]).length ) ? `Зарплата ${value} ₽/мес больше чем средняя зарплата в <strong>${$($regions[similar + 1]).find('.result__title').html()}</strong>` : '';
      
      message += ( $($regions[similar + 1]).length ) ? ` но меньше чем в <strong>${$($regions[similar]).find('.result__title').html()}</strong>` : `Зарплата ${value} ₽/мес меньше чем средняя зарплата в <strong>${$($regions[similar]).find('.result__title').html()}</strong>`;
      
    }
    
    
    $description.html('<p>'+message+'</p>');
    
  }


  function compare(a, b) {
    const valueA = a.value;
    const valueB = b.value;

    let comparison = 0;
    if (valueA > valueB) {
      comparison = -1;
    } else if (valueA < valueB) {
      comparison = 1;
    }
    return comparison;
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

    } else if (nAgt.indexOf("FBAN") != -1 && nAgt.indexOf("FBAV") != -1) {
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
      width: window.screen.width * ratio,
      height: window.screen.height * ratio
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

  function exportToCSV(o) {
    return `"","В месяц (₽/мес)","В год (₽/год)"\r\n
"Зарплата на руки",${o.net},${o.netInPeriod}\r\n
"Оклад",${o.gross},${o.grossInPeriod}\r\n
"Полная стоимость сотрудника для работодателя",${o.fullCost},${o.fullCostInPeriod}\r\n
"Все выплаты государству",${o.nalogAll},${o.nalogAllInPeriod}\r\n
"Налог на доходы физических лиц (НДФЛ)",${o.ndfl},${o.ndflInPeriod}\r\n
"В фонд Обязательного пенсионного страхования (ОПС)",${o.ops},${o.opsInPeriod}\r\n
"Обязательное медицинское страхование жизни (ОМС)",${o.oms},${o.omsInPeriod}\r\n
"В фонд социального страхования (ФСС)",${o.fss},${o.fssInPeriod}\r\n
"Взносы по «травматизму»",${o.insurance},${o.insuranceInPeriod}\r\n`;
  }




});