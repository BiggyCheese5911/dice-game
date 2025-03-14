let rannum=0
let rannum1=0
points1=100
points2=100
let store = 10
let timeLeft = 15;
let timer;
let isGameRunning = false;
let isRolling = false;


// let crsound = document.getElementById('crsound');
// let crsound = new Audio("cash-register-kaching-sound-effect-125042.mp3")
    // let vbsound = new Audio("audio.mp3")
    let dsound = new Audio("rolling-dice-2-102706.mp3")
// let csound = new Audio("jazz-music-casino-poker-roulette-las-vegas-background-intro-theme-287498.mp3")
// let csound = document.getElementById("csound")
// csound.setAttribute('autoplay', 'loop')
// onload = csound.play()

display()

// function insertBet(){
//     let bet=Number(document.getElementById("bet").value)
//     points1 -= bet
//     points2 -= bet
//     store=bet*2
//     // crsound.play()
//     // display()
// }



function rollDicePlayer1(){
    // dice 1
    dsound.play()
    // Prevent multiple clicks from affecting the timer
    if (isRolling) return;
    isRolling = true;
    
    // Start the timer if it's not already running
    if (!isGameRunning) {
      startTimer();
      isGameRunning = true;
    }
    
    let count = 0
    interval = setInterval(function (){
        rannum = Math.floor(Math.random()*11+1)
        document.getElementById("results1").innerHTML = rannum;
        document.getElementById("roll").setAttribute("disabled", true)
        console.log(rannum)
        count += 50
        if(count >= 500){
            clearInterval(interval)
            document.getElementById("roll").removeAttribute("disabled");
        }
    }, 50);

    // dice 2
    // dsound.play()
    let count1 = 0
    
    interval1 = setInterval(function (){
        
        rannum1 = Math.floor(Math.random()*11+1)
        document.getElementById("results2").innerHTML = rannum1;
        console.log(rannum1)
        count1 += 50
        if(count1 >= 500){
                    
            if(rannum==rannum1){
                document.getElementById("results").innerHTML="Its a tie!"
                // points1 += store
                // points2 += store
            }

            if(rannum>rannum1){
                document.getElementById("results").innerHTML="Player 1 won!"
                points1 += store
                points2 -= store
                console.log(points1)
                console.log(points2)
            }

            if(rannum1>rannum){
                document.getElementById("results").innerHTML="Player 2 won!"
                points2 += store
                points1 -= store
                console.log(points2)
                console.log(points1)
            }

            if(points1 == 0){
                document.getElementById('results').innerHTML = "Game over, Player 2 wins! Reset Game to play again!"
                document.getElementById('roll').style.display = "none"
            }

            if(points2 == 0){
                document.getElementById('results').innerHTML = "Game over, Player 1 wins! Reset Game to play again!"
                document.getElementById('roll').style.display = "none"
            }

            // vbsound.play()

            display()

            clearInterval(interval1)

        }
        
    }, 50)
// Allow rolling again after a short delay
setTimeout(() => {
    isRolling = false;
  }, 500);
    
}


function startTimer() {
    // Clear any existing timer to prevent multiple timers
    clearInterval(timer);
    
    timeLeft = 15;
    document.getElementById('time').textContent = timeLeft;
    
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById('time').textContent = timeLeft;
      
      if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
      }
    }, 1000);
  }


  function endGame() {
    isGameRunning = false;
    document.getElementById('roll').disabled = true;
    
    const player1Points = parseInt(document.getElementById('points1').textContent);
    const player2Points = parseInt(document.getElementById('points2').textContent);
    
    let finalResult = "";
    if (player1Points > player2Points) {
      finalResult = "Game Over! Player 1 wins with " + player1Points + " dollars!";
    } else if (player2Points > player1Points) {
      finalResult = "Game Over! Player 2 wins with " + player2Points + " dollars!";
    } else {
      finalResult = "Game Over! It's a tie with " + player1Points + " dollars each!";
    }
    
    document.getElementById('results').textContent = finalResult;
    document.getElementById('roll').style.display = 'none'
  }

// function rollDicePlayer2(){
    

// }



display()

// function resetSpin(){
//     rannum=0
//     rannum1=0
//     document.getElementById("results1").innerHTML=rannum
//     document.getElementById("results2").innerHTML=rannum1
//     document.getElementById("results").innerHTML="Winner?"
// }

function resetGame(){
    rannum=0
    rannum1=0
    points1=100
    points2=100
    // bet=0
    store=10
    time = 15
    document.getElementById("results1").innerHTML=rannum
    document.getElementById("results2").innerHTML=rannum1
    document.getElementById("points1").innerHTML=points1
    document.getElementById("points2").innerHTML=points2
    document.getElementById("results").innerHTML="Results"
    document.getElementById('roll').style.display = "block"
    document.getElementById('roll').style.margin = 'auto'
    document.getElementById('time').innerHTML = time
    clearInterval(timer);
    timeLeft = 15;
    isGameRunning = false;
    isRolling = false;
}

function display(){
    document.getElementById("points1").innerHTML=points1
    document.getElementById("points2").innerHTML=points2
}