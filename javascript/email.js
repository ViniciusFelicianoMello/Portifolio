// const contactForm = document.getElementById("contact_form")
// const contactMessage = document.getElementById("contact_message")

// const sendEmail = (e) => {
//     e.preventDefault()
//     //serviceID - templateID - #forn - publicKey
//     emailjs.sendForm("service_yb3eepa", "template_hvq1b4k", "contact_form", "1tDUWD4fikeSed7It2")
//         .then(() => {
//             //Mensagem
//             contactMessage.textContent = "Mensagem enviada com sucesso ✅"
//             console.error('Mensagem enviada');
//             //remover mensagem
//             setTimeout(() => {
//                 contactMessage.textContent = ""
//             }, 8000)

//             //Limpar input
//             contactForm.reset()
//         })
//         .catch((error) => { // corrigido para catch
//             //Mostrar erro
//             contactMessage.textContent = "Mensagem não enviada (service error) ❌"
//             console.error('Erro ao enviar o email:', error); // Exibir detalhes do erro no console
//         });
// };

