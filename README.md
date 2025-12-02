# Portfólio — Eros Nicolino

<p align="center">
  <img alt="Linguagem Principal" src="https://img.shields.io/github/languages/top/ErosNicolino/portfolio?color=8b5cf6&style=for-the-badge">
  <img alt="Tamanho do Repositório" src="https://img.shields.io/github/repo-size/ErosNicolino/portfolio?color=8b5cf6&style=for-the-badge">
  <img alt="Deploy" src="https://img.shields.io/badge/deploy-GitHub_Pages-brightgreen.svg?style=for-the-badge">
  <img alt="Licença" src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge">
  <img alt="Status" src="https://img.shields.io/badge/status-ativo-success?style=for-the-badge">
</p>

<p align="center">
  <strong>Portfólio Dinâmico & Interativo</strong> de um <strong>Engenheiro de Dados</strong> com foco em 
  <strong>AWS</strong>, <strong>Python</strong> e <strong>Machine Learning</strong>
</p>

<p align="center">
  <a href="https://erosnicolino.github.io/portfolio/" target="_blank">
    <img src="https://img.shields.io/badge/Acessar%20Portfólio%20Live-8b5cf6?style=for-the-badge&logo=githubpages&logoColor=white" alt="Acessar Portfólio">
  </a>
  &nbsp;
  <a href="#-funcionalidades-principais">
    <img src="https://img.shields.io/badge/Sobre-informações-informational?style=for-the-badge" alt="Sobre">
  </a>
</p>

---

## Visão Geral

Este é um **portfólio profissional moderno e responsivo** construído com **HTML5, CSS3 e JavaScript vanilla**. 
Oferece uma experiência de usuário premium com múltiplas linguagens, animações suaves e design elegante inspirado em tendências 2024.

### Destaques
- **Performance otimizada** - Carregamento rápido com otimização de assets
- **Multilíngue** - Suporte a Português, Inglês e Espanhol com localStorage
- **Totalmente Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- **Acessível** - Segue padrões WCAG para melhor legibilidade
- **Design Moderno** - Dark mode premium com paleta de cores profissional

---

## Funcionalidades Principais

### Sistema Multilíngue
Tradução dinâmica em tempo real com **três idiomas**:
- 🇧🇷 **Português (BR)**
- 🇺🇸 **Inglês (US)**
- 🇪🇸 **Espanhol (ES)**

Preferência de idioma salva automaticamente no `localStorage` do navegador.

### Seções Interativas

| Seção | Descrição |
|-------|-----------|
| **Hero** | Apresentação visual com avatar animado e CTAs destacadas |
| **Sobre** | Contexto profissional e trajetória na Engenharia de Dados |
| **Qualificações** | Formação acadêmica, certificações oficiais (AWS/Google) e cursos especializados |
| **Habilidades** | Tech stack organizado em categorias: Cloud, Dados/ML, Ferramentas |
| **Projetos** | Portfólio com 3 projetos destacados (layout zigzag alternado) |
| **Footer** | Links sociais funcionais + download do currículo em PDF |

### Animações & Interatividade
- Fade-in com slide-up em seções ao scrollar (IntersectionObserver)
- Scroll-spy: destaque automático da navegação ativa
- Microinterações suaves em hover de botões e cards
- Efeito de glow em elementos destacados

### Recursos Práticos
- **Download do Currículo**: Botão direto para baixar PDF com os dados atualizados
- **Links Sociais**: Acesso rápido a LinkedIn, GitHub e email de contato
- **Scroll Suave**: Navegação smooth entre seções

---

## Tecnologias Utilizadas

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
</p>

### Frontend Stack
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Design system com variáveis CSS, Flexbox/Grid e animações
- **JavaScript (Vanilla)** - Sem dependências externas, código limpo e performático
- **Google Fonts** - Tipografia premium (Inter + Poppins)

---

## Estrutura do Projeto

```
portfolio/
│
├── index.html                          # Entrada principal da aplicação
├── styles.css                          # Sistema de design com 800+ linhas de CSS
├── script.js                           # Lógica de navegação, i18n e animações
├── README.md                           # Documentação do projeto (este arquivo)
├── LICENSE                             # Licença MIT
│
└── assets/
    ├── profile.jpg                     # Foto de perfil (260x260px, otimizada)
    ├── PongWin.gif                     # GIF do projeto Pong AI
    ├── project-bovespa-inprogress.jpg  # Imagem do projeto Bovespa
    ├── project-2.jpg                   # Print do projeto Books API
    ├── Curriculo-Eros-Nicolino.pdf     # Currículo em PDF para download
    └── og-image.jpg                    # Preview para compartilhamento social
```

---

## Como Rodar Localmente

### Pré-requisitos
- Git instalado
- Navegador moderno (Chrome, Firefox, Safari, Edge)

### Passo 1: Clonar o Repositório
```bash
git clone https://github.com/ErosNicolino/portfolio.git
cd portfolio
```

### Passo 2: Abrir no Navegador
Opção A - Arquivo Local:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Opção B - Servidor Local (recomendado):
```bash
# Python 3.x
python -m http.server 8000

# Depois acesse: http://localhost:8000
```

---

## Design & Customização

### Sistema de Cores
O projeto usa **CSS Variables** para fácil customização:

```css
:root {
  --bg: #09090b;              /* Fundo escuro */
  --accent: #8b5cf6;          /* Violeta primário */
  --accent-alt: #3b82f6;      /* Azul secundário */
  --text: #f1f5f9;            /* Texto claro */
  --muted: #94a3b8;           /* Texto secundário */
}
```

### Breakpoints Responsivos
- **Desktop**: 1100px (container máximo)
- **Tablet/Mobile**: ≤ 968px (layout adaptativo)

---

## Performance

| Métrica | Valor |
|---------|-------|
| **Tamanho Total** | ~50KB (HTML + CSS + JS minificado) |
| **Tempo de Carregamento** | < 1s em conexão 4G |
| **Lighthouse Score** | 95+ performance |
| **Acessibilidade (WCAG)** | AA |

---

## Segurança & Boas Práticas

Sem dependências externas (vanilla JS)  
HTTPS por padrão (GitHub Pages)  
CSP headers configurado  
Sem tracking ou cookies invasivos  
Dados de contato protegidos  

---

## Conteúdo & Seções

### Formação Acadêmica
- **Pós-Graduação**: Machine Learning Engineering (FIAP) - Conclusão Julho 2026
- **Graduação**: Gestão da Tecnologia da Informação (FAM) - Concluído Julho 2024

### Certificações Oficiais
- AWS Certified Cloud Practitioner
- Google Cloud Associate

### Cursos Especializados (Alura)
- Formação SQL com MySQL Server da Oracle
- Formação Modelagem de Dados
- Formação Redes de Computadores

### Tech Stack

**Cloud & Dados (AWS)**
```
AWS S3, AWS Glue, AWS Lambda, AWS Athena, Amazon RDS, 
DynamoDB, AWS VPC, Cloud Security
```

**Dados, ML & BI**
```
Python, Pandas, NumPy, Scikit-learn, SQL, NoSQL (MongoDB),
ETL, Modelagem de Dados, Power BI, Tableau, Machine Learning
```

**Programação & Ferramentas**
```
Git/GitHub, Flask, Streamlit, Java, React Native, CI/CD, 
Scrum, Pygame
```

---

## 📱 Compatibilidade

| Navegador | Desktop | Mobile |
|-----------|---------|--------|
| Chrome    | ✅ | ✅ |
| Firefox   | ✅ | ✅ |
| Safari    | ✅ | ✅ |
| Edge      | ✅ | ✅ |
| IE 11     | ⚠️ Parcial | ❌ |

---

## Contribuindo

Encontrou um bug? Tem sugestões de melhorias?

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## Contato

Vamos nos conectar e explorar oportunidades de colaboração!

<p align="center">
  <a href="https://www.linkedin.com/in/erosnicolino" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-Eros%20Nicolino-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn: Eros Nicolino">
  </a>
  <br><br>
  <a href="https://github.com/ErosNicolino" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-@ErosNicolino-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub: ErosNicolino">
  </a>
  <br><br>
  <a href="mailto:erosnicolino@icloud.com?subject=Interesse%20em%20Colaboração">
    <img src="https://img.shields.io/badge/Email-erosnicolino@icloud.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
  </a>
</p>

---

## Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

```
MIT License - Sinta-se à vontade para usar este código como base 
para o seu próprio portfólio ou projeto pessoal.
```

---

## Agradecimentos

- **Google Fonts** pela tipografia premium
- **GitHub Pages** pelo hosting gratuito e confiável
- Comunidade de desenvolvimento web por inspiração constante

---

<p align="center">
  <b>Última atualização</b>: Dezembro de 2025 ✨<br>
  <b>Versão</b>: 2.0 - Dark Mode Premium com Multilíngue<br>
  <b>Desenvolvido com 💜 por Eros Nicolino</b>
</p>
