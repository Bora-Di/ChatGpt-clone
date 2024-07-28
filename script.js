const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");

let userText = null;

const createElement = (html, className) =>{
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat", className);
    chatDiv.innerHTML = html;
    return chatDiv;
}

const handleOutgoingChat = () =>{
    userText = chatInput.value.trim();
    const html = `
                <div class="chat-content">
                    <div class="chat-details">
                        <img src="img/user.png" alt="">
                        <p>${userText}</p>
                    </div>
                 </div>`;
    const outgoingChatDiv = createElement(html, "outgoing");
    chatContainer.appendChild(outgoingChatDiv);
}

sendButton.addEventListener("click", handleOutgoingChat);