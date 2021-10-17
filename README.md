# postgresql-cube-tutorial
Sample cubejs repo with react and postgres.

Getting started with nodejs -
https://cube.dev/docs/getting-started/nodejs

Directory structure -
```
├── dashboard-app
│   ├── public
│   └── src
│       ├── components
│       └── pages
├── samples
│   ├── data
│   └── screenshots
└── schema
```

#### Dashboard app -
Contains react app to render saved queries.

#### Schema -
Contains cubes which will be used in playground.

#### Samples -
- `data`: Contains data being used which can be imported to postgres.
- `screenshots`: Contains gif files on how basic usage.

Install packages -
```
npm i
```

Run cubejs server -
```
npm run dev
```