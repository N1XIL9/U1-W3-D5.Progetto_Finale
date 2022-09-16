let previousValue = null


function writeToDisplay(s) {

    document.getElementById('display').value += s
}




function showResult() {
    let result = eval(document.getElementById('display').value)

    document.getElementById('display').value = result
}

function operazione() {
    // document.getElementById('display').value = eval(document.getElementById('display').value)
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











function logToConsole(name) {
    console.log('Ciao ' + name + '!')

}

logToConsole('nicola')
logToConsole('giuseppe')
logToConsole('mario')
logToConsole('luca')


function sum(n1, n2) {
    let result = n1 + n2
    writeToDisplay(result)
}

// sum(1, 2)

