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


// Full date
const headerdate = document.querySelector("#headerdate");

const now = Date.now();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

headerdate.innerHTML = `Today is ${fulldate}`;