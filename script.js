// Toggle Menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Contact Form - EmailJS Only
(function () {
    emailjs.init('qeNvH-9bnSySpcihz'); // Your EmailJS Public Key
})();

document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    try {
        const response = await emailjs.sendForm('service_11zwmka', 'template_mslby8k', this, 'qeNvH-9bnSySpcihz');
        console.log('SUCCESS!', response.status, response.text);

        if (response.status === 200 || response.text === "OK") {
            const popup = document.getElementById("successPopup");
            popup.classList.add("show");

            // Auto-hide after 3 seconds
            setTimeout(() => {
                popup.classList.remove("show");
            }, 5000);

            // Optional: clear form
            document.getElementById("contactForm").reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    } catch (error) {
        console.error("Email sending failed:", error);
        alert("Failed to send message. Please try again later.");
    }
});
