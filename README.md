# Calculadora de Tintas 🖌️

  Este é um projeto utilizando **Vite** e **React** que cria uma aplicação que calcula a quantidade de litros de tinta necessário para pintar as paredes de uma sala.
  
## Tecnologias Utilizadas

-   **Vite**: Ferramenta de build rápida para desenvolvimento web.
-   **React**: Biblioteca JavaScript para criação de interfaces de usuário.
-   **CSS**: Para estilização da aplicação.

##  Instalação

**Clone o repositório:**

    git clone https://github.com/MariCMelo/Code-Challenge.git
    cd Code-Challenge

**Pré-requisitos e instalação:**

Certifique-se de ter o **Node.js v16.17.0 ou superior** e o **npm v8.0.0 ou superior** instalados. Para verificar as versões instaladas, você pode usar os seguintes comandos:

    node -v 
    npm -v
Se as versões estiverem corretas, prossiga para instalar todas as dependências necessárias executando o seguinte comando no terminal:

       npm install

## Scripts
**Ambiente de desenvolvimento:**
Inicia o ambiente desenvolvimento Vite, permitindo que você veja suas alterações em tempo real.

    npm run dev
    
 **Lint:**
Inicia um servidor local para pré-visualizar seu build de produção.

     npm run lint



## Como utilizar
**Paredes:** Forneça as medidas das paredes que você deseja pintar em metros. Certifique-se de inserir valores numéricos.

**Valores de portas e janelas:** Forneça a quantidade de postas e janelas que serão instaladas. Certifique-se de inserir valores numéricos e inteiros.

**Sugestão de latas de tinta:** Com base na quantidade total de tinta necessária, o sistema sugerirá os tamanhos ideais de latas de tinta que você deve comprar. Sempre será sugerido o uso de latas maiores, priorizando o mínimo de desperdício.

Exemplo de Utilização:
-   **Entrada:** Área das paredes a serem pintadas em metros e a quantidade de portas e janelas.
-   **Saída:** Sugestão de tamanhos de latas de tinta e quantidades necessárias.

## Exceções

A seguir estão as exceções que podem ser geradas pela aplicação, junto com suas descrições:

### Erro: `invalidAreaError`

-   **Tipo:** `invalidAreaError`
-   **Mensagem:** Alguma das paredes tem área inválida. As paredes devem ter entre 1 e 50 metros quadrados.

### Erro: `invalidDoorWindowAreaError`

-   **Tipo:** `invalidDoorWindowAreaError`
-   **Mensagem:** O total da área das portas e janelas excede 50% da área da parede. Por favor, verifique e ajuste as dimensões das portas e janelas.

### Erro: `invalidWallHeightError`

-   **Tipo:** `invalidWallHeightError`
-   **Mensagem:** A altura das paredes com portas deve ser pelo menos 30 centímetros maior do que a altura da porta.

## Demo
https://code-challenge-orcin.vercel.app/