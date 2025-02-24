import { useState } from "react";

function FormComponent(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
function onSubmit(e){
    e.preventDefault()
    const message = 'Member submittedd'
    alert(message)
    setName('')
    setEmail('')
    setPassword('')
}

    return(
        <form onSubmit={onSubmit}>
            <><p>Name</p><input onChange={(e)=>setName(e.target.value)} value={name}></input><br/></>
            <p>Email</p><input onChange={(e)=> setEmail(e.target.value)} value={email}></input><br/>
            <p>Password</p><input onChange={(e)=>setPassword(e.target.value)} value={password}></input><br/>
            <button type="submit" disabled={password.length < 6 || !email.includes('.','@') || name.length < 2}>Register</button>
        </form>
    )
}

export default FormComponent