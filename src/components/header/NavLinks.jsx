import parse from 'html-react-parser';

const Links = (props) => {
  const navLinks =  [
    {
      id: 1,
      name: "About Me",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Z" /></svg>`,
      link: "#about-me"
    },
    {
      id: 2,
      name: "Technical Skills",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 36 36"><path fill="currentColor" d="M16.4 15.4h3.2v5.2h-3.2z" className="clr-i-solid clr-i-solid-path-1" /><path fill="currentColor" d="M21 21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2H2v9a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-9H21Z" className="clr-i-solid clr-i-solid-path-2" /><path fill="currentColor" d="m33.71 12.38l-4.09-4.09a1 1 0 0 0-.7-.29h-5V6.05A2 2 0 0 0 22 4h-8.16A1.92 1.92 0 0 0 12 6.05V8H7.08a1 1 0 0 0-.71.29l-4.08 4.09a1 1 0 0 0-.29.71V17h13v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h13v-3.92a1 1 0 0 0-.29-.7ZM22 8h-8V6h8Z" className="clr-i-solid clr-i-solid-path-3" /><path fill="none" d="M0 0h36v36H0z" /></svg>`,
      link: "#skills"
    },
    {
      id: 3,
      name: 'My Experience',
      icon: `<svg className="mr-[.1rem]" xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 24 24"><path fill="currentColor" d="M13 23V13h10v10H13Zm1.5-1.5h7v-.8q-.625-.775-1.525-1.238T18 19q-1.075 0-1.975.463T14.5 20.7v.8ZM18 18q.625 0 1.063-.438T19.5 16.5q0-.625-.438-1.063T18 15q-.625 0-1.063.438T16.5 16.5q0 .625.438 1.063T18 18Zm-8.75 4l-.4-3.2q-.325-.125-.613-.3t-.562-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75L19.925 11H15.4q-.35-1.075-1.25-1.788t-2.1-.712q-1.45 0-2.475 1.025T8.55 12q0 1.2.675 2.1T11 15.35V22H9.25Z" /></svg>`,
      link: "#experience"
    },
    {
      id: 4,
      name: "Featured Projects",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 36 36"><path fill="currentColor" d="M16.4 15.4h3.2v5.2h-3.2z" className="clr-i-solid clr-i-solid-path-1" /><path fill="currentColor" d="M21 21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2H2v9a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-9H21Z" className="clr-i-solid clr-i-solid-path-2" /><path fill="currentColor" d="m33.71 12.38l-4.09-4.09a1 1 0 0 0-.7-.29h-5V6.05A2 2 0 0 0 22 4h-8.16A1.92 1.92 0 0 0 12 6.05V8H7.08a1 1 0 0 0-.71.29l-4.08 4.09a1 1 0 0 0-.29.71V17h13v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h13v-3.92a1 1 0 0 0-.29-.7ZM22 8h-8V6h8Z" className="clr-i-solid clr-i-solid-path-3" /><path fill="none" d="M0 0h36v36H0z" /></svg>`,
      link: "#personal-projects"
    },
    {
      id: 5,
      name: "Blog Post",
      icon: `            <svg className="ml-[.25rem] mr-[.25rem]" xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 512 512"><path fill="currentColor" d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zm-96 16c0-26.5-21.5-48-48-48S0 117.5 0 144v224c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144h-16v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z" /></svg>`,
      link: "#blog"
    },
    {
      id: 6,
      name: "Contact Me",
      icon: `<svg className="ml-[.2rem] mr-[.21rem]" xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 24 24"><path fill="currentColor" d="M21 8V7l-3 2l-3-2v1l3 2l3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z" /></svg>`,
      link: "#contact"
    }
  ]

 return (
    navLinks.map((nav, index) => (
      <li key={index} className={`flex items-center gap-1 mb-1 
          ${props.mobileNavlink === nav.link ? "text-yellow-400" : "text-white"}`}>
        {parse(nav.icon)}
        <a href={nav.link} onClick={() => {
          props.setMobileNavLink(nav.link);
          props.setShowNav(!props.showNav)
        }}>
          {nav.name}
        </a>
      </li>
    ))
  )
}

export default Links;