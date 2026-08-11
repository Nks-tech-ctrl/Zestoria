console.log("working");
const hamburger = document.querySelector("#hamburger");
const navlinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("active");
});

const navitems = document.querySelectorAll("nav ul li a");
navitems.forEach((item) => {
    item.addEventListener("click", () => {
        navlinks.classList.remove("active");
    })
});

const reservationForm = document.querySelector("#reservation-form");
console.log(reservationForm);
reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("form submitted");

    const userName = document.querySelector("#name").value.trim();
    const guests = document.querySelector("#guests").value;
    const phone = document.querySelector("#phone").value.trim();
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;

    if (!userName || !guests|| !phone || !date || !time) {
        alert("Please fill details to book table");
        return;
    }
});

