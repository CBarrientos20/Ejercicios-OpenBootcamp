
function secuenciaFibonacci(num){
    const start=[0,1]
    for(let i=2; i<= num; i++){
        start.push(start[i-1] + start[i-2]);
    }
    return start;
}

const testeando= secuenciaFibonacci(10)
console.log(testeando);