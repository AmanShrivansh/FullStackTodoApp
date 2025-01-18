import {useParams, Link} from 'react-router-dom';
import axios from 'axios';

function callHelloWorldRestApi(){
    axios.get("http://localhost:8080/hello-world")
        .then((response)=>successfullResponse(response))
        .catch((error)=>errorResponse(error))
        .finally(()=>console.log("cleanup"))
}

function successfullResponse(response){
    console.log(response)
}

function errorResponse(error){
    console.log(error)
}

function WelcomeComponent(){
    const {username} = useParams()
    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div >
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
            <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>Call hello world </button>
            
        </div>
    )
}

export default WelcomeComponent