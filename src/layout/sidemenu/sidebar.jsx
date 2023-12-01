import React, { useState } from 'react';
import './Sidebar.css';
import { FaHome } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Dynamic array of menu items
  const menuItems = [
    { id: 1, icon: <FaHome />, label: 'Dashboard', },
    { id: 2, icon: <FaHome />, label: 'Tables', },
    { id: 3, icon: <FaHome />, label: 'Users', },
  ];

  return (
    <>
      <nav className={isOpen ? 'open' : ''}>
        <div className="logo">
          <LuMenu onClick={toggleSidebar} className='menu-icon' />
          <span className="logo-name">Microservices</span>
        </div>
        <div className="sidebar">
          <div className="logo">
          <LuMenu onClick={toggleSidebar} className='menu-icon' />
            <span className="logo-name">Microservices</span>
          </div>

          <div className="sidebar-content">
            <ul className="lists">
              {/* Map over the menuItems array to generate dynamic list items */}
              {menuItems.map((item) => (
                <li key={item.id} className="list">
                  <a href={item.link} className="nav-link">
                    <i className='icon'>{item.icon}</i>
                    <span className="link">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="bottom-content">
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="bx bx-cog icon"></i>
                  <span className="link">Settings</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="bx bx-log-out icon"></i>
                  <span className="link">Logout</span>
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
      <section className={`overlay ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}></section>
    </>
  );
};

export default Sidebar;
