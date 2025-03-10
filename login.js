// Login validation function
function validateLogin(event) {
    event.preventDefault();  // Prevent form from submitting

    // Get username and password values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Hardcoded credentials for demonstration
    const validUsername = "225753";
    const validPassword = "Audhora123";

    // Check if username and password are correct
    if (username === validUsername && password === validPassword) {
        sessionStorage.setItem("loggedIn", true);  // Set login status
        window.location.href = "index.html";  // Redirect to main page
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Logout function
function logout() {
    sessionStorage.removeItem("loggedIn");  // Clear login status
    window.location.href = "login.html";  // Redirect to login page
}

// Check login status when accessing protected pages
function checkLogin() {
    if (!sessionStorage.getItem("loggedIn")) {
        window.location.href = "login.html";  // Redirect to login if not logged in
    }
}
