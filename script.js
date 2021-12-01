var seven = document.querySelector(".seven");
//var screen = document.querySelector("screen").value;
//let screen2 = document.querySelector("screen").value;


let num1;
let num2;
let screen;
//screen.addEventListener('click', clear)

function clears(){
    screen = document.getElementById("screen").value ===  '0' ? '' : document.getElementById("screen").value = 0;
    

}

function EnterNumber(number) {
    if(screen === 0){
        screen = document.getElementById("screen").value =  '';
    }
    screen = document.getElementById("screen").value += number;
     return screen;


}


function getNum2() {
    num2 = parseInt(screen);
}



function Add(){
    num1 = parseInt(screen);
    screen = document.getElementById("screen").value =  '';
    
}

function Subtract(){
    num1 = parseInt(screen);
    screen = document.getElementById("screen").value =  '';
    
}



function equal() {
    getNum2();
    
    document.getElementById("screen").value = num1 + num2;

}
