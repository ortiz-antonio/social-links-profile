import { EleventyRenderPlugin } from "@11ty/eleventy";
import Nunjucks from "nunjucks";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("_includes/src/partials"),
  );

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);
  eleventyConfig.addPassthroughCopy({ assets: "assets" });
  return {
    dir: {
      output: "public",
    },
  };
}
