import { useState } from "react";
import NameForm from "./name";
import "./homeComponent.css";

function ProfileComponent() {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const isSubmitted = username !== ""; // ✅ define condition

  return (
    <div className="profile-component">
      {isSubmitted ? (
        <div className="profile-info">
          <h1>Welcome, {username}!</h1>
          <div className="profile-image">
            {image ? (
              <img src={image} alt="Profile" width="150" />
            ) : (
              <p>No image uploaded yet</p>
            )}
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <p>This is your profile page.</p>
        </div>
      ) : (
        <NameForm onSubmitName={setUsername} />
      )}
    </div>
  );
}

export default ProfileComponent;



