let scroll = document.querySelector(".flecha");
let second = document.querySelector(".second")

scroll.addEventListener("click", () =>{
    second.scrollIntoView({behavior: "smooth"});
})

function disableTouchScroll(){
    document.body.addEventListener("touchmove", preventScroll, {passive: false}
    );
}

function preventScroll(e){
    e.preventDefault();
}

disableTouchScroll();