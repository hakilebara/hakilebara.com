/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var autoprefixer = require('autoprefixer');
var partialImport = require('postcss-partial-import');
var nested = require('postcss-nested');
var customMedia = require('postcss-custom-media');
var customProperties = require('postcss-custom-properties');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          { module: partialImport },
          { module: nested },
          { module: customProperties },
          { module: customMedia },
        ]
      },
      filter: {
        enabled: true,
        plugins: [
          { module: autoprefixer },
        ]
      },
    },
    nodeModulesToVendor: [
      'node_modules/highlight.js'
    ],
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import("bower_components/highlightjs/styles/agate.css");
  //app.import('vendor/styles/github.css');

  return app.toTree();
};
