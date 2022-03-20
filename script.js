

let num1;
let num2;
let screen = document.getElementById("screen").value;
//screen.addEventListener('click', clear)

function clears(){
    screen = document.getElementById("screen").value ===  '0' ? '' : document.getElementById("screen").value = '';
    document.getElementById("disable").disabled = false;
    NewNum2 = undefined;
    

}
var decimal = (encodeURI("."));

var negPos = (encodeURI("-"));

let decCount = 0;
function EnterNumber(number) {
    
    if(screen === 0){
        screen = document.getElementById("screen").value =  '';
        
    
    }

    screen = document.getElementById("screen").value += number;
    
    
    if(screen.includes(encodeURI("."))) {
    document.getElementById("disable").disabled = true;
        //disable
        }  
    
      
    return screen;
    

}
   
function myFunction() {
    screen = document.getElementById("screen").value = screen *= -1;
  }





function getNum2() {
   
    num2 = parseFloat(screen);
    
}


let Adds = false;
let AddAnother = false;

let num3;
function Add(){
    if(NewNum2 !== undefined) {
        screen = document.getElementById("screen").value =  '';
        document.getElementById("disable").disabled = false;
        AddAnother = true;
    }
    else{
    NewNum = parseFloat(screen);
    screen = document.getElementById("screen").value =  '';
    document.getElementById("disable").disabled = false;
    Adds = true;
    }
}

let Subs = false;
let SubAnother = false;

function Subtract(){
    if(NewNum2 !== undefined) {
        screen = document.getElementById("screen").value =  '';
        document.getElementById("disable").disabled = false;
        SubAnother = true;
    }
    else{
    NewNum = parseFloat(screen);
    screen = document.getElementById("screen").value =  '';
    document.getElementById("disable").disabled = false;
    Subs = true;
    }
}

let Divs = false;
let DivAnother = false;

function Divide(){
    if(NewNum2 !== undefined) {
        screen = document.getElementById("screen").value =  '';
        document.getElementById("disable").disabled = false;
        DivAnother = true;
    }
    else{
    NewNum = parseFloat(screen);
    screen = document.getElementById("screen").value =  '';
    document.getElementById("disable").disabled = false;
    Divs = true;
    }
}

let Multis = false;
let MultAnother = false;

function Multiply(){
    if(NewNum2 !== undefined) {
        screen = document.getElementById("screen").value =  '';
        document.getElementById("disable").disabled = false;
        MultAnother = true;
    }
    else{
    NewNum = parseFloat(screen);
    screen = document.getElementById("screen").value =  '';
    document.getElementById("disable").disabled = false;
    Multis = true;
    }
}


let NewNum2;

function equal() {

    if(Subs === true){
        getNum2();
        document.getElementById("screen").value = NewNum - num2;
        NewNum2 = NewNum - num2;
        Subs = false;
    }
    else if(SubAnother === true){
        getNum2();
        NewNum2 = document.getElementById("screen").value = NewNum2 - num2;
        SubAnother = false;
    }



    if(Adds === true){
        getNum2();
        document.getElementById("screen").value = NewNum + num2;
        NewNum2 = NewNum + num2;
        Adds = false;
        
        }
    else if(AddAnother === true){
        getNum2();
        NewNum2 = document.getElementById("screen").value = NewNum2 + num2;
        AddAnother = false;

    }


    if(Divs === true){
        getNum2();
        document.getElementById("screen").value = NewNum / num2;
        NewNum2 = NewNum / num2;
        Divs = false;
        
        }
    else if(DivAnother === true){
        getNum2();
        NewNum2 = document.getElementById("screen").value = NewNum2 / num2;
        DivAnother = false;

    }

    
    if(Multis === true){
        getNum2();
        document.getElementById("screen").value = NewNum * num2;
        NewNum2 = NewNum * num2;
        Multis = false;
        
        }
    else if(MultAnother === true){
        getNum2();
        NewNum2 = document.getElementById("screen").value = NewNum2 * num2;
        MultAnother = false;

    }
}
