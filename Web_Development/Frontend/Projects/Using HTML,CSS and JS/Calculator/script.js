// Calculator ki screen ko select kar rahe hain
const display = document.getElementById("display");



// NUMBER / OPERATOR ADD KARNA

function addValue(value) {

    // Jo button click hua uski value screen par add hogi
    display.value = display.value + value;
}



// CLEAR KARNA

function clearDisplay() {

    // Screen ko empty kar rahe hain
    display.value = "";
}



// LAST NUMBER DELETE KARNA
function deleteNumber() {

    // Last character remove kar rahe hain
    display.value = display.value.slice(0, -1);
}




// CALCULATION

function calculate() {

    try {

        // Expression ka answer calculate kar rahe hain
        display.value = eval(display.value);

    }

    catch {

        // Agar calculation galat hai
        display.value = "Error";

    }
}
