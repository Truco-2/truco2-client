FROM node:22.1.0-alpine3.18 as base

WORKDIR /app

COPY ./ ./ 

RUN npm ci
RUN npm run build:production

CMD [ "npm", "run", "server" ]

# To keep container active for testing
# ENTRYPOINT ["tail", "-f", "/dev/null"]