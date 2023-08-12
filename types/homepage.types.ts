export type HomepageTypes = {
  components: ComponentTypes[];
};

export type ComponentTypes = {
  name: string;
  component_name: string;
  model: ModelTypes;
};

export type ModelTypes = {
  dataSlider?: DataSliderTypes[];
  title?: string;
  description?: string;
  featured?: FeaturedTypes;
  link?: ModelLinkTypes;
  title_one?: string;
  title_two?: string;
};

export type DataSliderTypes = {
  title: string;
  description?: string;
  link?: DataSliderLinkTypes;
  featured: FeaturedTypes;
  id: string;
  featured_hover?: FeaturedTypes;
};

export type FeaturedTypes = {
  id: string;
  created_at: string;
  updated_at: string;
  updatedBy?: null;
  title: null;
  description: null;
  size: number;
  type: TypeTypes;
  original: string;
  path: string;
  is_aws: boolean;
  aws_file_url: string;
  filename: string;
};

export enum TypeTypes {
  Img = "IMG",
}

export type DataSliderLinkTypes = {
  title: string;
  attach?: string;
  url: string;
};

export type ModelLinkTypes = {
  title: string;
  url: string;
};
