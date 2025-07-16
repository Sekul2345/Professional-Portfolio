// Toggle Menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// whatsapp.js
function openWhatsApp() {
  const phoneNumber = "917806951071"; // With country code (91 for India)
  const message = "Hi, I need to contact you";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank'); // Opens in new tab on all devices
}


// Initialize EmailJS
(function () {
    emailjs.init('qeNvH-9bnSySpcihz'); // Your EmailJS Public Key
})();

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    try {
        const response = await emailjs.sendForm(
            'service_11zwmka',           // Service ID
            'template_mslby8k',          // Template ID
            this,                        // Form element
            'qeNvH-9bnSySpcihz'          // Public Key
        );

        console.log('SUCCESS!', response.status, response.text);

        if (response.status === 200 || response.text === "OK") {
            const popup = document.getElementById("successPopup");
            popup.classList.add("show");

            // Auto-hide after 5 seconds
            setTimeout(() => {
                popup.classList.remove("show");
            }, 5000);

            // Clear the form
            document.getElementById("contactForm").reset();
        } else {
            alert("Something went wrong. Please try again.");
        }

    } catch (error) {
        console.error("Email sending failed:", error);
        alert("Failed to send message. Please try again later.");
    }
});
