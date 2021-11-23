import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ modalVisible, setModalVisible }) => {
  return ReactDOM.createPortal(
    <>
    { 
      modalVisible ?
      
      <div className="modal-container ui raised very padded text container segment"> 
        <h2>Clear Inintiative</h2>
        <p>Are you sure that you want to end initiative and reset the character list?</p>
        <div className="modal-link-container ui segmented container">
          <a 
            href="javascript:void(0)" 
            className="ui button red"
            onClick={(event) => {setModalVisible(!modalVisible)}}
          >
            Delete Initiative Order
          </a>
          <a 
            href="javascript:void(0)" 
            className="ui button blue"
            onClick={(event) => {setModalVisible(!modalVisible)}}
          >
            No! Take me back!
          </a>
        </div>
      </div>
 
      : null
    }
   </>,
   document.querySelector('#modal-portal')
  );
}

export default Modal;