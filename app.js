document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is loaded'); // Debugging line

    // Get elements
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const closeLogin = document.getElementById('close-login');
    const closeRegister = document.getElementById('close-register');
    const loggedInSection = document.getElementById('logged-in');
    const loggedOutSection = document.getElementById('logged-out');
    const welcomeMessage = document.getElementById('welcome-message');

    function updateUI() {
        const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
        if (isLoggedIn) {
            loggedInSection.style.display = 'block';
            loggedOutSection.style.display = 'none';
            const userEmail = localStorage.getItem('userEmail');
            welcomeMessage.textContent = `Welcome, ${userEmail}!`;
        } else {
            loggedInSection.style.display = 'none';
            loggedOutSection.style.display = 'block';
        }
    }

    updateUI(); // Update UI based on login status

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            console.log('Login button clicked'); // Debugging line
            loginModal.style.display = 'block';
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            console.log('Register button clicked'); // Debugging line
            registerModal.style.display = 'block';
        });
    }

    if (closeLogin) {
        closeLogin.addEventListener('click', () => {
            console.log('Close login modal clicked'); // Debugging line
            loginModal.style.display = 'none';
        });
    }

    if (closeRegister) {
        closeRegister.addEventListener('click', () => {
            console.log('Close register modal clicked'); // Debugging line
            registerModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            console.log('Click outside login modal'); // Debugging line
            loginModal.style.display = 'none';
        }
        if (event.target === registerModal) {
            console.log('Click outside register modal'); // Debugging line
            registerModal.style.display = 'none';
        }
    });

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('Login form submitted'); // Debugging line
            const formData = new FormData(loginForm);
            fetch(loginForm.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                console.log(data); // Debugging line
                if (data.trim() === 'Login successful') {
                    localStorage.setItem('userLoggedIn', 'true');
                    localStorage.setItem('userEmail', formData.get('email'));
                    loginModal.style.display = 'none';
                    updateUI(); // Update UI after login
                } else {
                    alert(data);
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('Register form submitted'); // Debugging line
            const formData = new FormData(registerForm);
            fetch(registerForm.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                console.log(data); // Debugging line
                if (data.trim() === 'Registration successful') {
                    registerModal.style.display = 'none';
                } else {
                    alert(data);
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }
});














