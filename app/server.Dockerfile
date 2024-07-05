FROM node:22.1.0-alpine3.18 as base

ARG APP_MODE

WORKDIR /app

COPY ./ ./ 

RUN npm ci
RUN npm run build:${APP_MODE}

CMD [ "npm", "run", "server" ]

# To keep container active for testing
# ENTRYPOINT ["tail", "-f", "/dev/null"]