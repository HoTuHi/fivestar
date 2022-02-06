import {Component} from "react";
import nike from '../img/nike.jpg';
import columbia from '../img/columbia.png';
import puma from '../img/Puma-Logo-1988-present.jpg';
import LandingPage from "./LandingPage";
import video2Line from "../img/THIEN THANH FIVESTAR.mp4"

class Home extends Component {
    render() {
        return <section className="hero is-fullheight">
            <div className="m-top">
                <div id="home-top-video">
                    <video autoPlay loop muted width="100%">
                        <source src={video2Line} type="video/mp4"/>
                    </video>
                    <div id="home-text">
                        <h3>Chân thành, tận tình, chất lượng</h3>
                        <h4>Cam kết chất lượng tốt nhất cho mọi sản phẩm</h4>
                    </div>

                </div>
            </div>
            {/*doi tac*/}
            <section>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="title is-4 company">
                           Đối tác của chúng tôi
                        </div>
                        <div className="columns">
                            <div className="column">
                                <figure className="image is-128x128">
                                    <img className="is-64x64" src={puma} alt=""/>
                                </figure>
                            </div>   <div className="column">
                                <figure className="image is-128x128">
                                    <img className="is-64x64" src={nike} alt=""/>
                                </figure>
                            </div>   <div className="column">
                                <figure className="image is-128x128">
                                    <img className="is-64x64" src={columbia} alt=""/>
                                </figure>
                            </div>
                            <div className="column">
                                <figure className="image is-128x128">
                                    <img className="is-64x64" src={nike} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="title is-4 company">
                       Tuyển dụng
                    </div>
                    <LandingPage/>
                </div>
            </div>

        </section>
    }
}

export default Home;