"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

  
const login = () => {
  const router=useRouter();
    const [user, setUser] = useState({
        email:"",
        password:"",
        
    }
)
const [buttonDisabled, setButtonDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      if(user.email.length>0 && user.password.length>0 ){
        setButtonDisabled(false);
      }  
      else{
        setButtonDisabled(true)
      }
     
    }, [user])


const onLogin=async()=>{

  try {
      setLoading(true);
     const response= await axios.post("/api/users/login",user)
    console.log("login success",response.data);
    router.push("/profile");

    
  } catch (error:any) {
    console.log("login failed",error.message);

    
  }finally{
    setLoading(true)
  }
}
  return (
    <>
    <h1 className='flex flex-col items-center justify-content-center '>{  }</h1>
    <br/><label>email</label>
    <input type='email' autoComplete='off' placeholder='email' value={user.email} id="email" onChange={(e)=>setUser({...user,email:e.target.value})} />
    <br/><label>password</label>
    <input type='password' autoComplete='off' placeholder='password' value={user.password} id="password" onChange={(e)=>setUser({...user,password:e.target.value})} />
    <br/>
    <button onClick={onLogin}>Login</button>
    <br/>
    <button><Link href="/signup"> SignUp here</Link></button>
    
    </>
  )
}

export default login