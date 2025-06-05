function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init();

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main")

document.addEventListener('mousemove', (dets)=>{
    crsr.style.top = dets.clientY + 10 +'px';
    crsr.style.left = dets.clientX + 10 + 'px';
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers: true,
        start:"top 30%",
        end: "top 0",
        scrub: 3,
    }
})

gsap.from('.page1 h1',{
    opacity: 0,
    duration: 1,
    delay: 0.5,
    rotation: '4 deg',
    transformOrigin:"left bottom"
})

gsap.from('.page1 h2',{
    opacity: 0,
    duration: 1,
    delay: 0.5,
    rotation: '4 deg',
    transformOrigin:"left bottom"
})

tl.to(".page1 h1",{
    x:-100,
},"anim")

tl.to(".page1 h2",{
    x:100
},"anim")

tl.to(".page1 video",{
    width: "90%"
},"anim")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers: true,
        start:"top -127%",
        end: "top -130%",
        scrub: 3,
    }
})

tl2.to(".main",{
    backgroundColor:"#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers: true,
        start:"top -490%",
        end: "top -510%",
        scrub: 3,
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D",
})

var boxes = document.querySelectorAll(".box");

boxes.forEach((box)=>{
    box.addEventListener("mouseenter",()=>{
        var att = box.getAttribute('data-image')
        crsr.style.width = "300px";
        crsr.style.height = "250px";
        crsr.style.borderRadius = "0%";
        crsr.style.backgroundImage = `url(${att})`;
    });
    box.addEventListener("mouseleave",()=>{
        var att = box.getAttribute('data-image')
        crsr.style.width = "20px";
        crsr.style.height = "20px";
        crsr.style.borderRadius = "50%";
        crsr.style.backgroundImage = `none`
    })
})

var h4 = document.querySelectorAll(".nav-part-2 h4");
var purple = document.querySelector("#purple");

h4.forEach((elem)=>{
    var marque = document.createElement('marquee')
    elem.addEventListener("mouseenter",()=>{
        purple.style.display = 'flex';
        marque.setAttribute('behavior','alternate')
        marque.setAttribute('scrollamount',20)
        purple.appendChild(marque)
        marque.innerHTML = elem.innerHTML.toUpperCase();
    })

    elem.addEventListener("mouseleave",()=>{
        purple.style.display = 'none';
        marque.remove();
    })
})