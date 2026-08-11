const hamburger =document.querySelector("#hamburger");
const navlinks = document.querySelector("nav ul");

hamburger.addEventListener("click",()=>{
    navlinks.classList.toggle("active");
});