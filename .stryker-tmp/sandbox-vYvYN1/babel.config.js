// @ts-nocheck
module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    ignore: [
      // Ігноруємо всі файли в node_modules за виключенням axios
      /node_modules\/(?!axios\/).*/
    ]
  };
  