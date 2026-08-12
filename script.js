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
    if(phone.length !=10){
        alert("Please Enter Valid number");
        return;
    }
    if(!/^\d+$/.test(phone)){
        alert("phone no must be digits.");
        return;
    }

    if (guests < 1 || guests >10) {
        alert("Number of guests be in between 1 to 10");
        return;
    }
    
    const today = new Date();
    const selectedDAte = new Date(date);
    if (selectedDAte < today) {
        alert("Please select future or today date");
        return;
    }

    if (time <"11:00" || time >"22:00") {
        alert("please select time between 11:00 Am and 10:00 Pm");
        return;
    }
    alert("Table Booked successfully")
    reservationForm.reset();
});



