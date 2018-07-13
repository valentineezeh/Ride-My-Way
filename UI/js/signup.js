var signUpurl = 'http://localhost:3000/api/v1/auth/signup';

// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

var btn = document.querySelector('#signUpBtn');
btn.addEventListener('click', saveUser);

function saveUser (e) {
    e.preventDefault();

    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var about = document.getElementById('about').value;
    var email = document.getElementById('userEmail').value;
    var password = document.getElementById('userPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    console.log(firstname, lastname, about, email, password, confirmPassword);

    var userDetail = {
        firstname: firstname,
        lastname: lastname,
        about: about,
        email: email,
        password: password,
        confirmPassword: confirmPassword
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
            console.log(res);
            return res.json();
        })
        .then((data) => {
            var token = data.token;
            console.log('token for user ' + token)
            console.log(data);
            if(data.data && data.message == 'User registration successful' && data.token){
                window.sessionStorage.setItem('token', data.token);
                window.location = 'myRide.html';
            }
            return data;
        }).catch((err) => {
            return err;
        });

    document.getElementById('signUpForm').reset();
}
