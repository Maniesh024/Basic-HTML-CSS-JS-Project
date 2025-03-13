const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-button");
const chatContainer = document.getElementById("chat-container");

// Function to create chat bubbles
function appendMessage(sender, message) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.innerText = message;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Function to fetch AI response
async function getBotResponse(userMessage) {
    const apiUrl = "https://api.openai.com/v1/completions"; // Replace with actual API endpoint
    const apiKey = "YOUR_OPENAI_API_KEY";

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: userMessage,
            max_tokens: 100
        })
    });
    
    const data = await response.json();
    return data.choices[0].text.trim();
}

// Function to handle user input
async function handleUserInput() {
    const userMessage = chatInput.value.trim();
    if (userMessage === "") return;

    appendMessage("user", userMessage);
    chatInput.value = "";

    try {
        const botResponse = await getBotResponse(userMessage);
        appendMessage("bot", botResponse);
    } catch (error) {
        appendMessage("bot", "Sorry, I couldn't process your request.");
    }
}

sendButton.addEventListener("click", handleUserInput);
chatInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        handleUserInput();
    }
});
