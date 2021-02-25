FROM node:12

COPY . /doorchat
RUN cd doorchat
RUN yarn install

EXPOSE 3000
