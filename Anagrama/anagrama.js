function Calcular (){
    var palavra = document.getElementById("texto").value.split('')
    var letras = []
    for( i in palavra){
        letras = existe(palavra[i],letras)
    }
    var contadas = []
    for (i of letras){
        var index = 0
        for (j of palavra){
            if (j == i){
                index++
            }
        }
        contadas.push(fatorial(index))
    }

    document.getElementById("output").innerHTML = fatorial(palavra.length) /multiply(contadas)
}
function existe(a, array){
    if (array == null){return array}
    for (i of array){
        if (i == a){
            return array
        }
    }
    array.push(a)
    return array
}
function fatorial(x){
    index = 1
    for(let i = x; i >0; i--){
        index *= i
    }
    return index
}
function multiply(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return(product);
  }