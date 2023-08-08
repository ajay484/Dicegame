var a=Math.random();
a=a*6;
var res=Math.floor(a);
res=res+1;

var randomimage= "dice"+res +".png";  //dice6.png;
var randomimagesource="../dicechallenge/Dicee Challenge - Completed/images/" + randomimage;

document.querySelectorAll("img")[0].setAttribute("src",randomimagesource);
var b=Math.random();
b=b*6;
var res2=Math.floor(b);
res2=res2+1;
var randomimagesource2="../dicechallenge/Dicee Challenge - Completed/images/dice" +res2 +".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

if(res>res2){
  document.querySelector("h1").innerHTML="Player 1 Wins  🏆";
}

else if(res2>res){
  document.querySelector("h1").innerHTML="Player 2 Wins  🏆 ";
}

else{
  document.querySelector("h1").innerHTML="Draw";
}


