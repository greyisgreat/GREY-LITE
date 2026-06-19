const canvas = document.getElementById('greyOrb');
const ctx = canvas.getContext('2d');

// Set canvas dimensions explicitly
canvas.width = 400;
canvas.height = 400;

function drawOrb() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw outer ring (Wireframe style)
    ctx.beginPath();
    ctx.arc(200, 200, 150, 0, Math.PI * 2);
    ctx.strokeStyle = '#4B5D73'; // Bluish grey
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw inner core
    ctx.beginPath();
    ctx.arc(200, 200, 50, 0, Math.PI * 2);
    ctx.fillStyle = '#7DD3FC'; // Cyan accent
    ctx.fill();
    
    requestAnimationFrame(drawOrb);
}

// Start the animation
drawOrb();

// Voice initialization placeholder to prevent console errors
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.start();
}
