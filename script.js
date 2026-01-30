// Funcionalidades básicas para la página web Aguas del Sol

// Validación básica del formulario de contacto
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevenir envío real
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (!nombre || !email || !mensaje) {
            alert('Por favor, complete todos los campos del formulario.');
            return;
        }

        // Validación básica de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingrese un email válido.');
            return;
        }

        // Simular envío exitoso
        alert('Mensaje enviado correctamente. Gracias por contactarnos.');
        contactForm.reset(); // Limpiar formulario
    });
}
