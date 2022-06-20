// função entrar

function entrar() {

    var area = document.getElementyById("area");
    var texto = prompt("Digite seu nome?")

    
    
    if (texto == '' || texto == null){
        alert ("Digite seu nome novamente");
        area.innerHTML = 'Bem vindo' + texto;
    }else {
        area.innerHTML = 'Bem vindo' + texto;
    }
}

function entrar2(nome) {
    var area2 = document.getElementyById("area2");
    var texto2 = prompt('Digite seu sobrenome?');
    area.innerHTML = nome + " " + texto2;
}