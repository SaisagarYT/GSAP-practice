const cursor = document.querySelector('.cursor');
const image = document.querySelector('.image');
const body = document.querySelector('.main');

body.addEventListener("mousemove",(val) =>{
    gsap.to(cursor,{
        x:val.x,
        y:val.y
    })
})

image.addEventListener('mouseenter',() =>{
    cursor.textContent = "Image"
    gsap.to(cursor,{
        width:50,
        height:50,
        
    })
})
image.addEventListener('mouseleave',() =>{
    cursor.textContent = ""
    gsap.to(cursor,{
        width:15,
        height:15,

    })
})