let logo = document.querySelector(".logo");
let logoP = document.querySelector(".logoP");
let header = document.querySelector("header");
let cross = document.querySelector(".cross");
let cross2 = document.querySelector(".cross2");
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
let fiverAd = document.querySelector(".ad");
let exploreButton = document.querySelector("#explore");
let aboutSection = document.querySelector('._merimarzi_');
let otherAbout = document.querySelectorAll(".about");
let myName = document.querySelector(".name");

let contactSection = document.querySelector('#contact');
let contact = document.querySelectorAll(".contact");
// myName.childern[0].innerText = "</Dev> Moazam";
myName.children[0].innerText = "</dev> Moazam";

openBtn.addEventListener("click",()=>{
    navScroll.classList.remove("hide"); // Add "hide" class after a short delay
    // setTimeout(() => {
    // }, 200);
    navScroll.style.width = "100vw";
    console.log("hello");
    navScroll.style.transition = ".5s"
    navScroll.style.animation = "harry1 .4s forwards ease-in-out";

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
        
    }, 300);
    // navScroll.classList.add("hide");
    navParmanent.style.display = "";
});

// search.addEventListener("click",()=>{
//     search.style.width = "189px";
//     searchbtn.classList.remove("hide");
// });

// search2.addEventListener("click",()=>{
//     search2.style.width = "189px";
//     searchbtn2.classList.remove("hide");
// });

// function resetSearchWidth() {
//     search.style.width = ""; // Reset width to default (empty string)
//     searchbtn.classList.add("hide"); // Hide search button
// }
// function resetSearchWidth2() {
//     search2.style.width = ""; // Reset width to default (empty string)
//     searchbtn2.classList.add("hide"); // Hide search button
// }

// document.addEventListener("click", (event) => {
//     var isClickInsideSearch = searchWhole.contains(event.target);
//     if (!isClickInsideSearch) {
//         resetSearchWidth(); // Reset search input width if clicked outside
//     }
// });
// document.addEventListener("click", (event) => {
//     var isClickInsideSearch = searchWhole2.contains(event.target);
//     if (!isClickInsideSearch) {
//         resetSearchWidth2(); // Reset search input width if clicked outside
//     }
// });
cross2.addEventListener ("click",()=>{
    // fiverAd.classList.add("hide");
    fiverAd.style.animation="harry3 .4s" ;
    fiverAd.style.transition = ".5s"
    setTimeout(() => {
        fiverAd.style.display = "none";
        
    }, 200);

});

otherAbout.forEach( (about) =>{
    about.addEventListener('click',(e)=>{
        e.preventDefault();
        aboutSection.scrollIntoView({
            behavior: 'smooth'
        });
        })
});


exploreButton.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    aboutSection.scrollIntoView({
        behavior: 'smooth'
    });
});








otherAbout.forEach( (about) =>{
    about.addEventListener('click',(e)=>{
        e.preventDefault();
        aboutSection.scrollIntoView({
            behavior: 'smooth'
        });
        })
});

contact.forEach((contact) => {
    contact.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        contactSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
  
}
);

