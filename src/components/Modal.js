import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ modalVisible, setModalVisible, setCharacterData }) => {

  const resetCharacterData = (event) => {
    event.preventDefault();
    setCharacterData([]);
    setModalVisible(!modalVisible);
  };

  const returnToList = (event) => {
    event.preventDefault();
    setModalVisible(!modalVisible);
  };

  return ReactDOM.createPortal(
    <>
    { 
      modalVisible ?
      
      <div className="modal-container ui raised very padded text container segment"> 
        <h2>Clear Inintiative</h2>
        <p>Are you sure that you want to end initiative and reset the character list?</p>
        <div className="modal-link-container ui segmented container">
          <button
            className="ui button red"
            onClick={(event) => {resetCharacterData(event)}}
          >
            Delete Initiative Order
          </button>
          <button 
            className="ui button blue"
            onClick={(event) => {returnToList(event)}}
          >
            No! Take me back!
          </button>
        </div>
      </div>
 
      : null
    }
   </>,
   document.querySelector('#modal-portal')
  );
}

export default Modal;