const form = document.getElementById("form")
const errorMessage = document.querySelector(".error-message")

const newsletterWrapper = document.querySelector(".newsletter-wrapper")
const successWrapper = document.querySelector(".success-wrapper")

const emailValue = document.getElementById("email-value")

const dismissBtn = document.getElementById("dismiss-btn")

// Function to validate email format
const validateEmail = email => {
    if (!email) return false; // Check if email is empty

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase());
}

const showSuccessMessage = (email) => {
    emailValue.textContent = email;
    newsletterWrapper.classList.add("hide");
    successWrapper.classList.add("show");
}

const hideSuccessMessage = () => {
    newsletterWrapper.classList.remove("hide");
    successWrapper.classList.remove("show");
    document.getElementById("email-address").value = "";
}


form.addEventListener("submit", e => {
    e.preventDefault()
    const email = document.getElementById("email-address").value.trim();
    const isValid = validateEmail(email);

    if (!isValid) {
        errorMessage.classList.add("show");
        document.getElementById("email-address").classList.add("error");
    } else {
        errorMessage.classList.remove("show");
        document.getElementById("email-address").classList.remove("error");
        showSuccessMessage(email)
    }
})

dismissBtn.addEventListener("click", hideSuccessMessage);