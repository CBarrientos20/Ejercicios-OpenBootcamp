 const fecha= new Date();
 console.log(fecha);

 const miNacimiento= new Date(1990, 9,20);

 const trueOrFalse= (fecha.getTime() > miNacimiento.getTime())
 console.log(trueOrFalse);

 const diaNacimiento=(miNacimiento.getDate());
 console.log(diaNacimiento);


 const mesNacimiento=(miNacimiento.getMonth() + 1)
 console.log(mesNacimiento)

 const anioNacimiento= miNacimiento.getFullYear()
 console.log(anioNacimiento)