function writeToDisplay(string) {
    document.getElementById('display').value += string
}

function showResult() {
    let result = eval(document.getElementById('display').value)

    document.getElementById('display').value = result
}

function operazione() {
    document.getElementById('display').value = eval(document.getElementById('display').value)
}

function cancelDisplay() {
    document.getElementById('display').value = ''
}

function addVirgola(aggiugoVirgola) {
    document.getElementById('display').value += aggiugoVirgola
}

function calculatePiGrego() {
    let valueDisplay = parseInt(document.getElementById("display").value)

    document.getElementById("display").value = valueDisplay + Math.PI;
}

function deleteC() {
    let input = document.getElementById("display");
    input.value = input.value.substring(0, input.value.length - 1);
}

function squareRoot (){
    let val = document.getElementById("display").value  
    document.getElementById("display").value = Math.sqrt(val);
}

function maPower (){

   let x = parseInt(document.getElementById("display").value)
   let y = parseInt(document.getElementById("display").value)
   let result = Math.pow(x,y)
   document.getElementById("display").value = result
   
}