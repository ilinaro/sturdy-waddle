# Устанавливать зависимости только при необходимости
FROM node:16.15.0 AS deps

WORKDIR /app

# COPY package.json /app
COPY package.json package-lock.json ./

RUN npm install


# Пересобирать исходный код только при необходимости
FROM node:16.15.0 AS builder

WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY .env.production .env.production
#RUN npm run build
RUN yarn build

# Рабочий образ, скопируйте все файлы и запустите дальше
FROM node:16.15.0 AS runner

WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

#USER nextjs

ENV PORT 3000

EXPOSE $PORT
 
CMD ["npm", "start"]
