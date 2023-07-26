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
    if(validateForm(id=0, isCreated=true)){
        console.log("@@@@@@@@@@@@@@@@")
        window.location.assign("http://127.0.0.1:5500/list.html");
    };
});



//set error function 
function setError(id, errorMessage){
    console.log(":::::::::::::")
    // element = document.getElementById(id);
    // document.getElementsByClassName("error")[0].textContent = error_message;
    const divSelect = id.parentElement;
    console.log("divSelect", divSelect)
    divSelect.className = 'mb-3 error';
    console.log("divSelect.className", divSelect.className)
    const small = divSelect.querySelector('small');
    console.log("small", small)
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
    // const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const phRe = /(?<!\d)\d{10}(?!\d)/;
    return phRe.test(number)
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
    return selectedTech
}



// Form validation
function validateForm(id, isCreated=false){
    const fnameData = fname.value.trim();
    console.log("????????????????????????????????")
    console.log("fnameData", fnameData)
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
    if(id==1 || id==0){
        if (fnameData === '') {
            setError(fname, "First Name is required");
            val = false;
        }
        else{
            validData(fname);
            // localStorage.setItem("fname", fnameData);
            val = true;
        }
    }
    
   //lname
   if(id==2 || id==0){
        if (lnameData === '') {
            setError(lname, "Last Name is required");
            val = false;
        }
        else{
            validData(lname);
            // localStorage.setItem("lname", lnameData);
            val = true;
        }
   }
    

    //email
    if(id==3 || id==0){
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
    }
    
    //phone
    if(id==4 || id==0){
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
    }

    //zip-code
    if(id==5 || id==0){
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
    }

    //gender
    if(id==6 || id==0){
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
    }
    // DOB
    if(id==7 || id==0){
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
    }
    
    //hobby
    if(id==8 || id==0){
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
    }

    //technology
    if(id==9 || id==0){
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
    }


    if (id==0 && val && isCreated){
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
        return true
    }
    else if(id==0 && isCreated==false){
        var updatedObj = {
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
        console.log("updatedObj", updatedObj)
        return true, updatedObj
    }
    else{
        return false
    }

}

// function replaceFunction(){
//     windows.location.href = "http://127.0.0.1:5500/list-page.html";
// }


// technology.addEventListener('change', function(){
//     validateForm(9)
// })
['click','blur'].forEach( evt => 
    technology.addEventListener(evt, function(){
        validateForm(9)
    }
))
// function replaceFunction(){
//     if (localStorage.length==0){


//     }
// }
