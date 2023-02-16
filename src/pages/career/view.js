import React from 'react';
import { useTranslation } from 'react-i18next';
import { CareerCard } from '../../components/card/view';
import { CareerData } from '../../data';
import './style.sass';

function CareerPage() {
  const career = CareerData();
  const { t } = useTranslation();

  return (
    <div className="page career">
      <div className="info">
        <h1> {t("menu.career")} </h1>
      </div>
      <div className="cards-grid">
      { career ?
        career.map((job) => {
          return <CareerCard
            key={job.project}
            project={t(job.project)}
            title={job.title}
            desc={t(job.desc)}
            team={t(job.team, {count: job.size})}
            techs={job.techs}
          />
          })
          : false }
      </div>
    </div>
  );
}

export default CareerPage;