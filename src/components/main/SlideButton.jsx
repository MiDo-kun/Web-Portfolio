import { useState, useEffect } from "react";

const SlideButton = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const toggleButtonVisibility = () => {
    const button = document.getElementById("btn-back-to-top");
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 1300) {
      button.style.display = "block";
      setIsButtonVisible(true);
    } else {
      button.style.display = "none";
      setIsButtonVisible(false);
    }
  };

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleButtonVisibility);
    return () => {
      window.removeEventListener("scroll", toggleButtonVisibility);
    };
  }, []);

  return (
    <button
      id="btn-back-to-top"
      onClick={backToTop}
      type="button"
      className={`fixed bottom-8 right-8 inline-block rounded-full z-30 bg-danger p-2 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition-all duration-1000 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] ${isButtonVisible ? 'block scale-125' : 'hidden'} mobile-lg:bottom-5 mobile-lg:right-5`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        strokeWidth="2.5"
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default SlideButton;