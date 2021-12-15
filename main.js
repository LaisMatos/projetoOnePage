
function verificarScroll() {
    if (window.pageYOffset >= 60) {
        document.querySelector('nav').classList.add('pequeno');
        document.querySelector('div ').classList.add('nada')
      
    } else {
        document.querySelector('nav').classList.remove('pequeno');
        document.querySelector('div').classList.remove('nada')
    }
}


window.addEventListener('scroll', verificarScroll);
