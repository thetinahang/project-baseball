import React, {useState} from 'react'
import { withRouter } from 'react-router-dom';

function LoginForm(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (evt) => {
        setEmail(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`http://localhost:3001/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            props.handleLogin(data.user)
            console.log(data.user)
            props.history.push({
                pathname: '/products',
                userId: data.user.id
            })
        })
        setEmail("")
        setPassword("")
    }
    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }
    return(
        <div>
            <div style={formDivStyle}>
            <h1>Log In</h1>
            <form class="ui form" onSubmit={handleSubmit}>
                <div class="field">
                    <label>Email</label>
                    <input value={email} onChange={handleEmailChange} type="text" placeholder="email"/>
                </div>
                <div class="field">
                    <label>Password</label>
                    <input value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
                </div>
                
                <button class="ui button" type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
} 

export default withRouter(LoginForm);