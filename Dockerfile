FROM node:18

COPY wait-for-it.sh /usr/local/bin/wait-for-it

RUN chmod +x /usr/local/bin/wait-for-it

WORKDIR /var/www


COPY . .

RUN npm install


EXPOSE 8000

CMD ["npm", "start"]