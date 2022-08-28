const syntaxHighlighting = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlighting);
  eleventyConfig.addPassthroughCopy("css");
  return {
    passthroughFileCopy: true,
  };
};
