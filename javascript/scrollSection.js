// Função para rolar para uma seção com um deslocamento
function scrollToSection(sectionId, offset) {
    var section = document.getElementById(sectionId);
    if (section) {
        var sectionPosition = section.offsetTop - offset;
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    }
}

// Adicione um ouvinte de evento de clique para cada link do cabeçalho
var headerLinks = document.querySelectorAll('.opcao');
headerLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Impedir o comportamento padrão do link
        event.preventDefault();
        // Rolar para a seção com um deslocamento
        scrollToSection(link.getAttribute('href').substring(1), 70);
    });
});
