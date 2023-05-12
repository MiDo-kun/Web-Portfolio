import parse from 'html-react-parser';

const BulletDescription = (props) => {
  return (
    props.visibleExperiences.map((experience, index) => {
      return (
        <li className="mb-5 ml-4 mobile-lg:mb-4" key={index}>
          <div className="animate-ping absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 bg-[#7F8AF0]"></div>
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 bg-[#7F8AF0]"></div>
          <time className="mb-1 text-sm text-red-500 font-robotoMono leading-none mobile-md:text-[.79rem] mobile-lg:font-semibold mobile-lg:italic">{experience.date}</time>
          <h3 className="text-amber-300 font-poppins font-semibold text-lg mobile-md:text-base mobile-xs:text-sm">
            {experience.title}
          </h3>
          <div id='project-experience' className="mb-2 ml-1 w-[95%]">
            <ul className='text-gray-200 mt-1 text-base mobile-md:text-sm mobile-xs:text-xs text-left'>
              {experience.description.map((data, index) => {
                return (
                  <li key={index} className="mb-2 -ml-1">
                    {parse(data)}
                  </li>
                )
              })}
            </ul>
          </div>
        </li>
      )
    })
  )
}


export default BulletDescription;