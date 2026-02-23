import Link from 'next/link';
import { styled } from '@linaria/react';

const BrandLink = styled(Link)`
  display: flex;
`;

const FirstName = styled.div`
  position: relative;
  font-family: Georgia, 'Times New Roman', serif;
  padding: 0.25rem 1.5rem;
  border: 2px solid #000;
  background-color: #000;
  color: #fff;

  .dark & {
    background-color: #fff;
    color: #000;
  }

  span:first-child {
    visibility: hidden;
  }

  span:last-child {
    position: absolute;
    padding: 0.25rem 1.5rem;
    inset: 0.5rem -1rem;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 1.5rem;

    @media (min-width: 640px) {
      inset: 0.75rem -1rem;
    }
  }
`;

const LastName = styled.div`
  position: relative;
  font-family: Georgia, 'Times New Roman', serif;
  width: 75%;
  margin-left: auto;
  padding: 0.25rem 0.5rem;
  color: #000;
  border: 2px solid #000;
  border-left: 0;
  background-color: #fff;

  .dark & {
    color: #fff;
    background-color: #000;
  }

  span:first-child {
    visibility: hidden;
  }

  span:last-child {
    position: absolute;
    padding: 0.25rem 0.5rem;
    font-family: Georgia, 'Times New Roman', serif;
    inset: 0 -0.125rem;
    font-size: 1.125rem;
  }
`;

export default function Brand() {
  return (
    <BrandLink href="/">
      <FirstName>
        <span>Prakhar</span>
        <span>Prakhar</span>
      </FirstName>
      <LastName>
        <span>Shukla</span>
        <span>Shukla</span>
      </LastName>
    </BrandLink>
  );
}
