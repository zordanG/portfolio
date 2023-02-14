import React from 'react';
import './style.sass';
import { useTranslation } from 'react-i18next';
import { SkillCard } from '../../components/card/view';

function SkillsPage() {
  const { t } = useTranslation();

  return (
    <div className="page skills">
      <div className="info">
        <h1>{t("titles.hardSkills")}</h1>
      </div>
      <div className="cards-grid round-border">
        <SkillCard
          title={t("skills.react")}
          content={t("skills.reactDesc")}
          type="hard"
          icon="code-slash"
        />
        <SkillCard
          title={t("skills.php")}
          content={t("skills.phpDesc")}
          type="hard"
          icon="code-slash"
        />
        <SkillCard
          title={t("skills.node")}
          content={t("skills.nodeDesc")}
          type="hard"
          icon="code-slash"
        />
        <SkillCard
          title={t("skills.english")}
          content={t("skills.englishDesc")}
          type="languages"
          icon="chatbubbles"
        />
        <SkillCard
          title={t("skills.french")}
          content={t("skills.frenchDesc")}
          type="languages"
          icon="chatbubbles"
        />
        <SkillCard
          title={t("skills.kanban")}
          content={t("skills.kanbanDesc")}
          type="management"
          icon="layers"
        />
        <SkillCard
          title={t("skills.scrum")}
          content={t("skills.scrumDesc")}
          type="management"
          icon="layers"
        />
      </div>
      <div className="info">
        <h1>{t("titles.softSkills")}</h1>
      </div>
      <div className="cards-grid round-border">
        <SkillCard
          title={t("skills.learner")}
          content={t("skills.learnerDesc")}
          type="soft"
          icon="extension-puzzle"
        />
        <SkillCard
          title={t("skills.proactivity")}
          content={t("skills.proactivityDesc")}
          type="soft"
          icon="extension-puzzle"
        />
        <SkillCard
          title={t("skills.empathy")}
          content={t("skills.empathyDesc")}
          type="soft"
          icon="extension-puzzle"
        />
        <SkillCard
          title={t("skills.flexibility")}
          content={t("skills.flexibilityDesc")}
          type="soft"
          icon="extension-puzzle"
        />
        <SkillCard
          title={t("skills.mentoring")}
          content={t("skills.mentoringDesc")}
          type="soft"
          icon="extension-puzzle"
        />
      </div>
    </div>
  );
}

export default SkillsPage;