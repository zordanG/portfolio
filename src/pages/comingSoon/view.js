import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.sass'

function ComingSoonPage() {
  const { t } = useTranslation();
  return (
    <div className="page soon-page">
        <ion-icon class="working-icon" name="construct"></ion-icon>
        <h1 className="build-message"> {t("buildingPage")} </h1>
        <h1 className="coming-message"> {t("comingSoonMessage")} </h1>
    </div>
  );
}
  
export default ComingSoonPage;