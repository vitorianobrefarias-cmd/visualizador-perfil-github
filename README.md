# 🔍 Visualizador de Perfil do GitHub

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-green)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow)
![HTML5](https://img.shields.io/badge/HTML5-Semantic-orange)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-blue)

Aplicação web moderna e responsiva desenvolvida em JavaScript puro (Vanilla JS), HTML5 e CSS3 que permite buscar e visualizar informações detalhadas de qualquer perfil de usuário no GitHub utilizando a API oficial do GitHub.

---

## 🚀 Funcionalidades Principais

- **Busca Dinâmica de Usuários:** Pesquise por qualquer nome de usuário válido cadastrado na plataforma do GitHub.
- **Perfil Completo:** Exibição imediata da foto de avatar, nome completo e biografia personalizada do usuário.
- **Métricas de Conexão:** Acompanhamento em tempo real da contagem de seguidores e usuários que o perfil está seguindo.
- **Repositórios em Destaque:** Listagem inteligente dos últimos repositórios públicos (limitado aos 10 mais recentes) contendo:
  - Link direto para o repositório no GitHub.
  - Contagem de estrelas (`⭐ Stars`).
  - Contagem de forks (`🍴 Forks`).
  - Observadores (`👀 Watchers`).
  - Linguagem de programação principal (`💻 Language`).
- **Design Responsivo & Animações Fluidas:** Interface totalmente adaptada para dispositivos móveis, tablets e desktops com transições suaves e design limpo.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web modernas, priorizando performance e sem dependência de frameworks externos:

- **HTML5:** Estrutura semântica e acessível.
- **CSS3:** Estilização avançada com Flexbox, CSS Grid, variáveis customizadas, animações e media queries para responsividade.
- **JavaScript (ES6+):** Módulos nativos (`import/export`), programação assíncrona (`async/await`) e consumo da Fetch API.
- **GitHub REST API:** Integração direta com os endpoints `/users/{username}` e `/users/{username}/repos`.
- **Devicon:** Biblioteca de ícones vetoriais para tecnologias.

---

## 📁 Arquitetura e Estrutura do Projeto

```text
visualizador-perfil-github/
├── index.html            # Ponto de entrada da aplicação (SPA / Single Page)
├── README.md             # Documentação oficial do projeto
└── src/
    ├── css/
    │   ├── animations.css  # Animações e efeitos visuais
    │   ├── reset.css       # Normalização de estilos dos navegadores
    │   ├── responsive.css  # Regras de responsividade (Media Queries)
    │   └── styles.css      # Estilização principal (Cards, Inputs, Layout)
    └── js/
        ├── github-api.js   # Comunicação com a API do GitHub (Fetch & Tratamento de Erros)
        ├── index.js        # Controlador de eventos e fluxo principal da aplicação
        └── profile-view.js # Camada de apresentação / Renderização dinâmica do DOM
```

---

## ⚙️ Como Executar o Projeto Localmente

### Pré-requisitos
Para rodar este projeto, você precisará apenas de um navegador web moderno e de um servidor de desenvolvimento local (recomendado para evitar bloqueios de CORS devido ao uso de módulos ES6).

### Passo a passo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/visualizador-perfil-github.git
   ```
2. **Abra o projeto:**
   Abra a pasta do projeto clonado no seu editor de código favorito (ex: **VS Code**).
3. **Execute com um Servidor Local:**
   - Como o projeto utiliza **JavaScript Modules** (`type="module"`), abrir o arquivo `index.html` diretamente pelo sistema de arquivos (`file://`) pode causar erros de CORS nos navegadores.
   - Utilize a extensão **Live Server** no VS Code (ou qualquer outro servidor estático como `http-server` do Node.js, Python `http.server`, etc.).
   - Clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.

---

## ⚠️ Informações Importantes & Limitações da API

- **Limite de Requisições (Rate Limit):** A API pública do GitHub possui um limite padrão de **60 requisições por hora** por endereço IP para acessos não autenticados. Caso faça muitas buscas em sequência rapidamente, a API poderá retornar um erro temporário de limite excedido (`403 Forbidden`).
- **Tratamento de Erros:** A aplicação possui validação integrada para tratar usuários inexistentes ou erros de rede, exibindo mensagens amigáveis na interface.

---

## 💡 Guia de Uso

1. Acesse a aplicação através do navegador.
2. Insira o nome de usuário do GitHub desejado no campo de pesquisa (Ex: `octocat`, `torvalds`, `gaearon`).
3. Pressione a tecla **Enter** ou clique no botão **"Buscar"**.
4. Explore as informações detalhadas do perfil e clique em qualquer card de repositório para acessá-lo diretamente no GitHub.

---

## 🤝 Como Contribuir

Contribuições, sugestões de melhorias e relatórios de bugs são sempre muito bem-vindos!

1. Faça um **Fork** do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`).
3. Faça o **Commit** das suas alterações (`git commit -m 'feat: Adiciona nova funcionalidade'`).
4. Faça o **Push** para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um **Pull Request**.

---

## 📝 Licença

Este projeto está sob a licença **MIT**. Sinta-se livre para utilizá-lo para estudos, portfólio ou projetos pessoais.
