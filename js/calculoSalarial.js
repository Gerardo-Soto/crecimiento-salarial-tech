/*
function calcularSalarioPorAño(año) {
    const salario;
}
*/

const startJS = function js() {
    const resultado = document.getElementById("js");
    resultado.innerHTML = "JS running";
    
}
startJS();


// funcion para calcular el salario anual mediante el salario mensual

function onclickCalcularSalarioAnual() {
    const salarioMensual = document.getElementById("input__salario-mensual");
    let salarioAnual = Number(salarioMensual.value) * 12;
    const outputSalarioAnual = document.getElementById("returnSalarioAnual");

    let text = document.createTextNode(" $ "+ salarioAnual);

    outputSalarioAnual.appendChild(text);
}

// funcion para calcular el crecimiento salarial mediante el salario anual actual del usuario y los años a calcular

function onclickCalcularCrecimientoSalarial() {
    const salarioAnual = document.getElementById("input__salario-anual");
    const years = document.getElementById("input__years");
    
    let minimumSalary = Number(salarioAnual.value);
    let averageSalary = 0
    let maximumSalary = minimumSalary;

    for (let i = 0; i < Number(years.value); i++) {
      minimumSalary *= 1.13;
      maximumSalary *= 1.19;
      averageSalary = (minimumSalary + maximumSalary) / 2;
    }

    let text_minimumSalary = document.createTextNode(" en " + years.value +" años es de: $ "+ minimumSalary);
    let text_averageSalary = document.createTextNode(" en " + years.value +" años es de:$ "+ averageSalary);
    let text_maximumSalary = document.createTextNode(" en " + years.value +" años es de:$ "+ maximumSalary);

    const outputSalarioMinimo = document.getElementById("salarialMinimo");
    const outputSalarioPromedio = document.getElementById("salarialPromedio");
    const outputSalarioMaximo = document.getElementById("salarialMaximo");
    
    outputSalarioMinimo.appendChild(text_minimumSalary);
    outputSalarioPromedio.appendChild(text_averageSalary);
    outputSalarioMaximo.appendChild(text_maximumSalary);
}