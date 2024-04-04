import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('aboutPageTitle')}</h2>
      <p>{t('aboutPageContent')}</p>
    </div>
  );
};

export default About;
