// nav buttons
var nav_open_button = document.querySelector("header nav > ul li:nth-of-type(1) button");
var nav_close_button = document.querySelector("header > nav ul li:nth-of-type(2) div button:last-of-type");
var nav_dopper_logo = document.querySelector("header > nav > ul > li:first-of-type a svg");

var nav_content = document.querySelector("header nav > ul li:nth-of-type(2)");
var nav = document.querySelector("header nav");

var slider = document.getElementById("slider");
var slider_value = document.getElementById("slider_value");
var value_1 = document.getElementById("value_1");
var value_2 = document.getElementById("value_2");
var value_3 = document.getElementById("value_3");

nav_open_button.addEventListener("click", nav_expand);
nav_close_button.addEventListener("click", nav_close);
nav.addEventListener("mouseover", nav_hover);

function nav_expand() {
    nav_content.classList.add("nav_expended");
}

function nav_close() {
    nav_content.classList.remove("nav_expended");
}

function nav_hover() {
    nav.classList.add("nav_fill");
    nav_open_button.classList.add("nav_fill");
    nav_dopper_logo.classList.add("nav_fill");
}

/* nav bar colors */
window.addEventListener('scroll', () => {
    let scrollValue = window.scrollY; 
    
    if(scrollValue > 20) {   
        nav.classList.add("nav_fill");
        nav_open_button.classList.add("nav_fill");
        nav_dopper_logo.classList.add("nav_fill");

    } else {
        nav.classList.remove("nav_fill")
        nav_open_button.classList.remove("nav_fill");
        nav_dopper_logo.classList.remove("nav_fill");
    }
})


/* het draaien van de dopper */
const dopper = document.getElementById("dopper");
const dopper_section = document.querySelector("main.missie section:nth-of-type(5)");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            dopper.classList.add("dopper_intersection");

            window.addEventListener('scroll', () => {
                var value = window.scrollY
                if (value) {
                    dopper.style.transform = `rotate(${(value / 3)}deg)`;
                }
            })

        } else {
            dopper.classList.remove("dopper_intersection");
        }
    }) 
}, {
    rootMargin: '0px 0px -100% 0px'
});



observer.observe(dopper_section);

/* aanpassen van de values bij de slider */
slider.oninput = function() {
    value_1.innerHTML = slider.value * 5;
    value_2.innerHTML = slider.value * 200;
    value_3.innerHTML = slider.value * 16;

    slider_value.innerHTML = slider.value;
    slider_value.style.transform = `translateX(${-35 + (slider.value * 3.33)}vw)`;
}
