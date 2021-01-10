import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

const Sidebar = () => {

  return <header className="mobile-nav">
    <Menu className="burger-menu">
      <a className="menu-item" href="/">Home</a>
      <a className="menu-item" href="#about">About</a>
      <a className="menu-item" href="#projects">Projects</a>
      <a className="menu-item" href="#contact">Contact</a>
    </Menu>
  </header>

}

export default Sidebar