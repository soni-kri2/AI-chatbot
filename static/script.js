window.onload = function () {

    let chatbox = document.getElementById("chatbox");

    chatbox.innerHTML =
        "<p class='bot'><b>Bot:</b> Hello 👋 Welcome to AI Chatbot</p>";

};


function sendMessage() {

    let message = document.getElementById("message").value.trim();

    if (message === "") {
        return;
    }

    let chatbox = document.getElementById("chatbox");

    // User Message
    chatbox.innerHTML +=
        `<p class="user"><b>You:</b> ${message}</p>`;

    // Typing Message
    chatbox.innerHTML +=
        `<p id="typing" class="bot"><b>Bot:</b> Typing...</p>`;

    chatbox.scrollTop = chatbox.scrollHeight;

    fetch("/chat", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            message: message
        })

    })

    .then(response => response.json())

    .then(data => {

        document.getElementById("typing").remove();

        chatbox.innerHTML +=
            `<p class="bot"><b>Bot:</b> ${data.response}</p>`;

        chatbox.scrollTop = chatbox.scrollHeight;

    })

    .catch(error => {

        console.log(error);

    });

    document.getElementById("message").value = "";

}


// Enter Key Support

document.getElementById("message")

.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});


// Clear Chat

function clearChat() {

    document.getElementById("chatbox").innerHTML = "";

}


// Dark Mode

function darkMode() {

    document.body.classList.toggle("dark");

}