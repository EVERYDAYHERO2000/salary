$(function(){
  var salary = new Salary();
  
  var $app = $('#app');
  
  var $inApp = $(
`<din>
  <div class="search">
    <input type="number" min="0" max="3000000" autofocus class="search__input" />
    <div class="search__placeholder"><span>Cумма которая получается на руки (нетто)</span></div>
  </div>
  <div class="result"></div>
</div>`
  );
  
  
  
  var $input = $inApp.find('.search__input');
  var $result = $inApp.find('.result');
  
  
  if ( location.hash ){
    var value = +location.hash.replace('#','');
    $input.val(value);
    renderResult(value);
    
  } else {
    renderResult(0);
  }
  
  setValue($input);
  
  $input.change(function(){
    $(this).keyup();
  });
  
  $input.keyup(function(){
    var value = +$(this).val();
    
    
    setValue($(this));

    
    var d = renderResult(value);
    
    if ($(this).val()){
      $(this).addClass('search__input_not-empty');
    } else {
      $(this).removeClass('search__input_not-empty');
    }
    
    
    location.hash = '#' + d.net;
    
  });
  
  function renderResult(value){
    var d = salary.setNet(value);
    var $data = $(
`
<div class="result__line"><div>Оклад (гросс)</div><div><span class="cost">${formatUnit(d.gross)}</span>&nbsp;руб.</div></div>
<div class="result__line"><div>Стоимость сотрудника для работодателя в месяц</div><div><span class="cost">${formatUnit(d.fullCost)}</span>&nbsp;руб.</div></div>
<hr>
<div class="result__line"><div>Столько на вас зарабатывает государство в месяц</div><div><span class="cost">${formatUnit(d.nalogAll)}</span>&nbsp;руб.</div></div>
<hr>
<div class="result__line"><div>Налог на доходы физических лиц (НДФЛ)</div><div><span class="cost">${formatUnit(d.ndfl)}</span>&nbsp;руб.</div></div>
<div class="result__line"><div>В фонд Обязательного пенсионного страхования (ОПС)</div><div><span class="cost">${formatUnit(d.ops)}</span>&nbsp;руб.</div></div>
<div class="result__line"><div>Обязательное медицинское страхование жизни (ОМС)</div><div><span class="cost">${formatUnit(d.oms)}</span>&nbsp;руб.</div></div>
<div class="result__line"><div>В фонд социального страхования (ФСС)</div><div><span class="cost">${formatUnit(d.fss)}</span>&nbsp;руб.</div></div>
<div class="result__line"><div>Взносы по «травматизму»</div><div><span class="cost">${formatUnit(d.insurance)}</span>&nbsp;руб.</div></div>
`
    );
    
    $result.html('').append($data);
    
    return d;
  }
  
  function setValue($elem){
    
    value = $elem.val();
    
    if (value){
      $elem.attr('value', value);
    } else {
      $elem.removeAttr('value');
    }
  }
  
  function formatUnit(value){
    value = (/\.\d/.test(value)) ? value + '' : value + '.00';
    return ( value ).replace(/\d(?=(\d{3})+\.)/g, '$& ');
  }
  
  $app.append($inApp);
  
});
