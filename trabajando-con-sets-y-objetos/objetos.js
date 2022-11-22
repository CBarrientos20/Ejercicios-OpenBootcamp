const nuevoObjeto={
nombre:"Carla",
apellido: "Barrientos",
edad: 32,
altura: 1.55,
eresDesarrollador: false
}
const miEdad= nuevoObjeto.edad;
console.log(`mi edad es ${miEdad} años`);

const nuevaLista= nuevoObjeto;
console.log(nuevaLista)
const amigo1={
    nombre:"Ariel",
    apellido:"Sambor",
    edad: 35,
    altura: 1.80,
    eresDesarrollador: false 
};

const amigo2= {
    nombre:"Luna",
apellido: "Sambor",
edad: 10,
eresDesarrollador: false
}
const nosotros= [
    {
        nombre:"Carla",
        apellido: "Barrientos",
        edad: 32,
        altura: 1.55,
        eresDesarrollador: false
        },
    { nombre:"Ariel",
    apellido:"Sambor",
    edad: 35,
    altura: 1.80,
    eresDesarrollador: false},
    { nombre:"Luna",
    apellido: "Sambor",
    edad: 10,
    eresDesarrollador: false}
];
/*nosotros.sort((a,b)=> {
    if(a.edad < b.edad){
        return -1;
    } 
    if(a.edad > b.edad){
        return 1;
    }
    
})*/
nosotros.sort((a,b)=> a.edad - b.edad)


console.log(nosotros)

