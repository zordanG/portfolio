import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.sass'

function CareerPage() {
  const { t } = useTranslation();

  return (
    <div className="page career">
      <div className="info">
        <h1> {t("menu.career")} </h1>
      </div>
    </div>
  );
}

export default CareerPage;