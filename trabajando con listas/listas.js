let listaDeCompras = ["leche", "huevos", "harina", "manteca", "mayonesa"];
listaDeCompras.push("aceite de girasol");
console.log(listaDeCompras);
listaDeCompras.pop();
console.log(listaDeCompras);
const misPeliculasFavoritas = [
   {título: "Van Helsing", director: "Stephen Sommers", fechaDeEstreno: 2004},
   {título : "The Matrix", director: "Lana Wachowski, Lilly Wachowski",fechaDeEstreno: 1999},
   {título : "The Lord Of The Rings", director: "Peter Jackson", fechaDeEstreno: 2002}
];

const peliculasActuales = misPeliculasFavoritas.filter(obj => obj.fechaDeEstreno > 2010);
console.log(peliculasActuales)


const directores = misPeliculasFavoritas.map(item => {
    const container = item.director;

    return container;
}) 
console.log(directores);

const peliculas = misPeliculasFavoritas.map(item => {
    const lista = item.título;

    return lista;
})
console.log(peliculas);

const directoresYtitulos= directores.concat(peliculas);
console.log(directoresYtitulos)

const directoresYpeliculas =[...directores, ...peliculas];
console.log(directoresYpeliculas);
