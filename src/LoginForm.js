import './css/login-form.css'
import {useState} from "react";
import Cookies from 'js-cookie'
import axios from 'axios'



function LoginForm() {

    const [userName, setUserName ] = useState("");
    const [password, setPassword ] = useState("");

    async function handleSubmitForm(e) {
        e.preventDefault();

        const res = await fetch("http://localhost:8080/api/v1/login", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': "application/json",
            },

            body: JSON.stringify({
                userName: userName,
                password: password
            })
        })

        resetFormFields();
    }

    function resetFormFields() {
        setUserName("");
        setPassword("");
    }


    return (
        <div id="login-form">
            <h2> Login </h2>
            <form onSubmit={handleSubmitForm}>
                <label>User Name</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;