# 🚀 project-econverse

## 📄 Descrição

Este repositório foi desenvolvido como parte do processo seletivo para a vaga de Desenvolvedor Frontend Júnior na empresa **Econverse**. O desafio consistiu na implementação de uma landing page responsiva, com foco em boas práticas de desenvolvimento, organização de código e uso de tecnologias modernas do ecossistema frontend.

---

## 🛠️ Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção de interfaces de usuário baseadas em componentes reutilizáveis. Utilizei React para estruturar a aplicação de forma modular e escalável.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática. Essa escolha trouxe mais segurança ao desenvolvimento, facilitando a identificação de erros e melhorando a legibilidade do código.
- **SASS (Syntactically Awesome Style Sheets):** Pré-processador CSS que permite o uso de funcionalidades como variáveis, mixins e aninhamento. Isso tornou o gerenciamento dos estilos mais organizado e eficiente.
- **Git:** Ferramenta de versionamento distribuído, essencial para controle de mudanças e colaboração em equipe.

---

## 🧩 Arquitetura do Projeto

- **FSD (Feature-Sliced Design):** Adotei a arquitetura FSD para organizar o projeto em domínios funcionais bem definidos. Essa abordagem separa o código em camadas como:
  - `entities/` – modelos e estruturas centrais
  - `features/` – funcionalidades específicas
  - `widgets/` – componentes compostos reutilizáveis
  - `pages/` – páginas da aplicação
  - `shared/` – utilitários e componentes globais

Essa estrutura facilita a escalabilidade, manutenção e isolamento de responsabilidades.

---

## 👨‍💻 Autor

- **Daniel Pedro** — Desenvolvedor Frontend Júnior

---

## 📌 Pontos Relevantes

- Estruturação do projeto com base em padrões modernos de frontend.
- Tipagem estática com TypeScript para maior confiabilidade e legibilidade.
- Organização modular com FSD, promovendo clareza e escalabilidade.
- Estilização otimizada com SASS, facilitando manutenção e reaproveitamento.
- Versionamento eficiente com Git, garantindo rastreabilidade e colaboração.

---

## ⚙️ Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/danielpedroo/project-econverse.git
   ```
2. Acessando a pasta do projeto:
   ```bash
   cd econverse-app
   ```

3. Instale as dependências:
   ```bash
    npm install
    # ou
    pnpm install
    # ou
    yarn install
    ```
4. Execute a aplicação (ABRA DOIS TERMINAIS):

  Terminal 1 – Inicie o servidor de desenvolvimento
  ```bash
   pnpm run dev
  ```
  Terminal 2 – Inicie a API local
  ```bash
   pnpm run start:api
  ```

📦 Gerenciador de Pacotes
Instalação do PNPM
Para instalar o pnpm, siga as instruções oficiais:

🔗 https://pnpm.io/pt/installation

Adição da biblioteca JSON Server
Utilizei a biblioteca json-server para simular uma API REST local:
 ```bash
   pnpm add json-server
  ```

✅ Conclusão
Esse projeto foi uma excelente oportunidade para aplicar conceitos que venho estudando como desenvolvedor júnior. Busquei seguir boas práticas, manter o código limpo e modular, e resolver os desafios com autonomia e criatividade. Estou aberto a feedbacks e melhorias contínuas.
