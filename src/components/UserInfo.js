import React from 'react'

function UserInfo({u}) {
  return (
    <div className='user-info-container'>
        <div>
        <img
          src={u.avatarURL}
          alt={`Avatar of ${u.name}`}
          className="user-info-avatar"
        />
        </div>
        <div>
            <p className='title'>{u.name}</p>
            <p className='subtitle'>{u.id}</p>
        </div>
    </div>
  )
}

export default UserInfo