var url = 'http://localhost:3000/api/v1/auth/login';

var email = document.getElementById('userLoginEmail');
var eEmail = document.getElementById('eEmail');
var password = document.getElementById('userLoginPassword');
var ePassword = document.getElementById('ePassword');


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

onload = function(event){
    event.preventDefault();
    email.addEventListener('blur', function(){
        if(!email.value){
            eEmail.innerHTML = 'Email Field should not be empty'
        }
    });
    email.addEventListener('keyup', function () {
        eEmail.innerHTML = '';
    });

    password.addEventListener('blur', function(){
        if(!password.value){
            ePassword.innerHTML = 'Password Field should not be empty'
        }
    });
    password.addEventListener('keyup', function () {
        ePassword.innerHTML = '';
    });
};

var loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', loginUser);

function loginUser (e) {
    e.preventDefault();
    var error = document.getElementById('error');
    error.innerHTML = '';

    var loginDetail = {
        email: email.value,
        password: password.value
    };

    var fetchLoginData = {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(loginDetail),
        headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json, text/plain, */*',
            'Content-type': 'application/json',
        }
    };

    fetch(url, fetchLoginData)
        .then((res) => {
            // console.log(res)
            return res.json();
        })
        .then((user) => {
            const { errors, success } = user;
            if(success === false){
                error.innerHTML = user.message;
            }
            if(errors){
                if(errors.email.length > 0){
                    for(var i in errors.email){
                        eEmail.innerHTML += errors.email[i]; 
                    }
                }
                if(errors.password.length > 0){
                    for(var n in errors.password){
                        ePassword.innerHTML += errors.password[n]; 
                    } 
                }
            }
            if(user.success == true && user.data && user.message == 'Welcome User You are now Logged In' && user.data){
                window.localStorage.setItem('token', user.data);
                window.location = 'myRide.html';
            }
            console.log(user)
            var token = user.data;
            console.log(token);
            
            return data
        }).catch((err) => {
            return err
        })
    document.getElementById('loginForm').reset();
}