FROM node:lts-alpine

# Path: /app

WORKDIR /app
COPY . .

RUN yarn


EXPOSE 3000 

RUN  npx nx export my-pet-buddy --platform=web  
RUN  npx nx run backend:build

CMD ["npx", "nx" ,"run", "backend:serve"]