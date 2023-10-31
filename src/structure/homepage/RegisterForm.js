import '../../css/login-form.css'
import {useState} from "react";
import Message from "../../messages/Message";

function RegisterForm() {
    const [userName, setUserName ] = useState("");
    const [password, setPassword ] = useState("");
    const [userInfo, setUserInfo] = useState("");
    const [message, setMessage] = useState("")
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
            .then(user => {
                if(validateResponse(user)) {
                    setUserInfo(user)
                }
            });

        resetFormFields();
    }

    function resetFormFields() {
        setUserName("");
        setPassword("");
        setMessage("");
    }

    function validateResponse(res) {
        if(res.status === 404 || res.status === 400 || res.status === 401) {
            setMessage('Invalid data');
            return false;
        }
        if(res.id && res.login) {
            setMessage('Account successfully created!');
            return true;
        }
        return true;
    }

    return (
        <div className="login-form">
            <h2> Register </h2>
            <form onSubmit={handleSubmitForm}>
                <label>User Name</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="button-lg" type="submit">Submit</button>
                <br/>
                <Message message={message} />
            </form>
        </div>
    )
}

export default RegisterForm;