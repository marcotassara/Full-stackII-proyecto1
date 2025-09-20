document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-button');

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Elimina el ítem 'logueado' del localStorage
            localStorage.removeItem('logueado');
            
            // Redirige al usuario a la página de login
            window.location.href = 'login.html';
        });
    }
});