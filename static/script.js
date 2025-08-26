const btnMenu = document.getElementById('btn_hamburguer')
const navMobile = document.getElementById('navMobile')

btnMenu.addEventListener('click', () => {
    //btnMenu.classList.toggle('ativar')
    
    if (navMobile.style.display == 'none'){
        navMobile.style.display = 'flex'
        btnMenu.classList.add('ativar')
    }else{
        navMobile.style.display = 'none'
        btnMenu.classList.remove('ativar')
    }
})