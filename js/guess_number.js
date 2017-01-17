
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
    var question = "Est-ce que ton nombre est strictement supérieur à " + milieu + " ? (oui/non) ";
    document.getElementById("question").innerHTML=question;
    }
    else{
        console.log("end");
    }
}

function oui(){
    var max = localStorage.getItem('max');
    var min = localStorage.getItem('min');
    var mid = localStorage.getItem('mid');
    min = mid;
    localStorage.removeItem('mid');
    mid = (max+min)/2;
    console.log("dans oui");
    localStorage.setItem('min',min);
    localStorage.setItem('mid',mid);
    guess_number();
}
function non(){
    var max = localStorage.getItem('max');
    var mid = localStorage.getItem('mid');
    var min = localStorage.getItem('min');
    max=mid;
    localStorage.removeItem('mid');
    mid = (max+min)/2;
    console.log("dans non");
    localStorage.setItem('max',max);
    localStorage.setItem('mid',mid);
    guess_number();
}