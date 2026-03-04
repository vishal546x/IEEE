/* script.js */
function toggleMenu() {
    // Finds the navigation links by ID
    const navLinks = document.getElementById('nav-links');
    
    // Toggles the 'active' class on and off
    if (navLinks) {
        navLinks.classList.toggle('active');
        console.log("Menu state toggled successfully.");
    } else {
        console.log("Error: Element with ID 'nav-links' not found.");
    }
}
/* Real-time Timeline Highlighter */
function updateTimeline() {
    const now = new Date();
    const items = document.querySelectorAll('.timeline-item');
    
    items.forEach(item => {
        const eventDate = new Date(item.getAttribute('data-date'));
        
        if (now > eventDate) {
            // Event has passed
            item.classList.add('past-event');
            item.classList.remove('active-event');
        } else {
            // Future event - we mark the first future one as 'active'
            const nextActive = document.querySelector('.timeline-item:not(.past-event)');
            if (nextActive) {
                nextActive.classList.add('active-event');
            }
        }
    });
}
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('menu-overlay');
    
    // Toggle the 'active' class on the menu
    navLinks.classList.toggle('active');
    
    // Show/Hide the background overlay
    if (navLinks.classList.contains('active')) {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', updateTimeline);

// Close menu when clicking a link (optional, for better mobile UX)
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});