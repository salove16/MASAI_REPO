import React from 'react'

export default function UserProfile({user}) {
  return (
    <div>
    <h2>User Profile</h2>
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
    <p>Bio: {user.bio}</p>
  </div>
  )
}
