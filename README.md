# Molsup

App to store suppliers and upload catalog files.

## Prerequisites

- Initial suppliers and catalog items data is populated to IndexedDB database via [Dexie.js](https://dexie.org/)
- "Data fetching" is done with [swr](https://swr.vercel.app/) with fake delays to immitate backend api calls.

#### Things you will need:

- [Bun](https://bun.sh/)
  - or use [node v20+](https://nodejs.org/en)

### Getting Started

Clone the project

```bash
git clone git@github.com:fecony/molsup.git
```

Go to the project directory

```bash
cd molsup
```

Install dependencies

```bash
bun install
```

or

```bash
npm install
```

### Running app

```bash
bun run dev
```

or

```bash
npm run dev
```

## Initial Data

- Initial suppliers and catalog items data is populated to IndexedDB database via [Dexie.js](https://dexie.org/)
- "Data fetching" is done with [swr](https://swr.vercel.app/) with fake delays to immitate backend api calls.
