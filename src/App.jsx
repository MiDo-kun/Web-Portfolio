import NavigationBar from './components/header/Navbar';
import GithubChart from './components/main/AboutMe/GithubChart';
import SkillsAndExperience from './components/main/SelectedProjects/SkillsAndExperience';
import FeaturedProjects from './components/main/SelectedProjects/FeaturedProjects';
import BlogPost from './components/main/Blog/BlogPost';
import Footer from './components/footer/Footer';
import AboutMe from './components/header/AboutMe';
import SlideButton from './components/main/SlideButton';
import AnnotateText from './components/main/AboutMe/Annotate';

function App() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main className="ml-16 mobile-lg:ml-2">
        <div className="w-[1010px] mx-auto text-white tablet-lg:w-[600px] mobile-lg:w-full">
          <AboutMe />
          {/* <AnnotateText /> */}
          <GithubChart />
          <SkillsAndExperience />
          {/* <FeaturedProjects /> */}
          <BlogPost />
        </div>
      </main>
      <Footer />
      <SlideButton />
    </>
  );
}

export default App;
