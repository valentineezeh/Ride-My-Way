const url = 'https://frozen-mesa-95948.herokuapp.com/api/v1/auth/login';

const loginEmail = document.getElementById('userLoginEmail');
const eLoginEmail = document.getElementById('eLoginEmail');
const loginPassword = document.getElementById('userLoginPassword');
const eLoginPassword = document.getElementById('eLoginPassword');


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
    loginEmail.addEventListener('blur', function(){
        if(!loginEmail.value){
            eLoginEmail.innerHTML = 'Email Field should not be empty'
        }
    });
    loginEmail.addEventListener('keyup', function () {
        eLoginEmail.innerHTML = '';
    });

    loginPassword.addEventListener('blur', function(){
        if(!loginPassword.value){
            eLoginPassword.innerHTML = 'Password Field should not be empty'
        }
    });
    loginPassword.addEventListener('keyup', function () {
        eLoginPassword.innerHTML = '';
    });
};

let loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', loginUser);

function loginUser (e) {
    e.preventDefault();
    let loginError = document.getElementById('loginError');
    loginError.innerHTML = '';

    const loginDetail = {
        email: loginEmail.value,
        password: loginPassword.value
    };

    const fetchLoginData = {
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
            return res.json();
        })
        .then((user) => {
            const { errors, success } = user;
            if(success === false){
                loginError.innerHTML = user.message;
            }
            if(errors){
                if(errors.email.length > 0){
                    for(var i in errors.email){
                        eLoginEmail.innerHTML += errors.email[i]; 
                    }
                }
                if(errors.password.length > 0){
                    for(var n in errors.password){
                        eLoginPassword.innerHTML += errors.password[n]; 
                    } 
                }
            }
            if(user.success == true && user.data && user.message == 'Welcome User You are now Logged In' && user.data.token){
                window.localStorage.setItem('token', user.data.token);
                window.location = 'myRide.html';
            }
            // console.log(user)
            // var token = user.data.token;
            // console.log(token);
            
            // return data
        }).catch((err) => {
            return err
        })
    document.getElementById('loginForm').reset();
}