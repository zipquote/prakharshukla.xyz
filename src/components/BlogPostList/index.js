import getConfig from 'next/config';
import { Image, Card, PostDate, PostExcerpt } from '../';

export default function BlogPostList({ frontMatter }) {
  const {
    publicRuntimeConfig: { images },
  } = getConfig();

  const resolveImageDomain = (domains, cmpr = 'cloudinary') => {
    const match = domains.find(
      (domain) => domain.toLowerCase().indexOf(cmpr.toLowerCase()) >= 0
    );

    if (!match) return '';

    if (cmpr === 'cloudinary') {
      return `https://${match}/dvjphfbsq/image/upload`;
    } else {
      return `https://${match}/`;
    }
  };

  return (
    <Card className="h-full">
      <Card.Header>
        <Image
          src={`${resolveImageDomain(images.domains, 'cloudinary')}${
            frontMatter.cover_image
          }`}
          alt={frontMatter.title}
          type="rounded"
          layout="fill"
          className="card-image"
        />
      </Card.Header>
      <Card.Body>
        <Card.Title>{frontMatter.title}</Card.Title>
        <PostDate postDate={frontMatter.date} />
        <PostExcerpt excerpt={frontMatter.excerpt} />
      </Card.Body>
    </Card>
  );
}
