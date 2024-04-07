// Pega o elemento checkbox pelo seu ID 'dark-mode'
const botaoDark = document.getElementById('dark-mode');

// Adiciona um ouvinte de evento para o evento de mudança do checkbox
botaoDark.addEventListener('change', () => {
    // Verifica se o checkbox está marcado
    if (botaoDark.checked) {
        // Chama a função para alterar o tema para escuro
        changeThemeToDark();
    } else {
        // Chama a função para alterar o tema para claro
        changeThemeToLight();
    }
});

// Função para alterar o tema para escuro
function changeThemeToDark() {
    // Define o atributo 'data-theme' no elemento raiz como 'dark'
    document.documentElement.setAttribute('data-theme', 'dark');
    // Armazena o tema 'dark' no localStorage
    localStorage.setItem('theme', 'dark');
}

// Função para alterar o tema para claro
function changeThemeToLight() {
    // Define o atributo 'data-theme' no elemento raiz como 'light'
    document.documentElement.setAttribute('data-theme', 'light');
    // Armazena o tema 'light' no localStorage
    localStorage.setItem('theme', 'light');
}

// Verifica o tema salvo no localStorage ao carregar a página
const savedTheme = localStorage.getItem('theme');
// Se o tema salvo for 'dark', marca o checkbox e altera o tema para escuro
if (savedTheme === 'dark') {
    botaoDark.checked = true;
    changeThemeToDark();
} else {
    // Caso contrário, altera o tema para claro
    botaoDark.checked = false;
    changeThemeToLight();
}