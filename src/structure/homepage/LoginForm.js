import '../../css/login-form.css'
import {useState} from "react";
import ErrorMsg from "../../messages/ErrorMsg";

function LoginForm(props) {
    const [userName, setUserName ] = useState("");
    const [password, setPassword ] = useState("");
    const [logTime, setLogTime ] = useState();
    const [errorMsg, setErrorMsg] = useState("");

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
        if(res.status === 200) {
            const user = await res.json()
            props.setUser(user);
            localStorage.setItem('login', user.login);
            localStorage.setItem('id', user.id);
            localStorage.setItem('logTime', new Date().toString())
        }
        else {
            setErrorMsg('Invalid credentials');
        }
        resetFormFields();
    }

    function resetFormFields() {
        setUserName("");
        setPassword("");
    }


    return (
        <div className="login-form">
            <h2> Login </h2>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor="userName">User Name</label>
                <input type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <label htmlFor="password" >Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <ErrorMsg errorMsg={errorMsg} />
                <button className="button-lg" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;