FROM node:12

COPY . /doorchat
COPY ./.env /doorchat/.env
RUN cd doorchat
RUN yarn install

EXPOSE 3000
