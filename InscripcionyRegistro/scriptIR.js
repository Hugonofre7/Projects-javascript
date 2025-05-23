// Cambio dinámico entre Sign In y Sign Up (sin recargar la página)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validación de formularios antes de enviar
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita el envío por defecto (para probar)
        
        // Validación básica de campos vacíos
        const inputs = this.querySelectorAll('input[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.border = '2px solid red';
                isValid = false;
            } else {
                input.style.border = 'none';
            }
        });

        if (isValid) {
            alert('Formulario válido. Enviando datos...'); // Reemplaza con PHP luego
            // this.submit(); // Descomenta cuando tengas PHP listo
        }
    });
});

// Botones de Google (simulación)
document.querySelectorAll('button:not([type="submit"])').forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirigiendo a Google para autenticación...');
    });
});