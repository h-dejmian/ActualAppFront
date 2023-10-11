import './css/login-form.css'
import {useState} from "react";

function RegisterForm() {
    const [userName, setUserName ] = useState("");
    const [password, setPassword ] = useState("");
    const [userInfo, setUserInfo] = useState("");
    function handleSubmitForm(e) {
        e.preventDefault();

        fetch("http://localhost:8080/api/v1/register", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                login: userName,
                password: password
            })

        }).then(res => res.json())
            .then(json => setUserInfo(json));

        console.log(userInfo);
    }
    return (
        <div id="login-form">
            <h2> Register </h2>
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

export default RegisterForm;