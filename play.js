/*DOM : Document Object Model
    DOM이 완전해 Load 된 후 BtnList forEach문 진행
*/
document.addEventListener('DOMContentLoaded', () => {
    const BtnList = document.querySelectorAll('.BtnNum');

    BtnList.forEach(btn => {
        btn.addEventListener('click', function(){
            btnClick(this);
        });
    });
});

function btnClick(element){
    const result = document.getElementById('Result');

    result.textContent = Number(result.textContent) + Number(element.textContent);
};