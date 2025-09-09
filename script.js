document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navPanel = document.getElementById('nav-panel');
    const closeBtn = document.getElementById('close-btn');
    const homeLink = document.getElementById('home-link');

    if (menuToggle && navPanel && closeBtn) {
        const openMenu = () => {
            navPanel.classList.add('is-open');
            menuToggle.style.display = 'none';
        };
        const closeMenu = () => {
            navPanel.classList.remove('is-open');
            menuToggle.style.display = 'flex';
        };
        menuToggle.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);

        if (homeLink) {
            homeLink.addEventListener('click', (event) => {
                const isHomePage = window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html');
                if (isHomePage) {
                    event.preventDefault(); 
                    closeMenu();
                }
            });
        }
    }
    try {
        let tg = window.Telegram.WebApp;
        tg.ready();
        console.log('Telegram Web App initialized.');
    } catch (e) {
        console.error('Telegram Web App script not found.', e);
    }
});