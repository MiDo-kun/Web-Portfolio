import parse from 'html-react-parser';
import {useEffect, useState} from 'react';

const SocialMedia = () => {
  const [socialMedia, setSocialMedia] = useState([]);
  const GIST_ID = import.meta.env.VITE_GIST_ID;

  useEffect(() => {
    fetch(`https://api.github.com/gists/${GIST_ID}`)
      .then(response => response.json())
      .then(async data => {
        const file = Object.values(data.files)[4]; // Retrieve the 4th file in the gist
        const content = file.content;
        const json = JSON.parse(content);
        setSocialMedia(json);
      })
      .catch(error => console.error(error));
  }, []);


  return (
    <div className="pt-4 text-sm tablet-sm:mx-auto mobile-lg:mx-0 mobile-lg:pt-10 mobile-lg:pl-3 mobile-lg:pb-5 ">
      <h3 className="text-2xl font-bold font-poppins tracking-wider tablet-md:text-[1.4rem] text-[#7F8AF0]">Let's get in touch...</h3>
      <p className="mb-3 text-sm font-poppins pl-[.05rem] text-gray-300">I'm open for any suggestion or queries.</p>

      <div className="ml-[.10rem]">
        {socialMedia.map((account, id) => {
          return (
            <div className="text-sm  mb-2" key={id}>
              <span className="flex gap-1 text-[#7F8AF0] font-extrabold tracking-wider">
                {parse(account.svg)}
                <p className='font-robotoMono'>{account.social}</p>
              </span>
              <a href={account.link} className="text-xs underline block leading-[1] ml-[1.2px] mb-2 text-[#03C988]" target="_blank" rel="noreferrer">{account.simplifiedLink}</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SocialMedia;