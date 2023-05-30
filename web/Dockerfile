FROM node:18-alpine AS build
RUN corepack enable

WORKDIR /app
COPY . ./
RUN pnpm install
RUN pnpm run build

EXPOSE 3000
CMD ["node", "build"]