let giocatore1 = localStorage.getItem('giocatore1');
let giocatore2 = localStorage.getItem('giocatore2');
let level = localStorage.getItem('level');
let container = document.getElementById('container');
let puntiGiocatore1 = 0;
let puntiGiocatore2 = 0;
let button = document.getElementById('restart');
let game = true;
const winner = document.getElementById("winner");
const giocatore1Dom = document.querySelector(".giocatore1");
const giocatore2Dom = document.querySelector(".giocatore2");
giocatore1Dom.innerHTML = giocatore1;
giocatore2Dom.innerHTML = giocatore2;
const puntiDom1 = document.getElementById("points1");
const puntiDom2 = document.getElementById("points2");
const winnerContainer = document.querySelector(".winnerContainer");
const again = document.getElementById('again');
game ? points = puntiGiocatore1 : points = puntiGiocatore2;

startGame()
function startGame(){

    let arrayNumeri = [];
    let checkPoints = [];

    for(let i = 0; i < level; i++){
        let item = document.createElement('div');
        item.classList.add('item');
        container.appendChild(item);
    }

    for(let i = 1; i <= (level / 2); i++){
        arrayNumeri.push(i);
        arrayNumeri.push(i);
    }
    
    let firstDiv = document.querySelectorAll(".item");
    
    firstDiv.forEach((div) => {
        
        let randomNumber = Math.floor(Math.random() * arrayNumeri.length);
        div.style.backgroundImage = `url(images/image${arrayNumeri[randomNumber]}.jpeg)`;
        arrayNumeri.splice(randomNumber, 1);      
        div.classList.add('colored');
        div.addEventListener('click', function(){
            console.log(points);
            setTimeout(() => {
                this.classList.remove('colored');
            }, 600)
            this.classList.add('intro')
            checkPoints.push(this.style.backgroundImage);

            if(!checkPoints[1]){
                console.log('restart');
            }
            else if(checkPoints[1] == checkPoints[0]){
                game ? puntiGiocatore1++ : puntiGiocatore2++;
                console.log(puntiGiocatore1);
                console.log(puntiGiocatore2);
                checkPoints = [];
                puntiDom1.innerHTML = puntiGiocatore1;
                puntiDom2.innerHTML = puntiGiocatore2;
            }
            else{
                game = !game;
                puntiGiocatore1 = 0;
                puntiGiocatore2 = 0;
                puntiDom1.innerHTML = puntiGiocatore1;
                puntiDom2.innerHTML = puntiGiocatore2;
                console.log(game);
                checkPoints = [];
                firstDiv.forEach((div) => div.addEventListener('click', () => {
                    div.classList.add('error');
                    
                }))
                button.style.display = 'inline-block';
                button.addEventListener('click', function(){
                    checkPoints = [];
                    points = 0;
                    console.log(game);
                   // document.getElementById('points').innerHTML = puntiGiocatore1;
                    firstDiv.forEach(div => {
                        div.classList.add('colored');
                        div.classList.remove('intro');
                    });
                    div.classList.remove('error');
                    firstDiv.forEach((div) => div.addEventListener('click', () => div.classList.remove('error')))
                })   
            }
            if(puntiGiocatore1 == level / 2 || puntiGiocatore2 == level /2){
                button.style.display = 'none';
                container.classList.add('rotate');
                winnerContainer.style.display = "block";
                setTimeout(() => {
                    container.style.display = "none";
                }, 3000);
                again.addEventListener('click', () => {window.location.assign('index.html')})
            }
            if(puntiGiocatore1 == level / 2){
                winner.innerHTML = giocatore1;
            }
            else if(puntiGiocatore2 == level / 2){
                winner.innerHTML = giocatore2;
            }
        })
    })
}

