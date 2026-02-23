import { styled } from '@linaria/react';
import Layout from '../Layout';
import EmailIcon from '../../assets/icons/interfaces/at.svg';

const FooterWrapper = styled.footer`
  padding: 1rem 2.5rem;
  background-color: #000;
  color: #fff;

  .dark & {
    background-color: #fff;
    color: #000;
  }
`;

const FooterInner = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  margin-bottom: 0;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

const EmailLink = styled.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    fill: #fff;
  }

  .dark & svg {
    fill: #000;
  }

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    width: 20%;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Layout.FullWidth className="">
        <FooterInner>
          <Copyright>
            © 2019 - {new Date().getFullYear()} Prakhar Shukla
          </Copyright>
          <EmailLink href="mailto:prakhar.shukla321@gmail.com">
            <EmailIcon />
            &nbsp;Email
          </EmailLink>
        </FooterInner>
      </Layout.FullWidth>
    </FooterWrapper>
  );
}
