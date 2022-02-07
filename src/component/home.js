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
                    <div className="container is-max-desktop has-text-centered">
                        <div className="title is-4 mb-4">
                            Được tin tưởng bởi hơn 200 đối tác
                        </div>
                        <div className="level mt-5">
                            <div className="level-item">
                                <figure className="image is-64x64">
                                    <img className="is-64x64" src={nike} alt=""/>
                                </figure>
                            </div>
                            <div className="level-item">
                                <figure className="image is-64x64">
                                    <img className="is-64x64" src={puma} alt=""/>
                                </figure>
                            </div>
                            <div className="level-item">
                                <figure className="image is-64x64">
                                    <img className="is-64x64" src={columbia} alt=""/>
                                </figure>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/*định hướng*/}
            <section className="hero-body">
                <div className="container">
                    <div className="title is-2">Định hướng phát triển</div>
                    <div className="content mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ligula ipsum, tincidunt sed gravida at, pulvinar nec quam.
                    </div>
                    <div className="columns mt-5">
                        <div className="column is-half columns is-multiline">
                            <div className="column is-half">
                                <div className="title is-2">
                                    1.
                                </div>
                                <div className="title is-4">
                                    Be visitable
                                </div>
                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ligula ipsum, tincidunt

                                </div>
                            </div>
                            <div className="column is-half">
                                <div className="title is-2">
                                    2.
                                </div>
                                <div className="title is-4">
                                    Be visitable
                                </div>
                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                            </div>
                            <div className="column is-half">
                                <div className="title is-2">
                                    3.
                                </div>
                                <div className="title is-4">
                                    Be visitable
                                </div>
                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                            </div>
                            <div className="column is-half">
                                <div className="title is-2">
                                    4.
                                </div>
                                <div className="title is-4">
                                    Be visitable
                                </div>
                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                            </div>
                        </div>
                        <div className="column is-half video-area box">
                            <iframe src="https://www.youtube.com/embed/V5GS5ANG96M"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

            </section>

            {/*tuyển dụng*/}
            <div className="container is-fluid p-5 has-background-light has-text-centered">
                <div className="title is-4 company p-5">
                    Tuyển dụng
                </div>
                <LandingPage/>
            </div>
            {/*quy mô công suất*/}
            <section>
                <div className="container mt-5 p-5">
                    <div className="columns p-5">
                        <div className="column is-one-quarter p-5">
                            <div className="title is-3 ">
                                Quy mô và Công suất
                            </div>
                            <div className="content is-5 has-text-left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi velit, lacinia et
                                sagittis commodo, ultricies non felis.
                            </div>
                        </div>
                        <div className="column">
                            <div className="level">
                                <div className="level-item has-text-left">
                                    <div>
                                        <p className="title">3,000</p>
                                        <p className="heading">Nhân công</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-left">
                                    <div>
                                        <p className="title">02</p>
                                        <p className="heading">Nhà máy</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-left">
                                    <div>
                                        <p className="title">03</p>
                                        <p className="heading">Kho vật liệu</p>
                                    </div>
                                </div>
                            </div>
                            <div className="level">
                                <div className="level-item has-text-left">
                                    <div>
                                        <p className="title">3,000</p>
                                        <p className="heading">Nhân công</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-left">
                                    <div>
                                        <p className="title">02</p>
                                        <p className="heading">Nhà máy</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-left">
                                    <div>
                                        <p className="title">03</p>
                                        <p className="heading">Kho vật liệu</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>Thienthanh FiveStar</strong> by <a href="https://www.facebook.com/hotuhi12/">HOTUHI</a>
                        - The website content
                        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                    </p>
                </div>
            </footer>
        </section>
    }
}

export default Home;