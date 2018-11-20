var numbers = document.querySelectorAll('.numb_btn');
var operations = document.querySelectorAll('.oper_btn');
var decimalBtn = document.querySelector('.decimal');
//var resultBtn = document.querySelector('.result');
var clearBtns = document.querySelectorAll('.clear_btn');
var display = document.querySelector('.display');
var memCurNumb = 0;
var memNewNumb = false;
var memPendOper = '';



for(var i = 0; i < numbers.length; i++){
   var numberBtn = numbers[i];
   numberBtn.addEventListener('click', function(e){
      numberPress(e.srcElement.defaultValue);
   });
};

for(var i = 0; i < operations.length; i++){
   var operBtn = operations[i];
   operBtn.addEventListener('click', function(e){
      operation(e.srcElement.defaultValue);
   });
};

for(var i = 0; i < clearBtns.length; i++){
   var clearBtn = clearBtns[i];
   clearBtn.addEventListener('click', function(e){
      clear(e.srcElement.defaultValue)
   });
};

decimalBtn.addEventListener('click', decimal);

//resultBtn.addEventListener('click', result);





function numberPress(val){
   if(memNewNumb){
      display.value = val;
      memNewNumb = false; 
   }else{
      if(display.value === '0'){
         display.value = val;
      }else {
         display.value += val;
      }
   };
  
};

function operation(symbol){
   var locOper = display.value;

   if(memNewNumb && memPendOper !== '='){
      display.value = memCurNumb;
   }else{
      memNewNumb = true;
      if(memPendOper === '+'){
         memCurNumb += parseFloat(locOper); 
      }else if (memPendOper === '-'){
         memCurNumb -=parseFloat(locOper); 
      }else if(memPendOper === '*'){
         memCurNumb *= parseFloat(locOper); 
      }else if(memPendOper === '/'){
         memCurNumb /= parseFloat(locOper); 
      }else {
         memCurNumb = parseFloat(locOper);
      };
      display.value = memCurNumb;
      memPendOper = symbol;
   };
   
};

function decimal(arg){
   var locDecMem = display.value;

   if(memNewNumb){
      locDecMem = '0.';
      memNewNumb = false;
   }else {
      if(locDecMem.indexOf('.') === -1){
      locDecMem += '.';
      };
   };
   display.value = locDecMem;
};

function clear(id){
   if(id === 'CE'){
      display.value = '0';
      memNewNumb = true;
   }else if(id === 'C'){
      display.value = '0';
      memNewNumb = true;
      memCurNumb  = 0;
      memPendOper = '';
   }
};

