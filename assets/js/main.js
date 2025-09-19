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
                // Guardar sesión en localStorage
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



document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const apellido = document.getElementById('apellido').value.trim();
            const edad = parseInt(document.getElementById('edad').value, 10);
            const correo = document.getElementById('correo').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const message = document.getElementById('register-message');

            // Validaciones
            if (!nombre || !apellido || !correo || !password || !confirmPassword || isNaN(edad)) {
                message.textContent = 'Por favor, completa todos los campos.';
                return;
            }
            if (edad <= 0) {
                message.textContent = 'La edad debe ser mayor a 0.';
                return;
            }
            if (password !== confirmPassword) {
                message.textContent = 'Las contraseñas no coinciden.';
                return;
            }
            if (password.length < 4) {
                message.textContent = 'La contraseña debe tener al menos 4 caracteres.';
                return;
            }

            // Si todo está bien
            message.style.color = 'green';
            message.textContent = '¡Registro exitoso! (Solo validación en el navegador)';
            registerForm.reset();
        });
    }
});