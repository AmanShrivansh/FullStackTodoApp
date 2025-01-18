import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { useAuth } from './security/AuthContext';

function LoginComponent(){

    const [username, setUsername] = useState('in28minutes')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate= useNavigate()

    const authContext = useAuth()
    //console.log(authContext)
    function handleUsernameChange(event){
        setUsername(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    function handleSubmit(){
        if(username === 'in28minutes' && password=== 'dummy'){
            authContext.setAuthenticated(true)
            console.log("success");
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
            
        }else{
            authContext.setAuthenticated(true)
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
            console.log("failed ");
        }
    } 

    return (
        <div className="Login">
            {/* <SuccessMessageComponent/> */}
            {/* <ErrorMessageComponent/> */}
            <h1>Login Page</h1>
            {showSuccessMessage && <div className='successMessage'>Authenticated successfully</div>}
            {showErrorMessage && <div className='errorMessage'>Authenticated failed</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent