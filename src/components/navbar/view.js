import { Link } from 'react-router-dom';
import './style.sass';
import { useTranslation } from 'react-i18next';
import {IconButton, LanguageButton} from '../ui-button/view';
import { useState } from 'react';

function Navbar() {
  const { t } = useTranslation();
  const [shrinkMenu, setShrinkMenu] = useState(true);

  return (
    <div className={shrinkMenu === true ? "navbar" : "navbar-open"}>
      <div className="logo">
        <div className='shrink circular-border'>
          <ion-icon
            name={shrinkMenu === true ? "chevron-forward" : "chevron-back"}
            onClick={() => {
              setShrinkMenu(!shrinkMenu);
          }}/>
        </div>
        <div className="menu">
          <ion-icon
            name={shrinkMenu === true ? "menu" : "close"}
            onClick={() => {
              setShrinkMenu(!shrinkMenu);
          }}/>
        </div>
      </div>
      <div className="nav">
        {/* <Link className="nav-link" to="/"> {t('navbar.intro')} </Link> */}
        <Link className="nav-link" to="/skills" onClick={window.screen.availWidth <= 769 ? () => setShrinkMenu(!shrinkMenu) : () => {}}>
          <IconButton name="book-outline" />
          <p className={shrinkMenu === false ? "show" : "hide"}>{t('menu.skills')}</p>
          {}
        </Link>
        <Link className="nav-link" to="/career" onClick={window.screen.availWidth <= 769 ? () => setShrinkMenu(!shrinkMenu) : () => {}}>
          <IconButton name="compass-outline" />
          <p className={shrinkMenu === false ? "show" : "hide"}>{t('menu.career')}</p>
        </Link>
        <Link className="nav-link" to="/projects" onClick={window.screen.availWidth <= 769 ? () => setShrinkMenu(!shrinkMenu) : () => {}}>
          <IconButton name="code-working" />
          <p className={shrinkMenu === false ? "show" : "hide"}>{t('menu.projects')}</p>
        </Link>
      </div>
      <div className={shrinkMenu === false ? 'config-open' : 'config'}>
        <h3 className={shrinkMenu === false ? "show" : "hide"}>{t('navbar.selectLang')}</h3>
        <div className="lang">
          <LanguageButton flag="us" lng="en-US"/>
          <LanguageButton flag="br" lng="pt-BR"/>
        </div>
      </div>
    </div>
  );
}
  
export default Navbar;