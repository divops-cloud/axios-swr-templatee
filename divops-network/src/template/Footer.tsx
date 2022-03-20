// import Link from 'next/link';

import { Background } from '../background/Background';
// import { FooterCompanyInfo } from '../footer/FooterCompanyInfo';
// import { FooterLinks } from '../footer/FooterLinks';
import { FooterTwoRowsCopyright } from '../footer/FooterTwoRowsCopyright';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
// import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <FooterTwoRowsCopyright siteName={AppConfig.site_name}>
      </FooterTwoRowsCopyright>
    </Section>
  </Background>
);

export { Footer };
