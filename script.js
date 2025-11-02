// Select all elements with class 'reveal'
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150; // distance before element enters viewport

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

console.clear();

const uls = document.querySelectorAll("nav ul");
const links = [...document.querySelectorAll("nav a")];
const light = document.querySelector("nav .tubelight");

let activeIndex = 0;
let currentIndex = 0;
let increment = 1;
links.forEach((link, index) => {
    if (links[index].classList.contains("active")) {
        light.style.left = `${links[index].offsetLeft + light.offsetWidth / 4}px`;
    }

    link.addEventListener("click", e => {
        activeIndex = index;
        let t = setInterval(() => {
            if (activeIndex > currentIndex) increment = 1;
            else if (activeIndex < currentIndex) increment = -1;
            currentIndex += increment;

            links[currentIndex].classList.add("active");
            if (currentIndex != -1) links[currentIndex - increment].classList.remove("active");

            if (currentIndex == activeIndex) {
                e.target.classList.add("active");
                increment = 0;
                clearInterval(t);
            }
        }, 50);
        light.style.left = `${e.target.offsetLeft + light.offsetWidth / 4}px`;
    });
});

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
})

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
})

const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});


const animatedEls = document.querySelectorAll("[data-animate]");
const onScroll = () => {
    animatedEls.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) el.classList.add("active");
    });
};
window.addEventListener("scroll", onScroll);
onScroll();

// Duplicate the testimonial track content for infinite seamless scroll
const track = document.querySelector('.testimonial-track');
track.innerHTML += track.innerHTML;
