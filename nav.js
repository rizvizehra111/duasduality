function loadNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const isInSubfolder = window.location.pathname.includes('/papers/');
    const pathPrefix = isInSubfolder ? '../' : '';

    const navHTML = `
        <header>
            <h1 class="main-title">Dua's Duality</h1>
            <div class="tagline">RISK AND RESILIENCE</div>
        </header>

        <nav class="main-nav">
            <a href="${pathPrefix}index.html" class="nav-item ${currentPage === 'index.html' ? 'active' : ''}">Home</a>
            <a href="${pathPrefix}about.html" class="nav-item ${currentPage === 'about.html' ? 'active' : ''}">About Me</a>
            <a href="${pathPrefix}thoughts.html" class="nav-item ${currentPage === 'thoughts.html' || isInSubfolder ? 'active' : ''}">My Thoughts</a>
            <a href="${pathPrefix}contact.html" class="nav-item ${currentPage === 'contact.html' ? 'active' : ''}">Contact</a>
            <button class="dark-mode-toggle" onclick="toggleDarkMode()" aria-label="Toggle dark mode">
                <span id="theme-icon">🌙</span>
            </button>
            <div class="social-icons">
                <a href="https://linkedin.com/in/dua-z-226658322" target="_blank" class="social">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </a>
            </div>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);
    initDarkMode();
}

function initDarkMode() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', isDark);
    updateThemeIcon(isDark);
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark);
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = isDark ? '☀️' : '🌙';
}

document.addEventListener('DOMContentLoaded', loadNavigation);