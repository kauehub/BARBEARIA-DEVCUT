document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Obtém os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Exibe uma mensagem de confirmação
    const responseMessage = `Obrigado, ${name}! Seu agendamento para ${date} às ${time} foi recebido. Entraremos em contato por e-mail: ${email}.`;
    document.getElementById('response-message').textContent = responseMessage;

    // Limpa o formulário
    document.getElementById('booking-form').reset();
});