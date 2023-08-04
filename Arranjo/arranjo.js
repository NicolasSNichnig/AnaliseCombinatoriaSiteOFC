function calculo() {
    const titulo = document.getElementById("output")
    const N = document.getElementById("inserirN").value
    const P = document.getElementById("inserirP").value

    if(+N == "" || +P == ""){
        window.alert("Insira um valor válido")
    }else{    
        if(+N >= +P){
        const fatorial = N-P; 
        const fatorialDenominador  = factorialize(fatorial);
        const fatorialNumerador  = factorialize(N);
        const total = fatorialNumerador/fatorialDenominador
        titulo.innerHTML = "O numero de combinações é "+total
    }else{window.alert("P é maior que N")} 
}

}


function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}