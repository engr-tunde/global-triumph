import { useEffect } from 'react';
import FooterContact from '../../components/FooterContact';
import ProjectDetailsGallery from '../../components/projects/ProjectDetailsGallery';

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <ProjectDetailsGallery />
      <FooterContact />
    </>
  );
};

export default ProjectDetails;
