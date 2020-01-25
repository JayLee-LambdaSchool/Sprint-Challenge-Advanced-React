import React from 'react';
import {DarkMode} from '../Hooks/DarkMode';

const NavBar = () => {
  const [modeDark, setModeDark] = DarkMode('darkValue', false);

  const modeToggle = e => {
    e.preventDefault();
    setModeDark(!modeDark);
  };

  return (
    <nav className='navbar'>
      <h1>Women's World Cup Players</h1>

      <div className='toggledarkmode'>
        <div
          onClick={modeToggle}
          className={modeDark ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default NavBar;