const Btn_Toggle = document.querySelector('.navBar_Toggle')
const Menu = document.querySelector('.navBar_Menu')
const Link = document.querySelector('.navBar_Link')

Btn_Toggle.addEventListener('click', () =>{
    Menu.classList.toggle('active');
    Link.classList.toggle('active');
});