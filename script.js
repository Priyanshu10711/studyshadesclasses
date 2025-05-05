// StudyShades Website JavaScript
// This file contains all the JavaScript for our website

// ======================
// MOBILE MENU TOGGLE
// ======================

// This function works on all pages to toggle the mobile menu
function setupMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');
    
    // Only run if these elements exist on the page
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            
            // Change button text based on menu state
            if (navMenu.classList.contains('show')) {
                menuBtn.textContent = 'Close ×';
            } else {
                menuBtn.textContent = 'Menu ☰';
            }
        });
    }
}

// ======================
// FORM VALIDATION
// ======================

function validateForm(formId) {
    const form = document.getElementById(formId);
    
    if (!form) return; // Exit if form doesn't exist on this page
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop form from submitting
        
        // Get form inputs
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const phone = form.querySelector('#phone').value.trim();
        const studentClass = form.querySelector('#class').value;
        
        // Simple validation
        let isValid = true;
        let errorMessage = '';
        
        if (name === '') {
            isValid = false;
            errorMessage = 'Please enter your name.';
        } else if (email === '' || !email.includes('@') || !email.includes('.')) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
        } else if (phone === '' || phone.length < 10 || isNaN(phone)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number (at least 10 digits).';
        } else if (studentClass === '') {
            isValid = false;
            errorMessage = 'Please select a class.';
        }
        
        // Show result
        if (isValid) {
            alert('Thank you for your inquiry! We will contact you soon.');
            form.reset(); // Clear the form
        } else {
            alert('Please fix these issues:\n\n' + errorMessage);
        }
    });
}

// ======================
// PAGE LOAD FUNCTION
// ======================

// This runs when each page loads
function pageLoad() {
    // Set up mobile menu on all pages
    setupMobileMenu();
    
    // Set up form validation only on contact page
    if (document.getElementById('inquiryForm')) {
        validateForm('inquiryForm');
    }
    
    // You could add more page-specific code here
    // For example:
    // if (current page is services.html) { do something special }
}

// Run our page load function when the page loads
document.addEventListener('DOMContentLoaded', pageLoad);