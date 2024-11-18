// Function to open the form modal
function openForm() {
    document.getElementById("form-modal").style.display = "flex";
}

// Function to close the form modal
function closeForm() {
    document.getElementById("form-modal").style.display = "none";
}

// Function to reset the form fields
function resetForm() {
    document.querySelector("#login-form").reset();
    document.querySelector("#register-form").reset();
}

// Function to show the register form and hide the login form
function showRegisterForm() {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("register-section").style.display = "block";
}

// Function to show the login form and hide the register form
function showLoginForm() {
    document.getElementById("register-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
}


// Close the modal when clicking outside the form content
window.onclick = function(event) {
    if (event.target.classList.contains('form-modal')) {
        event.target.style.display = 'none';
    }
};