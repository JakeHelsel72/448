window.onload = function(){
    document.addEventListener("mousemove", (e) =>{
        const mouseX = e.clientX
        const mouseY = e.clientY
        const angle = Math.atan2(mouseY, mouseX)
        font_rgb = `hue-rotate(${angle}deg)`
        document.getElementById('card').style.filter = font_rgb
    })
}
