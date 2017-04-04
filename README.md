# fyndiq-ui

Library of reusable components for Fyndiq

# Usage

Install one of the provided packages (see list below) in your React project:

``` bash
npm i -S fyndiq-component-button
```

Every component provide their own style using LESS. Thus, you need to be able to import LESS files inside your project. Using Webpack2, you can have an entry similar to this:

``` js
module: {
  rules: [
    {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: true,
            },
          }, {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline',
              plugins: () => ([
                require('autoprefixer'),
              ]),
            },
          },
        ],
      }),
    },
  ],
},
```

You will need the following loaders:

``` bash
npm i -D postcss-loader less-loader css-loader style-loader extract-text-webpack-plugin autoprefixer
```

# Packages

This git repository is a monorepo built using [Lerna](//lernajs.io). It contains several packages:

| Package | Version | Description |
|------|----|----|
| [`fyndiq-component-button`](/packages/fyndiq-component-button) | [![npm](https://img.shields.io/npm/v/fyndiq-component-button.svg?maxAge=2592000)](https://www.npmjs.com/package/fyndiq-component-button) | Button component |
| [`fyndiq-component-checkbox`](/packages/fyndiq-component-checkbox) | [![npm](https://img.shields.io/npm/v/fyndiq-component-checkbox.svg?maxAge=2592000)](https://www.npmjs.com/package/fyndiq-component-checkbox) | Checkbox component |
| [`fyndiq-component-dropdown`](/packages/fyndiq-component-dropdown) | [![npm](https://img.shields.io/npm/v/fyndiq-component-dropdown.svg?maxAge=2592000)](https://www.npmjs.com/package/fyndiq-component-dropdown) | Dropdown component |
| [`fyndiq-component-price`](/packages/fyndiq-component-price) | [![npm](https://img.shields.io/npm/v/fyndiq-component-price.svg?maxAge=2592000)](https://www.npmjs.com/package/fyndiq-component-price) | Price tag component |
| [`fyndiq-component-productcard`](/packages/fyndiq-component-productcard) | [![npm](https://img.shields.io/npm/v/fyndiq-component-productcard.svg?maxAge=2592000)](https://www.npmjs.com/package/fyndiq-component-productcard) | Product card component |
| [`fyndiq-component-stars`](/packages/fyndiq-component-stars) | [![npm](https://img.shields.io/npm/v/fyndiq-component-stars.svg?maxAge=2592000)](https://www.npmjs.com/package/fyndiq-component-stars) | Stars component |
| [`fyndiq-icon-arrow`](/packages/fyndiq-icon-arrow) | [![npm](https://img.shields.io/npm/v/fyndiq-icon-arrow.svg?maxAge=2592000)](https://www.npmjs.com/package/fyndiq-icon-arrow) | Arrow icon |
| [`fyndiq-icon-checkmark`](/packages/fyndiq-icon-checkmark)  | [![npm](https://img.shields.io/npm/v/fyndiq-icon-checkmark.svg?maxAge=2592000)](https://www.npmjs.com/package/fyndiq-icon-checkmark) | Checkmark icon |
| [`fyndiq-icon-star`](/packages/fyndiq-icon-star) | [![npm](https://img.shields.io/npm/v/fyndiq-icon-star.svg?maxAge=2592000)](https://www.npmjs.com/package/fyndiq-icon-star) | Star icon |
| [`fyndiq-styles-colors`](/packages/fyndiq-styles-colors) | [![npm](https://img.shields.io/npm/v/fyndiq-styles-colors.svg?maxAge=2592000)](https://www.npmjs.com/package/fyndiq-styles-colors) | Default colors |


# Contribute

Clone the repository, then run

```
npm i
npm run bootstrap
npm run dev
```

To create a new component, create a new folder in the `packages/` directory and put your code in `src/`. Then, add your newly created package to the dependencies of `fyndiq-ui-test`'s package.json file, run `npm run bootstrap` and restart `npm run dev`.
