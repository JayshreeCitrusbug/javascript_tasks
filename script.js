const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const zipcode = document.getElementById('zipcode');
const gender = document.getElementById('gender');
const dob = document.getElementById("dob");
const hobby = document.getElementById("hobby");
const technology = document.getElementById("form-multi-select");


form?.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('clicked');
    validateForm();
    window.location.assign("http://127.0.0.1:5500/list.html");
});

// form.addEventListener('onblur', validateForm());

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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

function isPhoneNumberValid(number) {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(number)
}

function checkGender() {
    var getSelectedValue = document.querySelector(   
        'input[name="gender"]:checked');   
    return getSelectedValue
}    

// function checkHobbies(){
//     var checkBoxData = []
//     var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
//     console.log("!!!!!!!!!!!!!!!!!")
//     console.log(markedCheckbox)
//     for (var cbox of markedCheckbox) {  
//         console.log(cbox)
//         checkBoxData.push(cbox);
//       }
//     console.log(checkBoxData)
//     return checkBoxData
// }

function checkHobbies(){
    var checkBoxData = [];
    var inputElements = document.getElementsByClassName('form-check-input');
    for(var i=0; inputElements[i]; ++i){
        if(inputElements[i].checked){
            checkBoxData.push(inputElements[i].name);
        }
    }
    return checkBoxData
}

function checkTechnology(){
    var selected = document.getElementById('form-multi-select');
    const selectedTech = [...selected.options].filter(option => option.selected).map(option => option.value);
    console.log("data", selectedTech)
    return selectedTech
}



// Form validation
function validateForm(){
    const fnameData = fname.value.trim();
    const lnameData = lname.value.trim();
    const emailData = email.value.trim();
    const phoneData = phone.value.trim();
    const zipcodeData = zipcode.value.trim();
    const dobData = dob.value.trim();
    var genderData = checkGender();
    var hobbyData = checkHobbies();
    var technologyData = checkTechnology();
    var val = true;

    //fname
    if (fnameData === '') {
        setError(fname, "First Name is required");
        val = false;
    }
    else{
        validData(fname);
        // localStorage.setItem("fname", fnameData);
        val = true;
    }
   //lname
    if (lnameData === '') {
        setError(lname, "Last Name is required");
        val = false;
    }
    else{
        validData(lname);
        // localStorage.setItem("lname", lnameData);
        val = true;
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
            // localStorage.setItem("email", emailData);
            val = true;
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
            // localStorage.setItem("phone", phoneData);
            val = true;
        }
    }
    //zip-code
    if (zipcodeData === '') {
        setError(zipcode, "Zip code is required");
        val = false;
    }
    else{
        const zipRegex =/(^\d{5,6}$)|(^\d{5}-\d{4}$)/;
        if(!(zipRegex.test(zipcodeData))){
            setError(zipcode, "Please enter a valid zip code");
            val = false;
        }
        else{
            validData(zipcode);
            // localStorage.setItem("zipcode", zipcodeData);
            val = true;
        }
    }
    //gender
    if((genderData) == null) {   
        setError(gender, "Please choose Gender");
        val = false;
    }   
    else {  
        var genderData = genderData.value
        console.log("genderData", genderData)
        validData(gender);
        // localStorage.setItem("gender", genderData);
        val = true;
    } 
    // DOB
    if (dobData === '') {
        setError(dob, "Please Enter Date of Birth");
        val = false;
    }
    else{
        const dateRegex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        if (!dateRegex.test(dobData)) {
            setError(dob, "Please enter a valid Date of Birth in MM/DD/YYYY format.");
        }
        else{
            validData(dob);
            // localStorage.setItem("dob", dobData);
            val = true;
        }
    }
    //hobby
    if((checkHobbies()).length==0){
        setError(hobby, "Please choose your hobbies");
        val = false;
    }
    else{
        // var hobbyData = hobbyData.value;
        console.log("hobbyData", hobbyData)
        validData(hobby);
        // localStorage.setItem("hobby", hobbyData);
        val = true;
    }

    //technology
    if((checkTechnology()).length==0){
        setError(technology, "Please choose Technology");
        val = false;
    }
    else{
        // var technologyData = technologyData.value
        console.log("technologyData", technologyData)
        validData(technology);
        // localStorage.setItem("technology", technologyData);
        val = true;
    }


    if (val){
        var count = localStorage.length;
        var obj = {
            "fname": fnameData,
            "lname": lnameData,
            "email": emailData,
            "phone": phoneData,
            "zipcode": zipcodeData,
            "gender": genderData,
            "dob": dobData,
            "hobby": hobbyData,
            "technology": technologyData,
        }
        // data.push(count);
        // console.log(data)
        console.log("obj", obj)
        console.log("count", count)
        localStorage.setItem(count+1, JSON.stringify(obj));
        console.log("after count", count)
        }

}

// function replaceFunction(){
//     windows.location.href = "http://127.0.0.1:5500/list-page.html";
// }




// function replaceFunction(){
//     if (localStorage.length==0){


//     }
// }