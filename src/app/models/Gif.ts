export interface Gif {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_indexable: number;
  is_sticker: number;
  import_datetime: Date;
  trending_datetime: Date;
  user: {};
  images: {};
  title: string;
}
