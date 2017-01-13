var nombre = Math.floor(Math.random()*15) ; 
var essai = 0 ; 
console.log(nombre);

while (essai != nombre )
{
	essai = prompt("Saisir votre nombre");
	if (essai > nombre) {
		alert("chercher plus bas");
	}else if (essai < nombre){
		alert("chercher plus haut");
	}
}
alert('GG');

