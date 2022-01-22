FROM node:16.13.2-slim AS setup
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --docker --scope="studio"
RUN turbo prune --docker --scope="web"
RUN turbo prune --docker --scope="docs"

# Add lockfile and package.json's of isolated subworkspace
FROM node:16.13.2-slim AS builder
WORKDIR /app
COPY --from=setup /app/out/full/ .
RUN yarn install
RUN yarn turbo run build test --include-dependencies --no-deps

FROM node:16.13.2-slim AS runner
WORKDIR /app
COPY --from=builder /app/ .
EXPOSE 3000 3001 3002
CMD [ "yarn", "start" ]
