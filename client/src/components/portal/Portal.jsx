import React from 'react';
import { VscClose } from 'react-icons/vsc';
import ReactDOM from 'react-dom';
import './style.css';

const Portal = ({children, onClose}) => {
    return ReactDOM.createPortal(
        (<div className="modal-body">
           <div className="modal">
           <VscClose className="icon-portal" onClick={ onClose }/>
           { children }
           </div>
        </div>),
        document.getElementById('portal')
     )
}
export default Portal;