import { NextPage } from "next";
import Sidebar from "../../components/Sidebar";

interface AboutPage {
  // Define the props interface here if needed
}

const About: NextPage<AboutPage> = () => {
  return (
    <div>
      <Sidebar name="Name" />
      <div> This is the about page</div>;
    </div>
  );
};

export default About;
