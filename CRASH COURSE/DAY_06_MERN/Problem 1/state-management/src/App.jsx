import { useState } from 'react'
import './App.css'
import EditProfile from './EditProfile';
import UserProfile from './UserProfile';

function App() {
  const userData = {
    name: 'Shashank shalabh',
    email: 'shashank@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };
  
  const [user, setUser] = useState(userData);
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };



  return (
   <>
   <h1>User Profile Application</h1>
      {editMode ? (
        <EditProfile user={user} onSave={setUser} />
      ) : (
        <UserProfile user={user} />
      )}
      <button onClick={toggleEditMode}>
        {editMode ? 'Save Changes' : 'Edit Profile'}
      </button>
   </>
  )
}

export default App
