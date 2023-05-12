import { useState } from "react";
import ToggleMenu from './ToggleMenu';
import Links from './NavLinks';

const NavigationBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [mobileNavlink, setMobileNavLink] = useState("#about-me");

  return (
    <div className="fixed bg-gray-800 w-full z-[2]" >
      <ToggleMenu showNav={showNav} setShowNav={setShowNav} />
      <div id="show-nav" className={`hidden absolute bg-[#1C1C1C] mt-1 ml-1 py-3 pl-2 pr-8 rounded-md ${showNav ? 'mobile-lg:block' : 'mobile-lg:hidden'} bg-gray-800`}> <ul id="mobile-nav-links" className="ml-1 font-poppins text-base mobile-xs:text-sm">
        <Links
          showNav={showNav}
          setShowNav={setShowNav}
          mobileNavlink={mobileNavlink}
          setMobileNavLink={setMobileNavLink}
        />
      </ul>
      </div>
    </div>
  )
}

export default NavigationBar;
