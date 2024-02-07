let logo = document.querySelector(".logo");
let logoP = document.querySelector(".logoP");
let header = document.querySelector("header");
let cross = document.querySelector(".cross");
let bars = document.querySelector(".bars");
// logo.children[0].innerText = "</> DevMoazam";
logo.children[0].style.fontFamily = "Poppins";
logoP.children[0].style.fontFamily = "Poppins";
// logoP.children[0].innerText = "</> DevMoazam";
let navScroll = document.querySelector(".navbarScroll");
let searchbtn = document.querySelector(".searchbtn");
let searchbtn2 = document.querySelector(".searchbtn2");

let search2 = document.querySelector(".search2");
let search = document.querySelector(".search");
let searchWhole = document.querySelector(".whole");
let searchWhole2 = document.querySelector(".whole2");
let openBtn = document.querySelector(".open");
let navParmanent = document.querySelector(".navbarPermanent");



openBtn.addEventListener("click",()=>{
    navScroll.classList.remove("hide"); // Add "hide" class after a short delay
    // setTimeout(() => {
    // }, 200);
    navScroll.style.width = "100vw";
    console.log("hello");
    navScroll.style.transition = ".5s"
    navScroll.style.animation = "harry1 .5s forwards ease-in-out";

    setTimeout(() => {
        navParmanent.classList.add("hide"); // Add "hide" class after a short delay
    }, 500);
    
    navParmanent.style.display = "none";


});

cross.addEventListener("click", () =>{
    // console.log("hel");
    navScroll.style.animation=" harry2 .5s forwards ease-in-out";
    navScroll.style.width = "0px";
    // navScroll.style.transition = ".2s";
    
    setTimeout(() => {
        navScroll.classList.add("hide"); // Add "hide" class after a short delay
        navParmanent.classList.remove("hide");
    }, 500);
    // navScroll.classList.add("hide");
    navParmanent.style.display = "";
});

search.addEventListener("click",()=>{
    search.style.width = "189px";
    searchbtn.classList.remove("hide");
});

search2.addEventListener("click",()=>{
    search2.style.width = "189px";
    searchbtn2.classList.remove("hide");
});

function resetSearchWidth() {
    search.style.width = ""; // Reset width to default (empty string)
    searchbtn.classList.add("hide"); // Hide search button
}
function resetSearchWidth2() {
    search2.style.width = ""; // Reset width to default (empty string)
    searchbtn2.classList.add("hide"); // Hide search button
}

document.addEventListener("click", (event) => {
    var isClickInsideSearch = searchWhole.contains(event.target);
    if (!isClickInsideSearch) {
        resetSearchWidth(); // Reset search input width if clicked outside
    }
});
document.addEventListener("click", (event) => {
    var isClickInsideSearch = searchWhole2.contains(event.target);
    if (!isClickInsideSearch) {
        resetSearchWidth2(); // Reset search input width if clicked outside
    }
});