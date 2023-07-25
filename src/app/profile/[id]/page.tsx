import React from 'react'

const UserProfile = ({params}:any) => {
    
  return (
    <div>
        <h1>Profiles</h1>
        <hr/>
        <p className='p-2 rounded bg-orange text-black'>{params.id}</p>
    </div>
  )
}

export default UserProfile