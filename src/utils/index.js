
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
export default function PopupGfg() {
    return (
        <div>
            <Popup trigger=
                {<button> Click to open popup </button>}
                position="right center">
                <div>GeeksforGeeks</div>
                <button>Click here</button>
            </Popup>
        </div>
    )
};