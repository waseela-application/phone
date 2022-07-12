import React from 'react'
import PasswordInputCSS from "./PasswordInput.module.css"

export default function PasswordInput(props) {
//functions
  function forget(){
    alert("Move to forget password page")
  }

  function eye(){
    if (props.inputValues.eye === "password"){
      props.setInputValues({ ...props.inputValues, eye: 'text'})
    }
    else{
      props.setInputValues({ ...props.inputValues, eye: 'password'})
    }
  }

  return (
    <div className={PasswordInputCSS.passwordDiv}>
      <input 
        type={props.inputValues.eye} 
        className={PasswordInputCSS.passwordInput} 
        placeholder="كلمة المرور" 
        value={props.inputValues.password} 
        onChange={e => props.setInputValues({...props.inputValues, password: e.target.value})}
      ></input>
      <li id={PasswordInputCSS.eye} className="fa-solid fa-eye" onClick={eye}></li>
      <p className={PasswordInputCSS.forgetPassword} onClick={forget}>{props.forget}</p>
      <p className={PasswordInputCSS.warning} ref={props.passwordWarning}>* استخدام 8 احرف او اكثر تحتوي على حرف كبير و صغير و رمز</p>
    </div>
  )
}