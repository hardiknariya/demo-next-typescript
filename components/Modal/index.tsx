import React, { FC } from "react";

interface ModalProps {
  isVisible?: boolean;
  title: string;
  onClickCategory() : void;
  // leftButton: string;
  // rightButton: string;
  // onLeftPress: void;
  // onRightPress: void;
}

const Modal: FC<ModalProps> = (props) => {
  return props.isVisible ? (
    <div id="modal" className="modal">
      <div className="main-container">
        <h4>What do you want to create?</h4>
        <button onClick={props.onClickCategory}>CATEGORY</button>
        <button>SERVICE</button>
      </div>
    </div>
  ) : null;
};

export default Modal;
