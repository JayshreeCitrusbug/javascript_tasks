// registerForm.addEventListener('submit', validateForm);

function seterror(id, error){
    console.log(":::::::::::::")
    element = document.getElementById(id);
    element.getElementsByClassName('error')[0].innerHTML = error;
    console.log(element)

}

function validateForm(){
    const val = true;
    console.log("..............................")

    const fnameValue = document.getElementById("fname").value.trim();
   
    console.log("!!!!!!!")
    console.log(fnameValue === '')
    console.log(fnameValue)
    
    
    const lname = document.getElementById("lname");
    
    const lnameValue = lname.value.trim();
  
    // const emailValue = document.getElementById("email").value.trim();

    if (fnameValue === '') {
        alert("error")
        seterror("fname", "Please enter the first name properly");
        val = false;
       
    }
   
    if (lnameValue === '') {
        seterror("lname", "Please enter the last name properly");
        val = false;
   
    }
    
    return val;
    }