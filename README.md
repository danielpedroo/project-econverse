# project-econverse 🚀

## 📌 Descrição

Este repositório foi desenvolvido como parte de um processo seletivo para a **Econverse**, referente à vaga de **Frontend Júnior**.  
O desafio consiste na implementação de uma **landing page** com foco em **boas práticas de desenvolvimento frontend**, garantindo organização, escalabilidade e manutenção do código.

---

## 🛠️ Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção de interfaces modernas e dinâmicas, baseadas em componentes reutilizáveis.  
- **TypeScript:** Superset do JavaScript que adiciona **tipagem estática**, tornando o desenvolvimento mais seguro, legível e robusto.  
- **Vite:** Ferramenta de build **ultrarrápida** para projetos web modernos, que substitui o Create React App em muitos cenários, oferecendo inicialização instantânea e melhor experiência de desenvolvimento.  
- **SASS (Syntactically Awesome Style Sheets):** Pré-processador CSS que adiciona funcionalidades como variáveis, mixins e aninhamento, otimizando a escrita e manutenção dos estilos.  
- **Git:** Sistema de **controle de versão distribuído**, essencial para versionamento do código-fonte e colaboração em equipe.  

---

## 🏗️ Arquitetura

O projeto foi estruturado seguindo o padrão **FSD (Feature-Sliced Design)**:  
- **Organização modular** do código em camadas e segmentos por funcionalidades (*features*).  
- **Separação de responsabilidades**, facilitando manutenção e evolução do sistema.  
- Estrutura clara que inclui: entidades, processos, páginas, widgets, features e módulos compartilhados (*shared*).  

---

## ⚙️ Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório**
   ```bash
   git clone https://github.com/danielpedroo/project-econverse.git
   ```

2. **Acesse a pasta do projeto**
   ```bash
    cd econverse-app
    ```

3. **Instale as dependências - Obs: Fica ao seu critério a utilizanção de outros gerenciadores de pacotes (pnpm - yarn - npm)**
   ```bash
    pnpm install
   ```

   3.1. Json-Server é uma biblioteca que transforma um arquivo JSON (ex: db.json) em uma API REST pronta para consumo.
        Ideal para testes e desenvolvimento, pois simula um back-end real de forma rápida e prática.
   ```bash
   pnpm add json-server
   ```
   
  ### ▶️ Execução

  4. **Abra dois terminais em sua IDE**

  **4.1 - Rodar a Aplicação**  
  Inicia o servidor em modo de desenvolvimento:  
  ```bash
  pnpm run dev
  ```

   **4.2 - Rodar a API Fake**  
  Sobe a API simulada com dados do db.json:
  ```bash
  pnpm run start:api
  ```

✨ Pontos Relevantes
- **Compentização, visando a reutilização de código e focando em menos verbosidade**.
- **Estruturação do projeto com padrões modernos de frontend**.
- **Utilização de tipagem estática para maior confiabilidade**.
- **Organização do código baseada em FSD, visando escalabilidade**.
- **Uso de SASS para otimização e manutenção dos estilos**.
- **Versionamento eficiente com Git, garantindo rastreabilidade e colaboração**.

### Consideração 💻📚

✅ Conclusão Esse projeto foi uma excelente oportunidade para aplicar conceitos que venho estudando como desenvolvedor júnior. Busquei seguir boas práticas, manter o código limpo e modular, e resolver os desafios com autonomia e criatividade. Estou aberto a feedbacks e melhorias contínuas.

> ⚠️ **Observação:**  
> Este projeto foi desenvolvido por mim como parte de um **teste prático de Frontend Júnior**.  
> O **design e a estruturação** foram fornecidos pela [Econverse](https://www.econverse.com.br/),  
> e toda a implementação foi realizada integralmente por minha autoria.
 
## Autores

- **Daniel Pedro** (Software Developer)
- **Econverse** (Aplicadores do teste)
