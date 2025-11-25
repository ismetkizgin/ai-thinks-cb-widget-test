FROM node:22-alpine AS build
WORKDIR /app

COPY public/ ./public
COPY src/ ./src
COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY index.html ./

ARG VITE_WIDGET_API_URL
ENV VITE_WIDGET_API_URL $VITE_WIDGET_API_URL

ARG VITE_WIDGET_MODE
ENV VITE_WIDGET_MODE $VITE_WIDGET_MODE

RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
