const users = [];
let currentUser = null;
let register = document.querySelector(".register-btn")
let register_window = document.querySelector(".register")
let login = document.querySelector(".login-btn")
let login_window = document.querySelector(".login")
let login_user = document.querySelector(".login-user")
let logout = document.querySelector(".logout")
let user_details = document.querySelector(".user-details")
let user_icon = document.querySelector(".user-icon")


register.addEventListener("click", () => {
    login_window.classList.add("visible");
    register_window.classList.remove("visible");
    register_window.classList.add("flex");

})
login.addEventListener("click", () => {
    register_window.classList.add("visible");
    login_window.classList.remove("visible");
    login_window.classList.add("flex");
})

login_user.addEventListener("click", () => {
    if (currentUser) {
        user_icon.classList.add("not-visible")
        register.classList.add("not-visible")
        login.classList.add("not-visible")
        user_details.classList.remove("not-visible")
        user_details.classList.add("flex")
        login_window.classList.add("visible");
        logout.classList.remove("not-visible")
    }
})

function registerUser() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    if (username && password) {
        users.push({ username, password });
        alert('User registered successfully');
    } else {
        alert('Please enter a username and password');
    }
}

function loginUser() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    currentUser = users.find(user => user.username === username && user.password === password);
    if (currentUser) {
        alert('Login successful');
    } else {
        alert('Invalid username or password');
    }
}

function readUser() {
    if (currentUser) {
        alert(`Username: ${currentUser.username}`);
    } else {
        alert('No user is logged in');
    }
}

function updateUserDetails() {
    if (currentUser) {
        const newUsername = document.getElementById('updateUsername').value;
        const newPassword = document.getElementById('updatePassword').value;
        if (newUsername) currentUser.username = newUsername;
        if (newPassword) currentUser.password = newPassword;
        alert('User details updated successfully');
    } else {
        alert('No user is logged in');
    }
}

function deleteUser() {
    if (currentUser) {
        const index = users.indexOf(currentUser);
        if (index > -1) {
            users.splice(index, 1);
            currentUser = null;
            alert('User deleted successfully');
            user_icon.classList.remove("not-visible")
            register.classList.remove("not-visible")
            login.classList.remove("not-visible")
            user_details.classList.add("not-visible")
            login_window.classList.add("visible");
            logout.classList.add("not-visible");

        }
    } else {
        alert('No user is logged in');
    }
}

function logoutUser() {
    if (currentUser) {
        currentUser = null;
        alert('User logged out successfully');
        user_icon.classList.remove("not-visible")
        register.classList.remove("not-visible")
        login.classList.remove("not-visible")
        user_details.classList.add("not-visible")
        login_window.classList.add("visible");
        logout.classList.add("not-visible");

    } else {
        alert('No user is logged in');
    }
}