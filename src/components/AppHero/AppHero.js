import React from 'react';
import Title, { extraClasses } from './../Title/Title';
import InlineIcon, { icons } from './../InlineIcon/InlineIcon';
import './AppHero.scss';

const AppHero = () => (
  <div styleName="app-hero">
    <span styleName="app-logo">
      <InlineIcon icon={icons.storiaFullLogo} />
    </span>
    <div styleName="hero-content">
      <Title
        extraClasses={
          `${extraClasses.big} ${extraClasses.extraBold} ${extraClasses.white} ${extraClasses.shadow}`
        }
        text={['Comprar', <span key="0">ou</span>, 'alugar?']}
      />
    </div>
  </div>
);

export default AppHero;
