import '../css/login-form.css'
import {useState} from "react";
import ErrorMsg from "./ErrorMsg";

function LoginForm(props) {
    const [userName, setUserName ] = useState("");
    const [password, setPassword ] = useState("");
    const [errorMsg, setErrorMsg] = useState('');

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
        }).then(res => res.json())
            .then(user => {
                if(validateResponse(user)) {
                    props.setUser(user);
                    console.log(user)
                    localStorage.setItem('login', user.login);
                    localStorage.setItem('id', user.id);
                }
            })

        resetFormFields();
    }

    function validateResponse(res) {
        if(res.status === 404 || res.status === 400 || res.status === 401) {
            setErrorMsg('Invalid credentials');
            return false;
        }
        return true;
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
                <ErrorMsg errorMsg={errorMsg} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;