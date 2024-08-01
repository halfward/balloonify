// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100, // Adjust this value based on the height of the fixed header
                behavior: 'smooth'
            });
        }
    });
});


// Adjust scroll position further down when clicking on href and scrolling to h2 headings
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const targetHeading = targetElement.querySelector('h2');
            const additionalOffset = 50; // Adjust this value to scroll further down

            if (targetHeading) {
                window.scrollTo({
                    top: targetHeading.offsetTop - 250 + additionalOffset, // Adjust this value based on the height of the fixed header and additional offset
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: targetElement.offsetTop - 250 + additionalOffset, // Adjust this value based on the height of the fixed header and additional offset
                    behavior: 'smooth'
                });
            }
        }
    });
});


// Make slideshow-container slightly larger when hovering the mouse over it
const slideshowContainer = document.querySelector('.slideshow-container');

const reviewBoxes = document.querySelectorAll('.review-box');

reviewBoxes.forEach(reviewBox => {
    reviewBox.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });

    reviewBox.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.transition = 'transform 0.3s ease';
    });
});




const bulletPoints = document.querySelectorAll('.bullet-point');
let lastActivatedBulletPoint = null;

window.addEventListener('scroll', function() {
    let activated = false;

    bulletPoints.forEach(bulletPoint => {
        const rect = bulletPoint.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const activationAreaStart = windowHeight * 3 / 6;
        const activationAreaEnd = windowHeight * 4.5 / 6;

        if (!activated && rect.top <= activationAreaEnd && rect.bottom >= activationAreaStart) {
            if (lastActivatedBulletPoint && lastActivatedBulletPoint !== bulletPoint) {
                lastActivatedBulletPoint.style.transition = 'background-color 0.3s ease, transform 0.3s ease';
                lastActivatedBulletPoint.style.backgroundColor = 'transparent';
                lastActivatedBulletPoint.style.transform = 'translateY(0)';
            }

            bulletPoint.style.transition = 'background-color 0.3s ease, transform 0.3s ease';
            bulletPoint.style.backgroundColor = 'rgba(255, 215, 220, 1)'; // slightly lighter pink
            bulletPoint.style.borderRadius = '70px';
            bulletPoint.style.maxWidth = '600px';
            bulletPoint.style.margin = '10px auto'; // Move the background down a bit
            bulletPoint.style.padding = '5px 5px'; // Make the background taller in height
            bulletPoint.style.transform = 'translateY(-20px)'; // Smoothly slide up when activated

            lastActivatedBulletPoint = bulletPoint;
            activated = true;
        } else if (bulletPoint !== lastActivatedBulletPoint) {
            bulletPoint.style.transition = 'background-color 0.3s ease, transform 0.3s ease';
            bulletPoint.style.backgroundColor = 'transparent';
            bulletPoint.style.borderRadius = '70px';
            bulletPoint.style.maxWidth = '600px';
            bulletPoint.style.margin = '10px auto'; // Move the background down a bit
            bulletPoint.style.padding = '5px 5px'; // Make the background taller in height
            bulletPoint.style.transform = 'translateY(0)'; // Reset position when deactivated
        }
    });
});




// Create three pink balloons and append them to the body
const balloonContainer = document.createElement('div');
balloonContainer.style.position = 'fixed';
balloonContainer.style.bottom = '-320px';
balloonContainer.style.width = '100%';
balloonContainer.style.display = 'flex';
balloonContainer.style.justifyContent = 'space-around';
balloonContainer.style.pointerEvents = 'none'; // Make sure the balloons don't interfere with other elements
balloonContainer.style.zIndex = '-1'; // Make the balloons sit at the website's back

for (let i = 0; i < 3; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.width = '100px';
    balloon.style.height = '100px';
    balloon.style.backgroundColor = 'rgba(173, 216, 230, 1)'; // more saturated light blue
    balloon.style.borderRadius = '50%';
    balloon.style.transition = 'transform 0.3s ease, top 0.3s ease, left 0.3s ease';
    balloon.style.position = 'relative';
    balloon.style.top = `${Math.random() * 60 - 10}px`; // Randomly move up or down by up to 10px
    balloon.style.left = '-50px'; // Move further to the left
    balloonContainer.appendChild(balloon);
}

document.body.appendChild(balloonContainer);

const balloons = document.querySelectorAll('.balloon');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const activationPoint = window.innerHeight * 7/3; // Activation time
    if (scrollPosition > activationPoint) {
        const maxScale = 60; // Maximum scale factor for the balloons
        const normalizedScroll = Math.min((scrollPosition - activationPoint) / (window.innerHeight - activationPoint), 1);
        const scale = 2 + (maxScale - 50) * normalizedScroll;

        balloons.forEach(balloon => {
            balloon.style.transform = `scale(${scale})`;
        });
    }
});

// Collapsible content
// Select all collapsible buttons
const buttons = document.querySelectorAll('.collapsible-button');
        
// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const content = this.parentElement.nextElementSibling;
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
            this.textContent = "-";
        } else {
            content.style.display = "none";
            this.textContent = "+";
        }
    });
});


// Create floating balloons
function createFloatingBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('floating-balloon');
    balloon.style.width = '30px';
    balloon.style.height = '30px';
    balloon.style.backgroundColor = 'lavenderblush';
    balloon.style.borderRadius = '50%';
    balloon.style.position = 'fixed';
    balloon.style.bottom = '-30px'; // Start below the screen
    balloon.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
    balloon.style.transition = 'bottom 10s linear, transform 10s linear'; // Slower transition for both bottom and transform
    balloon.style.zIndex = '-1'; // Set z-index to sit at the absolute bottom

    document.body.appendChild(balloon);

    // Animate the balloon floating up and inflating
    setTimeout(() => {
        balloon.style.bottom = `${window.innerHeight + 30}px`; // Move above the screen
        balloon.style.transform = 'scale(3)'; // Inflate the balloon
    }, 100);

    // Remove the balloon after it has floated up
    setTimeout(() => {
        balloon.remove();
    }, 10100); // Adjusted to match the slower transition
}

// Generate a new balloon every 1000ms (1 second) to match the slower movement
setInterval(createFloatingBalloon, 1000);
