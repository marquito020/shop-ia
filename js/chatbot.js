// chatbot.js
document.addEventListener("DOMContentLoaded", function() {
    const chatButton = document.getElementById("chatButton");
    const chatWindow = document.getElementById("chatWindow");
    const chatCloseButton = document.getElementById("chatCloseButton");
    const chatForm = document.getElementById("chatForm");
    const chatInput = document.getElementById("chatInput");
    const chatMessages = document.getElementById("chatMessages");

    chatButton.addEventListener("click", function() {
        chatWindow.style.display = "block";
    });

    chatCloseButton.addEventListener("click", function() {
        chatWindow.style.display = "none";
    });

    chatForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const userMessage = chatInput.value;
        if (userMessage.trim() === "") return;

        appendMessage("user", userMessage);
        chatInput.value = "";

        // Aquí se agrega la lógica para la respuesta del chatbot
        setTimeout(function() {
            const botResponse = getBotResponse(userMessage);
            appendMessage("bot", botResponse);
        }, 500);
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", sender);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        if (lowerCaseMessage.includes("reconocimiento de productos")) {
            return "Utilizamos IA para identificar automáticamente los productos en tiempo real.";
        } else if (lowerCaseMessage.includes("sumatoria automática de precios")) {
            return "Sumamos automáticamente los precios de los productos reconocidos.";
        } else if (lowerCaseMessage.includes("hola")) {
            return "Hola, En que podemos ayudarlo?.";
        } else if (lowerCaseMessage.includes("verificación de pagos")) {
            return "Monitoreamos y verificamos los pagos en tiempo real.";
        } else if (lowerCaseMessage.includes("gestión de inventarios")) {
            return "Puedes gestionar el inventario en tiempo real mediante nuestra app móvil.";
        } else if (lowerCaseMessage.includes("reducción de costos operativos")) {
            return "Automatizamos procesos para reducir costos operativos.";
        } else if (lowerCaseMessage.includes("eficiencia y precisión")) {
            return "Nuestra IA mejora la eficiencia y precisión de las operaciones.";
        } else if (lowerCaseMessage.includes("control y accesibilidad")) {
            return "La app móvil ofrece control y accesibilidad constantes.";
        } else if (lowerCaseMessage.includes("crecimiento del negocio")) {
            return "Ayudamos a los emprendedores a concentrarse en expandir su negocio.";
        } else {
            return "Para más información, por favor contáctanos al número 632066339.";
        }
    }
});
