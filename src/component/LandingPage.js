import {Component} from "react";
import {Items1,Items2} from "./Items"

class LandingPage extends Component {
    render() {
        return <div className="mt-5">
            <div className="columns">
                {Items1.map((item, index) => {
                    return  <div className="column " key={index}>
                        <div className="so-tuyen-dung mr-1">
                            {item.number}
                        </div>
                        <div className="ten-nghe-nghiep">
                            {item.content}
                        </div>
                    </div>
                })}
            </div>
            <div className="columns mt-5">
                {Items2.map((item, index) => {
                    return  <div className="column"  key={index}>
                        <div className="so-tuyen-dung mr-1">
                            {item.number}
                        </div>
                        <div className="ten-nghe-nghiep">
                            {item.content}
                        </div>
                    </div>
                })}
            </div>
        </div>
    }
}

export default LandingPage;