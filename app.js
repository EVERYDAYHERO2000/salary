$(function(){
  var salary = new Salary();
  
  var $app = $('#app');
  
  var $inApp = $(
`<din>
  <input type="number" min="0" autofocus placeholder="Укажите сумму которую вы получаете на руки (нетто)" class="input" />
  <div class="result"></div>
</div>`
  );
  
  
  
  var $input = $inApp.find('.input');
  var $result = $inApp.find('.result');
  
  
  
  if ( location.hash ){
    var value = +location.hash.replace('#salary=','');
    $input.val(value);
    renderResult(value);
    
  } else {
    renderResult(0);
  }
  
  
  $input.change(function(){
    $(this).keyup();
  });
  
  $input.keyup(function(){
    var value = +$(this).val();
    
    var d = renderResult(value);
    
    
    location.hash = '#salary=' + d.net;
    
  });
  
  function renderResult(value){
    var d = salary.setNet(value);
    var $data = $(
`
<div class="result__line"><div>Стоимость сотрудника для работодателя в месяц</div><div><span class="cost">${formatUnit(d.fullCost)}</span> руб.</div></div>
<hr>
<div class="result__line"><div>Столько на вас зарабатывает государство в месяц</div><div><span class="cost">${formatUnit(d.nalogAll)}</span> руб.</div></div>
<hr>
<div class="result__line"><div>Налог на доходы физических лиц (НДФЛ)</div><div><span class="cost">${formatUnit(d.ndfl)}</span> руб.</div></div>
<div class="result__line"><div>Идет в фонд Обязательного пенсионное страхование (ОПС)</div><div><span class="cost">${formatUnit(d.ops)}</span> руб.</div></div>
<div class="result__line"><div>Обязательное медицинское страхование жизни (ОМС)</div><div><span class="cost">${formatUnit(d.oms)}</span> руб.</div></div>
<div class="result__line"><div>В фонд социального страхования (ФСС)</div><div><span class="cost">${formatUnit(d.fss)}</span> руб.</div></div>
<div class="result__line"><div>Взносы по «травматизму»</div><div><span class="cost">${formatUnit(d.insurance)}</span> руб.</div></div>
`
    );
    
    $result.html('').append($data);
    
    return d;
  }
  
  function formatUnit(value){
    value = (/\.\d/.test(value)) ? value + '' : value + '.00';
    return ( value ).replace(/\d(?=(\d{3})+\.)/g, '$& ');
  }
  
  $app.append($inApp);
  
});
