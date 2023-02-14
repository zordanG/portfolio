import './style.sass';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function IntroCard(props) {
    const { t } = useTranslation();
    return (
        <div className={props.classes}>
            <ion-icon class="intro-icon" name={props.icon} />
            <Link className="menu-link" to={props.path}> {t(props.text)} </Link>
        </div>
    );
}
  
function ProjectCard(props) {
    const { t } = useTranslation();
    return (
        <div className="project-card">
            <div className="cover">
                <img src={props.imgPath} alt={props.title}></img>
            </div>
            <div className="project-info">
                <p className="project-title"> {props.title} </p>
                <Link className="link" to={props.path}> {t('cards.seeMore')} </Link>
            </div>
        </div>
    );
}

function SkillCard(props) {
    return(
        <div className={"card round-border " + props.type}>
            <div className="item">
                <div className="icon-box">
                    <ion-icon class="icon" name={props.icon} />
                </div>
                <div className="desc">
                    <h1> {props.title} </h1>
                    <p> {props.content} </p>
                </div>
            </div>
        </div>
    );
}

export {IntroCard, ProjectCard, SkillCard};