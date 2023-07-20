let difficulty = document.getElementById('difficulty');
let start = document.getElementById('start');
let level;
window.onload = () => {
    level = 6;
    localStorage.setItem('level', JSON.stringify(level))
}
difficulty.addEventListener('change', function(){
    if(difficulty.value === 'medium'){
        let level = 12;
        localStorage.setItem('level', JSON.stringify(level))
    } else{
        let level = 24;
        localStorage.setItem('level', JSON.stringify(level))
    }
})

start.addEventListener('click', () => {
    let nomeGiocatore = document.querySelectorAll('.nomeGiocatore');
    let giocatore1 = nomeGiocatore[0].value;
    let giocatore2 = nomeGiocatore[1].value;
    localStorage.setItem('giocatore1', JSON.stringify(giocatore1));
    localStorage.setItem('giocatore2', JSON.stringify(giocatore2));
    if(giocatore1 != "" && giocatore2 != ""){
        window.location.assign('play.html')
    }
})

