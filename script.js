function makebubble (){
    var clutter = "";

for (var i=1; i<=168; i++) {
    var rn=Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;

}
 var timer = 60;
var score = 0;
var hitrn = 0;


  function increaseScore(){
     score += 10;
     document.querySelector("#scoreval").innerHTML = score;
  }




   function getnewhit(){
       hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML = hitrn;
   }




function runtimer (){
    var timerint=setInterval(function(){
        if(timer > 0){
        timer--;
         document.querySelector("#timervalue").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `Game Over! Your score is ${score}`;
        }
    },1000);
  
}
document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent)
    if(clickednum === hitrn){
        increaseScore();
        makebubble();
        getnewhit();
        
    }
});

runtimer();
makebubble();
getnewhit();

