let display = document.getElementById('display');

function append(value){
    display.textContent += value;
}

function clearit(){
    display.textContent = '';
}

function Result(){
    try{
        display.textContent = eval(display.textContent);
    }
    catch(error){
        display.textContent='Error';
    }
}