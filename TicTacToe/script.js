let turn = true;
let victory = false;
let count = 0;
let res = ['', '', '', '', '', '', '', '', ''];
let playing = false;
let winningConsitions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let player = document.querySelector('#player');
const tiles = Array.from(document.querySelectorAll('.tile'))
let playButton = document.querySelector('#play');
let minuti = 0;
let secondi = 0;

function chronometer(){
    timer = setInterval(updateTime, 1000)
}

function updateTime(){
     secondi++;
        if(secondi == 60){
            secondi = 0;
            minuti++;
        }
    document.getElementById('chronometer').innerText = pad(minuti) + ':' + pad(secondi);
}



playButton.addEventListener('click', () => play())


tiles.forEach((t,i) => {
   t.addEventListener('click', () => {
        if(t.innerHTML == '' && !victory && playing){
            turn ? t.innerHTML = 'X' : t.innerHTML = 'O';
            turn ? player.innerHTML = 'O ' : player.innerHTML = 'X ';
            turn ? res[i] = 'X': res[i] = 'O'
            count++;   
            checkRes(res)
            turn = !turn
        }   
   })
})

function checkRes(arr){
    let provRes = '';
    turn ? provRes = 'X' : provRes = 'O'
    for(let i = 0; i < 8; i++){
        let counter = 0;
        for(let j = 0; j < 3; j++){
            if(arr[winningConsitions[i][j]] == provRes){
                counter++;
            } 
        }
        if(counter == 3){
            victory = true;
            break;
        }
    }
}



function pad(valore) {
  return valore < 10 ? '0' + valore : valore;
}

function play(){
    playing = true;
    player.parentElement.classList.remove('hide');
    playButton.classList.add('hide')
    chronometer();
}

