import React, { useState } from 'react'
import './main.css'
import Back from '../../asset/icons/icons8-back-50.png';
import Forward from '../../asset/icons/icons8-forward-50.png';
import Close from '../../asset/icons/icons8-close-50.png';
import Sidebar from './Sidebar/Sidebar';

function Main() {
    const [hide, setHide] = useState(false)
    return (
        <div className='container'>
            <div className={"sidebar " + (hide ? 'hide' : '') }>
                <Sidebar />
            </div>
            <div className={"chat-body " + (hide ? 'hide' : '') }>
                <button className='hideButton' onClick={() => setHide(!hide)}>
                    {
                        hide ? <img src={Forward} alt='forward' /> : <img src={Close} alt='close' />
                    }
                </button>
            </div>
        </div>
    )
}

export default Main
