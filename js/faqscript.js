// ==================== FAQ ====================
document.addEventListener('DOMContentLoaded', function() {
    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                faq.querySelector('.faq-answer').classList.remove('open');
            });
            
            // Open clicked item if it was closed
            if (!isOpen) {
                item.classList.add('active');
                answer.classList.add('open');
            }
        });
    });
    
    // Back to top button functionality for Frequantly ask question(FAQ) page
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Search functionality for Frequantly ask question(FAQ) page
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // If search is empty, show all FAQs
            faqItems.forEach(item => {
                item.style.display = 'block';
            });
            return;
        }
        
        // Search through FAQs
        let foundResults = false;
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
            
            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.style.display = 'block';
                foundResults = true;
                
                // Open the matching FAQ
                item.classList.add('active');
                item.querySelector('.faq-answer').classList.add('open');
            } else {
                item.style.display = 'none';
            }
        });
        
        if (!foundResults) {
            alert('No results found for "' + searchTerm + '". Please try a different search term.');
        }
    }
});
/*
Purpose: Enhances FAQ page.
Key Features:
Expand/collapse questions.
Back-to-top button.
Search FAQs by keyword.
*/