import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

const Header: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    console.log('Detected language1:', i18n.language);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    console.log('Detected language2:', i18n.language);
  }, []);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={() => changeLanguage('en')}>English</button>
          </li>
          <li>
            <button onClick={() => changeLanguage('hu')}>Magyar</button>
          </li>
          <li>
            <Link to="/">{t('Home')}</Link> {/* Link to Home page with translated text */}
          </li>
          <li>
            <Link to="/about">{t('About')}</Link> {/* Link to About page with translated text */}
          </li>
        </ul>
      </nav>
      <h1>{t('welcome')}</h1>
    </header>
  );
};

export default Header;
