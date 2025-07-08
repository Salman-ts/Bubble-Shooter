function makebubble (){
    var clutter = "";

for (var i=1; i<=144; i++) {
    var rn=Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;

}

var timer = 60;
var score = 0;
var hitrn = 0;
var gameStarted = false;

  function increaseScore(){
     score += 10;
     document.querySelector("#scoreval").innerHTML = score;
  }

  function decreaseScore(){
     if (score >= -90) {
         score -= 10;   
        document.querySelector("#scoreval").innerHTML = score;
        } 
    }



   function getnewhit(){
       hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML = hitrn;
   }




function runtimer (){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timervalue").textContent = timer;
            if (timer === 10){
                document.querySelector("#timervalue").style.color = "red";
            }
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over! Your score is ${score}<h1>`;
        }
    },1000);
}


function startGame() {
    timer = 60;
    score = 0;
    document.querySelector("#scoreval").innerHTML = score;
    document.querySelector("#timervalue").textContent = timer;
    gameStarted = true;
    makebubble();
    getnewhit();
    runtimer();
    document.querySelector("#startBtn").style.display = "none";
}

document.querySelector("#pbtm").addEventListener("click", function(dets) {
    if (!gameStarted) return;
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makebubble();
        getnewhit();
    } else if (!isNaN(clickednum)) {
        showCustomToast('Missed! Try again.');
        decreaseScore();

    }
});

function showCustomToast(message) {
    var toast = document.getElementById("customToast");
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(function() {
        toast.style.display = "none";
    }, 5000);
}

document.getElementById("startBtn").addEventListener("click", startGame);



