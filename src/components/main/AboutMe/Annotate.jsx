import { annotate, annotationGroup } from 'rough-notation';
import { useEffect } from 'react';

function AnnotateText() {
  useEffect(() => {
    const handleLoad = () => {
      const color = '#03c988';
      annotateAboutMe(color);
    };
    setTimeout(() => {
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        document.addEventListener('DOMContentLoaded', handleLoad);
      }
    }, 5000)

    return () => {
      document.removeEventListener('DOMContentLoaded', handleLoad);
    };
  }, []);
}

function annotateAboutMe(color) {
  const developer = annotateKeyword("#developer", 'box', color, [0, 2]);
  const fullStack = annotateKeyword("#full-stack", 'circle', color, [3, 7]);
  const freelancer = annotateKeyword("#freelancer", 'box', color, [0, 2]);
  const experience = annotateKeyword("#aboutMe-experience", 'circle', color, [3, 5]);
  const collaborated = annotateKeyword("#collaborated", 'box', color, [0, 2]);
  const highQuality = annotateKeyword("#high-quality", 'circle', color, [3, 5]);
  const passionate = annotateKeyword("#passionate", 'box', color, [0, 2]);
  const challenges = annotateKeyword("#challenges", 'circle', color, [3, 5]);
  const learn = annotateKeyword("#learn", 'box', color, [0, 2]);
  const build = annotateKeyword("#build", 'circle', color, [3, 5]);
  const application = annotateKeyword("#application", 'box', color, [0, 2]);

  annotateSection([
    developer,
    fullStack,
    freelancer,
    experience,
    collaborated,
    highQuality,
    passionate,
    challenges,
    learn,
    build,
    application
  ])
}

function annotateKeyword(id, type, color, padding, iterations = 3) {
  return annotate(document.querySelector(id), {
    animationDuration: 1200,
    padding: padding,
    type: type,
    color: color,
    iterations: iterations,
  });
}

function annotateSection(keywords) {
  annotationGroup(keywords).show()
}

export default AnnotateText;