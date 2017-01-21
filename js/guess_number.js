function launchgame() {
    $('#exitButton').addClass('hidden');
    $('#count').removeClass('hidden');
    $('#init').removeClass('hidden');
    $('#question').addClass('hidden');
    $('#bouttons').addClass('hidden');
    var max = 100;
    var min = 0;
    var mid = (max + min) / 2;
    localStorage.setItem('max', max);
    localStorage.setItem('min', min);
    localStorage.setItem('mid', mid);
    console.log("Lancement");
    console.log('Initialisation des boutons');

    var lancement = "Choisissez un nombre entre 0 et 100, je vais le deviner !";
    $('#init').html(lancement);
    setTimeout('$("#count").html(5)', 1000);
    setTimeout('$("#count").html(4)', 2000);
    setTimeout('$("#count").html(3)', 3000);
    setTimeout('$("#count").html(2)', 4000);
    setTimeout('$("#count").html(1)', 5000);
    setTimeout('$("#count").html("GOOO")', 6000);
    setTimeout('$("#startButton").removeClass("hidden")', 6000)
}

function initGuess() {
    console.log("DEBUT DU JEUX");
    $('#startButton').addClass('hidden');
    $('#count').addClass('hidden');
    $('#init').addClass('hidden');
    $('#question').removeClass('hidden');
    $('#bouttons').removeClass('hidden');
    guess_number();
}

function guess_number() {
    var max = localStorage.getItem('max');
    var min = localStorage.getItem('min');
    var milieu = localStorage.getItem('mid');
    if ((max - min) > 1) {
        var question = "Est-ce que ton nombre est strictement supérieur à " + parseInt(milieu) + " ?";
        document.getElementById("question").innerHTML = question;
    } else {
        $('#ouiButton').off('click').on('click', ouiFin());
        console.log("Quasi fini");
        question = "Votre nombre est : " + parseInt(max);
        document.getElementById("question").innerHTML = question;
        console.log("max = " + parseInt(max) + " min = " + parseInt(min));

    }
}

function oui() {
    var max = localStorage.getItem('max');
    var min = localStorage.getItem('min');
    var mid = localStorage.getItem('mid');
    min = parseInt(mid);
    localStorage.removeItem('mid');
    var tot = parseInt(min) + parseInt(max);
    mid = parseInt((tot) / 2);
    localStorage.setItem('min', min);
    localStorage.setItem('mid', mid);
    guess_number();
}

function non() {
    var max = localStorage.getItem('max');
    var mid = localStorage.getItem('mid');
    var min = localStorage.getItem('min');
    max = parseInt(mid);
    localStorage.removeItem('mid');
    var tot = parseInt(min) + parseInt(max);
    mid = parseInt((tot) / 2);
    console.log("dans non");
    localStorage.setItem('max', max);
    localStorage.setItem('mid', mid);
    guess_number();
}

function ouiFin() {
    question = "J'ai gagné ! ";
    $('#question').html(question);
    $('#bouttons').addClass('hidden');
    $('#exitButton').removeClass('hidden');
}