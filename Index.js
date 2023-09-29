// let line = document.querySelector( "scroll-line");

// window.onscroll = () =>{
//     let position = window.scrollY;
//     console.log (position)
// }


// let line = document.querySelector("scroll-line");

// window.onscroll = () => {
//     let position = window.scrollY;
//     console.log(position)
// }

gsap.to(".header", {
    left: 0,
    width: "100%",
    duration: 2
})

gsap.to(".right", {
    left: "5%",
    duration: 1,
    opacity: 1,
    stagger:1

})
