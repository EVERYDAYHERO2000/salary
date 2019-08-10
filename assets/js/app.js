$(function () {
  var salary = new Salary();

  var $app = $('#app').html('');

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
        <div class="result__per-month">
          <span class="cost">0</span> ₽/мес
        </div>
      </div>
      <div class="result__body">
        <p>Оклад до вычета НДФЛ. Именно гросс оклад фиксируются в трудовом договоре с сотрудником</p>
      </div>
    </div>

    <div class="result__line" id="fullCost">
      <div class="result__head">
        <div class="result__title">Стоимость сотрудника для работодателя</div>
        <div class="result__per-month">
          <span class="cost">0</span> ₽/мес
        </div>
      </div>
      <div class="result__body">
        <p>Зарплата сотруднику на руки плюс сумма всех выплат за сотрудника государству. Расходы на организацию рабочего места для сотрудника не учитываются</p>
      </div>
    </div>

    <hr>

    <div class="result__line" id="nalogAll">
      <div class="result__head">
        <div class="result__title">Все выплаты государству</div>
        <div class="result__per-month">
          <span class="cost">0</span> ₽/мес
        </div>
      </div>
      <div class="result__body">
        <p>Сумма всех выплат государству: НДФЛ, ОПС, ОМС, ФСС и взносов по «травматизму»</p>
      </div>
    </div>

    <hr>

    <div class="result__line" id="ndfl">
      <div class="result__head">
        <div class="result__title">Налог на доходы физических лиц (НДФЛ)</div>
        <div class="result__per-month">
          <span class="cost">0</span> ₽/мес
        </div>
      </div>
      <div class="result__body">
        <p>Работодатель выплачивает за сотрудника налог государству как налоговый агент. Налог на доход для физического лица включен в оклад сотрудника и составляет 13% от оклада</p>
      </div>
    </div>

    <div class="result__line" id="ops">
      <div class="result__head">
        <div class="result__title">В фонд Обязательного пенсионного страхования (ОПС)</div>
        <div class="result__per-month">
          <span class="cost">0</span> ₽/мес
        </div>
      </div>
      <div class="result__body">
        <p>Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет 22% от оклада</p>
      </div>
    </div>

    <div class="result__line" id="oms">
      <div class="result__head">
        <div class="result__title">Обязательное медицинское страхование жизни (ОМС)</div>
        <div class="result__per-month">
          <span class="cost">0</span> ₽/мес
        </div>
      </div>
      <div class="result__body">
        <p>Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет 5,1% от оклада</p>
      </div>
    </div>

    <div class="result__line" id="fss">
      <div class="result__head">
        <div class="result__title">В фонд социального страхования (ФСС)</div>
        <div class="result__per-month">
          <span class="cost">0</span> ₽/мес
        </div>
      </div>
      <div class="result__body">
        <p>Отчисления идет за счет работодателя. Высчитывается из оклада сотрудника и составляет 2,9% от оклада</p>
      </div>
    </div>

    <div class="result__line" id="insurance">
      <div class="result__head">
        <div class="result__title">Взносы по «травматизму»</div>
        <div class="result__per-month">
          <span class="cost">0</span> ₽/мес
        </div>
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
    
    $('#fullCost').find('.result__per-month .cost').text(formatUnit(d.fullCost));
    
    $('#nalogAll').find('.result__per-month .cost').text(formatUnit(d.nalogAll));
    
    $('#ndfl').find('.result__per-month .cost').text(formatUnit(d.ndfl));
    
    $('#ops').find('.result__per-month .cost').text(formatUnit(d.ops));
    
    $('#oms').find('.result__per-month .cost').text(formatUnit(d.oms));
    
    $('#fss').find('.result__per-month .cost').text(formatUnit(d.fss));
    
    $('#insurance').find('.result__per-month .cost').text(formatUnit(d.insurance));
    
    
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
    return (value).replace(/\d(?=(\d{3})+\.)/g, '$& ');
  }



});