const btnMenu = document.getElementById('btn_hamburguer')
const navMobile = document.getElementById('navMobile')
const btnNavbarMobile = document.getElementById('btnNavbarMobile')

const card1 = document.getElementById('card1')
const card_view = document.getElementById('card_view')

btnMenu.addEventListener('click', () => {
    
    if (navMobile.style.display == 'none'){
        navMobile.style.display = 'flex'
        btnMenu.classList.add('ativar')
    }else{
        navMobile.style.display = 'none'
        btnMenu.classList.remove('ativar')
    }
})

btnNavbarMobile.addEventListener('click', () => {
    if (navMobile.style.display == 'flex'){
        navMobile.style.display = 'none'
        btnMenu.classList.remove('ativar')
    }
})

card1.addEventListener('click', () => {
    if (card_view.style.display === '' || card_view.style.display === 'none') {
        card_view.style.display = 'flex';
    } else {
        card_view.style.display = 'none';
    }
})
