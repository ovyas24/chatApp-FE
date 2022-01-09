import React from 'react'
import './sidebar.css';
import Back from '../../../asset/icons/icons8-back-50.png';

const Header = () => {
    return (
        <div className="header">
            <div className="header_showChannels">
                <div className="header--showChannels--icon">
                    <img src={Back} alt="<" />
                </div>

                <span className='header_title'>
                    All Channels
                </span>
            </div>
        </div>
    )
}

function Sidebar() {
    return (
        <div className='container-side'>
            <Header />
            <div className="section">Section</div>
            <div className="profile">Profile</div>
        </div>
    )
}

export default Sidebar
