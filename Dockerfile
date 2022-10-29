FROM node:12
WORKDIR /app
COPY package*.json ./
COPY . ./
RUN npm -y install 
# EXPOSE 3001
CMD ["npm", "start"]

