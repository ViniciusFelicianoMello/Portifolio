document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as imagens de seta
    const setas = document.querySelectorAll('.habilidades_inicio');

    // Adiciona um evento de clique a cada imagem de seta
    setas.forEach(seta => {
        seta.addEventListener('click', () => {
            // Seleciona o elemento pai da imagem de seta, que é o container da habilidade
            const habilidadeContainer = seta.closest('.habilidades_conteudo');
            
            // Alterna as classes habilidades_close e habilidades_open no container da habilidade
            habilidadeContainer.classList.toggle('habilidades_close');
            habilidadeContainer.classList.toggle('habilidades_open');
        });
    });
});