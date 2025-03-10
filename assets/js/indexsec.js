
document.addEventListener("DOMContentLoaded", () => {
    const wonders = document.querySelectorAll(".wonder1");

    // Intersection Observer setup  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            } else {
                entry.target.classList.remove("animate"); // Reset animation  
            }
        });
    }, {
        threshold: 0.1, // 10% dikhne par trigger  
        rootMargin: "0px 0px -50px 0px" // Bottom se 50px pehle check  
    });

    // Har card ko observe karein  
    wonders.forEach((wonder, index) => {
        wonder.style.transitionDelay = `${index * 0.10}s`; // Delay based on index  
        observer.observe(wonder);
    });
});  
