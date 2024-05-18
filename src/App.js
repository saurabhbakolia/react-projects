import { createElement, useState } from 'react';
import './App.css';
import UpdatingArray from './components/UpdatingArray/UpdatingArray';
import SideBar from './components/SideBar/SideBar';
import { IoMenu } from 'react-icons/io5';

const components = {
  UpdatingArray: UpdatingArray,
}

function App() {
  const [currentComponent, setCurrentComponent] = useState('UpdatingArray');

  return (
    <div className='main-app-div'>
      <IoMenu className='menu-icon' />
      <div className='sidebar-div'><SideBar /></div>
      <div className='component-div'>{currentComponent && createElement(components[currentComponent])}</div>
    </div>
  );
}

export default App;
