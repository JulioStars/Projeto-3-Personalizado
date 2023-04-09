$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(12) 12345-6789'
    })

    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            campoEmail: {
                required: true,
                email: true
            },
            suaMensagem: {
                required: true
            }
        },
        messages: {
            nomeCompleto: 'Este campo é obrigatório',
            campoEmail: 'Este campo é obrigatório',
            suaMensagem: 'Este campo é obrigatório'
        }
    })
})