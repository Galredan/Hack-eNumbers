function find_number(){
	var nombre = Math.floor(Math.random()*15) ;
	var essai = 0 ;
	console.log(nombre);
	while (essai != nombre )
	{
		essai = prompt("Saissez votre nombre");
		if (essai > nombre) {
			alert("Plus bas");
		}else if (essai < nombre){
			alert("Plus haut");
		}
	}
	alert('Bien joué !');
}
//find_number();
