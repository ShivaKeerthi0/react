//Configuring Babel with Jest

// As we used  parcel as bundler and it internally uses babel , but when we config babel.config.js file then
// the configuration clashes may occur so need to create .parcelrc file as per parcel documentation.

module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      ['@babel/preset-react', {runtime : 'automatic'}],
    ],
  };