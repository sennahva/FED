let nav_open_button = document.querySelector("header > nav:first-of-type button");
let nav_close_button = document.querySelector("header > nav nav button:nth-of-type(2)");
let nav_content = document.querySelector("header nav:nth-of-type(2)");
let nav = document.querySelector("header > nav:first-of-type");

nav_open_button.addEventListener("click", nav_expand);
nav_close_button.addEventListener("click", nav_close);

function nav_expand() {
    nav_content.classList.add("nav_expended");
}

function nav_close() {
    nav_content.classList.remove("nav_expended");
}

window.addEventListener('scroll', () => {
    let scrollValue = window.scrollY; 

    if(scrollValue < 20) {   
        nav.classList.add("top");
    } else {
        nav.classList.remove("top");
    }
})