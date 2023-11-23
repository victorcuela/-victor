function calculateCombinatoria() {
    // Obtener los valores de n y k
    var n = parseInt(document.getElementById("n").value);
    var k = parseInt(document.getElementById("k").value);

    // Calcular la combinatoria
    var result = calculateFactorial(n) / (calculateFactorial(k) * calculateFactorial(n - k));

    // Mostrar el resultado
    document.getElementById("result").innerHTML = "Result: " + result;
}

function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * calculateFactorial(num - 1);
    }
}
