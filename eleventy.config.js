export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/*.{png,jpg,jpeg,gif,svg,webp}");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
}
