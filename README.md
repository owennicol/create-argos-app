<h1 align="center">Create Argos App</h1>

<!-- description -->
<p align="center">
The easiest way to create a <a href="https://facebook.github.io/react">React</a> app with server-side rendering thanks to <a href="https://github.com/zeit/next.js">Next.js</a>
</p>

<!-- toc -->
<p align="center">
    <em>
      <a href="#getting-started">Getting Started</a>
    </em>
</p>

## Overview

|     | [yarn create](https://yarnpkg.com/en/docs/cli/create) (Yarn 1.0.0+) |
| --- | ------------------------------------------------------ | ------------------------------------------------------------------- |
| 1.  | `yarn create argos-app my-app`                                       |
| 2.  | `cd my-app/`                                                        |
| 3.  | `yarn start`                                                          |

Open [http://localhost:3000](http://localhost:3000) to view your running app.
When you're ready for production, run the `build` then `start` scripts.

### Start Coding Now

You **don't** need to install or setup Webpack or Babel.
They come packaged with `next`, so you can just start coding.

After running `create-argos-app`, you're good to go!

## Getting Started

### Creating an App

Follow the steps in the [above table](#overview):

Minimum Requirements:

- Node >= `8.x.x` - Use [nvm](https://github.com/creationix/nvm#usage) to easily switch Node versions between projects.

### What's in an App

`create-argos-app` will have created a directory called `my-app` inside the current folder. Inside that directory, it will generate the initial project structure and install necessary dependencies:

```
.
├── README.md
├── actions
│   ├── actionTypes.js
│   └── actions.js
├── components
│   ├── head.js
│   └── nav.js
│   └── nav.scss
├── config
│   ├── [...]
├── lib
├── babel.config.js
├── next.config.js
├── node_modules
│   ├── [...]
├── package.json
├── pages
│   └── _app.js
│   └── examples.js
│   └── index.js
│   └── index.scss
│   └── started.js
├── reducers
│   └── reducer.js
├── static
│   └── favicon.ico
├── sagas
│   └── saga.js
├── store
│   └── store.js
└── yarn.lock
```

Routing in Next.js is based on the file system, so `./pages/index.js` maps to the `/` route and
`./pages/about.js` would map to `/about`.

The `./static` directory maps to `/static` in the `next` server, so you can put all your
other static resources like images or compiled CSS in there.

Out of the box, we get:

- Automatic transpilation and bundling (with webpack and babel)
- Hot code reloading
- Server rendering and indexing of `./pages`
- Static file serving. `./static/` is mapped to `/static/`
- Redux and Redux Sagas
- Testing with Jest
- SCSS support with [next-sass](https://github.com/zeit/next-plugins/tree/master/packages/next-sass)

Once the installation is finished, you can run some commands in your project:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `yarn build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn prod`

Starts the application in production mode.
The application should be compiled with \`yarn build\` first.

Now you're ready to code & deploy your app!

## Things to do:

- Take this out of Owen's personal github repo
- CLI improvements
- Option to swap redux with [insert latest state management library]
- Proper documentation
- Add Argos linting 
