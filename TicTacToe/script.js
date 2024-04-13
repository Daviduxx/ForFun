// VARIABILI DI LOGICA DEL GIOCO

// Definisce se è il turno di X o di O
let turn = true;
// Definisce se uno dei due ha vinto
let victory = false;
//let count = 0;
// Qui viene memorizzata ogni mossa
let res = ['', '', '', '', '', '', '', '', ''];
// Stabilisce se si sta giocando o no
let playing = false;
// Minuti e secondi del timer
let minuti = 0;
let secondi = 0;
// Matrice in cui vengono confrontate le messe per stabilire se c'è un vincitore
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
// Definisce se attualmente il gioco è stoppato
let stopped = false;

// MANIPOLAZIONE DEL DOM

let player = document.querySelector('#player');
let text = document.querySelector('#text')
const tiles = document.querySelectorAll('.tile')
let playButton = document.querySelector('#play');
let gameButton = document.querySelectorAll('.gameButton');
let chronometerDisplay = document.querySelector('#chronometer')
let playAgainButton = document.querySelector('#playAgain')

// DICHIARAZIONE DELLE FUNZIONI

// Ogni volta che viene chiamata, se il gioco è in play, aumenta secondi e minuti
function updateTime(){
    if(!playing){
        return
    }
     secondi++;
        if(secondi == 60){
            secondi = 0;
            minuti++;
        }
    chronometerDisplay.innerText = pad(minuti) + ':' + pad(secondi);
}

// Serve solamente ad aggiungere lo '0' prima della cifra di minuti e secondi
function pad(valore) {
  return valore < 10 ? '0' + valore : valore;
}

// Trigggera il timer quando viene chiamata
function chronometer(){
    timer = setInterval(updateTime, 1000)
}

// Memorizza le mosse nell'array inizialmente vuoto. Chiama la funzione per controllare i risuletati e cambia il turno
tiles.forEach((t,i) => {
   t.addEventListener('click', () => {
        if(t.innerHTML == '' && !victory && playing){
            turn ? t.innerHTML = 'X' : t.innerHTML = 'O';
            turn ? player.innerHTML = 'O ' : player.innerHTML = 'X ';
            turn ? res[i] = 'X': res[i] = 'O'
           // count++;   
            checkRes(res, res[i])
            turn = !turn
        }   
   })
})

// Confronta la mossa effettuata e confronta con la matrice. Se c'è una mossa vincente setta victory a true e il gioco finisce
function checkRes(arr, move){
    // let provRes = '';
    // turn ? provRes = 'X' : provRes = 'O'
    for(let i = 0; i < 8; i++){
        let counter = 0;
        for(let j = 0; j < 3; j++){
            if(arr[winningConsitions[i][j]] == move){
                counter++;
            } 
        }
        if(counter == 3){
            victory = true;
            text.innerHTML = 'Ha vinto ' + move + '!';
            text.classList.remove('hide')
            player.parentElement.classList.add('hide')
            clearInterval(timer)
            gameButton.forEach(g => g.classList.add('hide'))
            playAgainButton.classList.remove('hide')
            for(let k = 0; k < 3; k++){
                tiles[winningConsitions[i][k]].classList.add('winningTiles')
            }
            break;
        }
    }
}

// Fa iniziare o continuare il gioco. Se il pulsante viene schiacciato dopo una vittoria o dopo uno stop chiama playAgain()
function play(){
    if(stopped || victory){
        playAgain();
     }
    victory = false
    playing = true;
    player.parentElement.classList.remove('hide');
    playButton.classList.add('hide')
    text.classList.add('hide')
    text.innerHTML = ''
    chronometer();
    gameButton.forEach(g => g.classList.remove('hide'))
}

// Mette in pausa il gioco e il cronometro
function pause(){
    playing = false;
    text.classList.remove('hide')
    text.innerHTML = 'Game paused!'
    player.parentElement.classList.add('hide');
    gameButton[1].classList.add('hide');
    playButton.classList.remove('hide');
    clearInterval(timer)
}

// Stoppa il gioco ed il cronometro
function stop(){
    playing = false;
    stopped = true;
    victory = false
    text.classList.remove('hide')
    text.innerHTML = `Game stopped!<br><p></p>Press the play button if you want to play again!</p>`;
    player.parentElement.classList.add('hide');
    gameButton.forEach(g => g.classList.add('hide'))
    playAgainButton.classList.remove('hide');
    secondi = 0;
    minuti = 0;
    clearInterval(timer)
}

// Fa ricominciare il gioco da capo, portando tutte le variabili allo stato iniziale
function playAgain(){
    res = ['', '', '', '', '', '', '', '', ''];
    minuti = 0;
    secondi = 0;
    tiles.forEach(t => t.innerHTML = '')
    tiles.forEach(t => t.classList.remove('winningTiles'))
    chronometerDisplay.innerText = '00:00';
    playAgainButton.classList.add('hide')
}

// AD OGNI BOTTONE CLICCATO VIENE TRIGGERATA UNA FUNZIONE
playButton.addEventListener('click', () => play())
gameButton[1].addEventListener('click', () => pause());
gameButton[0].addEventListener('click', () => stop());
playAgainButton.addEventListener('click', () => play());