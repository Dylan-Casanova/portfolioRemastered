const navbar = document.querySelector("nav");
const section1= document.querySelector("#background");

const footer = document.querySelector("footer");


section1options = {
    rootMargin: "-200px 0px 0px 0px"
};


const observer = new IntersectionObserver(function(entries,observer ) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            navbar.classList.add("nav1")
            footer.classList.add("fixed-bottom")
            ;
        } else {
            navbar.classList.remove("nav1")
            footer.classList.remove("fixed-bottom")
        }
    });
}, section1options);

observer.observe(section1);
