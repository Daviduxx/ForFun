let T_OUTPUT = document.getElementById("textDisplay");
let F_OPERATOR = '';
let S_OPERATOR = '';
let operand = null;

const numbers = document.querySelectorAll('.number');
const operands = document.querySelectorAll('.operand');
const deleteButton = document.getElementById('delete');
const equal = document.querySelector(".equal")

numbers.forEach(n => {
 
    n.addEventListener('click', () => {   
        if(!operand){   
            if(n.innerHTML === '.' && F_OPERATOR.includes('.')){
            return;
            }
            F_OPERATOR += n.innerText;
            T_OUTPUT.innerText = F_OPERATOR;
        } else{
            if(n.innerHTML === '.' && S_OPERATOR.includes('.')){
            return;
            }
            S_OPERATOR += n.innerText;
            T_OUTPUT.innerText = F_OPERATOR + " " + operand + " " + S_OPERATOR;
        }
    })
});

operands.forEach(o => {
        o.addEventListener('click', () => {
        if(F_OPERATOR && !operand){
        operand = o.innerText;
        T_OUTPUT.innerText = F_OPERATOR + ' ' + operand;
            }
    })
    
})

deleteButton.addEventListener('click', () => {
    T_OUTPUT.innerText = ''
    F_OPERATOR = '';
    S_OPERATOR = '';
    operand = null;
    });

equal.addEventListener("click", () => {
    switch (operand){
        case "+":
            T_OUTPUT.innerText = Number(F_OPERATOR) + Number(S_OPERATOR);
            break;
        case "-":
            T_OUTPUT.innerText = Number(F_OPERATOR) - Number(S_OPERATOR);
            break;
        case "*":
            T_OUTPUT.innerText = Number(F_OPERATOR) * Number(S_OPERATOR);
            break;
        case "/":
            try{
                T_OUTPUT.innerText = Number(F_OPERATOR) / Number(S_OPERATOR);
                if(S_OPERATOR == '0'){
                    throw new Error("ERR")
                }
            }
            catch(error){
                T_OUTPUT.innerText = error;
                console.error("You can't divide by 0!")
            }
            break;
    }
})