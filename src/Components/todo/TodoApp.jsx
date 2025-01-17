import './TodoApp.css'
import { useState } from 'react';
export default function TodoApp(){
    return (
        <div clssName="TodoApp">
            Todo Management Apication
            <LoginComponent/>
            
            {/* <WelcomeComponent/> */}
        </div>
    )
}

function LoginComponent(){

    const [username, setUsername] = useState('in28minutes')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    
    function handleUsernameChange(event){
        setUsername(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    function handleSubmit(){
        if(username === 'in28minutes' && password=== 'dummy'){
            console.log("success");
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
        }else{
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
            console.log("failed ");
        }
    } 

    return (
        <div className="Login">
            {/* <SuccessMessageComponent/> */}
            {/* <ErrorMessageComponent/> */}
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

function WelcomeComponent(){
    return (
        <div className="Welcome">
            Welcome Component
        </div>
    )
}
