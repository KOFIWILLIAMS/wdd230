const todayDate = document.querySelector("#todayDate"); 

const now = Date.now(); 
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

todayDate.innerHTML = `${fulldate}`;



// FOR GET YEAR
function getyear() {
    let myDate = new Date();

    document.getElementById('current_year').textContent = myDate.getFullYear();
    document.getElementById('last_updated').textContent = document.lastModified;
}


// FOR MENU TOGGLE
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;








// // // Full date
// // const headerdate = document.querySelector("#headerdate"); 

// // const now = Date.now(); 
// // const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

// // headerdate.innerHTML = `Today is ${fulldate}`;

// const timeElement = document.querySelector(".time");
// const dateElement = document.querySelector(".date");

// /**
//  * @param {Date} date
//  */
// function formatTime(date) {
//   const hours12 = date.getHours() % 12 || 12;
//   const minutes = date.getMinutes();
//   const isAm = date.getHours() < 12;

//   return `${hours12.toString().padStart(2, "0")}:${minutes
//     .toString()
//     .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
// }

// /**
//  * @param {Date} date
//  */
// function formatDate(date) {
//   const DAYS = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
//   ];
//   const MONTHS = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
//   ];

//   return `${DAYS[date.getDay()]}, ${
//     MONTHS[date.getMonth()]
//   } ${date.getDate()} ${date.getFullYear()}`;
// }

// setInterval(() => {
//   const now = new Date();

//   timeElement.textContent = formatTime(now);
//   dateElement.textContent = formatDate(now);
// }, 200);
