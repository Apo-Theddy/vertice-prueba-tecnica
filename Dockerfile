FROM node:20-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./ 

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:20-alpine as runner

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./

RUN yarn install --production --frozen-lockfile

EXPOSE 3000

CMD ["node" , "dist/main"]

