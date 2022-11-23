function devuelveTrue(){
  return true;
}

const nota= "Hola soy una Promesa";

const promesa= new Promise((resolve, reject)=> {
    setTimeout (()=>{
        resolve(nota)
    }, 5000)
});


promesa
    .then(()=> console.log("La funcion se ejecuto correctamente"))
    .catch(()=> console.log("ERROR")); 

    function* generadorDePares(){
        let i= 0;
        while(true){
            i+= 2 
            if(i === 20){
                return i; 
            }
       
        yield i;
        }
    }

    const imprimirEjercicio= generadorDePares();

    console.log(imprimirEjercicio.next().value);