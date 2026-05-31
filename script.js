window.addEventListener("scroll", () => {

    let navbar = document.querySelector("nav");

    if(window.scrollY > 100){
        navbar.style.background =
        "rgba(0,0,0,.7)";
    }
    else{
        navbar.style.background =
        "rgba(0,0,0,.3)";
    }
});