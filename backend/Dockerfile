# Use a imagem oficial do Node.js como base
FROM node:20

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta que sua aplicação vai rodar
EXPOSE 3333

# Defina o comando para iniciar a aplicação
CMD ["npm", "start"]