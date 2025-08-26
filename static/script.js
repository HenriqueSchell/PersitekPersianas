const btnMenu = document.getElementById('btn_hamburguer')
const navMobile = document.getElementById('navMobile')

btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('ativar')
    
    navMobile.classList.toggle('ativo')
})