document.addEventListener('DOMContentLoaded', () => {

    /* MENÚ HAMBURGUESA  */
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const icon = navToggle.querySelector('i');

    navToggle.addEventListener('click', () => {
        
        navMenu.classList.toggle('show');
        
        
        if (navMenu.classList.contains('show')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    /* SCROLL-UP */
    const scrollBtn = document.getElementById('scrollUp');

    window.addEventListener('scroll', () => {
       
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'flex'; 
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', () => {
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {

    const contactForm = document.getElementById('contactFormModal');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página se recargue

            // 1. Recuperando los datos de TU formulario
            const nombre = document.getElementById('modal-name').value;
            const email = document.getElementById('modal-email').value;
            const asunto = document.getElementById('modal-subject').value;
            const mensaje = document.getElementById('modal-message').value;

            // 2. Simulación de envío (Aquí conectarías con tu backend más adelante)
            console.log('Datos capturados:', { nombre, email, asunto, mensaje });

            // 3. Cerrar el modal automáticamente tras "enviar"
            // Usamos el ID del modal que definimos antes: 'modalContacto'
            const modalElement = document.getElementById('modalContacto');
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            
            if (modalInstance) {
                modalInstance.hide();
            }

            // 4. Limpiar el formulario
            this.reset();

            // 5. Feedback al usuario
            alert('Gracias ' + nombre + ', hemos recibido tu mensaje. Nos contactaremos pronto.');
        });
    }
});