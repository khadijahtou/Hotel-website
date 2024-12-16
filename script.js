document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('open-menu');
    const closeMenu = document.getElementById('close-menu');
    const navMenu = document.getElementById('mobile-menu');

    if (menuToggle && navMenu && closeMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('hidden')
			closeMenu.classList.toggle('hidden')
			menuToggle.classList.toggle('hidden')
        });

        closeMenu.addEventListener('click', () => {
            navMenu.classList.toggle('hidden')
			closeMenu.classList.toggle('hidden')
			menuToggle.classList.toggle('hidden');
        });
    }
});
