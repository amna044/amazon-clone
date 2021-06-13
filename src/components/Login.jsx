import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"


function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]= useState();

    const login=(event)=>{
     event.preventDefault();
    }
   
    const register=(event)=>{
        event.preventDefault();
       }
      
    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo"
          src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png"
          alt="new" />
            </Link>
           
           <div className="login__container">
               <h1>Login</h1>
               <form>
               <h5>Email</h5>
               <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text"/>
               <h5>password</h5>
               <input  value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
               <br/>
               <button onClick={login} type="submit">Sign In</button>

               </form>
               <p>
                   dumsdhsvhbjnjk dsnc nbfhdjsn fnjn  bjnc nbjdbn ncnd
               </p>
               <button onClick={register}>Create your Amazon button</button>
           </div>
        </div>
    )
}

export default Login
