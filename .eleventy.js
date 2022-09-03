const syntaxHighlighting = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlighting);
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("portfolio/**/*.jpg");
  eleventyConfig.addPassthroughCopy("portfolio/**/*.png");
  eleventyConfig.addWatchTarget("portfolio/**/*.*")
  return {
    passthroughFileCopy: true,
  };
};
