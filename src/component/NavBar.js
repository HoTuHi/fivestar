import logo from '../img/logo.png'
import {useState} from "react";

function NavBar() {
    const [navBar, setNavBar] = useState(false)
    const [humber, setHumber] = useState(false)
    const handleClick =() =>{
        setHumber(!humber)
    }
    const changeNavBar = () => {
        if (window.scrollY >= document.documentElement.clientHeight * 0.8) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }
    window.addEventListener('scroll', changeNavBar)
    return (
        <div>
            <nav
                className={navBar ? "navbar has-background-white is-fixed-top " : "navbar has-background-transparent is-fixed-top "}
                role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <h3>FIVESTAR</h3>
                    </a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                       data-target="dataNavBar" onClick={handleClick}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={humber? "navbar-menu is-active": "navbar-menu"}>
                    <div id="dataNavBar" className="navbar-end">
                        <div className="navbar-item">
                            <div>
                                <a className="is-primary" href="">
                                    <strong>
                                        Tin tức
                                    </strong>
                                </a>
                            </div>

                        </div>
                        <div className="navbar-item">
                            <div>
                                <a className=" is-primary" href="">
                                    <strong>
                                        Tuyển dụng
                                    </strong>
                                </a>
                            </div>

                        </div>
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Liên hệ ngay</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </nav>
        </div>
    )
}

export default NavBar;