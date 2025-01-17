import './TodoApp.css'
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import LogoutComponent  from './LogoutComponent';
import FooterComponent  from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ErrorComponent from './ErrorComponent';
import ListTodosComponent from './ListTodosComponent';
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';

export default function TodoApp(){
    return (
        <div clssName="TodoApp">
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}/>
                    <Route path='/login' element={<LoginComponent/>}/>
                    <Route path='/todos' element={<ListTodosComponent/>}/>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}/>
                    <Route path='/logout' element={<LogoutComponent/>}/>
                    <Route path='*' element={<ErrorComponent/>}/>
                </Routes>
                <FooterComponent/>
            </BrowserRouter>
            
        </div>
    )
}
