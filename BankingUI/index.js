// //popup login
// window.onload = function() {
//     setTimeout(function() {
//         document.getElementById('welcomeModal').style.display = 'flex';
//     }, 2000); // 2 seconds
// };

// Function to close the modal
document.querySelector('.close-btn').onclick = function() {
    document.getElementById('welcomeModal').style.display = 'none';
};

// // Optional: Close the modal when clicking outside of it
// window.onclick = function(event) {
//     if (event.target === document.getElementById('welcomeModal')) {
//         document.getElementById('welcomeModal').style.display = 'none';
//     }
// };


// Function to open the welcome modal
function openWelcomeModal() {
    document.getElementById('welcomeModal').style.display = 'flex';
}

// // Function to close the welcome modal
// function closeWelcomeModal() {
//     document.getElementById('welcomeModal').style.display = 'none';
// }


// Close the modal when clicking outside the form content
window.onclick = function(event) {
    if (event.target.classList.contains('form-modal')) {
        event.target.style.display = 'none';
    }
};

// Highlight the current page in the navigation bar
const currentLocation = window.location.href;
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    if (link.href === currentLocation) {
        link.classList.add('active');
    }
});
