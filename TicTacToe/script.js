let turn = true;
let count = 0;
let res = ['', '', '', '', '', '', '', '', ''];
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

const tiles = Array.from(document.querySelectorAll('.tile'))

tiles.forEach((t,i) => {
   t.addEventListener('click', () => {
        if(t.innerHTML == ''){
            turn ? t.innerHTML = 'X' : t.innerHTML = 'O';
            turn ? res[i] = 'X': res[i] = 'O'
            count++;   
        }   
        checkRes(res)
        turn = !turn
   })
})

function checkRes(arr){
    console.log("Sto controllando")
    let provRes = 'X';
    for(let i = 0; i < 8; i++){
        let counter = 0;
        for(let j = 0; j < 3; j++){
            if(arr[winningConsitions[i][j]] == provRes){
                counter++;
                console.log("più uno " + counter)
            } 
        }
        if(counter == 3){
            console.log("vittoria")
            break;
        }
    }
}

