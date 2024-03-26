import { useState } from "react"

const Login = () => {
const [email, setEmail] = useState();
const [password, setPassword] = useState();
console.log(email, password);
const handleSubmit = async (e) => {
  e.preventDefault();

  fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: email,
    password: password
  }),
}).then(res => res.json()).then(res => console.log(res))
         setEmail("");
         setPassword("");
    
  
  }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" placeholder='password' onChange={(e)=> setPassword(e.target.value)}/>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default Login