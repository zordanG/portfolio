import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.sass'

function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className="page found-page">
        <ion-icon class="error-icon" name="ban"></ion-icon>
        <h1 className='error-message'> {t('error404')} </h1>
        <h1 className='found-message'> {t('notFound')} </h1>
    </div>
  );
}
  
export default NotFoundPage;