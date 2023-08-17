import { it, expect, describe } from "vitest";
import { mergeAwsImagePath } from "./image-utils";
import { FeaturedTypes } from "types/homepage.types";

describe("image-utils", () => {
  it("should concatenate the AWS file URL, path, and filename to generate the complete image path", () => {
    const feature = {
      aws_file_url: "https://example.com/",
      path: "images/",
      filename: "image.jpg",
    } as FeaturedTypes;

    const result = mergeAwsImagePath(feature);
    expect(result).toBe("https://example.com/images/image.jpg");
  });
});
