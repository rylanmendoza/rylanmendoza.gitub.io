window.onload = () => {
    // all code goes in here
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');

    functionCallsAction.onclick = simpleFunction;

    function simpleFunction(){
        console.log("Functions should consist of statements designed to perform a single task.");
        simpleFunctionDisplay.textContent = "simple";   
    }

function functionParameters(parameter) {
    console.log(parameter);
}

function functionReturn() {
    return ("Many functions return values.")
}

function add(a,b) {
    const addResult = a + b;
    console.log('Inside add', addResult);
    return addResult;
}

simpleFunction();

// adds a value to the the function that was empty
functionParameters("Many functions take parameters.");

functionReturn();

const addResult = add(2,3);
console.log('Add result:' , addResult);
const returnValue = functionReturn(addResult);

console.log(returnValue);
}