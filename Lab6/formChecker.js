/*Validates the input from the customer before submitting
    Quantities cannot be blank or negative (zero is fine)
    Username must be in the form of an email address (name@domain.com)
    password field cannot be blank
        We do not have a database to check against, so the password can be anything
    They must pick a shipping option*/
    
function validate(){
    username = document.getElementById('username').value
    password = document.getElementById('password').value
    items = []
    for (let i = 1; i <= 3; i++){ //check each quantity
        quantity = document.getElementById(`item${i}`).value // get quantity
        if (quantity == ""){ // check if quantity is blank
            alert(`Quantity is blank`)
            return false
        } else if (quantity < 0) { // check if quantity is positive
            alert(`Quantity is negative`)
            return false
        }
    }

    // now we check the username to see if it's an email (taken from chromium)
    

    //check pass
    if (password == ''){
        alert('Must give a password')
        return false
    }
    // finally, check that at least one shipping option is picked
    var ele = document.getElementsByName('shipping'); 
    one_checked = false;
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            one_checked = true;
        }
    }
    if (!(one_checked)){
        alert("You must pick a shipping option")
        return false
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm;
    console.log(`username: ${username}`)
    is_email = emailRegex.test(username)
    console.log(`username test = ${is_email}`)
    
    console.log(`email failed? = ${!(is_email)}`)
    if (!(is_email)){
        alert(`username ${username} is not an email`) // username isn't email
        return false
    }
    return true; // since all checks have been passed, user may move on
}