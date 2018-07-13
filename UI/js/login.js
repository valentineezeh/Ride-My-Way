var url = 'http://localhost:3000/api/v1/auth/login';

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

var loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', loginUser);

function loginUser (e) {
    e.preventDefault();
    var email = document.getElementById('userLoginEmail').value;
    console.log(email);
    var password = document.getElementById('userLoginPassword').value;
    console.log(password);

    var loginDetail = {
        email: email,
        password: password
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
            if(user.success == true && user.data && user.message == 'Welcome User You are now Logged In' && user.data.token){
                window.sessionStorage.setItem('token', user.data.token);
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