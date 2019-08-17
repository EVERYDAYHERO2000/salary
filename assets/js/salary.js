function Salary(options){
  var __this = this;
  
  options = options || {};
  this.options = {};
  this.options.ndfl      = options.ndfl      || 13;      //НДФЛ
  this.options.ops       = options.ops       || 22;      //Пенсионное страхование
  this.options.opsMax    = options.opsMax    || 1150000  //Предельная величина дохода для пенсионного страхования
  this.options.ops2      = options.ops2      || 10;      //Пенсионное страхование свыше предельной величины
  this.options.oms       = options.oms       || 5.1;     //Медицинское страхование 
  this.options.omsMax    = options.omsMax    || 865000;  //Предельная величина дохода для медицинского страхования
  this.options.oms2      = options.oms2      || 5.1;     //Медицинское страхование свыше предельной величины 
  this.options.fss       = options.fss       || 2.9;     //Социальное страхование 
  this.options.insurance = options.insurance || 0.2;     //Страховка
  this.options.period    = options.period    || 12;      //период для расчета (месяцев)
  
  
  
  this.result = {};
  
  this.setGross = function(value){
    
    __this.result.gross = Unit(value);
    __this.result.net = Unit(value - ( Percentage(value, __this.options.ndfl) ));
    
    Object.assign(__this.result, setResult(__this.result.gross));
    
    return __this.result;
  }
  
  this.setNet = function(value){
    
    __this.result.net = Unit(value);
    __this.result.gross = Unit(value / ( onePercent(100 - __this.options.ndfl) ));
    
    Object.assign(__this.result, setResult(__this.result.gross));
    
    return __this.result;
  }
  
  function setResult(value){
    let result = {};
    let period = __this.options.period;
    
    result.netInPeriod       = Unit(__this.result.net * period);
    result.grossInPeriod     = Unit(__this.result.gross * period);
    
    result.ops               = Unit( Percentage(value, __this.options.ops) );
    result.opsInPeriod       = Unit( maxOnPeriod(result.grossInPeriod, __this.options.opsMax, __this.options.ops, __this.options.ops2) );
    
    result.oms               = Unit( Percentage(value, __this.options.oms) );
    result.omsInPeriod       = Unit( maxOnPeriod(result.grossInPeriod, __this.options.omsMax, __this.options.oms, __this.options.oms2) );
    
    result.fss               = Unit( Percentage(value, __this.options.fss) );
    result.fssInPeriod       = Unit(result.fss * period);
    
    result.insurance         = Unit( Percentage(value, __this.options.insurance) );
    result.insuranceInPeriod = Unit(result.insurance * period);
    
    result.ndfl              = Unit( Percentage(value, __this.options.ndfl) );
    result.ndflInPeriod      = Unit(result.ndfl * period);
    
    result.fot               = Unit(result.ops + result.oms + result.fss + result.insurance);
    result.fotInPeriod       = Unit(result.fot * period);
    
    result.nalogAll          = Unit(result.ops + result.oms + result.fss + result.insurance + result.ndfl);
    result.nalogAllInPeriod  = Unit(result.opsInPeriod + result.omsInPeriod + result.fssInPeriod + result.insuranceInPeriod + result.ndflInPeriod);

    result.fullCost          = Unit(result.nalogAll + __this.result.net);
    result.fullCostInPeriod  = Unit(result.opsInPeriod + result.omsInPeriod + result.fssInPeriod + result.insuranceInPeriod + result.ndflInPeriod + result.netInPeriod);
    
    return result;
  }
  
  function maxOnPeriod(grossInPeriod, max, percentageOnMin, percentageOnMax){
        
    return ( grossInPeriod < max ) ? Percentage(grossInPeriod, percentageOnMin) : Percentage(max, percentageOnMin) + Percentage( (grossInPeriod - max), percentageOnMax);
    
  }

  function onePercent(value){
    return value / 100;  
  }
  
  function Percentage(from, percentage){
    return onePercent(from) * percentage;
  }
  
  function Unit(value){
    return +( value ).toFixed(2);
  }
  
  
  
  return __this;
  
}