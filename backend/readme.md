# PokeAPI Backend

Este é um projeto backend desenvolvido em Node.js e TypeScript, que consome a PokeAPI para consulta de informações sobre Pokémon.

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Acesso à internet para consumir a PokeAPI

## Instalação

1. Clone o repositório para o seu ambiente local:

   ```bash
   git clone https://github.com/seu-usuario/pokeapi-backend.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd backend
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

## Configuração

Não é necessário configurar nenhum arquivo adicional. Certifique-se de ter uma conexão com a internet para acessar a PokeAPI.

## Uso

Para iniciar o servidor, execute o seguinte comando:

```bash
npm run start
```

O servidor estará disponível em [http://localhost:3333](http://localhost:3333) por padrão.

## Build

Se desejar, você pode compilar o projeto para JavaScript utilizando Babel. Execute o seguinte comando:

```bash
npm run build:babel
```

Isso criará uma pasta `dist` com os arquivos JavaScript compilados a partir do TypeScript.

Logo após

```bash
    npm run serve
```

## Docker

```bash
docker-compose up
```

Para criar um contâiner da sua aplicação na porta 3333

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
