function calculo() {
    const titulo = document.getElementById("output")
    const N = document.getElementById("inserirN").value
    const P = document.getElementById("inserirP").value

    if(+N > 0 || +P > 0){
        if (+N == "" || +P == ""){
        }else{
        if (+N >= +P){
        let demonimadorTotal = factorialize(N-P)
        let fatorialN = factorialize(N)
        let FatorialP = factorialize(P)

        let total = fatorialN/(FatorialP*demonimadorTotal)
        titulo.innerHTML = total
        }else{window.alert("P é maior que N")} 
    }
    }else{window.alert("Insira um valor válido")}
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