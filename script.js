document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelectorAll(".nav-link");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});

// Write characher auto and change
let words = ["Web Developer", "Student IT","Information Technology"]; // Words to type
    let index = 0; // Word index
    let charIndex = 0; // Character index
    let isDeleting = false; // Track if deleting

    function typeEffect() {
        let textElement = document.getElementById("changingText");
        let currentWord = words[index];
        
        if (isDeleting) {
            // Remove character
            charIndex--;
        } else {
            // Add character
            charIndex++;
        }

        // Update displayed text
        textElement.innerText = currentWord.substring(0, charIndex);

        // Control typing speed
        let speed = isDeleting ? 100 : 150; // Speed for deleting and typing

        if (!isDeleting && charIndex === currentWord.length) {
            // Pause before deleting
            speed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Switch to next word
            isDeleting = false;
            index = (index + 1) % words.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    // Start the effect
    typeEffect();

    window.onload = function() {
        // Show only welcome screen initially
        document.getElementById("welcomeScreen").style.display = "block";
        document.getElementById("homepage").style.display = "none";
    
        // After 2.5 seconds, hide the welcome screen and show the homepage
        setTimeout(() => {
            document.getElementById("welcomeScreen").style.opacity = "0"; // Fade out
            setTimeout(() => {
                document.getElementById("welcomeScreen").style.display = "none"; // Hide welcome screen
                document.getElementById("homepage").style.display = "block"; // Show homepage
                setTimeout(() => {
                    document.getElementById("homepage").style.opacity = "1"; // Fade in homepage
                }, 100); // Delay for fade-in effect
            }, 1000); // Wait for fade effect to complete
        }, 2500); // Keep welcome screen for 2.5 seconds
    };
    

    // ====== @ Loading #project #certificates and #Tech Stack
    $(document).ready(function () {
        // Initially show the first section
        $(".content-section").hide();
        $("#project-content").show();

        $(".button").click(function () {
            // Remove 'active' class from all buttons
            $(".button").removeClass("active");
            // Add 'active' class to the clicked button
            $(this).addClass("active");

            // Hide all content sections
            $(".content-section").hide();

            // Get the corresponding section ID and show it
            let sectionId = $(this).attr("id") + "-content";
            $("#" + sectionId).fadeIn();
        });
    });

    // Click button load to page order
     // Function to scroll to a specific section
     function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    document.getElementById('home').addEventListener('click', () => scrollToSection('homepage'));
    document.getElementById('about').addEventListener('click', () => scrollToSection('about_me'));
    document.getElementById('skill').addEventListener('click', () => scrollToSection('skillSection'));
    document.getElementById('portfolio').addEventListener('click', () => scrollToSection('portfolioSection'));
    document.getElementById('viewPortfolio').addEventListener('click', () => scrollToSection('portfolioSection'));