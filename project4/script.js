var initial = `M 10 80 Q 250 100 690 80`;
var final = `M 10 80 Q 250 100 690 80`;

var string = document.querySelector("#string");

string.addEventListener('mousemove',(dets) =>{
    initial = `M 10 80 Q ${dets.x} ${dets.y} 690 80`;
    gsap.to("svg path",{
        attr:{d:initial},
        duration:0.3,
        ease:"power3.out",
    })
    console.log("hello",dets.y)
})

string.addEventListener('mouseleave',()=>{
    gsap.to("svg path",{
        attr:{d:final},
        duration:0.5,
        ease:"elastic.out(1,0,3)"
    })
})