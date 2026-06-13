document.addEventListener('DOMContentLoaded', function () {
    console.log('SheWear JS: System Initialized');

    // Visual proof that JS is working (runs once)
    const announcement = document.querySelector('.announcement-bar');
    if (announcement) {
        const originalText = announcement.innerText;
        announcement.style.backgroundColor = '#2ecc71'; // Green flash
        announcement.innerText = '⚡ SHEWEAR ENGINE ACTIVE ⚡';
        setTimeout(() => {
            announcement.style.backgroundColor = '';
            announcement.innerText = originalText;
        }, 1500);
    }

    // 1. Product Card Navigation
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function (e) {
            const nameElement = this.querySelector('h4');
            const priceElement = this.querySelector('p');
            const imgElement = this.querySelector('img');

            if (nameElement && priceElement && imgElement) {
                const name = nameElement.innerText;
                const price = priceElement.innerText;
                const imgSrc = imgElement.src;

                // Simple loading state
                this.style.opacity = '0.5';

                const url = `product-detail.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&img=${encodeURIComponent(imgSrc)}`;
                window.location.href = url;
            }
        });
    });

    // 2. Navbar & Dropdown Fixes
    // Ensure dropdowns work even if Bootstrap JS has issues loading from CDN
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            if (!window.bootstrap) {
                e.preventDefault();
                const menu = this.nextElementSibling;
                if (menu) menu.classList.toggle('show');
            }
        });
    });

    // 3. Newsletter handler
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            if (email) {
                alert(`Welcome to SheWear! We've sent a welcome gift to ${email}`);
                this.reset();
            }
        });
    }
});
