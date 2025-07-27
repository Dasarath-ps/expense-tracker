import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { LuUser, LuTrash, LuUpload } from "react-icons/lu";
const ProfilePicture = ({ profilePicture, setProfilePicture }) => {
  const [priviewUrl, setPreviewUrl] = useState(null);
  const inputRef = useRef(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const onRemovefile = () => {
    setPreviewUrl(null);
    setProfilePicture(null);
  };
  const onChoosefile = () => {
    inputRef.current.click();
  };

  return (
    <div className=" bg-primary-alt relative w-25 h-25 rounded-full flex justify-center items-center ">
      {profilePicture ? (
        <>
          <div className="w-25 h-25  flex justify-center items-center overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-full"
              src={priviewUrl}
              alt="Loding..."
            />
          </div>
          <div className="w-8 h-8 bg-secondary rounded-full flex justify-center items-center absolute bottom-0 right-0 border-1 border-tertiary">
            <LuTrash
              onClick={onRemovefile}
              className="text-red-500 font-extrabold text-lg"
            />
          </div>
        </>
      ) : (
        <>
          <LuUser className=" text-6xl text-secondary"></LuUser>
          <input
            type="file"
            accept="images/*"
            ref={inputRef}
            onChange={handleImageChange}
            hidden
          />
          <div className="w-8 h-8 bg-secondary rounded-full flex justify-center items-center absolute bottom-0 right-0 border-1 border-tertiary">
            <LuUpload
              onClick={onChoosefile}
              className="text-primary font-extrabold text-lg"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePicture;
