function initFind() {
    $('#findInput').removeClass('hidden');
    $('#findStartButton').addClass('hidden');
    $('#essais').removeClass('hidden');
    $('#indice').removeClass('hidden');
    console.log('debut du game');
    var essais = 0;
    var nombre = Math.floor(Math.random() * 15);
    var proposition;
    localStorage.setItem('essais', essais);
    localStorage.setItem('proposition', proposition);
    localStorage.setItem('toFind', nombre);
}

function find_number() {
    var nombre = localStorage.getItem('toFind');
    var proposition = localStorage.getItem('proposition');
    var essais = localStorage.getItem('essais');
    if (proposition != nombre) {
        console.log('echec');
        essais++;
        $('#nbEssais').html(essais);
        localStorage.setItem('essais', essais);
        // indice
        if (parseInt(proposition) < parseInt(nombre)) {
            console.log('plus');
            $('#setHelp').html('plus');
        } else {
            console.log('moins');
            $('#setHelp').html('moins');
        }
    } else {
        $('#findInput').addClass('hidden');
        $('#essais').removeClass('hidden');
        $('#indice').addClass('hidden');
        $('#initFind').addClass('hidden');
        $('#winMessage').removeClass('hidden');
        console.log('win');
    }
}

function findPropose() {
    var proposition = $('#proposition').val();
    console.log(proposition);
    localStorage.setItem('proposition', proposition);
    find_number();
}