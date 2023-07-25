"use client"
import axios from "axios";
import {toast} from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { useState } from 'react'
import Link from "next/link";

const Pofilepage = () => {
  const router=useRouter()
  const [data, setData] = useState('nothing')

const logout=async()=>{
  try {
      const res= await axios.get('/api/users/logout')
    toast.success('Logout success')
    router.push("/login")
  } catch (error:any) {
    console.log(error.message);
    
  }
}
const getUserDetails = async () => {
  const res = await axios.get('/api/users/me')
  console.log(res.data);
  setData(res.data.data.username)
}


  return (
    <>
    <div>Pofilepage12</div>
    <h2 className="p-1 rounded bg-green-500">{data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}
            </Link>}</h2>

    <button className='bg-blue' onClick={logout}>LOGOUT</button>
    
    <button
        onClick={getUserDetails}
        className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >GetUser Details</button>
    </>
  )
}

export default Pofilepage