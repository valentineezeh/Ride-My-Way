const url = 'http://localhost:3000/api/v1/auth/login';

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

const btn = document.querySelector('#loginBtn');
btn.addEventListener('click', loginUser);

function loginUser (e) {
    e.preventDefault();
    const email = document.getElementById('userLoginEmail').value;
    const password = document.getElementById()
}