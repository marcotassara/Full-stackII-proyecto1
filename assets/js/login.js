document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const message = document.getElementById('login-message');

            // Usuario y contraseña de ejemplo
            if (username === 'admin' && password === '1234') {
                // Guardar sesión en localStorage (opcional)
                localStorage.setItem('logueado', 'si');
                // Redirigir al index
                window.location.href = 'index.html';
            } else {
                message.style.color = 'red';
                message.textContent = 'Usuario o contraseña incorrectos';
            }
        });
    }
});