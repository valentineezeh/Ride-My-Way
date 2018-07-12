var url = 'https://frozen-mesa-95948.herokuapp.com/api/v1/auth/signup'

// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var btn = document.querySelector('#signUpBtn')
btn.addEventListener('click', saveUser)

function saveUser (e) {
    e.preventDefault();

    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var about = document.getElementById("about").value;
    var email = document.getElementById('userEmail').value;
    var password = document.getElementById('userPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    console.log(firstname, lastname, about, email, password, confirmPassword)

    var userDetail = {
        firstname: firstname,
        lastname: lastname,
        about: about,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }

    var fetchData = {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            user: {
                userDetail
            }
        }),
        headers: {
            "Access-Control-Allow-Origin": "*" ,
            Accept: 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            
            
        }
    }

    fetch(url, fetchData)
      .then((res) => {
          console.log(res)
          return res.json()
      })
      .then((data) => {
          console.log(data)
          return data
      }).catch((err) => {
          console.log.err
      })

      document.getElementById('signUpForm').reset();
}