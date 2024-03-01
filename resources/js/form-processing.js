document.querySelector(".contact__form").addEventListener("submit", beforeSend, event);

function beforeSend(event) {
    event.preventDefault();
    const name = document.querySelector(".contact__name").value;
    const phone = document.querySelector(".contact__phone").value;
    const email = document.querySelector(".contact__email").value;
    const message = document.querySelector(".contact__message").value;
    // additional check, maybe in future we will use trim for fields
    if (name && email && message) {
        // here will be an ajax-request
        success(name);
    }
}

function success(name) {
    alert(`Dear ${name}, your message has been sent successfully.`);
}