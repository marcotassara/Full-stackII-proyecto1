document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const message = document.getElementById('login-message');

          
            if (username === 'marcoxux2@gmail.com' && password === '1234') {
               
                localStorage.setItem('logueado', 'si');
                
                window.location.href = 'index.html';
            } else {
                message.style.color = 'red';
                message.textContent = 'Usuario o contraseña incorrectos';
            }
        });
    }
});