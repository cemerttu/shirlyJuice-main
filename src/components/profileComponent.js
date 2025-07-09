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


  return (
    <div className="profile-component">
      {isSubmitted ? (
        <div className="profile-info">
          <div className="profile-image">
            <img src="https://via.placeholder.com/150" alt="Profile" />
          </div>
          <h2>Welcome, {username}!</h2>
          <p>This is your profile page.</p>
        </div> 
      ) : (
        <NameForm onSubmitName={setUsername} />
      )}
    </div>
  );
}

export default ProfileComponent;




