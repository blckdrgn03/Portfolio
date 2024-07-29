import '../styles/normalize.css'
import '../styles/style.css'
import '../styles/hero.css'
import '../styles/about.css'
import '../styles/work.css'
import '../styles/contact.css'

let body = document.querySelector('body');
body.onmousemove = (e) => {
    let x = e.pageX - body.offsetLeft;
    let y = e.pageY - body.offsetTop;
    body.style.setProperty('--x', x + 'px');
    body.style.setProperty('--y', y + 'px');
}


let themeToggler = document.querySelector(".header__button");
let html = document.querySelector("html");

let isThemeDark = localStorage.getItem("isThemeDark") || "true";


if(isThemeDark === "true") {
    html.classList.remove("light-mode");
} else {
    html.classList.add("light-mode");
}


themeToggler.onclick = () => {
    if(isThemeDark === "true") {
        html.classList.add("light-mode");
        isThemeDark = "false";
        localStorage.setItem("isThemeDark", "false");
    } else {
        html.classList.remove("light-mode");
        isThemeDark = "true";
        localStorage.setItem("isThemeDark", "true");

    }
}



let menuBtn = document.querySelector(".header__bars");
let menu = document.querySelector(".header__list");
let unMenuBtn = document.querySelector(".cross");

menuBtn.onclick = () => {
    menu.classList.add("menu-on");
    menuBtn.style.opacity = "0";
}
unMenuBtn.onclick = () => {
    menu.classList.remove("menu-on");
    menuBtn.style.opacity = "1";
}

window.onresize = () => {
    let w = window.innerWidth;

    if(w > 767) {
       menu.classList.remove("menu-on");
       menuBtn.style.opacity = "1";
    }
}

