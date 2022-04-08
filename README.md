## Installation

In the root project directory, run:

```bash
yarn install
```

## Runing

1. You must create a [PostgreSQL](https://www.postgresql.org/) database.
2. Create an `.env` file with the following variables:

```
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
```

2. In the server directory (/packages/server), run:

```bash
yarn dev
```

3. In the web directory (/packages/web), run:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
