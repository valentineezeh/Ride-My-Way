var signUpurl = 'https://frozen-mesa-95948.herokuapp.com/api/v1/auth/signup';

var firstname = document.getElementById('firstname');
var eFirstName = document.getElementById('eFirstName');
var lastname = document.getElementById('lastname');
var eLastName = document.getElementById('eLastName');
var about = document.getElementById('about');
var eAbout = document.getElementById('eAbout');
var email = document.getElementById('userEmail');
var eEmail = document.getElementById('eEmail');
var password = document.getElementById('userPassword');
var ePassword = document.getElementById('ePassword');
var confirmPassword = document.getElementById('confirmPassword');
var eConfirmPassword = document.getElementById('eConfirmPassword');

// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

onload = function(event){
    event.preventDefault();
    firstname.addEventListener('blur', function(){
        if(!firstname.value){
            eFirstName.innerHTML = 'First name is required';
        }
        if(firstname.value && firstname.value.length <= 2){
            eFirstName.innerHTML = 'Length of the first name should be greater than 2 character';
        }
    });

    firstname.addEventListener('keyup', function () {
        eFirstName.innerHTML = '';
    });

    lastname.addEventListener('blur', function(){
        if(!lastname.value){
            eLastName.innerHTML = 'Last name is required';
        }
        if(lastname.value && lastname.value.length <= 2){
            eLastName.innerHTML = 'Length of the last name should be greater than 2 character';
        }
    });

    lastname.addEventListener('keyup', function () {
        eLastName.innerHTML = '';
    });

    about.addEventListener('blur', function(){
        if(!about.value){
            eAbout.innerHTML = 'This Field is required';
        }
        if(about.value && about.value.length <= 6){
            eAbout.innerHTML = 'Your bio must be 6 or more characters.';
        }
    });
    about.addEventListener('keyup', function () {
        eAbout.innerHTML = '';
    });

    email.addEventListener('blur', function(){
        if(!email.value){
            eEmail.innerHTML = 'Email is required';
        }
    });
    email.addEventListener('keyup', function () {
        eEmail.innerHTML = '';
    });

    password.addEventListener('blur', function(){
        if(!password.value){
            ePassword.innerHTML = 'Password is required';
        }
        if(password.value && password.value.length <= 6){
            ePassword.innerHTML = 'Password must be 6 or more characters.';
        }
    });
    password.addEventListener('keyup', function () {
        ePassword.innerHTML = '';
    });

    confirmPassword.addEventListener('blur', function(){
        if(!confirmPassword.value){
            eConfirmPassword.innerHTML = 'Confirm Password is required';
        }
        if(confirmPassword.value && confirmPassword.value.length <= 6){
            eConfirmPassword.innerHTML = 'Confirm Password must be 6 or more characters.';
        }
        if(confirmPassword.value !== password.value){
            eConfirmPassword.innerHTML = 'Mismatch Password';
        }
    });
    confirmPassword.addEventListener('keyup', function () {
        eConfirmPassword.innerHTML = '';
    });
};


var btn = document.querySelector('#signUpBtn');
btn.addEventListener('click', saveUser);

function saveUser (e) {
    e.preventDefault();
    // console.log(firstname.value, lastname.value, about.value, email.value, password.value, confirmPassword.value);
    var error = document.getElementById('error')
    error.innerHTML = '';

    var userDetail = {
        firstname: firstname.value,
        lastname: lastname.value,
        about: about.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    };

    var fetchData = {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(userDetail),
        headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json, text/plain, */*',
            'Content-type': 'application/json',   
        }
    };

    fetch(signUpurl, fetchData)
        .then((res) => {
            // console.log(res);
            return res.json();
        })
        .then((user) => {
            // console.log(user);
            const { errors, success } = user;

            if(success === false){
                error.innerHTML = user.message;
            }

            if(errors){
                // console.log(errors.firstname)
                if(errors.firstname.length > 0){
                    eFirstName.innerHTML += errors.firstname[0];
                }
                if(errors.lastname.length > 0){
                    eLastName.innerHTML += errors.lastname[0];
                }
                if(errors.about.length > 0){
                    eAbout.innerHTML += errors.about[0];
                }
                if(errors.email.length > 0){
                    eEmail.innerHTML += errors.email[0];
                }
                if(errors.password.length > 0){
                    for (var i in errors.password){
                        ePassword.innerHTML += errors.password[i];
                    }
                   
                }
            }

            var token = user.token;
            // console.log('token for user: ' + token);
            // console.log(user);
            if(user.data && user.message == 'User registration successful' && token){
                window.sessionStorage.setItem('token', token);
                window.location = 'myRide.html';
            }
            return user;
        }).catch((err) => {
            return err;
        });

    document.getElementById('signUpForm').reset();
}
