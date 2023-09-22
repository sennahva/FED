// nav buttons
let nav_open_button = document.querySelector("header > nav:first-of-type button");
let nav_close_button = document.querySelector("header > nav nav button:nth-of-type(2)");
let nav_dopper_logo = document.querySelector("header > nav:first-of-type a svg");
let nav_content = document.querySelector("header nav:nth-of-type(2)");
let nav = document.querySelector("header > nav:first-of-type");

let span_plus = document.querySelectorAll("span.plus");
let span_summary = document.querySelector("footer > nav li details summary");

nav_open_button.addEventListener("click", nav_expand);
nav_close_button.addEventListener("click", nav_close);
span_summary.addEventListener("click", plus_min);

function nav_expand() {
    nav_content.classList.add("nav_expended");
}

function nav_close() {
    nav_content.classList.remove("nav_expended");
}

function plus_min() {
    span_plus.classList.toggle("plus_min"); 
}

window.addEventListener('scroll', () => {
    let scrollValue = window.scrollY; 

    if(scrollValue < 20) {   
        nav.classList.add("top")
        nav_open_button.classList.add("top");
        nav_dopper_logo.classList.add("top");
    } else {
        nav.classList.remove("top")
        nav_open_button.classList.remove("top");
        nav_dopper_logo.classList.remove("top");
    }
})