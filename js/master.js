
let open = document.querySelector(".toggle .menu-icon");


let nav = document.querySelector(".nav");


open.addEventListener("click" , ()=>{
    nav.classList.toggle("open");
});
open.addEventListener("click" , ()=>{
    open.classList.toggle("active");
});

let switcherLis = document.querySelectorAll(".portfolio .list-unstyled li");

let imgs = document.querySelectorAll(".portfolio img");
let arrImgs = Array.from(imgs);


switcherLis.forEach((li) =>{
li.addEventListener("click" , removeActive);
li.addEventListener("click" , mangeImg);


});
function removeActive(e) {
    switcherLis.forEach((li)=>{
        li.classList.remove("active");
        this.classList.add("active")
    })
}

/* // Mange Img  */


function  mangeImg() {
    arrImgs.forEach((img)=>{
        img.style.opacity= '0.2';
    });

    document.querySelectorAll(this.dataset.custom).forEach((el)=>{
        el.style.opacity = "1";
    })
    
}


let btnTop = document.querySelector(".fa-angle-up");

let scTop = document.querySelector(".top");

window.onscroll = ()=>{
    this.scrollY >= 300 ? scTop.classList.add("show") : scTop.classList.remove("show");
}

btnTop.onclick = function () {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

// 
const allLinks = document.querySelectorAll(".nav .list-unstyled li");

    allLinks.forEach((link)=>{
        link.addEventListener("click" , (e)=>{
            e.preventDefault();
            document.querySelector(e.target.dataset.custom).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });