import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import gearImage from '../../common/gear.png';
import './style.sass';
import { ProjectsData } from '../../data';
import { ItemDisplay } from '../../components/item-display/view';
import { LinkButton } from '../../components/ui-button/view';
import { Carousel } from 'react-responsive-carousel';

function ProjectPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  
  function getProject() {
    let vessel = ProjectsData();
    vessel = vessel.filter((item) => {return item.id == id ? true : false});
    return vessel[0];
  };

  const project = getProject();

  return (
    <div className="page project">
      {project ?
        <>
          <div className="project-info round-border">
            <div className="project-header">
              <div className="img">
                <img src={project.img ? project.img : gearImage} alt={project.name}></img>
              </div>
              <div className="links">
                <h1 className="name">{t(project.name)}</h1>
                <h4 className="status">{t(project.status)}</h4>
                <div className="buttons">
                  <LinkButton path={project.url} text={t("url")} color="blue"/>
                  <LinkButton path={project.code} text={t("code")} color="red"/>
                </div>
              </div>
            </div>
            <div className="project-content">
              <p className="tech">{t("tech")}</p>
              <div className="techs">
                <ItemDisplay tech={project.techs} />
              </div>
              <p className="desc">{t(project.desc)}</p>
              {project.imgCarousel.length > 0 ?
                <Carousel showThumbs={false}>
                  {project.imgCarousel.map((image) => {
                    return(
                      <div key={t("projectImg")}>
                          <img className="img-carousel" alt={t("projectImg")} src={image} />
                      </div>
                    )
                  })}
                </Carousel>
                : false
              }
            </div>
          </div>
        </>
      : false}
    </div>
  );
}
  
export default ProjectPage;