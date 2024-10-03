window.addEventListener('load', function() {
    // Hide the preloader and display main content after the animations
    setTimeout(function() {
        // Hide the preloader after the second text fades out
        document.getElementById('preloader').style.display = 'none';

        // Show the main content with a slide-in effect
        const mainContent = document.querySelector('.main-content');
        mainContent.style.display = 'block';
        
        // Activate the sliding effect after a small delay
        setTimeout(function() {
            mainContent.classList.add('active');
        }, 100); // Small delay to allow the CSS transition to take effect
    }, 6000); // Total duration (2s for "HIMALAYAS", 3s for "The Expedition", and 1s fade out)
});
