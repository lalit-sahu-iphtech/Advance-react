import { useNavigate } from "react-router-dom";

export default function Login(){
const navigate = useNavigate();
    function handleLogin(){
        alert("login successful");
        navigate("/dashboard")
    }
    return(
        <>
        <h2>Login Page</h2>
        <button onClick={handleLogin}>Login</button>
        </>
    )
}