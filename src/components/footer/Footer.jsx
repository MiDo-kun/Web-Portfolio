import Contact from "./Contact";
import Location from "./Map";
import Signature from "./Signature";
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer id="contact"
      className="bg-[#161b22] mt-28 w-full mobile-lg:pl-0 mobile-lg:mt-20">
      <div
        className="flex justify-center tablet-md:flex-col tablet-md:w-screen">
        <Location />
        <Contact />
        <SocialMedia />
      </div>

      <Signature />
    </footer>
  )
}

export default Footer;