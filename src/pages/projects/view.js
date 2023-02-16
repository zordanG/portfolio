import React from 'react';
import { ProjectCard } from '../../components/card/view';
import gearImage from '../../common/gear.png';
import { useTranslation } from 'react-i18next';
import './style.sass'
import { ProjectsData } from '../../data';

function ProjectsPage() {
  const { t } = useTranslation();
  const projects = ProjectsData();

  return (
    <div className="page projects">
      <div className="info">
        <h1> {t("menu.projects")} </h1>
      </div>
      <div className="cards-grid">
        { projects ?
        projects.map((project) => {
          return <ProjectCard
            key={project.id}
            imgPath={project.img ? project.img : gearImage}
            path={`/projects/${project.id}`}
            title={project.name}/>})
          : false }
        <ProjectCard
          imgPath={gearImage}
          path="/coming-soon"
          title={t("comingSoon")}/>
      </div>
    </div>
  );
}
  
export default ProjectsPage;