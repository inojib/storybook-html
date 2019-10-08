# storybook-html
Storybook for HTML

## Add dependencies

```sh
npm install
```

### Add @babel/core and babel-loader

Make sure that you have `@babel/core`, and `babel-loader` in your dependencies as well because we list these as a peer dependencies:

```sh
npm install babel-loader @babel/core --save-dev 
```

## Run your Storybook

Now everything is ready. Run your storybook with:

```sh
npm run storybook
```

Storybook should start, on a random open port in dev-mode.