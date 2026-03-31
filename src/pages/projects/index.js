import { useEffect } from 'react';
import FooterContact from '../../components/FooterContact';
import ProjectsBody from '../../components/projects/ProjectsBody';
import TopHead from '../../components/general/TopHead';

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <TopHead pageTitle="Our Projects " />
      <ProjectsBody />
      <FooterContact />
    </>
  );
};

export default Projects;
