import { NextPage } from "next";
import Sidebar from "../../components/Sidebar";

interface ProfilePage {
  // Define the props interface here if needed
}

const Profile: NextPage<ProfilePage> = () => {
  return (
    <div>
      <Sidebar name="Name" />
      <div> This is the about Profile</div>;
    </div>
  );
};

export default Profile;
