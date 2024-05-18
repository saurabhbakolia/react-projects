import { createElement, useState } from 'react';
import './App.css';
import UpdatingArray from './components/UpdatingArray/UpdatingArray';
import SideBar from './components/SideBar/SideBar';
import { IoMenu } from 'react-icons/io5';

const components = {
  UpdatingArray: UpdatingArray,
}

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState('UpdatingArray');

  const toggleOpenSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className='main-app-div'>
      <IoMenu className='menu-icon' onClick={toggleOpenSideBar} />
      <div className={`sidebar-div ${isSideBarOpen ? `sidebar-is-open` : ``}`}><SideBar /></div>
      <div className={`component-div ${isSideBarOpen ? `open-side-bar` : ``}`}>
        <p className='scrollme-logo'>SCROLL <span>ME</span></p>
        {currentComponent && createElement(components[currentComponent])}
      </div>
    </div>
  );
}

export default App;
