import { NextSeo } from 'next-seo';

export default function SEO({ title, description, url, frontMatter }) {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        title,
        description,
        url,
        ...frontMatter,
      }}
    />
  );
}
