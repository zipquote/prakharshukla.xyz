import { NextSeo } from 'next-seo';

interface ISEOProps {
  title: string;
  description: string;
  url: string;
  frontMatter: {
    [key: string]: any;
  };
}

export default function SEO({
  title,
  description,
  url,
  frontMatter,
}: ISEOProps) {
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
