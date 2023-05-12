import { useEffect, useState } from "react";
import BulletDescription from './BulletDescription';
import NextBtn from "./NextBtn";

const Experience = () => {
  const [experiences, setExperiences] = useState([])
  const GIST_ID = import.meta.env.VITE_GIST_ID;

  useEffect(() => {
    fetch(`https://api.github.com/gists/${GIST_ID}`)
      .then(response => response.json())
      .then(async data => {
        const file = Object.values(data.files)[0];
        const content = file.content;
        const json = JSON.parse(content);
        setExperiences(json);
      })
      .catch(error => console.error(error));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const experiencesPerPage = 4;
  const totalPages = Math.ceil(experiences.length / experiencesPerPage);

  const startIndex = (currentPage - 1) * experiencesPerPage;
  const endIndex = startIndex + experiencesPerPage;
  const visibleExperiences = experiences.slice(startIndex, endIndex);

  const paginationProps = {
    experiences: experiences,
    totalPages: totalPages,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
  }

  return (
    <div id='technical-skills'>
      <h2 id="experience"
        className="hidden text-[#7F8AF0] text-[1.6rem] font-poppins tracking-section border-white border-l-8 pl-3 mb-5 mt-14 tablet-lg:block tablet-lg:border-none tablet-lg:pl-0 tablet-lg:-ml-0 mobile-lg:pt-14 mobile-lg:-mt-8 mobile-lg:tracking-normal mobile-lg:mb-0 mobile-lg:text-[1.7rem] mobile-lg:pl-0 mobile-lg:border-l-0 mobile-lg:font-bold mobile-lg:font-mono mobile-md:text-[1.4rem] mobile-xs:text-xl">
        Experience
      </h2>
      <h3
        className="hidden mobile-lg:block ml-[.14rem] text-gray-300 text-base mobile-md:text-sm mobile-xs:text-xs text-justify]">
        My journey as a web developer so far.
      </h3>

      <div className="w-[100%] tablet-lg:ml-3 mobile-lg:ml-2 mobile-lg:w[100%] mobile-lg:mt-4 mobile-xs:pr-1">
        <ol className="relative border-l border-zinc-400 mobile-xs:mr-2">
          <BulletDescription visibleExperiences={visibleExperiences} />
        </ol>
      </div>

      <NextBtn {...paginationProps} />

    </div>
  )
}

export default Experience;