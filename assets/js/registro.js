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
            message.textContent = '¡Registro exitoso! Redirigiendo al login...';
            registerForm.reset();

            // Redirigir después de 2 segundos
            setTimeout(function () {
                window.location.href = 'login.html';
            }, 2000);
        });
    }
});