import React, { FC } from "react";

interface ModalProps {
  isVisible: boolean;
  title: string;
  // leftButton: string;
  // rightButton: string;
  // onLeftPress: void;
  // onRightPress: void;
}

const Modal: FC<ModalProps> = (props) => {
  return props.isVisible ? (
    <div id="modal" className="modal">
      <div className="main-container">
        <h1>{props.title}</h1>
      </div>
    </div>
  ) : null;
};

export default Modal;
