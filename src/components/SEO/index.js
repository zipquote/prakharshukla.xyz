import { NextSeo } from 'next-seo';

export default function SEO({ title, description, url }) {
  return <NextSeo title={title} description={description} canonical={url} />;
}
