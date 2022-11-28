const newPassword =val =>{
    if(val ===1234){
        return "ingreso aceptado"
    }//return false
    throw new Error("contraseña incorrecta")
}
try{
    console.log("contraseña válida")
    const wrongPassword=newPassword(1253);
    console.log(wrongPassword)
    }
    catch(e){
        console.error(e);
    console.error("El valor ingresado es incorrecto")
    } 
    