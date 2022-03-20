import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { Footer } from '../Footer';
import { Hero } from '../Hero';

import { Header } from '../Header';
import { DivopsDescription } from '../../descriptions/DivopsDescription';
import { SubHeader } from '../SubHeader';

const Base = () => (
  <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900 antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <SubHeader />
    <DivopsDescription />
    <Hero />
    <Footer />
  </div>
);

export { Base };
