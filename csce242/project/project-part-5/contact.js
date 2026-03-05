const contactDiv = document.getElementById("contact-form");
const submitBtn = contactDiv.querySelector('button[type="submit"]');

contactDiv.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactDiv);
    formData.append("access_key", "ae32246b-accb-4c1d-a169-13ada46525ef");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            contactDiv.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});