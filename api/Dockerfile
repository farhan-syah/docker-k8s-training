FROM --platform=linux/amd64 node:18-alpine as builder
RUN corepack enable

WORKDIR /app
COPY package*.json pnpm-lock.yaml ./
COPY prisma ./prisma/
RUN pnpm install
RUN pnpm exec prisma generate
COPY . .
RUN pnpm run build

FROM --platform=linux/amd64 node:18-alpine AS deploy

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000
CMD [  "npm", "run", "start:prod" ]