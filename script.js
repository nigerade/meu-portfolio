// declarando variáveis
let ul = document.querySelector('nav ul');
let menu = document.querySelector('.menu-btn i');

// ao clicar no menu hamburguer abre ele
function menuShow() {
    if (ul.classList.contains('open')){
        ul.classList.remove('open');
    }

    else{
        ul.classList.add('open');
    }
}





// declarando variavel
let ul2 = document.querySelector('nav ul');

// ao scrollar o menu sai
window.onscroll = () => {
    ul.classList.remove('open');
};