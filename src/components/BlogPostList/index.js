import { Image, Card, PostDate, PostExcerpt } from '../';

export default function BlogPostList({ frontMatter }) {
  return (
    <Card className="h-full">
      <Card.Header>
        <div className="card-image">
          <Image
            src={`${frontMatter.coverImage}`}
            alt={frontMatter.title}
            type="rounded"
          />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{frontMatter.title}</Card.Title>
        <PostDate postDate={frontMatter.date} />
        <PostExcerpt excerpt={frontMatter.excerpt} />
      </Card.Body>
    </Card>
  );
}
