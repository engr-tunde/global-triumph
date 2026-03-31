import { useEffect } from 'react';
import FooterContact from '../../components/FooterContact';
import ProjectDetailsGallery from '../../components/projects/ProjectDetailsGallery';
import TopHead from '../../components/general/TopHead';

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <TopHead pageTitle="Project Details" />
      <ProjectDetailsGallery />
      <FooterContact />
    </>
  );
};

export default ProjectDetails;
