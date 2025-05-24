var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".Two",
    start: "0% 90%",
    end: "50% 50%",
    scrub: true,
    
  },
});
tl.to("#fanta",{
    top:"110%",
    left:"10%",
  
},"orange").to("#orange-cut",{
    top:"155%",
    left:"17%",
},"orange").to("#orange-ful",{
    width:"20%",
    top:"170%",
    right:"15%",
},"orange").to("#leaf2",{
    top:"110%",
    rotate:"-90deg",

},"orange").to("#leaf3",{
    top:"100%",
    x:"70px",
    rotate:"-90deg",

},"orange")

var pl = gsap.timeline({
    scrollTrigger: {
    trigger: ".three",
    start: "0% 90%",
    end: "50% 50%",
    scrub: true,
    markers: true,
  },
})
pl.from("#lemonOne",{
    rotate:"-90deg",
    left:"-120%",
    top:"110%",
   
},"red")
.from("#lemonTwo",{
    rotate:"-90deg",
    left:"-120%",
    top:"110%",
   
},"red")
.to("#fanta",{
  
    top:"215%",
    left:"43%",
  width:"15%"
   
},"red")
.to("#orange-cut",{
  
    top:"203%",
    left:"35%",
    width:"32%",
    height:"39%"
   
},"red")
.from("#cocacola",{
  
    top:"215%",
    left:"43%",
    width:"15%"
   
},"red")    
.from("#pepsi",{
  
    top:"215%",
    left:"43%",
    width:"15%"
   
},"red")

.to("#leaf2",{
    top:"210%",
    rotate:"-90deg",

},"red").to("#leaf3",{
    top:"190%",
    x:"70px",
    rotate:"-90deg",

},"red")



