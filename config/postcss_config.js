module.exports = {
  "postcss-import": {
    onImport: function(sources) {
      global.watchCSS(sources);
    }
  }
};
