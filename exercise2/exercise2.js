let current_pic_index = 0;
let photocount = 5;
function prev(){
    current_pic_index--;
    if (current_pic_index < 0){ current_pic_index = 4}
    changeImage()
}
function next() {
    current_pic_index++;
    if (current_pic_index > photocount-1){ current_pic_index = 0}
    changeImage()
}
function changeImage() {
    document.getElementById("picture").src = current_pic_index.toString() + '.png' // updates source of image
}