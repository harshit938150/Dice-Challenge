let rv1,rv2;
rv1=Math.floor(Math.random() * 6)+1;
rv2=Math.floor(Math.random() * 6)+1;

let dice1="images/dice"+rv1+".png";
let dice2="images/dice"+rv2+".png";


a=document.querySelectorAll("img")[0];
a.setAttribute("src",dice1);
b=document.querySelectorAll("img")[1];
b.setAttribute("src",dice2);



if(rv1>rv2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if(rv2>rv1){
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!!";
}