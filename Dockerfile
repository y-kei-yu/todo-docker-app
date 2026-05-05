FROM node:20-alpine

WORKDIR /app

# 最初の.はDockerfileのある場所、2番目の.はコンテナ内の作業ディレクトリを指す
# つまり、Dockerfileのある場所のファイルをコンテナ内の/appにコピーする
COPY . .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev","--","--host","0.0.0.0"]
