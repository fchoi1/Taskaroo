import {useState} from 'react';
import {NextPage} from 'next';
import Sidebar from '../../components/Sidebar';

interface ProfilePage {
  // Define the props interface here if needed
}

const Profile: NextPage<ProfilePage> = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Sidebar projectName="Name" toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
      <div> This is the about Profile</div>;
    </div>
  );
};

export default Profile;
