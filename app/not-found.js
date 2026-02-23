'use client';
import Image from 'next/image';
import { styled } from '@linaria/react';
import NavLink from '../src/components/NavLink';

const Container = styled.div`
  margin: 0 auto 2.5rem;

  @media (min-width: 640px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const LostMessage = styled.h3`
  font-family: 'JetBrains', monospace;
  font-size: 1.125rem;
  line-height: 1.75rem;
  width: 100%;
  text-align: center;
`;

const HomeLink = styled(NavLink)`
  &:hover {
    color: #2563eb;
    text-decoration: underline;
  }
`;

export default function NotFound() {
  return (
    <Container>
      <Image
        src={`/images/404.png`}
        alt="Page Not Found"
        width={750}
        height={500}
      />
      <LostMessage>
        You Lost Buddy? Go <HomeLink href="/">home</HomeLink>
      </LostMessage>
    </Container>
  );
}
