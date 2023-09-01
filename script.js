// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Create the parallax effect
gsap.to('.parallax-bg', {
    y: -200, // Adjust this value to control the parallax effect
    ease: 'none',
    scrollTrigger: {
        trigger: '.parallax-section',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
    },
});
