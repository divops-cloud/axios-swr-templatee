import { ReactNode } from 'react';
import AstronautIcon from '../button/AstronautIcon';
import ToggleSwitch from '../button/ToggleSwitch';

type IFooterCompanyInfoProps = {
  logo: ReactNode;
  description: string;
};

const FooterCompanyInfo = (props: IFooterCompanyInfoProps) => (
  <div className="text-center md:text-left">
    <div className="flex justify-center md:justify-start">{props.logo}</div>
      <AstronautIcon />
      <ToggleSwitch />
    <div className="mt-2 text-sm">{props.description}</div>
  </div>
);

export { FooterCompanyInfo };
