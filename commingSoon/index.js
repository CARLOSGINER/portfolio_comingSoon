const loader = document.getElementById('loader');
const content = document.getElementById('content');
const loadingBar = document.getElementById('loadingBar');


setTimeout(()=>{

    loader.style.visibility = 'hidden';
    loader.style.opacity = 0;

    content.style.visibility = 'visible'
    content.style.opacity = 1;

    loadingBar.style.display = 'block'
    
    
},3000) 

