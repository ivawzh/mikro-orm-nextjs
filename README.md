
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) using [`mikro-orm`](https://mikro-orm.io/).


## Tutorial
You can read my medium guide [here](https://medium.com/@jonahallibone_20420/next-js-9-mikroorm-eb6f6e08e1a1?sk=ede639ec2b25d7691313e88cb0d4526f)

## Getting Started

1. Install PostgreSQL
1. Create database `async-up` locally
1. Setup tables via `yarn mikro-orm schema:update --run`
1. Start server `yarn dev`
1. Go to http://localhost:5000

### Configuration notes

This repo contains a few extra packages to get decorators working with NextJS and babel. You can see them by inspecting `.babelrc`

There is also a configuration for the CLI tool. Notability, the `tsconfig.orm.json` has a target of `ES6` to run migrations.

### Folder and file structure
The general structure and importing of files is up to the developer however, this was just the way I have set it up.



### Issues
Feel free to open any issues or PRs if you're having trouble or want to add to this repo.
