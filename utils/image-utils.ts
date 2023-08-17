import { FeaturedTypes } from "@/types/homepage.types";

export const mergeAwsImagePath = (feature: FeaturedTypes) => {
  /**
   * Concatenates the AWS file URL, path, and filename to generate the complete image path.
   *
   * @param {FeaturedTypes} feature - The feature object containing the AWS file URL, path, and filename.
   * @return {string} - The complete image path.
   */
  return feature.aws_file_url + feature.path + feature.filename;
};
