let nombre = "carla";
/*eslint-disable*/
let apellido = 'barrientos';
/*eslint-enable*/  

let estudiante = `${nombre} ${apellido}`; 
console.log(estudiante);
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);
let estudianteLength= estudiante.length;
let estudianteFirstWord= estudiante.charAt();
let estudianteLastWord= estudiante.charAt(estudiante.length - 1);
let estudianteSpaceOut= estudiante.trim();
let estudianteInclude = estudiante.includes("carla");
console.log(estudianteInclude);
