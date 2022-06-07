const navLinks=document.querySelectorAll(".navigation__link");
navLinks.forEach(link=>{
    link.addEventListener('click', ()=>{
        document.querySelector('.navigation__checkbox').checked=false;
    })
})
