export interface Blog {
  id: string;
  title: string;
  description: string;
  sort: number;
  date_created: Date;
  blog_image: string;
}

export interface DirectusSchema {
  blogs: Blog[];
}
