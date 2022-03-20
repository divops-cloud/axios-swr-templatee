import React, { useState, useEffect, useRef } from 'react';
// components
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

import SearchModal from "../components/SearchModal";
import ToggleSwitch from "../button/ToggleSwitch";
import { Button } from "../button/Button"
import CustomLink from "../components/CustomLink"
import { Section } from "../layout/Section"
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns"

import SpaceshipIcon from "../button/SpaceshipIcon"
// import HeaderAstronaut from '../button/AstronautIcon';

function SubHeader() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  // below notus
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
  <>
    <Section yPadding="py-10">
      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <button
          className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <i className="fas fa-bars">
            {/* <HeaderAstronaut /> */}
          </i>
        </button>  
        </div>
          <NavbarTwoColumns>
            <li>
            <CustomLink href="/dashboards/admin/#">
              Admin
            </CustomLink>
            </li>
            <li>
              <CustomLink href="/dashboards/crypto/#">
                <a>Crypto</a>
              </CustomLink>
            </li>
            <li>
              <CustomLink href="/dashboards/hosting/#">
                <a>Hosting</a>
              </CustomLink>
            </li>
            

          </NavbarTwoColumns>
        </Section>
    </>
  );
}

export { SubHeader };