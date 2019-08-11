$(function () {
  var salary = new Salary();
  
  $(window).resize(setScale);
  setScale();
  
  function setScale(){
    if ($(window).outerWidth() <= 500){
      $('#app').addClass('mobile');
    } else {
      $('#app').removeClass('mobile');
    }
  }

  var $app = $('#app').html('');
  
  var costs = `
<div class="result__per-month">
  <span class="cost">0</span> ₽/мес
</div>
<div class="result__per-year">
  <span class="cost">0</span> ₽/год
</div>
`;

  var $inApp = $(`
<din>
  <form>
  <div class="search">
    <input name="search" type="number" min="0" max="3000000" autofocus="" class="search__input search__input_not-empty" value="0">
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
        <p>Оклад до вычета НДФЛ. Именно гросс оклад фиксируются в трудовом договоре с сотрудником</p>
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
        <p>Работодатель выплачивает за сотрудника налог государству как налоговый агент. Налог на доход для физического лица включен в оклад сотрудника и составляет 13% от оклада</p>
      </div>
    </div>

    <div class="result__line" id="ops">
      <div class="result__head">
        <div class="result__title">В фонд Обязательного пенсионного страхования (ОПС)</div>
        ${costs}
      </div>
      <div class="result__body">
        <p>Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет 22% от оклада</p>
      </div>
    </div>

    <div class="result__line" id="oms">
      <div class="result__head">
        <div class="result__title">Обязательное медицинское страхование жизни (ОМС)</div>
        ${costs}
      </div>
      <div class="result__body">
        <p>Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет 5,1% от оклада</p>
      </div>
    </div>

    <div class="result__line" id="fss">
      <div class="result__head">
        <div class="result__title">В фонд социального страхования (ФСС)</div>
        ${costs}
      </div>
      <div class="result__body">
        <p>Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет 2,9% от оклада</p>
      </div>
    </div>

    <div class="result__line" id="insurance">
      <div class="result__head">
        <div class="result__title">Взносы по «травматизму»</div>
        ${costs}
      </div>
      <div class="result__body">
        <p>Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника. Размер отчислений зависит от присвоенного класса профессионального риска. Минимально 0,2% от оклада</p>
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


    location.hash = '#' + d.net;


  });

  function renderResult(value) {
    var d = salary.setNet(value);
    
    $('#gross').find('.result__per-month .cost').text(formatUnit(d.gross));
    $('#gross').find('.result__per-year .cost').text(formatUnit(d.grossInPeriod));
    
    $('#fullCost').find('.result__per-month .cost').text(formatUnit(d.fullCost));
    $('#fullCost').find('.result__per-year .cost').text(formatUnit(d.fullCostInPeriod));
    
    $('#nalogAll').find('.result__per-month .cost').text(formatUnit(d.nalogAll));
    $('#nalogAll').find('.result__per-year .cost').text(formatUnit(d.nalogAllInPeriod));
    
    $('#ndfl').find('.result__per-month .cost').text(formatUnit(d.ndfl));
    $('#ndfl').find('.result__per-year .cost').text(formatUnit(d.ndflInPeriod));
    
    $('#ops').find('.result__per-month .cost').text(formatUnit(d.ops));
    $('#ops').find('.result__per-year .cost').text(formatUnit(d.opsInPeriod));
    
    $('#oms').find('.result__per-month .cost').text(formatUnit(d.oms));
    $('#oms').find('.result__per-year .cost').text(formatUnit(d.omsInPeriod));
    
    $('#fss').find('.result__per-month .cost').text(formatUnit(d.fss));
    $('#fss').find('.result__per-year .cost').text(formatUnit(d.fssInPeriod));
    
    $('#insurance').find('.result__per-month .cost').text(formatUnit(d.insurance));
    $('#insurance').find('.result__per-year .cost').text(formatUnit(d.insuranceInPeriod));
    
    
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

    return (value).replace(/\d(?=(\d{3})+\.)/g, '$& ');
  }



});