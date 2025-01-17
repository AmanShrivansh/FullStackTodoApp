import './TodoApp.css'
import { useState } from 'react';
import { BrowserRouter, Routes , Route, useNavigate, useParams, Link} from 'react-router-dom';

export default function TodoApp(){
    return (
        <div clssName="TodoApp">
            <HeaderComponent/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}/>
                    <Route path='/login' element={<LoginComponent/>}/>
                    <Route path='/todos' element={<ListTodosComponent/>}/>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}/>
                    <Route path='/logout' element={<LogoutComponent/>}/>
                    <Route path='*' element={<ErrorComponent/>}/>
                </Routes>
            </BrowserRouter>
            <FooterComponent/>
        </div>
    )
}


function LoginComponent(){

    const [username, setUsername] = useState('in28minutes')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate= useNavigate()
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
            navigate(`/welcome/${username}`)
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

function WelcomeComponent(){
    const {username} = useParams()
    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div >
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
        </div>
    )
}

function ErrorComponent(){
    return (
        <div className="ErrorComponent">
            <h1>We are working hard on the issue.</h1>
            <div>
                Apologies for the 404. Reach out to team @ amanshrivansh@gmail.com.
            </div>
        </div>
    )
}

function ListTodosComponent(){
    const today = new Date();
    const targetDate = new Date(today.getFullYear()+1 , today.getMonth(), today.getDay())

    const todos = [
                    {id:1,description:'Learn AWS', done: false, targetDate:targetDate},
                    {id:2,description:'Learn Full stack dev', done: false, targetDate:targetDate},
                    {id:3,description:'Learn AWS', done: false, targetDate:targetDate}
                ]
    return (
        <div className="ListTodosComponent">
            <h1>Things you want to do</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todos => (
                                    <tr key={todos.id}>
                                        <td>{todos.id}</td>
                                        <td>{todos.description}</td>
                                        <td>{todos.done.toString()}</td>
                                        <td>{todos.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


function HeaderComponent(){
    return (
        <div className="header">
               Header <hr/>
        </div>
    )
}

function FooterComponent(){
    return (
        <div className="footer">
            <hr/>Footer
        </div>
    )
}

function LogoutComponent(){
    return (
        <div className="LogoutComponent">
            <h1>You are logged out!</h1>
            <div>
                Thank you for using our app. Come back soon!
            </div>
        </div>
    )
}
