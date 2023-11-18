## Getting Started

### Prerequisites

[Node.js](<(https://nodejs.org/en)>) version 12.2.0 or higher and npm installed.

### Install dependencies

```bash
npm i
```

### Build for production:

```bash
npm run build
```

### Run the development server

```bash
npm run dev
```

By default, it should start at http://localhost:8080/

### Run the tests

```bash
npm run test
```

### Linter and Prettier

```bash
npm run lint
npm run format
```

#### Auto-fixing:

```bash
npm run lint:fix
npm run format:fix
```

The capability of auto-fixing depends on the severity of rule(s) violation.

### Storybook

```bash
npm run storybook
```

The Storybook interface is available at http://localhost:6006/.

## Guidelines

- [Commit message guideline](./COMMIT_GUIDELINE.md): committing a piece of work will fail if the commit message does not respect the [conventional commits standards](https://www.conventionalcommits.org/en/v1.0.0/);
- [Coding guideline](./CODE_GUIDELINE.md);
