import './Project.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {library} from '@fortawesome/fontawesome-svg-core'
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronRight);


export default function Project(props) {
    return (
        <div className="project__container">
            <div className="project__wrapper">
                <div className="project__logo-wrapper">
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className="project__content-wrapper">
                    <h4 className="project__title">{props.title}</h4>
                    <div className="project__description">{props.description}</div>
                    <a href={props.link} target="_blank">
                        Check it out.
                        <FontAwesomeIcon icon="chevron-right"/>

                    </a>
                </div>
            </div>
        </div>
    )
}