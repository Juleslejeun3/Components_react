import React from "react";
import ProfilePhoto from "./ProfilePhoto.jpg";
import "./profile.css"
const MyProfilePhoto = () => {
    return (
    <div>
        <img src={ProfilePhoto} className="profile_photo" alt="photo_profile" />
    </div>
    );
}

export default MyProfilePhoto;