var ass=document.querySelectorAll("img");
var boobs=document.querySelector("h1");
var a,b;


a=Math.floor(Math.random()*6);
b=Math.floor(Math.random()*6);

if(a>b){
boobs.innerHTML="Player 1 Wins";
}
else if(a<b){
    boobs.innerHTML="Player 2 Wins";
    }
    else if(a==b){
        boobs.innerHTML="Draw";
      
        }
if(a==0){
    ass[0].setAttribute("src","./images/dice1.png")
}
else if(a==1){
    ass[0].setAttribute("src","./images/dice2.png")
}
else if(a==2){
    ass[0].setAttribute("src","./images/dice3.png")
}
else if(a==3){
    ass[0].setAttribute("src","./images/dice4.png")
}
else if(a==4){
    ass[0].setAttribute("src","./images/dice5.png")
}
else if(a==5){
    ass[0].setAttribute("src","./images/dice6.png")
}


if(b==0){
    ass[1].setAttribute("src","./images/dice1.png")
}
else if(b==1){
    ass[1].setAttribute("src","./images/dice2.png")
}
else if(b==2){
    ass[1].setAttribute("src","./images/dice3.png")
}
else if(b==3){
    ass[1].setAttribute("src","./images/dice4.png")
}
else if(b==4){
    ass[1].setAttribute("src","./images/dice5.png")
}
else if(b==5){
    ass[1].setAttribute("src","./images/dice6.png")
}