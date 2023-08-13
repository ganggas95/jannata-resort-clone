import { FeaturedTypes } from "@/types/homepage.types";

export const mergeAwsImagePath = (feature: FeaturedTypes) => {
  return feature.aws_file_url + feature.path + feature.filename;
};
