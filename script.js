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

const showTypingAnimation = () =>{
    const html = `
            <div class="chat-content">
                <div class="chat-details">
                    <img src="img/chat.png" alt="">
                    <div class="typing-animation">
                        <div class="typing-dot" style="--delay: 0.2s"></div>
                        <div class="typing-dot" style="--delay: 0.3s"></div>
                        <div class="typing-dot" style="--delay: 0.4s"></div>
                    </div>
                </div>
                <span class="material-symbols-outlined"> content_copy </span>
            </div>`;
    const outgoingChatDiv = createElement(html, "incoming");
    chatContainer.appendChild(outgoingChatDiv);
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
    setTimeout(showTypingAnimation, 500);
}

sendButton.addEventListener("click", handleOutgoingChat);