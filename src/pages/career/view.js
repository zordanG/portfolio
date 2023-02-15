import React from 'react';
import { useTranslation } from 'react-i18next';
import { CareerCard } from '../../components/card/view';
import './style.sass'

function CareerPage() {
  const { t } = useTranslation();

  return (
    <div className="page career">
      <div className="info">
        <h1> {t("menu.career")} </h1>
      </div>
      <div className="cards-grid">
        <CareerCard
          project="Sistema de integração de API's"
          title="Dev. Full-Stack"
          desc="Sistema desenvolvido para integrar as API's de estoque dos fornecedores com o estoque local."
          team="Tamanho do time: Apenas eu"
          techs={["HTML", "CSS", "Javascript", "PHP", "Fetch API"]}
        />
        <CareerCard
          project="Sistema de gestão de condomínios"
          title="Dev. Jr. Full-Stack"
          desc="Sistema para auxiliar administradoras no controle contábil, comunicação, gestão dos condomínios, etc."
          team="Tamanho do time: 4 pessoas"
          techs={["EmberJS", "Laravel", "SASS", ]}
        />
      </div>
    </div>
  );
}

export default CareerPage;