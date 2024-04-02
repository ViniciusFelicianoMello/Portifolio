document.addEventListener("DOMContentLoaded", function() {
    // Seletor para o checkbox do menu
    var menuCheckbox = document.getElementById("menu");
    
    // Seletor para todos os itens do menu
    var menuItens = document.querySelectorAll(".lista_menu_lista");

    // Adiciona evento de clique a todos os itens do menu
    menuItens.forEach(function(item) {
        item.addEventListener("click", function() {
            // Fecha o menu hamburguer
            menuCheckbox.checked = false;
        });
    });
});