let menu = document.querySelector("#menu");
let openMenu = false;
let div = document.querySelector('.menu');
let ul = document.querySelector('ul');
let body = document.querySelector('body');

function clickMenu() {
    if(openMenu) {
        openMenu = false;
        div.classList.remove("active");
        ul.style.display = "none";
        body.style.overflow = "scroll"
    } else {
        openMenu = true;
        div.classList.add("active");
        
        ul.style.display = "flex";
        body.style.overflow = "hidden";
    }
}

menu.addEventListener("click", clickMenu);