//Codigo antigo 
function gerarNumero(){
    console.time("TempoGasto (Algoritmo 1)");
    var vetor = []
    while(vetor.length<6){
        var aleatorio = Math.floor(Math.random()*60+1)
        if(!vetor.includes(aleatorio)){
        vetor.push(aleatorio)
        }
    }
    console.timeEnd("TempoGasto (Algoritmo 1)")
    return vetor
}


//Codigo Novo
function gerarNumero2() {
    console.time("TempoGasto (Algoritmo 2)");
   
    var numeros = new Set();  
   
    while (numeros.size < 6) {
        var aleatorio = Math.floor(Math.random() * 60 + 1);
        numeros.add(aleatorio);
    }

    var vetor = Array.from(numeros);
   
    console.timeEnd("TempoGasto (Algoritmo 2)");
    return vetor;
}

console.log(gerarNumero())
console.log(gerarNumero2())