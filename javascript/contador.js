// Função para verificar se pelo menos parte da seção está visível no viewport
function isPartiallyInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    // Verifica se pelo menos parte da seção está visível na janela
    return (
        (rect.top >= 0 && rect.top <= windowHeight) ||
        (rect.bottom >= 0 && rect.bottom <= windowHeight) ||
        (rect.top < 0 && rect.bottom > windowHeight)
    );
}

// Função para animar os números do contador apenas uma vez quando a seção está visível
function animateCountersOnceWhenVisible() {
    var contador = document.querySelectorAll('.numero');

    contador.forEach(function(cont) {
        // Verifica se pelo menos parte do contador está visível e se ainda não foi animado
        if (isPartiallyInViewport(cont) && !cont.classList.contains('animado')) {
            var Destino = parseInt(cont.innerText);
            var inicio = 0;
            var Acrescimo = Math.ceil(Destino / 100); // Define o incremento

            // Função para atualizar o contador
            function atualizarContador() {
                inicio += Acrescimo;
                if (inicio >= Destino) {
                    cont.innerText = Destino;
                } else {
                    cont.innerText = inicio;
                    setTimeout(atualizarContador, 20); // Atualiza a cada 130 milissegundos
                }
            }

            atualizarContador();

            // Marca o elemento como animado para que não seja reiniciado
            cont.classList.add('animado');
        }
    });
}

// Adiciona um ouvinte de evento de rolagem à página para garantir que a animação seja iniciada mesmo se a seção estiver visível após o carregamento inicial
window.addEventListener('scroll', function() {
    animateCountersOnceWhenVisible();
});

// Chama a função quando a página é carregada
window.addEventListener('load', function() {
    animateCountersOnceWhenVisible();
});