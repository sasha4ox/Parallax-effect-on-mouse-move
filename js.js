let parallaxLayers = document.getElementsByClassName("parallax-layer");
let wrapper = document.getElementById("wrapper");
wrapper.addEventListener("mousemove", function(event){
    let mouseX = event.screenX;
    let mouseY = event.screenY;
    Array.from(parallaxLayers).forEach(element => {
    let speed = element.getAttribute("speed")
    element.style.transform = `translateX(${mouseX/speed}px)` + `translateY(${mouseY/speed/2}px)`
    });
})
