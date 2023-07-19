const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const zipcode = document.getElementById('zipcode');
const gender = document.getElementById('gender');


form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('clicked');
    validateForm()
});

//set error function 
function setError(id, errorMessage){
    console.log(":::::::::::::")
    // element = document.getElementById(id);
    // document.getElementsByClassName("error")[0].textContent = error_message;
    const divSelect = id.parentElement;
    divSelect.className = 'mb-3 error';
    const small = divSelect.querySelector('small');
    small.innerText = errorMessage;
}

function validData(id){
    const divSelect = id.parentElement;
    divSelect.className = 'mb-3 success';

}

function isEmailValid(email){
    const emailRegex = /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])$/;
    return emailRegex.test(email)
}

function isPhoneNumberValid(number) {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(number)
}

function checkRadioButton() {
    var getSelectedValue = document.querySelector(   
        'input[name="gender"]:checked');   
    return getSelectedValue
}    

function validateForm(){

    const fnameData = fname.value.trim();
    const lnameData = lname.value.trim();
    const emailData = email.value.trim();
    const phoneData = phone.value.trim();
    const zipcodeData = zipcode.value.trim();

    //fname
    if (fnameData === '') {
        setError(fname, "First Name is required");
        val = false;
    }
    else{
        validData(fname);
    }
   //lname
    if (lnameData === '') {
        setError(lname, "Last Name is required");
        val = false;
    }
    else{
        validData(lname);
    }

    //email
    if (emailData === '') {
        setError(email, "Email Address is required");
        val = false;
    }
    else{
        if(!isEmailValid(emailData)){
            setError(email, "Please enter a valid Email Address");
            val = false;
        }
        else{
            validData(email);
        }
    }
    //phone
    if (phoneData === '') {
        setError(phone, "Phone Number is required");
        val = false;
    }
    else{
        if(!isPhoneNumberValid(phoneData)){
            setError(phone, "Please enter a valid phone Number");
            val = false;
        }
        else{
            validData(phone);
        }
    }
    //zip-code
    if (zipcodeData === '') {
        setError(zipcode, "Zip code is required");
        val = false;
    }
    else{
        if(!(/^\d{5}(-\d{4})?$/.test(zipcodeData))){
            setError(zipcode, "Please enter a valid zip code");
            val = false;
        }
        else{
            validData(zipcode);
        }
    }
    //gender
    if(checkRadioButton() == null) {   
        setError(gender, "Please choose Gender");
        val = false;
    }   
    else {  
        const genderData = checkRadioButton().value
        console.log(genderData)
        validData(gender);
    } 
}