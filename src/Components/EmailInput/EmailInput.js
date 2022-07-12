import React from 'react'
import EmailInputCSS from "./EmailInput.module.css"

export default function EmailInput(props) {
  return (
    <div className={EmailInputCSS.emailDiv}>
      <input 
        className={EmailInputCSS.emailInput} 
        placeholder="البريد الإلكتروني" 
        value={props.inputValues.email} 
        onChange={e => props.setInputValues({...props.inputValues, email: e.target.value})}
      ></input>
      <p className={EmailInputCSS.warning} ref={props.emailWarning}>* تاكد من البريد الالكتروني</p>
    </div>
  )
}