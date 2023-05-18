# NX Workspace for NestJS + React starter

Bootstrapped, ready-for-production (Mono-)Repository for TypeScript environments using NestJS + React.
This project was generated using [Nx](https://nx.dev).

🔎 **Smart, Extensible Build Framework**

## Project setup / initialization

This project setup was created by executing folling steps

- [Install pnpm globally](https://pnpm.io/installation#using-npm) -> `npm i -g nx`
- [Install nx globally](https://nx.dev/getting-started/installation#installing-nx-globally) -> `npm i -g nx`
- Install dependencies -> `pnpm i`

## Adjust package.json

### Support linting and testing for all applications at once

- Lint -> `pnpm lint`
- Unit Tests -> `pnpm test`
- Tests e2e -> `pnpm test:e2e`

If you need execute on specific app:

- Lint: `pnpm lint:client` or `pnpm lint:api`
- Unit Tests: `pnpm test:client` or `pnpm test:api`
- Tests e2e: `pnpm test:e2e:client` or `pnpm test:e2e:api`

### Add separate run & build scripts for backend and frontend

- Preview client -> `pnpm preview:client`
- Build api -> `pnpm build:api`

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nx/react:app my-app` to generate an react application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nx/react:lib my-lib` to generate a react library.
Run `nx g @nx/node:library my-lib` to create a new node library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@nx-workspace/my-lib`.

## Development server

Run `pnpm start:client` for a frontend dev server. Navigate to <http://localhost:4200/>.
Run `pnpm start:api` for a backend dev server. Navigate to <http://localhost:3000/api>.  
The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nx/react:component my-component --project=my-app` to generate a new component.

## Build

Run `pnpm build:api` or `pnpm build:client` respectively to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `pnpm test:api` or `pnpm test:client` to execute the unit tests via [Jest](https://jestjs.io).

Run `pnpm affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `pnpm test:e2e:client` to execute the `client` end-to-end tests via [Cypress](https://www.cypress.io).

Run `pnpm test:e2e:api` to execute the `api` end-to-end tests via [Jest](https://jestjs.io).

Run `pnpm affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `pnpm graph:deps` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
