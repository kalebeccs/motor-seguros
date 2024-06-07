const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-status')

const sendEmail = (e) => {
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_3qpu9j9', 'template_fztnj8a', '#contact-form', 'DZFmbza9T7-mhF6wS')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully ✅'
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
            contactForm.reset()
        }, () => {
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)