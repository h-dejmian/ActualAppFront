import './css/login-form.css'
import {useState} from "react";




function LoginForm(props) {
    const [userName, setUserName ] = useState("");
    const [password, setPassword ] = useState("");

    function handleSubmitForm(e) {
        e.preventDefault();
        fetch("http://localhost:8080/api/v1/login", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': "application/json",
            },

            body: JSON.stringify({
                userName: userName,
                password: password
            })
        }).then(res => props.setUser(res.json()));
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