let scroll = document.querySelector(".flecha");
let second = document.querySelector(".second")

scroll.addEventListener("click", () =>{
    second.scrollIntoView({behavior: "smooth"});
})