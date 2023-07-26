const updateForm = document.getElementById('upadteForm');
const prvBtn = document.getElementById('prvBtn');
var params;

window.onload = function () {
    var url = document.location.href;
        params = url.split('?')[1].split('=')[1].split(',');
        console.log("params", params)
        
        let text = localStorage.getItem(params[0]);
        let obj = JSON.parse(text);
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(obj)
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        document.getElementById('fname').value = obj.fname;
        document.getElementById('lname').value = obj.lname;
        document.getElementById('email').value = obj.email;
        document.getElementById('phone').value = obj.phone;
        document.getElementById('zipcode').value = obj.zipcode;
        document.getElementById('dob').value = obj.dob;


        genderSelection = document.querySelectorAll('input[name="gender"]');
        genderSelection.forEach(element=>{
            element.checked = element.id===obj.gender;
        });

        hobbySelection = document.querySelectorAll('input[class="form-check-input"]');
        hobbySelection.forEach(element=>{
            element.checked = obj.hobby.includes(element.name);
        });

        technologySelection = document.getElementById('form-multi-select');
        [...technologySelection.options].forEach(ops => {
            ops.selected = obj.technology.includes(ops.value);
          });  
}

updateForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('clicked');
    validationReturn = validateForm(id=0, isCreated=false)
    if(validationReturn){
        localStorage.setItem(params[0], JSON.stringify(validationReturn))
        window.location.assign("http://127.0.0.1:5500/list.html");
    }
});

