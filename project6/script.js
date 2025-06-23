const menu = document.querySelector('.menu');
const cross = document.querySelector('.cross');

const t1 = gsap.timeline();

t1.to(".full",{
    right:0,
    duration:0.2,
});

t1.from(".full i",{
    opacity:0,
    duration:0.1
})

t1.from(".full h4",{
    paddingLeft:60,
    stagger:0.1,
})

menu.addEventListener('click',() =>{
    t1.play();
})

cross.addEventListener('click',() =>{
    t1.reverse();
})