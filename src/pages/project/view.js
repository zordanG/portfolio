import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import './style.sass'

function ProjectPage() {
  const [project, setProject] = useState();
  const { id } = useParams();
  const { t } = useTranslation();
  const API_URL = `http://localhost:4000/projects/${id}`;
  
  useEffect(() => {
    fetch(API_URL)
    .then((response)=> {
      return response.json();
    })
    .then((item) => {
      setProject(item);
    })
    
    return () => false
  }, [])

  return (
    <div className="page project">
      {project ?
        <>
          <div className="info">
            <h1>{t(project.desc)}</h1>
          </div>
          <div className="cards-grid">
          </div>
        </>
      : false}
    </div>
  );
}
  
export default ProjectPage;