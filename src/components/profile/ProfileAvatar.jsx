import React from 'react';
import { useNavigate } from 'react-router-dom';
import profileDp from '../assets/profiledp.png'; // adjust the path if needed

const ProfileAvatar = ({ email }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (email) {
      navigate(`/profile/${email}`);
    }
  };

  return (
    <img
      src={profileDp}
      alt="Profile"
      className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80 transition"
      onClick={handleClick}
    />
  );
};

export default ProfileAvatar;
