import React from 'react'
import NameInputCSS from "./NameInput.module.css"

export default function NameInput(props) {
  return (
    <div className={NameInputCSS.nameDiv}>
      <input 
        className={NameInputCSS.nameInput}
        placeholder="الإسم" 
        value={props.inputValues.name} 
        onChange={e => props.setInputValues({...props.inputValues, name: e.target.value})}
      ></input>
      <p className={NameInputCSS.warning} ref={props.nameWarning}>* يجب ادخال الإسم</p>
    </div>
  )
}