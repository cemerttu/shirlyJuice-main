import { useState } from "react";
import NameForm from "./name";
import "./homeComponent.css";
function ProfileComponent() {
  const [username, setUsername] = useState("");

  return (
    <div className="profile-component">
      {username ? (
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
