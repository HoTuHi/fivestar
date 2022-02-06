import {Component} from "react";
import axios from "axios";

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
// GET
    // submitHandler = e => {
    //     const obj = this.state;
    //
    //     e.preventDefault();
    //     console.log(obj);
    //     axios.get('https://sheet.best/api/sheets/d4d23eb1-b4ae-475b-abe3-667ff259c860?_raw=1')
    //         .then(response => {
    //             console.log(response.data);
    //         })
    // }

    submitHandler = e => {
        const obj = this.state;

        e.preventDefault();
        console.log(obj);
        axios.post('https://sheet.best/api/sheets/d4d23eb1-b4ae-475b-abe3-667ff259c860',obj)
            .then(response => {
                console.log(response);
            })
    }
    cancelHandler = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const {name} = this.state;
        return (
            <div className="container">
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Name" value={name} name="name"
                               onChange={this.changeHandler}/>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link" onClick={this.submitHandler}>Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light" onClick={this.cancelHandler}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;