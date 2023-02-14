import './style.sass';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useTranslation } from 'react-i18next';

function LanguageButton(props) {
    const { i18n } = useTranslation();
    return (
        <div className="language">
            <button
                className={
                    (props.size ? props.size : "md") +
                    " language-icon circular-border fi-" +
                    props.flag + " " +
                    (i18n.resolvedLanguage === props.lng ? " selected" : "")}
                onClick={() => i18n.changeLanguage(props.lng)}
            ></button>
        </div>
    );
}

function IconButton(props) {
    return (
        <div className="icon">
            <button className='icon-button' onClick={() => props.function ? props.function() : () => {}}>
                <ion-icon
                    name={props.name}
                    class={
                        (props.size ? props.size : "md") +
                        " icon-theme" +
                        (props.animate ? " hover-effect" : "")
                    }
                ></ion-icon>
                <p>{props.text ? props.text : false}</p>
            </button>
        </div>
    )
}
  
export {LanguageButton, IconButton};