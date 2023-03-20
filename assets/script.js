i18next.init({
    lng: 'pt',
    resources: {
        en: {
            translation: {
                'hello': 'Olá, mundo!',
                'welcome': 'Bem-vindo ao meu site!',
                'CURRÍCULO(PDF)' : 'CURRICULUM(PDF)',
                'PROJETOS' : 'PROJECTS',
                'HABILIDADES' : 'SKILLS',
                'CONTATO' : 'CONTACT',
                'SOBRE' : 'ABOUT',
                'Seja bem-vindo ao meu portfólio' : 'Welcome to my portfolio',
                'REPOSITÓRIOS' : 'REPOSITORIES'
            }
        }
    }
});

function updateTranslations() {
    // atualiza todos os elementos com o atributo "data-i18n"
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
        element.textContent = i18next.t(element.getAttribute('data-i18n'));
    });
}

function toggleLanguage() {
    // alterna entre inglês e português
    var newLanguage = i18next.language === 'en' ? 'pt' : 'en';
    i18next.changeLanguage(newLanguage, function (err, t) {
        if (err) return console.log('Erro ao alterar idioma:', err);
        updateTranslations();
    });
}

// adiciona o evento "click" ao botão
document.querySelector('#btn-translate').addEventListener('click', function () {
    toggleLanguage();
});

