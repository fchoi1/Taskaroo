import { NextPage } from 'next';
import { ReactNode } from 'react';

interface ProfilePage {
  // Define the props interface here if needed
  children: ReactNode;
}

const Profile: NextPage<ProfilePage> = () => {
  return (
    <div>
      <div> This is the about Profile</div>;
    </div>
  );
};

export default Profile;
