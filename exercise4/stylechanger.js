function alert_paragraph_color(){
    border_R = document.getElementById('border_R').value;
    border_G = document.getElementById('border_G').value;
    border_B = document.getElementById('border_B').value;
    border_width = document.getElementById('border_width').value;
    bg_R = document.getElementById('bg_R').value;
    bg_G = document.getElementById('bg_G').value;
    bg_B = document.getElementById('bg_B').value;
    border_RGB = 'rgb('+border_R.toString(16)+', '+border_G.toString(16)+', '+border_B.toString(16)+')';
    background_RGB = 'rgb('+bg_R.toString(16)+', '+bg_G.toString(16)+', '+bg_B.toString(16)+')';
    document.getElementById('paragraph').style.borderColor = border_RGB;
    document.getElementById('paragraph').style.backgroundColor  = background_RGB;
    document.getElementById('paragraph').style.borderWidth = border_width;
}