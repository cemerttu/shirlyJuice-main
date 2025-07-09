import "./homeComponent.css";
import Navbar from "./componentOne";
import ProfileComponent from "./profileComponent";

function HomeComponent() {
  return (
    <>
      <Navbar />
      <div className="Home-app">
        <div className="Inner-home-app">
          <h1>Welcome to the Home Component</h1>
        </div>
        <ProfileComponent />
      </div>
    </>
  );
}

export default HomeComponent;
