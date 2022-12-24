import './App.scss'
import {ReactTerminal} from "react-terminal"
import {
    BrowserRouter as Router,
} from "react-router-dom";
import {useEffect, useRef, useState} from "react"
import Window from "./components/Window/Window"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {library} from '@fortawesome/fontawesome-svg-core'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faLinkedin, faGithub, faGitlab, faInstagram, faSpotify} from "@fortawesome/free-brands-svg-icons"
import Project from "./components/Project/Project"


library.add(faGithub, faLinkedin, faGitlab, faInstagram, faSpotify, faEnvelope);


function App() {
    const welcomeMessage = (
        <span>
            Type "help" for more information. <br/>
    </span>
    )
    const [darkmode, setDarkmode] = useState(Boolean(localStorage.getItem("darkmode")) ?? true)
    const portraitRef = useRef(null)
    const socialsRef = useRef(null)
    const projectsRef = useRef(null)

    useEffect(() => {
        darkmode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
    })
    const commands = {
        help: (<span>
            <br/>
            <span><strong>COMMANDS</strong></span>
            <br/><br/>
            <span
                style={{marginLeft: "20px"}}><strong>darkmode</strong><br/><span
                style={{marginLeft: "40px"}}>enable/disable darkmode</span>
            </span><br/><br/>
             <span
                 style={{marginLeft: "20px"}}><strong>whoami</strong><br/><span
                 style={{marginLeft: "40px"}}>Who am I?</span>
             </span><br/><br/>
             <span
                 style={{marginLeft: "20px"}}><strong>projects</strong><br/><span
                 style={{marginLeft: "40px"}}>Show a list of my projects.</span>
             </span><br/><br/>
            <span
                style={{marginLeft: "20px"}}><strong>socials</strong><br/><span
                style={{marginLeft: "40px"}}>Open my socials</span>
                </span><br/><br/>
            <span
                style={{marginLeft: "20px"}}><strong>clear</strong><br/><span
                style={{marginLeft: "40px"}}>Clear the terminal</span>
            </span><br/><br/>
            <span
                style={{marginLeft: "20px"}}><strong>profile</strong><br/><span
                style={{marginLeft: "40px"}}>Show/hide profile window</span>
            </span><br/><br/>
</span>),
        darkmode: () => {
            setDarkmode(!darkmode)
            return `Darkmode ${darkmode ? 'disabled' : 'enabled'}`
        },
        whoami: `Hey, my name is Jens Thiel. I'm a Freelance Web Developer with a passion for Javascript.`,
        profile: () => {
            portraitRef.current?.toggle()
        },
        socials: () => {
            socialsRef.current?.toggle()
        },
        projects: () => {
            projectsRef.current?.toggle()
        }
    }


    return (
        <div className="App">
            <Router>
                <ReactTerminal commands={commands} theme={darkmode ? 'material-dark' : 'material-light'}
                               welcomeMessage={welcomeMessage}
                />
                <Window hidden={false} ref={portraitRef} className="portrait" content={
                    <div className="portrait__content">
                        <div className="portrait__image-wrapper">
                            <img src="jens.jpg" alt="jens"/>
                        </div>
                        <div className="portrait__social-wrapper">
                            <a href="mailto:contact@yens.io" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon='envelope'/>
                            </a>
                            <a href="https://www.linkedin.com/in/yens" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                            </a>
                            <a href="https://github.com/yenst" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={['fab', 'github']}/>
                            </a>
                            <a href="https://open.spotify.com/user/117848143?si=6f7822d4d4924e06" target="_blank"
                               rel="noreferrer">
                                <FontAwesomeIcon icon={['fab', 'spotify']}/>
                            </a>
                        </div>
                    </div>}
                />
                <Window hidden={true} ref={socialsRef} className="socials" content={
                    <div className="social__content">

                        <div className="social__social-wrapper">
                            <a href="https://www.linkedin.com/in/yens" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                                <div class="social__label">Add me on LinkedIn.</div>
                            </a>
                            <a href="https://github.com/yenst" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={['fab', 'github']}/>
                                <div className="social__label">Check out my bugs on Github.</div>
                            </a>
                            <a href="https://gitlab.com/yens.io" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={['fab', 'gitlab']}/>
                                <div className="social__label">Idem dito, Gitlab.</div>
                            </a>
                            <a href="https://www.instagram.com/ye.ns/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={['fab', 'instagram']}/>
                                <div className="social__label">Follow me on the gram.</div>
                            </a>
                        </div>
                    </div>}
                />
                <Window hidden={true} ref={projectsRef} className="projects" content={
                    <div className="projects__wrapper-content">
                        <h2>Projects</h2>
                        <div className="projects__content">
                            <Project title="Officient" image="projects/officient.png" description={
                                <div>
                                    <div>Freelance work on the webapp</div>
                                    <ul>
                                        <li>Vue.js</li>
                                        <li>PHP</li>
                                        <li>Node.js</li>
                                    </ul>
                                </div>
                            }
                                     link="https://app.officient.io"/>
                            <Project title="Kinepolis" image="projects/kinepolis.png" description={
                                <div>
                                    <div>Freelance work on the site</div>
                                    <ul>
                                        <li>Frontend ticketing client in custom JS</li>
                                        <li>General Drupal 7 work</li>
                                        <li>Tech leading in Drupal / JS</li>
                                        <li>Implementing identity server across all countries</li>
                                    </ul>
                                </div>
                            }
                                     link="https://kinepolis.be/nl"/>
                            <Project title="Tennisclub Duinbergen" image="projects/tcd.png" description={
                                <div>
                                    <div>Wordpress project with custom design</div>
                                    <ul>
                                        <li>Wordpress</li>
                                        <li>Own design</li>
                                        <li>Custom JS</li>
                                    </ul>
                                </div>
                            }
                                     link="https://tennisclubduinbergen.be"/>
                            <Project title="Atelier Lucas - Shop" image="projects/lucas.png" description={
                                <div>
                                    <div>Wordpress project with custom shop integration</div>
                                    <ul>
                                        <li>Wordpress</li>
                                        <li>WooCommerce</li>
                                        <li>Mollie</li>
                                        <li>Custom cron operations</li>
                                    </ul>
                                </div>
                            }
                                     link="https://shop.atelier-lucas.be"/>
                            <Project title="Yamigo" image="projects/yamigo.png" description={
                                <div>
                                    <div>Landing page for project with college friends.</div>
                                    <ul>
                                        <li>React JS</li>
                                        <li>Digital Ocean hosting</li>
                                        <li>Discord Hooks integration</li>
                                    </ul>
                                </div>
                            }
                                     link="https://yamigo.be"/>
                            <Project title="Crea Knokke" image="projects/crea.png" description={
                                <div>
                                    <div>WooCommerce with Elementor for a flowershop</div>
                                    <ul>
                                        <li>Elementor</li>
                                        <li>Own Design</li>
                                        <li>WooCommerce</li>
                                    </ul>
                                </div>
                            }
                                     link="https://creaknokke.be"/>
                            <Project title="Habites" image="projects/habites.png" description={
                                <div>
                                    <div>Healthy webshop</div>
                                    <ul>
                                        <li>Shopify</li>
                                        <li>Mollie</li>
                                        <li>Shipping</li>
                                    </ul>
                                </div>
                            }
                                     link="https://habites.be"/>
                            <Project title="Krea F" image="projects/kreaf.png" description={
                                <div>
                                    <div>Pro bono for a local barber.</div>
                                    <ul>
                                        <li>Wordpress</li>
                                        <li>Own Design</li>
                                    </ul>
                                </div>
                            }
                                     link="https://kreaf.be"/>
                        </div>
                    </div>}
                />
            </Router>
        </div>
    )
}

export default App;
