import React from 'react';
import './SideBar.css';

const SideBar = ({ components, handleCurrentComponent }) => {
    return (
        <div className='sidebar-div'>
            {Object.keys(components).map((component) => (
                <p
                    key={component}
                    className='component-name'
                    onClick={() => handleCurrentComponent(component)}
                >
                    {component}
                </p>
            ))}
        </div>
    )
}

export default SideBar