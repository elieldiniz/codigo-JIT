function somaArray(arr) {

    let soma = 0;
  
    for (let i = 0; i < arr.length; i++) {
  
      soma += arr[i];
  
    }
  
    return soma;
  
}
  
  
  
  const numeros = Array(1000000).fill(1); // Cria um array com 1 milhão de elementos
  
  
  console.time('Primeira execução'); // Inicia a medição de tempo
  
  somaArray(numeros); // Primeira chamada - interpretada
  
  console.timeEnd('Primeira execução'); // Finaliza a medição
  
  
  
  console.time('Execuções repetidas'); // Inicia a medição de tempo
  
  for (let j = 0; j < 1000; j++) {
  
    somaArray(numeros); // Chamadas subsequentes - otimizadas
  
  }
  
  console.timeEnd('Execuções repetidas'); // Finaliza a medição
    
  console.time('Execuções repetidas'); // Inicia a medição de tempo
  
  for (let j = 0; j < 1000; j++) {
  
    somaArray(numeros); // Chamadas subsequentes - otimizadas
  
  }
  
  console.timeEnd('Execuções repetidas'); // Finaliza a medição
  

    
  console.time('Execuções repetidas'); // Inicia a medição de tempo
  
  for (let j = 0; j < 1000; j++) {
  
    somaArray(numeros); // Chamadas subsequentes - otimizadas
  
  }
  console.timeEnd('Execuções repetidas'); // Finaliza a medição
  

