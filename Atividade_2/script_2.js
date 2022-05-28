//função entrar

function entrar() {
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome?')
    area.innerHTML = texto;
    if (texto == '' || texto == null){
        alert('Digite seu nome novamente!');
        area.innertHTML = 'Bem vindo ...';
    }else {
        area.innerHTML = 'Bem vindo ...' + texto;
    }
}
function entrar2(nome) {
        
}