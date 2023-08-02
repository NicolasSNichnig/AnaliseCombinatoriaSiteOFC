function calculo() {
    const N = document.getElementById("inserirN").value
    const P = document.getElementById("inserirP").value
    const titulo = document.getElementById("output")
    
    if(N > P){    
    const fatorial = N-P; 
    const fatorialDenominador  = factorialize(fatorial);
    const fatorialNumerador  = factorialize(N);
    const total = fatorialNumerador/fatorialDenominador
    titulo.innerHTML = total }
    else{titulo.innerHTML = "Inválido"}
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