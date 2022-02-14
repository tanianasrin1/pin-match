function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if (pinString.length == 4){
        return pin;
    }
    else{
        // console.log('got 3 dogit calling again', pin)
        return getPin();
    }
   
} 

function genaratePin(){
    const pin = getPin()
    document.getElementById('display-pin').value = pin
    
}

document.getElementById('key-pad').addEventListener('click',function(event){
   const number = event.target.innerText;
   const calcInput = document.getElementById('typed-numbers');
   if(isNaN (number)){
      if(number == 'C'){
          calcInput.value = '';
      }
   }
   else{
   
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
   }
 
})

function veryfyPin(){
    const pin = document.getElementById('display-pin').value
    const typedNumber = document.getElementById('typed-numbers').value;
    const succsessMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if(pin == typedNumber){
       
       succsessMessage.style.display = 'block';
       failError.style.display = 'none';

    }

    else {
       
        failError.style.display = 'block';
        succsessMessage.style.display = 'none';
    }
}