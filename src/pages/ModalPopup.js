import React,{ useState,useEffect }  from 'react';
import ReactDOM from "react-dom";
import Modal from "react-modal";
import './ModalPopup.css'
const customStyles = {
content: {
top: "50%",
left: "50%",
right: "auto",
bottom: "auto",
marginRight: "-50%",
transform: "translate(-50%, -50%)",
},
};

const ModalPopup = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(true);

    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      let body = document.querySelector("body");
      body.style.overflow = "hidden";
    }

    function closeModal() {
      setIsOpen(false);
       let body = document.querySelector("body");
       body.style.overflow = "auto";
    } 
    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <h1>Get now 20% off, type in email below:</h1>
          </div>
          <form>
            <input className="modal-input" placeholder="Enter your email" />
            <div className="btn-con">
              <button type="button" onClick={closeModal} className="btn-send">
                Send
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
}

export default ModalPopup;
