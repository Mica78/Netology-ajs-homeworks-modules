const path = require('path');

module.exports = {
  "entry": "./app.js",
  "output": {
    "path": path.resolve(__dirname, 'dist'),
    "filename": "app.js",
  },
  "module": {
    "rules": [
      {
        "test": /\.(?:js|mjs|cjs)$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              ['@babel/preset-env', {
                "useBuiltIns": "usage",
                "corejs": 3,
              }],
            ],
            "plugins": ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
};
