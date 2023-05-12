import { useEffect, useState } from 'react';
import ProjectCarousel from './ProjectCarousel';
import ProjectDescription from './ProjectDescription';

const Projects = () => {
  const GIST_ID = import.meta.env.VITE_GIST_ID;
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/gists/${GIST_ID}`)
      .then(response => response.json())
      .then(async data => {
        const file = Object.values(data.files)[1]; // Retrieve the 1st file in the gist
        const content = file.content;
        const json = JSON.parse(content);
        setProjects(json);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    projects.map((project, index) => {
      return (
        <div key={index} className={`w-[90%] flex mt-3 mb-10 ${index === 1 ? 'flex-row-reverse' : ''} mx-7 hover:transition-transform hover:ease-in-out tablet-lg:flex-col tablet-lg:mt-0 tablet-lg:mb-3 tablet-md:w-full mobile-lg:pt-2 mobile-lg:mb-0 mobile-lg:mx-auto mobile-lg:w-full`}>
          <ProjectDescription index={index} project={project} />
          <ProjectCarousel project={project} />
        </div>
      )
    })
  );
}

export default Projects;