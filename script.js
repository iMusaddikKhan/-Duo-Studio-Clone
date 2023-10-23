const cursor = document.querySelector("#cursor")
const main = document.querySelector("#main")
document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x +20+ 'px'
    cursor.style.top = dets.y + 20+ 'px'
})

function loco() {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
loco()


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#section1>h1",
        scroller: "#main",
        // markers: true,
        start: "top 27%",
        end: "top 0",
        scrub: 3

    }
})
tl.to("#section1>h1", {
    x: -90,

}, "anime")
tl.to("#section1>h2", {
    x: 90,

}, "anime")
tl.to("#section1>video", {
    width: '90%',
}, "anime")


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#section1>h1",
        scroller: "#main",
        // markers: true,
        start: "top -115%",
        end: "top 120%",
        scrub: 3

    }
})
tl2.to("#main", {
    backgroundColor: "#fff"
})
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#section1>h1",
        scroller: "#main",
        // markers: true,
        start: "top -280%",
        end: "top 300%",
        scrub: 3

    }
})
tl3.to("#main", {
    backgroundColor: "#0F0D0D"
})
const video = document.querySelector("#section1 video")
video.addEventListener('mouseenter', function (dets) {
    cursor.innerHTML = "View More"
    cursor.style.width = "80px"
    cursor.style.height = "30px"
    cursor.style.borderRadius = "50px"
})
video.addEventListener('mouseleave', function (dets) {
    cursor.innerHTML = ""
    cursor.style.width = "20px";
    cursor.style.height = "20px"
    cursor.style.borderRadius = "50%"
})
const boxes = document.querySelectorAll(".box")
boxes.forEach(function (box) {

    box.addEventListener("mouseenter", function () {
       let attr = box.getAttribute("data-image")
        cursor.style.width = "300px"
        cursor.style.height = "250px"
        cursor.style.borderRadius = "10px"
        cursor.style.backgroundImage = `url(${attr})`
        
    })
    box.addEventListener("mouseleave", function () {
        cursor.style.width = "20px"
        cursor.style.height = "20px"
        cursor.style.borderRadius = "50%"
        cursor.style.backgroundImage = `none`
    })
})
