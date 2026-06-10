// Wait for the HTML document to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    
    // Grab the menu button and the navigation menu
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mainNav = document.getElementById("main-nav");

    // Listen for a click on the mobile menu button
    menuBtn.addEventListener("click", () => {
        // Toggle the 'show' class to display or hide the menu
        mainNav.classList.toggle("show");
        
        // Update the button text for better accessibility
        if (mainNav.classList.contains("show")) {
            menuBtn.innerHTML = "Close ✖";
        } else {
            menuBtn.innerHTML = "Menu ☰";
        }
    });

    // Automatically close the mobile menu if a link is clicked
    const navLinks = mainNav.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove("show");
                menuBtn.innerHTML = "Menu ☰";
            }
        });
    });
});