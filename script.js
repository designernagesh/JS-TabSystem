let tabs = document.querySelectorAll('.tabs li'),
    tabContent = document.querySelectorAll('.tabContent');

let contentDisplayNone = () => {
    tabContent.forEach( content => {
        content.style.display = 'none';
    })
}
let removeClassActive = () => {
    tabs.forEach(tab => {
        tab.classList.remove('active');
    })
}
removeClassActive();
contentDisplayNone();

tabs[0].classList.add('active');
tabContent[0].style.display = 'block';

for(let i = 0; i< tabs.length; i++){
    tabs[i].addEventListener('click', ()=>{
        removeClassActive();
        contentDisplayNone();
        tabContent[i].style.display = 'block';
        tabs[i].classList.add('active');
    })
}