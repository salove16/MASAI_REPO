import React, { useState } from 'react'

export default function EditProfile({user,onSave}) {
    const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    onSave({ ...formData, [name]: value })
  };

  return (
    <div>
    <h2>Edit Profile</h2>
    <form>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Bio:
        <textarea name="bio" value={formData.bio} onChange={handleChange} />
      </label>
    </form>
  </div>
  )
}
