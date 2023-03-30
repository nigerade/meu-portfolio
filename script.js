let ul = document.querySelector('nav ul');
let menu = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')){
        ul.classList.remove('open');
    }

    else{
        ul.classList.add('open');
    }
}