// JavaScript for particles animation

// Initialize particlesJS with configuration options
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        // Rest of your particles.js configuration here
    },
    "interactivity": {
        "detect_on": "canvas",
        // Rest of your interactivity configuration here
    },
    "retina_detect": true
});

// Stats.js
var count_particles, stats, update;

// Create a new Stats object for performance monitoring
stats = new Stats;
stats.setMode(0);

// Set the position of the Stats.js element
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';

// Append the Stats.js element to the HTML body
document.body.appendChild(stats.domElement);

// Select the element with class 'js-count-particles'
count_particles = document.querySelector('.js-count-particles');

// Define an update function for Stats.js
update = function () {
    stats.begin();
    stats.end();

    // Check if particles exist and update the count
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }

    // Request animation frame for continuous updates
    requestAnimationFrame(update);
};

// Start the update loop
requestAnimationFrame(update);
