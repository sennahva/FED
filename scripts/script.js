// nav buttons
let nav_menu_button = document.querySelector("nav:first-of-type button");
let second_nav = document.querySelector("nav:nth-of-type(2)");
let nav_close_button = document.querySelector("nav > nav button:nth-of-type(2)");

// nav dropdown
let nav_dropdown_button = document.querySelectorAll("button.dropdown");
let nav_dropdown_content = document.querySelectorAll("ul.dropdown");


console.log(nav_dropdown_button);
console.log(nav_dropdown_content);


nav_menu_button.addEventListener("click", nav_expand);
nav_close_button.addEventListener("click", nav_close);


for (let i = 0; i < nav_dropdown_button.length; i++) {
    nav_dropdown_button[i].addEventListener("click", nav_dropdown);
}


function nav_expand() {
    second_nav.classList.toggle("nav_expended");
}

function nav_close() {
    second_nav.classList.remove("nav_expended");
}

function nav_dropdown() {
    console.log("test");
    nav_dropdown_content.classList.add("show");
}

