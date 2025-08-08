// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Display alert with form information
    alert(`Thank you for your message, ${firstName} ${lastName}!\n\nYour message about "${subject}" has been received. We'll get back to you at ${email} soon!`);
    
    // Reset form
    document.getElementById('contactForm').reset();
}

// Generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Generate random gradient
function getRandomGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const angle = Math.floor(Math.random() * 360);
    return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}

// Change background color when project title is clicked - now completely random!
function changeBackground(projectNumber) {
    const portfolioSection = document.getElementById('portfolio');
    
    // Remove existing background classes
    portfolioSection.classList.remove('bg-gradient-1', 'bg-gradient-2', 'bg-gradient-3', 'bg-gradient-4');
    
    // Generate and apply completely random gradient background
    const randomGradient = getRandomGradient();
    portfolioSection.style.background = randomGradient;
    
    // Add a subtle animation effect
    portfolioSection.style.transform = 'scale(1.01)';
    setTimeout(() => {
        portfolioSection.style.transform = 'scale(1)';
    }, 200);
    
    // Optional: Log the colors to console so you can see what was generated
    console.log(`Random gradient applied: ${randomGradient}`);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
    } else {
        navbar.style.backgroundColor = '';
    }
});

// Add loading animation to project cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});