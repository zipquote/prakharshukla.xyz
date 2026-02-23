import { styled } from '@linaria/react';

const MetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.75rem 0;
`;

const MetaTitle = styled.h5`
  font-family: 'Fira Code', Menlo, Monaco, Consolas, 'Courier New', monospace;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-size: 0.75rem;

  .dark & {
    color: #fff;
  }
`;

const MetaTags = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

const MetaTag = styled.span`
  padding: 0.25rem;
  background-color: #e2e8f0;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.75rem;
`;

interface ITimelineEventMetaProps {
  title: string;
  tags: string[];
}

export default function TimelineEventMeta({
  title,
  tags,
}: ITimelineEventMetaProps) {
  return (
    <MetaWrapper>
      <MetaTitle>{title}</MetaTitle>
      <MetaTags>
        {tags.map((tag, idx) => (
          <MetaTag key={`${tag.toLowerCase().replace(/[^\w-]+/g, '-')}-${idx}`}>
            {tag}
          </MetaTag>
        ))}
      </MetaTags>
    </MetaWrapper>
  );
}
