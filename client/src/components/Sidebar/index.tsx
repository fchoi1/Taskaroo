import React from "react";

interface Sidebar {
  name: string;
}

// Define functional component
const Sidebar: React.FC<Sidebar> = ({ name }) => {
  return <div>This is the Sidebar created by {name}</div>;
};

export default Sidebar;
