let calculator_input_Number_V = document.getElementById('entrada_numero_calculadora');
let calculator_input_Number_Previews_V = document.getElementById('vista_previa_numero_calculadora');
let Calculator_input_AC_V = document.getElementById('boton_limpiar_calculadora');



function display(DisplayValue) {
    calculator_input_Number_V.value += DisplayValue;
}

Calculator_input_AC_V.addEventListener('click', () => {
    calculator_input_Number_V.value = "";
    calculator_input_Number_Previews_V.value = "";
});

function displaySolve() {
    let eq = calculator_input_Number_V.value;
    calculator_input_Number_Previews_V.value = eq;

    try {
        let y = eval(eq);
        if (!isNaN(y)) {
            calculator_input_Number_V.value = y;
        } else {
            calculator_input_Number_V.value = "Error";
        }
    } catch (error) {
        calculator_input_Number_V.value = "Error";
    }
}

function display(value) {
    if (value === 'delete') {
        var currentInput = calculator_input_Number_V.value;
        calculator_input_Number_V.value = currentInput.slice(0, -1);
    } else {
        calculator_input_Number_V.value += value;
    }

    calculator_input_Number_Previews_V.value = calculator_input_Number_V.value;
}