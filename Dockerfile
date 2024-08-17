FROM node:18-alpine

COPY wait-for-it.sh /usr/local/bin/wait-for-it

RUN chmod +x /usr/local/bin/wait-for-it

RUN mkdir -p /app

WORKDIR /bookstore

COPY . .

RUN npm install


EXPOSE 8000

CMD ["npm", "start"]