const signUpurl = 'https://frozen-mesa-95948.herokuapp.com/api/v1/auth/signup';

const firstname = document.getElementById('firstname');
const eFirstName = document.getElementById('eFirstName');
const lastname = document.getElementById('lastname');
const eLastName = document.getElementById('eLastName');
const about = document.getElementById('about');
const eAbout = document.getElementById('eAbout');
const email = document.getElementById('userEmail');
const eEmail = document.getElementById('eEmail');
const password = document.getElementById('userPassword');
const ePassword = document.getElementById('ePassword');
const confirmPassword = document.getElementById('confirmPassword');
const eConfirmPassword = document.getElementById('eConfirmPassword');

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
    });
    confirmPassword.addEventListener('keyup', function () {
        eConfirmPassword.innerHTML = '';
    });
};


const btn = document.querySelector('#signUpBtn');
btn.addEventListener('click', saveUser);

function saveUser (e) {
    e.preventDefault();
    // console.log(firstname.value, lastname.value, about.value, email.value, password.value, confirmPassword.value);
    let error = document.getElementById('error');
    error.innerHTML = '';

    const userDetail = {
        firstname: firstname.value,
        lastname: lastname.value,
        about: about.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    };

    const fetchData = {
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
                    ePassword.innerHTML += errors.password[0];
                }
            }

            let token = user.token;
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
