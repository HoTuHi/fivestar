import {Component} from "react";
import fivestar from '../img/Frame 14.png';
import thienthanh from '../img/Frame 13.png';
import LandingPage from "./LandingPage";

class Navbar extends Component {
    render() {
        return <section className="hero bg-org is-fullheight">
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item">
                                <span className="brand-logo">FIVESTAR</span>
                            </a>
                            <span className="navbar-burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
                        </div>
                        <div id="navbarMenuHeroA" className="navbar-menu">
                            <div className="navbar-end">

                                <span className="navbar-item">
            </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="title is-2 company">
                        Công ty may THIÊN THÀNH FIVESTAR Hà Tĩnh cần tuyển
                    </div>

                    <LandingPage/>
                </div>
            </div>

        </section>
    }
}

export default Navbar;