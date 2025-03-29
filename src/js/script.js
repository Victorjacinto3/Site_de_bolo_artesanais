document.addEventListener('DOMContentLoaded', function() {
    // Efeito de rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Compensa o cabeçalho fixo
                    behavior: 'smooth'
                });
            }
        });
    });

    // Formulário de Pedido
    const pedidoForm = document.getElementById('pedidoForm');

    if (pedidoForm) {
        pedidoForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Capturar valores do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const bolo = document.getElementById('bolo').value;
            const mensagem = document.getElementById('mensagem').value;

            // Aqui você pode adicionar validações adicionais

            // Envio Simular (substitua por código real de envio)
            console.log('Pedido enviado:', {
                nome,
                email,
                telefone,
                bolo,
                mensagem
            });

            // Feedback ao usuário
            alert('Pedido enviado com sucesso! Entraremos em contato em breve para confirmar os detalhes.');

            // Limpar formulário
            pedidoForm.reset();
        });
    }

    // Adicionar classe ao header quando rolar a página
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Máscara para telefone (opcional)
    function mascaraTelefone(evento) {
        let texto = evento.target.value.replace(/\D/g, '');
        let textoFormatado = '';

        if (texto.length > 0) {
            if (texto.length <= 3) {
                textoFormatado = `(${texto}`;
            } else if (texto.length <= 7) {
                textoFormatado = `(${texto.substring(0, 2)}) ${texto.substring(2)}`;
            } else if (texto.length <= 11) {
                textoFormatado = `(${texto.substring(0, 2)}) ${texto.substring(2, 7)}-${texto.substring(7)}`;
            } else {
                textoFormatado = `(${texto.substring(0, 2)}) ${texto.substring(2, 7)}-${texto.substring(7)}`;
            }
        }

        evento.target.value = textoFormatado;
    }

    // Aplicar máscara ao campo de telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', mascaraTelefone);
    }
});