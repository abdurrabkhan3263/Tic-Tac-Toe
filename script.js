let clickAudio = new Audio("ting.mp3")
let winAudio = new Audio("win.mp3")
let turn = "X"
let won = false


// Function

console.log("Welcome To Tic Tac Teo Game");

function clear(){
    const text = document.querySelectorAll('.text');
    text.forEach((value)=>{
        value.innerHTML = "";
    })
}


// FUNCTION TO CHANGE THE TURN
const changeturn = () =>{
    return turn === "X" ? "0" : "X";
}

// Score Function

let scoreX = 0;
let scoreY = 0;

function reset(){
    scoreX = 0;
    scoreY = 0;
    document.getElementById(`X`).value = scoreX;
    document.getElementById(`Y`).value = scoreY;
}



function score(k)
{
    if(k === "X"){
        scoreX = scoreX + 1;
        document.getElementById(`${k}`).value = scoreX;
    }
    else if(k == 0){
    scoreY = scoreY + 1;
    document.getElementById("Y").value = scoreY;
    }
}



// FUNCTION TO CHEACK THE WIN
const win = () =>{
    const boxtexts = document.querySelectorAll('.text')
    let wins = [
        [0 , 1 , 2 , 0 , 5 , 0],
        [3 , 4 , 5 , 0 , 15 , 0],
        [6 , 7 , 8 , 0 , 25 , 0],
        [0 , 3 , 6 , -10 , 15 , 90],
        [1 , 4 , 7 , 0 , 15 , 90],
        [2 , 5 , 8 , 10 , 15 , 90],
        [0 , 4 , 8 , 0 , 15 , 45],
        [2 , 4 , 6 , 0 , 15 , 315],
    ];
    wins.forEach(value=>{
        if((boxtexts[value[0]].innerHTML === boxtexts[value[1]].innerHTML) && (boxtexts[value[1]].innerHTML === boxtexts[value[2]].innerHTML) && (boxtexts[value[0]].innerHTML !== "")){
            won = true;
            if(won){
                document.querySelector('.info').innerHTML = `${boxtexts[value[0]].innerText} is Won`;
                score(`${boxtexts[value[0]].innerText}`);
                document.querySelector(".line").style.height = "4px";
                document.querySelector(".line").style.width = "30vw";
                document.querySelector(".line").style.transform = `translate(${value[3]}vw , ${value[4]}vw) rotate(${value[5]}deg)`;
                winAudio.play()
            }
            document.getElementsByClassName('imgg')[0].style.width = "500px";
            setTimeout(() => {
                document.querySelector(".line").style.height = "0";
                document.querySelector(".line").style.width = "0";
                won = false;
                clear()
                document.getElementsByClassName('imgg')[0].style.width = "0px"
            },1500);
        }
    })
}


// GAME LOGIN
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((value)=>{
    let boxtext = value.querySelector(".text")
    value.addEventListener("click",()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeturn()
            clickAudio.play();
            win();
            if(!won){
                document.querySelector('.info').innerHTML = "Turn is " + turn;
            }
        }
    })
})



// button
const btn = document.querySelector("#reset");

btn.addEventListener('click',()=>{
    reset();
    const boxtexts = document.querySelectorAll('.text')
    boxtexts.forEach((value)=>{
        if(value.innerText !== ""){
            clear();
        }
    })
})