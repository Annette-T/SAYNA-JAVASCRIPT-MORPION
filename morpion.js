let etat = document.querySelectorAll(".grid-item") 


const PLAYER = prompt("player:") 

const BOT = prompt("bot:")

let end = false 

function choiseCase(id) {
    update(id[id.length - 1]);
}

//La on va afficher les fonctions lors du changement dans toutes les id
//il ya deux code pour verifier le gagnant: checkWin(PLAYER) et checkWin(BOT)
function update(id) {  
    if (etat[id - 1].innerText != "") return
    etat[id - 1].innerText = PLAYER
    checkWin(PLAYER)  

    if(end) return 
    else {
        playBot() 
        checkWin(BOT) 
    } 
}


function playBot() // ce code encadre le BOT dans la fonction avec des conditions  
{
    let choixRobot
    do {
        choixRobot = parseInt(Math.random() * 9)  
    } while (etat[choixRobot].innerText != "")
    etat[choixRobot].innerText = BOT
}


("X" == "X" == "X") && ("X" != "X")

function checkWin(winner) {
    let newTab = []
    etat.forEach(e => newTab.push(e.innerText))
    
    if(
        (newTab[0] === newTab[1] && newTab[1] === newTab[2] && newTab[2] != "") ||
        (newTab[0] === newTab[3] && newTab[3] === newTab[6] && newTab[6] != "") ||
        (newTab[0] === newTab[4] && newTab[4] === newTab[8] && newTab[8] != "") ||
        (newTab[1] === newTab[4] && newTab[4] === newTab[7] && newTab[7] != "") ||
        (newTab[2] === newTab[5] && newTab[5] === newTab[8] && newTab[8] != "") ||
        (newTab[2] === newTab[4] && newTab[4] === newTab[6] && newTab[6] != "") ||
        (newTab[3] === newTab[4] && newTab[4] === newTab[5] && newTab[5] != "") ||
        (newTab[6] === newTab[7] && newTab[7] === newTab[8] && newTab[8] != "") 
        ) {

        alert(`WINNER ${winner} `)
        upScore(winner) 
        end = true
        reset()
    }
}

function upScore(winner) 
{
    if(winner == PLAYER) document.getElementById('P').innerText = parseInt(document.getElementById('P').innerText) + 1
    if(winner == BOT) document.getElementById('B').innerText = parseInt(document.getElementById('B').innerText) + 1
}

function reset()

 {
    end = false
    for (let i = 0;i< etat.length;i++) {
        etat[i].innerText = ""
    }
    document.getElementById('P').innerText = 0
    document.getElementById('B').innerText = 0
}

