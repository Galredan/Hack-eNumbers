function guess_number(){
    var bornes = new Array(0,100);
    alert("Choisis un nombre entre 0 et 100 dans ta tete et l'ordinateur va essayer de le deviner.");
    while((bornes[1] - bornes[0]) > 1){
        var mid = (bornes[0] + bornes[1])/2;
        var reponse = prompt("Est-ce que ton nombre est strictement supérieur à " + parseInt(mid) + " ? (oui/non) ");
        if(reponse.toLowerCase() == "oui"){
	 		var bornes = [mid, bornes[1]];
        }
	 	if(reponse == "non"){
	 		var bornes = [bornes[0], mid];
        }
    }
    var reponse = prompt("Est ce que ton nombre est " + parseInt(bornes[0]) + " ? (oui/non) ");
    if(reponse == "oui"){
        alert("Ton nombre est " + parseInt(bornes[0]))}
    else{
        alert("Ton nombre est " + parseInt(bornes[1]))}

}
//guess_number();
