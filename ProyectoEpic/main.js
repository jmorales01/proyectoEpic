function sumar(){
    var numero1 = document.getElementById("numero1")
    var numero2 = document.getElementById("numero2")
    var resultado = document.getElementById("resultado")

    var res = parseInt(numero1.value) + parseInt(numero2.value)
    resultado.innerText = res
}

document.getElementById("btnSumar").onclick = function(){
    sumar();
}