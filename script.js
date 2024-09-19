var menu=document.getElementById('menu')
var st =true
menu.addEventListener('click',()=>{
    var links = document.querySelector('.header .links')
    if(st===false){
        links.style.display="none"
        st=true
    }
    else{
        links.style.display='flex'
        st=false
    }
})