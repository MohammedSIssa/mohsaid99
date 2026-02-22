export type Post = {
  id?: number;
  title?: string;
  body?: string;
  storyid: number;
  images: string[] | null;
  type: string;
  special?: boolean;
  secret?: boolean;
  iat?: string;
  dir: string;
};
