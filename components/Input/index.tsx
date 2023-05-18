import React, { FC, forwardRef, useState } from "react";

interface categoryObj {
  text: string;
  subCategory?: categoryObj[];
  edit: boolean;
  type?: "SERVICE" | "CATEGORY"
}

interface InputProps {
  item: categoryObj;
  onClickAdd(value:string): void;
  onClickEdit(): void;
  onClose(): void;
  onChange?(value:string): void;
  onClickSub() : void;
  // leftButton: string;
  // rightButton: string;
  // onLeftPress: void;
  // onRightPress: void;
}
export type Ref = HTMLButtonElement;

const Input :FC<InputProps>=(props) => {
  const [tempAbyss,setTempAbyss] = useState<string>('');

  return props.item.edit ?  (
    <div className="button-container input-container">
        <input type="text" onChange={(e:any) => setTempAbyss(e.target.value)} value={tempAbyss}  style={{ height:"30px" }} />
        <button className="plus-button p-0" onClick={props.onClose} style={{ backgroundColor:"yellow" }}>
        x
        </button>
        <button className="plus-button p-0" onClick={()=> props.onClickAdd(tempAbyss)} style={{ backgroundColor:"#3fba7f" }}>
        ok
        </button>
    </div>
  ) : (
    <div className="button-container input-container">
        <div className="input-div-container" onClick={props.onClickEdit}>
            <label style={{ height:"30px",color:"white" }} >{props?.item?.text}</label>
        </div>
        <button className="plus-button p-0" onClick={props.onClickSub} style={{ backgroundColor:"#3fba7f" }}>
            +
        </button>
        <button className="plus-button p-0" onClick={props.onClose} style={{ backgroundColor:"yellow" }}>
            x
        </button>
        <button className="plus-button p-0" onClick={()=> props.onClickAdd(tempAbyss)} style={{ backgroundColor:"#3fba7f" }}>
            ok
        </button>
    </div>
    )
};

export default Input;
