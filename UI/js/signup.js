const url = 'http://localhost:3000/api/v1/auth/signup';

// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

const btn = document.querySelector('#signUpBtn');
btn.addEventListener('click', saveUser);

const saveUser = (e) => {
    e.preventDefault();

    let firstname = document.getElementById('firstname').value;
    console.log(firstname);
    let lastname = document.getElementById('lastname').value;
    console.log(lastname);
    let bio = document.getElementById('about').value;
    console.log(bio);
    let email = document.getElementById('userEmail').value;
    console.log(email);
    let password = document.getElementById('userPassword').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    let userDetail = {
        firstname: firstname,
        lastname: lastname,
        bio: bio,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    };

    let fetchData = {
        method: 'POST',
        body: JSON.stringify({
            user: { userDetail }
        }),
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            'Authorization': token
        }
    };

    fetch(url, fetchData)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log.err;
        });

    document.getElementById('signUpForm').reset();
};