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
  const specializing = annotateKeyword("#specializing", 'box', color, [0, 2]);
  const development = annotateKeyword("#development", 'box', color, [0, 2]);
  const delivering = annotateKeyword("#delivering", 'box', color, [0, 2]);
  const commited = annotateKeyword("#commited", 'box', color, [0, 2]);
  const exceptional = annotateKeyword("#exceptional", 'box', color, [0, 2]);
  const impactful = annotateKeyword("#impactful", 'box', color, [0, 2]);

  annotateSection([
    specializing,
    development,
    delivering,
    commited,
    exceptional,
    impactful
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