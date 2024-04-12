import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'Slim Slema',
    balance: 1000,
    email: 'slimslema@gmail.com',
    address: '123 rue paris, Tunisie',
    phoneNumber: '123-456-7890',
    binanceUsername: 'SlimSlema_binance',
  });

  const [editing, setEditing] = useState(false);
  const [newUserInfo, setNewUserInfo] = useState({ ...userInfo });

  const handleEdit = () => {
    setEditing(true);
    setNewUserInfo({ ...userInfo });
  };

  const handleSave = () => {
    setUserInfo({ ...newUserInfo });
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUserInfo({ ...newUserInfo, [name]: value });
  };

  return (
    <div className="profile-container">
      <h2 className="profile-heading">Profile</h2>
      <div className="profile-info">
        <p>
          <span className="info-label">Name:</span>
          {editing ? (
            <input type="text" name="name" value={newUserInfo.name} onChange={handleChange} />
          ) : (
            <span className="info-value">{userInfo.name}</span>
          )}
        </p>
        <p>
          <span className="info-label">Balance:</span>
          <span className="info-value">${userInfo.balance}</span>
        </p>
        <p>
          <span className="info-label">Email:</span>
          {editing ? (
            <input type="email" name="email" value={newUserInfo.email} onChange={handleChange} />
          ) : (
            <span className="info-value">{userInfo.email}</span>
          )}
        </p>
        <p>
          <span className="info-label">Address:</span>
          {editing ? (
            <input type="text" name="address" value={newUserInfo.address} onChange={handleChange} />
          ) : (
            <span className="info-value">{userInfo.address}</span>
          )}
        </p>
        <p>
          <span className="info-label">Phone Number:</span>
          {editing ? (
            <input type="tel" name="phoneNumber" value={newUserInfo.phoneNumber} onChange={handleChange} />
          ) : (
            <span className="info-value">{userInfo.phoneNumber}</span>
          )}
        </p>
        <p>
          <span className="info-label">Binance Username:</span>
          <span className="info-value">{userInfo.binanceUsername}</span>
        </p>
      </div>
      {editing ? (
        <div className="button-container">
          <button className="save-button" onClick={handleSave}>Save</button>
          <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <button className="edit-button" onClick={handleEdit}>Edit Profile</button>
      )}
    </div>
  );
};

export default Profile;
