document.querySelector(".contact__submit").addEventListener("click", beforeSend, event);

function beforeSend(event) {
    event.preventDefault();
    const name = document.querySelector(".contact__name").value;
    const phone = document.querySelector(".contact__phone").value;
    const email = document.querySelector(".contact__email").value;
    const message = document.querySelector(".contact__message").value;
    console.log(name, phone, email, message);
    if (name && phone && email && message) {
        alert(`Dear ${name}, your message has been sent successfully.`);
    }
}

function success() {

}