const ToggleMenu = ({ showNav, setShowNav }) => {
  return (
    <div className="flex">
      <button id="menu-btn" className="hidden  mobile-lg:block text-left ml-2 outline-none" onClick={() => { setShowNav(!showNav) }}>
        {showNav ? <svg xmlns="http://www.w3.org/2000/svg" className="ml-1" width="33" height="40" viewBox="0 0 24 24"><path fill="none" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 7l10 10M7 17L17 7" /></svg> :
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="42" viewBox="0 0 21 21"><path fill="none" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.5h12m-12.002 4h11.997M4.5 14.5h11.995" /></svg>}
      </button>
    </div>
  )
}

export default ToggleMenu;