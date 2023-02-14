import React from 'react';
import './style.sass';
import { IntroCard } from '../../components/card/view';

function IntroductionPage() {

  return (
      <div className="intro">
        <IntroCard icon="book-outline" text="menu.skills" classes="presentation" path="/skills"/>
        <IntroCard icon="compass-outline" text="menu.career" classes="career" path="/career"/>
        <IntroCard icon="code-working" text="menu.projects" classes="projects" path="/projects"/>
      </div>
    );
  }
  
  export default IntroductionPage;