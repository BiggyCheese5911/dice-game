let rannum=0
let rannum1=0
points1=100
points2=100
let store = 10

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
    let count = 0
    interval = setInterval(function (){
        rannum = Math.floor(Math.random()*10+2)
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
        rannum1 = Math.floor(Math.random()*10+2)
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
    document.getElementById("results1").innerHTML=rannum
    document.getElementById("results2").innerHTML=rannum1
    document.getElementById("points1").innerHTML=points1
    document.getElementById("points2").innerHTML=points2
    document.getElementById("results").innerHTML="Results"
    document.getElementById('roll').style.display = "block"
    document.getElementById('roll').style.margin = 'auto'
}

function display(){
    document.getElementById("points1").innerHTML=points1
    document.getElementById("points2").innerHTML=points2
}


// // set timeout and clear timeout example

// let countdownValue = 5;
// let countdownTimerId = null

// // function to update the countdown display
// function updateCountdown(){
//     document.getElementById('timeout-display').textContent = `Countdown: ${countdownValue}`
// }

// // function to handle the countdown logic
// function countdown(){
//     countdownValue--;
//     updateCountdown();

//     if(countdownValue > 0){
//         // if not at zero yet, schedule the next countdown step
//         countdownTimerId = setTimeout(countdown, 1000);
//     }else{
//         // when we reach zero, show a message   
//         document.getElementById('timeout-display').textContent = 'Countdown: Complete!';
//         countdownTimerId = null;
//     }
// }

// // set up event listeners for the countdown buttons
// document.getElementById('start-timeout').addEventListener('click', function(){
//     // only start if not already counting down
//     if(countdownTimerId === null){
//         countdownValue = 5;
//         updateCountdown();
//         countdownTimerId = setTimeout(countdown, 1000)
//     }
// });

// document.getElementById('cancel-timeout').addEventListener('click',
//     function() {
//                 // Only cancel if a countdown is in progress
//                 if (countdownTimerId !== null) {
//                 clearTimeout(countdownTimerId);
//                 countdownTimerId = null;
//                 document.getElementById('timeout-display').textContent =
//     'Countdown: Canceled!';
//                 }
//             });