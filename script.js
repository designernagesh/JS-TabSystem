let tabs = document.querySelectorAll(".tabs li"),
    tabContent = document.querySelectorAll(".tabContent");

tabs.forEach((tab, tab_index)=> {    
    tab.addEventListener('click', ()=>{

        tabs.forEach(tab => {
            tab.classList.remove('active');
        })

        tab.classList.add('active');

        tabContent.forEach((content, content_index) => {            
            if( content_index === tab_index ){
                content.style.display = 'block';
            }else{
                content.style.display = 'none';
            }
        })
    })    
})