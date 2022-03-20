import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { Banner } from '../Banner';
import { Customer } from '../Customer';
import { FAQ } from '../FAQ';
import { Integrations } from '../Integrations';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { Pricing } from '../Pricing';
import { Testimonial } from '../Testimonial';
import { VerticalFeatures } from '../VerticalFeatures';

import { Header } from '../Header';
import { DivopsDescription } from '../../descriptions/DivopsDescription';
import { SubHeader } from '../SubHeader';

const MoreInfoBase = () => (
  <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900 antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <SubHeader />
    <DivopsDescription />
    <Hero />
    <Customer />
    <Integrations />
    <VerticalFeatures />
    <Testimonial />
    <Pricing />
    <FAQ />
    <Banner />
    <Footer />
  </div>
);

export { MoreInfoBase };
