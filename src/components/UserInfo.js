import React from 'react'

function UserInfo({u}) {
  return (
    <div className='user-info-container'>
        <div>
        <img
        data-testid="image"
          src={u?.avatarURL??"Avatar"}
          alt={`Avatar of ${u?.name}`??""}
          className="user-info-avatar"
        />
        </div>
        <div>
            <p className='title' data-testid="title">{u?.name}</p>
            <p className='subtitle' data-testid="subtitle">{u?.id}</p>
        </div>
    </div>
  )
}

export default UserInfo