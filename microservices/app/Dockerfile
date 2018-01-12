FROM mhart/alpine-node:9.3.0

# Active Working Directory
WORKDIR /src

# Add app source files
ADD src/package.json /src/

#install node modules
RUN npm install

ADD src /src

RUN npm run build

CMD ["npm", "run", "prod"]
