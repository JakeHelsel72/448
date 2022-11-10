/*Two password fields
o first to enter the password and a second to verify it
• A button labelled "Validate" that alerts one of the following messages:
o Display informative error message if any of the following occur:
 the passwords entered don't match
 the passwords are not at least 8 characters long*/
function validate()
{
   var pass1 = document.getElementById("pass1").value;
   var pass2 = document.getElementById("pass2").value;
   if (pass1 != pass2){
      alert('Error: Passwords entered don\'t match!')
   } else if (pass1.length < 8){
      alert('Error: Passwords are not at least 8 characters long!')
   } else {
      alert('Passwords match')
   }
}