
function launchgame(){
    var max = 100;
    var min = 0;
    var mid = (max+min)/2;
    localStorage.setItem('max',max);
    localStorage.setItem('min',min);
    localStorage.setItem('mid',mid);
    console.log("Lancement");
    guess_number();
}

function guess_number(){
    var max = localStorage.getItem('max');
    var min = localStorage.getItem('min');
    var milieu = localStorage.getItem('mid');
    console.log(milieu);
    if((max - min) > 1){
    var question = "Est-ce que ton nombre est strictement supérieur à " + parseInt(milieu) + " ?";
    document.getElementById("question").innerHTML=question;
    }
    else{
        document.getElementById("oui").setAttribute('onclick',"ouiFin()");
        console.log("Quasi fini");
        question = "Votre nombre est-il : " + parseInt(max);
        document.getElementById("question").innerHTML=question;
        //if(){
         //   question = "J'ai gagné ! C'était (" + parseInt(max) + ")";
        //    document.getElementById("question").innerHTML=question;
        //}
        //else(){
        //    question = "J'ai gagné ! C'était (" + parseInt(min) + ")";
         //   document.getElementById("question").innerHTML=question;
        //}
        console.log("max = " + parseInt(max) + " min = " + parseInt(min));

    }
}

function oui(){
    var max = localStorage.getItem('max');
    var min = localStorage.getItem('min');
    var mid = localStorage.getItem('mid');
    min = parseInt(mid);
    localStorage.removeItem('mid');
    var tot=parseInt(min)+parseInt(max);
    mid = parseInt((tot)/2);
    localStorage.setItem('min',min);
    localStorage.setItem('mid',mid);
    guess_number();
}
function non(){
    var max = localStorage.getItem('max');
    var mid = localStorage.getItem('mid');
    var min = localStorage.getItem('min');
    max=parseInt(mid);
    localStorage.removeItem('mid');
    var tot=parseInt(min)+parseInt(max);
    mid = parseInt((tot)/2);
    console.log("dans non");
    localStorage.setItem('max',max);
    localStorage.setItem('mid',mid);
    guess_number();
}

function ouiFin(){
    question = "J'ai gagné ! ";
    document.getElementById("question").innerHTML=question;
    remove('bouttons');
    addExitButton();
}
function remove(id) {
    var elem = document.getElementById(id);
    elem.parentNode.removeChild(elem);
    return false;
}

function addExitButton(){
    div = '<div><button type="button" class="btn btn-success" data-dismiss="modal">Revenir à la page d\'accueil</button></div>'
    document.getElementById('fin-modal').innerHTML = div;
}

