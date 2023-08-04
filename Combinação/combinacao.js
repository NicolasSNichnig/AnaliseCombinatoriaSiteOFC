function calculo() {
    const titulo = document.getElementById("output")
    const N = document.getElementById("inserirN").value
    const P = document.getElementById("inserirP").value

    if (+N >= +P){
        let demonimadorTotal = factorialize(N-P)
        let fatorialN = factorialize(N)
        let FatorialP = factorialize(P)

        let total = fatorialN/(FatorialP*demonimadorTotal)
        console.log(total)
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