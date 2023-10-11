import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../config/firebase";


function Signin() {

    const [emailUpdate, setEmailUpdate] = useState()
    const [passwordUpdate, setPasswordUpdate] = useState()
    
    const navigate = useNavigate()

    function emailValue(e) {

        setEmailUpdate(e.target.value)

    }

    function passwordValue(e) {

        setPasswordUpdate((e.target.value))

    }

    function signIn() {


        login(emailUpdate, passwordUpdate)

    }


    return (

        <div style={{ textAlign: 'center', border: '1px solid #ccc', width: "500px", backgroundColor: "#282c34" }} >

            <h1>Sign In</h1>

            <input style={{ padding: '10px', width: '80%', border: '1px solid #ccc', borderRadius: '5px', margin: '10px 0' }} onChange={emailValue} placeholder="Enter email here"></input>
            <br></br>
            <input style={{ padding: '10px', width: '80%', border: '1px solid #ccc', borderRadius: '5px', margin: '10px 0' }} onChange={passwordValue} type="password" placeholder="Enter password here"></input>
            <br></br>
            <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={signIn}>Sign In</button>

            <p >Don't have an account ? <span style={{ cursor: "pointer", color: "lightblue" }} onClick={() => navigate('/signup')}>Click here</span> </p>

        </div>
    )
}

export default Signin;