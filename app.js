const canvas = document.getElementById('greyOrb');
const ctx = canvas.getContext('2d');

// Orb animation loop drawing concentric rings and wireframe geometry 
// as seen in Screenshot 2026-06-18 at 9.50.05 PM.jpg
function drawOrb() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Add logic here for rotation and wireframe line rendering
    requestAnimationFrame(drawOrb);
}
drawOrb();

// Voice-First Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = async (event) => {
    const userText = event.results[0][0].transcript;
    // Call Gemini API (use your Cloudflare Environment Variable for the key)
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: userText }] }] })
    });
    const data = await response.json();
    const botText = data.candidates[0].content.parts[0].text;
    
    // Natural Voice Output
    const utterance = new SpeechSynthesisUtterance(botText);
    window.speechSynthesis.speak(utterance);
};

recognition.start();
