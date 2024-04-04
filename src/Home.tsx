import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('homePageTitle')}</h2>
      <p>{t('homePageContent')}</p>
    </div>
  );
};

export default Home;
