FROM node:20.19-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["sh", "-c", "npm run prisma:generate && npm run dev"]
