import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import { userData } from "../../lib/dummyData";
import "./profile.scss";

function Profile() {
  return (
    <div className="profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Upload Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar: <img src={userData.img} alt="" />
            </span>
            <span>
              Username: <b>{userData.name}</b>
            </span>
            <span>
              Email: <b>{userData.email}</b>
            </span>
          </div>

          <div className="title">
            <h1>My list</h1>
            <button>Create New Post</button>
          </div>
          <List />

          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatcontainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default Profile;
