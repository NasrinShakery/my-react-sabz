import React from "react";
import "./Form.css";

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstNameData: '',
            lastNameData: '',
            emailData: '',

            submitted: false,

            allValid: false
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.setState({
            submitted : true
        })
        if(this.setState.firstNameData !==0 && this.state.lastNameData !==0 && this.state.emailData !==0 ){
            this.setState({
                allValid: true
            })
            setTimeout(() => {
                this.setState({
                    allValid: false
                })
            },3000)
        }
    }
    nameChangeHandler = (e) => {
        this.setState({
            ...this.state,firstNameData : e.target.value
        })
    }
    lastnameChangeHandler = (e) => {
        this.setState({
            ...this.state,lastNameData : e.target.value
        })
    }
    emailChangeHandler = (e) => {
        this.setState({
            ...this.state,emailData : e.target.value
        })
    }


    render() {
        return (
            <div className="form-container">
                <form className="register-form" autoComplete="off" onSubmit={(e)=> this.submitHandler(e)}>
                    {/* Uncomment the next line to show the success message */}
                    {this.state.allValid && <div className="success-message">Success! Thank you for registering</div>}
                    <input
                        id="first-name"
                        className="form-field"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstNameData}
                        onChange={(event) => this.nameChangeHandler(event)}
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && !this.state.firstNameData && <span id="first-name-error">Please enter a first name</span>  }
                    {/* <span id="first-name-error">Please enter a first name</span> */}
                    <input
                        id="last-name"
                        className="form-field"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={(event) => this.lastnameChangeHandler(event)}
                        
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && !this.state.lastNameData && <span id="last-name-error">Please enter a last name</span>}
                    {/* <span id="last-name-error">Please enter a last name</span> */}
                    <input
                        id="email"
                        className="form-field"
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={(event) => this.emailChangeHandler(event)}
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && !this.state.emailData && <span id="email-error">Please enter an email address</span>}
                    {/* <span id="email-error">Please enter an email address</span> */}
                    <button className="form-field" type="submit">
                        Register
                    </button>
                </form>
            </div>

        )
    }
}
