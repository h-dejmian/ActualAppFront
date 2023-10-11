import './css/login-form.css'
import {useState} from "react";

function LoginForm() {
    const [userName, setUserName ] = useState("");
    const [password, setPassword ] = useState("");
    const [token, setToken] = useState("");
    function handleSubmitForm(e) {
        e.preventDefault();

        fetch("http://localhost:8080/api/v1/login", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                userName: userName,
                password: password
            })

        }).then(res => res.json())
            .then(json => setToken(json.token));

        console.log(token);
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