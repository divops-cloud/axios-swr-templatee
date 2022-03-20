// import Image from 'next/image';
// import CustomLink from '../components/CustomLink';
import { Background } from '../background/Background';
// import { Button } from '../button/Button';
// import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
// import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
// import { Logo } from './Logo';
import MembershipsCarousel from '../carousels/MembershipsCarousel';
import Preview from './Preview';

const Hero = () => (
  <Background color="bg-gray-200">
    <Section yPadding="flex-grow bg-transparent">
      <MembershipsCarousel/>
      <br />
      <Preview />
    </Section>
     
  </Background>
);

export { Hero };
