// Chess Arena - Minimal JavaScript for analytics tracking and interactions

document.addEventListener("DOMContentLoaded", () => {
    // Simple Analytics event tracking for CTA buttons
    // Events are tracked via data-sa-event attributes
    const trackableElements = document.querySelectorAll('[data-sa-event]');

    trackableElements.forEach(element => {
        element.addEventListener('click', () => {
            const eventName = element.getAttribute('data-sa-event');
            // Simple Analytics automatically tracks events via data attributes
            // No additional code needed if SA script is loaded
            console.log(`Event tracked: ${eventName}`);
        });
    });

    // Smooth scroll for anchor links (backup for older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    console.log('Chess Arena website loaded ✓');
});
