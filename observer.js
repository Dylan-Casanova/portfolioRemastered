const navbar = document.querySelector("nav");
const section1= document.querySelector("#background");

section1options = {
    rootMargin: "-200px 0px 0px 0px"
};

const observer = new IntersectionObserver(function(entries,observer ) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            navbar.classList.add("nav1");
        } else {
            navbar.classList.remove("nav1")
        }
    });
}, section1options);

observer.observe(section1);
