var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 150 + "px";
    blur.style.top = dets.y - 150 + "px";
});

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var arrow = document.getElementById('arrow');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }
}
window.addEventListener("scroll", function() {
    var arrow = document.getElementById("arrow");
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var arrowThreshold = windowHeight / 3; // Adjust as needed

    if (scrollPosition > arrowThreshold) {
        arrow.style.opacity = 1;
    } else {
        arrow.style.opacity = 0;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var arrow = document.getElementById("arrow");

    function showArrow() {
        if (window.scrollY > 100) {
            arrow.style.opacity = "1";
            arrow.classList.remove("hidden");
        } else {
            arrow.style.opacity = "0";
            arrow.classList.add("hidden");
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    window.addEventListener("scroll", showArrow);
    arrow.addEventListener("click", scrollToTop);
});




gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    },
});

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    },
});
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});
gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
    },
});