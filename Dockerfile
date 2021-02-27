FROM node:12

COPY . /doorchat
COPY ./.env.development.local /doorchat
COPY ./.env.production.local /doorchat
RUN cd doorchat
RUN yarn install

EXPOSE 3000
