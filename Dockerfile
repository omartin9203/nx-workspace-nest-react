# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=18.16.0
FROM node:${NODE_VERSION}-alpine as base

LABEL fly_launch_runtime="Api"

# NodeJS app lives here
WORKDIR /app

RUN npm i -g pnpm@7.23

RUN npm i -g nx


FROM base AS dependencies

COPY package.json pnpm-lock*.yaml ./

RUN pnpm i --frozen-lockfile


# Throw-away build stage to reduce size of final image
FROM dependencies as build

COPY --from=dependencies /app/node_modules ./node_modules

COPY . .

# Set production environment
ENV NODE_ENV=production

RUN pnpm nx build api --configuration=production

# Remove development dependencies
RUN pnpm prune --prod


# Final stage for app image
FROM base AS production

WORKDIR /app

# Copy built application
COPY --from=build /app/dist/ ./dist
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000

# Start the server by default, this can be overwritten at runtime
CMD [ "node", "dist/apps/api/main" ]
