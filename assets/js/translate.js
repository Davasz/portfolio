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
          'REPOSITÓRIOS' : 'REPOSITORIES',
          'Olá, eu sou o Davi Souza' : 'Hello, I am Davi Souza',
          'Tenho 17 anos e estou no terceiro ano do ensino médio na ETEC - Prof. Armando José Farinazzo. Sou fascinado por tecnologia desde minha infancia, e depois de 1 ano de estudos me encontrei na área da programação. Atualmente minha especialidade é o Front-End, mas estou estudando tecnologias Back-End, vizando me tornar um programador Fullstack.' : 'I am 17 years old and I am in the third year of high school at ETEC - Prof. Armando Jose Farinazzo. I have been fascinated by technology since my childhood, and after 1 year of studies I found myself in the area of ​​programming. Currently my specialty is Front-End, but I am studying Back-End technologies, aiming to become a Fullstack programmer.'
        }
      }
    }
  });
  
  function updateTranslations() {
    // atualiza todos os elementos com o atributo "data-i18n"
    document.querySelectorAll('[data-i18n]').forEach(function(element) {
      element.textContent = i18next.t(element.getAttribute('data-i18n'));
    });
  }
  
  function toggleLanguage() {
    // obtém o valor selecionado no select
    var newLanguage = document.querySelector('#language-select').value;
    
    i18next.changeLanguage(newLanguage, function(err, t) {
      if (err) return console.log('Erro ao alterar idioma:', err);
      updateTranslations();
    });
  }
  
  // adiciona o evento "change" ao select
  document.querySelector('#language-select').addEventListener('change', function() {
    toggleLanguage();
  });
  
  // chama a função updateTranslations() para atualizar os elementos na página inicialmente
  updateTranslations();
  