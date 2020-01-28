
FROM node:13.3-alpine
ENV PORT 5432
ENV DB_USER postgres
ENV DB_PASSWORD azertyuiop
ENV DB_NAME postgres
ENV DB_HOST postgres

WORKDIR /app
RUN mkdir -p /app
RUN chown -R node:node /app
USER node

COPY package*.json ./
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]