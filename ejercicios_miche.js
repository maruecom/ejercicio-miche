//1. Teniendo dos arrays de canciones, comparar sus longitudes y 
//mostrar en pantalla “La playlist de Nirvana tiene más canciones” 
//si el array playlistNirvana tiene más canciones, o “La playlist de 
//Foo Fighters tiene más canciones” si el array playlistFoo tiene más.

var playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly']




if (playlistNirvana.length > playlistFoo.length){ 
    document.write("La playlist de Nirvana tiene más canciones")
} else { 
	document.write("La playlist de Foo Fighters tiene más canciones")
}


//2. Tenemos una array de palabras. Queremos mostrar por pantalla la 
//longitud que tiene cada palabra.

var playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];



for(var i = 0; i < playlist.length; i++) {
    document.write("La palabra" + i + "tiene:" + playlist.length + "letras" + "</br>");
  }



//3.Con el mismo array de canciones del anterior ejercicio, 
//queremos mostrar por pantalla la longitud de cada palabra 
//y un mensaje “tiene mas de 15 caracteres”, cuando su longitud
//sea mayor a 15.
// mostrar la longitud de cada palabra en el array y el mensaje "tiene mas de 15 caracteres" cuando su longitud sea > 15

var playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];

for(var i = 0; i < playlist.length; i++) {
    document.write("La palabra" + i + "tiene:" + playlist.length + "letras" + "</br>");
    if (playlist[i].length > 15) {
    	document.write("Tengo más de 15 letras" + "</br>")
    	 } 
  }



//4.Tenemos un array de peliculas y un array vacio. Queremos 
//guardar en el segundo array vacio aquellas peliculas cuya 
//longitud sea mayor a 10.

var peliculas = ["Batman Begins", "Superman", "The Dark Knight", "The Dark Knight Rises"];
var peliculasConLongitudMayorA10 = []

for(var i = 0; i < peliculas.length; i++) {
	if(peliculas[i].length > 10) {
	peliculasConLongitudMayorA10.push(peliculas[i]);  }
    

  }

document.write(peliculasConLongitudMayorA10);


//5.Tenemos un array llamado womenInTech sobre el que tenés 
//que realizar las siguientes operaciones:

//eliminar a “Bill Gates”, que está en la última posición

//agregar “Parisa Tabriz” al final del array
//Luego de realizar las dos operaciones, vamos a mostrar 
//la siguiente información por consola:

//la longitud del array

//quien está en la posición 3

//mostrar todos los elementos del array, uno debajo del otro

var womenInTech = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper", "Radia Perlman", "Janie Tsao", "Sheryl Sandberg", "Susan Kare", "Bill Gates"];



womenInTech.pop();
womenInTech.push('Parisa Tabriz');

document.write('Chau Bill, hola Parisa: ' + '</br>' + womenInTech + '</br>')
document.write('Posición 3: ' + womenInTech[3] + '</br>');

document.write('Array final' + '</br>');
for (var i = 0; i < womenInTech.length; i++ ) {
  document.write(womenInTech[i] + '</br>')
}






  