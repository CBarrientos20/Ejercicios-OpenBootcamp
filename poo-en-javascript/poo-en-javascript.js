class estudiante{
nombre="nina";
asignaturas =["Javascript", "HTML", "CSS"]

obtenDatos(){
    return{
        nombre: this.nombre,
        asignaturas: this.asignaturas
    }
}
}
const Estudiante= new estudiante
console.log(estudiante.obtenDatos);

