# Dockerfile

# ==== CONFIGURE =====
# pull official base image
FROM node:16.16.0-alpine

# set working directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --silent

# add app
COPY . ./

EXPOSE 9000


# start app
CMD ["npm", "start"]