let previousValue = null

let operation = ''

// AZIONE : SALVARE PRIMO OPERATORE E RESETTARE IL DISPLAY
function add(){
    previousValue = parseInt(document.getElementById('display').value)
    document.getElementById('display').value = ''  
    operation = '+' 
}


function result() {
    if(operation==='+'){
        let secondValue = parseInt(document.getElementById('display').value)
        sum(previousValue, secondValue)
        previousValue = null
        operation = ''
    }else if (operation==='-') {

    }
    else {
        alert('no operation found')
    }
}

function sum(n1, n2) {
    let result = n1 + n2
    writeToDisplay(result)
}


function writeToDisplay(string) {
    document.getElementById('display').value = string
}



function showResult() {
    let result = eval(document.getElementById('display').value)
    
    document.getElementById('display').value = result
}


function cancelDisplay() {
    document.getElementById('display').value = ''
}


function deleteC() {
    let input = document.getElementById("display");
    input.value = input.value.substring(0, input.value.length - 1);
}

function calculatePiGrego() {
    let valueDisplay = parseInt(document.getElementById("display").value)  
    
    document.getElementById("display").value = valueDisplay + Math.PI;
}




// function result() {
//     document.getElementById('display').value = eval(document.getElementById('display').value)
// }









