/* ============================================================
   form.js — Contact Form → WhatsApp Redirect
   ============================================================ */

/**
 * Reads the contact form, builds a pre-filled WhatsApp message,
 * and opens wa.me in a new tab.
 * Called from the form submit button's onclick.
 */
function handleSubmit(e) {
  e.preventDefault();

  const name    = document.querySelector('input[placeholder="Your name"]').value.trim();
  const phone   = document.querySelector('input[placeholder="+91 XXXXX XXXXX"]').value.trim();
  const email   = document.querySelector('input[placeholder="your@email.com"]').value.trim();
  const project = document.querySelector(".contact-form select").value;
  const message = document.querySelector(".contact-form textarea").value.trim();

  if (!name || !phone) {
    alert("Please enter at least your name and phone number.");
    return;
  }

  const text = `Hello Muzarch Design Studio! 👋

I'm interested in your services. Here are my details:

🔹 *Name:* ${name}
🔹 *Phone:* ${phone}
🔹 *Email:* ${email || "Not provided"}
🔹 *Project Type:* ${project || "Not specified"}
🔹 *Message:* ${message || "Not provided"}

Please get in touch with me. Thank you!`;

  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/918080607866?text=${encoded}`, "_blank");
}
