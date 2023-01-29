function start(){

var num1 = Math.random() *6;
num1 = Math.floor(num1) +1;
console.log(num1);
var num2= Math.random() *6;
num2 = Math.floor(num2) +1;
console.log(num2);
switch(num1){
    case 1 :
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
        break;
    case 2 :
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
        break;
    case 3 :
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
        break;
    case 4 :
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
        break;
    case 5 :
        document.querySelector(".img1").setAttribute("src","images/dice5.png");
        break;
    case 6 :
        document.querySelector(".img1").setAttribute("src","images/dice6.png");
        break;
}
switch(num2){
    case 1 :
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
        break;
    case 2 :
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
        break;
    case 3 :
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
        break;
    case 4 :
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
        break;
    case 5 :
        document.querySelector(".img2").setAttribute("src","images/dice5.png");
        break;
    case 6 :
        document.querySelector(".img2").setAttribute("src","images/dice6.png");
        break;
}

if (num1 == num2){
    document.querySelector("h1").innerHTML="Its a Draw !"
}else if(num1>num2){
    document.querySelector("h1").innerHTML="Player 1 Wins !"
}else{
    document.querySelector("h1").innerHTML="Player 2 Wins !"
}
}