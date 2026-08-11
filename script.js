const hamburger =document.querySelector("#hamburger");
const navlinks = document.querySelector("nav ul");

hamburger.addEventListener("click",()=>{
    navlinks.classList.toggle("active");
});

const navitems = document.querySelectorAll("nav ul li a");
navitems.forEach((item) =>{
    item.addEventListener("click", () => {
        navlinks.classList.remove("active");
    })
});