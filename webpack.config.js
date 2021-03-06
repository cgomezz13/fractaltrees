var path = require("path");

module.exports = {
  entry: "./lib/entry.js",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "else.js"
  },
  devtool: "source-maps",
  resolve: {
    extensions: [".js"]
  }
};
