const canvas = document.getElementById('greyOrb');
const ctx = canvas.getContext('2d');
const output = document.getElementById('output-text');
const timeEl = document.getElementById('time');

// Real-time UI updates
setInterval(() => timeEl.innerText = new Date().toLocaleTimeString(), 1000);

// Orb Animation (Wireframe Loop)
function draw() {
    ctx.clearRect(0, 0, 600, 600);
    // Draw wireframe logic... (as previously defined)
    requestAnimationFrame(draw);
}
draw();

// Voice-First AI Logic
const rec = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
rec.onresult = async (e) => {
    const text = e.results[e.results.length - 1][0].transcript;
    output.innerText = "Processing: " + text;
    
    try {
        // Fetch logic here
        const response = await fetch('https://generativelanguage.googleapis.com/...', { /* API setup */ });
        const data = await response.json();
        const reply = data.candidates[0].content.parts[0].text;
        
        output.innerText = reply;
        const speech = new SpeechSynthesisUtterance(reply);
        window.speechSynthesis.speak(speech);
    } catch (err) {
        output.innerText = "Error accessing AI engine.";
    }
};
rec.start();
