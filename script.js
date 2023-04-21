const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event){
    if (event.type === 'touchstart') event.prevetDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

var conter = 1;
setInterval(function(){
    document.getElementById('radio' + conter).checked=true;
    conter++;
    if(conter > 3){
        conter = 1
    }
}, 7000);