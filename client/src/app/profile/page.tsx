import { NextPage } from 'next';

interface ProfilePage {
  // Define the props interface here if needed
  children: React.ReactNode;
}

const Profile: NextPage<ProfilePage> = () => {
  return (
    <div>
      <div> This is the about Profile</div>;
    </div>
  );
};

export default Profile;
