document.addEventListener('DOMContentLoaded', () => {
    const Btn_TopMenu_Toggle = document.querySelector('.navBar_Toggle')
    const Btn_TopMenu_Link   = document.querySelector('.navBar_Link')
    const Li_TopMenu_Menu    = document.querySelector('.navBar_Menu')

    Btn_TopMenu_Toggle.addEventListener('click', () =>{
        Li_TopMenu_Menu.classList.toggle('active');
        Btn_TopMenu_Link.classList.toggle('active');
    });
});


