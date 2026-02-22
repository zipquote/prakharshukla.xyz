import { styled } from '@linaria/react';
import { useContext } from 'react';
import { DarkModeContext } from '../../context';
import LinkIcon from '../../assets/icons/interfaces/link.svg';

const TitleLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h3`
  display: flex;
  font-family: 'Butler-Bold', sans-serif;
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 0.5rem;

  .dark & {
    color: #fff;
  }
`;

const StyledLinkIcon = styled(LinkIcon)`
  margin-left: 0.5rem;
`;

export default function TimelineEventTitle({ link, title }) {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <TitleLink href={link} rel="noreferrer" target="_blank">
      <Title>
        <span>{title}</span>
        <StyledLinkIcon fill={isDarkMode ? '#FFF' : '#000'} />
      </Title>
    </TitleLink>
  );
}
