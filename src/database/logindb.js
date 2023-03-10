import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function LoginDB() {

    const history = useNavigate();

    const [email,setEmail] = useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
        })
            .then(res=>{
                if(res.data==="exist"){
                    history("/", {state:{id:email}})
                }
            
                else if(res.data==="notexist"){
                    alert("User have not sign up")
            }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })

        }

        catch{
            console.log(e)
        }
    }

  return (
    <div className='Login'>
    <h1>Login</h1>

    <form action="POST">
        <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" name="email" id="loginEmail" />
        <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" name="password" id="loginPassword" />

        <input type="submit" onClick={submit} />
    </form>

    <br />
    <p>OR</p>
    <br />

    <Link to="/signup">Sign Up page</Link>
    </div>
  )

}


export default LoginDB