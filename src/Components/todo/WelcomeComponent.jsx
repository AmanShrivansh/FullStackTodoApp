import {useParams, Link} from 'react-router-dom';
import { useState } from 'react';
import { retrieveHelloPathvariable } from './api/HelloWorldApiService';


function WelcomeComponent(){
    const {username} = useParams()
    const [message,setMesage] = useState(null)

    function callHelloWorldRestApi(){
        retrieveHelloPathvariable('Aman')
       .then((response)=>successfullResponse(response))
       .catch((error)=>errorResponse(error))
       .finally(()=>console.log("cleanup"))
   }

    function successfullResponse(response){
        console.log(response)
        setMesage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div >
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
            <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>Call hello world </button>
            <div className="text-info">{message}</div>
        </div>
    )
}

export default WelcomeComponent