const popupView = document.querySelectorAll(".servicos_popup"),
      popupMais = document.querySelectorAll(".sevicos_card"),
      popupClose = document.querySelectorAll(".servicos_popup_close");

// Função para abrir o popup
function abrirPopup(index) {
    popupView[index].classList.add("active-popup");
}

// Função para fechar o popup
function fecharPopup() {
    popupView.forEach(popup => {
        popup.classList.remove("active-popup");
    });
    console.log("fecha");
}

// Adiciona o ouvinte de evento para abrir o popup
popupMais.forEach((popup, index) => {
    popup.addEventListener("click", () => {
        abrirPopup(index);
    });
});

// Adiciona o ouvinte de evento para fechar o popup
popupClose.forEach(popup => {
    popup.addEventListener("click", (event) => {
        event.stopPropagation();
        fecharPopup();
    });
});