import React, { FC } from "react";

interface ModalProps {
  title: string;
  // leftButton: string;
  // rightButton: string;
  // onLeftPress: void;
  // onRightPress: void;
}

const Modal: FC<ModalProps> = (props) => {
  return (
    <div id="modal" className="modal">
      <div className="main-container">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default Modal;
