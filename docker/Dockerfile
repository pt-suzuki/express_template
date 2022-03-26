FROM node:17-alpine3.14 as build

WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM node:17-alpine3.14 as prod

COPY --from=build /app/dist /app/dist
COPY --from=build /app/package*.json /app/
COPY --from=build /app/node_modules /app/node_modules

WORKDIR /app

EXPOSE 30000

CMD ["npm", "run", "start"]
