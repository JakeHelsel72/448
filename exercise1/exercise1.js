//In JS
function validate()
{
 var pass1 = document.getElementById("pass1").value;
 var pass2 = document.getElementById("pass2").value;
 console.log(pass1.length)
 if (pass1.length < 8)
 if (pass1 == pass2){
    alert('Passwords match!')
 }

}