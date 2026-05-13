document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
        "#aboutImage",
        { y: 0 },
        {
            y: -50,
            scrollTrigger: {
                trigger: "#about",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        "#aboutContent",
        { x: 100, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#aboutContent",
                start: "top bottom-=100",
                toggleActions: "play none none reverse",
            },
        }
    );

    gsap.fromTo(
        ".benefit-item",
        { x: 50, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".benefits-list",
                start: "top bottom-=100",
                toggleActions: "play none none reverse",
            },
        }
    );
});