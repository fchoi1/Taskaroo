import React from "react";

interface Navbar {
  name: string;
}

// Define functional component
const Navbar: React.FC<Navbar> = () => {
  return <div>This is Navbar !</div>;
};

export default Navbar;
