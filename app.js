/*-------------------------------- Constants --------------------------------*/

const calculator = document.querySelector('#calculator');
const screen=document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/
let operandA = '';
let operandB = '';
let operator='';

/*-------------------------------- Functions --------------------------------*/

const handleOperation= (event)=>{
    const value=event.target.innerText

    if(event.target.classList.contains('number')){
        if(!operator){
        operandA += value;
        screen.textContent = operandA;
        }else{
            operandB += value;
            screen.textContent = operandB;
        };
    }else if (event.target.classList.contains('operator')){
        if(operandA && operator!=='C'){
            operator=value;
            screen.textContent=operator;
        };
        if(operator==='C'){
            operandA='';
            operandB='';
            operator='';
            screen.textContent =operator ;
        };
    }else if (value === '='){
        if (operandA && operator && operandB){
        result= calculation (Number(operandA), Number(operandB), operator);
        screen.textContent = result.toString();
        operandA=result.toString();
        operandB='';
        operator='';
        }
    };
    function calculation (A,B,C){
        switch(C){
            case '+': return A+B;
            case '-': return A-B;
            case '*': return A*B;
            case '/': return B!==0?A/B:'Error';
        }
   }
};
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', handleOperation)

