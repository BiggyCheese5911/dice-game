let rannum=0
let rannum1=0
points1=100
points2=100
let store = bet

display()

function insertBet(){
    let bet=Number(document.getElementById("bet").value)
    points1 -= bet
    points2 -= bet
    store=bet*2
    display()
}

function rollDicePlayer1(){
    rannum = Math.floor(Math.random()*1+1)
    console.log(rannum)
    document.getElementById("results1").innerHTML=rannum
}

function rollDicePlayer2(){
    rannum1 = Math.floor(Math.random()*1+1)
    console.log(rannum1)
    document.getElementById("results2").innerHTML=rannum1

    if(rannum==rannum1){document.getElementById("results").innerHTML="Its a tie!"
        points1 += store/2
        points2 += store/2
    }

    if(rannum>rannum1){document.getElementById("results").innerHTML="Player 1 won!"
        points1 += store
        console.log(points1)
    }
else{
    document.getElementById("results").innerHTML="Player 2 won!"
    points2 += store
    console.log(points2)
}
if(rannum==rannum1){document.getElementById("results").innerHTML="Its a tie!"}

display()
}

function resetGame(){
    rannum=0
    rannum1=0
    document.getElementById("results1").innerHTML=rannum
    document.getElementById("results2").innerHTML=rannum1
    document.getElementById("results").innerHTML="Results"
}

function display(){
    document.getElementById("points1").innerHTML=points1
    document.getElementById("points2").innerHTML=points2
}