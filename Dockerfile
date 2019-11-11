FROM node:8

ADD yarn.lock /todo-list-client-react/yarn.lock
ADD package.json /todo-list-client-react/package.json

ENV NODE_PATH=/todo-list-client-react/node_modules
ENV PATH=$PATH:/todo-list-client-react/node_modules/.bin
ENV PYTHON=/usr/bin/python
RUN yarn

WORKDIR /todo-list-client-react/app
ADD . /todo-list-client-react/app

EXPOSE 3000
EXPOSE 3000

CMD ["yarn", "start"]